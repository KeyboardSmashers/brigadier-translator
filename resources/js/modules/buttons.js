exports.InitButtons = () => {
    win.webContents.executeJavaScript(`
        document.querySelector("#minimizeBtn").addEventListener(() => {

        });

        document.querySelector("#closeBtn").addEventListener(() => {
            closeApp();
        });
    `);

}