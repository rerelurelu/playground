/* eslint-disable import/no-extraneous-dependencies */
/* Plugins */
const chalk = require('chalk');
const {
  src, dest, watch, lastRun, series,
} = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const fibers = require('fibers');
const sass = require('gulp-sass');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync');
sass.compiler = require('sass');

/* Path */
const fileSrc = {
  sass: 'src/sass/**/*.sass',
  js: 'src/js/**/*.js',
  html: '**/*.html',
};

const fileDist = {
  sass: 'dist/css/',
  map: 'map/',
  js: 'dist/js/',
};

/* compile sass */
const compileSass = (cb) => {
  src(fileSrc.sass, { sourcemaps: true, since: lastRun(compileSass) })
    .pipe(plumber())
    .pipe(sass({ fiber: fibers }))
    .pipe(postcss([
      autoprefixer(),
      cssnano({ autoprefixer: false }),
    ]))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(fileDist.sass, { sourcemaps: `${fileDist.map}` }));
  cb();
};

/* compile Javascript */
const compileJs = (cb) => {
  src(fileSrc.js, { sourcemaps: true, since: lastRun(compileJs) })
    .pipe(plumber())
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest(fileDist.js, { sourcemaps: `${fileDist.map}` }));
  cb();
};

/* browsersync */
const browsersyncServer = (cb) => {
  browsersync.init({
    server: {
      baseDir: '.',
    },
  });
  cb();
};

const browsersyncReload = (cb) => {
  browsersync.reload();
  cb();
};

/* Watch task */
const watchTask = () => {
  const htmlWatcher = watch(fileSrc.html, browsersyncReload);

  const sassWatcher = watch(fileSrc.sass,
    series(compileSass, browsersyncReload));

  const jsWatcher = watch(fileSrc.js,
    series(compileJs, browsersyncReload));

  const messageLog = chalk.italic.bold.hex('#7cc7e8');

  sassWatcher.on('change', (path) => {
    console.log(messageLog(`File ${path} has been changed, running Sass task...`));
  });

  jsWatcher.on('change', (path) => {
    console.log(messageLog(`File ${path} has been changed, running JS task...`));
  });

  htmlWatcher.on('change', (path) => {
    console.log(messageLog(`File ${path} has been changed, running HTML task...`));
  });
};

exports.watch = series(
  compileSass,
  compileJs,
  browsersyncServer,
  watchTask,
);

exports.sassc = compileSass;
exports.jsc = compileJs;
