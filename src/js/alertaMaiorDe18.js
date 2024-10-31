document.addEventListener("DOMContentLoaded", function () {
    var idadeConfirmada = sessionStorage.getItem('idadeConfirmada');

    if (!idadeConfirmada) {
        var modal = document.getElementById("avisoModal");
        modal.style.display = "block";

        document.getElementById("confirmar").onclick = function () {
            modal.style.display = "none";
            sessionStorage.setItem('idadeConfirmada', 'true'); 
        }
    }
});