## 03-change-bcg-three

---
### Objective
When you click the button, generate a random color code and use that color as the background for the page.
* Code needed:
````
    const prefix = ("#")
    function setBg() {
        const randomColor = Math.floor(Math.random()*randomnumber).toString(16);
        document.body.style.backgroundColor = prefix + randomColor;
    }
    run.addEventListener("click", setBg);
````
---
### Solution
````
    const prefix = ("#")
    function setBg() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = prefix + randomColor;
    }
    run.addEventListener("click", setBg);
````
---
### Useful links:
* https://www.youtube.com/watch?v=xnUrOjV6t6g
* https://www.codegrepper.com/code-examples/javascript/random+color+on+click+js