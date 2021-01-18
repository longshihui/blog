---
title: 浏览器ES Module基础
date: 2020-12-11 17:07:45
categories:
 - Web
tags:
 - Javascript
 - Web规范
---

# 浏览器端ES Module基础

ES Module在浏览器端使用时，需要搞清楚以下几个问题

- 在编写时，该如何使用？
- 浏览器是如何去获取模块的？
- 浏览器对于不同的模块内容是如何处理的？

以下是目录:

[[toc]]

## 如何使用?

只需在script标签上标识为es module即可

```
<script type="module" src="https://unpkg.com/vue@2.6.12/dist/vue.esm.browser.js"></script>
```

或者

```
<script type="module">
import 'https://unpkg.com/vue@2.6.12/dist/vue.esm.browser.js'
</script>
```

## 如何获取模块?

浏览器获取模块需要处理两个问题：

- 模块在哪？
- 该以什么方式去获取模块？

对于上面的两个问题可以对应以下解决方案

- 模块定位：规范中的URL
- 模块获取：以http作为模块获取使用的交换协议

### 模块路径规则

浏览器原生支持4种模块路径，其路径规则和资源定位符规则相同

分为：

- 相对路径
- 绝对路径

#### 相对路径

常见url的前缀如下：

- /，相对于域名
- ./和../，相对于当前页面所在的路径
- //，相对于当前域名的协议

**相对于域名**

这里使用的是相对域名前缀

假设当前脚本执行的域名为http://example.com/page1

然后html中有以下的代码

```
<script type="module">
import '/js/test.js'
</script>
```

则浏览器将会解析该模块路径为

http://example.com/js/test.js

**相对于当前路径**

假设当前脚本执行的域名为http://example.com/page1

然后html中有以下的代码

```
<script type="module">
import './js/test.js'
</script>
```

则浏览器将会解析上述模块路径为

http://example.com/page/js/test.js

```
<script type="module">
import '../js/test.js'
</script>
```
则浏览器将会解析上述模块路径为

http://example.com/js/test.js

**相对协议头的路径**

假设要请求的资源是

> //unpkg.com/vue@2.6.12/dist/vue.esm.browser.js

假设当前发起请求的页面域名为https://example.com

编写时：

```
<script type="module">
    import '//unpkg.com/vue@2.6.12/dist/vue.esm.browser.js';
</script>
```

```
<script type="module" src="//unpkg.com/vue@2.6.12/dist/vue.esm.browser.js"></script>
```

将会解析为

https://unpkg.com/vue@2.6.12/dist/vue.esm.browser.js

#### 绝对路径

指的是完整的url路径

例如

> https://unpkg.com/vue@2.6.12/dist/vue.esm.browser.js

浏览器会将以该完整路径进行请求

### 模块的获取

浏览器遇到import标签后，会已**get**方法去请求对于的资源

它的行为和普通的ajax相同，也区分cors和非cors请求

需要满足的**服务器响应条件**

- 资源所在的服务器Response中声明于javascript相关的Content-Type，例如application/javascript、text/javascript
- 当遇到跨域时，也会去做于ajax相同的跨域请求处理, 预检、Response头校验

## 模块内容处理

浏览器对于加载成功的模块视为普通的js模块，也会和script标签一样能够自执行

但是对于模块导出部分的处理有差异性

- 标准的es模块语法
- 其他模块化方案

### es模块

对于正常的es模块，导出和导入按照正常的es模块语法即可

```
// 模块A, 假设路径为//cdn.my.com/a.js
import lib from '//example.com/lib.js'

console.loe(lib);

export function say() {
    console.log('I\'m A');
}
```

```
// 模块B
import { say } from '//cdn.my.com/a.js';
import * as A from '//cdn.my.com/a.js';
```

### 其他模块化方案

Q:为什么要考虑其他模块化方案？

A:因为对于大部分前端生态，还没有支持浏览器端的es module，例如第三方库lodash

#### 模块定义

对于commonjs和amd之类的模块化方案，都会因为require函数或者define函数未定义报错

不过如果在此模块运行之前如果引入了requirejs或者seajs之类的模块，在全局可用的话，还是能正常运行的

#### 模块内容导出

但是由于此类模块没有使用es语法去导出模块内容，所以无法正常使用import解析模块内容的语法，例如：

```
// Commonjs
//
module.exports = {
    say() {
        console.log('hello world');
    }
}
```

```
import {} from '/lib.js'; // throw Error
import lib from '/lib.js'; // throw Error
import '/.lib.js' // 可以运行
```

所以要获取非es模块导出的内容，只能通过全局变量来获取，也就只有umd模块支持把模块内容挂载到全局。
