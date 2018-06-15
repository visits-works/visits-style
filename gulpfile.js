const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('js', function () {
  return gulp.src([
    'src/**/*.js',
    '!./src/**/*.test.js',
    '!./src/**/__test__',
    '!./src/__mocks__/**/*.js'
  ])
    .pipe(babel())
    .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['js']);
