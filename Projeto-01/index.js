function iniciarContagem() {

    tempo = setInterval(function() {

        let cronometro = document.getElementById('contagem').innerHTML;
        let contagemRegressiva = parseInt(cronometro) - 1;

        if (contagemRegressiva === 0) {

            document.getElementById('contagem').innerHTML = `
            
                <p> Passando para lembrá-lo que eu te amo! </p> <br>
                <p> Seja sempre a pessoa cativante que é. Assim, você conquista o mundo. </p>
            `;
            
            pararContagem();
        }

        else {

            document.getElementById('contagem').innerHTML = contagemRegressiva;
        }
    }, 1000)
}

function pararContagem () {
    clearInterval(tempo);
}