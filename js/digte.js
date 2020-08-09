import Poem from './poem.js'

const svanerSetGennemTaarer = [
    "Svaner set gennem tårer",
    "0  0",
    "2  0",
    "0  2",
    "0  0"
]

const somGlas = [
    "Som glas",

    "En stor kimende gråd",
    "fylder mig hvid og indadbristende,",
    "jeg går i gaderne",
    "og gemmer øjnene",
    "i min skygge langs murene,",
    "det eneste mørke",
    "hvis udspring jeg kender.",
    "Og solen skingrende",
    "en endeløst sindssyg skønhed",
    "der aldrig skal mærke",
    "hvor kold min kærlighed er",
    "aldrig se mig brænde."
]

const enMiddag = [
    "En middag",

    "See, vort lille Taffel speiler", 
    "Sig i Floden – See Forellen",
    "Pynter Fadet med sin sidste,",
    "Stive, gratieuse Sprællen!",
    "",
    "See, Tokaiervinen gløder",
     "I de tindrende Krystaller",
    "Skjønnere, end selv i sine",
    "Druers duftomflorte Skaller!",
    "",
    "Og Orangens søde Skive",
    "I din Purpurmunds Indfatning",
    "Fik for Tabet af sin Guldhud,",
    "En guddommelig Erstatning.",
    "",
    "Ak, for Tabet af saameget",
    "Vinker os nu Sydens Fjelde,",
    "Vinker os det gamle Kloster,",
    "Vinker os den dunkle Celle."
]

const envoi = [
    "Envoi",

    "Nu breder Hylden",
    "de svale Hænder",
    "mod Sommermaanen.",
    "",
    "Aaret efter:",
    "De samme Bøge",
    "og lyse Nætter,", 
    "den samme Lykke!",
    "",
    "Aaret efter:",
    "Solsorten fløjter,",
    "og Vaarvind svulmer",
    "igen, Veninde!" 
]

const aftenSol = [
    "Aftensol",

    "På alle mure faldt aftensolen",
    "På en eneste hvid mur.",
    "På tunge, rustne hængsler",
    "der engang havde været grønne",
    "stod døren åben",
    "ind til mørket.",
    "",
    "“Hej” råbte jeg, så det genlød",
    "i hele dalen",
    "og en krage fløj skrigende op.",
    "Der var ingen andre end dig",
    "der ikke svarede",
    "i hele verden."
]

export const allPoems = [
    new Poem(enMiddag), 
    new Poem(envoi), 
    new Poem(somGlas), 
    new Poem(svanerSetGennemTaarer),    
    new Poem(aftenSol)
];
