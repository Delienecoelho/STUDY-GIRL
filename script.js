const formulario = document.getElementById("form-estudo");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
console.log("Formulário enviado")
    window.location.href = "index2.html"
    

})