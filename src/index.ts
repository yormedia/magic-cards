import { NAME, VERSION } from './constants';

export { MagicTableCard } from "./cards/table-card/table-card";
export { MagicSectionCard } from "./cards/section-card/section-card";

/* eslint no-console: 0 */
console.info( `%c 🪄 ${NAME} 🪄 \n%c ${VERSION}`, 'color: black; font-weight: bold; background: orange' );
