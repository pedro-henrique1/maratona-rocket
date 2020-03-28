function onOff() {
    document.querySelector("#modal").classList.toggle("hide");
}
function chekFilds(event){
    const valuestoCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]
    const isEmpty = valuestoCheck.find(function(value){
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsString =!event.target[value].value.trim()
        if(checkIfIsString &&  checkIfIsString){

        }
    }); 
    
    if(isEmpty){
        event.preventDefalt()
        alert("por favor preencha todos os campos do formulario")
    }
}
