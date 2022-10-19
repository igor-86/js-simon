/* ESERCIZIO : pseudo codice svolgimento */
//Creo un array di numeri random
 // Creo una funzione che mi fa togliere dallo schermo i numeri dopo 30 secondi.
// Dopo che i numeri sono spariti: Chiedo mediante un ciclo while 5 numeri all'utente
    //Riempio un array vuoto con i 5 numeri indicati dall'utente

//Confronto i 5 numeri nell'array random con i 5 numeri dell'array vuoto, riempito con numeri dall'utente
    //per farlo Trasformo gli elementi numerici nell'array in stringhe per poterli confrontare piu facilmente*****

    // SE le stringhe contenute nei due array sono uguali
        // Stampo la comunicazione "Bravo hai vinto"
    // ALTRIMENTI
        // Stampo la comunicazione "hai una brutta memoria, i numeri erano + ecc ecc..."


        let arrayBase = [];


        //Genero numeri random per riempire Arraydue
        let arrayDue =[];
        while(arrayDue.length < 5){
            let numbersRandom = getRndInteger(1,50);
            if(!arrayDue.includes(numbersRandom)){
                arrayDue.push(numbersRandom);
            }
        }
        console.log(arrayDue);
        
        
        
        
        
        const numRdnd = document.querySelector(".numbers");
        numRdnd.innerHTML = arrayDue;
        
        
        console.log(numRdnd);
        
        // Function SetTimeout che mi fa scomparire array dopo 8 secondi
        function myFunction() {
            numRdnd.innerHTML = "";
        
            function secFunction() {
                numRdnd.innerHTML = "";
            
                while(arrayBase.length <5){
                    const question = parseInt(prompt("Dammi il primo numero"));
                    arrayBase.push(question);
                }
                
                console.log(arrayBase); 
                const a = arrayBase.toString();
                console.log(a);
                const b = arrayDue.toString();
                console.log(b);
                
                // devo trovare un modo migliore?
                if(a === b){
                    numRdnd.innerHTML = "Win"
                }else{
                    numRdnd.innerHTML = "Lose";
                } 
            }
            
            const secTimeout = setTimeout(secFunction, 500);
        
        
        
        
        }
        
        const myTimeout = setTimeout(myFunction, 8000);
        
        
        
        
        
        /**
         * Description
         * @param {number} min
         * @param {number} max
         * @returns {number} // numero random
         */
         function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
          }