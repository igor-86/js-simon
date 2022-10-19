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
        //Stampo array random
        numRdnd.innerHTML = arrayDue;
        
        
        console.log(numRdnd);
        
        
        function myFunction() {
            numRdnd.innerHTML = "";
            function secFunction() {
                numRdnd.innerHTML = "";
            
                while(arrayBase.length <5){
                    const question = parseInt(prompt("Dammi il primo numero"));
                    arrayBase.push(question);
                }
            
            //Richiamo funzione che compara i numeri
            const compareNumber = setTimeout(controlsCompare,500);
            console.log(compareNumber);
            }
            const secTimeout = setTimeout(secFunction, 500);
        }
        //Funzione timeout 20 secondi
        const myTimeout = setTimeout(myFunction, 20000);
        
        
        
        
        
        /**
         * Description Funzione che compara array di numeri random e array indicati dall'utente e restituisce array numeri
         * 
         * @returns {array} // numero random
         */
        function controlsCompare (){
            let controls = [];
            for(let n = 0; n < arrayDue.length; n++){
                if(arrayBase[0]==arrayDue[n]){
                    controls.push(arrayBase[0]);
                }
                if(arrayBase[1]==arrayDue[n]){
                    controls.push(arrayBase[1]);
                }
                if(arrayBase[2]==arrayDue[n]){
                    controls.push(arrayBase[2]);
                }
                if(arrayBase[3]==arrayDue[n]){
                    controls.push(arrayBase[3]);
                }
                if(arrayBase[4]==arrayDue[n]){
                    controls.push(arrayBase[4]);
                    numRdnd.innerHTML = controls;

                }else{
                    numRdnd.innerHTML="you lose";
                }
                
            }
            console.log(controls);
        }
        
        /**
         * Description
         * @param {number} min
         * @param {number} max
         * @returns {number} // numero random
         */
         function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
          }