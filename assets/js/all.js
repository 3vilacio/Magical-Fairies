/* Efeito Carrossel  da página index*/

var btn = document.querySelector('.manual_btn') /* criação da variável que receberá a classe através da busca do query.. */
var cont = 1

document.getElementById('slide1').checked = true/* Marcar o slide1 como ativo(clicado)*/
setInterval(() => { /* efeito de passagem de imagem */
    proximaImg()
}, 3000) /* depois de 5s passará para a outra img */

function proximaImg() {
    cont++/* verificador de posição de img(qual img está selecionada) */

    if (cont > 6) {
        cont = 1
    }
    document.getElementById('slide' + cont).checked = true

}