import nomes from './informacao.class.js'

var conteudo_div=document.getElementById('conteudo')

 var num_pefis=nomes.length
for (let i = 1; i <=num_pefis; i++) {
    /*criado*/
    var conteudo=document.createElement('DIV')
    var link=document.createElement('A')
    var user=document.createElement('DIV')
    var user_icon=document.createElement('DIV')
    var user_description=document.createElement('DIV')
    var foto=document.createElement('IMG')
    var paragrafo_nome=document.createElement('P')
    var paragrafo_sms=document.createElement('P')
    var paragrafo=document.createElement('P')
    var sms="Agora podem trocar mensagens"

    /* class*/
    foto.classList.add("perfil_icon")
    foto.classList.add("status_oline")
    conteudo_div.classList.add("scrol")
    conteudo.classList.add("post_conteudo")
    user.classList.add("user_box")
    user_description.classList.add("user_description")
    user_icon.classList.add("user_icon")
    paragrafo_sms.classList.add("menssagem")
    paragrafo_nome.classList.add("nome")
    
    /*ligaçãos*/
    user_icon.append(foto)
    paragrafo_nome.append(nomes[i])
    paragrafo_sms.append(sms)
    user_description.append(paragrafo_nome,paragrafo_sms)
    user.append(user_icon,user_description)
    link.append(user)
    conteudo.append(link)
    conteudo_div.append(conteudo)

    foto.src="../Imagens/Imagensperfilpequenas/perfil"+ i +".png"
   
}

