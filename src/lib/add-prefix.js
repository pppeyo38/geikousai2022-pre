const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const fs = require('fs')
const path = require('path')

export async function addPrefix(css) {
  const log = path.join(process.cwd(), 'logs/autoprefixer.log')
  fs.writeFileSync(log, '')

  return postcss([
    autoprefixer({
      flexbox: 'no-2009',
      grid: 'autoplace',
      overrideBrowserslist: ['last 1 version', '> 1%', 'ie 11'],
    }),
  ])
    .process(css)
    .then((result) => {
      result.warnings().forEach((warn) => {
        // console.warn(warn.toString());

        // logging
        fs.appendFileSync(log, `${warn.toString()}\n`)
      })

      return result.css
    })
}
