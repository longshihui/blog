(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{560:function(s,t,a){"use strict";a.r(t);var e=a(12),v=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器端es-module基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器端es-module基础"}},[s._v("#")]),s._v(" 浏览器端ES Module基础")]),s._v(" "),a("p",[s._v("ES Module在浏览器端使用时，需要搞清楚以下几个问题")]),s._v(" "),a("ul",[a("li",[s._v("在编写时，该如何使用？")]),s._v(" "),a("li",[s._v("浏览器是如何去获取模块的？")]),s._v(" "),a("li",[s._v("浏览器对于不同的模块内容是如何处理的？")])]),s._v(" "),a("p",[s._v("以下是目录:")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#如何使用"}},[s._v("如何使用?")])]),a("li",[a("a",{attrs:{href:"#如何获取模块"}},[s._v("如何获取模块?")]),a("ul",[a("li",[a("a",{attrs:{href:"#模块路径规则"}},[s._v("模块路径规则")])]),a("li",[a("a",{attrs:{href:"#模块的获取"}},[s._v("模块的获取")])])])]),a("li",[a("a",{attrs:{href:"#模块内容处理"}},[s._v("模块内容处理")]),a("ul",[a("li",[a("a",{attrs:{href:"#es模块"}},[s._v("es模块")])]),a("li",[a("a",{attrs:{href:"#其他模块化方案"}},[s._v("其他模块化方案")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[s._v("#")]),s._v(" 如何使用?")]),s._v(" "),a("p",[s._v("只需在script标签上标识为es module即可")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script type="module" src="https://unpkg.com/vue@2.6.12/dist/vue.esm.browser.js"><\/script>\n')])])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script type=\"module\">\nimport 'https://unpkg.com/vue@2.6.12/dist/vue.esm.browser.js'\n<\/script>\n")])])]),a("h2",{attrs:{id:"如何获取模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何获取模块"}},[s._v("#")]),s._v(" 如何获取模块?")]),s._v(" "),a("p",[s._v("浏览器获取模块需要处理两个问题：")]),s._v(" "),a("ul",[a("li",[s._v("模块在哪？")]),s._v(" "),a("li",[s._v("该以什么方式去获取模块？")])]),s._v(" "),a("p",[s._v("对于上面的两个问题可以对应以下解决方案")]),s._v(" "),a("ul",[a("li",[s._v("模块定位：规范中的URL")]),s._v(" "),a("li",[s._v("模块获取：以http作为模块获取使用的交换协议")])]),s._v(" "),a("h3",{attrs:{id:"模块路径规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块路径规则"}},[s._v("#")]),s._v(" 模块路径规则")]),s._v(" "),a("p",[s._v("浏览器原生支持4种模块路径，其路径规则和资源定位符规则相同")]),s._v(" "),a("p",[s._v("分为：")]),s._v(" "),a("ul",[a("li",[s._v("相对路径")]),s._v(" "),a("li",[s._v("绝对路径")])]),s._v(" "),a("h4",{attrs:{id:"相对路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对路径"}},[s._v("#")]),s._v(" 相对路径")]),s._v(" "),a("p",[s._v("常见url的前缀如下：")]),s._v(" "),a("ul",[a("li",[s._v("/，相对于域名")]),s._v(" "),a("li",[s._v("./和../，相对于当前页面所在的路径")]),s._v(" "),a("li",[s._v("//，相对于当前域名的协议")])]),s._v(" "),a("p",[a("strong",[s._v("相对于域名")])]),s._v(" "),a("p",[s._v("这里使用的是相对域名前缀")]),s._v(" "),a("p",[s._v("假设当前脚本执行的域名为http://example.com/page1")]),s._v(" "),a("p",[s._v("然后html中有以下的代码")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script type=\"module\">\nimport '/js/test.js'\n<\/script>\n")])])]),a("p",[s._v("则浏览器将会解析该模块路径为")]),s._v(" "),a("p",[s._v("http://example.com/js/test.js")]),s._v(" "),a("p",[a("strong",[s._v("相对于当前路径")])]),s._v(" "),a("p",[s._v("假设当前脚本执行的域名为http://example.com/page1")]),s._v(" "),a("p",[s._v("然后html中有以下的代码")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script type=\"module\">\nimport './js/test.js'\n<\/script>\n")])])]),a("p",[s._v("则浏览器将会解析上述模块路径为")]),s._v(" "),a("p",[s._v("http://example.com/page/js/test.js")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script type=\"module\">\nimport '../js/test.js'\n<\/script>\n")])])]),a("p",[s._v("则浏览器将会解析上述模块路径为")]),s._v(" "),a("p",[s._v("http://example.com/js/test.js")]),s._v(" "),a("p",[a("strong",[s._v("相对协议头的路径")])]),s._v(" "),a("p",[s._v("假设要请求的资源是")]),s._v(" "),a("blockquote",[a("p",[s._v("//unpkg.com/vue@2.6.12/dist/vue.esm.browser.js")])]),s._v(" "),a("p",[s._v("假设当前发起请求的页面域名为https://example.com")]),s._v(" "),a("p",[s._v("编写时：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script type=\"module\">\n    import '//unpkg.com/vue@2.6.12/dist/vue.esm.browser.js';\n<\/script>\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script type="module" src="//unpkg.com/vue@2.6.12/dist/vue.esm.browser.js"><\/script>\n')])])]),a("p",[s._v("将会解析为")]),s._v(" "),a("p",[s._v("https://unpkg.com/vue@2.6.12/dist/vue.esm.browser.js")]),s._v(" "),a("h4",{attrs:{id:"绝对路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绝对路径"}},[s._v("#")]),s._v(" 绝对路径")]),s._v(" "),a("p",[s._v("指的是完整的url路径")]),s._v(" "),a("p",[s._v("例如")]),s._v(" "),a("blockquote",[a("p",[s._v("https://unpkg.com/vue@2.6.12/dist/vue.esm.browser.js")])]),s._v(" "),a("p",[s._v("浏览器会将以该完整路径进行请求")]),s._v(" "),a("h3",{attrs:{id:"模块的获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块的获取"}},[s._v("#")]),s._v(" 模块的获取")]),s._v(" "),a("p",[s._v("浏览器遇到import标签后，会已"),a("strong",[s._v("get")]),s._v("方法去请求对于的资源")]),s._v(" "),a("p",[s._v("它的行为和普通的ajax相同，也区分cors和非cors请求")]),s._v(" "),a("p",[s._v("需要满足的"),a("strong",[s._v("服务器响应条件")])]),s._v(" "),a("ul",[a("li",[s._v("资源所在的服务器Response中声明于javascript相关的Content-Type，例如application/javascript、text/javascript")]),s._v(" "),a("li",[s._v("当遇到跨域时，也会去做于ajax相同的跨域请求处理, 预检、Response头校验")])]),s._v(" "),a("h2",{attrs:{id:"模块内容处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块内容处理"}},[s._v("#")]),s._v(" 模块内容处理")]),s._v(" "),a("p",[s._v("浏览器对于加载成功的模块视为普通的js模块，也会和script标签一样能够自执行")]),s._v(" "),a("p",[s._v("但是对于模块导出部分的处理有差异性")]),s._v(" "),a("ul",[a("li",[s._v("标准的es模块语法")]),s._v(" "),a("li",[s._v("其他模块化方案")])]),s._v(" "),a("h3",{attrs:{id:"es模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es模块"}},[s._v("#")]),s._v(" es模块")]),s._v(" "),a("p",[s._v("对于正常的es模块，导出和导入按照正常的es模块语法即可")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 模块A, 假设路径为//cdn.my.com/a.js\nimport lib from '//example.com/lib.js'\n\nconsole.loe(lib);\n\nexport function say() {\n    console.log('I\\'m A');\n}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 模块B\nimport { say } from '//cdn.my.com/a.js';\nimport * as A from '//cdn.my.com/a.js';\n")])])]),a("h3",{attrs:{id:"其他模块化方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他模块化方案"}},[s._v("#")]),s._v(" 其他模块化方案")]),s._v(" "),a("p",[s._v("Q:为什么要考虑其他模块化方案？")]),s._v(" "),a("p",[s._v("A:因为对于大部分前端生态，还没有支持浏览器端的es module，例如第三方库lodash")]),s._v(" "),a("h4",{attrs:{id:"模块定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块定义"}},[s._v("#")]),s._v(" 模块定义")]),s._v(" "),a("p",[s._v("对于commonjs和amd之类的模块化方案，都会因为require函数或者define函数未定义报错")]),s._v(" "),a("p",[s._v("不过如果在此模块运行之前如果引入了requirejs或者seajs之类的模块，在全局可用的话，还是能正常运行的")]),s._v(" "),a("h4",{attrs:{id:"模块内容导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块内容导出"}},[s._v("#")]),s._v(" 模块内容导出")]),s._v(" "),a("p",[s._v("但是由于此类模块没有使用es语法去导出模块内容，所以无法正常使用import解析模块内容的语法，例如：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// Commonjs\n//\nmodule.exports = {\n    say() {\n        console.log('hello world');\n    }\n}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import {} from '/lib.js'; // throw Error\nimport lib from '/lib.js'; // throw Error\nimport '/.lib.js' // 可以运行\n")])])]),a("p",[s._v("所以要获取非es模块导出的内容，只能通过全局变量来获取，也就只有umd模块支持把模块内容挂载到全局。")])])}),[],!1,null,null,null);t.default=v.exports}}]);