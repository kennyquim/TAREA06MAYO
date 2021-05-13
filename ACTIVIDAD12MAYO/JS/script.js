function registrar() {
  let Nombres = document.getElementById("user").value;
  let Apellidos = document.getElementById("userAp").value;
  let Edad = document.getElementById("age").value;
  let Correo_electronico = document.getElementById("email").value;
  
  Edad = parseInt(Edad)

  if (Edad > 17) {
    alert(
      `hola ${Nombres} ${Apellidos} has aplicando correctamente te contactaremos en ${Correo_electronico}`
    );
  }
  if (Edad < 18) {
    alert(`hola ${Nombres} ${Apellidos} no cumples con la edad requerida`);
  }
}
