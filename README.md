# Creature: Beyond Redstone | 超越红石

> **The International Journal of Science / 18 June 2026**
> 一个融合了《Nature》学术期刊排版美学与《我的世界》机械动力（Create）模组硬核设定的前端概念网站。

## 📖 项目简介

本项目是一个纯前端（HTML + CSS + JavaScript）的学术期刊概念网站。它假想了一本名为 **《Creature》** 的科学期刊，其创刊号的主题是“超越红石：机械动力模组如何重写虚拟工程学法则”。

网站试图将严谨、理性的学术论文排版（首行缩进、参考文献、摘要区）与现代网页 UI（毛玻璃质感、动态数据、暗色调工业风）结合，构建一种全新的“硬核学术赛博”视觉体验。

## ✨ 核心功能与特性

- **📊 动态应力仪表盘**：侧边栏的“当前网络应力总值”与“过载警告触发率”由 JavaScript 实时随机生成并刷新，模拟真实的机械动力网络数据。
- **🧊 毛玻璃（Glassmorphism）UI**：期刊封面与文章详情页采用了 `backdrop-filter: blur()` 配合半透明背景，呈现出通透的高级质感。
- **📰 纯 CSS 期刊封面**：不依赖图片，完全使用 HTML 标签与 CSS 排版（包括上下边框线、网格背景纹理）还原学术期刊的经典封面。
- **🖥️ 现代响应式布局**：基于 Flexbox 实现，在 PC 端表现为左右分栏（文章 + 侧边栏），在移动端自动折叠为上下单列，适配手机阅读。
- **📄 独立文章详情页**：提供 `Article.html`，包含论文的标题、作者信息、摘要框、正文（首行缩进）和参考文献格式。

## 🛠️ 技术栈

- **HTML5**：语义化标签（`<header>`, `<main>`, `<aside>`, `<article>`）
- **CSS3**：Flexbox 布局、CSS 变量、毛玻璃特效、CSS 网格背景图、响应式媒体查询
- **JavaScript (Vanilla)**：DOM 操作、`Math.random()` 数据模拟、`setInterval` 定时器

## 🚀 快速开始

1. 克隆或下载本项目到本地。
2. 确保所有文件（`index.html`, `Article.html`, `style.css`, `index.js` 及 `image` 文件夹）在同一目录下。
3. 双击 `index.html` 即可在浏览器中查看首页。
4. 点击首页底部的“← 返回首页”或相关链接，即可在 `Article.html` 中体验论文详情页。

## 🎨 设计灵感

- **Nature 期刊**：严谨的衬线字体（Georgia / Times New Roman）、大标题、极简的线条分割。
- **Create 模组**：齿轮、应力（Stress）、过载警告、机械护目镜、工厂暗色调。
- **《我的世界》**：像素化图标、游戏内的系统提示语（“显然结构过载”）。

## 📄 版权与声明

本项目仅为个人前端练习与概念设计，与 Mojang、Create Mod 官方及 Nature 期刊无任何关联。文中出现的所有论文标题、作者及数据均为虚构，仅供娱乐。

---
*Made with ❤️ and a lot of Stress (su).*
