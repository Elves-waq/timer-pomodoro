// variaveis de ambiente
var minute = '';
var second = '';
var iMinute = '';
var iSencond= '';
let areaTimerMinute = document.querySelector('.timer--value-minute');
let areaTimerSecond = document.querySelector('.timer--value-second')
let areaIntervalMinute = document.querySelector('.interval--value-minute');
let areaIntervalSecond = document.querySelector('.interval--value-second');
let displayTimer = document.querySelector('.area--timer');
let displayInterval = document.querySelector('.area--interval');
var timerUser = document.querySelector('#timer--area-valor');
var intervalUser = document.querySelector('#interval--area-valor');
var areaMsg = document.querySelector('.area--msg');
var userTimerValue ;
var userIntevalvalue ;
var timerIntervalMinutes;
var timerIntervalSeconds;
var intervalMinutes;
var intervalSeconds;
var retornarContadorMinute;
var retornarContadorSecond;

// events
document.addEventListener('load',initialTimer());
document.querySelector('.play-control').addEventListener('click',playTimer);
document.querySelector('.pause-control').addEventListener('click',pauseTimer);
document.querySelector('.retornar-control').addEventListener('click',despausarTimer);
document.querySelector('.restart-control').addEventListener('click',restart);

// funções 
// inicialização do ambiente e display
function initialTimer() {
        minute = '' ;
        second = '';
        iMinute= '' ;
        iSencond= '';
        areaTimerMinute.innerHTML = minute ;
        areaTimerSecond.innerHTML= second ;
        areaIntervalMinute.innerHTML= iMinute;
        areaIntervalSecond.innerHTML=iSencond;  
         
    
};
// inicia o contador
function playTimer() {
    if(timerUser.value === '' || timerUser.value === '0' || timerUser.value < 0){
       areaMsg.style.display= 'flex'; 
       areaMsg.innerHTML =`<p class="msg--text">Voçê precisa selecionar um valor de jornada</p>`;
       restart(); 

               
    }else if(intervalUser.value === '' || intervalUser.value === '0' || intervalUser.value < 0){
        areaMsg.style.display= 'flex'; 
        areaMsg.innerHTML =`<p class="msg--text">Voçê precisa selecionar um valor de intervalo</p>`;
        restart(); 
                
     }else {
            userTimerValue  = timerUser.value;
            minute = userTimerValue - 1;
            second = '59';
            areaTimerMinute.innerHTML = minute ; 
            areaTimerSecond.innerHTML= second ;  
            areaMsg.style.display= 'none';        
        }
        
       
    
        timerIntervalMinutes =setInterval(minutesTimer,60000);
        timerIntervalSeconds =setInterval(secondsTimer,1000);
    
    
         function minutesTimer () {
             if(minute === 0 ){
                 minute = 0 ;
                 areaTimerMinute.innerHTML= minute;
             }else{
                    minute = minute - 1 ;
                    areaTimerMinute.innerHTML= minute;
             }
         };
         
          function secondsTimer () {
              
            second = second -1 ;
            if(second === 0) {
                if(minute === 0){
                    window.alert('Hora do intervalo!!!');
                    clearInterval( timerIntervalMinutes);
                    clearInterval(timerIntervalSeconds);
                    playInterval();
                }
              second = 60 ;
            }
            if(second <= 9 && second > 0){
             second='0' + second 
             }
            areaTimerSecond.innerHTML = second;
         
          
         };   
   
 };
 // função que inicia o intervalo
function playInterval () {
    displayTimer.style.display = 'none';
    displayInterval.style.display = 'flex';
    document.querySelector('.play-control').style.display = 'none';
    document.querySelector('.pause-control').style.display = 'none';
    document.querySelector('.retornar-control').style.display= 'none';
    userIntevalvalue = intervalUser.value;
    iMinute = userIntevalvalue - 1;
    iSencond = 59 ;
    areaIntervalMinute.innerHTML = iMinute;
    areaIntervalSecond.innerHTML =iSencond; 
    intervalMinutes= setInterval(intervalContadorMinute, 60000);
    intervalSeconds= setInterval(intervlaContadorSecond,1000) ;

    function intervalContadorMinute() {
        if(iMinute === 0){
            iMinute = 0;
            areaIntervalMinute.innerHTML = iMinute ;
        }else{
            iMinute = iMinute - 1 ;
            areaIntervalMinute.innerHTML = iMinute ;
        }
    };


    function intervlaContadorSecond() {
        iSencond = iSencond - 1 ;

        if(iSencond === 0 ){
            if (iMinute <= 0 && iSencond === 0){
                clearInterval(intervalContadorMinute);
                clearInterval(intervlaContadorSecond);
                clearInterval(retornarContadorMinute);
                clearInterval(retornarContadorSecond);
                window.alert('Seu intervalo acabou!!!');
                restart();
            };
         iSencond = 60;
        }
        if(iSencond <= 9 && iSencond > 0){
         iSencond= '0'+ iSencond;
        }
        areaIntervalSecond.innerHTML=iSencond;
    };
};

// retira a pausa do contador
function despausarTimer () {
    
    retornarContadorMinute = setInterval(retornarContadorM,60000);
    retornarContadorSecond = setInterval(retornarContadorS,1000);

    function retornarContadorM (){
        if(minute === 0 ){
            minute = 0 ;
            areaTimerMinute.innerHTML= minute;
        }else{
               minute = minute - 1 ;
               areaTimerMinute.innerHTML= minute;
        };
       

    }

    function retornarContadorS () {
        second = second -1 ;
        if(second === 0) {
            if(minute === 0){
                clearInterval(timerIntervalMinutes);
                clearInterval(timerIntervalSeconds);
                playInterval();
                
            }
          second = 60 ;
        }
        if(second <= 9 && second > 0){
            second='0' + second 
         }
         areaTimerSecond.innerHTML = second;


  
    }
};
//  pausa o contador
function pauseTimer() {
    document.querySelector('.play-control').style.display = 'none';
    document.querySelector('.retornar-control').style.display= 'block';
    clearInterval(timerIntervalMinutes);
    clearInterval(timerIntervalSeconds);
    clearInterval(retornarContadorMinute);
    clearInterval(retornarContadorSecond);  
    clearInterval(intervalContadorMinute);
    clearInterval(intervlaContadorSecond);
     

};
// limpar o contador
function restart() {
    displayInterval.style.display = 'none';
    displayTimer.style.display = 'flex';
    initialTimer();
    document.querySelector('.play-control').style.display = 'block';
    document.querySelector('.pause-control').style.display ='block';
    document.querySelector('.retornar-control').style.display= 'none';
    clearInterval(timerIntervalMinutes);
    clearInterval(retornarContadorSecond);
    clearInterval(timerIntervalSeconds);
    clearInterval(intervlaContadorSecond);
    clearInterval(intervalContadorMinute);
    clearInterval(retornarContadorMinute);
     
   
   
     
      
};

