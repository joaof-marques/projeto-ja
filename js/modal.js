const modal = document.querySelector("dialog")


const txtProce01 = ['imagens/estudio_generica.jpg','Procedimento 01', 'aaaa qwef qf qwe fqwef qwef qwefijhg qwefo8h qwp9uiq wep9o hqwp9eh fqpweo9iuf  q ph wepofh q9pqwefh q9we qw9ouihf pheqf  qh qweuh q we']

function abrirModal(){
    modal.showModal()
}

function alteraTexto(opcao){

    var modalImg = document.querySelector("img#modalImg");
    var modalTitle = document.querySelector("h3#modalTitle");
    var modalText = document.querySelector("p#modalText");

    switch(opcao){
        case 1:
            modalImg.src = txtProce01[0]
            modalTitle.innerHTML = txtProce01[1]
            modalText.innerHTML = txtProce01[2]
            break
        case 2:
            break
        case 3:
            break
        case 4:
            break
        case 5:
            break
        case 6:
            break
        case 7:
            break
        case 8:
            break
        default:
            break          
    }
    
    abrirModal()
}
