# Jakeby

Two-phase-Project smartisan t.tt

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
