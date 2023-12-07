// console.log('Hello from Electron')

// CommonJS module syntax:Import app and BrowserWindow 
// app - app's event lifecycle. Non instatiable
// BrowserWindow - creates and manages app windows
const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}


  // const win2 = new BrowserWindow({
  //   width: 800,
  //   height: 600
  // })
  // win2.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
  })

