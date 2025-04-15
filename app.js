const form = document.querySelector('.form-quizz')
let tableauResultats = []
const reponses = ['c','a','b','a','c']
const emojis = ['✔️','✨','👀','😭','👎']
const titreResultat = document.querySelector('.resultats h2')
const noteResultat = document.querySelector('.note')
const aideResultat = document.querySelector('.aide')
const toutesLesQuestions = document.querySelectorAll('.question-block')
let verifTableau = []
form.addEventListener('submit', e=>{
    e.preventDefault()

    // console.log(document.querySelector('input[name="q1"]:checked').value)

    for(i=1; i<6;i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)

    }
    verifFunc(tableauResultats)
    // console.log(tableauResultats)
    tableauResultats = []

})

function verifFunc(tabResults){

    for(let a=0; a <5; a++){
        if(tableauResultats[a]=== reponses[a]){
            verifTableau.push(true)
        }else{
            verifTableau.push(false)
        }
    }
    // console.log(verifTableau)
    afficherResultats(verifTableau)
    couleursFonction(verifTableau)
    verifTableau = []
}

function afficherResultats(tabCheck){

    const nbDeFautes = tabCheck.filter(el=> el !== true).length
    //fitre un tableau en renvoyant un nouveau
    // console.log(nbDeFautes)

    switch(nbDeFautes){
        case 0:
            titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️"
            aideResultat.innerText = '';
            noteResultat.innerText ='5/5'
        break;
        case 1:
            titreResultat.innerText = "✨ Vous y êtes presque ! ✨"
            aideResultat.innerText = 'Retentez une autre reponse dans les cases rouges puis re-validez !';
            noteResultat.innerText ='4/5'
        break;
        case 2:
            titreResultat.innerText = "✨ Encore un effort... 👀"
            aideResultat.innerText = 'Retentez une autre reponse dans les cases rouges puis re-validez !';
            noteResultat.innerText ='3/5'
        break;
        case 3:
            titreResultat.innerText = "👀 Il reste quelques erreurs. 😭"
            aideResultat.innerText = 'Retentez une autre reponse dans les cases rouges puis re-validez !';
            noteResultat.innerText ='2/5'
        break;
        case 4:
            titreResultat.innerText = "😭 Peux mieux faire ! 😭"
            aideResultat.innerText = 'Retentez une autre reponse dans les cases rouges puis re-validez !';
            noteResultat.innerText ='1/5'
        break;
        case 5:
            titreResultat.innerText = "👎 Peux mieux faire !👎"
            aideResultat.innerText = 'Retentez une autre reponse dans les cases rouges puis re-validez !';
            noteResultat.innerText ='0/5'
        break;
        default:
            'Wops, cas innatendu.'
    }

}

function couleursFonction(tabValBool){

    for(let j =0; j<tabValBool.length; j++){
        if(tabValBool[j]=== true){
            toutesLesQuestions[j].style.background = 'lightgreen'
        }else{
            toutesLesQuestions[j].style.background = '#ffb8b8'
            toutesLesQuestions[j].classList.add('echec')
            //pour pouvoir l'enlever au bout d'un certain moment,  on va utiliser un setTimeOut

            setTimeout(()=>{
                toutesLesQuestions[j].classList.remove('echec')
            },500)
        }
    }
}

toutesLesQuestions.forEach(item =>{
    item.addEventListener('click',()=>{
        item.style.background = 'white'
    })
})