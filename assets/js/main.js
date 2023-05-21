/* TARJETA DE PERSONA */
/* const sectionList = document.getElementById("box-b4")
const card = document.createElement("h2")
card.innerText = "hola"
card.className = "cardPerson" */
/* sectionList.appendChild(card) */



/* CONTROLAR LOS INPUTS */

/* const inpust = ["nombre" , "apellido" , "rut" , "cargo"] 

inpust.forEach((id)=>{
    const element = document.getElementById(id)
    element.addEventListener("input",handleinput)
})

let tarea = {}

function handleinput(event){
    const {value, name } = event.target
    tarea = {
        ...tarea,
        [name]: value
    }
    console.log(tarea)  
} */

/* LIMITACION DE CARACTERES */
/* NO RESET PAGINA */
/* const formSP = document.getElementById("boxSF")
formSP.addEventListener('submit', validaitor) */

const btnRest = document.getElementById("submit")
btnRest.addEventListener("click", create)

const tareas = []


function leerFormulario() {
    const nameinput = document.getElementById("nombre")
    const lastnameinput = document.getElementById("apellido")
    const rutinput = document.getElementById("rut")
    const cargoinput = document.getElementById("cargo")

    const tarea = {
        nombre: nameinput.value,
        apellido: lastnameinput.value,
        rut: rutinput.value,
        cargo: cargoinput.value
    }
    tareas.push(tarea)
    return (tarea)
}



function create(event) {

    event.preventDefault()
    const tarea = leerFormulario()
    createCard(tarea)

    limpiarForm()

    guardardatosLS()







    /*    if(nameinput.value === "" || lastnameinput.value === "" || rutinput.value === ""  || cargoinput.value === ""){
            alert('todos los campos son obligatorios.')
            return
        } */


}





function limpiarForm() {
    const formconst = document.getElementById("boxSF")
    formconst.reset()

}

function createCard(tarea) {
    const cardlist = document.getElementById("list-01")
    cardlist.innerHTML += `
                        

                    <div id="box-b4">
                            <p> ${tarea.nombre}</p>
                            <p>${tarea.apellido}</p>
                            <p>${tarea.rut}</p>
                            <p>${tarea.cargo}</p> 
                        <div>
                            <button class="btn-edit">Editar</button><button class="btn-elim">Eliminar</button>
                        </div>
                    </div>
                    <hr>`
}
/* const personlist = document.createElement("p")
  personlist.innerText = "hola" ` ${tarea.nombre}, ${tarea.apellido}, ${tarea.rut}, ${tarea.cargo}` */

function guardardatosLS() {

    localStorage.setItem("tareas", JSON.stringify(tareas))
}

function leerformLS() {
    const tareas = JSON.parse(localStorage.getItem('tareas'))
    tareas.forEach((el) => createCard(el))


}
leerformLS()

