import { name, version } from "../../package.json";

const _prefix : string = name.split(" ",1)[0];

export const VERSION = version;
export const NAME = name;
export const PREFIX_NAME = _prefix.toLowerCase();