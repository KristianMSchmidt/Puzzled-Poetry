export function getVerses(poem){
    let antal_strofer = poem.length;
    let verses = [];
    for (let i = 0; i < antal_strofer; i++) {
        let antal_vers = poem[i].length;
        for (let j=0; j<antal_vers; j++){
            verses.push(poem[i][j])
        }
    }
    console.log(verses);
    return verses;
}

export function showPoem(digt){
    for (let i = 0; i < digt.length; i++) {
        console.log(i)
        console.log(digt[i])
        for (let j = 0; j < digt[i].length; j++) { 
            let node = document.createElement("span"); 
            let node2 = document.createElement("br"); 
            node.innerHTML=digt[i][j];
            //node.id = "vers" + j;
            document.getElementById("digt").appendChild(node);
            document.getElementById("digt").appendChild(node2);
        }
        let node = document.createElement("br"); 
        document.getElementById("digt").appendChild(node);
    }
}
 
 
export function setEventHandlers(digt){
    let l = digt.length;
    for (let i = 0; i < l; i++) {
        document.getElementById("vers"+i).addEventListener("click", e => {
            if (!window.aktivt_vers){
                window.aktivt_vers = i;
            }
            else {
                var cache = document.getElementById("vers" + i).innerHTML; 
                console.log(cache);
                document.getElementById("vers" + i).innerHTML = 
                        document.getElementById("vers" + window.aktivt_vers).innerHTML; 
                document.getElementById("vers"+window.aktivt_vers).innerHTML = cache; 
                delete window.aktivt_vers;
            }
        });
    };
    document.getElementById("blandKnap").addEventListener("click", function(){
        /*
        document.getElementById("digt").innerHTML="";
        var poemCopy = clone(enMiddag);
        showPoem(shuffle(poemCopy));
        */
    });            
} 

export function shuffle(digt){
    for (var i = digt.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = digt[i];
        digt[i] = digt[j];
        digt[j] = temp;
    }
    return digt;
}

export function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

