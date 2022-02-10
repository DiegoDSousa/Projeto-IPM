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

function criar_messagens(){
    var box_messagens=document.getElementById("box_messagens")

    var conversa=[["R","Gostaria de saber quando, organiza-ra a proxima excursão ao monte cara."],
                ["E","A proxima excursão sera realizada no dia 24 de Janeiro."],
                ["E","Mas gosta de mergulhos?"],
                ["R","Sim"],
                ["E","Porem na proxima semana, havera um mergulho na enseada de coral"],
                ["R","Quando posso marcar?"],
                ["E","Colocarei o anúncio na segunda feira"],
                ["E","=============================="],
                ["R","============================="],
                ["E","================================"],
                ["E","=============================="],
                ["R","============================="],
                ["E","================================"],
                ["E","=============================="],
                ["R","============================="],
                ["E","================================"]
            ]


    var tamanho=conversa.length
    for(let i=0;i<tamanho;i++){

        var messagem=document.createElement('DIV')
        var user_icon=document.createElement('DIV')
        var foto=document.createElement('IMG')
        var content=document.createElement('DIV')
        var text=document.createElement('SPAM')
        
        
        
        if (conversa[i][0]=="R"){
            messagem.classList.add("box_msg_R")
            foto.src="../Imagens/perfil/perfil0.jpg"
            text.innerHTML=conversa[i][1]

            user_icon.append(foto)
            content.append(text)
            messagem.append(user_icon,content)
            box_messagens.append(messagem)
        }else{
            messagem.classList.add("box_msg_E")
            foto.src="../Imagens/perfil/perfil1.jpg"
            text.innerHTML=conversa[i][1]

            user_icon.append(foto)
            content.append(text)
            messagem.append(content,user_icon)
            box_messagens.append(messagem)
        }

        user_icon.classList.add("user_icon_m")
        content.classList.add("box_content")


    
       
        content.append(text)
        messagem.append(user_icon,content)
        box_messagens.append(messagem)

    }
    
}



criar_perfil()
criar_messagens()