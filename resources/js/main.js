// Open window
const { app, BrowserWindow } = require(`electron`);
const path = require(`path`);

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 700, 
        height: 405, 
        resizable: false, 
        title: `Brigadier Translator`, 
        frame: false,
        show: false,
        icon: path.join(process.cwd(), `/resources/icons/bt-logo-128x128.png`)
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

        function copyEvent() {
            // Hacker Noon, you're awesome
            const el = document.createElement("textarea");
            el.value = document.getElementById("output-ta").value;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';                 
            el.style.left = '-9999px';
            document.body.appendChild(el);
            const selected =            
                document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            if (selected) {
                document.getSelection().removeAllRanges()
                document.getSelection().addRange(selected);
            }
        }

        document.getElementById("copy-btn").addEventListener("click", copyEvent);

        M.AutoInit();
    `);
    
    win.once(`ready-to-show`, () => {
        win.show();
    });
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

