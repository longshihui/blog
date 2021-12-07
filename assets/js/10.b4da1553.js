(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{549:function(t,s,a){t.exports=a.p+"assets/img/vue-bundle-version.33c806d5.png"},550:function(t,s,a){t.exports=a.p+"assets/img/image-20211206221708437.c59c15e5.png"},561:function(t,s,a){"use strict";a.r(s);var e=a(12),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"包入口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包入口"}},[t._v("#")]),t._v(" 包入口")]),t._v(" "),e("p",[t._v("在日常开发中使用别人封装好的npm包是一件很常见的事情，工作中也会提炼自己经常重复性代码变成包分享给其他模块去使用。")]),t._v(" "),e("p",[t._v("当封装一个npm包时，就需要站在包使用者的角度去考虑如何设计你的npm包。")]),t._v(" "),e("p",[t._v("其中最重要的就是“入口”，因为使用你代码都会经过"),e("strong",[t._v("import")]),t._v("或者其他方式被引用，从而读取到npm包里面的内容。")]),t._v(" "),e("p",[t._v("例如打包工具webpack或者rollup，他们会根据一定的规则去查找你的包入口。")]),t._v(" "),e("p",[t._v("例如，在代码里使用vue")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n")])])]),e("h2",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),e("p",[t._v("在vue官网的"),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装章节"),e("OutboundLink")],1),t._v("，你会看到各式各样的构建版本，每一个版本都存放在指定的目录里。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(549),alt:"vue的编译版本"}})]),t._v(" "),e("p",[t._v("那当你在项目里使用vue的时候，打包工具是如何知道它应该使用哪个版本的呢？")]),t._v(" "),e("p",[t._v("这里就需要搞清楚以下几点：")]),t._v(" "),e("ul",[e("li",[t._v("如何声明包的入口？")]),t._v(" "),e("li",[t._v("有哪些包入口的种类？")]),t._v(" "),e("li",[t._v("为什么会出现这些入口种类？")]),t._v(" "),e("li",[t._v("作为"),e("strong",[t._v("包作者")]),t._v("，应该如何正确的声明它？")]),t._v(" "),e("li",[t._v("作为"),e("strong",[t._v("包的使用者")]),t._v("，应该如何正确的使用它？")])]),t._v(" "),e("h2",{attrs:{id:"如何声明包的入口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何声明包的入口"}},[t._v("#")]),t._v(" 如何声明包的入口")]),t._v(" "),e("p",[t._v("npm包都会有一个包描述文件，它叫"),e("strong",[t._v("package.json")]),t._v("，用来描述包的名称、描述、作者、依赖等元信息。")]),t._v(" "),e("p",[t._v("在最新的"),e("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/configuring-npm/package-json#main",target:"_blank",rel:"noopener noreferrer"}},[t._v("package.json规范描述"),e("OutboundLink")],1),t._v("中，罗列了两个目前被npm官方收录的入口字段。\n他们分别是:")]),t._v(" "),e("ul",[e("li",[t._v("main")]),t._v(" "),e("li",[t._v("browser")]),t._v(" "),e("li",[t._v("module")])]),t._v(" "),e("p",[t._v("当然，在社区中存在比较新的模块导出声明，例如：")]),t._v(" "),e("ul",[e("li",[t._v("exports")])]),t._v(" "),e("p",[t._v("具体的声明实例，可以参考vue官方仓库。")]),t._v(" "),e("p",[t._v("例如vue的package.json")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.6.14"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Reactive, component-oriented view layer for modern web interfaces."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/vue.runtime.common.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口文件")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/vue.runtime.esm.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// es module入口文件")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unpkg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/vue.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unpkg.com读取的入口文件")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...其他配置项")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"入口字段的种类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入口字段的种类"}},[t._v("#")]),t._v(" 入口字段的种类")]),t._v(" "),e("h3",{attrs:{id:"main字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#main字段"}},[t._v("#")]),t._v(" main字段")]),t._v(" "),e("p",[t._v("以下是"),e("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/configuring-npm/package-json#main",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档的引用"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v('The main field is a module ID that is the primary entry point to your program. That is, if your package is named foo, and a user installs it, and then does require("foo"), then your main module\'s exports object will be returned.')])]),t._v(" "),e("blockquote",[e("p",[t._v("This should be a module relative to the root of your package folder.")])]),t._v(" "),e("blockquote",[e("p",[t._v("For most modules, it makes the most sense to have a main script and often not much else.")])]),t._v(" "),e("blockquote",[e("p",[t._v("If main is not set it defaults to index.js in the packages root folder.")])]),t._v(" "),e("p",[t._v("翻译过来就是：")]),t._v(" "),e("ul",[e("li",[t._v("main是程序的"),e("strong",[t._v("主要入口")])]),t._v(" "),e("li",[e("strong",[t._v("main的值")]),t._v("，应该使用相对路径，相对于包的根目录。")]),t._v(" "),e("li",[e("strong",[t._v("默认main的值")]),t._v("，如果你没有指定main字段，将默认将根目录下的"),e("strong",[t._v("index.js")]),t._v("作为入口文件")])]),t._v(" "),e("h4",{attrs:{id:"历史渊源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#历史渊源"}},[t._v("#")]),t._v(" 历史渊源")]),t._v(" "),e("p",[t._v("main应该是最早前端模块化的产物，最早是和package.json一起出现的。")]),t._v(" "),e("p",[t._v("也就是node.js & npm出现的时候，是在2009年的时候，nodejs当时为了提升HTTP Server的并发数而产出的项目，而npm诞生于2010年，主要是为了分享nodejs的源码以及类库，而main字段就是作为当时nodejs模块的入口来使用。")]),t._v(" "),e("p",[t._v("随着大前端时代的到来，浏览器端的应用规模爆炸式增长，而当时es module还不是很成熟，早期大家使用的模块化规范还停留在amd，commonjs的模块化规范，也就是通常写的es5的代码，当时作为早起的客户端包管理工具bower。")]),t._v(" "),e("p",[t._v("后来npm开始出现客户端的类库，例如react，等等，npm也从最早的nodejs类库管理工具  -> javascript包管理工具")]),t._v(" "),e("p",[t._v("而早期es5的模块化下，main字段还是够用的。")]),t._v(" "),e("h3",{attrs:{id:"browser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#browser"}},[t._v("#")]),t._v(" browser")]),t._v(" "),e("p",[t._v("它和"),e("strong",[t._v("main")]),t._v("字段类似，它用于声明该包是被使用于浏览器，相当于变相提示用户，该包并不适用于非浏览器执行环境。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json#browser",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" module")]),t._v(" "),e("p",[t._v("module为es module的入口指向。当当前包被es module引用时，包管理工具会优先根据此字段，去查找对应的模块。")]),t._v(" "),e("p",[t._v("它一般作为当前包的esm版本的导出。")]),t._v(" "),e("h3",{attrs:{id:"exports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exports"}},[t._v("#")]),t._v(" exports")]),t._v(" "),e("p",[t._v("exports 出现在nodejs v12.7.0版本中，引用"),e("a",{attrs:{href:"https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("：")]),t._v(" "),e("blockquote",[e("p",[t._v('The "exports" field allows defining the entry points of a package when imported by name loaded either via a node_modules lookup or a self-reference to its own name. It is supported in Node.js 12+ as an alternative to the "main" that can support defining subpath exports and conditional exports while encapsulating internal unexported modules.')])]),t._v(" "),e("p",[t._v("它设计目的：")]),t._v(" "),e("ul",[e("li",[t._v("替换main字段")]),t._v(" "),e("li",[t._v("定义包的多个入口，以备被import或者require使用")]),t._v(" "),e("li",[t._v("用于实现"),e("a",{attrs:{href:"https://nodejs.org/api/packages.html#subpath-exports",target:"_blank",rel:"noopener noreferrer"}},[t._v("Subpath exports"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("用于实现"),e("a",{attrs:{href:"https://nodejs.org/api/packages.html#conditional-exports",target:"_blank",rel:"noopener noreferrer"}},[t._v("Conditional exports"),e("OutboundLink")],1),t._v("，来区分不同环境下的导入")])]),t._v(" "),e("h4",{attrs:{id:"conditional-exports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conditional-exports"}},[t._v("#")]),t._v(" Conditional exports")]),t._v(" "),e("p",[t._v("它意味条件导出。因为nodejs的发展，nodejs也开始支持原生es module，但是又因为历史原因，仍大量存在commonjs的模块范式，commonjs模块范式使用require来导入模块。")]),t._v(" "),e("p",[t._v("为了兼容不同环境的使用，包设计者可以在package.json中声明不同包在不同模块范式下的使用方式。")]),t._v(" "),e("p",[t._v("例如:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./main-require.cjs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exports"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"import"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./main-module.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"require"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./main-require.cjs"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("根据以上定义可以推断出以下结论")]),t._v(" "),e("ul",[e("li",[t._v("type: module，意思是该包使用的是nodejs原生的es module进行开发")]),t._v(" "),e("li",[t._v("main 是为了兼容nodejs < 12的用户")]),t._v(" "),e("li",[t._v("exports 是用来声明具体环境下的使用，仅限于nodejs > 12。\n"),e("ul",[e("li",[t._v("当用户使用commonjs来requrie时，nodejs将会加载"),e("code",[t._v("./main-require.cjs")])]),t._v(" "),e("li",[t._v("当用户使用es module来import时，nodejs将会加载"),e("code",[t._v("./main-require.js")])])])])]),t._v(" "),e("p",[t._v("完整的说明文档，请参见官方"),e("a",{attrs:{href:"https://nodejs.org/api/packages.html#conditional-exports",target:"_blank",rel:"noopener noreferrer"}},[t._v("Conditional exports"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"subpath-exports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subpath-exports"}},[t._v("#")]),t._v(" Subpath exports")]),t._v(" "),e("p",[t._v("Subpath exports为子路径的快捷导出。")]),t._v(" "),e("p",[t._v("曾经使用某个包时，如果想要使用非main字段指定的文件时，需要满足两个条件")]),t._v(" "),e("ol",[e("li",[t._v("包作者需要将源代码一起publish到npm仓库")]),t._v(" "),e("li",[t._v("用户需要知道包的目录结构")])]),t._v(" "),e("p",[t._v("例如，当你在使用element-ui进行业务开发时，忽然你发现你对element-ui的"),e("code",[t._v("el-scrollbar")]),t._v("组件感兴趣，你想要引用它，但是它并没出现在element-ui 显式exports中，然后你就会在自己的代码中写下如下代码")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ElScrollbar "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui/packages/el-scrollbar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("这显然是不可靠的，原因有两点：")]),t._v(" "),e("ol",[e("li",[t._v("如果有一天，作者改变了包的目录结构，你的代码就会开始大量报错，提示你包路径未找到")]),t._v(" "),e("li",[t._v("如果有一天，作者删除了该组件，你的代码需要面临大面积重构，然而仓库作者并不需要承担什么，因为他们的确没有告诉你这个组件是提供给用户使用的！")])]),t._v(" "),e("p",[t._v("而"),e("strong",[t._v("Subpath exports")]),t._v("恰恰就是为了解决这一点，让包作者能够"),e("strong",[t._v("显式")]),t._v("告诉你，哪些文件是"),e("strong",[t._v("可用的")]),t._v("。")]),t._v(" "),e("p",[t._v("并且，它会缩短你引用某一个模块的"),e("strong",[t._v("引用路径")])]),t._v(" "),e("p",[t._v("例如:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./main.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exports"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"."')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./main.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"./submodule"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/submodule.js"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("用户可以通过如下代码使用"),e("strong",[t._v("submodule.js")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" submodule "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es-module-package/submodule'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Loads ./node_modules/es-module-package/src/submodule.js")]),t._v("\n")])])]),e("p",[t._v("当用户引用非显式导出的模块时，nodejs将会抛出一个错误")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" submodule "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es-module-package/private-module.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Throws ERR_PACKAGE_PATH_NOT_EXPORTED")]),t._v("\n")])])]),e("h2",{attrs:{id:"作为包的作者-该如何声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作为包的作者-该如何声明"}},[t._v("#")]),t._v(" 作为包的作者，该如何声明？")]),t._v(" "),e("p",[t._v("如果你作为一个包的作者，你应该尽可能的满足你的用户，最大限度和努力兼容用户的使用环境。")]),t._v(" "),e("p",[t._v("对于我个人的总结，包在不同适用环境，可选和必选声明的字段如下")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("客户端")]),t._v(" "),e("th",[t._v("Nodejs")]),t._v(" "),e("th",[t._v("客户端&Nodejs (例如SSR场景)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("main")]),t._v(" "),e("td",[t._v("需要")]),t._v(" "),e("td",[t._v("需要")]),t._v(" "),e("td",[t._v("需要")])]),t._v(" "),e("tr",[e("td",[t._v("browser")]),t._v(" "),e("td",[t._v("需要")]),t._v(" "),e("td",[t._v("不需要")]),t._v(" "),e("td",[t._v("需要")])]),t._v(" "),e("tr",[e("td",[t._v("module")]),t._v(" "),e("td",[t._v("需要 (提供给打包工具优化)")]),t._v(" "),e("td",[t._v("需要")]),t._v(" "),e("td",[t._v("需要")])]),t._v(" "),e("tr",[e("td",[t._v("exports")]),t._v(" "),e("td",[t._v("可选")]),t._v(" "),e("td",[t._v("Nodejs < 12时，无需声明"),e("br"),t._v("Nodejs >= 12时，可选声明")]),t._v(" "),e("td",[t._v("可选")])])])]),t._v(" "),e("h2",{attrs:{id:"作为包的使用者-如何正确使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作为包的使用者-如何正确使用"}},[t._v("#")]),t._v(" 作为包的使用者，如何正确使用?")]),t._v(" "),e("h3",{attrs:{id:"webpack的玩家"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack的玩家"}},[t._v("#")]),t._v(" webpack的玩家")]),t._v(" "),e("p",[t._v("需要小心exports的支持情况，目前webpack5的支持情况见"),e("a",{attrs:{href:"https://webpack.js.org/guides/package-exports/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("对于传统的browser，module，main，webpack有自己的解析优先级，如果要改变其优先级，参考resolve.mainFields配置，"),e("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolvemainfields",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  resolve"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mainFields"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'browser'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"rollup-或者-vite玩家"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rollup-或者-vite玩家"}},[t._v("#")]),t._v(" Rollup 或者 Vite玩家")]),t._v(" "),e("p",[t._v("对于exports, 目前已被实现于@rollup/plugin-node-resolve插件的 >= 7.1.3版本")]),t._v(" "),e("p",[e("img",{attrs:{src:a(550),alt:"image-20211206221708437"}})]),t._v(" "),e("p",[t._v("对于其他browser，module，main的情景，优先级配置被实现于@rollup/plugin-node-resolve的配置项的"),e("a",{attrs:{href:"https://github.com/rollup/plugins/tree/master/packages/node-resolve#mainfields",target:"_blank",rel:"noopener noreferrer"}},[t._v("mainFields"),e("OutboundLink")],1),t._v("中。")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm package.json 文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions",target:"_blank",rel:"noopener noreferrer"}},[t._v("package.json field definitions"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://medium.com/swlh/npm-new-package-json-exports-field-1a7d1f489ccf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.JS (New) Package.json Exports Field"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Node.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js Wiki百科"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);