let gulp = require('gulp')

// gulp dev => 我要知道用户输入的是dev还是build;

var mode = process.argv[2]; // 可以获取用户输入的执行;

// 根据用户指令加载响应的配置文件;

switch (mode) {
  case "dev":
    require("./gulpfile.dev.js");
    break;
  case "build":
    require("./gulpfile.build.js");
}