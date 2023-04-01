const { src, symlink, series } = require('gulp')
const run = require('gulp-run')

const source = 'C:/Data/Werk/MoneyMaking/Tujusemesta/Ourchetype/ourchetype-3/ourchetype-3'

function link() {
  return src(source + '/dist/*')
    .pipe(symlink('ourchetype-3/'))
}
function build() {
  return run('npm --prefix ' + source + ' run build').exec()
}

exports.ourch3 = series(link, build)