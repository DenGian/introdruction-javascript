## 03-fizzbuzz

---
### Objective
In the console, for each numbers between 1 and 100 : show "fizz" if the number is a multiple of 3, "buzz" if it's a multiple of 5, "fizzbuzz" if it's both, or simply the number if it's none of these.
### Note: 
* Use of loop required
  * example:
````
function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${howMany(musicTypes)} option(s).`);
});
````
* link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
---
### Solution
````
(function() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzbuzz()
        }
        else if (i % 3 === 0) {
            fizz()
        }
        else if (i % 5 === 0) {
            buzz()
        }
        else {
            console.log(i);
        }
    }

    function fizz() {
        console.log("fizz")
    }
    function buzz() {
        console.log("buzz")
    }
    function fizzbuzz() {
        console.log("fizzbuzz")
    }

})();
````
---
### Useful links:
* https://www.w3schools.com/js/js_loop_for.asp
* https://www.programiz.com/javascript/for-loop
