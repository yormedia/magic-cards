import { name, version } from "../../package.json";
import {capitalize} from "../functions/string";

const packageName = name.split("-");

export const bundle = {
    name: capitalize(packageName[0]),                                           // Magic
    title: `${capitalize(packageName[0])} ${capitalize(packageName[1])}`,       // Magic Cards
    prefix: name.split("-", 1)[0].toLowerCase(),                                // magic
    version: version
}

export function getCardData(cardType: string) {
    return {
        name: `${bundle.prefix}-${cardType.toLowerCase()}-card`,                // magic-<cardtype>-card
        title: `${bundle.title} ${capitalize(cardType)} Card`,                  // Magic <Cardname> Card
        description: '',
        editor: {
            name: `${cardType.toLowerCase()}-card-editor`,                      // <cardtype>-card-editor
            file: `./${cardType.toLowerCase()}-card-editor`                     // ./<cardtype>-card-editor
        }
    }
}