var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var del = require('del');

var config = {
  scssFiles: './src/scss/**/*.scss',
  iconFiles: './src/icons/**/*',
  docsPath: './src/docs',
  docsFiles: './src/docs/**/*',
  scssFilesDocs: './src/docs/css/**/*.scss',
  cssFilesDocs: './src/docs/css/**/*.css',
  yekyllConfigFile: './src/docs/_config.yml',

  cssFiles: './dist/**/*.css',
  destPath: './dist',

  docsBuildPath: './docs'
};

gulp.task('clean', function () {
  return del([config.destPath, config.cssFilesDocs]);
});

gulp.task('sass', ['clean'], function () {
  return gulp.src(config.scssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
    .pipe(gulp.dest(config.destPath));
});

gulp.task('sass-docs', ['sass'], function () {
  return gulp.src(config.scssFilesDocs)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
    .pipe(gulp.dest(config.docsPath + '/css'));
});

gulp.task('icons', ['sass-docs'], function () {
  return gulp.src(config.iconFiles)
    .pipe(gulp.dest(config.destPath))
    .pipe(gulp.dest(config.docsPath + '/icons'));
});

gulp.task('jekyll', ['icons'], function (gulpCallBack) {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build', '--source', config.docsPath, '--destination', config.docsBuildPath, '--config', config.yekyllConfigFile], {stdio: 'inherit'});

  jekyll.on('exit', function (code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('jekyll:watch', ['icons'], function (gulpCallBack) {
  gulp.watch([config.scssFiles, config.docsFiles], ['sass', 'sass-docs']);
  gulp.watch([config.iconFiles], ['icons']);

  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['serve', '--source', config.docsPath, '--destination', config.docsBuildPath, '--config', config.yekyllConfigFile], {stdio: 'inherit'});

  jekyll.on('exit', function (code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('default', ['clean', 'sass', 'sass-docs', 'icons', 'jekyll:watch']);

gulp.task('build', ['clean', 'sass', 'sass-docs', 'icons', 'jekyll']);
