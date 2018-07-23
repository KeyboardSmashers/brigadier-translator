const Debug = require(`./resources/js/modules/debug.js`)
const Translator = require(`./resources/js/modules/core.js`);

document.querySelector(`#input-ta`).addEventListener(`keyup`, () => {
    let output = Translator.translate(document.querySelector(`#input-ta`).value);
    document.querySelector(`#output-ta`).innerHTML = output;
    document.querySelector(`#output-label`).classList.remove(output != `` ? `visible` : `invisible`);
    document.querySelector(`#output-label`).classList.add(output == `` ? `visible` : `invisible`);
});
    