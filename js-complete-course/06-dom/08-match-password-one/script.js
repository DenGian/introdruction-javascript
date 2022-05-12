/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click',comparePasswords)
    console.log('click')
    function comparePasswords(){
        console.log('compare pw function start')
        let pass1 = document.getElementById('pass-one').value;
        let pass2 = document.getElementById('pass-two').value;
        console.log('pass1:'+pass1)
        if(pass1===pass2){
            alert('password input correct!')
        } else {
            document.getElementById('pass-two').style.border = 'solid red';
            document.getElementById('pass-one').style.border = 'solid red';
        }
    }



})();
