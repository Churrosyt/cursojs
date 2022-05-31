function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        var genero = ''
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 2 ) {
                //bebe
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 10 ){
                //criança
                img.setAttribute('src', 'criança.png')
            } else if (idade < 18 ) {
                //adolescente
                img.setAttribute('src', 'adolescente.png')

            } else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //idoso 
                img.setAttribute('src', 'velho.png')
            }

        } else if (fsex [1].checked) {
        genero = 'Mulher'
          if (idade >=0 && idade < 2 ) {
            //bebe
            img.setAttribute('src', 'bebef.png')
        } else if (idade < 10 ){
            //criança
            img.setAttribute('src', 'criancaf.png')
        } else if (idade < 18 ) {
            //adolescente
            img.setAttribute('src', 'adolescentef.png')
        } else if (idade < 50 ){
            //adulto
            img.setAttribute('src', 'adulta.png')
        } else {
            //idoso 
            img.setAttribute('src', 'velha.png')
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}  anos.`
        res.appendChild(img)
    }
}