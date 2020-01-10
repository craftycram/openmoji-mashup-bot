const fs = require('fs');
const Mustache = require('mustache');
const xmlhandlerg = require('./xmlhandlerg');
const xmlhandlerstyles = require('./xmlhandlerstyles');

// filepaths
const emojiFolderMain = './res/emojis';
const emojiFolderMouth = `${emojiFolderMain}/mouth`;
const emojiFolderEyes = `${emojiFolderMain}/eyes`;
const emojiFolderObjects = `${emojiFolderMain}/objects`;
const emojiFolderBackground = `${emojiFolderMain}/background`;

/* file-arrays */
let mouths = [];
let eyes = [];
let objects = [];
let backgrounds = [];

/* randomly choosen files */
let mouth;
let eye;
let object;
let background;

/* svg data */
let data = [];
let styles = [];

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

/* randomly choosing files */
mouth = mouths[Math.floor(Math.random() * mouths.length)];
eye = eyes[Math.floor(Math.random() * eyes.length)];
object = objects[Math.floor(Math.random() * objects.length)];
background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

// console.log(mouth, eye, object, background);

data.push(xmlhandlerg(`${emojiFolderBackground}/${background}`));
data.push(xmlhandlerg(`${emojiFolderMouth}/${mouth}`));
data.push(xmlhandlerg(`${emojiFolderEyes}/${eye}`));
data.push(xmlhandlerg(`${emojiFolderObjects}/${object}`));

styles.push(xmlhandlerstyles(`${emojiFolderBackground}/${background}`));
styles.push(xmlhandlerstyles(`${emojiFolderMouth}/${mouth}`));
styles.push(xmlhandlerstyles(`${emojiFolderEyes}/${eye}`));
styles.push(xmlhandlerstyles(`${emojiFolderObjects}/${object}`));

// eslint-disable-next-line no-console
const template = fs.readFileSync('./res/templates/main.svg').toString();
const test = {
  groups: data.toString(),
  styles: styles.toString(),
};

/*
fs.writeFileSync('log.txt', data);
*/

console.log(data);
console.log(styles);
var output = Mustache.render(template, test);
console.log(output);

fs.writeFileSync('./res/test.svg', output);
