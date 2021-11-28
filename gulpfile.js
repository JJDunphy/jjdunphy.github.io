var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var watch = require("gulp-watch");

gulp.task("scss", function () {
  return watch("./style.scss", function () {
    gulp
      .src("./style.scss")
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest("./"));
  });
});
