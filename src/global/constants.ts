import { name, version } from "../../package.json";
import {capitalize} from "../functions/string";

const packageName = name.split("-");

export const bundle = {
    name: name[0],
    title: `${capitalize(packageName[0])} ${capitalize(packageName[1])}`,
    prefix: name.split("-", 1)[0].toLowerCase(),
    version: version
}

export function getCardData(cardType: string) {
    return {
        name: `${bundle.prefix}`.toLowerCase() + `-${cardType.toLowerCase()}-card`,
        title: `${bundle.title} ${capitalize(cardType)}` + `Card`,
        description: '',
        editor: {
            name: `${bundle.prefix}-${cardType.toLowerCase()}-card-editor`,
            file: `./${bundle.prefix}-${cardType.toLowerCase()}-card-editor`
        }
    }
}