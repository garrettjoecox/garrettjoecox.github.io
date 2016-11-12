
const gulp = require('gulp');
const stream = require('add-stream');
const pl = require('gulp-load-plugins')();

gulp.task('watch', ['src'], () => {
  pl.livereload.listen();
  gulp.watch(['app/src/**/*.js', 'app/src/**/*.html'], ['src:js']);
  gulp.watch(['app/src/**/*.scss'], ['src:css']);
});

gulp.task('dev', ['watch'], () => {
  pl.nodemon({
    script: 'api/index.js',
    ignore: [ 'node_modules/', 'app/' ]
  }).on('restart', () => pl.livereload());
});

gulp.task('src', ['src:js', 'src:css']);

gulp.task('src:js', () => {

  return gulp.src(['app/src/index.js', 'app/src/**/*.js'])
    .pipe(pl.plumber())
    .pipe(pl.sourcemaps.init())
    .pipe(pl.babel())
    .pipe(stream.obj(gulp.src('app/src/**/*.html')
      .pipe(pl.angularTemplatecache({ module: 'skeleton' }))))
    .pipe(pl.concat('index.js'))
    .pipe(pl.ngAnnotate())
    .pipe(pl.uglify())
    .pipe(pl.sourcemaps.write('.'))
    .pipe(gulp.dest('app/dist'))
    .pipe(pl.livereload());
});

gulp.task('src:css', () => {

  return gulp.src(['app/src/**/*.scss'])
    .pipe(pl.plumber())
    .pipe(pl.sourcemaps.init())
    .pipe(pl.concat('index.css'))
    .pipe(pl.sass().on('error', pl.sass.logError))
    .pipe(pl.autoprefixer())
    .pipe(pl.cleanCss())
    .pipe(pl.sourcemaps.write('.'))
    .pipe(gulp.dest('app/dist'))
    .pipe(pl.livereload());
});

gulp.task('vendor', ['vendor:js', 'vendor:css', 'vendor:fonts']);

const vendor = {
  js: [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
  ],
  css: [
    'node_modules/normalize.css/normalize.css',
    'node_modules/font-awesome/css/font-awesome.min.css'
  ],
  fonts: [
    'node_modules/font-awesome/fonts/**/*'
  ]
}

gulp.task('vendor:js', () => {

  return gulp.src(vendor.js)
    .pipe(pl.plumber())
    .pipe(pl.concat('vendor.js'))
    .pipe(gulp.dest('app/dist'));
});

gulp.task('vendor:css', () => {

  return gulp.src(vendor.css)
    .pipe(pl.plumber())
    .pipe(pl.concat('vendor.css'))
    .pipe(pl.cleanCss())
    .pipe(gulp.dest('app/dist'));
});

gulp.task('vendor:fonts', () => {

  return gulp.src(vendor.fonts)
    .pipe(pl.plumber())
    .pipe(gulp.dest('app/fonts'));
});
