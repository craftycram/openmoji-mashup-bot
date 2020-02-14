const fs = require('fs');
const {
  exec
} = require("child_process");
const Mustache = require('mustache');
const xmlhandlerg = require('./xmlhandlerg');
const xmlhandlerstyles = require('./xmlhandlerstyles');

// filepaths
const emojiFolderMain = '/home/pi/openmoji-mashup-bot/res/emojis';
const emojiFolderMouth = `${emojiFolderMain}/mouth`;
const emojiFolderEyes = `${emojiFolderMain}/eyes`;
const emojiFolderObjects = `${emojiFolderMain}/objects`;
const emojiFolderBackground = `${emojiFolderMain}/background`;


/* file-arrays */
const mouths = [];
const eyes = [];
const objects = [];
const backgrounds = [];


/* randomly choosen files */
/*
let mouth;
let eye;
let object;
let background;
*/

/* start reading folders */
/* pushing into array */
fs.readdirSync(emojiFolderMouth).forEach((file) => {
  mouths.push(file);
});

fs.readdirSync(emojiFolderEyes).forEach((file) => {
  eyes.push(file);
});

fs.readdirSync(emojiFolderObjects).forEach((file) => {
  objects.push(file);
});

fs.readdirSync(emojiFolderBackground).forEach((file) => {
  backgrounds.push(file);
});
/* end of reading folder */

// console.log(mouths, eyes, objects, backgrounds);

setInterval(() => {

  /* svg data */
  const data = [];
  const styles = [];


  /* randomly choosing files */
  const mouth = mouths[Math.floor(Math.random() * mouths.length)];
  const eye = eyes[Math.floor(Math.random() * eyes.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];
  const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  // console.log(mouth, eye, object, background);

  data.push(xmlhandlerg(`${emojiFolderBackground}/${background}`, 'bg'));
  data.push(xmlhandlerg(`${emojiFolderMouth}/${mouth}`, 'mouth'));
  data.push(xmlhandlerg(`${emojiFolderEyes}/${eye}`, 'eye'));
  data.push(xmlhandlerg(`${emojiFolderObjects}/${object}`, 'obj'));

  styles.push(xmlhandlerstyles(`${emojiFolderBackground}/${background}`, 'bg'));
  styles.push(xmlhandlerstyles(`${emojiFolderMouth}/${mouth}`, 'mouth'));
  styles.push(xmlhandlerstyles(`${emojiFolderEyes}/${eye}`, 'eye'));
  styles.push(xmlhandlerstyles(`${emojiFolderObjects}/${object}`, 'obj'));


  const timeNow = Date.now();

  const svgTemplate = fs.readFileSync('/home/pi/openmoji-mashup-bot/res/templates/main.svg').toString();
  const svgOutput = {
    groups: data.toString(),
    styles: styles.toString(),
  };

  const htmlTemplate = fs.readFileSync('/home/pi/openmoji-mashup-bot/res/templates/index.html').toString();
  const htmlOutput = {
    image: `emoji_${timeNow}.svg`
  };

  const outputSVG = Mustache.render(svgTemplate, svgOutput);
  const outputHTML = Mustache.render(htmlTemplate, htmlOutput);

  fs.writeFileSync(`/home/pi/openmoji-mashup-bot/res/output/emoji_${timeNow}.svg`, outputSVG);
  fs.writeFileSync('/home/pi/openmoji-mashup-bot/res/index.html', outputHTML);
}, 5000);
