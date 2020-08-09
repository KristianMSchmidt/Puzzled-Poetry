export default class Poem {
    constructor(originalPoem){
        this.original = originalPoem;
        this.current = originalPoem; //skal klones
        }

    shuffle(){
        //method that shuffles the poem... without destr
    }

    isSolved(){
        //return true if original = current
    }

    show(){
        //shows the poem on the webpage
    }
}