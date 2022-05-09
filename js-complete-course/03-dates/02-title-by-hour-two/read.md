## 02-title-by-hour-two

---
### Objective
Change the content of the tag by Hello (if it's before 17h30), or by Good evening.

---
Solution
````
 let date = new Date();
   let hour = date.getHours();
   let minute = date.getMinutes();

   if (hour < 17) {
      document.getElementById("target").innerHTML = "Hello";
   } else if (hour === 17 && minute<= 30){
      document.getElementById("target").innerHTML = "Hello";
   }
   else {
      document.getElementById("target").innerHTML = "Good evening";
   }
````
---
### Useful link:
* https://www.w3schools.com/js/js_if_else.asp
