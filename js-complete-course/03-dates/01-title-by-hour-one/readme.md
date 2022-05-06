## 01-title-by-hour-one

---
### Objective
change the content of the tag by Hello (if it's before 18h), or by Good evening.
* HTML DOM Element innerHTML
  * Link: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
    * Example:
````
document.getElementById("demo").innerHTML = "I have changed!";
````
---
### Solution:
````
 let date = new Date();
    let hour = date.getHours();
    if (hour < 18){
        document.getElementById("target").innerHTML = "Hello";
    } else {
        document.getElementById("target").innerHTML = "Good evening";
    }
````
---
### Useful links:
* https://write.corbpie.com/change-background-and-text-based-on-time-with-javascript/
* https://www.computerhope.com/javascript/time-message.htm