
const gulp = require('gulp');
const stream = require('add-stream');
const pl = require('gulp-load-plugins')();

gulp.task('serve', () => {
  pl.connect.server({
    root: '.',
    port: 9000
  });
});

gulp.task('dev', ['watch'], () => {
  pl.connect.server({
    root: '.',
    port: 9000,
    livereload: true
  });
});

gulp.task('watch', ['src'], () => {
  gulp.watch(['src/**/*.js', 'src/**/*.html'], ['src:js']);
  gulp.watch(['src/**/*.scss'], ['src:css']);
});

gulp.task('src', ['src:js', 'src:css']);

gulp.task('src:js', () => {

  return gulp.src(['src/index.js', 'src/**/*.js'])
    .pipe(pl.plumber())
    // .pipe(pl.sourcemaps.init())
    .pipe(pl.babel())
    .pipe(stream.obj(gulp.src('src/**/*.html')
      .pipe(pl.angularTemplatecache({ module: 'skeleton' }))))
    .pipe(pl.concat('index.js'))
    .pipe(pl.ngAnnotate())
    .pipe(pl.uglify())
    // .pipe(pl.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(pl.connect.reload());
});

gulp.task('src:css', () => {

  return gulp.src(['src/**/*.scss'])
    .pipe(pl.plumber())
    // .pipe(pl.sourcemaps.init())
    .pipe(pl.concat('index.css'))
    .pipe(pl.sass().on('error', pl.sass.logError))
    .pipe(pl.autoprefixer())
    .pipe(pl.cleanCss())
    // .pipe(pl.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(pl.connect.reload());
});

gulp.task('vendor', ['vendor:js', 'vendor:css']);

const vendor = {
  js: [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-typer/dist/typer.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
    'node_modules/particles.js/particles.js',
  ],
  css: [
    'node_modules/normalize.css/normalize.css',
  ],
}

gulp.task('vendor:js', () => {

  return gulp.src(vendor.js)
    .pipe(pl.plumber())
    // .pipe(pl.sourcemaps.init())
    .pipe(pl.concat('vendor.js'))
    .pipe(pl.uglify())
    // .pipe(pl.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('vendor:css', () => {

  return gulp.src(vendor.css)
    .pipe(pl.plumber())
    .pipe(pl.concat('vendor.css'))
    .pipe(pl.cleanCss())
    .pipe(gulp.dest('dist'));
});
