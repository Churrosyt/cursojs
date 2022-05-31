let terrenos = [4,5,2,3,9,5]
//terrenos.sort()
console.log(terrenos)
/*for(let casa = 0 ; casa < terrenos.length ; casa++ ) {
    console.log(` tem ${casa} casas no ${terrenos[casa]} terreno`)
}
*/
for(let casa in terrenos ){
    console.log(`tem ${casa} casas no ${terrenos[casa]} terreno`)
}