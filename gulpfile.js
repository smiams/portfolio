var gulp = require('gulp');
var del = require('del');
var haml = require('gulp-ruby-haml');
var sass = require('gulp-ruby-sass');

gulp.task('clean', function () {
  return del('./build/**/*');
});

gulp.task('haml', ['clean'], function() {
  gulp.src('./app/haml/**/*.haml')
  .pipe(haml())
  .pipe(gulp.dest('./build/html'));
});

gulp.task('sass', ['clean'], function() {
  return sass('./app/scss/**/*.scss', {emitCompileError: true})
  .pipe(gulp.dest('./build/css'));
});

gulp.task('js', ['clean'], function() {
  gulp.src('./app/js/**/*.js')
  .pipe(gulp.dest('./build/js'));
});

gulp.task('images', ['clean'], function() {
  gulp.src('./app/images/**/*.*')
  .pipe(gulp.dest('./build/images'));
});

gulp.task('bower', ['clean'], function() {
  // gulp.src('./bower_components/foundation/css/normalize.min.css')
  // .pipe(gulp.dest('./build/css'));
  //
  // gulp.src('./bower_components/foundation/css/foundation.min.css')
  // .pipe(gulp.dest('./build/css'));

  gulp.src('./bower_components/foundation/js/foundation.min.js')
  .pipe(gulp.dest('./build/js'));

  gulp.src('./bower_components/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('./build/js'));
});

gulp.task('fonts', ['clean'], function() {
  gulp.src('./app/lib/fonts/**/*.otf')
  .pipe(gulp.dest('./build/fonts'));
});

gulp.task('default', ['haml', 'sass', 'js', 'images', 'fonts', 'bower']);

var vent = function(event) {
  console.log(event.type + " happened to: " + event.path);
};

gulp.watch('app/**/*', ['default']);

gulp.watch('app/**/*', function(event) {
  console.log('> > > ' + event.path + ' ' + event.type);
});