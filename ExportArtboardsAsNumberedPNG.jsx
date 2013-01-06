//
// Exports an Adobe Illustrator file’s artboards to separate PNG files.
// File name format: `file-name.artboard-num.artboard-name.png`
// 
// Modified and maintained by Joshua Rudd (@joshuarudd)
// Based on a script by Dan Smith (@dansketchpad)
// via John Hicks http://hicksdesign.co.uk/journal/illustrator-export-artboards-as-png32
//

var destFolder = Folder.selectDialog('Select folder for PNG files.', '~');
var docRef = app.activeDocument;
var numArtboards = docRef.artboards.length;

// Add artboard number in the filename
var ArtboardNum = 0;

for (var i = 0; i < numArtboards; i++ ) {
  ArtboardNum = i+1;
  var destFile = new File(destFolder + "/" + docRef.name.replace(/.[^.]+$/,'') + "." + (ArtboardNum < 10 ? '0' + ArtboardNum : ArtboardNum) + "." + docRef.artboards[i].name + ".png");    
  var options = new ExportOptionsPNG24();
  options.artBoardClipping = true;
  options.matte = false;

  docRef.artboards.setActiveArtboardIndex(i);

  docRef.exportFile (destFile, ExportType.PNG24, options);    
}