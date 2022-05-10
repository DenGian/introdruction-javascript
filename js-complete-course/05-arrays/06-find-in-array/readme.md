## 06-find-in-array

---
### Objective
When you click the button, display in the console the mail adress of the person in the array people whose lastname is "Dupont" and firstname is "Jean". Then display his index in this array.

#### Use of Comparison operators
* Comparison operators are used in logical statements to determine equality or difference between variables or values.
  * Example
````
==	Equal to: true if the operands are equal	                                                        5==5; //true
!=	Not equal to: true if the operands are not equal	                                                5!=5; //false
===	Strict equal to: true if the operands are equal and of the same type	                            5==='5'; //false
!==	Strict not equal to: true if the operands are equal but of different type or not equal at all	    5!=='5'; //true
>	Greater than: true if the left operand is greater than the right operand	                        3>2; //true
>=	Greater than or equal to: true if the left operand is greater than or equal to the right operand	3>=3; //true
<	Less than: true if the left operand is less than the right operand	                                3<2; //false
<=	Less than or equal to: true if the left operand is less than or equal to the right operand	        2<=2; //true
````
#### Useful link: https://www.programiz.com/javascript/comparison-logical

#### Use of Array.prototype.indexOf()
* The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  * Example
````
const array = [2, 9, 9];
array.indexOf(2);       // 0
array.indexOf(7);       // -1
array.indexOf(9, 2);    // 2
array.indexOf(2, -1);   // -1
array.indexOf(2, -3);   // 0
````
* Syntax
````
indexOf(searchElement)
indexOf(searchElement, fromIndex)
````
##### Useful link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?retiredLocale=nl

---
### Solution
````
(function() {

    var people = [
        {
            firstname: "Bradford",
            lastname: "Coldbath",
            email: "bcoldbath0@wired.com",
        },
        {
            firstname: "Nadiya",
            lastname: "Stendell",
            email: "nstendell1@nsw.gov.au",
        },
        {
            firstname: "Auroora",
            lastname: "Stapford",
            email: "astapford2@wsj.com",
        },
        {
            firstname: "Berkley",
            lastname: "McKall",
            email: "bmckall3@about.me",
        },
        {
            firstname: "Wolf",
            lastname: "McCurley",
            email: "wmccurley4@yale.edu",
        },
        {
            firstname: "Jorrie",
            lastname: "Canedo",
            email: "jcanedo5@engadget.com",
        },
        {
            firstname: "Bethanne",
            lastname: "Ackred",
            email: "backred6@imgur.com",
        },
        {
            firstname: "Zorah",
            lastname: "Whild",
            email: "zwhild7@sogou.com",
        },
        {
            firstname: "Jean",
            lastname: "Dupont",
            email: "jdupont@elpais.com",
        },
        {
            firstname: "Zulema",
            lastname: "Ericsson",
            email: "zericsson9@ed.gov",
        },
        {
            firstname: "Brady",
            lastname: "Scrannage",
            email: "bscrannagea@google.fr",
        },
        {
            firstname: "Isidore",
            lastname: "Korf",
            email: "ikorfb@google.com",
        },
        {
            firstname: "Bartholomew",
            lastname: "Stockbridge",
            email: "bstockbridgec@is.gd",
        },
        {
            firstname: "Laney",
            lastname: "O' Mara",
            email: "lomarad@forbes.com",
        },
        {
            firstname: "Gabe",
            lastname: "Keatch",
            email: "gkeatche@google.fr",
        },
    ];

    document.getElementById("run").addEventListener("click", () => {
        let target = people.find(({firstname , lastname}) => firstname === 'Jean' && lastname === 'Dupont');
        console.log(`Email : ${target.email} , Index: ${people.indexOf(target)}`);
    });

})();
````
---
### Useful links
* https://www.w3schools.com/jsref/jsref_indexof.asp
* https://www.w3schools.com/js/js_operators.asp