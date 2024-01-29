const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

function compressImages() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function minifyJavascript() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(styles, compressImages, minifyJavascript);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.parallel(styles));
}