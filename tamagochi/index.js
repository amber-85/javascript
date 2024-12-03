const notificatioHunger=document.querySelector(".notification__hunger");
const notificationHappy=document.querySelector(".notification__happy");
const notificationTired=document.querySelector(".notification__tiredness");
const gameOverSign=document.querySelector(".popup__page")

const hungerNumber=document.querySelector(".hunger__number")
const happyNumber=document.querySelector(".happy__number")
const tiredNumber=document.querySelector(".tiredness__number")

const happyStar=document.querySelector(".popup__star")
const tiredSign=document.querySelector(".tired__img")
const superTiredSign=document.querySelector(".super__tired__img")
const kirbyMouthUpset=document.querySelector(".kirby__mouth__angry")
const kirbyMouthHappy=document.querySelector(".kirby__mouth")
const kirbyMouthDieing=document.querySelector(".kirby__mouth__dieing")

const kirbyEyesDiedLeft=document.querySelector(".kirby__eyes__died.left")
const kirbyEyeDiedRight=document.querySelector(".kirby__eyes__died.right")
const kirbyEyesHappyLeft=document.querySelector(".kirby__eyes.left")
const kirbyEyesHappyRight=document.querySelector(".kirby__eyes.right")
const kirbyAngry=document.querySelector(".angry__img")

const feedBtn=document.querySelector(".feed__button");
const collectBtn=document.querySelector(".collect__button");
const playBtn=document.querySelector(".play__button");
const sleepBtn=document.querySelector(".sleep__button")
const resetBtn=document.querySelector(".reset__button")

console.log(resetBtn)
//  kirbyMouthHappy.style.display="none"
// //  kirbyMouthUpset.style.display="block"
//  kirbyMouthDieing.style.display="block";
//  kirbyEyesDiedLeft.style.display="block"
//  kirbyEyeDiedRight.style.display="block";
//  kirbyEyesHappyLeft.style.display="none"
//  kirbyEyesHappyRight.style.display="none"




let kirbyData={
        hungry:10,
        maxHungry:10,
        tiredness:10,
        maxTiredness:10,
        happy:10,
        maxHappy:10
    };




setInterval(hungryDetect,5000);



function tirednessDetect(){
    if (kirbyData.tiredness>0){
        kirbyData.tiredness-=1;
         if (kirbyData.tiredness>=5){
            notificationTired.innerHTML="I am energetic!"
            happyStar.style.display="block"
        }
        else {
            notificationTired.innerHTML="I feel drowsy! Need a bed!!"
            tiredSign.style.display="block"
            happyStar.style.display="none"
        }
    } 
    else{
        notificationTired.innerHTML="I am exhausted!"
        superTiredSign.style.display="block"
        tiredSign.style.display="none"
        clearInterval(hungryDetect)}
    tiredNumber.innerHTML=`${kirbyData.tiredness}/${kirbyData.maxTiredness}`       
}

setInterval(tirednessDetect,4000)




function happyDetect(){
    if (kirbyData.happy>0){
        kirbyData.happy-=1;
        if (kirbyData.happy>=5){
            notificationHappy.innerHTML="I am so happy!"
        }
        else{
            notificationHappy.innerHTML="I feel empty...";
            kirbyMouthHappy.style.display="none";
            kirbyMouthUpset.style.display="block"
        }
    }
    else{
        notificationHappy.innerHTML="I am bored! Play with me!"
        clearInterval(happyDetect)
    }
    happyNumber.innerHTML=`${kirbyData.happy}/${kirbyData.maxHappy}`;
}

setInterval(happyDetect,5000)


