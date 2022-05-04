# READ IT
## EX 02
* Open index.html in your browser. What is the difference between this and the previous example?
* Do you notice a difference between the 2 document.write lines?
* Look at the 'Template literals' documentation
---
### Differences previous example:
* Now the code links to the js file, which is written in the body tag.
#### First code (in head tag):
* document.write(`<h1>Top 10 Greatest Movies of All Time</h1>`);
#### Second code (linked with: script  src="js/script.js"> /script in body): 
* In the second code there was a mathematical equation. 
  * In here there was a constant (20), because of this the next function was possible:
    * const amount = 20;
    * document.write(`<h2>The first ${amount / 2} movies</h2>`);
---
### Differences between the 2 document.write( )codes?
* The first code used the constant like:
  * " + amount + " 
* The second code used the constant in a division like:
  * ${amount / 2}
---
