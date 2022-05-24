function mostrarValor() {
    var cantidadTickets = parseInt(document.getElementById("cantidad").value);
    var cod = document.getElementById("descuento").value;
    const pagar = document.getElementById("infoPagar");
    const btnResumen = document.querySelector(".btnResumen");
 
    function ButtonResumen() {
        btnResumen.addEventListener("click", (e) => {
            var entradas = parseInt(cantidadTickets * 200);
            if (cod == "0") {
                pagar.innerHTML = "Total a pagar: $" + (entradas - (entradas * 0.80));
            }
            if (cod == "1") {
                pagar.innerHTML = "Total a pagar: $" + (entradas - (entradas * 0.50));
            }
            if (cod == "2") {
                pagar.innerHTML = "Total a pagar: $" + (entradas - (entradas * 0.15));
            }
        });
    }
     

    if (isNaN(cantidadTickets)) {
        cantidadTickets = 1;
        const cantidad = document.getElementById("cantidad");
        cantidad.value = "1";
        ButtonResumen();
    } else {
        ButtonResumen();
    }
}

function limpiarFormulario() {
    const btnBorrar = document.querySelector(".btnBorrar");
    btnBorrar.addEventListener("click", (e) => {
        document.getElementById("formTickets").reset();
        const pagar = document.getElementById("infoPagar");
        pagar.innerHTML = "Total a pagar: $"
    });
}