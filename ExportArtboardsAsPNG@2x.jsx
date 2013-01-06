// Exports files as `file-name.artboard-name@2x.png`

var destFolder = Folder.selectDialog('Select folder for PNG files.', '~');
var docRef = app.activeDocument;
var numArtboards = docRef.artboards.length;

for (var i = 0; i < numArtboards; i++ ) {
  var destFile = new File(destFolder + "/" + docRef.name.replace(/.[^.]+$/,'') + "." + docRef.artboards[i].name + "@2x.png");    
  var options = new ExportOptionsPNG24();
  options.artBoardClipping = true;
  options.matte = false;

  // Make it retina-ready
  options.horizontalScale = 200;
  options.verticalScale = 200;

  docRef.artboards.setActiveArtboardIndex(i);

  docRef.exportFile (destFile, ExportType.PNG24, options);    
}