let elementBtn = document.getElementById('btn') /* Cria a variável elementBtn e coloca o element com o id alterar nela */


const elementName = document.getElementById('Character'); 
const elementHumor = document.getElementById('Humor');
const elementImg = document.getElementById('box2') 

elementBtn.addEventListener('click', () =>{ 
   
    if(elementBtn.value == 'one'){
        elementName.innerText = 'Knuckles the Echidna'
        elementHumor.innerText = 'He is Red'
        elementBtn.value = 'two'
        elementImg.style.backgroundImage = "url('../images/img3.png')";

    } else if(elementBtn.value == "two") { 
        elementName.innerText = 'Tails the Fox' 
        elementHumor.innerText = 'He is yellow' 
        elementBtn.value = 'tree' 
        elementImg.style.backgroundImage = "url('../images/img2.png')";

    } else if(elementBtn.value == "tree") {
        elementName.innerText = 'Sonic the Hedgehog'
        elementHumor.innerText = 'He is Blue' 
        elementBtn.value = 'one' }
        elementImg.style.backgroundImage = "url('../images/img.png')";
})