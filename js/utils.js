export function getVerses(poem){
    let antal_strofer = poem.length;
    let allVerses = [];
    for (let i = 0; i < antal_strofer; i++) {
        let antal_vers = poem[i].length;
        for (let j=0; j<antal_vers; j++){
            allVerses.push(poem[i][j])
        }
    }
    return allVerses;
}

export function showPoem(digt){
    var counter = 0;
    for (let i = 0; i < digt.length; i++) {
  
        for (let j = 0; j < digt[i].length; j++) { 
            let node = document.createElement("span"); 
            let node2 = document.createElement("br"); 
            node.innerHTML=digt[i][j];
            node.id = "vers" + counter;
            document.getElementById("digt").appendChild(node);
            document.getElementById("digt").appendChild(node2);
            counter += 1;
        }
        let node = document.createElement("br"); 
        document.getElementById("digt").appendChild(node);
    }
}
 
export function setEventHandlers(digt){
    let counter = 0;
    let l = digt.length;
    for (let j = 0; j < digt.length; j++) {  
        for (let i = 0; i < digt[j].length; i++) { 
            console.log(counter)
            document.getElementById("vers"+counter).addEventListener("click", e => {
                console.log(counter)
                console.log("trykket på ", document.getElementById("vers"+15));
                if (!window.aktivt_vers){
                    window.aktivt_vers = counter;
                }
                else {
                    var cache = document.getElementById("vers" + counter).innerHTML; 
                    document.getElementById("vers" + counter).innerHTML = 
                            document.getElementById("vers" + window.aktivt_vers).innerHTML; 
                    document.getElementById("vers"+window.aktivt_vers).innerHTML = cache; 
                    delete window.aktivt_vers;
                }
            });
        counter +=1;
        };
    }    

    document.getElementById("blandKnap").addEventListener("click", function(){
        console.log("tryket")
        document.getElementById("digt").innerHTML="";
        var poemCopy = clone(digt);
        showPoem(shuffle(poemCopy));
    });            
} 

export function shuffle(digt){
    let antal_strofer = digt.length;
    for (let k = 0; k < antal_strofer; k++) {
        for (var i = digt[k].length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = digt[k][i];
            digt[k][i] = digt[k][j];
            digt[k][j] = temp;
        }
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