function hungryDetect(){
    if (kirbyData.hungry>0){
        kirbyData.hungry-=1;
         if (kirbyData.hungry>=7){
            notificatioHunger.innerHTML="I am full!"           
        }
        else if (kirbyData.hungry>=3){
            notificatioHunger.innerHTML="I am hungry!"       
        }
        else if (kirbyData.hungry>=1){
            notificatioHunger.innerHTML="I am starving!"
        }
    } 
     else{
        notificatioHunger.innerHTML="I am died!"  
        kirbyMouthDieing.style.display="block"
        kirbyMouthHappy.style.display="none"
        kirbyEyeDiedRight.style.display="block"
        kirbyEyesDiedLeft.style.display="block"
        kirbyEyesHappyLeft.style.display="none"
        kirbyEyesHappyRight.style.display="none"
        kirbyMouthUpset.style.display="none"
        gameOverSign.style.display="block";
        clearInterval(hungryDetect)
        
    }
    hungerNumber.innerHTML=`${kirbyData.hungry}/${kirbyData.maxHungry}`
       
    }




feedBtn.addEventListener("click",()=>{
    if (kirbyData.hungry<kirbyData.maxHungry){
        kirbyData.hungry+=1;
        if (kirbyData.hungry<=0){
            kirbyMouthDieing.style.display="block"
            kirbyMouthHappy.style.display="none"
            kirbyMouthUpset.style.display="none"
            kirbyEyeDiedRight.style.display="block"
            kirbyEyesDiedLeft.style.display="block"
            kirbyEyesHappyLeft.style.display="none"
            kirbyEyesHappyRight.style.display="none"
            
        }
        else{
            kirbyMouthDieing.style.display="none"
            kirbyMouthHappy.style.display="block"
            kirbyEyeDiedRight.style.display="none"
            kirbyEyesDiedLeft.style.display="none"
            kirbyEyesHappyLeft.style.display="block"
            kirbyEyesHappyRight.style.display="block"
        }
    }
    hungerNumber.innerHTML=`${kirbyData.hungry}/${kirbyData.maxHungry}`
})

sleepBtn.addEventListener("click",()=>{
    if (kirbyData.tiredness<kirbyData.maxTiredness){
        kirbyData.tiredness+=1;
        if (kirbyData.tiredness<=1){
          superTiredSign.style.display="block";
        }
        else if (kirbyData.tiredness>=1 && kirbyData.tiredness<5){
            tiredSign.style.display="block";
            superTiredSign.style.display="none";
        }
        else{
            superTiredSign.style.display="none"
            tiredSign.style.display="none";
            happyStar.style.display="block"
        }
    }
    tiredNumber.innerHTML=`${kirbyData.tiredness}/${kirbyData.maxTiredness}`  
})

playBtn.addEventListener("click",()=>{
    if (kirbyData.happy<kirbyData.maxHappy){
        kirbyData.happy+=1;
        if (kirbyData.happy<5){
            kirbyMouthHappy.style.display="none";
            kirbyMouthUpset.style.display="block"      
        }
        else{
            kirbyMouthHappy.style.display="block";
            kirbyMouthUpset.style.display="none"      
            kirbyMouthDieing.style.display="none"    
        }
    }
    happyNumber.innerHTML=`${kirbyData.happy}/${kirbyData.maxHappy}`;

})


resetBtn.addEventListener("click",()=>{
        kirbyData.happy=10;
        kirbyData.hungry=10;
        kirbyData.tiredness=10;
        hungerNumber.innerHTML=`${kirbyData.hungry}/${kirbyData.maxHungry}`
        happyNumber.innerHTML=`${kirbyData.happy}/${kirbyData.maxHappy}`
        tiredNumber.innerHTML=`${kirbyData.tiredness}/${kirbyData.maxTiredness}`
        kirbyMouthHappy.style.display="block";
        kirbyMouthUpset.style.display="none"      
        kirbyMouthDieing.style.display="none"
        kirbyEyeDiedRight.style.display="none"
        kirbyEyesDiedLeft.style.display="none"
        kirbyEyesHappyLeft.style.display="block"
        kirbyEyesHappyRight.style.display="block"
        gameOverSign.style.display="none"
    })
