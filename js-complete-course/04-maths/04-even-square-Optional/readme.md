## 04-even-square-Optional

---
### Objective
On click on the button, calculate and display the square numbers between 1 and 21.

---
### Solution
````
(function() {

    document.getElementById("run").addEventListener("click", function() {
        for (i = 1; i <= 21; i++) {
            let result = i * i;
            if (result < 21) {
                alert(result);
            }
        }
    });

})();
````
---
### Useful link:
* https://stackoverflow.com/questions/3278556/for-loop-with-if-else-statement