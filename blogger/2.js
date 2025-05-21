function gerarAleatorio() {
    const caracteres = 'aejostuy0123456789';
    const comprimento = 10;
    let resultado = '';
    for (let i = 0; i < comprimento; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres.charAt(indice);
    }
    resultado += '-anime';
    document.getElementById('output').textContent = resultado;
}

function copiarTexto() {
    const texto = document.getElementById('output').textContent;
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}
