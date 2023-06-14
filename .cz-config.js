const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const packages = fs
.readdirSync(path.resolve(__dirname, 'packages'), { withFileTypes: true })
.filter(file => file.isDirectory())
.map(m => m.name);

const defaultScope = execSync('git status --porcelain || true')
.toString()
.trim()
.split('\n')
.find((r) => /M\s+packages/.test(r))
?.replace(/(\/)/g, '%')
?.match(/packages%((\w|-)*)/)?.[1];
module.exports = {
	types: [
		{ value: 'init',     name: 'init:     初始提交' },
		{ value: 'feat',     name: 'feat:     增加新功能' },
		{ value: 'fix',      name: 'fix:      修复bug' },
		{ value: 'refactor', name: 'refactor: 代码重构' },
		{ value: 'release',  name: 'release:  发布' },
		{ value: 'deploy',   name: 'deploy:   部署' },
                { value: 'ci',       name: 'ci:       持续集成'},
		{ value: 'docs',     name: 'docs:     修改文档' },
		{ value: 'test',     name: 'test:     单元测试' },
		{ value: 'chore',    name: 'chore:    更改配置文件' },
		{ value: 'style',    name: 'style:    样式修改不影响逻辑' },
		{ value: 'revert',   name: 'revert:   版本回退' },
		{ value: 'depend',   name: 'depend:   依赖调整' },
		{ value: 'perf',     name: 'perf:     性能优化' },
		{ value: 'build',    name: 'build:    打包构建'}
	],
	scopes: [
		...packages,
                'project'
	],
	messages: {
		type: '选择更改类型:\n',
		// 如果allowcustomscopes为true，则使用
		scope: '当前提交修改的scope:\n',
		// customScope: '请输入自定义的scope:',
		subject: '简短描述(必填):\n',
		body: '详细描述. 使用"|"换行:\n',
		breaking: '破坏性更新列表:\n',
		footer: '关闭的issues列表. E.g.: #31, #34:\n',
		confirmCommit: '确认提交?'
	},
	subjectLimit: 200, 
	defaultScope,
	allowCustomScopes: true,
	allowBreakingChanges: ['feat', 'fix'],
}
