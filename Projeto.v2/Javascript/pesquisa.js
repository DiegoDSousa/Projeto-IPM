var nomes=["João Antonio","Raquel Maria","Rafael Antonio","Mario Andrade","Rafaela Simone",
"Rita Perreira","Guilherme Reis","Helena Gomes"]

var nomePesquisado=document.getElementById("pesquisar").value
function redirecionar(){
        window.location="../HTML/perfil.html"
}


function pesquisar(){
    document.getElementById("lista").innerHTML=''
    var nomePesquisado=document.getElementById("pesquisar").value
    nomePesquisado=nomePesquisado.toLocaleLowerCase()
    var auxiliar=[]
    var i
    for(i in nomes){
        auxiliar[i]=nomes[i].toLocaleLowerCase()
    }
    i=0
    var n
    
    for(i in nomes){
        if(nomePesquisado==auxiliar[i]){
            var lista=document.createElement('LI')
            var foto=document.createElement('IMG')
            lista.setAttribute("onclick","redirecionar()")
            document.getElementById("lista").append(lista)
            lista.append(foto)
            lista.append(nomes[i])
            localStorage.nome=nomes[i]
            foto.src="../Imagens/ImagensPerfilPequenas/perfil"+i+".png"
            return
        }
    }
    
        return usuarioNaoEncontrado()
    
    
        

    
    
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
