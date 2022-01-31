
import nomes from './informacao.class.js';

console.log(localStorage.nome)
var nome=localStorage.getItem("nome")
console.log(nome)

var i=0
while(i<=7){
    if(nome==nomes[i]){
        break
    }
    i=i+1
}
var topo=document.getElementById('topo')


var nomeUsuario=document.createElement('P')
var descrisao=document.createElement('P')
var texto=document.createElement('DIV')
var perfil=document.createElement('IMG')

var foto=document.getElementById('topo')

topo.classList.add("header")
descrisao.classList.add("descricao")
texto.classList.add("conteudo")




texto.append(nomeUsuario,descrisao)
foto.append(perfil)
topo.append(texto)



perfil.src="../Imagens/Imagensperfilpequenas/perfil"+ i +".png"
perfil.alt="foto perfil do usuario"
descrisao.innerHTML="breve descricao sobre o sujeito"
nomeUsuario.innerText=nome