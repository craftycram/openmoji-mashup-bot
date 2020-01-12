# OpenMoji Mashup Bot

## Dokumentation
 
### Ablauf
Von 12 bis ca 13:30-14:00 Uhr Emojis [HfG OpenMoji](#emoji-source) aussortiert und nur die „richtigen“ Emojis rausgesucht.  
Diese haben wir dann in Einzelteile (Münder, Augen, Objekte & Hintergründe) mit Adobe Illustrator zerlegt und gruppiert abgespeichert.

Um die Emoji Teile dann automatisch zusammen zu setzen haben wir begonnen in JavaScript mit Node.js ein Programm zu schreiben,
welches uns zufällig verschiedene Teile auswählt und diese zu einem Emoji zusammensetzt.
Hierfür verwenden wir ein [Node Modul](https://www.npmjs.com/package/xpath), mit dem xml-Dateien be-/verarbeitet werden können.

### Emoji-Aufbereitung
Zuerst haben wir die Emojis aus der GitHub Repository aussortiert, so dass wir nur noch die "normalen" Emojis haben.   
Danach hat jeder von uns eine Kopie des Ordners erhalten und wir haben uns die Bearbeitung / Aufbereitung aufgeteilt.  
Wir haben jeder alle Emojis in Illustrator geöffnet und alle bis auf die uns zugewiesenen Elemente gelöscht.  
Noah hat die Augen aussortiert, Luca die Münder, Steve die Hintergründe und Marc alle anderen Objekte.
Bei manchen Emojis gab es noch Elemente die an den Mündern oder Augen angesetzt waren, bei denen haben wir jeweils gemeinsam entschieden wer es behält.  
Zum Schluss haben wir alle Emojis gesammelt und in die Repo eingebunden.

### Software


### Emoji-Source
This is an emoji mashup bot using the OpenMoji data set.

Open-source emojis for designers, developers and everyone else! OpenMoji is an open-source project of the HfG Schwäbisch Gmünd by Benedikt Groß, Daniel Utz, 50+ students and external contributors.

👉 OpenMoji.org/
🐙 github.com/hfg-gmuend/openmoji
