export function SecondsToDate(sec) {

    const data = new Date(sec * 1000);

    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    // Formate a data e hora como desejar, por exemplo: DD/MM/AAAA HH:MM:SS
    const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;

    return dataFormatada;
}
