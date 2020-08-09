import {allPoems} from './digte.js'
import {eventHandlers} from './eventHandlers.js'


// vælg tilfældigt digt fra samlingen
let digt = allPoems[Math.floor(Math.random() * allPoems.length)];


// bland versene
digt.shuffle();
// vis digtet på siden
digt.setUpHTML();
digt.show();

//sæt eventhandlers op
eventHandlers(digt);

