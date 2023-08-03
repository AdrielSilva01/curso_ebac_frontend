const gulp = require('gulp');
const compileSass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Função para compilar o SASS
function compileSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
        .pipe(gulp.dest('./build/styles'));
}
    
    

    // Função para otimizar as imagens
    function imagemin() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./buid/images'));
    }

    // Função para minificar o código JavaScript
    function minifyJs() {
    return gulp.src('./source/scrypts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
    }


    exports.default = function() {
        gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
        gulp.watch('./source/scrypts/*.js', {ignoreInitial: false}, gulp.series(minifyJs));
        gulp.watch('/source/images/*', {ignoreInitial: false}, gulp.series(imagemin));
    }



