var nomes=["João Antonio","Raquel Maria","Rafael Antonio","Mario Andrade","Rafaela Simone",
"Rita Perreira","Guilherme Reis","Helena Gomes"]

var nomePesquisado=document.getElementById("pesquisar").value


function pesquisar(){
    var nomePesquisado=document.getElementById("pesquisar").value
    nomePesquisado=nomePesquisado.toLocaleLowerCase()
    console.log(nomePesquisado)
    var auxiliar=[]
    var i
    for(i in nomes){
        auxiliar[i]=nomes[i].toLocaleLowerCase()
    }
    i=0
    for(i in nomes){
        if(nomePesquisado==auxiliar[i]){
            break
        }
    }
    if(i>=0){
        var lista=document.createElement('LI')
        document.getElementById("lista").append(lista)
        lista.append(nomes[i])
        localStorage.nome=nomes[i]
        window.location="../HTML/perfil.html"
    }else{
        return usuarioNaoEncontrado()
    }
    
        

    
    
}
function usuarioNaoEncontrado(){
    var lista=document.createElement('LI')
    document.getElementById("lista").append(lista)
    lista.append("Usuario nao encontrado")
    
}

/*
var t=""
for(var i in nomes){
   t+="<li>"+nomes[i]+"</li>"
   
   nomes[i]=nomes[i].toLowerCase()
}
lista.innerHTML=t

nomePesquisado.onkeyup=function(e){
    
    t =this.value
    var r= new RegExp(t,"g")
    for(i in nomes){
        lista.children[i].style.display="none"
        if(nomes[i].match(r)){
            lista.children[i].removeAttribute("style")
        }
        
    }
}
*/
