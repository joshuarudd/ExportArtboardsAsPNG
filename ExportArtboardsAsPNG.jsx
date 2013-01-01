var destFolder = Folder.selectDialog('Select folder for PNG files.', '~');

var docRef = app.activeDocument;
    
var num_artboards = docRef.artboards.length;

var date = new Date();

date = date.valueOf();

var j = 0;

for (var i = 0; i < num_artboards; i++ )
{
    j = i+1;
    var destFile = new File(destFolder + "/" + docRef.name.replace(/.[^.]+$/,'') + "." + docRef.artboards[i].name + ".png");    
    var options = new ExportOptionsPNG24();
    options.artBoardClipping = true;
    options.matte = false;
        
    docRef.artboards.setActiveArtboardIndex(i);
    
    docRef.exportFile (destFile, ExportType.PNG24, options);    
}