// Open window
const {app, BrowserWindow, remote} = require(`electron`);
const btns = require(`./modules/buttons`);

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 700, 
        height: 320, 
        resizable: false, 
        title: `Brigadier Translator`, 
        frame: false
    });
    win.loadFile(`index.html`);

    win.on(`closed`, () => {
        win = null;
    });

    win.webContents.executeJavaScript(`
        let w = require("electron").remote.getCurrentWindow();
        document.getElementById("close-btn").addEventListener("click", function(e) {
            w.close();
        });

        document.getElementById("minimize-btn").addEventListener("click", function(e) {
            w.minimize();
        });
    `);
    
}

app.on(`ready`, createWindow);

app.on(`window-all-closed`, () => {
    if (process.platform !== `darwin`) {
        app.quit();
    }
});

app.on(`activate`, () => {
    if (win === null) {
        createWindow();
    }
});

function closeApp() {
    
}

