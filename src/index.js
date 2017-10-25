import fs from 'fs'

const selectorReg = /^##/

export default (rulesFile) => {
  let lines = fs.readFileSync(rulesFile).toString().split('\n')
  return lines.map(function(el) {
    if(el.match(selectorReg)) {
      return el.replace(selectorReg, '').replace(/"/g, '\\"') }
  }).filter((el) => {
    return typeof(el) == 'string' &&
      el.length > 1 &&
      !el.match(/:|\s_|Emc/)
  }).join(', ')
}
