const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('copy',() =>
  gulp.src("package-chooser*")
  .pipe(gulp.dest("./bower_components/package-chooser"))
);

gulp.task('serve',(done) => {

  browserSync.init({
    server: {
        baseDir: "./"
    }
  },done);

  gulp.watch("package-chooser*").on('change', gulp.series('copy', browserSync.reload));
  gulp.watch("demo/**").on('change', gulp.series(browserSync.reload));

});