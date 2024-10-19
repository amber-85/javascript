// 1 assign: bigger than //

// let a=10;
// let b=20;
// if (a>b){
//     console.log("a är större än b")
// }

// else{
//     console.log("a är mindre än b")
// }





// //2: equals or not//
// let c='apple';
// let d='pear';
// if (c===d){
//     console.log("c är lika d")
// }

// else{
//     console.log(c + " "+"är inte"+" "+d)
// }





//3: biggest number within two numbers. I don't know how to select two numbers//
// Biggest Gör ett program som tar emot två stycken numeriska värden. Programmet ska utvärdera vilket tal som är störst och skriva ut det..//





//4: even or not//
// const userInput=Number(prompt('skriv in din ålder?'))
// if (userInput %2===0){
//     console.log("this number is even");
// }
// else{
//     console.log("this number is odd");
// }
  




//5. lisebergvakten med Helix//
// let userHeight={};
// const userInputHeight=Number(prompt('sensor detected height'));
// // userHeight=userInputHeight;
// console.log(Boolean(userInputHeight>150))


// const userInputHeight=Number(prompt("sensor detected height"))
// function greaterThanStandardHeight(userInputHeight){
//     if (userInputHeight>150){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(greaterThanStandardHeight(userInputHeight))





//6.lisebergsvakten 2//

// let userInputDayPass=prompt("enter your daypass-small, medium, large and platinum")
// function findCorrectDayPass(userInputDayPass){
//     if(userInputDayPass==="large" || userInputDayPass==="platinum"){
//         console.log("Balder is right on the way")
//     }
//     else{
//         console.log("Balder is not ready for you yet")
//     }

// }
// console.log(findCorrectDayPass(userInputDayPass))



//7.BMI skriv en program som tar en persons lägnd i cm samt vikt i kg och skriver ut en BMI-kassificering//
// ?????no idea why the input number does not work

// let userHeight=Number(prompt("please write down your height in cm"));
// let userWeight=Number(prompt("lease write down your weight in kg"));
// function BMI(weight, height){
//     let BMI=weight/(height**2/10000);
//     if (BMI<=18.5){
//         return "Undervikt";
//      }
//     else if (BMI<=25){
//         return "Normalvikt";
//     }
//     else if (BMI<=35){
//         return "Övervikt";
//     }
//     else{
//         return "Fetma";
//     }
// }
// console.log(BMI(userWeight,userHeight));






// 8.switch weekdays gör ett program som tar ett nummber (1-7) och skriver ut vilken veckodag numret motsvarar.//

// let userInputNumber=prompt("write down a number");

