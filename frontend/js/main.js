var modal = document.getElementById("miModal");
var modalCampos = document.getElementById("modalCampos");
var modalObs = document.getElementById("modalObs");
var cmbProspectos = document.getElementById("cmbProspectos");
var btnAut = document.getElementById("btnAut");
var btnRech = document.getElementById("btnRech");
var divContainer = document.getElementById("listado");
var divObservaciones = document.getElementById("observaciones");
var msjObservaciones = document.getElementById("msjobs");
var txtNombre = "";
var txtpPaellido = "";
var txtpSaellido = "";
var txtCalle = "";
var txtNumero = "";
var txtColonia = 0;
var txtCodigo = "";
var txtTelefono = "";
var txtRfc = "";
var respuesta;
var folio;
var txtEstatus;
const ruta= "http://localhost:4000/api/prospectos/";

async function crearTabla(opcion) {

  var prospectos;

  if (opcion == 1){
    console.log('entra opcion 1');
    prospectos = await obtenerProspectos();
  } else if (opcion ==2){
    
    console.log('entra opcion 2');
    prospectos = await obtenerProspectosByFolio(folio);
    console.log('prospectos[0].folio = '+prospectos[0].Folio)
    console.log('prospectos[0].estatus = '+prospectos[0].Estatus)



    txtEstatus = prospectos[0].Estatus;
    txtEstatus = txtEstatus.trim();
    if (txtEstatus == "Rechazado"){
      var observacion = await obtenerObservacionByFolio(folio);
      msjObservaciones.innerHTML = observacion[0].observacion;
      divObservaciones.style.display = 'block';
    }
  }


  cmbProspectos.innerHTML = null;
  option = document.createElement("option");
  option.text = "0";
  cmbProspectos.add(option);
  // Se obtienen los header.
  var col = [];
  for (var i = 0; i < prospectos.length; i++) {
      for (var key in prospectos[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
          }
      }
    option = document.createElement("option");
    option.text = prospectos[i].Folio;
    cmbProspectos.add(option);
  }

  // Se crea tabla dinamica.
  var table = document.createElement("table");
  table.setAttribute("class", "table table-hover");

  var tr = table.insertRow(-1);

  for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");
      th.innerHTML = col[i];
      tr.appendChild(th);
  }

  // Se agrega Json a los rows.
  for (var i = 0; i < prospectos.length; i++) {

      tr = table.insertRow(-1);

      for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = prospectos[i][col[j]];
      }
  }
 
  //Se agrega tabla y botones al container.
  divContainer.appendChild(table);
  divContainer.appendChild(btnAut);
  divContainer.appendChild(btnRech);

  divContainer.appendChild(document.createElement("br"));
}

function onDOMLoaded(){
  render(window.location.hash);

}

//Handler para navegacion como SPA.
window.onhashchange = function(){
  // Se ejecuta para cargar la nueva "pagina".
  render(window.location.hash);
};


