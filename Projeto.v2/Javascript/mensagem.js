import nomes from './informacao.class.js'
var i = 1;
while (i <= 7) {
var mostrar=document.getElementById('conteudo')
var conteudo=document.createElement('DIV')
var link=document.createElement('A')
var user=document.createElement('DIV')
var foto=document.createElement('IMG')
var paragrafo_nome=document.createElement('P')
var paragrafo_sms=document.createElement('P')
var paragrafo=document.createElement('P')
var sms="Agora podem trocar mensagens"

foto.classList.add("perfil")
mostrar.classList.add("scrol")
conteudo.classList.add("conteudo","formatacao")
user.classList.add("user")
paragrafo_sms.classList.add("mensagem")
paragrafo_nome.classList.add("nome")

link.append(user)
conteudo.append(link)
paragrafo_nome.append(nomes[i])
paragrafo_sms.append(sms)
paragrafo.append(paragrafo_nome,paragrafo_sms)
user.append(foto,paragrafo)
mostrar.append(conteudo)

foto.src="../Imagens/Imagensperfilpequenas/perfil"+ i +".png"
link.src="www.youtube.com"
i = i + 1;
}
