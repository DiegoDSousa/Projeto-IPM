var i = 1;
var nomes=["João Antonio","Raquel Maria","Rafael Antonio","Mario Andrade","Rafaela Simone",
"Rita Perreira","Guilherme Reis","Helena Gomes"]
while (i <= 7) {
    
    var feed=document.getElementById('feed')
    var scrol=document.getElementById('conteudo')

    var publicacao=document.createElement('DIV')
    var header=document.createElement('DIV')
    var perfil=document.createElement('IMG')
    var nome=document.createElement('P')
    var icone=document.createElement('P')
    var icone_img=document.createElement('IMG')
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
    icone_img.classList.add("editar")
    
    feed.append(scrol)
    scrol.append(publicacao)
    nome.append(nomes[i])
    icone.append(icone_img)
    header.append(perfil,nome,icone)
    div_foto.append(foto_publicada)
    footer.append(gosto,comentar,partilhar)

    publicacao.append(header)
    publicacao.append(div_foto)
    publicacao.append(footer)
    publicacao.append(divisao)

    partilhar.alt="partilhar"
    perfil.alt="foto_perfil"
    gosto.alt="gosto"
    comentar.alt="comentar"

    perfil.src="../Imagens/Imagensperfilpequenas/perfil"+ i +".png"
    foto_publicada.src="../Imagens/Imagenspublicadas/publicacao"+ i +".png"
    icone_img.src="../Imagens/Icones/editar.svg"
    gosto.src="../Imagens/Icones/Gosto.svg"
    comentar.src="../Imagens/Icones/comentario.svg"
    partilhar.src="../Imagens/Icones/partilhar.svg"
    

    i = i + 1;
}
    
   

