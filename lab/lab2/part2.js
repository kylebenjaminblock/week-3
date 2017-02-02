/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

function filterOutLessThan10 (array) {
   array2 =[];
  _.each(array, function(num){
     if (num > 10){
       array2.push(num);
     }
   });
   return (array2);
 }
  filterOutLessThan10([2,41]);

  

_.each(_.range(1, 101), function(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz")
    } else if (num % 5 == 0) {
        console.log("Buzz")
    } else if (num % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log(num)
    }
 });


var myArray = [1, 10, 100, 1000];
    _.each(myArray, function(value, key, list) {

    console.log(value, key, list);
 });
