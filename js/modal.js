/* Modal mais procedimentos */

const modalProc = document.querySelector("#idModalProc")
const btnModalProc = document.querySelector("#btnModalProc")
const btnFecharModalProc = document.querySelector("#btnFecharModalProc")


btnModalProc.onclick = function () {
    modalProc.showModal()
    modalProc.classList.add('fade')
}

btnFecharModalProc.onclick = function(){    
    modalProc.classList.remove('fade')
    modalProc.close()
}
/* Modal descrição procedimentos */

const modal = document.querySelector("#modalDetalhe")
const btnFechar = document.querySelector("#btnFechar")

const txtProce01 = ['imagens/icones-procedimentos/bbglow.jpg','BB Glow', 'Para uma pele radiante e uniforme, <strong>BB Glow</strong>!<br>Este tratamento incrível utiliza um sérum especializado que é injetado na camada superior da pele, fornecendo uma base de maquiagem duradoura e uniforme. É seguro e não invasivo, e não requer tempo de recuperação. É perfeito para pessoas ocupadas que querem melhorar a aparência da pele sem sacrificar o tempo ou o conforto.']
const txtProce02 = ['imagens/icones-procedimentos/bioplacenta.jpg','Bio Placenta', 'Se você está buscando uma solução para melhorar a aparência da sua pele e restaurar sua beleza natural, <strong>Bio Placenta</strong> é a resposta. <br><br>Este tratamento avançado utiliza ingredientes derivados da placenta para promover a regeneração celular e estimular a produção de colágeno, melhorando a firmeza, a textura e a aparência geral da sua pele.']
const txtProce03 = ['imagens/icones-procedimentos/upgluteo.jpg','Up Glúteo', 'Se você está buscando um bumbum mais levantado, firme e com uma aparência mais jovem, o <strong>Up Glúteo</strong> é o tratamento que você precisa experimentar!<br><strong>Up Glúteo</strong> é a solução para obter resultados incríveis e duradouros. Este tratamento exclusivo utiliza tecnologia avançada para estimular a produção de colágeno, melhorar a firmeza e tonificar os músculos do bumbum, resultando em um bumbum mais definido e atraente.']
const txtProce04 = ['imagens/icones-procedimentos/plasmalifting.jpg','Plasma Lifting', 'Com o <strong>Plasma Lifting</strong>, você pode obter resultados incríveis sem a necessidade de cirurgia invasiva. Este tratamento utiliza uma tecnologia avançada para estimular o colágeno em sua pele, resultando em uma aparência mais jovem e radiante. <br> Além disso, o <strong>Plasma Lifting</strong> é seguro e eficaz para todos os tipos de pele. Se você está procurando um tratamento não invasivo que possa fornecer resultados duradouros, não procure mais.']
const txtProce05 = ['imagens/icones-procedimentos/hyaluron-pen.jpg','Hyaluron Pen', 'Deseja aumentar o seu bumbum e deixar ele com uma aparência jovem? Parece um sonho e saber que é possível e totalmente indolor é um pote de ouro.<br>Este tratamento revolucionário utiliza uma caneta de ácido hialurônico para criar um efeito lifting e de aumento no bumbum, sem a necessidade de incisões ou anestesia. <br> O resultado é um bumbum mais jovem, com uma aparência natural e duradoura. ']
const txtProce06 = ['imagens/icones-procedimentos/peeling.jpg','Peeling', 'Quer ter uma pele mais suave e clara? O <strong>Peeling</strong> pode ser a resposta para você!<br>O <strong>Peeling</strong> é uma técnica segura e eficaz que ajuda a rejuvenescer a sua pele, removendo as camadas superficiais danificadas. O tratamento ajuda a reduzir manchas, rugas, linhas finas e cicatrizes, além de estimular a produção de colágeno para um resultado duradouro.']
const txtProce07 = ['imagens/icones-procedimentos/criolipolise.jpg','Criolipólise', 'Esse tratamento é para você que já tentou de tudo para se livrar de gorduras localizadas e não surtiu efeito algum. A <strong>Criolipólise</strong> é a solução e você vai amar experimentar!<br>Com a <strong>Criolipólise</strong>, você pode alcançar uma aparência mais tonificada e definida em áreas como a barriga, flancos, culotes, coxas e braços. O tratamento é rápido e sem dor, permitindo que você volte à sua rotina normal logo após a sessão. Em apenas algumas sessões, você pode obter resultados duradouros e transformar sua aparência.']
const txtProce08 = ['imagens/icones-procedimentos/limpeza-pele.jpg','Limpeza de Pele', 'A Limpeza de Pele é uma parte importante da sua rotina de cuidados com a pele. Se você quer ter uma aparência mais fresca, saudável e radiante, a <strong>Limpeza de Pele</strong> pode ser o tratamento ideal para você! <br>Com a nossa <strong>Limpeza de Pele</strong> profissional, você pode remover as impurezas, células mortas e excesso de óleo que obstruem os seus poros, resultando em uma aparência mais suave e uniforme. Além disso, a <strong>Limpeza de Pele</strong> também ajuda a prevenir acne, rugas e outros sinais de envelhecimento.']

const txtProce09 = ['imagens/icones-procedimentos/depilacao-laser.jpg','Depilação a Laser', 'txt depilação a laser qhefiuqhweifuhqweiufhqiuwehfqwefqwef']

const txtProce10 = ['imagens/icones-procedimentos/botox.jpg','Botox', 'txt botox qhefiuqhweifuhqweiufhqiuwehfqwefqwef']

const txtProce11 = ['imagens/icones-procedimentos/hidragloss.jpg','Hidragloss', 'txt hidragloss qhefiuqhweifuhqweiufhqiuwehfqwefqwef']

const txtProce12 = ['imagens/icones-procedimentos/bioestimulador-colageno.jpg','Bioestimuladores de Colágeno', 'txt bioestimulador-colageno qhefiuqhweifuhqweiufhqiuwehfqwefqwef']

function abrirModal(){
    modal.showModal()
    modal.classList.add('fade')
}

btnFechar.onclick = function(){
    modal.classList.remove('fade')
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
        case 9:
            modalImg.src = txtProce09[0]
            modalTitle.innerHTML = txtProce09[1]
            modalText.innerHTML = txtProce09[2]
            break
        case 10:
            modalImg.src = txtProce10[0]
            modalTitle.innerHTML = txtProce10[1]
            modalText.innerHTML = txtProce10[2]
            break
        case 11:
            modalImg.src = txtProce11[0]
            modalTitle.innerHTML = txtProce11[1]
            modalText.innerHTML = txtProce11[2]
            break
        case 12:
            modalImg.src = txtProce12[0]
            modalTitle.innerHTML = txtProce12[1]
            modalText.innerHTML = txtProce12[2]
            break    
        default:
            break          
    }
    
    abrirModal()
}



