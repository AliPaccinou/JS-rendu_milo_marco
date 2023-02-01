let num = 9;

function retournerlechiffre(num) {
    var retournerlechiffre = document.querySelector(`:nth-child(${num})`);
    console.log(retournerlechiffre);
    return retournerlechiffre;
}
console.log(num)
