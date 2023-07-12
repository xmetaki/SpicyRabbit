#!/usr/bin/env node
import chalk from 'chalk'
import inquirer from 'inquirer'
import { readFile } from 'fs/promises'
const pkg = JSON.parse(
  await readFile(
    new URL('../package.json', import.meta.url)
  )
)
const name = chalk.white.bold.bgRedBright(" 🐇 RabbitCli ")
const version = chalk.white.bold.bgMagenta(` v${pkg.version} `)
console.log(`${name} ${version}`)
inquirer.prompt([
    {
        type:"input",
        name:"componentName",
        message:"请输入要创建的组件"
    }
]).then(answer => {
    console.log(answer)
})