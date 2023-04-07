const { src, dest, series } = require('gulp')
const clean = require('gulp-dest-clean')
const run = require('gulp-run')

const source = 'C:/Data/Werk/MoneyMaking/Tujusemesta/Ourchetype/ourchetype-3/ourchetype-3'
const destination = 'ourchetype-3'

function build() {
  return run('npm --prefix ' + source + ' run build').exec()
}
function update() {
  return src(source + '/dist/**')
    .pipe(clean(destination))
    .pipe(dest(destination))
}

exports.ourch3 = series(build, update)