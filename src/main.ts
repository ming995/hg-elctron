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
    backgroundColor: "#ffffff",
    webPreferences: {
      nodeIntegrationInWorker: true,
    }
  });

  mainWindowState.manage(mainWindow);
  mainWindow.loadFile(path.join(__dirname, "../../views/main.html"));
}

app.on("ready", createWindow);
