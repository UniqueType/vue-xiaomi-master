# vue-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8099
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
<!-- 文件介绍 -->

<!-- build -->
	这个是我们最终发布的时候会把代码发布在这里，在开发阶段，我们基本不用管。
	是一些webpack的文件，配置参数什么的
	# webpack.base.conf.js  在这个文件中，设置了main.js是文件入口，项目默认访问index.html，
		在index.html中有一个id为App 和App.vue组件中的容器完美的重合了，也就是把组件挂载到了index页面，
		然后我们只需要去建设其他组件就好了。在App组件中我们也可以引入，注册，应用其他组件。
<!-- config -->
	vue项目的基本配置文件
	配置目录，默认配置没有问题，所以我们也不用管
<!-- node_modules -->
	这个目录是存放我们项目开发依赖的一些模块，这里面有很多很多内容，不过高兴的是，我们也不用
<!-- src -->
	我们的开发目录，基本上绝大多数工作都是在这里开展的
	# common

	# components 组件文件夹

	# pages 页面文件

	# util  工具类
		http			mockdata和http方法，调用接口方法
		index
		mockService  模拟数据

	# App.vue 项目入口文件。
	# main.js  项目核心文件（也是入口文件）。全局的配置都在这个文件中。

	# route.js

<!-- static -->
	资源目录，我们可以把一些图片啊，字体啊，放在这里。

<!-- test -->
	初始测试目录，没用，删除即可

<!-- .babelrc -->
	定义ES6的转码规则，基于ES6编写的js代码在编译时都会被babel转码器转换为ES5代码
<!-- .editorconfig -->
	编辑器配置文件

<!-- .eslintignore -->

<!-- .xxxx文件 -->
	这些是一些配置文件，包括语法配置，git配置等。基本不用管，放着就是了

<!-- .eslintrc.js -->

<!-- index.html -->
	主页，	首页入口文件，基本不用管，
	如果是开发移动端项目，可以在head区域加上你合适的meta头
	可以引入一些插件或静态资源
	引入之前要先安装该插件，需要在package.json文件中有记录

<!-- npm-debug.log -->


<!-- package.json -->
	整个项目所需要的各种模块，以及项目的配置信息.
	npm install 命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

