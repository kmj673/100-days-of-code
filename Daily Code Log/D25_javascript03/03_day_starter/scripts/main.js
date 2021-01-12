// this is your main.js script

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

//888888888

let x2=prompt('enter x2')
let x1=prompt('enter x1')

let y2=x2**2+6*x2+9
let y1=x1**2+6*x1+9

alert(`when x is ${x2} is ${y2}, when x is ${x1} y is ${y1}`)


