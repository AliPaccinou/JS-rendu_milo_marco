const bouton = document.querySelector("#bouton")
const liste = document.querySelectorAll("#laliste li")

bouton.addEventListener("click" , function() {
    liste.forEach(function(element) {
        element.classList.toggle("classe");
    })
})