//render para cargar paginas.
async function render(hashKey) {

  //Se esconden los divs.
  let pages = document.querySelectorAll(".page");
  for (let i = 0; i < pages.length; ++i) {
      pages[i].style.display = 'none';
  }

  let lis_nav = document.querySelectorAll(".nav-link");
  for (let i = 0; i < lis_nav.length; ++i) {
      lis_nav[i].classList.remove("active");
  }
  //Cada pagina requiere esconder o mostrar cierto contenido..
  switch(hashKey){
      case "":
          pages[0].style.display = 'block';
          document.getElementById("btnHome").classList.add("active");
          console.log('entra home');
          break;
      case "#/home":
          pages[0].style.display = 'block';
          document.getElementById("btnHome").classList.add("active");
          console.log('entra home');
          break;
      case "#/capturar":
          pages[1].style.display = 'block';
          document.getElementById("btnCapturar").classList.add("active");
          console.log('entra capturar');
          break;
      case "#/lista":
          divContainer.innerHTML = "";
          await crearTabla(1);
          var para = document.createElement("P");
          para.innerHTML = "Visualizar Prospecto con Folio:";   
          divContainer.appendChild(para);
          divContainer.appendChild(cmbProspectos);
          cmbProspectos.style.display = 'block';
          document.getElementById("txtareaObs").value = "";
          pages[2].style.display = 'block';
          btnAut.style.display = 'none';
          btnRech.style.display = 'none';
          divObservaciones.style.display = 'none';
          document.getElementById("btnListar").classList.add("active");
          console.log('entra lista');
          break;
      case "#/evaluar":
          divContainer.innerHTML = "";
          divObservaciones.style.display = 'none';
          console.log('entra evaluar');

          await crearTabla(2);

          console.log('txtEstatus en evaluar: '+txtEstatus);
          if (txtEstatus == "Enviado"){
            btnAut.style.display = 'block';
            btnRech.style.display = 'block';
          }

          cmbProspectos.style.display = 'none';

          pages[2].style.display = 'block';
          document.getElementById("btnEvaluar").classList.add("active");
          break;
      default:
          pages[0].style.display = 'block';
          document.getElementById("btnHome").classList.add("active");
          console.log('entra home');
  }

}

//Eventos.
btnSalir.addEventListener('click', ()=> {
  modal.style.display = "block";

})

btnSi.addEventListener('click', ()=> {
  limpiarCampos();
  modal.style.display = "none";

  window.location.hash = "#/home"
  render(window.location.hash);
})

btnNo.addEventListener('click', ()=> {
  modal.style.display = "none";
})

btnEnviar.addEventListener('click', ()=> {

  var fileInput = document.getElementById("docs");


  obtenerCampos();
  crearProspecto();
  if(txtNombre == "" || txtpPaellido == "" || txtCalle == "" || txtNumero == "" || txtColonia == "" || txtCodigo == 0 || txtTelefono == "" || txtRfc == ""){
    modalCampos.style.display = "block";
  }else{
    alert ('Se envió');
    window.location.hash = "#/lista"
    render(window.location.hash);
  }
  limpiarCampos();
  subirDocs(fileInput);
})

btnOK.addEventListener('click', ()=> {
  modalCampos.style.display = "none";
})

btnCerrar.addEventListener('click', ()=> {
  miModal.style.display = "none";
})

btnCerrarCampos.addEventListener('click', ()=> {
  modalCampos.style.display = "none";
})

btnCerrarObs.addEventListener('click', ()=> {
  modalObs.style.display = "none";
})

btnYES.addEventListener('click', ()=> {

  var txtObs = document.getElementById("txtareaObs").value;
  console.log('txtObs: '+txtObs);
  estatus = "Rechazado";
  evaluarProspecto(estatus);
  crearObservacion(folio,txtObs);
  modalObs.style.display = "none";
  alert('El prospecto ha sido Rechazado con exito!');
  btnAut.style.display = "none";
  btnRech.style.display = "none";
})

btnAut.addEventListener('click', ()=> {
  console.log('btnaut');
  estatus = "Autorizado";
  var respactualiza = evaluarProspecto(estatus);
  btnAut.style.display = "none";
  btnRech.style.display = "none";
  alert('El prospecto ha sido Autorizado con exito!');
})

btnRech.addEventListener('click', ()=> {
  console.log('btnrech');
  modalObs.style.display = "block";
})

document.getElementById('cmbProspectos').addEventListener('change', function() {
  folio = this.value;
  window.location.hash = "#/evaluar"
  scroll(0,0)
});

//Funcion para no dejar residuos.
function limpiarCampos(){
  document.getElementById("txtnombre").value = "";
  document.getElementById("txtpapellido").value = "";
  document.getElementById("txtsapellido").value = "";
  document.getElementById("txtcalle").value = "";
  document.getElementById("txtnumero").value = "";
  document.getElementById("txtcolonia").value = "";
  document.getElementById("txtcodigop").value = 0;
  document.getElementById("txttelefono").value = "";
  document.getElementById("txtrfc").value = "";
  txtNombre = "";
  txtpPaellido ="";
  txtCalle = "";
  txtNumero = "";
  txtColonia = "";
  txtCodigo = 0;
  txtTelefono = "";
  txtRfc = "";
}

