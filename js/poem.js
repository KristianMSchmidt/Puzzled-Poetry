export default class Poem{
    constructor(originalPoem){
        this.title = originalPoem[0];
        this.vers = {};
        this.mellemrum = [];
        this.currentPermutation = [];
        this.parsePoem(originalPoem);
    }

    parsePoem(originalPoem){
        let verseNum = 1;
        for (let i = 1; i < originalPoem.length; i++) {   
            if (originalPoem[i] !== ""){
                this.vers[verseNum] = originalPoem[i]; 
                this.currentPermutation.push(verseNum);
                verseNum++;
            }
            else {
                this.mellemrum.push(verseNum-1  );
            }  
        } 
    }

    shuffle(){
        let array = this.currentPermutation;
        let currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.currentPermutation = array;
    }

    isSolved(){
        let answer = true;
        console.log(this.currentPermutation);

        for (let i=0; i<this.currentPermutation.length; i++){
            if (this.vers[i+1] !== this.vers[this.currentPermutation[i]]){
                answer = false;
            }
        }
        return answer;
    }
 
    setUpHTML(){
        document.getElementById("title").innerHTML = this.title;
        for(let i = 0; i < this.currentPermutation.length; i++){
            let node = document.createElement("span");
            node.id = 'vers' + i;
            let node2 = document.createElement("br");
            document.getElementById("digt").appendChild(node);
            document.getElementById("digt").appendChild(node2);
            if (this.mellemrum.includes(i+1)){
                let node3 = document.createElement("br");
                document.getElementById("digt").appendChild(node3)
            }            
        }
    }

    show(){
        for(let i = 0; i < this.currentPermutation.length; i++){
            let j = this.currentPermutation[i];
            document.getElementById("vers"+i).innerHTML = this.vers[j]
        }            
    }    
}

/*
digt = new Poem(enMiddag);
//console.log(digt.currentPermutation);

//console.log(digt.isSolved());
digt.shuffle();

//console.log(digt.currentPermutation);
console.log(digt.isSolved());

//console.log(digt.currentPermutation);

*/


