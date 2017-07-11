
const gulp = require('gulp');
const pl = require('gulp-load-plugins')();

gulp.task('serve', () => {
  pl.connect.server({
    root: '.',
    port: 9000,
  });
});

gulp.task('dev', ['watch'], () => {
  pl.connect.server({
    root: '.',
    port: 9000,
    livereload: true,
  });
});

gulp.task('watch', ['sass'], () => {
  gulp.watch(['styles/**/*.scss'], ['sass']);
  gulp.watch(['index.html'], () => {
    gulp.src(['index.html'])
      .pipe(pl.connect.reload());
  });
});

gulp.task('sass', () => {
  return gulp.src(['styles/colors.scss', 'styles/**/*.scss', 'node_modules/normalize.css/normalize.css'])
    .pipe(pl.plumber())
    .pipe(pl.concat('dist.css'))
    .pipe(pl.sass().on('error', pl.sass.logError))
    .pipe(pl.autoprefixer())
    .pipe(pl.cleanCss())
    .pipe(gulp.dest('.'))
    .pipe(pl.connect.reload());
});
