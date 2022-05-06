## 02-change-bcg-two

---
### Objective
When you click the button, get the value of the input and use it as the background color for the page.
* Code needed:
````
 let bg = document.getElementById("some id");
    let btnrun = document.getElementById("some id");

    btnrun.addEventListener('click',colorchange);

    function colorchange(){
        document.body.style.backgroundColor = bg.value;
````
---
### Solution:
````
let bg = document.getElementById("color");
let btnrun = document.getElementById("run");

    btnrun.addEventListener('click',colorchange);

    function colorchange(){
        document.body.style.backgroundColor = bg.value;
````
---
### Useful link:
* https://bobbyhadz.com/blog/javascript-change-background-color-on-click
