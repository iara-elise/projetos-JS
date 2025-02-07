function calcular(event) {

    event.preventDefault();

    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;


    let imc = peso / Math.pow(altura, 2);

    if (nome == ""|| altura == "" || peso == "") {
        
        resultado.innerHTML = "Preencha todos os campos corretamente!"
        resultado.style.color = "red";
    }
    else {

        resultado.style.color = "black";

        if (imc < 18.5) {
            document.getElementById('resultado').innerHTML = `
    
            Resultado: ${imc.toFixed(2)} <br>
             ${nome}, você está abaixo do peso!
    
            `;
        }
        else if (imc <= 24.0) {
            document.getElementById('resultado').innerHTML = `
    
            Resultado: ${imc.toFixed(2)} <br>
            ${nome}, seu peso está normal!
    
            `;
        }
        else if (imc <= 29.9) {
            document.getElementById('resultado').innerHTML = `
    
            Resultado: ${imc.toFixed(2)} <br>
            ${nome}, você está com sobrepeso!
    
            `;
        }
        else if (imc <= 34.9) {
            document.getElementById('resultado').innerHTML = `
    
            Resultado: ${imc.toFixed(2)} <br>
            ${nome}, você está com obesidade grau I!
    
            `;
        }
        else if (imc <= 39.9) {
            document.getElementById('resultado').innerHTML = `
    
            Resultado: ${imc.toFixed(2)} <br>
            ${nome}, você está com obesesidade grau II!
    
            `;
        }
        else {
            document.getElementById('resultado').innerHTML = `
    
            Resultado: ${imc.toFixed(2)} <br>
            ${nome}, você está com obesidade grau III!
    
            `;
        }

    }

}