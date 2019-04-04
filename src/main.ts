import { app, BrowserWindow } from "electron";
import * as fs from "fs";
import * as path from "path";

const windowStateKeeper = require("electron-window-state");

let mainWindow: BrowserWindow;

/**
 *  创建窗口
 */
function createWindow() {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  })

  mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    backgroundColor: "#252B39",
    webPreferences: {
      nodeIntegrationInWorker: true,
    }
  });

  mainWindowState.manage(mainWindow);
  mainWindow.loadFile(path.join(__dirname, "../views/index.html"));

  mainWindow.on("closed", () => {
    mainWindow = null;
  })
}

console.log(path.join(__dirname, "../views/index.html"));

app.on("ready", createWindow);


