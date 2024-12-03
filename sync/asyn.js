
// let userInput=prompt("please write down your score");

// const myPromise=new Promise((resolve,reject)=>{
//     const a=90;
//     const b=userInput;
//     if (a==b){
//         resolve("you made it!");
//     }
//     else{
//         reject("No! it doesn't work!")
//     }   
// });

// myPromise.then((resolve)=>{
//     console.log(resolve);
// }).catch((reject)=>{
//     console.log(reject)
// })
  

// let userDance=prompt("please write down your dance style");

// const letsDance=new Promise ((resolve,reject) => {
//     setTimeout(()=>{
//         const dance="polka";
//         const userChoice=userDance.toLowerCase();
//         if (dance==userChoice){
//             resolve("Yes, polka is my thing!");
//         }
//         else{
//             reject("Never!");
//         }},2000)
// })

// letsDance
//     .then((resolve)=>{console.log(resolve)})
//     .catch((reject)=>{console.log(reject)})


// const customerCoffee=prompt("please write down your order");

// function brewCoffee(customerCoffee){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const coffeeType="espresso";
//             const choosedCoffee=customerCoffee.toLowerCase();
//             if (choosedCoffee==coffeeType){
//                 resolve("here is your espresso");
//             }
//             else{
//                 reject("sorry, we only serve espresso!")
//             }
//         },3000)
//     })
// }
// brewCoffee(customerCoffee)
//     .then((resolve)=>{console.log(resolve)})
//     .catch((reject)=>{console.log(reject)})


let preparIngredients=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("prepare ingredients")},2000)})

let cookWater=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("cooking water!")},4000)})

let cookFood=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("cooking now!")
    },5000)
})

let serveFood=new Promise(()=>{
    setTimeout(()=>{console.log("your food is ready!")},1000)
})

const foodTimeLine=async()=>{
    console.log(await preparIngredients);
    console.log(await cookWater);
    console.log(await cookFood);
    console.log(await serveFood);
}

