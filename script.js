const IVA = 0.21;

document.getElementById("formulario-entradas").addEventListener("submit", function(event) {
    event.preventDefault();

    const pelicula = document.getElementById("pelicula").value;
    const selectTipo = document.getElementById("tipo");
    const tipoPrecio = selectTipo.value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (!pelicula || !tipoPrecio || isNaN(cantidad) || cantidad < 1) {
        alert("Por favor, rellena todos los campos correctamente.");
        return;
    }

    const precioUnitario = parseFloat(tipoPrecio);
    const subtotal = precioUnitario * cantidad;
    const importeIVA = subtotal * IVA;
    const total = subtotal + importeIVA;
    const textoTipo = selectTipo.options[selectTipo.selectedIndex].text;

    document.getElementById("texto-pelicula").textContent  = "Película: " + pelicula;
    document.getElementById("texto-tipo").textContent      = "Tipo: " + textoTipo;
    document.getElementById("texto-cantidad").textContent  = "Entradas: " + cantidad;
    document.getElementById("texto-subtotal").textContent  = "Subtotal (sin IVA): " + subtotal.toFixed(2) + "€";
    document.getElementById("texto-iva").textContent       = "IVA (21%): " + importeIVA.toFixed(2) + "€";
    document.getElementById("texto-total").textContent     = "TOTAL: " + total.toFixed(2) + "€";

    document.getElementById("resultado").classList.remove("oculto");
});
