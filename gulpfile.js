const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

const stylePath = "./src/*.sass";

// Compile SASS into CSS
function style(){
    // setup sccs direction
    return gulp.src(stylePath)
    // compile
    .pipe(sass())
    // build
    .pipe(gulp.dest("./css"))
    // stream changes to browser
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(stylePath, style);
    gulp.watch("./src/*.html").on("change", browserSync.reload);
}

// gulp functions
exports.watch = watch;