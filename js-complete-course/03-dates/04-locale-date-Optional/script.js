/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    const date = new Date;
    const writing = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0'); /* Now there is a 0 if ther is only 1 number*/
    let currentDate = date.toLocaleString('en-US', writing);
    let currentDate2 = currentDate.replace(/,/g, '') /* So there is no "," */

    document.getElementById("target").innerText = currentDate2 + ", " + hours + "h" + minutes;

})();
