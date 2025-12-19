// Armazenamento local (LocalStorage)
const storage = {
    save: (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    },
    load: (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeModals();
    initializeTheme();
    loadAllContent();
});

// Sistema de abas
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const contentSections = document.querySelectorAll('.content-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona active ao botão clicado
            button.classList.add('active');

            // Esconde todas as seções
            contentSections.forEach(section => section.classList.add('hidden'));
            // Mostra a seção correspondente
            document.getElementById(targetTab).classList.remove('hidden');
        });
    });
}

// Sistema de modais
function initializeModals() {
    // Botões para abrir modais
    document.getElementById('addPoemaBtn').addEventListener('click', () => openModal('poemaModal'));
    document.getElementById('addMusicaBtn').addEventListener('click', () => openModal('musicaModal'));
    document.getElementById('addFotoBtn').addEventListener('click', () => openModal('fotoModal'));
    document.getElementById('addLivroBtn').addEventListener('click', () => openModal('livroModal'));
    document.getElementById('addPlaylistBtn').addEventListener('click', () => openModal('playlistModal'));
    document.getElementById('addDiarioBtn').addEventListener('click', () => openModal('diarioModal'));

    // Fechar modais
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeBtn.closest('.modal').classList.add('hidden');
        });
    });

    // Fechar ao clicar fora do modal
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });

    // Formulários
    document.getElementById('poemaForm').addEventListener('submit', handlePoemaSubmit);
    document.getElementById('musicaForm').addEventListener('submit', handleMusicaSubmit);
    document.getElementById('fotoForm').addEventListener('submit', handleFotoSubmit);
    document.getElementById('livroForm').addEventListener('submit', handleLivroSubmit);
    document.getElementById('playlistForm').addEventListener('submit', handlePlaylistSubmit);
    document.getElementById('diarioForm').addEventListener('submit', handleDiarioSubmit);
}

function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    // Limpar formulário
    const form = document.getElementById(modalId).querySelector('form');
    if (form) form.reset();
}

