var gulp = require('gulp');
var sass = require('gulp-sass');
var styleguide = require('sc5-styleguide');

var config = {
  scssFiles: './src/scss/**/*.scss',
  outputPath: './docs'
};

gulp.task('styleguide:generate', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(styleguide.generate({
      title: 'Brand Styleguide',
      server: true,
      rootPath: config.outputPath,
      overviewPath: './src/scss/overview.md'
    }))
    .pipe(gulp.dest(config.outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(config.outputPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task('default', ['styleguide'], function defaultTask() {
  gulp.watch(config.scssFiles, ['styleguide']);
});
