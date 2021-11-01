"use strict";

let gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
	return gulp.src('_scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./docs/css/'))
		.pipe(gulp.dest('./css/'))
	;
});

gulp.task("watch", function() {
	gulp.watch('_scss/**/*.scss', gulp.series('sass'));

});

gulp.task("default", gulp.series('sass', 'watch'));