// Tema escuro/claro
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const isDark = localStorage.getItem('theme') === 'dark';
    
    if (isDark) {
        document.body.classList.add('dark');
        themeToggle.querySelector('i').classList.remove('fa-moon');
        themeToggle.querySelector('i').classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDarkNow = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
        
        const icon = themeToggle.querySelector('i');
        if (isDarkNow) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Handlers de formulários
function handlePoemaSubmit(e) {
    e.preventDefault();
    const titulo = document.getElementById('poemaTitulo').value;
    const texto = document.getElementById('poemaTexto').value;
    
    const poema = {
        id: Date.now(),
        titulo,
        texto,
        data: new Date().toLocaleDateString('pt-BR')
    };
    
    const poemas = storage.load('poemas');
    poemas.push(poema);
    storage.save('poemas', poemas);
    
    renderPoemas();
    closeModal('poemaModal');
}

function handleMusicaSubmit(e) {
    e.preventDefault();
    const nome = document.getElementById('musicaNome').value;
    const artista = document.getElementById('musicaArtista').value;
    const link = document.getElementById('musicaLink').value;
    const notas = document.getElementById('musicaNotas').value;
    
    const musica = {
        id: Date.now(),
        nome,
        artista,
        link,
        notas,
        data: new Date().toLocaleDateString('pt-BR')
    };
    
    const musicas = storage.load('musicas');
    musicas.push(musica);
    storage.save('musicas', musicas);
    
    renderMusicas();
    closeModal('musicaModal');
}

function handleFotoSubmit(e) {
    e.preventDefault();
    const titulo = document.getElementById('fotoTitulo').value;
    const url = document.getElementById('fotoUrl').value;
    const descricao = document.getElementById('fotoDescricao').value;
    
    const foto = {
        id: Date.now(),
        titulo,
        url,
        descricao,
        data: new Date().toLocaleDateString('pt-BR')
    };
    
    const fotos = storage.load('fotos');
    fotos.push(foto);
    storage.save('fotos', fotos);
    
    renderFotos();
    closeModal('fotoModal');
}

function handleLivroSubmit(e) {
    e.preventDefault();
    const titulo = document.getElementById('livroTitulo').value;
    const autor = document.getElementById('livroAutor').value;
    const capa = document.getElementById('livroCapa').value;
    const resenha = document.getElementById('livroResenha').value;
    
    const livro = {
        id: Date.now(),
        titulo,
        autor,
        capa,
        resenha,
        data: new Date().toLocaleDateString('pt-BR')
    };
    
    const livros = storage.load('livros');
    livros.push(livro);
    storage.save('livros', livros);
    
    renderLivros();
    closeModal('livroModal');
}

function handlePlaylistSubmit(e) {
    e.preventDefault();
    const nome = document.getElementById('playlistNome').value;
    let playlistId = document.getElementById('playlistId').value;
    const descricao = document.getElementById('playlistDescricao').value;
    
    // Extrair ID do link se for um link completo
    if (playlistId.includes('spotify.com')) {
        const match = playlistId.match(/playlist\/([a-zA-Z0-9]+)/);
        if (match) playlistId = match[1];
    }
    
    const playlist = {
        id: Date.now(),
        nome,
        playlistId,
        descricao,
        data: new Date().toLocaleDateString('pt-BR')
    };
    
    const playlists = storage.load('playlists');
    playlists.push(playlist);
    storage.save('playlists', playlists);
    
    renderPlaylists();
    closeModal('playlistModal');
}

function handleDiarioSubmit(e) {
    e.preventDefault();
    const titulo = document.getElementById('diarioTitulo').value;
    const texto = document.getElementById('diarioTexto').value;
    
    const entrada = {
        id: Date.now(),
        titulo,
        texto,
        data: new Date().toLocaleDateString('pt-BR'),
        hora: new Date().toLocaleTimeString('pt-BR')
    };
    
    const diario = storage.load('diario');
    diario.unshift(entrada); // Adiciona no início
    storage.save('diario', diario);
    
    renderDiario();
    closeModal('diarioModal');
}

// Renderização de conteúdo
function renderPoemas() {
    const container = document.getElementById('poemasContainer');
    const poemas = storage.load('poemas');
    
    if (poemas.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center col-span-2">Nenhum poema ainda. Adicione seu primeiro poema!</p>';
        return;
    }
    
    container.innerHTML = poemas.map(poema => `
        <div class="content-card fade-in">
            <div class="flex justify-between items-start mb-2">
                <h4 class="text-xl font-bold text-purple-600">${escapeHtml(poema.titulo)}</h4>
                <button onclick="deletePoema(${poema.id})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <p class="text-sm text-gray-500 mb-3">${poema.data}</p>
            <p class="poema-texto text-gray-700">${escapeHtml(poema.texto)}</p>
        </div>
    `).join('');
}

function renderMusicas() {
    const container = document.getElementById('musicasContainer');
    const musicas = storage.load('musicas');
    
    if (musicas.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center col-span-2">Nenhuma música ainda. Adicione suas músicas favoritas!</p>';
        return;
    }
    
    container.innerHTML = musicas.map(musica => `
        <div class="content-card fade-in">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h4 class="text-xl font-bold text-pink-600">${escapeHtml(musica.nome)}</h4>
                    <p class="text-gray-600">${escapeHtml(musica.artista)}</p>
                </div>
                <button onclick="deleteMusica(${musica.id})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <p class="text-sm text-gray-500 mb-3">${musica.data}</p>
            ${musica.link ? `<a href="${musica.link}" target="_blank" class="text-pink-600 hover:underline mb-2 block"><i class="fas fa-external-link-alt mr-1"></i>Ouvir música</a>` : ''}
            ${musica.notas ? `<p class="text-gray-700">${escapeHtml(musica.notas)}</p>` : ''}
        </div>
    `).join('');
}

function renderFotos() {
    const container = document.getElementById('fotosContainer');
    const fotos = storage.load('fotos');
    
    if (fotos.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center col-span-3">Nenhuma foto ainda. Adicione suas fotos!</p>';
        return;
    }
    
    container.innerHTML = fotos.map(foto => `
        <div class="content-card foto-card fade-in">
            <div class="flex justify-between items-start mb-2">
                <h4 class="text-lg font-bold text-indigo-600">${escapeHtml(foto.titulo)}</h4>
                <button onclick="deleteFoto(${foto.id})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <img src="${foto.url}" alt="${escapeHtml(foto.titulo)}" onerror="this.src='https://via.placeholder.com/400x250?text=Imagem+não+encontrada'">
            ${foto.descricao ? `<p class="text-gray-700 mt-3">${escapeHtml(foto.descricao)}</p>` : ''}
            <p class="text-sm text-gray-500 mt-2">${foto.data}</p>
        </div>
    `).join('');
}

function renderLivros() {
    const container = document.getElementById('livrosContainer');
    const livros = storage.load('livros');
    
    if (livros.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center col-span-2">Nenhum livro ainda. Adicione seus livros favoritos!</p>';
        return;
    }
    
    container.innerHTML = livros.map(livro => `
        <div class="content-card fade-in flex gap-4">
            ${livro.capa ? `<img src="${livro.capa}" alt="${escapeHtml(livro.titulo)}" class="w-24 h-32 object-cover rounded" onerror="this.style.display='none'">` : '<div class="w-24 h-32 bg-gray-200 rounded flex items-center justify-center"><i class="fas fa-book text-4xl text-gray-400"></i></div>'}
            <div class="flex-1">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h4 class="text-xl font-bold text-rose-600">${escapeHtml(livro.titulo)}</h4>
                        <p class="text-gray-600">${escapeHtml(livro.autor)}</p>
                    </div>
                    <button onclick="deleteLivro(${livro.id})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <p class="text-sm text-gray-500 mb-2">${livro.data}</p>
                ${livro.resenha ? `<p class="text-gray-700">${escapeHtml(livro.resenha)}</p>` : ''}
            </div>
        </div>
    `).join('');
}

function renderPlaylists() {
    const container = document.getElementById('playlistsContainer');
    const playlists = storage.load('playlists');
    
    if (playlists.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center">Nenhuma playlist ainda. Adicione suas playlists do Spotify!</p>';
        return;
    }
    
    container.innerHTML = playlists.map(playlist => `
        <div class="content-card fade-in">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h4 class="text-xl font-bold text-cyan-600">${escapeHtml(playlist.nome)}</h4>
                    ${playlist.descricao ? `<p class="text-gray-600 mt-1">${escapeHtml(playlist.descricao)}</p>` : ''}
                    <p class="text-sm text-gray-500 mt-2">${playlist.data}</p>
                </div>
                <button onclick="deletePlaylist(${playlist.id})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="spotify-embed">
                <iframe 
                    style="border-radius:12px" 
                    src="https://open.spotify.com/embed/playlist/${playlist.playlistId}?utm_source=generator" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
    `).join('');
}

function renderDiario() {
    const container = document.getElementById('diarioContainer');
    const diario = storage.load('diario');
    
    if (diario.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center">Nenhuma entrada ainda. Comece a escrever seu diário!</p>';
        return;
    }
    
    container.innerHTML = diario.map(entrada => `
        <div class="content-card fade-in">
            <div class="flex justify-between items-start mb-2">
                <h4 class="text-xl font-bold text-amber-600">${escapeHtml(entrada.titulo)}</h4>
                <button onclick="deleteDiario(${entrada.id})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <p class="text-sm text-gray-500 mb-3">${entrada.data} às ${entrada.hora}</p>
            <p class="text-gray-700 whitespace-pre-line">${escapeHtml(entrada.texto)}</p>
        </div>
    `).join('');
}

// Funções de deletar
function deletePoema(id) {
    if (confirm('Tem certeza que deseja excluir este poema?')) {
        const poemas = storage.load('poemas');
        storage.save('poemas', poemas.filter(p => p.id !== id));
        renderPoemas();
    }
}

function deleteMusica(id) {
    if (confirm('Tem certeza que deseja excluir esta música?')) {
        const musicas = storage.load('musicas');
        storage.save('musicas', musicas.filter(m => m.id !== id));
        renderMusicas();
    }
}

function deleteFoto(id) {
    if (confirm('Tem certeza que deseja excluir esta foto?')) {
        const fotos = storage.load('fotos');
        storage.save('fotos', fotos.filter(f => f.id !== id));
        renderFotos();
    }
}

function deleteLivro(id) {
    if (confirm('Tem certeza que deseja excluir este livro?')) {
        const livros = storage.load('livros');
        storage.save('livros', livros.filter(l => l.id !== id));
        renderLivros();
    }
}

function deletePlaylist(id) {
    if (confirm('Tem certeza que deseja excluir esta playlist?')) {
        const playlists = storage.load('playlists');
        storage.save('playlists', playlists.filter(p => p.id !== id));
        renderPlaylists();
    }
}

function deleteDiario(id) {
    if (confirm('Tem certeza que deseja excluir esta entrada do diário?')) {
        const diario = storage.load('diario');
        storage.save('diario', diario.filter(d => d.id !== id));
        renderDiario();
    }
}

// Carregar todo o conteúdo
function loadAllContent() {
    renderPoemas();
    renderMusicas();
    renderFotos();
    renderLivros();
    renderPlaylists();
    renderDiario();
}

// Função auxiliar para escapar HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Tornar funções globais para uso nos event handlers inline
window.deletePoema = deletePoema;
window.deleteMusica = deleteMusica;
window.deleteFoto = deleteFoto;
window.deleteLivro = deleteLivro;
window.deletePlaylist = deletePlaylist;
window.deleteDiario = deleteDiario;

