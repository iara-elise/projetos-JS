function buscarCEP () {
    let input = document.getElementById('cep').value;
    
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/' );
    ajax.send();

    ajax.onload = function() {

        let objeto = JSON.parse(this.responseText);

        document.getElementById('rua').value = objeto.logradouro;
        document.getElementById('bairro').value = objeto.bairro;
        document.getElementById('cidade').value = objeto.localidade;
        document.getElementById('estado').value = objeto.uf;

    }
}

function alerta() {
    alert("Não é possível preencher o campo. Insira o CEP e as informações aparecerão automaticamente.")
}

function limparCampos() {
    document.getElementById('cep').value = "";
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}




/* XMLHttpRequest   -----> Método que possibilita uma requisição a um site de forma remota. */
/* open             -----> Método que pega infomações do site que for passado como parâmetro. */
/* send             -----> Envia a solicitação. */

