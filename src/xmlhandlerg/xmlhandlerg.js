const fs = require('fs');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;

function xmlhandlerg(path) {
  /* read xml data */
  const domobj = new dom().parseFromString(fs.readFileSync(path, 'utf-8'));
  const select = xpath.useNamespaces({
    svg: 'http://www.w3.org/2000/svg',
  });
  return select('//svg:g/child::*', domobj).toString();
  // const title = select("//svg:g[@id='line']", domobj).toString();
}
module.exports = xmlhandlerg;
