function escopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado")

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = form.querySelector("#peso");
        const altura = form.querySelector("#altura");

        const imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));
        console.log(imc);

        if (imc < 18.5) {
            resultado.innerHTML = `<p style="background: red">IMC: ${imc.toFixed(2)} (Abaixo do peso)</p>`;
        } else if(imc >= 18.5 && imc < 25) {
            resultado.innerHTML = `<p style="background: green">IMC: ${imc.toFixed(2)} (Peso normal)</p>`;
        } else if(imc >= 25 && imc < 30) {
            resultado.innerHTML = `<p style="background: yellow">IMC: ${imc.toFixed(2)} (Sobrepeso)</p>`;
        } else if(imc >= 30 && imc < 35) {
            resultado.innerHTML = `<p style="background: red">IMC: ${imc.toFixed(2)} (Obesidade grau 1)</p>`;
        } else if(imc >= 35 && imc < 40) {
            resultado.innerHTML = `<p style="background: red">IMC: ${imc.toFixed(2)} (Obesidade grau 2)</p>`;
        } else {
            resultado.innerHTML = `<p style="background: red">IMC: ${imc.toFixed(2)} (Obesidade grau 3)</p>`;
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}

escopo();