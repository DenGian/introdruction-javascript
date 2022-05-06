## 01-change-bcg-one

---
### important codes:
* getElementById()
  * Example: 
````
document.getElementById("some id");
````
Link: https://www.w3schools.com/jsref/met_document_getelementbyid.asp

---
* onclick Event
  * Example:
````
<button onclick="myFunction()">Click me</button>
````
Link: https://www.w3schools.com/jsref/event_onclick.asp

---
* addEventListener()
  * Example:
````
document.getElementById("myBtn").addEventListener("click", displayDate);
````
Link: https://www.w3schools.com/js/js_htmldom_eventlistener.asp

---
### Objective
For each button, when clicked change the background color of the page to the one indicated.
* colors:
  * Red
  * Green
  * Yellow
  * Blue
* Code needed:
````
    let btnid = document.getElementById("id");
    let btnid = document.getElementById("id");
    let btnid = document.getElementById("id");
    let btnid = document.getElementById("id");

    btnid.addEventListener("click", bgtocolor);
    btnid.addEventListener("click", bgtocolor);
    btnid.addEventListener("click", bgtocolor);
    btnid.addEventListener("click", bgtocolor);

    function bgtocolor(){
        document.body.style.backgroundColor = "color";
    }
    function bgtocolor(){
        document.body.style.backgroundColor = "color";
    }
    function bgtocolor(){
        document.body.style.backgroundColor = "color";
    }
    function bgtocolor(){
        document.body.style.backgroundColor = "color";
    }
````
---
### Solution:
````
  let btnred = document.getElementById("red");
    let btngreen = document.getElementById("green");
    let btnyellow = document.getElementById("yellow");
    let btnblue = document.getElementById("blue");

    btnred.addEventListener("click", bgtored);
    btngreen.addEventListener("click", bgtogreen);
    btnyellow.addEventListener("click", bgtoyellow);
    btnblue.addEventListener("click", bgtoblue);

    function bgtored(){
        document.body.style.backgroundColor = "red";
    }
    function bgtogreen(){
        document.body.style.backgroundColor = "green";
    }
    function bgtoyellow(){
        document.body.style.backgroundColor = "yellow";
    }
    function bgtoblue(){
        document.body.style.backgroundColor = "blue";
    }
````
---
### Useful links:
* https://stackoverflow.com/questions/31089414/javascript-change-background-color-on-click
* https://bobbyhadz.com/blog/javascript-change-background-color-on-click