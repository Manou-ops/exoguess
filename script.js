//déclaration de fonction

        function generateRandomNumber() {
          return Math.floor(Math.random() * 20) + 1;
        }

// Usage

        let randomNumber = generateRandomNumber();
        //console.log(randomNumber);


//recupération du button check

        const check = document.querySelector(".check")

        //console.log(check)

        check.addEventListener("click", valeurInput)

        function valeurInput() {
        const guess = document.querySelector(".guess").value;
        let convertInput = Number(guess)
        //console.log(convertInput)

       if(convertInput < randomNumber) {

      //recupération de la valeur actuelle de la variable message

        let message = document.querySelector(".message");

      //changement du message

        message.textContent = "TOO LOW !";
        
        } else if (convertInput > randomNumber){

      //changement du message à nouveau

        let message = document.querySelector(".message");

        message.textContent = "TOO HIGHT!";

        //console.log(message.textContent);
        

        } else{

        let message = document.querySelector(".message");
    

        message.textContent = "GREAT, YOU WIN !";
        
        //console.log(message.textContent);

        }

              if (convertInput < randomNumber || convertInput > randomNumber ){

                let scoreElemment = document.querySelector(".score");
                let score = Number(scoreElemment.textContent)
                score--;
                scoreElemment.textContent = score;
              } else {

                let scoreFinElement = document.querySelector(".score");
                scoreFin = Number(scoreFinElement.textContent)
                let highScoreElement = document.querySelector(".highscore");
                let highScore = Number(highScoreElement.textContent);
                highScoreElement.textContent = scoreFin;

//changement de couleur pour passer au vert
          let body = document.body;
          let bgColor = getComputedStyle(body).backgroundColor;
        //console.log(bgColor);
          body.style.backgroundColor = "green";

//changement de point d'interrogation en nombre
//RECUPERATION DU POINT D'INTERROGATION
          let pntInterrogationElement = document.querySelector(".number");

        //console.log(pntInterrogationElement.textContent)

        //RECUPERATION DU NOMBRE DEVINER

          let pntnumber = convertInput;
          //console.log(pntnumber)

        //CHANGEMENT DE LA POINT EN NOMBRE DEVINE
          pntInterrogationElement.textContent = pntnumber;

        }      

        
        
        
        //changement du message en : VOUS AVEZ PERDU


              let numArret = document.querySelector(".score").innerHTML;
              //console.log(numArret);
              convtNumArret = Number(numArret);
              //console.log(typeof(convtNumArret));

              
              if (convtNumArret <= 1 ) {     
                    let recupMess = document.querySelector(".message");
                    recupMess.innerHTML = "Vous avez perdu !"; 
                    
                    
                    let body = document.body;
                    let newColor = getComputedStyle(body).backgroundColor;
                    body.style.backgroundColor = "red";
                    return;      
              }   

        
    }

//recuperer le bouton again 

        /* const again = document.querySelector(".again")
         again.addEventListener("click", function(){
         location.reload(); })*/

        const again = document.querySelector(".again");


//appliquer un evenement

        again.addEventListener("click", actuPage)
        let recupPoint = document.querySelector(".number").innerHTML;
        let recupScore = document.querySelector(".score").innerHTML;
        let recupText = document.querySelector(".message").innerHTML;


//declaration de la fonction qui s'exécute quand le click est faire sur again
        
        function actuPage(){

          let nbrSaisir = document.querySelector(".guess").value = null;
          //let actun = nbrSaisir;
          //actun = null;
          //console.log(actun);
          let pointInterrogationChange = document.querySelector(".number").innerHTML = recupPoint;
          let initScore = document.querySelector(".score").innerHTML = recupScore;
          let initText = document.querySelector(".message").innerHTML = recupText;
        }

//NOUVEAU EVENEMENT POUR CHANGER LA COULEUR 

        again.addEventListener("click", function(){
          document.body.style.backgroundColor = '#222';
        })








