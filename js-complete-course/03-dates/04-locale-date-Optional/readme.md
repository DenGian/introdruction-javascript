## 04-locale-date-Optional

---
### Objective
Change the content of the indicated tag by the date of today, in English (ex : Sunday 28 October 2018, 23h32).
### __Note__
#### Use of "numerical" and "long"
* Useful link:
  * https://devhints.io/wip/intl-datetime
#### Use of Date toLocaleString()
* Useful link:
  * https://www.w3schools.com/jsref/jsref_tolocalestring.asp

---
### Solution
````
const date = new Date;
    const writing = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    let currentDate = date.toLocaleString('en-US', writing);
    let currentDate2 = currentDate.replace(/,/g, '')

    document.getElementById("target").innerText = currentDate2 + ", " + hours + "h" + minutes;
````
---
### Useful Link
* PadStart: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
* https://www.codegrepper.com/code-examples/javascript/javascript+get+current+date