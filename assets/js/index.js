import "../../node_modules/jquery/dist/jquery.slim.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

$(function () {

    $("#alertBtn").on("click", function () {
        alert("Mensaje Enviado con exito", "success");

    });

    const alert = (message, type) => {
        const alertHtml =
        `<div class="alert alert-$(type)" role="alert">
        ${message}
        </div>`;
        $("#alertContainer").append(alertHtml);
    }

});

$(function () {
    $("p").handler(function () {
        $(this).fadeOut(2000);

    });
});
let alertContainer = document.getElementById("alertContainer");