// switch(userInputNumber){
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         break;
//     case "3":
//         console.log("Wednesday");
//         break;
//     case "4":
//         console.log("Thursday");
//         break;
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("Saturday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("false")
// }




//Gör ett program som tar ett nummer ( 1-12 ) och skriver ut vilken månad numret motsvarar. 
//Ex. 1 = januari, 10 = oktober. Om numret inte motsvarar någon månad skall programmet skriva ut false.//


// let userInputNumber=prompt("write down a number");

// switch(userInputNumber){
//     case "1":
//         console.log("January");
//         break;
//     case "2":
//         console.log("Febuary");
//         break;
//     case "3":
//         console.log("March");
//         break;
//     case "4":
//         console.log("April");
//         break;
//     case "5":
//         console.log("May");
//         break;
//     case "6":
//         console.log("June");
//         break;
//     case "7":
//         console.log("July");
//         break;
//     case "8":
//         console.log("August");
//         break;
//     case "9":
//         console.log("September");
//         break;
//     case "10":
//         console.log("October");
//         break;
//     case "11":
//         console.log("November");
//         break;
//     case "12":
//         console.log("December");
//         break;
//     default:
//         console.log("you are out of reach!");
// }




//ternary
//adult or minor
//let age = 18; // Du kan ändra detta värde för att testa Använd en ternary operator 
// för att avgöra om personen är en "vuxen" (18 år eller äldre) eller en "minderårig".

// let age=Number(prompt("write down your age"));
// age>=18 ? console.log("adult"):console.log("Minor");


// Positive, Negative, or Zero
// let number = -5;
//  Du kan ändra detta värde för att testa Använd en ternary operator för att avgöra om ett tal är positivt, negativt eller noll.

// let userInput=Number(prompt("write down a number"));
// function measureNumber(userInput){
//     return userInput>0 ? "positive"
//     :userInput<0 ? "nagative"
//     :"zero"
// }
// console.log(measureNumber(userInput))




// Pass or Fail
// let score = 75; Du kan ändra detta värde för att testa Använd en ternary operator 
// för att avgöra om ett betyg är "godkänt" (60 poäng eller mer) eller "icke godkänt".

// let userRecord=Number(prompt("write down a records"));
//  function measureRecord(userRecord){
//      return userRecord>=85 && userRecord<=100 ? "Vädigt Godkänt"
//           :userRecord>=60 && userRecord<85? "Godkänt"
//           :userRecord>=0 && userRecord<60 ? "Ikke Godkänt"
//      :"invalid record"
//      }
// console.log(measureRecord(userRecord))




// Discount Eligibility
// let customerType = 'member'; Alternativa värden kan vara 'non-member' Använd en 
// ternary operator för att avgöra om en kund har rätt till rabatt ("eligible") eller 
// inte ("not eligible") beroende på om de är en "member" eller "non-member".





// ??????????????????????????
// ??????????????????????????
// ??????????????????????????
//the problem with this is the input is case sensitive, with uppercase, it always excutes the first command, so the result returns go with discount//
// let userMembership="non-member";
// // userMembership="yes" ? console.log("go with discount"):console.log("Normal price");
// if (userMembership="member"){
//     console.log("go with discount");
// }
// else{
//     console.log("Normal price")
// }





//lOOPS BOOTCAMP
//Classic For loops
//1. Skapa en loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.

// for (let i=1; i<1001; i++){
//     console.log(i)
// }

//2.Skapa en loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.
// for (i=100;i>=0; i--){
//     console.log(i)
// }
//   let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
//3.Loopa ut ovanstående array med en for-loop. För varje varv ska du console.log() innehållet ( frukten ).

// let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
// method 1
// for (fruits of fruits){
//     console.log(fruits);
// }

// mthod 2
// for (i in fruits){
//     console.log(fruits[i])
// }

// method 3
// for (i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }




//4.Loopa ut ovanstående array med console.log(). Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.
// let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
//  for (i in fruits){
//     console.log(i+fruits[i])
//  }





// FOR OF LOOPS
// let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
// 5. Loopa ut ovanstående array och console.log() varje pryl.

// let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
// for (things of things){
//     console.log(things)
// }





// FOA EACH LOOPS
// let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
//6. Loopa ut ovanstående array och console.log() varje pryl.

// let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
// method 1
// things.forEach((thing)=>{
//     console.log(thing);
// });

// method 2
// things.forEach((thing)=>console.log(thing));






// 7. Loopa ut ovanstående array och console.log() varje pryl samt vilken position i arrayen den har.
// let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
// for (i in things){
//     console.log(i+things[i]);
// }


// WHILE LOOPS
// 8. Skapa en while-loop som kör 1000 varv. console.log() ut varje varv.

// let i=0;
// while (i<1001){
//     console.log(i)
//     i++;
// }

// LOOP DA LOOPS
// 9. Generera en kortlek med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex.
// [..., 'hjärter 8', 'hjärter 9', ...]



// method 1
// let cardPlaying=[];
// let cardSuits=["heart","spade","diamond","club"];
//     cardSuits.forEach((cardSuit)=>{
//         for (i=2;i<15;i++){
//             cardPlaying.push(cardSuit+i);
//             // cardPlaying.sort();
//         }
//     })
// console.log(cardPlaying)


// method 2
// let cardPlaying=[];
// let cardSuits=["heart","spade","diamond","club"];
// for (s=0;s<4;s++){
//     for (i=2;i<15;i++){
//         cardPlaying.push(cardSuits[s]+i);
//     }
// }
// console.log(cardPlaying)



// 10. Loopa ut samtliga vänners favoritfrukter med en console.log().
//  let friends = [
//     {
//             name: 'Sixten',
//             likes: [
//             'bananas',
//             'strawberries',
//             'blueberries'
//             ]
//     },
//     {
//         name: 'Khalid',
//         likes: [
//             'papaya',
//              'pear',
//             'pineapple'
//         ]
//     },
//     {
//         name: 'Lisa',
//         likes: [
//             'raspberries',
//             'watermelon',
//              'apple'
//          ]
//     }
// ]

// friends.forEach((friend)=>{
//    console.log(friend.likes)
// })

// for (friends of friends){
//     console.log(friends.likes)
// }




// 11. Brute force
// Skriv ett program som tar ett random lösenord från denna lista och sparar i variabeln topsecret.

 const passwords = [123456, "password", 12345678, "qwerty", 123456789, 12345, 1234, 111111, 1234567, "dragon", 123123, "baseball", "abc123", "football", "monkey", "letmein", 696969, "shadow", "master", 666666, "qwertyuiop", 123321, "mustang", 1234567890, "michael", 654321, "pussy", "superman", "1qaz2wsx", 7777777, "fuckyou", 121212, "qazwsx", "123qwe", "killer", "trustno1", "jordan", "jennifer", "zxcvbnm", "asdfgh", "hunter", "buster", "soccer", "harley", "batman", "andrew", "tigger", "sunshine", "iloveyou", "fuckme", 2000, "charlie", "robert", "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", 112233, "george", "asshole", "computer", "michelle", "jessica", "pepper", 1111, "zxcvbn", 555555, 11111111, 131313, "freedom", 777777, "pass", "fuck", "maggie", 159753, "aaaaaa", "ginger", "princess", "joshua", "cheese", "amanda", "summer", "love", "ashley", 6969, "nicole", "chelsea", "biteme", "matthew", "access", "yankees", 987654321, "dallas", "austin", "thunder", "taylor", "matrix", "william", "corvette", "hello", "martin", "heather", "secret", "fucker", "merlin", "diamond", "1234qwer", "gfhjkm", "hammer", "silver", 222222, 88888888, "anthony", "justin", "test", "bailey", "q1w2e3r4t5", "patrick", "internet", "scooter", "orange", 11111, "golfer", "cookie", "richard", "samantha", "bigdog", "guitar", "jackson", "whatever", "mickey", "chicken", "sparky", "snoopy", "maverick", "phoenix", "camaro", "sexy", "peanut", "morgan", "welcome", "falcon", "cowboy", "ferrari", "samsung", "andrea", "smokey", "steelers", "joseph", "mercedes", "dakota", "arsenal", "eagles", "melissa", "boomer", "booboo", "spider", "nascar", "monster", "tigers", "yellow", "xxxxxx", 123123123, "gateway", "marina", "diablo", "bulldog", "qwer1234", "compaq", "purple", "hardcore", "banana", "junior", "hannah", 123654, "porsche", "lakers", "iceman", "money", "cowboys", 987654, "london", "tennis", 999999, "ncc1701", "coffee", "scooby", "miller", "boston", "q1w2e3r4", "fuckoff", "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", 333333, "oliver", "redsox", "player", "nikita", "knight", "fender", "barney", "midnight", "please", "brandy", "chicago", "badboy", "iwantu", "slayer", "rangers", "charles", "angel", "flower", "bigdaddy", "rabbit", "wizard", "bigdick", "jasper", "enter", "rachel", "chris", "steven", "winner", "adidas", "victoria", "natasha", "1q2w3e4r", "jasmine", "winter", "prince", "panties", "marine", "ghbdtn", "fishing", "cocacola", "casper", "james", 232323, "raiders", 888888, "marlboro", "gandalf", "asdfasdf", "crystal", 87654321, 12344321, "sexsex", "golden", "blowme", "bigtits", 8675309, "panther", "lauren", "angela", "bitch", "spanky", "thx1138", "angels", "madison", "winston", "shannon", "mike", "toyota", "blowjob", "jordan23", "canada", "sophie", "Password", "apples", "dick", "tiger", "razz", "123abc", "pokemon", "qazxsw", 55555, "qwaszx", "muffin", "johnson", "murphy", "cooper", "jonathan", "liverpoo", "david", "danielle", 159357, "jackie", 1990, "123456a", 789456, "turtle", "horny", "abcd1234", "scorpion", "qazwsxedc", 101010, "butter", "carlos", "password1", "dennis", "slipknot", "qwerty123", "booger", "asdf", 1991, "black", "startrek", 12341234, "cameron", "newyork", "rainbow", "nathan", "john", 1992, "rocket", "viking", "redskins", "butthead", "asdfghjkl", 1212, "sierra", "peaches", "gemini", "doctor", "wilson", "sandra", "helpme", "qwertyui", "victor", "florida", "dolphin", "pookie", "captain", "tucker", "blue", "liverpool", "theman", "bandit", "dolphins", "maddog", "packers", "jaguar", "lovers", "nicholas", "united", "tiffany", "maxwell", "zzzzzz", "nirvana", "jeremy", "suckit", "stupid", "porn", "monica", "elephant", "giants", "jackass", "hotdog", "rosebud", "success", "debbie", "mountain", 444444, "xxxxxxxx", "warrior", "1q2w3e4r5t", "q1w2e3", "123456q", "albert", "metallic", "lucky", "azerty", 7777, "shithead", "alex", "bond007", "alexis", 1111111, "samson", 5150, "willie", "scorpio", "bonnie", "gators", "benjamin", "voodoo", "driver", "dexter", 2112, "jason", "calvin", "freddy", 212121, "creative", "12345a", "sydney", "rush2112", 1989, "asdfghjk", "red123", "bubba", 4815162342, "passw0rd", "trouble", "gunner", "happy", "fucking", "gordon", "legend", "jessie", "stella", "qwert", "eminem", "arthur", "apple", "nissan", "bullshit", "bear", "america", "1qazxsw2", "nothing", "parker", 4444, "rebecca", "qweqwe", "garfield", 11012011, "beavis", 69696969, "jack", "asdasd", "december", 2222, 102030, 252525, 11223344, "magic", "apollo", "skippy", 315475, "girls", "kitten", "golf", "copper", "braves", "shelby", "godzilla", "beaver", "fred", "tomcat", "august", "buddy", "airborne", 1993, 1988, "lifehack", "qqqqqq", "brooklyn", "animal", "platinum", "phantom", "online", "xavier", "darkness", "blink182", "power", "fish", "green", 789456123, "voyager", "police", "travis", "12qwaszx", "heaven", "snowball", "lover", "abcdef", 1112200000, "pakistan", 44007007, "walter", "playboy", "blazer", "cricket", "sniper", "hooters", "donkey", "willow", "loveme", "saturn", "therock", "redwings", "bigboy", "pumpkin", "trinity", "williams", "tits", "nintendo", "digital", "destiny", "topgun", "runner", "marvin", "guinness", "chance", "bubbles", "testing", "fire", "november", "minecraft", "asdf1234", "lasvegas", "sergey", "broncos", "cartman", "private", "celtic", "birdie", "little", "cassie", "babygirl", "donald", "beatles", 1313, "dickhead", "family", 12121212, "school", "louise", "gabriel", "eclipse", "fluffy", 147258369, "lol123", "explorer", "beer", "nelson", "flyers", "spencer", "scott", "lovely", "gibson", "doggie", "cherry", "andrey", "snickers", "buffalo", "pantera", "metallica", "member", "carter", "qwertyu", "peter", "alexande", "steve", "bronco", "paradise", "goober", 5555, "samuel", "montana", "mexico", "dreams", "michigan", "cock", "carolina", "yankee", "friends", "magnum", "surfer", "poopoo", "maximus", "genius", "cool", "vampire", "lacrosse", "asd123", "aaaa", "christin", "kimberly", "speedy", "sharon", "carmen", 111222, "kristina", "sammy", "racing", "ou812", "sabrina", "horses", 987654321, "qwerty1", "pimpin", "baby", "stalker", "enigma", 147147, "star", "poohbear", "boobies", 147258, "simple", "bollocks", "12345q", "marcus", "brian", 1987, "qweasdzxc", "drowssap", "hahaha", "caroline", "barbara", "dave", "viper", "drummer", "action", "einstein", "bitches", "genesis", "hello1", "scotty", "friend", "forest", 99010203, "hotrod", "google", "vanessa", "spitfire", "badger", "maryjane", "friday", "alaska", "1232323q", "tester", "jester", "jake", "champion", "billy", 147852, "rock", "hawaii", "badass", "chevy", 420420, "walker", "stephen", "eagle1", "bill", 1986, "october", "gregory", "svetlana", "pamela", 1984, "music", "shorty", "westside", "stanley", "diesel", "courtney", 242424, "kevin", "porno", "hitman", "boobs", "mark", "12345qwert", "reddog", "frank", "qwe123", "popcorn", "patricia", "aaaaaaaa", 1969, "teresa", "mozart", "buddha", "anderson", "paul", "melanie", "abcdefg", "security", "lucky1", "lizard", "denise", 3333, "a12345", 123789, "ruslan", "stargate", "simpsons", "scarface", "eagle", "123456789a", "thumper", "olivia", "naruto", 1234554321, "general", "cherokee", "a123456", "vincent", "Usuckballz1", "spooky", "qweasd", "cumshot", "free", "frankie", "douglas", "death", 1980, "loveyou", "kitty", "kelly", "veronica", "suzuki", "semperfi", "penguin", "mercury", "liberty", "spirit", "scotland", "natalie", "marley", "vikings", "system", "sucker", "king", "allison", "marshall", 1979, 3298765, "qwerty12", "hummer", "adrian", 1985, "vfhbyf", "sandman", "rocky", "leslie", "antonio", 98765432, 4321, "softball", "passion", "mnbvcxz", "bastard", "passport", "horney", "rascal", "howard", "franklin", "bigred", "assman", "alexander", "homer", "redrum", "jupiter", "claudia", 55555555, 141414, "zaq12wsx", "shit", "patches", "nigger", "cunt", "raider", "infinity", "andre", 54321, "galore", "college", "russia", "kawasaki", "bishop", 77777777, "vladimir", "money1", "freeuser", "wildcats", "francis", "disney", "budlight", "brittany", 1994, 9921200, "sweet", "oksana", "honda", "domino", "bulldogs", "brutus", "swordfis", "norman", "monday", "jimmy", "ironman", "ford", "fantasy", 9999, 7654321, "PASSWORD", "hentai", "duncan", "cougar", 1977, "jeffrey", "house", "dancer", "brooke", "timothy", "super", "marines", "justice", "digger", "connor", "patriots", "karina", 202020, "molly", "everton", "tinker", "alicia", "rasdzv3", "poop", "pearljam", "stinky", "naughty", "colorado", "123123a", "water", "test123", "ncc1701d", "motorola", "ireland", "asdfg", "slut", "matt", "houston", "boogie", "zombie", "accord", "vision", "bradley", "reggie", "kermit", "froggy", "ducati", "avalon", 6666, 9379992, "sarah", "saints", "logitech", "chopper", 852456, "simpson", "madonna", "juventus", "claire", 159951, "zachary", "yfnfif", "wolverin", "warcraft", "hello123", "extreme", "penis", "peekaboo", "fireman", "eugene", "brenda", 123654789, "russell", "panthers", "georgia", "smith", "skyline", "jesus", "elizabet", "spiderma", "smooth", "pirate", "empire", "bullet", 8888, "virginia", "valentin", "psycho", "predator", "arizona", 134679, "mitchell", "alyssa", "vegeta", "titanic", "christ", "goblue", "fylhtq", "wolf", "mmmmmm", "kirill", "indian", "hiphop", "baxter", "awesome", "people", "danger", "roland", "mookie", 741852963, 1111111111, "dreamer", "bambam", "arnold", 1981, "skipper", "serega", "rolltide", "elvis", "changeme", "simon", "1q2w3e", "lovelove", "fktrcfylh", "denver", "tommy", "mine", "loverboy", "hobbes", "happy1", "alison", "nemesis", "chevelle", "cardinal", "burton", "wanker", "picard", 151515, "tweety", "michael1", 147852369, 12312, "xxxx", "windows", "turkey", 456789, 1974, "vfrcbv", "sublime", 1975, "galina", "bobby", "newport", "manutd", "daddy", "american", "alexandr", 1966, "victory", "rooster", "qqq111", "madmax", "electric", "bigcock", "a1b2c3", "wolfpack", "spring", "phpbb", "lalala", "suckme", "spiderman", "eric", "darkside", "classic", "raptor", "123456789q", "hendrix", 1982, "wombat", "avatar", "alpha", "zxc123", "crazy", "hard", "england", "brazil", 1978, 10211980, "wildcat", "polina", "freepass"];
// function randomPassword(){
//     console.log(passwords[Math.floor(Math.random()*passwords.length)]);
// }
// randomPassword()

// Skriv sedan ett program som med brute force testar samtliga lösenord l listan mot din hemliga 
// slumpade lösenord. console.log() lösenordet som matchar.

// console.log(`Aha! I found you, ${matched_password}.`)


/*EXTRA
Alla i gruppen får en egen variabel med sin gissning, använd en loop för att slå ihop dom till ett objekt eller en array.
Ha en variabel som slumpar fram en siffra
Loopa igenom allas svar och se om någon matchar siffran som slumpats fram
skriv ut en text som berättar vem vinnaren var
EXTRA - kolla vem som var närmst det slumpade talet*/

/*  let randomNumber=Math.floor(Math.random()*1000)+1;
    function userNumber(){
         return Math.floor(Math.random()*1000)+1
     }
    let users=[
    {name:"Alicia",lotteryNumber:userNumber()},
    {name:"Noah",lotteryNumber:userNumber()},
    {name:"Amber",lotteryNumber:userNumber()}
    ];
    console.log(users)*/

 //minDiff to set up a very large difference to allow further update of new difference between lotteryNumber and reandomNumber.
 // set up a winerIndex to remember the current index of the array users in order to output the name of users.
 //for loop to loopthrough array users, to find the closest lotteryNumber to the randomNumber, using math.abs to find the closet difference
 //if to update the minDiff with the result of each difference between lotteryNumber and randomNumber, until the closest difference has been found.
 //user[winerIndex].name to output the user name.
/*  let minDiff = 1000000;
    let winerIndex = 0;
    for (i=0;i<3;i++){
        let diff = Math.abs(users[i].lotteryNumber - randomNumber);
        if (diff < minDiff) {
            minDiff = diff;
             winerIndex= i;
        }
    } 
    console.log(users[winerIndex].name)*/


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



