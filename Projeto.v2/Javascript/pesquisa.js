var usuarios=[
    {
        "nome":"Nuno Lima",
        "descricao":"Sem nada a dizer",
        "imagens":"nuno",
        "numero_fotos":4,
        "id":1,
    },  {
        "nome":"Diego Sousa",
        "descricao":"Sem nada a dizer",
        "imagens":"diego",
        "numero_fotos":5,
        "id":2,
    },  {
        "nome":"Leticia Zego",
        "descricao":"Sem nada a dizer",
        "imagens":"leticia",
        "numero_fotos":3,
        "id":3,
    },  {
        "nome":"William Carvalho",
        "descricao":"Sem nada a dizer",
        "imagens":"willi",
        "numero_fotos":3,
        "id":4,
    }




]


var nomePesquisado=document.getElementById("pesquisar").value

function redirecionar(){
    document.getElementById("pesquisar").value=""
    console.log(localStorage.nome)
    window.location="../HTML/perfil.html"
}


function pesquisar(){
    document.getElementById("lista").innerHTML=''
    var nomePesquisado=document.getElementById("pesquisar").value
    nomePesquisado=nomePesquisado.toLocaleLowerCase()
    var auxiliar=[]
    var i
    for(i in usuarios){
        auxiliar[i]=usuarios[i].nome.toLocaleLowerCase()
    }
    i=0
    var n
    
    for(i in usuarios){
        if(nomePesquisado==auxiliar[i]){
            var lista=document.createElement('LI')
            var nome=document.createElement('P')
            var foto=document.createElement('IMG')
            lista.setAttribute("onclick","redirecionar()")
            document.getElementById("lista").append(lista)
            lista.append(foto)
            localStorage.clear()
            localStorage.nome=usuarios[i].nome
            nome.append(usuarios[i].nome)
            lista.append(nome)
            foto.src="../Imagens/usuarios/"+usuarios[i].imagens+"/perfil.jpg"
            foto.alt="imagem de perfil"
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

