import usuarios from './informacao.class.js'

var conteudo_div=document.getElementById('conteudo')

 var num_pefis=usuarios.length-1
for (let i = 1; i <=num_pefis; i++) {
    /*criado*/
    var conteudo=document.createElement('DIV')
    var user=document.createElement('DIV')
    var user_icon=document.createElement('DIV')
    var user_description=document.createElement('DIV')
    var foto=document.createElement('IMG')
    var user_status=document.createElement('DIV')
    var paragrafo_nome=document.createElement('P')
    var paragrafo_sms=document.createElement('P')
    var paragrafo=document.createElement('P')
    var sms="Agora podem trocar mensagens"

    /* class*/
    foto.classList.add("perfil_icon")
    user_status.classList.add("user_status")
    conteudo_div.classList.add("scrol")
    conteudo.classList.add("post_conteudo")
    user.classList.add("user_box")
    user_description.classList.add("user_description")
    user_icon.classList.add("user_icon")
    paragrafo_sms.classList.add("menssagem")
    paragrafo_nome.classList.add("nome")
    user_status.innerHTML=""
    
    /*ligaçãos*/
    user_icon.append(foto,user_status)
    paragrafo_nome.append(usuarios[i].nome)
    paragrafo_sms.append(sms)
    user_description.append(paragrafo_nome,paragrafo_sms)
    user.append(user_icon,user_description)
    conteudo.append(user)
    conteudo_div.append(conteudo)
    paragrafo_nome.addEventListener('click',clicado)
    foto.src="../Imagens/usuarios/"+usuarios[i].imagens+"/perfil.jpg"
   
}



function clicado(){
    addEventListener("click",function(e){
        var elemento= e.target
        elemento.id="riscado"
        var aqui=document.getElementById("riscado").innerHTML
        

        localStorage.nome=aqui
        
        console.log(aqui)
    })
    window.location="../HTML/mensagens_enviar.html"
}