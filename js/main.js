import {allPoems} from './digte.js'
import {eventHandlers} from './eventHandlers.js'


// vælg tilfældigt digt fra samlingen
let digt = allPoems[Math.floor(Math.random() * allPoems.length)];

// bland versene
digt.shuffle();

// skab HTML, som passer til digtets længde
digt.setUpHTML();

// vis versene i der aktuelle permutation
digt.show();

//sæt eventhandlers op til digtet
eventHandlers(digt);

