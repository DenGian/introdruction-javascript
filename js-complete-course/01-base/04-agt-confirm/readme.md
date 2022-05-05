## 04-agt-confirm

---
### Objective:
Ask three questions to the user: his/her Age, Gender, and the Town where he/she lives. Display the collected responses in a dialog box and ask to confirm. If not confirmed, re-run the process.
* code needed:
````
(function info() {
    let age = window.prompt("some text");
    let gender = window.prompt("some text");
    let town = window.prompt("some text");

    let submit = confirm("Is the following information correct?" + "age: " + age + " gender: " + gender + " town: " + town);

    if (submit === false){
        info();
    }
})();
````
__Note: No "else function" was needed.__

---
### Solution:
````
(function info() {

    let age = window.prompt("How old are you?");
    let gender = window.prompt("Are you a boy, a girl or other?");
    let town = window.prompt("Where do you live?");

    let submit = confirm("Is the following information correct?" + "age: " + age + " gender: " + gender + " town: " + town);

    if (submit === false){
        info();
    }
})();
````
### Useful link:
* https://stackoverflow.com/questions/37823313/javascript-prompt-and-submit
* 

