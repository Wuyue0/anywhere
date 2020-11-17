const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');


gulp.task('clear', () => {
	del.sync('build');
})

gulp.task('less', ()=>{
	gulp.src('src/**/*.less')
		.pipe(less())
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 5 versions', 'firefox > 20'],
			cascade: false
		}))
		.pipe(cleanCss())
		.pipe(gulp.dest('build'))
})

gulp.task('default', ['clear','less'],()=>{
	console.log('default');
})

gulp.task('watch', ()=>{
	const watcher = gulp.watch('src/**/*',['default']);
	watcher.on('change', event=>{
		console.log('File' + event.path + 'was' + event.type)
	})
})

