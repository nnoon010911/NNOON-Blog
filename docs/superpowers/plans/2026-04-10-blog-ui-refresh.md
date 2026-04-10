# Blog UI Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将当前 Butterfly 博客调整为极简技术文档风格的个人技术站。

**Architecture:** 优先通过主题配置和全局样式变量降低默认主题感，再针对首页、导航、文章页、侧边栏和页脚做局部模板与样式优化。整体保持 Butterfly 结构不变，减少升级成本与实现风险。

**Tech Stack:** Hexo, Pug, Stylus, Butterfly theme

---

### Task 1: 收敛主题配置

**Files:**
- Modify: `themes/butterfly/_config.yml`

- [ ] 调整导航、首页、侧边栏、页脚、字体与主题色配置
- [ ] 保持功能开关最小化，减少默认营销式与展示型配置

### Task 2: 建立统一视觉变量

**Files:**
- Modify: `themes/butterfly/source/css/var.styl`

- [ ] 调整全局颜色、卡片、链接、分隔线、按钮、侧边栏宽度等变量
- [ ] 建立冷白蓝灰视觉基础

### Task 3: 优化导航与首页视觉

**Files:**
- Modify: `themes/butterfly/source/css/_layout/head.styl`
- Modify: `themes/butterfly/source/css/_page/homepage.styl`

- [ ] 降低首页 banner 的展示感
- [ ] 固定并简化导航栏
- [ ] 优化首页文章卡片的层级、留白与 hover

### Task 4: 优化文章页、侧边栏与页脚

**Files:**
- Modify: `themes/butterfly/source/css/_layout/post.styl`
- Modify: `themes/butterfly/source/css/_layout/aside.styl`
- Modify: `themes/butterfly/source/css/_layout/footer.styl`
- Modify: `themes/butterfly/source/css/_page/common.styl`

- [ ] 强化正文阅读体验
- [ ] 统一侧边栏卡片视觉
- [ ] 简化页脚结构样式

### Task 5: 进行必要模板微调

**Files:**
- Modify: `themes/butterfly/layout/includes/header/nav.pug`
- Modify: `themes/butterfly/layout/includes/footer.pug`
- Modify: `themes/butterfly/layout/includes/widget/index.pug`
- Modify: `themes/butterfly/layout/includes/widget/card_author.pug`

- [ ] 删除或弱化不适合目标风格的默认内容
- [ ] 调整模块顺序与文案输出

### Task 6: 验证

**Files:**
- Verify only

- [ ] 运行站点构建命令并检查是否成功
- [ ] 若可用，运行本地预览或至少确认核心模板与样式可编译
- [ ] 记录无法验证的部分和原因
