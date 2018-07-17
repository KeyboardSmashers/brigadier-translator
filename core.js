let commandSyntaxDictionary = {};

export default class Translator {
    static translate(command) {

    }

    static entitySelector(selector) {

    }

    static gamemode(gm) {
        let result;

        switch (gm) {
            case "0":
            case "s":
                result = "survival";
                break;
            case "1":
            case "c":
                result = "creative";
                break;
            case "2":
            case "a":
                result = "adventure";
                break;
            case "3":
            case "sp":
                result = "spectator";
                break;
            default: break;
        }

        return result;
    }

    static particle(name) {

    }
}