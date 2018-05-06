var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./docs"
    });

    // gulp.watch("docs/scss/*.scss", ['sass']);
    gulp.watch(['docs/scss/*.scss', 'docs/scoutahead/scss/*.scss', 'docs/fillaspace/scss/*.scss', 'docs/photo/scss/*.scss', 'docs/rulerplus/scss/*.scss'], ['sass']);
    gulp.watch("docs/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    // return gulp.src("docs/scss/*.scss")
    return gulp.src(['docs/scss/*.scss', 'docs/scoutahead/scss/*.scss', 'docs/fillaspace/scss/*.scss', 'docs/photo/scss/*.scss', 'docs/rulerplus/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("docs/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
