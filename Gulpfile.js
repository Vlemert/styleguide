var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');

var config = {
  scssFiles: './src/scss/**/*.scss'
};

gulp.task('serve', function serveTask () {
  nodemon({
    script: 'index.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  , tasks: ['browserify']
  }).on('restart', function () {
    console.log('restarted!')
  });
});

gulp.task('sass', function taskSass () {
  gulp.src(config.scssFiles)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch(config.scssFiles, ['sass']);
});

gulp.task('default', function defaultTask () {
  // place code for your default task here
});
