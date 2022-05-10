## 01-get-one

---
### Objective
When you click the button, display the fourth item from the array fruits in the console.

### What is an array?
* In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

  * JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
  * JavaScript arrays are not associative arrays and so, array elements cannot be accessed using strings as indexes, but must be accessed using integers as indexes.
  * JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
  * JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

* Example:
````
const cars = ["Saab", "Volvo", "BMW"];
````
#### Sooooooooo
* An array is a special variable, which can hold more than one value

Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

### NOTE: Arrays start count as:
* __[0]__,[1],[2],[3].[4] ...

---
### Solution
````
(function() {
    run.addEventListener("click", fruit);
    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];
    function fruit() {
        alert(fruits[3]);
    }
    
})();
````
---
### Useful links
* https://javascript.info/array
* https://www.w3schools.com/js/js_arrays.asp
