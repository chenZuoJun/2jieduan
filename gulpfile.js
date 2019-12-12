var gulp = require('gulp');
var load = require('gulp-load-plugins')();

gulp.task('sass',function(done){
	gulp.src('./src/css/header.scss')
	.pipe(load.sass())
	.pipe(gulp.dest('./dist/css/'))
	done()
})
gulp.task('css',function(done){
	gulp.src('./src/css/*.css')
	.pipe(load.minifyCss())
	.pipe(gulp.dest('./dist/css/'))
	done()
})

gulp.task('html',function(done){
	gulp.src('./src/*.html')
	.pipe(load.minifyHtml())
	.pipe(gulp.dest('./dist/'))
	done()
})
gulp.task('js',function(done){
	gulp.src('./src/js/*.js')
	.pipe(load.uglify())
	.pipe(gulp.dest('./dist/js/'))
	done()
})
// login
gulp.task('loginCss',function(done){
	gulp.src('./src/login/css/*.css')
	.pipe(load.minifyCss())
	.pipe(gulp.dest('./dist/login/css/'))
	done()
})

gulp.task('loginHtml',function(done){
	gulp.src('./src/login/*.html')
	.pipe(load.minifyHtml())
	.pipe(gulp.dest('./dist/login/'))
	done()
})
gulp.task('loginJs',function(done){
	gulp.src('./src/login/js/*.js')
	.pipe(load.uglify())
	.pipe(gulp.dest('./dist/login/js/'))
	done()
})

//logon
gulp.task('logonCss',function(done){
	gulp.src('./src/logon/css/*.css')
	.pipe(load.minifyCss())
	.pipe(gulp.dest('./dist/logon/css/'))
	done()
})

gulp.task('logonHtml',function(done){
	gulp.src('./src/logon/*.html')
	.pipe(load.minifyHtml())
	.pipe(gulp.dest('./dist/logon/'))
	done()
})
gulp.task('logonJs',function(done){
	gulp.src('./src/logon/js/*.js')
	.pipe(load.uglify())
	.pipe(gulp.dest('./dist/logon/js/'))
	done()
})




gulp.task('init',gulp.series(gulp.parallel('sass','html','css','js','loginCss','loginJs','loginHtml','logonCss','logonJs','logonHtml'),function(done){
	// gulp.watch('./src/css',gulp.series('sass'))
	done()
}))