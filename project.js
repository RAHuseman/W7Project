
//Question 1
//a. Create an array called ages that contains the following values: 3,9,23,64,2,8,28,93, and print the array.
//b. Programmatically subtract the value of the first element in the array from the value of the last element in the array. (Do not use numbers -- ages[7] - ages[0] is not allowed!) and print it to the console.
//c. Insert the value 100 into your array, print the array again, and repeat step b.
//d. Use a loop to iterate through the array and calculate the average age, and print the average age out to the console.

// Use console.log() to print the requested information to the console.//

//a. Create an array called ages that contains the following values: 3,9,23,64,2,8,28,93, and print the array.
let ages =[3,9,23,64,2,8,28,93,];

console.log('Question 1 A:',ages);

//b. Programmatically subtract the value of the first element in the array from the value of the last element in the array. 
// (Do not use numbers -- ages[7] - ages[0] is not allowed!) and print it to the console.
let last = ages.pop(7);
let first = ages.shift(0);
console.log('Question 1 B:',last - first);

//c. Insert the value 100 into your array, print the array again, and repeat step b.
 ages = [3,9,23,64,2,8,28,93,];
 ages.push(100);
console.log('Question 1 C:', ages);
last = ages.pop(8)
first = ages.shift(0);
console.log('Question 1 C:', last - first);

//d. Use a loop to iterate through the array and calculate the average age, and print the average age out to the console.
ages = [3,9,23,64,2,8,28,93,100];
let average = ages.length;
let sum = 0; // varaiable for sum.... I need to find the sum of the index's and then divide it by the number of indexs using .length

for (let index = 0; index < ages.length; index++) {
    
    //   console.log("\n index:",index, "Sum before adding:", sum);

       // += is the addition assignment operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
           sum += ages[index];
    //    console.log(sum / average);
       
   }
   console.log('Question 1 D:', sum / average);
// Expected STDOUT
// [
// 3, 9, 23, 64,
// 2, 8, 28, 93
// ]
// 90
// [
// 3, 9, 23, 64, 2,
// 8, 28, 93, 100
// ]
// 97
// 36.666666666666664



// Question 2
// A. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// b. Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

// A. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLength = 0;
// b. Use a loop to iterate through the array and calculate the average number of letters per name.
for (let index = 0; index < names.length; index++) {
   //itterates the lenght of each index
    totalLength += names[index].length;
}   // created variable averageLength and it equals the totalLenght found above divided by the number of array elements 
let averageLength = totalLength / names.length;

console.log('Question 2:',averageLength);
let concat = '';
for (let i = 0; i < names.length; i++) {
   concat += names[i].concat;
}
console.log('Question 2:', names);
// for (let name of names){
//     console.log(name);
// }



// Question 3
// How do you access the last element of any array?
// Using the pop() method.
let names2 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let last2 = names.pop(5);
console.log('Question 3:', last);



// Question 4
// How do you access the first element of any array?
// Using the shift() method.
let names3 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let last3 = names.shift(0);
console.log('Question 4:',last3);



// Question 5
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

let names1 = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLength= []; //Creates an array names nameLength
// console.log(names1); // 


for (let i = 0; i<names1.length; i++){
    // console.log(i);
    // console.log(names1[i]);
    nameLength.push(names1[i].length);
}
console.log('Question 5:', nameLength);

let nameLengths = [5, 3, 4];             // create a new array



// Question6
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

sum2 = 0;

for (let i = 0; i < nameLengths.length; i++){
    // console.log(i);
    // console.log(nameLengths[i]);
    sum2 += nameLengths[i];
}

console.log('Question 6:',sum2);



// Question 7
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number 
// of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

// function cont ('',n){
    
// }

function myCount (word, n) {
    let result = '';
    for (let i = 0; i < n; i++){
    result += word;
}
    return result;
}

var result = myCount( 'Hello', 3);
console.log('Question 7:',result);



// Question 8
// Write a function that takes two parameters, firstName and lastName, and returns a full name. 
// The full name should be the first and the last name separated by a space.

function fullName ( firstName, lastName){
    let result = firstName + ' ' + lastName;
    return result;
}

var result = fullName('Ryan', 'Huseman');
console.log('Question 8:',result);



// Question 9
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function arrayofNumbers (array,){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        // console.log(sum);
    }
    if (sum > 100){
        return true;
    } else {
        return false;
    }


}

let inputArray1 = [40,40,];
console.log('Question 9:',inputArray1);

console.log('Question 9:',arrayofNumbers(inputArray1));



// Question 10
// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function arrayOfNumbers2 (inArray, ){
    var sum = 0;
    for (let i = 0; i < inArray.length; i++){
        sum += inArray[i];
    }
    return sum / inArray.length;
}

let fakeArray = [30,40,30,400];
console.log('Question 10:',arrayOfNumbers2(fakeArray));



// Question 11
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
// first array is greater than the average of the elements in the second array.

function questionEleven (arrayOne, arrayTwo) {
    
    let sumOne = 0;
    let averageOne = 0;
    for (let i = 0; i< arrayOne.length; i++){
        sumOne += arrayOne[i];
        averageOne = sumOne / arrayOne.length;
    }

    let sumTwo = 0;
    let averageTwo = 0;
    for(let i = 0; i < arrayTwo.length; i++){
        sumTwo += arrayTwo[i];
        averageTwo = sumTwo / arrayTwo.length;
    }
    if( averageOne > averageTwo ) {
        return true;
    } else {
        return false;
    }
}

let fakeArrayOne = [30,60,70,90];  //Average 62
let fakeArrayTwo = [40,90,120,40]; //Average 72

console.log('Question 11:',questionEleven(fakeArrayOne, fakeArrayTwo));



// Question 12
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if 
// moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket){
    if( moneyInPocket > 10.50 && isHotOutside == true){
    return true;
} else {
    return false;
}
}
let money = 90;
let hotOutside = true;
console.log('Question 12:',willBuyDrink(hotOutside, money));

// Question 13
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// 
//  My function is true if there's an odd amount of colored pencils and if they are sharp. I created this because I was drawing a blank, 
// and theres a container of colored pencils in my room.
// I also thought this may challenge me at this time.

// Created a function called coloredPencil with two parameters (amount, sharp)
function coloredPencil (amount, sharp){
    // Created a for loop that iterates through the amount of pencils
    for(let i = 0; i < amount; i++){
        // if the variable i is divided by two and does not equal zero AND sharp equals true)
        if (i % 2 !== 0 && sharp == true) {
        //    This returns the function as true
            return true;
        } else {
            // This returns the function as false
            return false;
        }
    }
}
   
const coloredPencilAmount = 200;
const pencilPoint = true;

console.log('Question 13:', coloredPencil(coloredPencilAmount,pencilPoint));