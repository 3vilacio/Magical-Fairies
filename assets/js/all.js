/* Start Efeito Carrossel  da página index*/

let time = 4000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
max = images.length; //Qtde máxima de imgs 


function nexImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")

}


function start() {
    setInterval(() => {
        //troca de imagem
        nexImage()
    }, time)

}

window.addEventListener("load", start) // quando a window for totalmente carreda, vai ser dado o start

/* End Efeito carrosel dos depoimentos*/



