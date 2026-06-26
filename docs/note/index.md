# 搭建 VitePress + GitHub Pages

记录从零搭建这个博客的完整步骤。

## 一、创建 GitHub 仓库

1. 新建仓库，仓库名必须是 `yourname.github.io`
   - 这里的 `yourname` 在你的 GitHub 主页 Overview 可以看到
2. 仓库必须是 **Public**（公开）

## 二、本地初始化项目

```bash
mkdir my-blog
cd my-blog
npm init -y
```

## 三、安装 VitePress

```bash
npm install vitepress -D
```

## 四、初始化目录结构

```bash
mkdir docs
touch docs/index.md
```

在 `docs/index.md` 写入：

```markdown
# 我的开发记录系统

欢迎来到我的技术演化日志。

- Dev Logs：记录真实开发过程
- Concepts：记录概念理解演化
- Notes：临时想法
```

## 五、配置 VitePress

创建 `docs/.vitepress/config.js`，内容：

```js
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
```

## 六、补充示例目录

```bash
mkdir docs/dev
mkdir docs/concepts
touch docs/dev/index.md
```

在 `docs/dev/index.md` 填充内容：

```markdown
# Dev Logs

记录真实开发过程（debug / bug / 思考）

- Flowable 问题排查
- MyBatis 坑记录
```

## 七、本地预览

```bash
npx vitepress dev docs
```

浏览器打开：`http://localhost:5173`

## 八、部署到 GitHub Pages

本博客使用 **GitHub Actions** 自动部署：推送到 `master` 分支后，云端自动构建并发布。

- 工作流文件：`.github/workflows/deploy.yml`
- GitHub 仓库 **Settings → Pages → Source** 设为 **GitHub Actions**

> 提示：以前用 `gh-pages` 包手动部署（`npm run docs:deploy`），改用 Actions 后已不再需要。
