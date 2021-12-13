---
title: 你不知道的Virtual DOM
date: 2021-12-13
categories:
 - Web
tags:
 - MVVM
 - javascript
---

# 你不知道的Virtual DOM

目录

- 什么是Virtual DOM?
- Virtual DOM解决了什么问题？
- Virtual DOM由哪些组成部分?
- 如何对Virtual DOM更细粒度控制？
- 适用场景及实战案例

## 什么是Virtual DOM？

VNode全称Virtual DOM，叫虚拟DOM，是目前主流MVVM前端框架的组成部分。

最初诞生的目的是前端工程化解决方案中的一个技术点。

主要的职责如同**DOM元素一样**，用于**描述页面**的结构。

你可能会问，那为什么Vue，React等主流MVVM框架为什么不直接用DOM？

这就不得不提VNode的特点了。

## Virtual DOM解决了什么问题？

解决了目前阶段Web开发的工程化问题。

这就不得不提MVVM框架，Vue和React等等都是MVVM框架的实现。

回顾一下，历史阶段是如何开发一个页面的。

1. 获取数据：我们要从后端服务器拿到数据结构Model，然后保存到一个地方
2. 创建视图：可能使用模板引擎去描述我们的页面结构。
3. 渲染到视图：将Model结合模板引擎，获得新的页面结构片段.
4. 监听视图变化更新数据：监听DOM元素的事件，用户操作等，等待新的Model变更。
5. 将新的变化再一次渲染到视图：当用户操作页面后会得到新的Model，将Model根据相应的预设逻辑进行更新，并同步到视图中。
6. 提交到服务器：将新的Model更新到数据库。

而现阶段，使用MVVM框架是如何开发一个页面的呢？

1. 获取数据：我们要从后端服务器拿到数据结构Model，然后保存到一个地方
2. 描述视图：描述页面的结构(VNode or VNode Template)。
3. 绑定到视图：将Model丢给MVVM框架，由VM来维护视图和数据间的关系和变化。
4. 提交到服务器：将新的Model更新到数据库。

原来需要手动维护的**渲染到视图、监听视图变化更新数据、将新的变化再一次渲染到视图**，这三层关系，**由MVVM框架来统一托管**。

其中MVVM里的vm，最核心的就是使用Virtual DOM来维护页面。

那么为什么数据同步需要用到Virtual DOM？

**第一，它没有DOM Element那么重**

Diff性能高，VNode相当于阉割版的DOM Element，属性少，相比DOM Element，需要Diff的东西少。

// TODO 补充VNode实例和DOM Element对比图

**第二，增强了组件化的实现**

1. 提前尝鲜。VNode可以实现插槽(Slot)等Web Component里才有的前沿技术，并把它们搬到大多数浏览器上。
2. 提升代码可维护性，开发者能够在创建自己页面的时候，能够更佳直观的知道代码中的模块关系。

## Virtual DOM由哪些组成部分?

这里仅仅讨论Vue里的Virtual DOM实现，Virtual DOM由一个个VNode组成，VNode由以下几个部分组成

- 入参：Props和DOM Props和DOM Attrs
- 样式: class和style
- 事件: on和nativeOn
- 插槽: slot和scopedSlots

有了以上信息，就足够描述我们的页面了。

## 如何对Virtual DOM更细粒度控制？

### SFC(单文件组件)

移除template元素，使用render函数代替

```vue
<script>
    // Vue组件
    export default {
        render(createElement) {
            // <div id="el"></div>
            return createElement(
                'div', 
                {
                    attrs: {
                        id: 'el'
                    }
                }, 
                ['I\'m a div']
            )
        }
    }
</script>
```

使用vue的jsx语法可以更直观

```jsx
<script>
    // Vue组件
    export default {
        render() {
            // <div id="el"></div>
            return (
                <div id="el"></div>
            )
    }
</script>
```



### 在js文件中

VNode的创建和jsx其实也可以在普通的js文件中使用，只需要引用了vue的createElement函数即可

```js
/**
* 创建select元素
* @param {VueComponent.createElement} createElement
* @param {Array<{ label: string, value: string }>} options
* @example
* <select>
*  <option value="a"> A </option>
*  <option value="b"> B </option>
* </select>
*/
function genSelectVNode(createElement, options) {
    const optionsVNodeList = options.map(function ({ label, value }) {
        return createElement('option', { value }, label);
    });
    return createElement('select', optionsVNodeList);
}
```

也可以使用jsx

```jsx
/**
* 创建select元素
* @param {VueComponent.createElement} createElement
* @param {Array<{ label: string, value: string }>} options
* @example
* <select>
*  <option value="a"> A </option>
*  <option value="b"> B </option>
* </select>
*/
function genSelectVNode(createElement, options) {
    const optionsVNodeList = options.map(function ({ label, value }) {
        return <option value={value}>{label}</option>
    });
    return <select>{optionsVNodeList}</select>
}
```



## 适用场景及实战案例

### 创建函数式组件

创建一个Alert，用于提示用户的信息

```jsx
// MyAlert.js
import Vue from 'vue';

const ContainerStyles =  {
    width: '400px',
    height: '300px',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

function MyAlert(messageGenerator) {
    const MyAlertComponent = Vue.extend({
       name: 'MyAlert',
       render(createElement) {
           const content = messageGenerator(createElement);
           
           return (
               <div style={ContainerStyles}>{content}</div>
           )
       }
    })
    
    const alert = MyAlertComponent();
    
    alert.$mount();
    
    document.body.append(alert.$el);
}

export default MyAlert;
```

调用方

````js
import MyAlert from './MyAlert.js';

MyAlert(function (createElement) {
    return createElement('p', {
        style: {
            color: 'red'
        }
    }, '测试')
});
````

### 设计灵活度更高的组件

设计可配置化的代码

### 组件的单元测试

组件的单元测试可以完全不依赖于浏览器环境而在Node环境下执行，完成对组件的单元测试。

### 服务器端渲染

对于需要良好SEO的网站而言，可以利用Virtual DOM更容易的复用前端的代码实现服务端渲染，并且实现前端代码的复用和服务端渲染技术的同构，降低维护成本。
