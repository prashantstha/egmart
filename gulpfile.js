// Include gulp
const gulp = require('gulp');
const sass = require('gulp-sass');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();


var Paths = {
  HERE: './',
  DIST: 'dist/',
  CSS: './assets/css/',
  SCSS_TOOLKIT_SOURCES: './assets/scss/esewa.scss',
  SCSS: './assets/scss/**/**'
};

function compileScss() {
	// body...
	return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS));
}

function watch() {
	gulp.watch(Paths.SCSS, compileScss);
}
exports.compileScss = compileScss;
exports.watch = watch;
exports.default = gulp.series(compileScss, watch);
