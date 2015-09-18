var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var config = {
  scssFiles: './src/scss/**/*.scss',
  docsPath: './src/docs',
  scssFilesDocs: './src/docs/css/**/*.scss',
  yekyllConfigFile: './src/docs/_config.yml',

  cssFiles: './dist/**/*.css',
  destPath: './dist',

  docsBuildPath: './docs'
};

gulp.task('sass', function () {
  gulp.src(config.scssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.destPath));
});

gulp.task('autoprefixer', ['sass'], function () {
  return gulp.src('dist/main.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass-docs', function () {
  gulp.src(config.scssFilesDocs)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.docsPath + '/css'));
});

gulp.task('jekyll', ['sass-docs'], function (gulpCallBack) {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build', '--source', config.docsPath, '--destination', config.docsBuildPath, '--config', config.yekyllConfigFile], {stdio: 'inherit'});

  jekyll.on('exit', function (code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('jekyll:watch', ['sass-docs'], function (gulpCallBack) {
  gulp.watch(config.scssFiles, ['sass']);
  gulp.watch(config.scssFilesDocs, ['sass-docs']);

  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['serve', '--source', config.docsPath, '--destination', config.docsBuildPath, '--config', config.yekyllConfigFile], {stdio: 'inherit'});

  jekyll.on('exit', function (code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('default', ['sass', 'autoprefixer', 'sass-docs', 'jekyll:watch'], function defaultTask() {
  gulp.watch(config.scssFiles, ['sass']);
});

gulp.task('build', ['sass', 'autoprefixer', 'sass-docs', 'jekyll']);
