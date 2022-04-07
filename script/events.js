

//eventos de las tarjetas
const event1= (nameTag,srcs,txtBody) =>{
    const element = document.getElementById(nameTag);

    element.addEventListener("mouseover",()=>{
        element.classList.add("cards2");
        element.classList.add("move");

        element.innerHTML = txtBody;

    })

    element.addEventListener("mouseout",()=>{
        element.classList.remove("cards2");
        element.classList.remove("move");

        if(nameTag == "Manuel"){
            element.innerHTML = `<img src="${srcs}" class="render" alt="imagen de ${nameTag}">`;
        }else if(nameTag == "Gael"){
            element.innerHTML = `<img src="${srcs}" class="render2" alt="imagen de ${nameTag}">`;
        }else{
            element.innerHTML = `<img src="${srcs}" alt="imagen de ${nameTag}">`;
        }
    })
}








export {event1}