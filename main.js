const {app, BrowserWindow} = require('electron')
const path = require('path')
let mainWindow

function createWindow () {




  // Create the browser window with a preload script. The script just adds a right click contet menu and an "inspect element" entry to it.
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600, 
    webPreferences: {preload: path.join(__dirname, "preload.js")}
  })





  // just default stuff from the quickstart project
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})