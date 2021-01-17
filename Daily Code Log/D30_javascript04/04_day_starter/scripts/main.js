// this is your main.js script
/*
let userInput=prompt('enter your age:')
let gap=Math.abs(userInput-18)

if(userInput>=18){
    alert('You are old enough to drive')
}else{
    alert(`You are left with ${gap} years to drive`)
}*/
/*

let userInput=prompt('enter your age:')
let myAge=24
let gap=Math.abs(myAge-userInput)

if(userInput>myAge){
    console.log(`you are ${gap} years older than me`)
}*/

//using if else
/*
let a=prompt('enter a')
let b = prompt('enter b')
if(a>b){
    console.log(`${a} is greater than ${b}.`)
}else{
    console.log(`${a} is less than ${b}.`)
}
*/
//ternary operator
/*
let a=prompt('enter a')
let b = prompt('enter b')
a>b
    ? console.log(`${a} is greater than ${b}.`)
    : console.log(`${a} is less than ${b}.`)
    */
/*
let userInput=prompt('enter number:')
let division=userInput%2

if (division == 0){
    console.log(`${userInput} is an even number.`)
}else{
    console.log(`${userInput} is an odd number.`)

}
*/
/*
let grade=prompt('enter your grade:')

switch(true){
    case 0<=grade && grade<=49:
        console.log('F')
        break;
    case 50<=grade && grade<=59:
        console.log('D')
        break;
    case 60<=grade && grade<=69:
        console.log('C')
        break;
    case 70<=grade && grade<=89:
        console.log('B')
        break;
    case 90<=grade && grade<=100:
        console.log('A')
        break;
}
*/
/*
let userInput=prompt('enter month:')
let month=userInput.toLowerCase()

switch (month){
    case  'september' :
        console.log('autumn')
        break;
    case  'october':
        console.log('autumn')
        break;
    case  'november':
        console.log('autumn')
        break;

    case  'december':
        console.log('winter')
        break;
    case  'january':
        console.log('winter')
        break;
    case  'february':
        console.log('winter')
        break;

    case  'march':
        console.log('spring')
        break;
    case  'april':
        console.log('spring')
        break;
    case  'may':
        console.log('spring')
        break;

    case  'june':
        console.log('summer')
        break;
    case  'july':
        console.log('summer')
        break;

    case  'august':
        console.log('summer')
        break;
        
}
*/
/*
let userInput=prompt('what is the day today?')
let day=userInput.toLowerCase()

switch(day){
    case 'sunday':
        console.log(`${day} is weekend`)
        break;
    case 'monday':
        console.log(`${day} is weekday`)
        break;
    case 'tuesday':
        console.log(`${day} is weekday`)
        break;
    case 'wednesday':
        console.log(`${day} is weekday`)
        break;
    case 'thursday':
        console.log(`${day} is weekday`)
        break;
    case 'friday':
        console.log(`${day} is weekday`)
        break;                    
    case 'saturday':
        console.log(`${day} is weekend`)
        break;
}
*/
let userInput=prompt('enter a month:')
let month=userInput.toLowerCase()

switch (month){
    case 'january':
        console.log(`${month} has 31 days.`)
        break;
        case 'january':
            console.log(`${month} has 31 days.`)
            break;
        case 'february':
            console.log(`${month} has 28 days.`)
            break;
        case 'march':
            console.log(`${month} has 31 days.`)
            break;
        case 'april':
            console.log(`${month} has 30 days.`)
            break;
        case 'may':
            console.log(`${month} has 31 days.`)
            break;
        case 'june':
            console.log(`${month} has 30 days.`)
            break;
        case 'july':
            console.log(`${month} has 31 days.`)
            break;
        case 'august':
            console.log(`${month} has 31 days.`)
            break;
        case 'september':
            console.log(`${month} has 30 days.`)
            break;
        case 'october':
            console.log(`${month} has 31 days.`)
            break;
        case 'november':
            console.log(`${month} has 30 days.`)
            break;
        case 'december':
            console.log(`${month} has 31 days.`)
            break;
}