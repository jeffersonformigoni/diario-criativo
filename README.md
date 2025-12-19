# 📖 Meu Diário Criativo

Um site pessoal moderno e bonito para compartilhar poemas, músicas, fotos, livros, playlists do Spotify e entradas de diário.

## ✨ Funcionalidades

- 📝 **Poemas**: Escreva e compartilhe seus poemas
- 🎵 **Músicas**: Adicione suas músicas favoritas com links
- 📸 **Fotos**: Compartilhe suas fotos favoritas
- 📚 **Livros**: Mantenha uma lista dos seus livros com resenhas
- 🎧 **Playlists Spotify**: Integre suas playlists do Spotify
- 📔 **Diário**: Escreva entradas pessoais do seu dia a dia
- 🌙 **Tema Escuro/Claro**: Alternância entre temas
- 💾 **Armazenamento Local**: Todos os dados são salvos no navegador

## 🚀 Como Usar Localmente

1. Abra o arquivo `index.html` no seu navegador
2. Pronto! O site está funcionando

## 🌐 Como Colocar Online de Graça

Existem várias opções gratuitas para hospedar este site:

### Opção 1: GitHub Pages (Recomendado - Mais Fácil)

1. Crie uma conta no [GitHub](https://github.com) (se não tiver)
2. Crie um novo repositório (pode ser privado ou público)
3. Faça upload dos arquivos (`index.html`, `styles.css`, `script.js`)
4. Vá em **Settings** → **Pages**
5. Selecione a branch `main` e a pasta `/root`
6. Clique em **Save**
7. Seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repositorio`

**Vantagens**: Totalmente gratuito, fácil de usar, HTTPS automático

### Opção 2: Netlify (Muito Fácil - Arrastar e Soltar)

1. Acesse [Netlify](https://www.netlify.com)
2. Crie uma conta gratuita
3. Arraste a pasta do projeto para a área de deploy
4. Pronto! Seu site estará online em segundos

**Vantagens**: Deploy instantâneo, HTTPS automático, URL personalizada

### Opção 3: Vercel (Rápido e Moderno)

1. Acesse [Vercel](https://vercel.com)
2. Crie uma conta gratuita
3. Conecte com GitHub ou faça upload direto
4. Deploy automático!

**Vantagens**: Muito rápido, HTTPS automático, fácil de usar

### Opção 4: Firebase Hosting (Google)

1. Acesse [Firebase](https://firebase.google.com)
2. Crie um projeto
3. Instale o Firebase CLI: `npm install -g firebase-tools`
4. Execute: `firebase init hosting`
5. Execute: `firebase deploy`

**Vantagens**: Infraestrutura do Google, muito confiável

## 📱 Como Adicionar Playlist do Spotify

1. Abra sua playlist no Spotify
2. Clique nos três pontos (...)
3. Selecione "Compartilhar" → "Copiar link da playlist"
4. Cole o link no campo do formulário (o site extrai o ID automaticamente)
5. Ou copie apenas o ID que aparece após "playlist/" no link

Exemplo de link: `https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M`
O ID seria: `37i9dQZF1DXcBWIGoYBM5M`

## 💡 Dicas

- **Fotos**: Você pode usar URLs de imagens da internet ou fazer upload para serviços gratuitos como [Imgur](https://imgur.com) ou [ImgBB](https://imgbb.com)
- **Livros**: Para capas de livros, você pode usar o Google Imagens ou sites como [Goodreads](https://www.goodreads.com)
- **Dados**: Todos os dados são salvos no navegador (LocalStorage). Se limpar o cache, os dados serão perdidos. Para backup, você pode exportar os dados do LocalStorage manualmente.

## 🎨 Personalização

Você pode personalizar as cores editando as classes do Tailwind no arquivo `index.html`. As cores principais são:
- Poemas: `purple-600`
- Músicas: `pink-600`
- Fotos: `indigo-600`
- Livros: `rose-600`
- Playlists: `cyan-600`
- Diário: `amber-600`

## 📝 Nota Importante

Este site salva todos os dados no navegador local (LocalStorage). Isso significa que:
- ✅ Funciona offline
- ✅ Não precisa de servidor ou banco de dados
- ⚠️ Os dados são específicos do navegador e dispositivo
- ⚠️ Se limpar o cache do navegador, os dados serão perdidos

Para uma solução mais permanente, você poderia integrar com um serviço de backend no futuro, mas para começar, esta solução é perfeita e totalmente gratuita!

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Tailwind CSS via CDN)
- JavaScript (Vanilla)
- Font Awesome (ícones)
- LocalStorage (armazenamento)

## 📄 Licença

Este projeto é livre para uso pessoal.

---

Feito com ❤️ para você!

