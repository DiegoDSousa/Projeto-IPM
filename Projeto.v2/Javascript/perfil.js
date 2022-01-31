
import nomes from './informacao.class.js';

console.log(localStorage.nome)
var a=localStorage.getItem("nome")
var conteudo=document.getElementById("teste")
console.log(a)
conteudo.innerText=a

var i=0
while(i<=7){
    if(a==nomes[i]){
        break
    }
    i=i+1
}
var perfil=document.createElement('IMG')
var foto=document.getElementById('topo')
foto.append(perfil)

perfil.src="../Imagens/Imagensperfilpequenas/perfil"+ i +".png"