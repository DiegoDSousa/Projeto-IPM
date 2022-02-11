function clicado(){
    window.location="../HTML/mensagens_enviar.html"
   }
   function enviar(){
       var mensagens=document.getElementById('mensagem').value
       var container=document.getElementById('box_messagens')
       var box_msg_e=document.createElement('div')
       var user_icon_m=document.createElement('div')
       var box_content=document.createElement('div')
       var foto=document.createElement('div')
       var spam=document.createElement('spam')


       box_msg_e.classList.add('box_msg_E')
       user_icon_m.classList.add('user_icon_m')
       box_content.classList.add('box_content')

   
       spam.append(mensagens)
       console.log(mensagens)
       box_content.append(spam)
       user_icon_m.append(foto)
       box_msg_e.append(user_icon_m,box_content)
       container.appendChild(box_msg_e)

       foto.src="../Imagens/perfil/perfil1.jpg"
   }