const delay = ms => new Promise(res => setTimeout(res, ms));

export function eventHandlers(digt){
    document.getElementById("permute_button").addEventListener("click", e => {
        digt.shuffle();
        digt.show();
    });

    document.getElementById("submit").addEventListener("click", async () => {
        if (digt.isSolved()){
            alert("Korrekt! Du har løst digtet!")
        }
        else{
            digt.showMistakes();
            await delay(1000);
            digt.makeBlack();
        }
    });


    document.getElementById("new_poem_button").addEventListener("click", e => {
        location.reload();
    });


    let l = digt.currentPermutation.length;
    window.aktivt_vers = -1;
    for (let i = 0; i < l; i++) { 
        document.getElementById("vers"+i).addEventListener("click", e => {

            if (window.aktivt_vers == -1) {
                window.aktivt_vers = i;
                document.getElementById("vers"+i).style = "color: green; font-weight:bold"
            }
            else {
                let cache = digt.currentPermutation[i];
                digt.currentPermutation[i] = digt.currentPermutation[window.aktivt_vers];
                digt.currentPermutation[window.aktivt_vers] = cache;
                document.getElementById("vers"+aktivt_vers).style = "";
                window.aktivt_vers = -1;
                digt.show();            
            }            
        });
    }
}