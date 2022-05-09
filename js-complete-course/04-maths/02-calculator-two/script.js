/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

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
