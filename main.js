const gameArea=document.querySelector('.player_input'),
gamerule=document.querySelector('.rule'),
playerInput=document.querySelector('.p_input'),
submitBtn=document.querySelector('.s_btn'),
notifText=document.querySelector('.message');

initialiseGame();

submitBtn.addEventListener('mousedown', e=>{
   let inputVal=playerInput.value;
   if(submitBtn.textContent==='Play Again'){
    showInput();
    initialiseGame();
    clearMsg();
   }else{
    if(inputVal === '') {
        let msg='You Must enter a Number in order to play !!',
        msgC='message error_msg';
        showMsg(msg,msgC);
    } else if(isNaN(inputVal)){
      let msg='You Must enter a Number !!',
      msgC='message error_msg';
      showMsg(msg,msgC);
    } else if(parseInt(inputVal)  === guessed){
      let msg='You Win, Congratulation!!',
      msgC='message success_msg';
      hideInput();
      showMsg(msg,msgC);
      restarGame();
    } else if(parseInt(inputVal)  !== guessed){
        if(nbGuesses===1){
          let msg='Game Over',
          msgC='message error_msg';
          hideInput();
          restarGame();
          showMsg(msg,msgC);
        }else if(nbGuesses > 0){
          nbGuesses--;
          let msg=`WRONG, You still have ${nbGuesses} attemps`,
          msgC='message try_msg';
          showMsg(msg,msgC);
        }
    }
   }
  
  e.preventDefault();  
})

const showMsg = function(msg,msgClass){
    notifText.textContent=msg;
    notifText.className=msgClass;
    playerInput.value='';
}
const restarGame = function(){
    submitBtn.textContent='Play Again';
}
const clearMsg = function(){
    notifText.textContent='';
    playerInput.value='';
}
function initialiseGame (){
    nbGuesses=3;
    guessed=Math.floor(Math.random() * 10 + 1);
    submitBtn.textContent='Submit';
    console.log('Im the guessed '+ guessed);
}
function showInput(){
    playerInput.style.display='inline-block';

}
function hideInput(){
    playerInput.style.display='none';

}