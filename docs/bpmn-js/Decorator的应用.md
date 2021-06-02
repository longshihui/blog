---
title: Decorator在bpmn-js中的应用（一）
date: 2021-6-2 17:58:26
categories:
 - Web
tags:
 - Javascript
 - Web规范
 - Bpmn-js
---

# Decorator在bpmn-js中的应用（一）

本篇文章主要内容为在使用开源的bpmn-js进行自定义建模器时，js的装饰器模式在编码设计时的应用，以及一些设计技巧。

[[toc]]

## 装饰器的基础知识

如果是开发React的小伙伴或者是使用ts编写vue2.0的来进行开发的小伙伴肯定对装饰器很熟悉。

它主要用来修饰es6里的class，也就是类。

**装饰**，在现实的生活里，一个物品的装饰品，是可有可无的，也就是你把装饰去掉，这个东西还是一个完整的物品，不会因为装饰品的变化，而导致物品本身主体功能的变化。

在编码层面就涉及到设计模式“装饰器模式”，在java的世界里最典型的案例就是给一个接口加日志。

实际的代码看起来长这样

```js
@ClassDecorator
class BpmnModuleImp {
    @MethodDecorator
    method() {
        console.log('call method!');
    }
}
```

它可以修饰

- 类本身
- 类的方法
- 类的属性

