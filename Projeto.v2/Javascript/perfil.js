
import nomes from './informacao.class.js';
import info from './descricao.class.js';

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
//criando as funcoes
function criarHeader(){
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
    texto.classList.add("conteudo")
    nomeUsuario.classList.add("nome")

    //adicionando os elementos
    texto.append(nomeUsuario,descrisao)
    foto.append(perfil)
    topo.append(texto)

    //atribuindo valores
    perfil.src="../Imagens/Imagensperfilpequenas/perfil"+ i +".png"
    perfil.alt="foto perfil do usuario"
    descrisao.innerHTML=info[i]
    nomeUsuario.innerText=nome
}


function criarDestaques(){
    //criando os elementos
    var destaques=document.getElementById('destaques')
    var titulo=document.createElement('H2')
    var container=document.createElement('DIV')

    //adicionando os elementos
    destaques.append(titulo)
    destaques.append(container)
    

    //adicionando classes aos elementos

    titulo.classList.add("titulo")

    //atribuindo valores
    titulo.append("Destaques")
    
}


function criarEstatisticas(){
    //criando os elementos
    var destaques=document.getElementById('estatisticas')
    var titulo=document.createElement('H2')
    var container=document.createElement('DIV')
    var paragrafo=document.createElement('P')
    var container2=document.createElement('DIV')
    var lista=document.createElement('OL')
    var elemento=document.createElement('LI')
    //adicionando os elementos
    destaques.append(titulo,container)
    container.append(paragrafo,container2)

    //adicionando classes aos elementos

    titulo.classList.add("titulo")
    container2.classList.add("skils__bar")
    container2.classList.add("skills__bar--70")
    container.classList.add("skils")
    //atribuindo valores
    titulo.append("Estatisticas")
    
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
function aleatorio(){
        const random= (min,max) => Math.floor(Math.random()*(max-min)+min)
        
        return(random(0,12))
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

    var contfotos=0
    while(contfotos<=6){
        var verificar=[]
        var foto=document.createElement('IMG')
        var containerfoto=document.createElement('DIV')
        var nome=document.createElement('P')
        var header=document.createElement('DIV')
        var perfil=document.createElement('IMG')
        var teste=document.createElement('P')
        var icone=document.createElement('P')
        var icone_img=document.createElement('IMG')


        foto.classList.add("foto_publicada")
        containerfoto.classList.add("foto")
        perfil.classList.add("perfil")
        nome.classList.add("nome")
        header.classList.add("headerfoto")

        teste.append(nomes[i])
        icone.append(icone_img)
        nome.append(teste)
        header.append(perfil,nome,icone)
        containerfoto.append(header,foto)
        container.append(containerfoto)
        
        perfil.src="../Imagens/Imagensperfilpequenas/perfil"+ i +".png"
        icone_img.src="../Imagens/Icones/editar.svg"
        perfil.alt="foto_perfil"

        foto.src="../Imagens/fotosgaleria/galeria"+ aleatorio()+".png"
        foto.alt="imagem da galeria"+aleatorio()
        
        contfotos=contfotos+1
    }
    
}


//executando as funcoes
criarHeader()
criarDestaques()

criarRotas()
criarGaleria()