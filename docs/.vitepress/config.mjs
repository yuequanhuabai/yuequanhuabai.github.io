import { withSidebar } from 'vitepress-sidebar';

// VitePress 基础配置
const vitePressConfig = {
    title: "Ethon Dev Log",
    description: "开发过程与概念理解记录",
    // 忽略 localhost 链接的死链检查（笔记里常出现本地预览地址）
    ignoreDeadLinks: [/^https?:\/\/localhost/],
    themeConfig: {
        nav: [
            { text: "Dev Logs", link: "/dev/" },
            { text: "Concepts", link: "/concepts/" },
            { text: "My Note", link: "/note/" },
            { text: "Architecture", link: "/architecture/" },
        ]
    }
};

// 自动生成侧边栏的通用选项
const commonSidebarOptions = {
    documentRootPath: 'docs',          // Markdown 根目录
    useTitleFromFileHeading: true,     // 用文件里的 # 一级标题作菜单名
    useFolderTitleFromIndexFile: true, // 用 index.md 的标题作文件夹分组名
    collapsed: false,                  // 分组默认展开（true = 折叠）
    capitalizeFirst: true,             // 英文菜单首字母大写
    sortMenusByName: true,             // 按名称排序
};

// 为每个顶层栏目各生成一套独立侧边栏：进入 /dev/ 只显示 dev 的目录树
const sidebarOptions = [
    { ...commonSidebarOptions, scanStartPath: 'dev', resolvePath: '/dev/' },
    { ...commonSidebarOptions, scanStartPath: 'concepts', resolvePath: '/concepts/' },
    { ...commonSidebarOptions, scanStartPath: 'note', resolvePath: '/note/' },
    { ...commonSidebarOptions, scanStartPath: 'architecture', resolvePath: '/architecture/' },
];

export default withSidebar(vitePressConfig, sidebarOptions);
