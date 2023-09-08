function carregar() {

    var msg = window.document.getElementByid ('msg')
    var img = window.document.getElementByid('imagem')
    var data = new Date()
    var hora = data.getHours()
 
  
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'dia.png'
     

    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = 'tarde.png'

    } else{
        //Boa noite!
        img.src = 'noite.png'
    }

}


