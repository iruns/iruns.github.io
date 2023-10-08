const { src, dest, series } = require('gulp')
const clean = require('gulp-dest-clean')
const run = require('gulp-run')

const source = 'C:/Data/Werk/MoneyMaking/Tujusemesta/Ourchetype/ourchetype-3/ourchetype-icad'
const destination = 'ourchetype-icad'
const destination2 = 'C:/Data/Werk/MoneyMaking/Tujusemesta/Ourchetype/ourchetype-3/ourchetype-dist'

function build() {
  return run('npm --prefix ' + source + ' run build').exec()
}
function update() {
  return src(source + '/dist/**')
    .pipe(clean(destination))
    .pipe(dest(destination))
    .pipe(clean(destination2, undefined, { force: true }))
    .pipe(dest(destination2))
}

exports.ourch3 = series(build, update)
exports.ourch3_update = update

// en
const sourceEn = 'C:/Data/Werk/MoneyMaking/Tujusemesta/Ourchetype/ourchetype-3/ourchetype-3-en'
const destinationEn = 'ourchetype-3-en'
const destination2En = 'C:/Data/Werk/MoneyMaking/Tujusemesta/Ourchetype/ourchetype-3/ourchetype-3-dist-en'

function buildEn() {
  return run('npm --prefix ' + sourceEn + ' run build').exec()
}
function updateEn() {
  return src(sourceEn + '/dist/**')
    .pipe(clean(destinationEn))
    .pipe(dest(destinationEn))
    .pipe(clean(destination2En, undefined, { force: true }))
    .pipe(dest(destination2En))
}
exports.ourch3_en = series(buildEn, updateEn)