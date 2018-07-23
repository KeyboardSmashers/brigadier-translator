const Debug = require(`./debug.js`);

let commandSyntaxDictionary = {};

function Translator(){

}

/*
Translator.prototype.command = (input) => {

}
*/

Translator.prototype.advancement = (input) => {
    if(input.split(` `)[1] == `test`){
        return Debug.Error(`ADVANCEMENT TEST is now unsupported!`);
    } else {
        return input;
    }
}

Translator.prototype.ban = (input) => {
    return input;
}

Translator.prototype.ban_ip = (input) => {
    return input;
}

Translator.prototype.banlist = (input) => {
    return input;
}

Translator.prototype.blockdata = (input) => {
    if(input.split(` `)[2] === undefined){
        return `data get block ${input.split(` `)[1]} ${input.split(` `)[2]} ${input.split(` `)[3]}`
    } else if(input.split(` `)[4] != undefined){
        return `data merge block ${input.split(` `)[1]} ${input.split(` `)[2]} ${input.split(` `)[3]} ${input.split(` `)[4]}`
    }
}

Translator.prototype.clear = (input) => {
    return input;
}

Translator.prototype.translate = function translate(fullCommand) {
    // JS MAGIC
    fullCommand = fullCommand.replace(`/`, ``);
    command = fullCommand.split(` `)[0].replace(`-`, `_`);
    if (command == `translate`) return;

    try {
        return eval(this[command])(fullCommand);
    } catch (error) {
        return ``;
    }
    
}

module.exports = new Translator();