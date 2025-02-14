//const manu = document.querySelector(".left")
//console.log(manu.innerHTML)
//let jj = document.querySelector("body")
//console.log(jj.style.backgroundColor)


//let message = document.querySelector(".message");
//console.log(message.textContent);
//message.textContent = "C'est le moments";
//console.log(message.textContent);
//fonction pour générer le nombre

//RECUPERATION SCORE
//let scoreElemment = document.querySelector(".score");
//let score = Number(scoreElemment.textContent)
//console.log(score);



//déclaration de fonction

        function generateRandomNumber() {
          return Math.floor(Math.random() * 20) + 1;
        }

// Usage

        let randomNumber = generateRandomNumber();
        //console.log(randomNumber);


//recupération de la valeur saisir par l'utilisateur

        const check = document.querySelector(".check")

//console.log(check)

        check.addEventListener("click", valeurInput)

        function valeurInput() {
        const guess = document.querySelector(".guess").value;
        let convertInput = Number(guess)
        //console.log(convertInput)

      if(convertInput < randomNumber) {

//console.log("TROP PETIT")

        let message = document.querySelector(".message");

//console.log(message.textContent);

        message.textContent = "TOO LOW !";
        
      } else if (convertInput > randomNumber){

//console.log("TROP PETIT")

        let message = document.querySelector(".message");

//console.log(message.textContent);

        message.textContent = "TOO HIGHT!";

//console.log(message.textContent);
        

      } else{

//console.log("TROP PETIT")

        let message = document.querySelector(".message");
    
//console.log(message.textContent);

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
          let pntInterrogationElement = document.querySelector(".number");
//console.log(pntInterrogationElement.textContent)
          let pntnumber = convertInput;
//console.log(pntnumber)
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
        location.reload();
      })*/

        const again = document.querySelector(".again");

        again.addEventListener("click", actuPage)
        let recupPoint = document.querySelector(".number").innerHTML;
        let recupScore = document.querySelector(".score").innerHTML;
        let recupText = document.querySelector(".message").innerHTML;


        /*let bodyTo = document.body;
        let recupColor = getComputedStyle(bodyTo).backgroundColor;
        console.log(recupColor);*/
        
        
        function actuPage(){

          let nbrSaisir = document.querySelector(".guess").value = null;
          //let actun = nbrSaisir;
          //actun = null;
          //console.log(actun);
          let pointInterrogationChange = document.querySelector(".number").innerHTML = recupPoint;
          let initScore = document.querySelector(".score").innerHTML = recupScore;
          let initText = document.querySelector(".message").innerHTML = recupText;

          
    
        }
        again.addEventListener("click", function(){
          document.body.style.backgroundColor = '#222';
        })


       
       /* let numArret = document.querySelector(".score").innerHTML;
        console.log(numArret);
        convtNumArret = Number(numArret);
        console.log(typeof(convtNumArret));

        if (convtNumArret < 1 ) {

          let recupMess = document.querySelector(".message");
              recupMess.innerHTML = "Vous avez perdu !"

        }  */ 











