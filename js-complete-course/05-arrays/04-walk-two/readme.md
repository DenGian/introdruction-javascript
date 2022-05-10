## 04-walk-two

---
### Objective
When you click the button, display on the console, one after the other, each value of the array fruits. Use the forEach method.

### JavaScript Array forEach()?
* The forEach method is also used to loop through arrays, but it uses a function differently than the classic "for loop".

  * The forEach method passes a callback function for each element of an array together with the following parameters:

1. Current Value (required) - The value of the current array element
2. Index (optional) - The current element's index number
3. Array (optional) - The array object to which the current element belongs

Let me explain these parameters step by step.

Firstly, to loop through an array by using the forEach method, you need a callback function (or anonymous function):
````
numbers.forEach(function() {
    // code
});
````
The function will be executed for every single element of the array. It must take at least one parameter which represents the elements of an array:
````
numbers.forEach(function(number) {
    console.log(number);
});
````
#### Sooooooooo
* The forEach() method calls a function for each element in an array.

* The forEach() method is not executed for empty elements.

Link: https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/

---
### Solution
````
(function() {
    run.addEventListener('click', loop);
    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    function loop() {
        fruits.forEach(element => console.log(element));
    }

})();
````
---
### Useful links
* https://www.w3schools.com/jsref/jsref_foreach.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach