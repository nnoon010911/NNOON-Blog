# 博客界面整体优化设计

**日期：** 2026-04-10

**目标**

将当前 Hexo Butterfly 博客从默认主题观感收敛为“极简技术文档感”的个人技术站：冷白蓝灰配色、弱化装饰、强调内容与阅读效率，同时保留适度的个人主页信息。

**范围**

- 调整 Butterfly 主题配置，减少默认主题感
- 优化首页首屏、文章卡片、导航、侧边栏、页脚与文章页的视觉表现
- 尽量不重写整体模板结构，仅在必要位置做小范围模板微调
- 不涉及内容迁移、评论系统重构、插件替换或深度 JS 交互改造

## 设计原则

1. 先提升阅读效率，再考虑视觉装饰
2. 先改配置与样式，再改模板结构
3. 保留主题能力，但尽量降低 Butterfly 默认辨识度
4. 首页承担轻量个人介绍，主体仍以文章内容流为中心
5. 所有视觉变化都服务于信息层级，而不是为了“更花”

## 视觉系统

**风格关键词**

- 极简
- 技术文档感
- 冷白蓝灰
- 稳定、克制、清晰

**配色方向**

- 页面背景：接近纯白的冷白
- 卡片背景：纯白
- 主文字：深蓝灰
- 次级信息：中灰蓝
- 强调色：冷蓝
- 分隔线：极浅灰蓝

**字体与排版**

- 全局使用中性、可读性强的无衬线字体栈
- 站点标题减弱装饰感，不使用强识别但影响阅读的字体
- 正文通过字重、字号、间距和段落留白建立层级
- 降低默认大 banner 文案的视觉权重

## 页面结构方案

### 首页

- 第一屏缩短高度，不保留强烈的“展示型海报”感
- 保留一段非常短的站点定位文案
- 文章列表作为首页主体内容
- 首页文章卡片弱化封面存在感，强化标题、摘要、日期与分类

### 导航

- 固定顶栏
- 保留站点名、核心导航、搜索
- 去除多余视觉噪音，使用更轻的边框和半透明背景

### 侧边栏

- 保留作者信息、最近文章、分类、标签、归档
- 弱化公告和默认营销式按钮的存在感
- 卡片视觉统一、留白统一、层级统一

### 文章页

- 收缩视觉噪音，增强正文阅读体验
- 优化正文宽度、标题层级、标签、版权块与目录卡片
- 让代码块、引用块和链接表现更稳定、更接近文档站

### 页脚

- 保留必要版权与站点信息
- 取消过于“主题模板化”的复杂布局
- 页脚风格与全站一致，作为弱层级收尾

## 技术落点

**配置层**

- `themes/butterfly/_config.yml`

**模板层**

- `themes/butterfly/layout/includes/header/nav.pug`
- `themes/butterfly/layout/includes/footer.pug`
- `themes/butterfly/layout/includes/widget/index.pug`
- `themes/butterfly/layout/includes/widget/card_author.pug`

**样式层**

- `themes/butterfly/source/css/var.styl`
- `themes/butterfly/source/css/_layout/head.styl`
- `themes/butterfly/source/css/_layout/post.styl`
- `themes/butterfly/source/css/_layout/aside.styl`
- `themes/butterfly/source/css/_layout/footer.styl`
- `themes/butterfly/source/css/_page/homepage.styl`
- `themes/butterfly/source/css/_page/common.styl`

## 风险与约束

- 当前工作区不是 Git 根仓库，无法依赖仓库提交历史和常规 Git 流程
- 直接修改主题源码会增加后续升级主题的合并成本
- 由于博客内容样本极少，首页与文章页的最终效果主要依赖结构和样式，而不是内容密度

## 验证方式

- 生成站点并确认样式编译无报错
- 检查首页、文章页的模板渲染是否正常
- 定位关键配置项是否生效
- 若无法做浏览器可视化检查，则至少完成静态构建验证
