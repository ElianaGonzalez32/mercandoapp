//consumindo el API para acceder a los datos de la base de datos

let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method:"GET",
    headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recogiendo la respuesta para hacer render
    let fila=document.getElementById("fila")
    respuesta.forEach(function(usuario){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta= document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")
        

        let nombreUsuario=document.createElement("h3")
        nombreUsuario.classList.add("text-center")
        nombreUsuario.textContent=usuario.nombres

        let CedulaUsuario=document.createElement("h3")
        CedulaUsuario.classList.add("text-center")
        CedulaUsuario.textContent=usuario.cedula

        let CorreoUsuario=document.createElement("h3")
        CorreoUsuario.classList.add("text-center")
        CorreoUsuario.textContent=usuario.correo

        tarjeta.appendChild(nombreUsuario)
        tarjeta.appendChild(CedulaUsuario)
        tarjeta.appendChild(CorreoUsuario)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
})
.catch(function(respuesta){
    console.log(respuesta)
})