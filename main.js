const { app, BrowserWindow } = require("electron");

let mainWindow;
let browserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  browserWindow = new BrowserWindow({
    parent: mainWindow
  });

  mainWindow.loadFile("index.html");
  browserWindow.loadFile("https://github.com");
};

app.on("ready", createWindow);
