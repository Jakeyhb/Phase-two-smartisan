let gulp = require("gulp");
// 引入模块;
let connect = require("gulp-connect");
let proxy = require("http-proxy-middleware").createProxyMiddleware;
let fileinclude = require("gulp-file-include");
let sass = require('gulp-sass');
sass.compiler = require('node-sass');
let del = require("del");

// 适合 : 已经安装了gulp-sass ,无法安装node-sass 的小伙伴
//  let sass        = require('gulp-sass');
//  sass.compiler   = require('node-sass-china');

// 适合 : 啥都没装上的小伙伴;
// let sass = require("gulp-sass-china");

// SASS => 把特殊语法的css 编程纯 css ;

// 服务器配置文件;
// let connect_options = {
//     root: "./dist",
//     port: 3000,
//     // 自动刷新
//     livereload: true,
//     middleware: function () {
//         // 返回值必须是数组;
//         // 默认访问的路径 : http://localhost/pxx
//         // 被处理之后的路径 : 代理路径/pxx;
//         // 重写路径 : /pxx => ""; 代理路径
//         return [
//             proxy("/pxx", {
//                 target: "https://apiv2.pinduoduo.com/api/gindex/subject/limited/goods",
//                 changeOrigin: true,
//                 pathRewrite: {
//                     "/pxx": ""
//                 }
//             }),
//             proxy("/dt", {
//                 target: "https://www.duitang.com/napi/blog/list/by_filter_id/",
//                 changeOrigin: true,
//                 pathRewrite: {
//                     "/dt": ""
//                 }
//             }),
//             //  代理接口的代理名称千万不要和页面重名，重名之后会发生非常多的bug;
//             proxy("/lg", {
//                 target: "http://localhost/server/login-normal.php",
//                 changeOrigin: true,
//                 pathRewrite: {
//                     "/lg": ""
//                 }
//             })
//         ]
//     }
// }

gulp.task("dele", async () => {
    await del(['./dist/**/*']);
})
// 依赖第三方模块;

// gulp.task('connect', async () => {
//     connect.server(connect_options);
// });


gulp.task("html", async () => {
    // 刨除部分文件不做操作;
    gulp.src(["./src/html/**/*.html", "!./src/html/**/header.html"]) // src 拿出index.html变成工作了流;
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest("./dist/")) // 操作工作流 => 转存操作;
        .pipe(connect.reload())
});

gulp.task("javascript", async () => {
    gulp.src(["./src/js/**/*.js"])
        .pipe(gulp.dest("./dist/js"))
        .pipe(connect.reload())

});
gulp.task("css", async () => {
    gulp.src(["./src/css/*.css"])
        .pipe(gulp.dest("./dist/css"))
        .pipe(connect.reload())
});

gulp.task("scss", async () => {
    gulp.src(["./src/scss/*.scss"])
        // 把scss源进行处理，编译成 css;
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./dist/css/"))
        .pipe(connect.reload())
})

gulp.task("watch", async () => {
    gulp.watch(["./src/html/**/*.html"], gulp.series("html"));
    gulp.watch(["./src/js/*.js"], gulp.series("js"));
    gulp.watch(["./src/css/*.css"], gulp.series("css"));
    gulp.watch(["./src/scss/**/*.scss"], gulp.series("scss"));
})

gulp.task("dev", gulp.parallel("watch", gulp.series("dele", "html", "javascript", "css", "scss")));

