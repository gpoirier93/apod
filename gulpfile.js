
var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task("copy", ["bundle"], function () {
    gulp.src(["app/lib/materialize/dist/fonts/roboto/*.ttf"
        ,"app/lib/materialize/dist/fonts/roboto/*.oet"
        ,"app/lib/materialize/dist/fonts/roboto/*.woff"
        ,"app/lib/materialize/dist/fonts/roboto/*.woff2"])
        .pipe(gulp.dest("app/dist/fonts/roboto"));
    return gulp.src(["app/index.html"
        ,"app/lib/materialize/dist/css/materialize.css"
        ,"app/lib/jquery/dist/jquery.min.js"
        ,"app/lib/materialize/dist/js/materialize.min.js"
        ,"app/lib/moment/min/moment.min.js"
        ,"app/style.css"])
        .pipe(gulp.dest("app/dist"));
});

// gulp.task("copy", ["bundle"], function() {
//     return gulp.src(["app/lib/materialize/dist/fonts/roboto/*.ttf"
//         ,"app/lib/materialize/dist/fonts/roboto/*.oet"
//         ,"app/lib/materialize/dist/fonts/roboto/*.woff"
//         ,"app/lib/materialize/dist/fonts/roboto/*.woff2"])
//         .pipe(gulp.dest("app/dist/fonts/roboto"));
// });

gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});