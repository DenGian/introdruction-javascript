## 03-age-by-select

---
### Objective
On the click to the button, get the birthdate of the visitor and display his/her age.

---
### Solution
````
let btnrun = document.getElementById("run");

    btnrun.addEventListener('click',age);
    function age() {
        let d1 = document.getElementById('dob-day').value;
        let m1 = document.getElementById('dob-month').value;
        let y1 = document.getElementById('dob-year').value;

        let date = new Date();
        let d2 = date.getDate();
        let m2 = 1 + date.getMonth();
        let y2 = date.getFullYear();
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if(d1 > d2){
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
        if(m1 > m2){
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        let d = d2 - d1; /* to calc days aswell */
        let m = m2 - m1; /* to calc months aswell */
        let y = y2 - y1;

        alert('Your Age is '+ y +' Years '+ m + ' Months ' + d + ' Days ');

    }
````
---
### Useful Link
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=nl
* https://www.w3schools.com/jsref/jsref_obj_date.asp