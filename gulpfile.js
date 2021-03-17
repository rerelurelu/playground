// Plugins
let gulp = require('gulp');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let fibers = require('fibers');
let sass = require('gulp-sass');
sass.compiler = require('dart-sass');

// Path
let filePath = {src: 'src/', dist: 'dist/'};
let fileSrc = {
  sass: `${filePath.src}sass/*.sass`
};

gulp.task('css', function () {
  let plugins = [
      autoprefixer()
  ];

  return gulp.src(`${fileSrc.sass}`)
        .pipe(sass(
          { fiber: fibers }
        ))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(`${filePath.dist}css/`));
});