//Peticiones
function obtenerCampos(){
  txtNombre = document.getElementById("txtnombre").value;
  txtpPaellido = document.getElementById("txtpapellido").value;
  txtpSaellido = document.getElementById("txtsapellido").value;
  txtCalle = document.getElementById("txtcalle").value;
  txtNumero = document.getElementById("txtnumero").value;
  txtColonia = document.getElementById("txtcolonia").value;
  txtCodigo = document.getElementById("txtcodigop").value;
  txtTelefono = document.getElementById("txttelefono").value;
  txtRfc = document.getElementById("txtrfc").value;
}


function crearProspecto(){

  
  const datos = JSON.stringify({
    "nombre": txtNombre,
    "primerapellido": txtpPaellido,
    "segundoapellido": txtpSaellido,
    "calle": txtCalle,
    "numero": txtNumero,
    "colonia": txtColonia,
    "codigopostal": txtCodigo,
    "telefono": txtTelefono,
    "rfc": txtRfc
  });

  console.log(datos);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: datos,
    redirect: 'follow',
  };

  fetch("http://localhost:4000/api/prospectos/", requestOptions)
    .then(response => response.text())
    .then(result => {
      var x = JSON.parse(result);
      console.log(result);
      var resp  = x.message;
      console.log(resp);
    })
    .catch(error => console.log('error', error));
}

function crearObservacion(folioobs,obs){

  const datos = JSON.stringify({
    "folio": folioobs,
    "observacion": obs
  });

  console.log(datos);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: datos,
    redirect: 'follow',
  };

  fetch("http://localhost:4000/api/prospectos/observacion/", requestOptions)
    .then(response => response.text())
    .then(result => {
      var x = JSON.parse(result);
      console.log(result);
      var resp  = x.message;
      console.log(resp);
    })
    .catch(error => console.log('error', error));
}

async function obtenerObservacionByFolio(folio){

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
    let response = await fetch(ruta+"observacion/"+folio, requestOptions);

    if (response.ok) { 
      let json = await response.json();
      console.log(json);
      return json;
    } else {
      alert("HTTP-Error: " + response.status);
    }
}

function subirDocs(fileInput){

  var files = fileInput.files;
  var file;

  var formdata = new FormData();
  
  
  for (var i = 0; i < files.length; i++) {

    file = files[i];
    formdata.append("photos", files[i]);
    console.log(files[i]);
  }
  
  console.log(formdata);

  var requestOptions = {
    method: 'POST',
    body: formdata
  };

  fetch("http://localhost:4000/images/upload", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(error => console.log('error', error));
}

async function obtenerProspectos(){
  var x;

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
    let response = await fetch("http://localhost:4000/api/prospectos/", requestOptions);

    if (response.ok) {
      let json = await response.json();
      console.log(json);
      return json;
    } else {
      alert("HTTP-Error: " + response.status);
    }
}

async function obtenerProspectosByFolio(folio){

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
    let response = await fetch(ruta+folio, requestOptions);

    if (response.ok) { 
      let json = await response.json();
      console.log(json);
      return json;
    } else {
      alert("HTTP-Error: " + response.status);
    }
}

async function evaluarProspecto(estatus){


  const datos = JSON.stringify({
    "estatus": estatus
  });

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: datos,
    redirect: 'follow',
  };

  let response = await fetch(ruta+folio, requestOptions)
    .then(response => response.text())
    .then(result => {
      var x = JSON.parse(result);
      console.log(result);
      var resp  = x.message;
      console.log(resp);
    })
    .catch(error => console.log('error', error));

}