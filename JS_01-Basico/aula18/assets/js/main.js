function escopo() {
    const container = document.querySelector(".container");
    const div = document.createElement("div");

    const elementos = [
        { tag: 'p', texto: 'primeira frase' },
        { tag: 'div', texto: 'segunda frase' },
        { tag: 'footer', texto: 'terceira frase' },
        { tag: 'section', texto: 'quarta frase' },
    ]

    for (let i = 0; i < elementos.length; i++) {
        let { tag, texto } = elementos[i];
        let tagCriada = document.createElement(tag);
        let textoCriado = document.createTextNode(texto);

        tagCriada.appendChild(textoCriado);
        div.appendChild(tagCriada);
    }
    container.appendChild(div);
}

escopo();