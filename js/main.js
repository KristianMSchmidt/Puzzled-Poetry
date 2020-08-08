let enMiddag = [
    "See, vort lille Taffel speiler", 
    "Sig i Floden – See Forellen",
    "Pynter Fadet med sin sidste,",
    "Stive, gratieuse Sprællen!", 
    "See, Tokaiervinen gløder",
    "I de tindrende Krystaller",
    "Skjønnere, end selv i sine",
    "Druers duftomflorte Skaller!",
    "Og Orangens søde Skive",
    "I din Purpurmunds Indfatning",
    "Fik for Tabet af sin Guldhud,",
    "En guddommelig Erstatning.", 
    "Ak, for Tabet af saameget",
    "Vinker os nu Sydens Fjelde,",
    "Vinker os det gamle Kloster,",
    "Vinker os den dunkle Celle."
];


function show_poem(digt){
    let l = digt.length;
    for (let i = 0; i < l; i++) {
        let node = document.createElement("span"); 
        let node2 = document.createElement("br"); 
        node.innerHTML="Vers "+ (i+1);
        node.id = "supposed"+(i+1);
        document.getElementById("supposed").appendChild(node);
        document.getElementById("supposed").appendChild(node2);   
    }

    for (let i = 0; i < l; i++) {
        let node = document.createElement("span"); 
        let node2 = document.createElement("br"); 
        node.innerHTML=digt[i];
        node.id = "vers"+(i+1);
        document.getElementById("digt").appendChild(node);
        document.getElementById("digt").appendChild(node2);  
    } 
  
    for (let i = 0; i < l; i++) {
        document.getElementById("supposed"+(i+1)).addEventListener("click", e => {
            if (!window.aktivt_vers){
                alert("Klik først på et vers i digtet, som du vil indsætte");
            }
            else{
                document.getElementById("supposed"+ (i+1)).innerHTML=window.aktivt_vers; 
            }
        });
        document.getElementById("vers"+(i+1)).addEventListener("click", e => {
            window.aktivt_vers=enMiddag[i];
        });
    };               
}

show_poem(enMiddag);

function shuffle(digt) {
    for (var i = digt.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = digt[i];
        digt[i] = digt[j];
        digt[j] = temp;
    }
    return digt;
}
   
document.getElementById("blandKnap").addEventListener("click", function(){
    document.getElementById("digt").innerHTML="";
    document.getElementById("supposed").innerHTML="";
    show_poem(shuffle(enMiddag));
});

        