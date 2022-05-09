/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const btnRun = document.getElementById('run');
    let date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const targetday = 13;
    let input = document.getElementById('year');
    btnRun.addEventListener('click', calc)


    function calc() {


        let input2 = input.value;


        let monthsWithf13 = [];

        date.setFullYear(input2);

        date.setDate(targetday);
        for (month = 0; month < months.length; month++) {

            date.setMonth(month)

            if (date.getDay() === 5) { /* Fifth day is always a friday, days are displayed as numbers */
                monthsWithf13.push(months[month])
            }
        }

        let result = "In " + input2 + " : " ;

        for (i = 0; i < monthsWithf13.length; i++) {

            result += monthsWithf13[i] + ",";
        }
        if (monthsWithf13.length > 1) { /* just for grammar */
            result += " have a friday the 13th";
        }else{
            result += " has a friday the 13th";
        }
        alert(result);
    }

})();
