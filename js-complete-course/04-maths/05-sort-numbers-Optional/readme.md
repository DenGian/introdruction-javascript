## 05-sort-numbers-Optional

---
### Objective
On click to the button, get the numbers displayed in the input, and display them sorted in ascending order.

---
### Solution
````
(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
        let numbers = document.getElementById('numbers').value;
        let array = numbers.split(", ");
        array.sort(function(a, b){return a - b});
        alert(array);
    });

})();
````
---
### Useful links:
* https://www.w3schools.com/jsref/jsref_sort.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort