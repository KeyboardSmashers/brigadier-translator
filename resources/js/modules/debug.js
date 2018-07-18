function Debug(){

}

Debug.prototype.Write = (text, level) =>{
    document.querySelector(`#logs`).innerHTML += `<span class="log ${level}">${text}</span><br>`
}

Debug.prototype.Log = function Log (text) {
    const d = new Date();
    this.Write(`[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] | LOG | ${text}`, `level-log`);
}

Debug.prototype.Info = function Info (text) {
    const d = new Date();
    this.Write(`[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] | INFO | ${text}`, `level-info`);
}

Debug.prototype.Warn = function Warn (text) {
    const d = new Date();
    this.Write(`[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] | WARN | ${text}`, `level-warn`);
}

Debug.prototype.Error = function Error (text) {
    const d = new Date();
    this.Write(`[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] | ERROR | ${text}`, `level-error`);
}

Debug.prototype.Fatal = function Fatal (text) {
    const d = new Date();
    this.Write(`FATAL ERROR<br>DETAILS:<br>&nbsp;TIME: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}<br>&nbsp;CALLER: ${Fatal.caller.name}<br>MESSAGE:<br>"${text}"`, `level-fatal`);
}

Debug.prototype.Clear() = () => {
    document.querySelector(`#logs`).innerHTML = ``;
}

module.exports = new Debug();