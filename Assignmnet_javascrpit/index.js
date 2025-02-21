
// Q.1 
let a = "Ashish"
let number = 22
let concat = a + number
// console.log(a+number)
// console.log(concat)

//Q.2
function Find_type(Data) {
    console.log(typeof (Data))
}
// Find_type(concat)

// Q.3
// const no_change="Akash"
// no_change = no_change +"Ashish"
// console.log(no_change)
// C:\Users\rcc\Desktop\Assignmnet_javascrpit\index.js:17
// no_change = no_change +"Ashish"
//           ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\Users\rcc\Desktop\Assignmnet_javascrpit\index.js:17:11)
//     at Module._compile (node:internal/modules/cjs/loader:1546:14)
//     at Object..js (node:internal/modules/cjs/loader:1689:10)
//     at Module.load (node:internal/modules/cjs/loader:1318:32)
//     at Function._load (node:internal/modules/cjs/loader:1128:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:315:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.11.0

// Q.4
// let test={
// id:"2",
// u_name:"Ashish",
// age:9
// }
// test.hi = 1;
// console.log(test)

// Q.5
function Word_meaning(word) {
    let dictinary = {
        "Happy": "To good something",
        "Work": "To happen",
        "Joy": "Enjoy",
        "Death": "End of life",
        "birth": "Start of life"
    }
    for (const key in dictinary) {
        const element = dictinary[key];

        console.log(key, ":", element);
    }
    // console.log( dictinary[word]? `${word}:${dictinary[word]}` :"Element not found!!!..");
}
// Word_meaning("Happy")

// Q.2.1
function check_age(age) {
    if (age >= 10 && age <= 20) {
        console.log("Youre age is lies betwen 10 and 20")
    }
    else if (age < 10) {
        console.log("Age is less than 10")
    }
    else {
        console.log("You are older than 20 year")
    }
}
// check_age(21)

// Q2.2

function greeting(time) {
    switch (time) {
        case '11:00pm':
            console.log("Good morning")
            break;
        case '10:00':
            console.log("Good morning")
            break;
        case '9:00':
            console.log("Good morning")
            break;
        case '8:00':
            console.log("Good morning")
            break;
        case '7:00':
            console.log("Good morning")
            break;
        case '12:00pm':
            console.log("Good morning")
            break;
        case '1:00pm':
            console.log("Good after non")
            break;
        case '2:00pm':
            console.log("Good after non")
            break;
        case '3:00pm':
            console.log("Good after non")
            break;
        case '4:00pm':
            console.log("Good after non")
            break;
        case '5:00pm':
            console.log("Good after non")
            break;
        case '6:00pm':
            console.log("Good evaning")
            break;
        case '7:00pm':
            console.log("Good evaning")
            break;
        case '8:00pm':
            console.log("Good evaning")
            break;
        case '9:00pm':
            console.log("Good night")
            break;
        case '10:00pm':
            console.log("Good night")
            break;
        case '11:00pm':
            console.log("Good night")
            break;

        default:
            console.log("invalid time");
    }
}
// greeting('8:00pm')

function check_Age(age){age>=18 ? console.log("You are able to drive") :console.log("you are not able to drive");}

// check_Age(12)

// Q 3.1
obj = {
    "Ashish":100,
    "Rohan":30,
    "Rohit":50
}

for (const key in obj) {
        const element = obj[key];
        // console.log(`Name:${key},Marks:${element}`);
}
// let ,const ,var
// Q 3.3
function check_num(u_input) {
    return isNaN(Number(num)) ? 0 : 1;  
    // for number 1 and string 0
} 


// while (true) {
//     var num = prompt("Enter Number only...");
//     if(check_num(num)){
//         console.log("Your Number is:"+num);
//         break;
//     }
//     else{
//         console.log("Try again...");
//     }
// }  
// Q 3.4
function find_mean(arr) {
    sum = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum = sum + element;
    }
    result = sum/arr.length;
    return isNaN(result) ? "Error" : result
}
arr=[1,2,3,4,5,6.5]
// arr ="asbc"
// arr = "420sanjay"
// console.log(find_mean(arr))

// Q 4.1
// console.log("har\"".length);
// Q  4.2
let s2 = "Ashish is good boy";
let result = s2.includes("is",7);
// console.log(s2.startsWith("shish"))
// console.log(s2.endsWith("boy"))
// console.log(result)

// Q 4.3
// console.log(s2.toLowerCase())
// console.log(s2.toUpperCase())

// Q 4.4
text ="Please Give rs 1000";
let number2=""; 
for (let index = 0; index < text.length; index++) {
    let element = text[index];
    if(element == '0' || element == '1'){
        number2 = number2+element;
    }
}
// console.log(typeof(number2))
// console.log(parseInt(number2))

//Q 4.5
text[10]="A"
// console.log(text)

// Q 5.1
// size_of_Array= prompt("Enter a Size of array...")
// arr1=[]
// while (size_of_Array>-1) {
//     arr1[size_of_Array] = prompt("Enter number...");
//     size_of_Array = size_of_Array-1;
// }        
// console.log(arr1);

//Q 6.1
function check_negative(s1=""){
    if(s1.startsWith("-")){
        return 1;
    }
    else{
        return 0;
    }
}

// console.log(check_negative("1"));
// do {
//     age  = prompt("Enter your age")

//     if(age==4){
//         // Q 6.4
//         window.location.replace("http://www.google  .com");
//     }

//     if (age>18) {
//         console.log("Your are eligible for driving");
//         break;
//     }
//     else{
//         // 6.3
//         check_negative(age)? console.error("nagative age not allow"):
//         //6.2
//         console.log("you are not eligible for driving...");
//         result = confirm("Are you write age again?");
//         if(result==false){
//             break;
//         }
//     }
// } while (true);
// 6.5
div = document.getElementById('color_change')
function change_red(){
div.style.backgroundColor="red";
};
function change_green(){
   div.style.backgroundColor="green";
};

//7.1




