/* Mostrar hora local del país y Tomando como referencia a Santiago de Chile, buscar las diferencias horarias con las 
demás ciudades. Utilizando setInterval(), mostrar la hr cambiando cada segundo en vivo... Al cargarla, solo se 
debería mostrar el primer “reloj”, correspondiente a Santiago. Cada zona horaria después de Santiago, se 
mostrará paulatinamente cada 4 segundos, Para lograrlo, tendrás que usar el método setTimeout() */

function formatoDato(valor) {
    if (valor < 10) {
        return "0" + valor
    } return valor;
}


const mostrar = (pais, horas) => {

    let fecha = new Date();
    let hora = formatoDato(fecha.getHours());
    let minutos = formatoDato(fecha.getMinutes());
    let segundos = formatoDato(fecha.getSeconds());

    document.getElementById(pais).innerText = `${parseInt(hora) + parseInt(horas)}:${minutos}:${segundos}`;
}


const paises = () => {
    setInterval(() => {
        mostrar('santiago', 0)
    })

    let array = [{ name: 'paris', hora: -18 }, { name: 'londres', hora: -19 }, { name: 'nuevaYork', hora: 0 }, { name: 'sanPetersburgo', hora: -17 }, { name: 'beijing', hora: -12 }, { name: 'seul', hora: -11 }]
    array.forEach((pais, index) => {

        let { name, hora } = pais
        console.log(name, hora)

        setTimeout(() => {
            setInterval(() => {
                mostrar(name, hora)
            });

        }, (index + 1) * 4000)
    })
}

paises()