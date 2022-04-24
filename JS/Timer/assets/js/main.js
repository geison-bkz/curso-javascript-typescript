function timer() {
    const relogio = document.querySelector(".relogio");

    let segundos = 0;
    let timer;

    function addSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = addSegundos(segundos);
        }, 1000);
    }

    document.addEventListener("click", function (e) {
        const el = e.target;

        if (el.classList.contains("iniciar")) {
            relogio.classList.remove("pausado");
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains("pausar")) {
            clearInterval(timer);
            relogio.classList.add("pausado");
        }

        if (el.classList.contains("zerar")) {
            relogio.classList.remove("pausado");
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = "00:00:00";
        }
    });
}
timer();