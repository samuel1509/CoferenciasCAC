//registro oradores
function registrar() {
  var nombre = document.getElementById("nombre_fo").value;
  var apellido = document.getElementById("apellido_fo").value;
  var tema = document.getElementById("tema").ariaValueMax;

  if (nombre != "" && apellido != "" && descripcion != "") {
    alert("Registro existoso. Bienvenido" + nombre + " " + apellido + "!!");
  } else {
    alert("Debe completar los campos obligatorios");
  }
}

//limpiar fomularios
function limpiarForm(formId) {
  document.getElementById("total").innerHTML = "0";

  var formulario = document.getElementById(formId);
  if (formulario) {
    formulario.reset();
  }
}

//total de comprar tickets
function calcularTotal() {
  const precio = 1000;

  let cantidad = document.getElementById("cantidad").value;
  let descuento = document.getElementById("descuento").value;

  if (Number.isNaN(cantidad)) {
    console.log("no es numero");
  } else {
    if (cantidad >= 1) {
      console.log(cantidad);
      let total = cantidad * precio;
      console.log(total);
      document.getElementById("total").innerHTML =
        total - (total * descuento) / 100;
    } else {
      document.getElementById("total").innerHTML =
        "Debe ingresar cantidad mayor o igual a 1";
    }
  }
}

function comprarTicket() {
  var nombre = document.getElementById("nombre_tk").value;
  var apellido = document.getElementById("apellido_tk").value;
  var cantidad = document.getElementById("cantidad").value;
  var total = document.getElementById("total");

  if (nombre != "" && apellido != "") {
    alert(
      nombre +
        " " +
        apellido +
        " compró " +
        cantidad +
        "de ticket(s) a $" +
        total.innerHTML
    );
  } else {
    alert("Debe completar los campos obligatorios");
  }
}
