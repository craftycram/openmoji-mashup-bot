const fs = require('fs');
const xpath = require('xpath');
const Dom = require('xmldom').DOMParser;

function xmlhandlerg(path, type) {
  /* read xml data */
  const domobj = new Dom().parseFromString(fs.readFileSync(path, 'utf-8'));
  const select = xpath.useNamespaces({
    svg: 'http://www.w3.org/2000/svg',
  });
  let temp = select('//svg:g/child::*', domobj).toString();
  // const title = select("//svg:g[@id='line']", domobj).toString();
  temp = temp.replace('st', `st_${type}`);
  return temp;
}
module.exports = xmlhandlerg;
