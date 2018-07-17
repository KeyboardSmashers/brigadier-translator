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
                return "survival";
                break;
            case "1":
            case "c":
                return "creative";
                break;
            case "2":
            case "a":
                return "adventure";
                break;
            case "3":
            case "sp":
                return "survival";
                break;
            default: break;
        }

        return result;
    }

    static particle(name) {

    }
}