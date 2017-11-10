import fs from 'fs'

const selectorReg = /^##/

export default (rulesFile, escape=true) => {
  let lines = fs.readFileSync(rulesFile).toString().split('\n')
  return lines.map(function(el) {
    if(el.match(selectorReg)) {
      el = el.replace(selectorReg, '')
      if(!escape) return  el
      return el.replace(/"/g, '\\"') }
  }).filter((el) => {
    return typeof(el) == 'string' &&
      el.length > 1 &&
      !el.match(/:|\s_|Emc/)
  }).join(', ')
}
