/* eslint-disable import/no-extraneous-dependencies */
/* Plugins */
const chalk = require('chalk');
const {
  src, dest, watch, lastRun,
} = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const fibers = require('fibers');
const sass = require('gulp-sass');
const cssnano = require('cssnano');
sass.compiler = require('dart-sass');

/* Path */
const filePath = {
  src: 'src/sass/*.sass',
  dist: 'dist/css/',
};

/* compile sass into css */
const compileSass = (cb) => {
  src(filePath.src, { sourcemaps: true, since: lastRun(compileSass) })
    .pipe(sass({ fiber: fibers }))
    .pipe(postcss([
      autoprefixer(),
      cssnano({
        autoprefixer: false,
      }),
    ]))
    .pipe(dest(filePath.dist, { sourcemaps: '.' }));
  cb();
};

/* Watch task */
const watchSassFiles = () => {
  const watcher = watch(filePath.src, compileSass);
  const messageLog = chalk.italic.bold.hex('#7cc7e8');

  watcher.on('change', (path) => {
    console.log(messageLog(`File ${path} has been changed, running task...`));
  });
};

exports.sassc = watchSassFiles;
