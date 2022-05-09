## 02-calculator-two

---
### Objective
Complete the script to make the calculator work. To do it use the switch.
#### What is a switch?
* Example:
````
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
````
* Link: https://www.w3schools.com/js/js_switch.asp
---
### Solution
````
(function() {
    var performOperation = function(operation) {
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        switch(operation){
            case "addition":
                alert(Number(one)+Number(two));
                break;
            case "subtraction":
                alert(one - two);
                break;
            case "multiplication":
                alert(one * two);
                break;
            case "division":
                alert(one / two);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();

````
---
### Useful links:
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch
* Some more info on switch statement: https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/