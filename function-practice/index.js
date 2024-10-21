// FUNCTIONS BOOTCAMP
// övningar 1
// Skriv en funktion som tar en sträng som parameter och returnerar längden på en sträng. 
// Anropa funktion och console.log svaret. Tips! Du kan skriva .length på en variabel som är en sträng för att få längden.

 /*let userInput=prompt("guess how long is the word you write?")
 function wordLength(userInput){
     console.log(userInput+' '+'has'+' '+userInput.length+' '+'letters');
 }
 wordLength(userInput);*/

// övningar 2
/*Skriv en funktion som plockar ut året från en sträng i datumformat. Använd substring(startIndex, endIndex)
let userInput=prompt("please enter the date in YYYY-MM-DD.")

function yearSelector(){
    console.log("The year is"+" "+userInput.substring(0,4))
}

yearSelector() */

/*ÖVNINGAR 3
Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'. 
Utför beräkningen och returnera summan och skriv ut. Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då) 
och varje operation ska vara sin egen funktion. Tips! Här kan typeof vara bra att*/


 /*   let Num1=Number(prompt("Number 1"));
    let Num2=Number(prompt("Number2"))
    let Operation=prompt("Choose an operation:+,-,*,/");
function Calculator(a,b,operation){
    switch(operation){
        case '+':return a+b;
        case '-':return a-b;
        case '*':return a*b;
        case '/':
            if (b===0){
                return "can't divide by zero"
            }
            return a/b;
        default:"invalid operation";
    }
}
 console.log(Calculator(Num1,Num2,Operation));*/

 