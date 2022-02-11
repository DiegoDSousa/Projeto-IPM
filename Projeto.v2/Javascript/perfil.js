
import usuarios from './informacao.class.js';



function encontra_perfil(){
    var nome=localStorage.getItem("nome")
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome===nome){
            return usuarios[i]
        }
        
    }
}

//criando as funcoes
function criarHeader(usuario){

    //criando os elementos
    var topo=document.getElementById('topo')
    var nomeUsuario=document.createElement('P')
    var descrisao=document.createElement('P')
    var texto=document.createElement('DIV')
    var perfil=document.createElement('IMG')
    var foto=document.getElementById('topo')

    //adicionando classes aos elementos
    topo.classList.add("header")
    descrisao.classList.add("descricao")
    texto.classList.add("descricao_box")
    nomeUsuario.classList.add("nome")
    perfil.classList.add("perfil")
    //atribuindo valores
    perfil.src="../Imagens/usuarios/"+usuario.imagens+"/perfil.jpg"
    perfil.alt="foto perfil do usuario"
    descrisao.innerHTML=usuario.descricao
    nomeUsuario.innerText=usuario.nome
    //adicionando os elementos
    texto.append(nomeUsuario,descrisao)
    foto.append(perfil)
    topo.append(texto)


    
}


function criarRotas(){
    //criando os elementos
    var rotas=document.getElementById('rotas')
    var titulo=document.createElement('H2')
    var container=document.createElement('DIV')

    //adicionando os elementos
    rotas.append(titulo)
    rotas.append(container)
    
    //criacao/atribuicao das imagens
    var controtas=0
    while (controtas <=4){
        var rota=document.createElement('IMG')
        container.append(rota)
        rota.classList.add("imagemRota")
        rota.src="../Imagens/rotas/trilha"+controtas+".png"
        rota.alt="imagem da trilha"+controtas
        controtas=controtas+1
    }


    //adicionando classes aos elementos

    titulo.classList.add("titulo")
    container.classList.add("containerRotas")

    //atribuindo valores
    titulo.append("Rotas")
    
}

function criarGaleria(){
    //criando os elementos
    var galeria=document.getElementById('galeria')
    var titulo=document.createElement('H2')
    var container=document.createElement('DIV')

    //adicionando os elementos
    galeria.append(titulo)
    galeria.append(container)
    

    //adicionando classes aos elementos

    titulo.classList.add("titulo")
    container.classList.add("publicacao")
    //atribuindo valores
    titulo.append("Galeria")

    var j=0
    while(j<usuarios[i].numero_fotos){
        //var feed=document.getElementById('feed')
        var scrol=document.getElementById('galeria')

        var publicacao=document.createElement('DIV')
        var header=document.createElement('DIV')
        var perfil=document.createElement('IMG')
        var nome=document.createElement('P')
        var footer=document.createElement('DIV')
        var foto_publicada=document.createElement('IMG')
        var div_foto=document.createElement('DIV')
        var comentar=document.createElement('IMG')
        var partilhar=document.createElement('IMG')
        var gosto=document.createElement('IMG')
        var divisao=document.createElement('HR')

        scrol.classList.add("conteudo")
        header.classList.add("header")
        publicacao.classList.add("publicacao")
        foto_publicada.classList.add("foto_publicada")
        div_foto.classList.add("foto")
        perfil.classList.add("perfil")
        nome.classList.add("nome")

        //feed.append(scrol)
        nome.append(usuarios[i].nome)
        scrol.append(publicacao)

        header.append(perfil,nome)
        div_foto.append(foto_publicada)
        footer.append(gosto,comentar,partilhar)
        publicacao.append(header)
        publicacao.append(div_foto)
        publicacao.append(footer)
        publicacao.append(divisao)

        nome.setAttribute("onclick","abrirPerfil()")

        partilhar.alt="partilhar"
        perfil.alt="foto_perfil"
        gosto.alt="gosto"
        comentar.alt="comentar"

        perfil.src="../Imagens/usuarios/"+usuarios[i].imagens+"/perfil.jpg"
        foto_publicada.src="../Imagens/usuarios/"+usuarios[i].imagens+"/img"+j +".jpg"
        
        gosto.src="../Imagens/Icones/Gosto.svg"
        comentar.src="../Imagens/Icones/comentario.svg"
        partilhar.src="../Imagens/Icones/partilhar.svg"
        j=j+1
        }
    
}


//executando as funcoes

 var perfil_usario=encontra_perfil()
criarHeader(perfil_usario)
criarRotas(perfil_usario)
criarGaleria(perfil_usario)
