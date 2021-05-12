function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Now is ${hora} hours`
}
if (hora >= 0 && hora <= 12){
    img.src='/fotos/sunset.png'
}else{
    img.src='/fotos/nightfall.png'
}

