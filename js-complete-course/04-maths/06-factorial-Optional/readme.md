## 06-factorial-Optional

---
### Objective
When you click the button, get the number in the input, and show its factorial.

---
### Solution
````
(function () {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function () {
        let number = document.getElementById('number').value;
        let factorial = 1;
        for (i = 1; i <= number; i++) {
            factorial = i * factorial;
            console.log(factorial);
        }

    });

})();
````
---
### Useful links:
* https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
* https://www.programiz.com/javascript/examples/factorial