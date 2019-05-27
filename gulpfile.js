var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    uglify      = require('gulp-uglifyjs'),
    concat      = require('gulp-concat'),
    normalize = require('node-normalize-scss');

gulp.task('sass', function(){
    return gulp.src('app/sass/*.sass')
        .pipe(sass({
            includePaths: normalize.includePaths
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
    });
});

gulp.task('scripts', function() {
    return gulp.src('app/js/common.js')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
    return gulp.src('*.html')
        .pipe(browserSync.reload({ stream: true }))
});
gulp.task('minify-css', function () {
    return gulp.src('app/css/main.css')
        .pipe(concatCss('style.min.css'))
        .pipe(autoprefixer('last 3 versions', '1%', 'ie 11'))
        .pipe(cleanCSS({compatibility: 'ie11'}))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({ stream: true }));
})

gulp.task('scripts-min', function() {
    return gulp.src('app/js/common.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', function() {
    gulp.watch('app/sass/*.sass', gulp.parallel('sass'));
    gulp.watch('*.html', gulp.parallel('code'));
    gulp.watch('app/css/*.css', gulp.parallel('minify-css'));
    gulp.watch('app/js/common.js', gulp.parallel('scripts-min'));
});

gulp.task('default', gulp.parallel('sass','scripts-min', 'minify-css', 'browser-sync', 'watch'));