
function carregar() { 
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `<strong>Agora são ${hora} horas<strong>.`
//var hora

if (hora <= 4 ) {
//madrugada
img.src = 'escuro.png'
document.body.style.background = '#000000'

 }
 else if  (hora >= 5 && hora < 12) {
    //bom dia 
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'

  }  else if (hora >= 12 && hora <= 18) {
      //boa tarde
      img.src = 'tarde.png.png'
      document.body.style.background = '#b9846f'
  
    } else { 
  //boa noite
  img.src = 'noite.png.png'
  document.body.style.background = '#515154'
  }

    }

