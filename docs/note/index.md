#搭建 VitePress + GitHub Pages

1.创建GitHub仓库
新建仓库：
仓库名： yourname.github.io
这里的yourname在主页Overview可以看到
仓库必须是Public库；

2.本地初始化项目：
mkdir my-blog
cd my-blog
npm init -y

3.安装VitePress
npm install vitepress -D

4.初始化目录结构：
mkdir docs
touch docs/index.md
写入：
==================================================
# 我的开发记录系统

欢迎来到我的技术演化日志。

- Dev Logs：记录真实开发过程
- Concepts：记录概念理解演化
- Notes：临时想法
===================================================

5.配置VitePress
创建：
docs/.vitepress/config.js

内容：
export default {
title: "Ethon Dev Log",
description: "开发过程与概念理解记录",
themeConfig: {
nav: [
{ text: "Dev Logs", link: "/dev/" },
{ text: "Concepts", link: "/concepts/" }
]
}
}

6.补充示例目录
mkdir docs/dev
mkdir docs/concepts

touch docs/dev/index.md
填充内容：
# Dev Logs

记录真实开发过程（debug / bug / 思考）

- Flowable问题排查
- MyBatis坑记录

7.本地预览
npx vitepress dev docs
浏览器打开：
http://localhost:5173

二、部署到GitHub Pages
8.安装deploy工具
npm install gh-pages -D

9.在package.json加脚本
"scripts": {
"docs:build": "vitepress build docs",
"docs:deploy": "npm run docs:build && gh-pages -d docs/.vitepress/dist"
}

10.部署
npm run docs:deploy

11.GitHub设置Pages
进入仓库：
Setting --> Pages
选择：
Branch： gh-pages
保存
