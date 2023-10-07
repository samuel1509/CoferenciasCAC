//regsitro oradores
function registrar() {
  var nombre = document.getElementById("nombre").ariaValueMax;
  var apellido = document.getElementById("apellido").ariaValueMax;
  var tema = document.getElementById("tema").ariaValueMax;
  var descripcion = document.getElementById("descripcion").ariaValueMax;

  if (nombre != "" && apellido != "" && descripcion != "") {
    alert("Registro existoso. Bienvenido" + nombre + " " + apellido + "!!");
  }
  else{
    alert("Debe completar los campos obligatorios");
  }
}