装饰器本身的实现方法，请参考[ECMAScript 6入门 - 装饰器](https://es6.ruanyifeng.com/#docs/decorator)

因为装饰器的提案仍在变动，所以目前使用的还是老的装饰器规范。

## 为什么要用装饰器

在流程引擎建模器的实现里，核心依赖了Bpmn-js，它使用的架构是类似于java的依赖注入的方式，每一个完整的功能特性都是一个模块，在代码实现时，模块的具体表现为一个class类。

### Bpmn-js的模块定义

类似如下：

```js
// 某一个Feature的模块
export default class FeatureModule {
    static $inject = ['eventBus'];
    constructor(eventBus) {
        this._eventBus = eventBus;
    }
}
```

代码分析：

- 声明依赖；它使用静态变量**$inject**来声明。
- 依赖注入；依赖注入都会通过类的构造函数将依赖模块的实例注入到当前的模块里。
- 私有化依赖；为了将依赖的模块提供给其他类方法使用，大部分场景下都会手动的将依赖的模块私有化成成员变量。

### Bpmn-js模块编码时的问题

对于bpmn-js模块定义，在实际编码时会出现以下几个问题：

- 区分Bpmn模块和普通类模块；如果项目里加入了一个小伙伴，要对原来的一个feature做开发，他可能会迷失在类与类之间，来个显眼的装饰品，一眼就知道哪个是bpmn-js的模块，哪个是普通的类了~
- 私有化依赖模块；如果一个模块的依赖项比较多时，你可能会花10分钟的时间把依赖的模块私有化成成员变量。
- 编码难免会出现错误。因为不是typescript写的，没法做到在开发阶段就规避低级错误。之前在上线到生产环境时，就出现了把```$inject```写成```$injects```导致无法运行:-D。

## 装饰器开发环境的准备

React我忘了，但是你如果使用vue-cli > 3.0开发的话，自带的babel preset就自带装饰器的转义支持。

如果你是自己定义的开发环境，使用的也是babel 7的话，安装babel插件：@babel/plugin-proposal-decorators

并且将它配置到你的babel config里即可支持

```bash
npm i @babel/plugin-proposal-decorators --dev
```

## 装饰器应用

好了，开始实现我们的装饰器，既然是为bpmn模块服务的，那我就把装饰器命名为BpmnModule

### 标识模块

来解决第一个问题，区分普通类和bpmn模块。

我们要做的是，将$inject声明用装饰器注入，统一写法，避免错别字。

装饰器实现如下：

```js
// BpmnModuleDecorator.js
/**
 * Bpmn模块装饰器
 * @param {{ injects: string[] }} param0
 **/
export default function BpmnModule({ injects }) {
    return function (moduleCtor) {
        moduleCtor.$inject = injects;
    }
}
```

让我们来改造原始的bpmn模块定义

```js
import BpmnModule from './BpmnModuleDecorator';

@BpmnModule({
    injects: ['eventBus']
})
class FeatureModule {
    constructor(eventBus) {
        this._eventBus = eventBus;
    }
}

export default FeatureModule;
```

这里有个注意点，不能直接把export default和装饰器一起写，语法解析会报错。

以下是**错误**使用方式：

```js
import BpmnModule from './BpmnModuleDecorator';

// 会报错
@BpmnModule({
    injects: ['eventBus']
})
export default class FeatureModule {
    constructor(eventBus) {
        this._eventBus = eventBus;
    }
};
```

具体原因是转义后代码的执行语义变了

export default在webpack中转义后变成了module.exports；加上装饰器本身就是一个高阶函数，所以编译以后的执行结果就变了，还是直接上代码吧。

正确的编译：

```js
class FeatureModule {
    constructor(eventBus) {
        this._eventBus = eventBus;
    }
}

module.exports = BpmnModule(
    injects: ['eventBus']
)(
    FeatureModule
);
```

错误语法的编译：

```js
BpmnModule(
    injects: ['eventBus']
)(
    module.exports = class FeatureModule {
        constructor(eventBus) {
            this._eventBus = eventBus;
        }
    }
)
```

执行语义变了，不过我没看过错误的编译结果，因为报错了，肯本没结果，哈哈~

### 自动化私有化依赖模块

上面实现了简单装饰器，咋一看真多余啊，还多写一个函数；

但是也是为了当前这件事情做铺垫。

#### 实现效果

我们现在要做的事情就是把下面注释的代码给自动化了~

```js
import BpmnModule from './BpmnModuleDecorator';

@BpmnModule({
    injects: ['eventBus']
})
class FeatureModule {
    constructor(eventBus) {
        this._eventBus = eventBus; // 这些私有化代码要去掉
    }
}

export default FeatureModule;
```

效果就是**不需要编写任何私有化依赖模块的代码**，如下

```js
import BpmnModule from './BpmnModuleDecorator';

@BpmnModule({
    injects: ['eventBus']
})
class FeatureModule {
    method() {
        console.log(this._eventBus) // 输出依赖的模块
    }
}

export default FeatureModule;
```

为了让各位老爷们感受到私有化的恶臭，举个个恶臭的例子，以下案例为真实改编：

```js
/**
 * ExtensionElements子元素的快捷操作模块
 **/
@BpmnJSModule({
  injects: ['canvas', 'eventBus', 'bpmnFactory', 'modeling', 'elementHelper', 'elementFactory', 'elementRegistry']
})
class ExtensionElementsHelper {
    constructor(canvas, eventBus, bpmnFactory, modeling, elementHelper, elementFactory, elementRegistry) {
        this._canvas = canvas;
        this._eventBus = eventBus;
        this._bpmnFactory = bpmnFactory;
        this._modeling = modeling;
        this._elementHelper = elementHelper;
        this._elementFactory = elementFactory;
        this._elementRegistry = elementRegistry;
    }
}
```

#### 具体实现

在实际实现的过程中，你会发现装饰器它本身**只能修改**传递进来的构造函数，你没法对其模块的实例进行操作。而我们要自动化私有依赖模块又是要操作模块实例，所以会很矛盾，所以只能想特殊的办法，那就是套娃！

先上代码~

```js
// BpmnModuleDecorator.js
/**
 * Bpmn模块装饰器
 * @param {{ injects: string[] }} param0
 **/
export default function BpmnModule({ injects }) {

    injects = Array.isArray(injects) ? injects : [];
    
    return function (moduleCtor) {
        // 模块代理
        function ModuleProxy(...injectedModules) {
            // injectedModules为bpmn-js给的模块实例化列表
            // 创建目标对象
            const instance = new moduleCtor();
            // 将依赖注入变成模块实例私有变量
            injects.forEach((moduleName, index) => {
                instance['_' + moduleName] = injectedModules[index];
            });
            // 返回实例，替换代理new调用的返回结果
            return instance;
        }

        // 将依赖声明复制给代理
        ModuleProxy.$inject = injects;

        // 返回代理模块，让bpmn-js去处理它
        return ModuleProxy;
    }
}
```

实现的思路：

- 代理设计模式，代理模块的创建操作
- 运用new构造调用的特性

原理：

- 代理；即把bpmn创造模块时的操作给代理了，目的是为了拿到构造调用传进来的依赖注入列表。

- new构造调用的特性；主要运用了javascript在new调用时，如果函数返回的是对象的话，它会把这个返回的对象替换new调用创建的对象。(不知道的小伙伴得好好补补new调用的课~)

## ps

有机会租个自己的服务器吧，没法让网友发表评论[doge]
