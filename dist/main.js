"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
const windowStateKeeper = require("electron-window-state");
let mainWindow;
/**
 *  创建窗口
 */
function createWindow() {
    const mainWindowState = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 800
    });
    mainWindow = new electron_1.BrowserWindow({
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
electron_1.app.on("ready", createWindow);
//# sourceMappingURL=main.js.map