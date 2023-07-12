import chalk from 'chalk'
import fg from 'fast-glob'
import { readFile, writeFile, appendFile } from 'node:fs/promises'
import fs from 'node:fs'
import path from 'node:path'
const ENV = {
    ROOT: "",
    COM_NAME: "",
    COM_NAME_UPPERCASE: "",
}
const eraseInjectVariable = (content) => {
    return (content || "").replace(/\${(.*?)}/g, (_, r) => {
        return ENV[r]
    })
}
/**
 * 将.json文件解析成对象
 * @param {String} location 文件绝对路径
 * @returns { Object } 解析后的对象
 */
async function parsedJson(location) {
    return JSON.parse(
        await readFile(
            location
        )
    )
}

/**
 * 获取模板配置绝对路径
 * @returns 模板配置
 */
function getTemplateLocation() {
    const templateUrl = new URL(
        "../template",
        import.meta.url
    )
    const tplList = fg.sync('**/manifest.json', {
        cwd: templateUrl.pathname,
        deep: 2,
        absolute: true
    })
    return tplList
}

/**
 * 解析模板并执行写入
 * @param {Object} manifest 元信息对象
 * @param {String} location 元信息文件位置
 */
function parseTpl(manifest, location) {
    Object.keys(manifest).forEach(key => {
        const tplPath = eraseInjectVariable(path.join(location, `../${key}.tpl`))

        // TODO:策略模式抽象
        if (manifest[key].type == 'create') {
            createTpl(manifest[key], tplPath)
        } else if (manifest[key].type == 'replace') {
            replaceTpl(manifest[key], tplPath)
        } else if (manifest[key].type == 'append') {
            appendTpl(manifest[key], tplPath)
        }
    })
}

/**
 * 根据模板创建文件
 * @param {Object} config 模板配置 
 * @param {String} location 模板文件绝对路径
 */
function createTpl(config,location) {
    const targetFolder = eraseInjectVariable(config.loc)
    const targetName = eraseInjectVariable(config.name)
    const target = `${targetFolder}${targetName}`
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, {
            recursive: true
        })
    }
    readFile(location, 'utf-8').then(data => {
        data = eraseInjectVariable(data)
        writeFile(target, data, 'utf-8')
    })
}

function appendTpl(config, location) {
    const targetFile = eraseInjectVariable(config.loc)
    readFile(location, 'utf8').then(data => {
        data = eraseInjectVariable(data)+'\n'
        appendFile(targetFile, data, 'utf-8')
    })
}

async function replaceTpl(config, location) {
    if (!config?.replace?.source || !config?.replace?.target) return
    const targetFile = eraseInjectVariable(config.loc)
    const rawTpl = await readFile(location, 'utf8')
    const tpl = eraseInjectVariable(rawTpl)

    const targetRaw = await readFile(targetFile, 'utf8')
    const [,pattern, flag ] = /\/(.*?)\/(\w?)/.exec(config.replace.source)
    const targetReplace = config.replace.target.replace(/#{(.*?)}/g, (s, r) => {
        if (r == 'CONTENT') {
            return tpl
        }
    })
    const target = targetRaw.replace(new RegExp(pattern, flag), targetReplace)
    writeFile(targetFile, target, 'utf-8')
}

/**
 * 入口文件
 * @param {Object} options 控制台输入对象
 * @returns 
 */
export default async function resovleInput(options) {
    const comName = options.componentName
    // 合法性判断
    if (!comName || !/^[a-zA-Z]*$/.test(comName)) {
        console.log(chalk.red("❌ 请输入合法的组件名称(纯英文)"))
        return
    }

    
    const prjRoot = new URL(
        "..",
        import.meta.url,        
    ).pathname
    const alreadyHave = fg.sync('*', {
        cwd: path.join(prjRoot, '../../packages/components'),
        onlyDirectories: true,
        deep: 1
    })
    if (alreadyHave.includes(comName)) {
        console.log(chalk.red(`❌ ${comName}名称已被占用!`))
        return
    }

    //初始化环境变量
    ENV.ROOT = prjRoot
    ENV.COM_NAME = comName
    ENV.COM_NAME_UPPERCASE = `${comName.charAt(0).toUpperCase()}${comName.slice(1)}`;

    const tplList = getTemplateLocation()
    await Promise.all(tplList.map(async tpl => {
        const res = await parsedJson(tpl)
        parseTpl(res, tpl)
    }))

    console.log(chalk.green(`✔ 创建${comName}组件成功!`))

}