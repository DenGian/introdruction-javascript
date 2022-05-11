## 11-rand-array-stats-Optional

---
### Objective
When you click the button, display the ten elements of an array of 10 numbers (between 1 and 100) in the table. Then display in the definition list: the smallest number, the biggest number, the sum of all numbers, and their average.

### array().fill()."map()"?
#### Difference between array().fill() AND array().fill().map()
  * Array(3).fill(getObj()) will fill your array with references to the same object
  * Array(3).fill(null).map(getObj) will create object per element. See the example below:
#### Useful link: https://stackoverflow.com/questions/56704826/difference-between-fill-and-fill-map
### array().fill().map() 
* Example

````
let filledArray = new Array(10)
    .fill(null)
    .map(()=> ({'hello':'goodbye'}))

// In this approach, we are creating an array with ten empty slots, 
// then filling those slots with the null value, 
// then creating a new array with unique objects. 
// Now when we change an object in the array, 
// we are only changing a specific object, not a reference to an object.
````
#### Useful link: https://www.tutorialstonight.com/javascript-array-fill.php

#### Use of JavaScript Math Object
* Math is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object.

* Math works with the Number type. It doesn't work with BigInt.
  * #### BigInt?
    * BigInt is a primitive wrapper object used to represent and manipulate primitive bigint values — which are too large to be represented by the number primitive.
      * Useful link for BigInt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
#### Sooooooo
* Unlike other objects, the Math object has no constructor.

* The Math object is static.

* All methods and properties can be used without creating a Math object first.

#### Useful link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

### Math.floor()
* The Math.floor() function returns the largest integer less than or equal to a given number.
  * Syntax

````
Math.floor(x)
````

* Example

````
console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6
````
#### Soooooooo
* Because floor() is a static method of Math, you always use it as Math.floor(), rather than as a method of a Math object you created (Math is not a constructor).

#### Note
* Math.floor(null) returns 0, not a NaN.
#### Useful link
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

### Math.min()
* info later
### Math.max()
* info later

---
### Solution
````
(function() {

    document.getElementById("run").addEventListener("click" , () =>{
        let randomArray = Array(10).fill().map(()=> Math.floor(Math.random()* 100));
        randomArray.forEach( (number, index) => {
            let i = index + 1 ;
            document.getElementById(`n-${i}`).innerHTML = number ;
        });
        /*---- Min number ----*/
        document.getElementById('min').innerHTML = randomArray.reduce((a , b) => Math.min(a,b));
        /*----Max number ----*/
        document.getElementById('max').innerHTML = randomArray.reduce((a,b) => Math.max(a,b));
        /*----- sum ---------*/
        let sum = randomArray.reduce(function (previousValue,currentValue) {
            return previousValue + currentValue;
        })
        document.getElementById('sum').innerHTML = sum;

        /*----- avg ---------*/
        document.getElementById('average').innerHTML = sum / randomArray.length;

    });

})();
````
---
### Useful links
* https://www.w3schools.com/js/js_object_sets.asp
* https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o