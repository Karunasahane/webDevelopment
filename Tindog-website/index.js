//--datatype and variables
/*4+8
alert("hello")
alert(5+3)
prompt("hello");
typeof("gnj")
typeof(66)
typeof(true)*/
/*var a="karuna"
//a
/*var a="disha"   //it removes previous value and add new
a
alert(a)*/




//--swaping challenge
/*var x=4;
var y=8;
//console.log(x);
//console.log(y);

//now we want to swap values of x and y without making new var x and y
var z=x;
x=y;
y=z;
console.log(x);
console.log(y);*/



//--concatenation*/
/*alert("hello"+"   "+"world");
var msg =" hello";
var name="om";
alert(msg+" dear, "+name+" how are you?👽")*/


//
/*var tweet=prompt("enter your tweet");
//alert("you have entered-"+(tweet.length)+" characters, remaining are "+(140-tweet.length)+" characters");
alert(tweet.slice(0,141));*/

/*var a="Karyimhb"
//a=a.toUpperCase();
a=a.toLowerCase();
a*/

//making firstletter-capital and remaining-small for name given by user
/*var name=prompt("enter your name");
firstchar=name.slice(0,1);
restname=name.slice(1,);
capitalfirstchar=firstchar.toUpperCase();
smallrestname=restname.toLowerCase();
capitalizedName=capitalfirstchar+smallrestname;
alert("hello "+capitalizedName);*/


//--arithmetic operators--
/*5+6
10-8
5*2
12/4
12%8  //modulo operator gives remainder after division
8%3
//we can predict no is even or odd by %2 -(0-even & 1-odd)
8%2
7%2*/
//--increment &decrement operator--
/*var x=6;
//x++;    -means x+1
//x--;    -means x-1
//x+=4;   -means x+4
//x-=2;   -means x-2
x*=9;
x
/*var y=2;
x+=y
x*/

//challenge-dogage to humanage converter
//formula-hAge=(dAge -2)*4+21

/*var dAge=prompt("enter your dog age");
var hAge=((dAge-2)*4)+21;
alert("your dog is "+hAge+"years old in human years");*/

//creating plane function and calling it
/*function clickresources() {
    console.log("moveUp");
    console.log("moveLeft");
    console.log("click ");
    console.log("moveRight");
    console.log("moveDown");
    }
clickresources(); 

//pass paremeter to function
function clickresources(times) {
    console.log("moveUp");
    console.log("moveLeft");
    console.log("click " + times + " times");
    console.log("moveRight");
    console.log("moveDown");
    }
clickresources(2); 
function clickresources(times) {
    console.log("moveUp");
    console.log("moveLeft");
    console.log("click " + Math.floor(times) + " times");   //math.floor-advance function to roundoff
    console.log("moveRight");
    console.log("moveDown");
    }
clickresources(5.85); 

function lifeRemaining(age){
    var remainingYears=90-age;
    var days=remainingYears*365;
    var weeks=remainingYears*52;
    var months=remainingYears*12
    console.log("you have "+days+" days, "+weeks+" weeks, "+months+" months ")
}
lifeRemaining(12)

//output and return value
function clickresources(times) {
    console.log("moveUp");
    console.log("moveLeft");
    console.log("click " + times + " times");
    console.log("moveRight");
    console.log("moveDown");
    return times * 5;                             //gives no.of moves to perform function- times(6) multiplied by 5=30
    }
clickresources(6);
function clickresources(times,units) {
    console.log("moveUp");
    console.log("moveLeft");
    console.log("click " + times + " times");
    console.log("moveRight");
    console.log("moveDown");
    console.log(" master, i require "+ (times * units) +" units of energy")
    return times * 5;                             //return should be always at last-statement after return are not executed
    }
var noOfMoves=clickresources(6,3);
console.log(" master, i require "+ noOfMoves +" moves to complete this task")

//bmi calculator
function bmiCalculator(weight,height){
 var bmi= Math.round(weight/Math.pow(height,2));  //math.round-to round0ff,math.pow(number,exponential)
 return bmi;
}
var bmiResult=bmiCalculator(45,1.8);
console.log(bmiResult);*/

