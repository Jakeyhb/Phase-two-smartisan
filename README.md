# Jakeby

Two-phase-Project smartisan t.tt

## 项目运行

### dist 文件已经打包，只要在服务器环境下，并且配置了代理；直接可以运行

- 开发运行：npm run dev
- 打包命令：npm run build

### 直接拉取项目

- 拉取到本地之后 我们在项目的目录下 先
- npm install 安装环境依赖
- 前提是：安装好 node 环境和 git 等

### 友情链接：

- 博客地址：http://jakeyhb.github.io/

## 日志

- 对接口返回的 json 数据的分析，要先从整体来看，然后拆分一下，最重要的就是渲染，渲染时对一些复杂的数据也页面结构一定要先想清楚和测试
- gulp build 之后会有 css 重写 z-index 的事件；
  gulp-cssnano 方法
  .pipe(cssnano({zindex: false}))
- - webpack 方法

    new OptimizeCSSPlugin({
    cssProcessorOptions: {
    safe: true
    }
    })

### 添加网页标题图标

- <link rel="icon" href="//static.smartisanos.cn/indexnew/favicon.ico">
