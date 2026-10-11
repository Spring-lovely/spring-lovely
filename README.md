# Spring · 施牛马的个人主页

中英双语静态学术主页，无需安装依赖或编译。默认同时显示中英文，可以切换为中文或英文，浏览器会记住选择。页面支持手机、键盘导航和减少动态效果设置，不加载外部字体、追踪脚本或第三方图片。

## 本地预览

直接打开 `index.html`，或在当前目录运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

然后访问 http://localhost:8000 。远程服务器上可通过编辑器转发 8000 端口后打开。

## 修改内容

- `index.html`：姓名、个人介绍、研究方向、论文、教育经历和联系方式。中英文段落分别用 `lang="zh-CN"`、`lang="en"` 标记。
- `style.css`：布局、配色、字体与手机样式；顶部变量可调整主题色。
- `script.js`：语言切换与导航高亮。
- `assets/favicon.svg`：浏览器标签页图标。

头像使用提供的 `png/美照.jpg`，已裁切并压缩为 `assets/portrait.webp`（516 × 588），原图保持不变。替换头像时更新此 WebP 文件及 `index.html` 中的图片说明。

论文目前链接至提供的 Google Scholar 页面，没有导入未经核实的论文、引用统计或模板作者的经历。可在 `publications` 区域添加真实论文条目。学校、博士在读身份和邮箱均按提供的信息填写；未补写入学年份、导师、学院或奖项。

视频使用提供的 `mv/唱歌.mp4`，已转换为适合浏览器播放的 H.264/AAC 格式，保存于 `assets/daily-singing.mp4`，封面为 `assets/life-poster.jpg`。原视频不变；页面不自动播放。

## 发布至 GitHub Pages

目标地址为 https://spring-lovely.github.io/ ，当前仅完成本地文件，尚未发布。

1. 使用 `Spring-lovely` 账号创建名为 `Spring-lovely.github.io` 的公开仓库；若已有同名仓库，先确认其中的现有内容。
2. 将 `index.html`、`style.css`、`script.js`、`assets/` 和 `.nojekyll` 放在仓库根目录，提交至 `main` 分支。README 和 `.gitignore` 可一起提交。
3. 在仓库 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**，分支选择 **main**，目录选择 **/ (root)**，保存。
4. 等待 Pages 部署完成，访问上面的地址。

`ref/` 中是两个原始模板压缩包，`png/` 是预览图目录，不属于站点发布内容。不要将整个工作区（尤其是原始压缩包）一起上传。

## 设计参考

结合 [Alexander-wu](https://alexander-wu.github.io/) 的留白、简介和经历布局，以及 [wyl2077](https://wyl2077.github.io/) 的侧边导航与分区排版。HTML、CSS、JavaScript 与装饰图均为本次重新编写，未复用模板中的个人资料、照片或研究成果。
