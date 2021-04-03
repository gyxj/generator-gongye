// Generator 的核心入口文件
// 需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动嗲用我们在此类型中定义的一些声明周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如写入文件
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
	prompting() {
		// Yeoman 在询问用户环节会自动调用此方法
		// 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行询问
		return this.prompt([	// 数组中的每一个对象是一个问题
			{
				type: 'input',
				name: 'name',
				message: 'Your project name',
				default: this.appname // appname 是用户项目生成目录的文件夹名字
			},
			{
				type: 'input',
				name: 'description',
				message: 'Your project description',
				default: '好好学习，天天长胖！'
			}
		])
		.then(answers => {
			this.answers = answers
		})
	}
	writing() {
		// Yeoman 自动在生成文件阶段调用此方法
		// 我们这里尝试往项目目录中写入文件
		// this.fs.write(		// 接收两个参数，第一个是绝对路径，第二个是写入的内容
		// 	this.destinationPath('self.txt'),
		// 	'好好学习，天天长胖！'
		// )

		// 使用模板的方式，接收3个参数， 模板文件路径 输出目标路径 模板数据上下文

		// 模板文件路径
		const tmpl = this.templatePath('self.html')
		// 输出目标路径
		const output = this.destinationPath('self.html')
		// 模板数据上下文
		const context = this.answers

		this.fs.copyTpl(tmpl, output, context)
	}
}