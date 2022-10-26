const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".section")


parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event =>{
        parrafo.classList.add("dragging") //AGREGO CLASE "DRAGGING"
        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () =>{
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move" //Cambia el icono del cursor al arrastrar
            //console.log("dragover");
    })

    seccion.addEventListener("drop", event =>{
        console.log("drop");
        const id_parrafo = event.dataTransfer.getData("id")
        console.log("Parrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})


const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})


papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})
