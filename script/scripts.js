async function abrirPastas() {

    // Obter o diretório
    const dir = window.require('electron').remote.app.getPath('userData');

    // Ler o conteúdo do diretório
    fs.readdir(dir, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    // Listar os arquivos
    const ul = document.getElementById('arquivos');
    files.forEach(file => {
        const li = document.createElement('li');
        li.textContent = file;
        ul.appendChild(li);
    });
    });
}