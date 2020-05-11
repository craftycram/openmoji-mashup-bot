# OpenMoji Mashup Bot

## Documentation
 
### Procedure
From 12:00 PM to 2:00 PM, Emojis [HfG OpenMoji](#emoji-source) sorted out and selected only emojis with faces.
We then divided them into individual parts (mouths, eyes, objects & backgrounds) using Adobe Illustrator and saved them in groups.

To put the emoji parts together automatically we wrote a program with Node.js,
which randomly selects different parts and assembles them into an emoji.
For this we use [xpath](https://www.npmjs.com/package/xpath) from Node.js which can process XML files.

### Emoji Editing
First we sorted out the emojis from the GitHub repository so that we only have the "normal" emojis.
After that, each of us received a copy of the folder and we split up the processing / editing.
We opened all of the emojis in Illustrator and deleted all but the elements assigned to us.
Noah sorted out the eyes, Luca the mouths, Steve the background and Marc all other objects.
With some emojis there were still elements that were attached to the mouth or eyes, for which we decided together who kept it.
Finally, we collected all emojis and included them in the repo.

### Software
The Node.js script reads the folders with [fs](https://www.npmjs.com/package/fs) and saves all files in an array.

A file is then randomly selected from each category and also saved.
In order to extract and process the relevant data from the respective SVG, we use [xpath](https://www.npmjs.com/package/xpath),
which allows us to search files in XML format (i.e. also SVGs) with a certain terminology (cf.RegEx).
We search for all group and style tags and save them in another array after the names of the two tags have been assigned the category.

After all files have been searched and extracted, the array is converted into a template file using [mustache](https://www.npmjs.com/package/mustache), and is inserted an empty SVG, and saved.


### Emoji-Source
This is an emoji mashup bot using the OpenMoji data set.

Open source emojis for designers, developers and everyone else! OpenMoji is an open-source project of the HfG Schwäbisch Gmünd by Benedikt Groß, Daniel Utz, 50+ students and external contributors.

👉 http://OpenMoji.org
🐙 github.com/hfg-gmuend/openmoji
