## 03-walk-one

---
### Objective
When you click the button, display in the console, one after the other (use a loop), each value of the fruits array.

---
### Solution
````
(function() {

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

    run.addEventListener('click', loop);

    function loop() {
        for (i=0; i< fruits.length; i++){
            console.log(fruits[i]);
        }

    }

})();
````
---
### Useful links
* https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript
* https://www.freecodecamp.org/news/javascript-for-loop-how-to-loop-through-an-array-in-js/