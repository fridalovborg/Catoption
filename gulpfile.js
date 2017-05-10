var gulp = require('gulp');

// Plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var bs = require('browser-sync').create();

// Tasks
gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'))
		.pipe(bs.reload({ stream: true }))
});

gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(concat('all.js'))
		.pipe(uglify({ preserveComments: 'all'}))
		.pipe(gulp.dest('./js'));
		.pipe(bs.reload({ stream: true }))
});

gulp.task('browser-sync', ['sass'], function() {
	bs.init({
		server: {
			baseDir: "./"
		}
	})
});

// Watch
gulp.task('watch', function() {
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('*.html').on('change', bs.reload);
});

gulp.task('default', ['watch', 'sass', 'scripts', 'browser-sync']);