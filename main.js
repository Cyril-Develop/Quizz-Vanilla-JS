const skip = document.getElementById('skip');
const score = document.getElementById('score');
const final = document.querySelector('.final');
const totalScore = document.getElementById('totalScore');
const countDown = document.getElementById('countdown');
let count = 0;
let scoreCount = 0;
let duration = 0;
const blocQuestion = document.querySelectorAll('.bloc-question');
const reponse = document.querySelectorAll('.bloc-question .reponse input');



skip.addEventListener('click', () => {

    step();
    duration =10

})

reponse.forEach( function ( blocReponse ) {
    blocReponse.addEventListener('click', function () {
        setTimeout( function () {

            step();
            duration =10

            },500)

            let valid = this.getAttribute("valid");
            if(valid == "valid"){
                scoreCount += 10;
                score.innerHTML = scoreCount;
                totalScore.innerHTML = scoreCount;
            }

    })
})


// on va ajouter de façon dynamique la classe .active créé en CSS a chacun des bloc de question
// la propriété className récupére et redéfinit la valeure de l'attribut class désigné

// à chaque appel de la fonction step, 

function step() {
    
    count +=1;                                  // count démarre à 0 et est incrémenté à chaque appel de la fonction step                    

    for(let i = 0; i < blocQuestion.length; i++){      // on itére à travers tout les blocs questions 
        blocQuestion[i].className = "bloc-question";
    }
 
    blocQuestion[count].className = "bloc-question active";      // a chaque clique ou toute les 10s , la classe .active est ajoutée au bloc question suivant, elle va passée de bloc en bloc
    
    if(count === 10){                                // après le 10ème bloc on fait disparaitre le bouton
        skip.style.display = 'none';
       final.style.display = 'none'
        clearInterval(durationTime);              // on stop la méthode setInterval
        countDown.innerHTML = 0;                  // on remet le compteur à 0
    }

};


let durationTime = setInterval(() => {

    if(duration == 10){
        duration = 0;
    }
    duration +=1;
    countDown.innerHTML = duration;
    if(countDown.innerHTML == "10") {
        step()
    }
    
}, 1000);




