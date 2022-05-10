## 02-manipulate-array

---
### Objective
When you click the button, do the following transformations to the array fruits: remove the first and the last element, add an element "banana" at the start of the array, and add an element "kiwi" at the end.

---
### Solution
````
(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    run.addEventListener('click', manarray);
    
    function manarray() {
        fruits[0] = "banana";
        fruits[fruits.length - 1] = "kiwi";
        alert(fruits);
    }
})();
````
---
### Useful links
* https://flexiple.com/get-last-array-element-javascript/
* https://bobbyhadz.com/blog/javascript-replace-element-in-array