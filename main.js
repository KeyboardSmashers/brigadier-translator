// Open window
const {app, BrowserWindow} = require(`electron`);

let win;

app.on(`ready`, () => {
    win = new BrowserWindow({width: 500, height: 500});
    win.loadFile(`index.html`);
})