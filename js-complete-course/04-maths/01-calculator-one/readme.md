## 01-calculator-one

---
### Objective
Correct the script to make the calculator work.

---
### Solution
````
document.getElementById("addition").addEventListener("click", function() {
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        alert(Number(one) + Number(two))
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        alert(one - two)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        alert(one * two)
    });

    document.getElementById("division").addEventListener("click", function() {
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        alert(one / two)
    });
````
---
### Useful links
* https://www.w3schools.com/js/js_number_methods.asp
* https://www.w3schools.com/jsref/jsref_number.asp