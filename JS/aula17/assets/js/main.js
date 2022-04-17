function escopo() {
    /* 
    const horaAtual = document.querySelector(".data-atual");
    const data = new Date();

    function exibeDataAtual(data) {
        const diaSemana = data.getDay();
        const dia = data.getDate();
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();
        const hora = data.getHours();
        const min = data.getMinutes();
        const seg = data.getSeconds();

        let textoDiaSemana;

        switch (diaSemana) {
            case 0:
                textoDiaSemana = "Domingo";
                break;
            case 1:
                textoDiaSemana = "Segunda";
                break;
            case 2:
                textoDiaSemana = "Terça";
                break;
            case 3:
                textoDiaSemana = "Quarta";
                break;
            case 4:
                textoDiaSemana = "Quinta";
                break;
            case 5:
                textoDiaSemana = "Sexta";
                break;
            case 6:
                textoDiaSemana = "Sexta";
                break;
            default:
                ""
                break;
        }
        return `${textoDiaSemana}, ${dia > 10 ? dia : `0${dia}`}/${mes > 10 ? mes : `0${mes}`}/${ano} ` +
            `${hora > 10 ? hora : `0${hora}`}:${min > 10 ? min : `0${min}`}:${seg > 10 ? seg : `0${seg}`}`;
    }
    horaAtual.innerHTML = `${exibeDataAtual(data)}`; 
    */

    const horaAtual = document.querySelector(".data-atual");
    const data = new Date();
    horaAtual.innerHTML = `${data.toLocaleDateString('pt-BR', { dateStyle: "full" })} ${data.toLocaleTimeString('pt-BR', { timeStyle: 'short' })}`;
}
escopo();