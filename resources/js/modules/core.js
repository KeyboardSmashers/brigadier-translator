const Debug = require(`./debug.js`);

let commandSyntaxDictionary = {};

function Translator(){

}

/*
Translator.prototype.command = (input) => {

}
*/
let internalCommands = [
    `translate`,
    `proofread`,
    `gamemode`
];

Translator.prototype.proofread = (input) => {
    if (input == `undefined`) return ``;
}

Translator.prototype.gamemode = (input) => {
    switch (input) {
        case `0`:
        case `s`:
            return `survival`;
            break;
        case `1`:
        case `c`:
            return `creative`;
            break;
        case `2`:
        case `a`:
            return `adventure`;
            break;
        case `3`:
        case `sp`:
            return `spectator`;
            break;
        
        
    }
}

Translator.prototype.advancement = (input) => {
    if(input.split(` `)[1] == `test`){
        return `execute if entity ${input.split(` `)[2]}[advancements={${input.split(` `)[3]}=${input.split(` `)[4] != undefined ? "{" + input.split(` `)[4] + "=true}" : "true"}}] run <YOUR COMMAND HERE>`;
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
    if (input.split(` `)[4] == undefined) {
        return `data get block ${input.split(` `)[1]} ${input.split(` `)[2]} ${input.split(` `)[3]}`
    } else {
        return `data merge block ${input.split(` `)[1]} ${input.split(` `)[2]} ${input.split(` `)[3]} ${input.split(` `)[4]}`
    }
}

Translator.prototype.clear = (input) => {
    // TEMPORARY NUMERIC IDS - WILL NEED TO BE TRANSLATED LATER
    return `clear ${input.split(` `)[1]} ${input.split(` `)[2]}${input.split(` `)[3] != undefined ? `:${input.split(` `)[3]}` : ``}${input.split(` `)[5] != undefined ? `${input.split(` `)[5]}` : ``} ${input.split(` `)[4]}`;
}

Translator.prototype.translate = function translate(fullCommand) {
    
    let slashEnd = fullCommand.split(` `)[0].lastIndexOf(`/`) + 1;
    if (/* WorldEdit Support? */ slashEnd > 1) return ``;
    fullCommand = fullCommand[0] == `/` ? fullCommand.substring(slashEnd) : fullCommand;

    command = fullCommand.split(` `)[0].replace(`-`, `_`).replace(`/`, ``);
    if (internalCommands.includes(command)) return ``;

    try {
        // JS MAGIC
        return eval(this[command])(fullCommand);
    } catch (error) {
        return ``;
    }
    
}

module.exports = new Translator();