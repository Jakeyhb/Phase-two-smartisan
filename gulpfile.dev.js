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
// }
let connect_options = {
    root: "./dist",
    port: 3000,
    // 自动刷新
    livereload: true,
    middleware: function () {

        return [
            proxy("/shot_list", {
                target: "http://116.62.207.144:10000/mock/5dc0e805c9b21d000aa729b0/host_goods",
                changeOrigin: true,
                pathRewrite: {
                    "/shot_list": ""
                }
            }),
            proxy("/productlis", {
                target: "http://116.62.207.144:10000/mock/5dc0e805c9b21d000aa729b0/productlist",
                changeOrigin: true,
                pathRewrite: {
                    "/productlis": ""
                }
            }),

            proxy("/jgsc", {
                target: "https://shopapi.smartisan.com/product/home",
                changeOrigin: true,
                pathRewrite: {
                    "/jgsc": ""
                }
            }),

            proxy("/dy", {
                target: "http://116.62.207.144:10000/mock/5dc0e805c9b21d000aa729b0/douyw",
                changeOrigin: true,
                pathRewrite: {
                    "/dy": ""
                }
            }),

            proxy("/secon_nav", {
                target: "https://shopapi.smartisan.com/v1/cms/second_nav",
                changeOrigin: true,
                pathRewrite: {
                    "/secon_nav": ""
                }
            }),
            proxy("/denglu", {
                target: "http://localhost/php/Smartisanback_dev/login.php",
                changeOrigin: true,
                pathRewrite: {
                    "/denglu": ""
                }
            }),

            proxy("/parts", {
                target: " https://shopapi.smartisan.com/v1/search/goods-list",
                changeOrigin: true,
                pathRewrite: {
                    "/parts": ""
                }
            })
        ]
    }
}

gulp.task("dele", async () => {
    await del(['./dist/**/*']);
})
// 依赖第三方模块;

gulp.task('connect', async () => {
    connect.server(connect_options);
});


gulp.task("html", async () => {
    // 刨除部分文件不做操作;
    gulp.src(["./src/html/**/*.html"]) // src 拿出index.html变成工作了流;
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest("./dist/html/")) // 操作工作流 => 转存操作;
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
gulp.task("img", async () => {
    gulp.src(["./src/img/*.*"])
        // 把scss源进行处理，编译成 css;

        .pipe(gulp.dest("./dist/img/"))

})

gulp.task("watch", async () => {
    gulp.watch(["./src/html/**/*.html"], gulp.series("html"));
    gulp.watch(["./src/js/*.js"], gulp.series("javascript"));
    gulp.watch(["./src/css/*.css"], gulp.series("css"));
    gulp.watch(["./src/scss/**/*.scss"], gulp.series("scss"));
})

gulp.task("dev", gulp.parallel("watch", "connect", gulp.series("dele", "html", "javascript", "scss", "img")));


