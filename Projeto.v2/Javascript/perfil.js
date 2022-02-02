
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
    titulo.append("destaques")
    
}


function criarEstatisticas(){
    //criando os elementos
    var destaques=document.getElementById('estatisticas')
    var titulo=document.createElement('H2')
    var container=document.createElement('DIV')

    //adicionando os elementos
    destaques.append(titulo)
    destaques.append(container)
    

    //adicionando classes aos elementos

    titulo.classList.add("titulo")

    //atribuindo valores
    titulo.append("estatisticas")
    
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
    titulo.append("rotas")
    
    
}

function criarGaleria(){
    //criando os elementos
    var destaques=document.getElementById('galeria')
    var titulo=document.createElement('H2')
    var container=document.createElement('DIV')

    //adicionando os elementos
    destaques.append(titulo)
    destaques.append(container)
    

    //adicionando classes aos elementos

    titulo.classList.add("titulo")

    //atribuindo valores
    titulo.append("galeria")
    
}


//executando as funcoes
criarHeader()
criarDestaques()
criarEstatisticas()
criarRotas()
criarGaleria()