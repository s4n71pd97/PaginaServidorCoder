var a_msj_wsp = document.getElementById('WSP')

// a_msj_wsp = <a id="enviar" href="">Enviar Mensaje por Whatsapp</a>
console.log(a_msj_wsp);

function mensaje_wsp(){
  var nombre = document.getElementById("Nombre")
  // nombre =  <input id="nombreform" type="text" name="name" class="form-control" id="name" placeholder="Nombre" value="Nombre">
  var mensaje = document.getElementById("Consulta")

  //console.log(nombre.value)

  var mensaje_final


  mensaje_final ="Hola!,%20Mi%20Nombre%20es:%20" + nombre.value +",%20"
  mensaje_final = mensaje_final + "%20mensaje%20:%20" + mensaje.value

  console.log(mensaje_final);
  var mensaje = "https://api.whatsapp.com/send?phone=+5493512232722&text="+mensaje_final 
  //mensaje = https://api.whatsapp.com/send?phone=+5491155124846&text=Hola!,%20Mi%20Nombre%20es:%20Gisele,%20%20Mi%20Mail%20es:%20giselemgonzalez@gmail.com,%20El%20Motivo%20de%20mi%20contacto%20es%20Hola,%20%20mensaje%20:%20este%20es%20mi%20msj
  //Esto%20es%20una%20prueba
  a_msj_wsp.href = mensaje  
}

a_msj_wsp.addEventListener('click', mensaje_wsp)