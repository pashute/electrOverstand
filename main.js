// console.log('Hello from Electron')

// CommonJS module syntax:Import app and BrowserWindow 
// app - app's event lifecycle. Non instatiable
// BrowserWindow - creates and manages app windows
const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
  })

