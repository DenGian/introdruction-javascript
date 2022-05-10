## 03-walk-three

---
### Objective
When you click the button, display on the console, one after the other, the name of each person in the array people. Use the forEach method.

---
### Solution
````
(function() {
    run.addEventListener('click',loop);
    var people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];
    function loop() {
        people.forEach(people => console.log(`${people.firstname}`));
    }

})();
````
---
### Useful links
* Loop: https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/#:~:text=Loops%20are%20used%20in%20JavaScript,the%20defined%20condition%20returns%20false%20.
* https://www.programiz.com/javascript/forEach