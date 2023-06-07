window.addEventListener('load', init);

let time = 10;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.querySelector('#time');
const massage = document.getElementById('massage');
const seconds =document.querySelector('#seconds');
const words = [
    'hat',
    'dog',
    'children',
    'book',
    'little',
    'lucky',
    'hero',
    'joke',
    'javascipt',
    'angry',
    'element',
    'home',
    'sad',
    'flower',
    'orange',
    'food',
    'dinner',
    'spoon',
    'pen',
    'car'
];
function init(){
    showWord(words);
    wordInput.addEventListener('input' , startMatch);
    setInterval(countdown , 1000);
    setInterval(checkStatus , 50);
}
function startMatch(){
    console.log(words);
    if(matchWord()){
       isPlaying = true;
       time = 11;
       showWord(words);
       wordInput.value = '';
       score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
}
function matchWord(){
    if(wordInput.value === currentWord.innerHTML){
        massage.innerHTML = 'corract!!!';
        return true;
    }else{
        massage.innerHTML = '';
        return false;
    }
}
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    console.log(randIndex);
    console.log(words[randIndex]);
    currentWord.innerHTML = words[randIndex];
}
function countdown(){
    if(time > 0){
        time--;
    }else if(time === 0){
       isPlaying = false; 
    }
    timeDisplay.innerHTML = time;
}
function checkStatus(){
    if(!isPlaying && time === 0){
        massage.innerHTML = 'game over!!!!';
        score = -1;
    }
}