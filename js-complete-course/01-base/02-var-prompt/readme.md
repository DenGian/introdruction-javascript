## 02-var-prompt

---
### Objective:
Ask the name of the user, and display in the dialog box the following welcome message : Hello, [name] !.
* Code needed:
````
var name = window. prompt("Enter your name: "); 
alert("some text" + name); 
````
---
### What is a prompt box?
* explanation:
  * A prompt box is often used if you want the user to input a value before entering a page.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
If the user clicks "OK" the box returns the input value. 
If the user clicks "Cancel" the box returns null.
#### Source: https://www.w3schools.com/js/js_popup.asp

---
### Solution:
````
var name = window. prompt("Enter your name: ");
alert("Hello," + name);
````
---
### Useful links:
* https://www.w3schools.com/jsref/met_win_prompt.asp
* https://www.mikedane.com/web-development/javascript/getting-user-input/