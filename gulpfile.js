// Plugins
let gulp = require('gulp');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let stylus = require('gulp-stylus');

// Path
let filePath = {src: 'src/', dist: 'dist/'};
let fileSrc = {
  stylus: `${filePath.src}stylus/*.styl`
};

gulp.task('css', function () {
  let plugins = [
      autoprefixer()
  ];

  return gulp.src(`${fileSrc.stylus}`)
        .pipe(stylus())
        .pipe(postcss(plugins))
        .pipe(gulp.dest(`${filePath.dist}css/`));
});
