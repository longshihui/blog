---
title: 搭建Web端PDF阅读器（一）
date: 2021-1-18 21:40:11
categories:
 - Web
tags:
 - Javascript
 - PDF.js
---

# 搭建Web端PDF阅读器（一）

因业务需要完善产品闭环，需要为公文搭建一个Web端的PDF阅读器

完成阅读、标注的功能。本文主要围绕着阅读功能来展开

PS: Adobe的PDF阅读器已经挺牛逼了，干了这杯需求，客户端牛逼！

为了阅读，肯定是要想办法在html环境下渲染PDF文档的内容

当然，单纯的渲染出来，其实不是什么难事，也不需要了解PDF文档本身的数据结构。

所以没有啥特殊的劝退操作，毕竟搭建环境才是最劝退人的

所需知识储备大概如下:

- ES6语法
- Webpack
- Canvas标签

文章分为以下几部分去探讨

[[toc]]

## 技术选型

PDF文档在Web端有常见的2种展示方式

- iframe + 文档地址
- 浏览器直接打开一个PDF链接
- PDF.js

### iframe的方式很简单

## PDF.js

## PDF.js的基础架构

## PDF.js如何应用至Webpack环境下？