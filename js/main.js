import {enMiddag} from './digte.js';
import {showPoem, clone, shuffle, setEventHandlers} from './utils.js'


let klon = clone(enMiddag);
shuffle(klon)
showPoem(klon);
setEventHandlers(enMiddag);

