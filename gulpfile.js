var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserify = require('gulp-browserify'),
    webserver = require('gulp-webserver');

    var dist = './dist',
        app = './app';
    // var app = './app';

// Sass tasks
gulp.task('sass', function() {
  return gulp.src(dist + '/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(gulp.dest('app/css')) // Outputs it in the css folder
})

// reg js
gulp.task('js', function(){
  return gulp.src(dist + '/js/**/*.js')
  .pipe(gulp.dest(app + '/js'));
})





//

// Watchers
gulp.task('watch', function() {
  gulp.watch(dist + '/js/**/*', ['js']);
  gulp.watch(dist + '/scss/**/*.scss', ['sass']);
});

// Webserver
gulp.task('webserver', function() {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

// Watch tasks
gulp.task('default', ['watch', 'sass','js', 'webserver']);
