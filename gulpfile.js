"use strict";

// Load plugins
const gulp = require('gulp'),
      less = require('gulp-less'),
      cssnano = require("cssnano"),
      pug = require('gulp-pug'),
      concat = require('gulp-concat'),
      autoprefixer = require('autoprefixer'),
      postcss = require('gulp-postcss'),
      rename = require("gulp-rename");

//Converting all pug files into index.html
function convertPug() {
    return gulp
        .src('./dev/index.pug')
        .pipe(pug({
                doctype: 'html',
                pretty: false
                }))
        .pipe(gulp.dest('./'));
};

// Building a minified cross-browser final CSS file
function css() {
    return gulp
        .src(['./dev/style/__var.less', './dev/**/*.less'])
        .pipe(concat('style.less'))
        .pipe(less())
        .pipe(rename({ suffix: ".min" }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest('./dest/'));
};

function watchFiles() {
    gulp.watch('./**/*.pug', convertPug);
    gulp.watch('./**/*.less', css);
}


// Export tasks
exports.convertPug = convertPug;
exports.css = css;
exports.watch = watchFiles;
exports.default = gulp.series([convertPug, css, watchFiles]);
