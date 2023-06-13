const { src, dest, parallel } = require("gulp");

//imagenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function imagenes(done) {
  const opciones = {
    optimizationLevel: 3,
  };
  src("src/img/**/*.{jpg,png}")
    .pipe(cache(imagemin(opciones)))
    .pipe(dest("destino/img"));

  done();
}

function versionWebp(done) {
  const opciones = {
    quality: 50,
  };

  src("imagenes_aqui/*.{jpg,png}")
    .pipe(webp(opciones))
    .pipe(dest("destino/img"));

  done();
}
function versionAvif(done) {
  const opciones = {
    quality: 50,
  };

  src("imagenes_aqui/*.{jpg,png}")
    .pipe(avif(opciones))
    .pipe(dest("destino/img"));
  done();
}

exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp);
//imagenes, versionWebp, versionAvif
