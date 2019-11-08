const { app, BrowserWindow, session, net } = require("electron");
const path = require("path");
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 550,
    height: 650,
    resizable: false,
    transparent: true,
    frame: false
    // useContentSize: true
    // webPreferences: {
    //   webSecurity: false,
    //   plugins: true,
    //   nodeIntegration: true,
    //   webviewTag: true
    // }
  });

  // and load the index.html of the app.
  win.loadFile(path.join(__dirname, "/index.html"));
  // win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on("closed", () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on("ready", () => {
    createWindow();
  });

  // Quit when all windows are closed.
  app.on("window-all-closed", () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });
} catch (e) {
  // Catch Error
  // throw e;
}
