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
    },
    {
        "nome":"Vanderley Lopes",
        "descricao":"Sem nada a dizer",
        "imagens":"vanderley",
        "numero_fotos":5,
        "id":5,
    }




]


var nomePesquisado=document.getElementById("pesquisar").value

function redirecionar(){
    document.getElementById("pesquisar").value=""
    console.log(localStorage.nome)
    window.location="../HTML/perfil.html"
}


function pesquisar(){
    var pesquisados_box=document.getElementById("lista")
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
        
    var user=document.createElement('DIV')
    var user_icon=document.createElement('DIV')
    var user_description=document.createElement('DIV')
    var foto=document.createElement('IMG')
    var user_status=document.createElement('DIV')
    var nome=document.createElement('P')
    var description=document.createElement('P')
    
    
    foto.classList.add("perfil_icon")
    user_status.classList.add("user_status")
    user.classList.add("user_box")
    user_description.classList.add("user_description")
    user_icon.classList.add("user_icon")
    description.classList.add("description")
    nome.classList.add("nome")
    
    
    foto.src="../Imagens/usuarios/"+usuarios[i].imagens+"/perfil.jpg"
    user_status.innerHTML=""
    nome.innerText=usuarios[i].nome
    description.innerHTML="Sem nada a dizer"
    
    
    user_icon.append(foto,user_status)
    user_description.append(nome,description)
    user.append(user_icon,user_description)
    pesquisados_box.append(user)
        }
    }
    
        return usuarioNaoEncontrado()
}
function usuarioNaoEncontrado(){
    var lista=document.createElement('LI')
    document.getElementById("lista").append(lista)
    lista.append("Usuario nao encontrado")
    
}

function criar_perfil(){

    var pesquisado=document.getElementById("lista")
    
    var user=document.createElement('DIV')
    var user_icon=document.createElement('DIV')
    var user_description=document.createElement('DIV')
    var foto=document.createElement('IMG')
    var user_status=document.createElement('DIV')
    var nome=document.createElement('P')
    var description=document.createElement('P')
    
    
    foto.classList.add("perfil_icon")
    user_status.classList.add("user_status")
    user.classList.add("user_box")
    user_description.classList.add("user_description")
    user_icon.classList.add("user_icon")
    description.classList.add("description")
    nome.classList.add("nome")
    
    
    foto.src="../Imagens/usuarios/"+usuarios[1].imagens+"/perfil.jpg"
    user_status.innerHTML=""
    nome.innerText=nomeusuario
    description.innerHTML="Sem nada a dizer"
    
    
    user_icon.append(foto,user_status)
    user_description.append(nome,description)
    user.append(user_icon,user_description)
    pesquisado.append(user)
    }
  

