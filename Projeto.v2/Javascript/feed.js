var i = 0;
import usuarios from './informacao.class.js';
function criar(){  
    var conteudo=document.getElementById('conteudo')

    var post=document.createElement('DIV')
    var user=document.createElement('DIV')
    var user_description=document.createElement('DIV')
    var user_icon=document.createElement('DIV')
    var user_perfil=document.createElement('IMG')
    var nome=document.createElement('P')
    var data=document.createElement('P')
    var post_img_box=document.createElement('DIV')
    var post_img=document.createElement('IMG')
    var rection_box=document.createElement('DIV')
    var like=document.createElement('IMG')
    var share=document.createElement('IMG')
    var coment=document.createElement('IMG')

//Class
    post.classList.add("post_box")
    user.classList.add("user_box")
    user_description.classList.add("user_des")
    user_perfil.classList.add("perfil_icon")
    nome.classList.add("nome")
    data.classList.add("data")
    post_img_box.classList.add("post_post_img_box")
    post_img.classList.add("post_img")
    rection_box.classList.add("rection_box")
    user_icon.classList.add("user_icon")
    like.classList.add("rection")
    share.classList.add("rection")
    coment.classList.add("rection")

//ligações
    user_icon.append(user_perfil)
    user_description.append(nome,data)
    user.append(user_icon,user_description)
    post_img_box.append(post_img)
    rection_box.append(like,share,coment)
    post.append(user,post_img_box,rection_box)
    conteudo.append(post)
    nome.append(usuarios[i].nome)
    data.append("Hoje")

    user.setAttribute("onclick","abrirPerfil()")

    share.alt="partilhar"
    user_perfil.alt="foto_perfil"
    like.alt="gosto"
    coment.alt="comentar"
    user_perfil.src="../Imagens/usuarios/"+usuarios[i].imagens+"/perfil.jpg"
    post_img.src="../Imagens/usuarios/"+usuarios[i].imagens+"/img"+j +".jpg"
    like.src="../Imagens/Icones/Gosto.svg"
    coment.src="../Imagens/Icones/comentario.svg"
    share.src="../Imagens/Icones/partilhar.svg"


}  
console.log(usuarios[3].imagens)
var j=0
while (i <= usuarios.length) {
    console.log(usuarios[i].numero_fotos)
   while(j < usuarios[i].numero_fotos){
        criar()
        j=j+1
    }
    j=0
    i = i + 1;
}  




