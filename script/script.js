// Função para abrir uma pasta local
async function abrirPasta() {
    try {
        // Solicitar permissão ao usuário para acessar o sistema de arquivos
        const handle = await window.showDirectoryPicker();
        
        // Iterar sobre os arquivos e diretórios dentro da pasta
        await listarArquivos(handle);
    } catch (error) {
        console.error('Erro ao abrir pasta:', error);
    }
}

async function listarArquivos(handle) {
    // Limpar a lista de arquivos antes de adicioná-los novamente
    const listaArquivos = document.getElementById('listaArquivos');
    listaArquivos.innerHTML = '';
    
    // Query para obter os arquivos e diretórios dentro da pasta
    const entries = await handle.query().values();
    
    // Verificar se há arquivos na pasta
    if (!entries || entries.length === 0) {
        console.error('Nenhum arquivo encontrado.');
        return;
    }
    
    // Iterar sobre os arquivos e adicionar à lista
    for (const entry of entries) {
        // Verificar se é um arquivo
        if (entry.isFile) {
            // Adicionar o nome do arquivo à lista
            const nomeArquivo = entry.name;
            const itemLista = document.createElement('li');
            itemLista.textContent = nomeArquivo;
            listaArquivos.appendChild(itemLista);
        }
    }
}