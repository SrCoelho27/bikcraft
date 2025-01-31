//MENU ATIVO

const links = document.querySelectorAll('.header-menu a')

const menuAtivo = link=>{
  const url = location.href
  const href = link.href

  if(url.includes(href)){
    link.classList.add('ativo')
  }
}

links.forEach(menuAtivo)


//SLELÇÃO DOS INPUTS A PARTIR DA URL
const parametros = new URLSearchParams(location.search)

const ativarProduto=(parametro)=>{
  const elemento = document.getElementById(parametro)

  if(elemento){
    elemento.checked=true //marcou o input a partir dos parametros seguro e prata/ouro
  }
}

parametros.forEach(ativarProduto)




//GALERIA DE IMAGENS 

const galeria = document.querySelectorAll(".bicicleta-imagem img")
const galeriaContainer = document.querySelector(".bicicleta-imagem")

const galeriaEvento = (event)=>{
  const imgClicada=event.currentTarget;
  const media = matchMedia('(min-width: 1000px)');
  const media800 = matchMedia('(max-width: 800px)');

  if (media.matches || media800.matches){
  galeriaContainer.prepend(imgClicada)
  }
}

const galeriaTrocar = (img)=>{
  img.addEventListener('click', galeriaEvento)
}

galeria.forEach(galeriaTrocar)