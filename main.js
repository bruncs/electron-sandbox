const { app, BrowserWindow } = require("electron");

let mainWindow;

createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile("index.html");
};

app.on("ready", createWindow);
