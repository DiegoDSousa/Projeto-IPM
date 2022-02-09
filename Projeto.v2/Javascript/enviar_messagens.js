var box_messagens=document.getElementById("box_messagens")
function criar_perfil(){


var box_perfil=document.getElementById("box_perfil")

var user=document.createElement('DIV')
var user_icon=document.createElement('DIV')
var user_description=document.createElement('DIV')
var foto=document.createElement('IMG')
var user_status=document.createElement('DIV')
var nome=document.createElement('P')
var description=document.createElement('P')


foto.classList.add("perfil_icon")
user_status.classList.add("user_status")
user.classList.add("user_box")
user_description.classList.add("user_description")
user_icon.classList.add("user_icon")
description.classList.add("description")
nome.classList.add("nome")

foto.src="../Imagens/perfil/perfil0.jpg"
user_status.innerHTML=""
nome.innerText="Nuno Lima"
description.innerHTML="Sem nada a dizer"

user_icon.append(foto,user_status)
user_description.append(nome,description)
user.append(user_icon,user_description)
box_perfil.append(user)
}
criar_perfil()