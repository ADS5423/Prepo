function checkPassword() {
    var password = document.getElementById("password").value;

    if (password === "$~$") {
        document.getElementById("content").style.display = "block";
        document.querySelector('.container').style.display = "none"; // Ocultar el formulario
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}
