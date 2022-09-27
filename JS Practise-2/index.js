const msg = document.querySelector('.msg')
const guess = document.querySelector('input')
const btn = document.querySelector('.btn')
let play = false;
let sWords = ['python', 'javascript', 'c++', 'php', 'java', 'c#', 'html', 'css', 'reactjs', 'angular', 'swift', 'android', 'sql'];

const creatNetwork = () =>{
    let ranNum = Math.floor(Math.random()*sWords.length)
    let newTempSwords = sWords[ranNum];
    return newTempSwords;
}

const scrambleWords = (arr) =>{
    for(let i=arr.length-1; i>0; i--){
        let temp = arr[i];
        console.log(temp);
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        newWords = creatNetwork();  
        randWords = scrambleWords(newWords.split("")).join("");  
        msg.innerHTML = 'Guess the word : ${randWords}';
    }    
    else{
        let tempWord = guess.value;
        if(tempWord = newWords){
            play = false;
            msg.innerHTML = 'Awsome it is Correct. it is ${newWords}';
            btn.innerHTML = "start Again"
            guess.classList.toggle('hidden');
            guess.value = "";
        }
    }
})