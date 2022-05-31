function Contar() {
 var I1 = document.getElementById('inicio1')
 var F1 = document.getElementById('fim1')
 var P1 = document.getElementById('passo')
 var res = document.getElementById('res')
 var n1 = Number(inicio1.value)
 var n2 = Number(fim1.value)
 var n3 = Number(passo.value)
 
 for (var c = n1 ;c <= n2 ;c+= n3 ) {
    res.innerHTML += c 
    if(c == n2){
        res.innerHTML += " ! --> FIM!"
    }
    else {
        res.innerHTML +="     ->     "

    } /*if (I1.value.legth == 0 || F1.value.legth == 0 || P1.value.legth == 0 ) {
        res.innerHTML = 'imnpossivel' }*/
 }
}