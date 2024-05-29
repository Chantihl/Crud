// variables globales
let campoTexto = document.querySelector("#campo-texto");
let btnCrear = document.querySelector("#btn-crear");
let table = document.querySelector("#tabla-tareas > tbody");

// agregar evento al boton
btnCrear.addEventListener("click", ()=>{
  //alert("Diste click" + campoTexto.value);
  crearTarea();
});
// agregar evento al campo de texto
campoTexto.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        crearTarea();
    }
});



let con = 1;
// función para crear tarea
function crearTarea(){
    //verificar si se escribio en el campo de texto
    if(campoTexto.value == ""){
        alert("Debes escribir una tarea");
    }else{
        //alert("Todo melo");
        let textoTarea = campoTexto.value;
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${con++}</td>
            <td>${textoTarea}</td>
            <td>
                <button onclick="editarTarea();" class="btn btn-warning" type="button">✍</button>
                <button onclick="eliminarTarea();" class="btn btn-danger" type="button">🗑</button>
            </td>
        `;

        table.appendChild(fila);
        campoTexto.value = "";
    }
}


// función para eliminar una tarea

function eliminarTarea(){
       let confirmar = confirm("¿Desea eliminar esta tarea?");
       //console.log(event.target);
       if(confirmar == true){
        let btn = event.target; // devuelve la etiqueta que genera el evento
        btn.parentElement.parentElement.remove(); // seleccióna la etiqueta padre y la elimina
       }
}

// función para editar tarea

function editarTarea(){
    let confirmar = confirm("¿Desea editar la tarea?");
    if(confirmar == true){
        let btn = event,target;
        btn.parentElement.parentElement.createElement("input");
        console.log()

    }
}