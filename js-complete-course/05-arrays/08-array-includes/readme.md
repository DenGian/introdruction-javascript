## 08-array-includes

---
### Objective
When you click the button, log in the console if, yes or no, there is an apple in the array fruits.

#### Use of Array.prototype.includes()
* The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    * Example
````
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true
[1, 2, NaN].includes(NaN)     // true
["1", "2", "3"].includes(3)   // false
````
#### Syntax
````
includes(searchElement)
includes(searchElement, fromIndex)
````
#### Useful link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes?retiredLocale=nl

---
### Solution
````
(function() {

    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", () => {
        if (fruits.includes('apple')){
            console.log("Yes");
        }else  {
            console.log("No");
        }
    })
    
})();
````
---
### Useful links
* https://www.w3schools.com/jsref/jsref_includes_array.asp
* https://www.javascripttutorial.net/es-next/javascript-array-includes/