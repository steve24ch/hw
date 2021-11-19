
//Problem 1 
function reverseThisString(str)
{
    return str.split("").reverse().join("");
}

console.log(reverseThisString("Hello"))

function swapCase(str) 
{
  if(str == str.toLowerCase()){
    return str.toUpperCase
  }

}
console.log(swapCase("Hello World"))



    
//Problem 2 

var string = 'Hello World'

    var arr = string.split('').map(function(n){
        return n === n.toUpperCase()
        ? n.toLowerCase()
        : n.toUpperCase()
      }).join('')

      console.log(arr)


//Problem 3 
const array = [23, 32, 41, 50, 59];
function toCelcius(array){
    const array2 = array.map(x => (x-32) * 5/9);
    return array2;
}
console.log(toCelcius(array))

//Problem 4
var array1 = [20, 30, 50, 80, 90, 100]
function passOrFail(array) {
    return array.map(array => array >= 75);
}

console.log(passOrFail(array1));



//Problem 5

const cardinalNumbers = [2,3,4,5,6];
const germanNumber = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
function germanNumbers(cardinalNumbers,germanNumber){
    var mergeredArray = [];
    for(i=0; i < cardinalNumbers.length; i++){

        mergeredArray.push(cardinalNumbers[i] + " is " + germanNumber[i])

    }
    return mergeredArray
}
console.log(germanNumbers(cardinalNumbers,germanNumber))

//Problem 6
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
    var result = [];
    var n = 0;
    
    for(var i = 0;i<numbers.length;i++){
        
        var Prime = true;
        
        for(var a = 2;a<numbers[i];a++){
        
            if(numbers[i]%a==0){
                Prime = false;
            }
        }
        
        if(Prime){
            if(numbers[i]!=1){
                result[n] = numbers[i];
                n++;
            }
        }
    }
    return result;

}
console.log(returnPrimeNumbers())

//Problem 7

function Csi() {
    for (let n = 1; n <= 100; n++) {
        if (n % 3 === 0 && n % 5 === 0) {
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        } else if (n % 3 === 0) {
            console.log("CSC225 RULES");
        } else if (n % 5 === 0) {
            console.log("I LOVE JAVASCRIPT");
        } else {
            console.log(n);
        }
    }
}
Csi();


   