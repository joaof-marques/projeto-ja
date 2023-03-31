const modal = document.querySelector("dialog")
const btnFechar = document.querySelector("#btnFechar")

const txtProce01 = ['imagens/estudio_generica.jpg','BB Glow', 'Para uma pele radiante e uniforme, <strong>BB Glow</strong>!<br>Este tratamento incrível utiliza um sérum especializado que é injetado na camada superior da pele, fornecendo uma base de maquiagem duradoura e uniforme. É seguro e não invasivo, e não requer tempo de recuperação. É perfeito para pessoas ocupadas que querem melhorar a aparência da pele sem sacrificar o tempo ou o conforto.']
const txtProce02 = ['imagens/estudio_generica.jpg','Bio Placenta', 'Se você está buscando uma solução para melhorar a aparência da sua pele e restaurar sua beleza natural, <strong>Bio Placenta</strong> é a resposta. Este tratamento avançado utiliza ingredientes derivados da placenta para promover a regeneração celular e estimular a produção de colágeno, melhorando a firmeza, a textura e a aparência geral da sua pele.']
const txtProce03 = ['imagens/estudio_generica.jpg','Up Glúteo', 'Se você está buscando um bumbum mais levantado, firme e com uma aparência mais jovem, o <strong>Up Glúteo</strong> é o tratamento que você precisa experimentar!<br><strong>Up Glúteo</strong> é a solução para obter resultados incríveis e duradouros. Este tratamento exclusivo utiliza tecnologia avançada para estimular a produção de colágeno, melhorar a firmeza e tonificar os músculos do bumbum, resultando em um bumbum mais definido e atraente.']
const txtProce04 = ['imagens/estudio_generica.jpg','Plasma Lifting', 'Com o <strong>Plasma Lifting</strong>, você pode obter resultados incríveis sem a necessidade de cirurgia invasiva. Este tratamento utiliza uma tecnologia avançada para estimular o colágeno em sua pele, resultando em uma aparência mais jovem e radiante. <br> Além disso, o <strong>Plasma Lifting</strong> é seguro e eficaz para todos os tipos de pele. Se você está procurando um tratamento não invasivo que possa fornecer resultados duradouros, não procure mais.']
const txtProce05 = ['imagens/estudio_generica.jpg','Hyaluron Pen', 'Deseja aumentar o seu bumbum e deixar ele com uma aparência jovem? Parece um sonho e saber que é possível e totalmente indolor é um pote de ouro.<br>Este tratamento revolucionário utiliza uma caneta de ácido hialurônico para criar um efeito lifting e de aumento no bumbum, sem a necessidade de incisões ou anestesia. <br> O ácido hialurônico injetado na área estimula a produção de colágeno, melhorando a firmeza e a elasticidade da pele. O resultado é um bumbum mais jovem, com uma aparência natural e duradoura. ']
const txtProce06 = ['imagens/estudio_generica.jpg','Peeling', 'Quer ter uma pele mais suave e clara? O <strong>Peeling</strong> pode ser a resposta para você!<br>O <strong>Peeling</strong> é uma técnica segura e eficaz que ajuda a rejuvenescer a sua pele, removendo as camadas superficiais danificadas. O tratamento ajuda a reduzir manchas, rugas, linhas finas e cicatrizes, além de estimular a produção de colágeno para um resultado duradouro.']
const txtProce07 = ['imagens/estudio_generica.jpg','Criolipólise', 'Esse tratamento é para você que já tentou de tudo para se livrar de gorduras localizadas e não surtiu efeito algum. A <strong>Criolipólise</strong> é a solução e você vai amar experimentar!<br>Com a <strong>Criolipólise</strong>, você pode alcançar uma aparência mais tonificada e definida em áreas como a barriga, flancos, culotes, coxas e braços. O tratamento é rápido e sem dor, permitindo que você volte à sua rotina normal logo após a sessão. Em apenas algumas sessões, você pode obter resultados duradouros e transformar sua aparência.']
const txtProce08 = ['imagens/estudio_generica.jpg','Limpeza de Pele', 'A Limpeza de Pele é uma parte importante da sua rotina de cuidados com a pele. Se você quer ter uma aparência mais fresca, saudável e radiante, a <strong>Limpeza de Pele</strong> pode ser o tratamento ideal para você! <br>Com a nossa <strong>Limpeza de Pele</strong> profissional, você pode remover as impurezas, células mortas e excesso de óleo que obstruem os seus poros, resultando em uma aparência mais suave e uniforme. Além disso, a <strong>Limpeza de Pele</strong> também ajuda a prevenir acne, rugas e outros sinais de envelhecimento.']

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
