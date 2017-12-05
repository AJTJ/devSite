var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', ['sass'], function() {
   browserSync.init({
      server: "./"
   });

   gulp.watch("source/scss/**/*.scss", ['sass']);
   gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
   return gulp.src('source/scss/**/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions'],
         cascade: false
      }))
      .pipe(gulp.dest("public/stylesheets"))
      .pipe(browserSync.stream(), browserSync.reload);
});

gulp.task('default', ['serve']);

// var gulp = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass = require('gulp-sass');
// var reload = browserSync.reload;

// gulp.task('browser-sync', function(){
//    browserSync.init({
//       server: './public'
//    })
// });

// gulp.task('sass', function() {
//    return gulp.src('./source/scss/**/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest("./public/css"))
//        .pipe(reload({stream: true}));
// });

// gulp.task('js', function() {
//    return gulp.src('./source/js/*.js')
//       .pipe(gulp.dest("./public/js"))
//       .pipe(reload({stream: true}));
// });

// gulp.task('site', function() {
//    return gulp.src('./source/*.html')
//       .pipe(gulp.dest("./public"))
//       .pipe(reload({stream: true}));
// });

// gulp.task('watch', function() {   
//    gulp.watch("./source/scss/**/*.scss", ['sass']);
//    gulp.watch("./source/*.html", reload);
//    gulp.watch("./source/js/*.js", ['js']);
// });

// gulp.task('default', ['browser-sync', 'sass', 'js', 'site']);