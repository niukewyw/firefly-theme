<div align="center">

# ✨ 流萤主题浏览器插件

**让流萤的光芒陪伴你的每一次浏览**

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Chrome](https://img.shields.io/badge/Chrome-88%2B-brightgreen.svg)](https://www.google.com/chrome/)
[![Firefox](https://img.shields.io/badge/Firefox-78%2B-orange.svg)](https://www.mozilla.org/firefox/)
[![Edge](https://img.shields.io/badge/Edge-88%2B-blue.svg)](https://www.microsoft.com/edge)

为《崩坏：星穹铁道》中的角色"流萤"打造的浏览器主题插件，以她标志性的萤光绿为色调，带来沉浸式的浏览体验。

## 🖼️ 效果展示

### 测试页面效果
![Figure 1 - 测试页面效果](figure1.png)

### 浏览器集成效果
![Figure 2 - 浏览器集成效果](figure2.png)

[功能特性](#功能特性) • [安装方法](#安装方法) • [使用说明](#使用说明) • [预览效果](#预览效果) • [贡献指南](#贡献指南)

</div>

---

## 📖 项目简介

流萤主题浏览器插件是一款为《崩坏：星穹铁道》粉丝打造的浏览器扩展，将流萤标志性的萤光绿色调带入你的浏览体验。插件通过 Canvas 渲染和 CSS 动态样式，实现了流畅的萤火虫光点拖尾效果和环境粒子系统，让每一次网页浏览都充满梦幻氛围。

### 🎯 设计理念

- **沉浸式体验**：通过动态光效和粒子系统，营造流萤陪伴的温馨感
- **性能优先**：使用 Canvas 和 requestAnimationFrame 确保流畅的 60fps 动画
- **高度可定制**：用户可以根据喜好调整亮度、颜色和效果强度
- **全局适配**：自动适配所有网页，无需逐个配置

---

## ✨ 功能特性

### 核心功能

- 🌟 **动态主题色渲染** - 整体界面渲染流萤的标志性萤光绿色调（#00ff88）
- ✨ **萤火虫光点拖尾** - 鼠标移动时产生如萤火虫般的光点拖尾效果
- 🎨 **环境粒子系统** - 背景中飘浮的萤火虫粒子，营造梦幻氛围
- 💡 **智能光晕跟随** - 鼠标周围柔和的光晕效果，增强视觉体验
- 🎯 **全局适配** - 适用于所有网页，自动注入样式和脚本

### 交互效果

- 🔗 **链接发光** - 链接悬停时产生发光效果
- 🔘 **按钮光效** - 按钮悬停时显示光晕和阴影
- 🃏 **卡片效果** - 卡片元素悬停时产生立体光效
- 📱 **响应式设计** - 自动适配不同屏幕尺寸

### 自定义设置

- ⚙️ **启用/禁用效果** - 一键开关萤火虫效果
- 🎚️ **亮度调节** - 自由调节光点亮度
- 📏 **拖尾长度** - 调整拖尾效果的持续时间
- 🖼️ **背景透明度** - 调整背景图片的透明度（0-50%）
- 🎨 **主题颜色** - 自定义主题颜色，不限于萤光绿

### 背景图片

插件支持自定义半透明背景图片，让浏览体验更具氛围感：

- 将你喜欢的图片命名为 `background.png`
- 放入 `images` 文件夹
- 建议尺寸：1920×1080 或更大
- 支持格式：PNG（推荐，支持透明度）
- 可在设置面板中调整背景透明度

**注意**：默认不包含背景图片，需要你自己添加。如果不需要背景，可将透明度设置为 0%。

---

## 🚀 安装方法

### 前置要求

- Chrome/Edge 88+ 或 Firefox 78+ 浏览器

### 步骤一：获取项目

```bash
# 克隆仓库
git clone https://github.com/yourusername/firefly-theme.git
cd firefly-theme

# 或下载 ZIP 压缩包并解压
```

### 步骤二：加载到浏览器

#### Chrome/Edge 浏览器

1. 打开浏览器，访问 `chrome://extensions/` 或 `edge://extensions/`
2. 开启右上角的"开发者模式"开关
3. 点击"加载已解压的扩展程序"
4. 选择项目的文件夹
5. 插件安装完成！

#### Firefox 浏览器

1. 打开浏览器，访问 `about:debugging#/runtime/this-firefox`
2. 点击"临时载入附加组件"
3. 选择项目中的 `manifest.json` 文件
4. 插件加载完成！

---

## 📖 使用说明

### 基本使用

安装后，插件会自动在所有网页上生效。你可以：

1. **移动鼠标** - 观察萤火虫光点拖尾效果
2. **悬停元素** - 体验链接、按钮和卡片的发光效果
3. **观察背景** - 注意环境粒子的漂浮动画

### 自定义设置

1. 点击浏览器工具栏中的插件图标
2. 在设置面板中调整：
   - **启用萤火虫效果** - 开关总效果
   - **光点亮度** - 调节光点亮度（0.2 - 1.0）
   - **拖尾长度** - 调整拖尾持续时间（0.3 - 1.5）
   - **主题颜色** - 选择你喜欢的颜色

### 测试效果

打开项目中的 `test.html` 文件，可以在本地预览所有效果：

```bash
# 在浏览器中打开
start test.html

# 或直接双击文件
```

---

## 🎬 预览效果

### 主题效果

- **萤光绿主色调** - 流萤标志性的 #00ff88 颜色
- **柔和光晕** - 鼠标周围的光晕跟随效果
- **粒子系统** - 背景中漂浮的萤火虫粒子

### 交互效果

- **鼠标拖尾** - 移动鼠标时的光点拖尾动画
- **元素发光** - 链接、按钮悬停时的光效
- **卡片立体** - 卡片悬停时的阴影和光晕

### 性能表现

- **60 FPS 流畅动画** - 使用 requestAnimationFrame 确保
- **低内存占用** - 自动清理过期粒子
- **批量渲染** - Canvas 批量绘制，减少性能开销

---

## 📁 项目结构

```
firefly-theme/
├── manifest.json          # 插件配置文件（Manifest V3）
├── background.js          # 后台脚本
├── content.js             # 内容脚本（主要功能实现）
├── styles.css             # 样式文件
├── popup.html             # 设置弹窗界面
├── test.html              # 测试页面
├── README.md              # 项目说明文档
├── LICENSE                # MIT 许可证
├── CONTRIBUTING.md        # 贡献指南
├── icons/                 # 图标文件夹
│   ├── icon.svg           # SVG 源图标
│   ├── icon16.png         # 16×16 图标
│   ├── icon48.png         # 48×48 图标
│   └── icon128.png        # 128×128 图标
└── images/                # 背景图片文件夹
    ├── README.md          # 背景图片说明
    └── background.png     # 背景图片（需自行添加）
```

---

## 🔧 技术实现

### 核心技术

- **Canvas 渲染** - 使用 HTML5 Canvas 实现高性能的粒子动画
- **CSS 变量** - 使用 CSS 自定义属性实现动态主题色
- **RequestAnimationFrame** - 使用浏览器原生 API 实现流畅动画
- **Content Script** - 注入到所有页面，实现全局效果

### 性能优化

- **批量渲染** - 使用 Canvas 批量绘制，减少 DOM 操作
- **粒子限制** - 限制粒子数量，避免性能问题
- **自动清理** - 自动清理过期粒子，防止内存泄漏
- **智能更新** - 只在必要时更新画布

### 浏览器兼容性

| 浏览器 | 最低版本 | 状态 |
|--------|----------|------|
| Chrome | 88+ | ✅ 完全支持 |
| Edge | 88+ | ✅ 完全支持 |
| Firefox | 78+ | ✅ 完全支持 |
| Safari | 15+ | ⚠️ 部分支持 |
| Opera | 74+ | ✅ 完全支持 |

---

## ⚙️ 自定义配置

你可以通过修改 `content.js` 中的 `config` 对象来自定义默认设置：

```javascript
const config = {
  trailColor: '#00ff88',        // 拖尾颜色
  trailSize: 8,                 // 拖尾大小（像素）
  trailOpacity: 0.8,            // 拖尾透明度（0-1）
  trailLifetime: 800,           // 拖尾持续时间（毫秒）
  ambientParticleCount: 15,     // 环境粒子数量
  ambientColor: '#00ff88',      // 环境粒子颜色
  glowIntensity: 0.5            // 光晕强度（0-1）
};
```

### 配置说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `trailColor` | string | `'#00ff88'` | 拖尾粒子的颜色 |
| `trailSize` | number | `8` | 拖尾粒子的大小 |
| `trailOpacity` | number | `0.8` | 拖尾粒子的透明度 |
| `trailLifetime` | number | `800` | 拖尾粒子的生命周期（毫秒） |
| `ambientParticleCount` | number | `15` | 环境粒子的数量 |
| `ambientColor` | string | `'#00ff88'` | 环境粒子的颜色 |
| `glowIntensity` | number | `0.5` | 光晕效果的强度 |

---

## 🐛 已知问题

- 某些网站可能会阻止 Canvas 或 CSS 注入
- 在性能较低的设备上可能需要减少粒子数量
- Safari 浏览器的部分 CSS 效果可能不完全兼容
- 某些使用 Shadow DOM 的网站可能无法正确应用样式

---

## 🤝 贡献指南

欢迎贡献代码、报告问题或提出建议！

### 如何贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发指南

1. 克隆仓库并安装依赖（如有）
2. 修改代码后，使用 `test.html` 测试效果
3. 确保代码风格一致，添加必要的注释
4. 测试在不同浏览器中的兼容性

### 报告问题

如果遇到问题，请在 [Issues](https://github.com/yourusername/firefly-theme/issues) 中提交，包含：

- 问题描述
- 复现步骤
- 浏览器版本和操作系统
- 截图或错误信息（如有）

---

## 📝 更新日志

### v1.0.0 (2024-02-24)

- ✨ 初始版本发布
- 🌟 实现萤火虫光点拖尾效果
- 🎨 添加动态主题色渲染
- ⚙️ 支持自定义设置
- 🎯 全局适配所有网页

---

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

---

## 🙏 致谢

- 本插件为《崩坏：星穹铁道》角色"流萤"的粉丝向作品
- 感谢米哈游创造了如此迷人的角色
- 感谢所有贡献者和使用者的支持

---

## 📮 联系方式

- 项目主页：[https://github.com/niukewyw/firefly-theme](https://github.com/niukewyw/firefly-theme)
- 问题反馈：[Issues](https://github.com/niukewyw/firefly-theme/issues)
- 邮箱：3177461569@qq.com

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐️ Star！**

Made with ❤️ by [Niukewyw](https://github.com/niukewyw)

</div>