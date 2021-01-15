// this is your main.js script
/*
let firstName = "minju"
let lastName = "Kim"
let country="korea"
let city = "seoul"
let age= 24
let isMarried=false
let year = 2021


let k= new Date();
year= k.getFullYear()
month=k.getMonth()+1
date=k.getDate()
day=k.getDay()
hour=k.getHours()
min=k.getMinutes()
milli=k.getTime()
*/
//888888888
/*
let a=prompt('enter a')
let b=prompt('enter b')
let c=prompt('enter c')

let root=(-b + Math.sqrt(b**2 -4*a*c))/(2*a)

alert(`when y is 0, xs are ${root}`)

*/
/*
let hours = prompt('enter hours')
let rate = prompt('enter rate')

let weekly = hours * rate

alert(`your weekly earning is ${weekly}`)
*/
/*
let coolName=prompt('enter name')

let long=coolName.length

if(long>7){
    alert('wow long name')
} else{
    alert('short')
}

*/
/*
let first=prompt('enter first name')
let family=prompt('enter family name')

let myName=first.length;
let faName=family.length;

if (myName>faName){
    alert(`your first name ${first} is longer than your family name ${family}`)

}
else{
    alert(`your first name ${first} is shorter than your family name ${family}`)

}

*/
/*
let myAge = 24
let yourAge = 23
let gat=myAge-yourAge

alert(`I am ${gat} years older than you`)

*/
/*
let birth=prompt('Enter birth year')
let age=2021-birth-1
let gap=Math.abs(age-18)

if (age>=18){
    alert(`you are ${age}, you are good to drive`)
}
else{
    alert(`you are ${age}, you need to wait ${gap}`)
}
*/
/*
let seconds=prompt('enter number of yours you live')

const yearOne=31556952
let howLong=seconds*yearOne

alert(`You lived ${howLong} seconds.`)

*/

let today=new Date();

let yy=today.getFullYear();
let mm=today.getMonth()+1
console.log(mm)
let dd=today.getDate()
let hh=today.getHours()
let min=today.getMinutes()
/*
console.log(`1.${yy}-${mm}-${dd} ${hh}:${min}`)
console.log(`1.${dd}-${mm}-${yy} ${hh}:${min}`)
console.log(`1.${dd}/${mm}/${yy} ${hh}:${min}`)
*/

//ex3
if(mm.length =1 ){
    let mm='0'+(today.getMonth()+1)
    console.log(mm)
    console.log(`1.${yy}-${mm}-${dd} ${hh}:${min}`)

} else{
console.log(`1.${yy}-${mm}-${dd} ${hh}:${min}`)
}