//love calculator
/*prompt("enter your name:");
prompt("enter your crush name:");
var loveScore=Math.random() * 100;
loveScore=Math.floor(loveScore+1);
if (loveScore > 70) {
  alert("your love score is: " + loveScore + "%" +" your love is lifelong,BE HAPPY😊");  
}
if (loveScore > 30 && loveScore<= 70){                                                       // we can use &&(and)  ||(or)  !(not) operators
alert("your love score is: " + loveScore + "%"+ "jake dusra dhundle🙄");
}
else{
alert("your love score is: " + loveScore + "%" + " dhoka hai re baba! jald he katega☠");
}*/

//diff in == and ===
/*var a=1
var b="1"
typeof(a);
typeof(b);
if(a==b){                           // == checks only data item
    console.log("yes");
}else{
    console.log("no");
}
if(a===b){                          // === checks data item & datatype also
    console.log("yes");
}else{
    console.log("no");
}*/

//leap year
/*var year=prompt("enter the year:")
if (year %4 === 0){
    if (year %100 ===0){
        if (year %400 ===0){
            console.log("leap year");
           }
        else{
        console.log("not leap year")
        }}
    else{
    console.log("leap year")
    }}
else{
console.log("not leap year")
}*/

/*var guestName=["vishal","arjun","anuja","raj","pranjal"];
console.log(guestName);
var vip =guestName[2]; 
vip;
guestName.includes("raj");
guestName.includes("raju");*/

//guest party entry
/*var guestlist=["vishal","arjun","anuja","raj","pranjal","sita","gita","isha","disha"];
var name=prompt("enter your name:")
if(guestlist.includes(name)){
    alert("welcome to party🥂");
}
else{
    alert("nikal madarchod!");
}*/

//paybill
/*var guestlist=["vishal","arjun","anuja","raj","pranjal","sita","gita","isha","disha"];
function whoispaying() {
   var noOfGuest=guestlist.length;
    var i=Math.floor(Math.random() * noOfGuest)
    var guestName=guestlist[i];
   return guestName + " is going to pay lunch today" 
}
whoispaying(guestlist);*/


//fixxbuzz
/*var output=[];
var count=1;
function fizzbuzz() {
    if(count%3===0 && count%5===0){
       output.push("fizzbuzz"); 
    }
    else if(count%3===0){
    output.push("fizz");
    }
    else if(count%5===0){
    output.push("buzz");
    }
    else{
        output.push(count);
    }
    
   count++;
   console.log(output);

}   //and after this run <fizzbuzz();>   in output again and again*/



//whileloops
/*var i=1;
while (i<3) {
    console.log(i);
    i++;
    }*/

/*var output=[];
var count=1;
function fizzbuzz() {
 while (count<=100) {                     //due to while we have to run <fixxbuzz();> only one time in output
     
    if(count%3===0 && count%5===0){
       output.push("fizzbuzz"); 
    }
    else if(count%3===0){
    output.push("fizz");
    }
    else if(count%5===0){
    output.push("buzz");
    }
    else{
        output.push(count);
    }
    
   count++;
 }  //closing while
   console.log(output);
}*/

//forloop
/*for (let i = 0; i < 6; i++) {
    console.log(i);
}*/

/*var output=[];
var count=1;
function fizzbuzz() {
 for(var count=100; count>=1; count--) {                // or we can also use ---<for(var count=1; count<=100; count++)>---
     
    if(count%3===0 && count%5===0){ 
       output.push("fizzbuzz"); 
    }
    else if(count%3===0){
    output.push("fizz");
    }
    else if(count%5===0){
    output.push("buzz");
    }
    else{
        output.push(count);
    }
  }
   console.log(output);
} */

//fiibonacii series
function fibonacii(n){
    var output=[];
     if (n===1) {
        output.push(0)
        return output;
    }
    else if (n===2) {
        output.push(0)
        output.push(1)
        return output;
    }
    else{
         output.push(0)
        output.push(1)
        }
    
    for (var i = 0; i<(n-2); i++) {
        output.push(output[i] + output[i+1]);
    }
    return output;
}  //and after this run <fibonacii(4/5/42/anything);>   in output again and again*/