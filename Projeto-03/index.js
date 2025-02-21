function buscarCEP () {
    let input = document.getElementById('cep').value.trim();

    if(input.length !== 8 || isNaN(input)) {
        alert("Número de caractéres inválido! Insira 8 números.");
        limparCampos();
        return;

    /* .trim()          -----> Remove espaços em branco do início e do final de uma string. */
    /* isNaN(input)     -----> Verifica se o valor fornecido em input não é um número. */
    /* return           -----> Interrompe a execução da função. */

    }

    const ajax = new XMLHttpRequest();
    ajax.open('GET',`https://viacep.com.br/ws/${input}/json/`); 
    ajax.send();

    /* XMLHttpRequest   -----> Objeto que permite a criação de requisições HTTP assíncronas para comunicação com servidores remotos. */
    /* open             -----> Método que inicializa uma nova requisição HTTP, definindo o tipo de requisição e a URL do recurso. */
    /* send             -----> Método que envia a requisição para o servidor após ser configurada com o método `open`. */

    ajax.onload = function() {

        let objeto = JSON.parse(this.responseText);

        if(objeto.erro) {
            alert("CEP não encontrado! Tente novamente.");
            limparCampos();
            return;
        }

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