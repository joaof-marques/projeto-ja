const modal = document.querySelector("dialog")
const btnFechar = document.querySelector("#btnFechar")

const txtProce01 = ['imagens/estudio_generica.jpg','Procedimento 01', 'aaaa qwef qf qwe fqwef qwef qwefijhg qwefo8h qwp9uiq wep9o hqwp9eh fqpweo9iuf  q ph wepofh q9pqwefh q9we qw9ouihf pheqf  qh qweuh q we']
const txtProce02 = ['imagens/estudio_generica.jpg','Procedimento 02', 'aaaa qwef qf qwe fqwef qwef qwefijhg qwefo8h qwp9uiq wep9o hqwp9eh fqpweo9iuf  q ph wepofh q9pqwefh q9we qw9ouihf pheqf  qh qweuh q we']
const txtProce03 = ['imagens/estudio_generica.jpg','Procedimento 03', 'aaaa qwef qf qwe fqwef qwef qwefijhg qwefo8h qwp9uiq wep9o hqwp9eh fqpweo9iuf  q ph wepofh q9pqwefh q9we qw9ouihf pheqf  qh qweuh q we']
const txtProce04 = ['imagens/estudio_generica.jpg','Procedimento 04', 'aaaa qwef qf qwe fqwef qwef qwefijhg qwefo8h qwp9uiq wep9o hqwp9eh fqpweo9iuf  q ph wepofh q9pqwefh q9we qw9ouihf pheqf  qh qweuh q we']
const txtProce05 = ['imagens/estudio_generica.jpg','Procedimento 05', 'aaaa qwef qf qwe fqwef qwef qwefijhg qwefo8h qwp9uiq wep9o hqwp9eh fqpweo9iuf  q ph wepofh q9pqwefh q9we qw9ouihf pheqf  qh qweuh q we']
const txtProce06 = ['imagens/estudio_generica.jpg','Procedimento 06', 'aaaa qwef qf qwe fqwef qwef qwefijhg qwefo8h qwp9uiq wep9o hqwp9eh fqpweo9iuf  q ph wepofh q9pqwefh q9we qw9ouihf pheqf  qh qweuh q we']
const txtProce07 = ['imagens/estudio_generica.jpg','Procedimento 07', 'aaaa qwef qf qwe fqwef qwef qwefijhg qwefo8h qwp9uiq wep9o hqwp9eh fqpweo9iuf  q ph wepofh q9pqwefh q9we qw9ouihf pheqf  qh qweuh q we']
const txtProce08 = ['imagens/estudio_generica.jpg','Procedimento 08', 'aaaa qwef qf qwe fqwef qwef qwefijhg qwefo8h qwp9uiq wep9o hqwp9eh fqpweo9iuf  q ph wepofh q9pqwefh q9we qw9ouihf pheqf  qh qweuh q we']

function abrirModal(){
    modal.classList.remove('fade')
    modal.showModal()    
    modal.classList.add('fade')
}

btnFechar.onclick = function(){
    modal.close()
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
            modalImg.src = txtProce02[0]
            modalTitle.innerHTML = txtProce02[1]
            modalText.innerHTML = txtProce02[2]
            break
        case 3:
            modalImg.src = txtProce03[0]
            modalTitle.innerHTML = txtProce03[1]
            modalText.innerHTML = txtProce03[2]
            break
        case 4:
            modalImg.src = txtProce04[0]
            modalTitle.innerHTML = txtProce04[1]
            modalText.innerHTML = txtProce04[2]
            break
        case 5:
            modalImg.src = txtProce05[0]
            modalTitle.innerHTML = txtProce05[1]
            modalText.innerHTML = txtProce05[2]
            break
        case 6:
            modalImg.src = txtProce06[0]
            modalTitle.innerHTML = txtProce06[1]
            modalText.innerHTML = txtProce06[2]
            break
        case 7:
            modalImg.src = txtProce07[0]
            modalTitle.innerHTML = txtProce07[1]
            modalText.innerHTML = txtProce07[2]
            break
        case 8:
            modalImg.src = txtProce08[0]
            modalTitle.innerHTML = txtProce08[1]
            modalText.innerHTML = txtProce08[2]
            break
        default:
            break          
    }
    
    abrirModal()
}
