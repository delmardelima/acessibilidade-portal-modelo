# Projeto Botão de Acessibilidade Portal Modelo

Este projeto tem como objetivo desenvolver um botão de acessibilidade para o portal modelo, um sistema de gerenciamento de conteúdo utilizado por diversos órgãos públicos no Brasil. O botão de acessibilidade permite ao usuário alterar o contraste, o tamanho da fonte e o idioma da página, além de oferecer atalhos de navegação e recursos de leitura de tela. O projeto segue as diretrizes do e-MAG (Modelo de Acessibilidade em Governo Eletrônico), que visa garantir a inclusão digital das pessoas com deficiência.

## Tecnologias utilizadas

O projeto utiliza as seguintes tecnologias:

- HTML5
- CSS3
- JavaScript
- Bootstrap

## Como instalar

Para instalar o botão, siga os seguintes passos:
1. Acesse o portal utilizando suas credenciais de administrador.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/96b85788-c4d6-4002-87e5-15ca1ae05885)

2. No canto superior direito da tela, selecione o nome do usuário e, em seguida, clique em Configuração do site.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/ec6de4e2-06bd-4411-89c5-17d2f626978c)

3. Na página Configuração do site, selecione a opção Tema.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/0fcb3db5-cce9-4d4e-8127-08f7da5bba54)

4. Na tela de Configuração de Tema, selecione um tema de sua preferência e clique em Download.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/b5a29e61-b16a-4b5d-9c16-6af380519230)

5. Após selecionar o tema e fazer o download, clique em Enviar um arquivo zip.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/314b9553-0ba3-4223-83f1-7ce1f64ffc3c)

6. Na tela de Enviar um arquivo zip, selecione o arquivo que você baixou e clique em Importar.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/0872505d-b653-4a22-8f92-d900da8d54d9)

7. Agora você pode personalizar o tema para incluir o HTML, CSS e JavaScript do botão.
   
![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/707c1346-be99-41ff-b0c4-b3906b2d84c8)

8. No editor do tema, abra o arquivo index.html localizado no lado esquerdo, na seção de navegação da pasta do tema.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/969d5dcd-b3ca-4a5d-a31e-4a9be1d030e3)

9. Para personalizar o seu tema com o botão de acessibilidade, você deve encontrar a tag </head> no inicio do arquivo index.html e adicionar o seguinte CSS:

```
    <style>
    /* Define o estilo do botão */
    .button {
        background-color: #3288F2;
        /* Cor de fundo */
        border: none;
        /* Sem borda */
        color: white;
        /* Cor do texto */
        padding: 5px;
        /* Espaçamento interno */
        text-align: center;
        /* Alinhamento do texto */
        text-decoration: none;
        /* Sem decoração de texto */
        display: inline-block;
        /* Exibição em bloco */
        font-size: 16px;
        /* Tamanho da fonte */
        margin: 4px 2px;
        /* Margem */
        cursor: pointer;
        /* Cursor */
        position: fixed;
        /* Posição fixa */
        bottom: 20px;
        /* Distância do fundo */
        right: 20px;
        /* Distância da direita */
        border-radius: 50%;
        /* Cantos arredondados */
        width: 60px;
        /* Largura */
        height: 60px;
        /* Altura */
        z-index: 1000;
    }

    /* Define o estilo do ícone */
    .fa {
        font-size: 30px;
    }


    .dropdown {
        display: none;
        position: fixed;
        bottom: 80px;
        right: 20px;
        background-color: #f1f1f1;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        z-index: 1000;
    }

    .dropdown a {
        display: block;
        padding: 5px 10px;
        text-decoration: none;
        color: #333;
    }

    .dropdown a:hover {
        background-color: #ddd;
    }

    #menu-title {
        background-color: #ddd;
        padding: 5px 10px;
        font-weight: bold;
    }

    #menu-options {
        display: none;
    }

    .grayscale {
        filter: grayscale(100%);
    }

    .contrast {
        filter: contrast(200%);
    }

    .negative {
        filter: invert(100%);
    }

    .light {
        background-color: #FFFFFF;
    }

    .underline-links a {
        text-decoration: underline;
    }

    .readable-font {
        font-family: Arial, sans-serif;
        font-size: 18px;
    }
    </style>
</head>
```

10. Após a tag <body>, insira o seguinte código de HTML e JavaScript.

```
    <!-- Define o botão -->
    <button class="button" id="menu-button"><i class="fa fa-wheelchair"></i></button>

    <!-- Define o menu de opções -->
    <div class="dropdown" id="menu-options">
        <div id="menu-title">Ferramentas de acessibilidade</div>
        <a onclick="increaseText()"><i class="fas fa-text-height"></i> Aumentar texto</a>
        <a onclick="resetText()"><i class="fas fa-sync-alt"></i> Redefinir texto</a>
        <a onclick="decreaseText()"><i class="fas fa-text-height"></i> Diminuir texto</a>
        <a onclick="toggleReadableFont()"><i class="fas fa-font"></i> Fonte legível</a>
        <a onclick="tornarSiteCinza()"><i class="fas fa-barcode"></i> Escala de cinza</a>
        <a onclick="toggleContrast()"><i class="fas fa-adjust"></i> Alto Contraste</a>
        <a onclick="toggleNegative()"><i class="fas fa-eye"></i> Contraste Negativo</a>
        <a onclick="toggleLight()"><i class="fas fa-sun"></i> Fundo claro</a>
        <a onclick="toggleUnderline()"><i class="fas fa-underline"></i> Links Sublinhado</a>
        <a onclick="leitordeTela()"><i class="fas fa-volume-up"></i> Leitor de tela</a>
        <a onclick="resetSettings()"><i class="fas fa-sync-alt"></i> Redefinir</a>
    </div>

    <!-- Adiciona o script para exibir o menu de opções -->
    <script>
    // Obtém o botão e o menu de opções
    var button = document.getElementById("menu-button");
    var menu = document.getElementById("menu-options");

    // Adiciona um evento de clique ao botão
    button.addEventListener("click", function() {
        // Verifica se o menu de opções está sendo exibido
        if (menu.style.display === "none") {
            // Exibe o menu de opções
            menu.style.display = "block";
        } else {
            // Oculta o menu de opções
            menu.style.display = "none";
        }
    });

    // Tamanho da fonte padrão
    var defaultFontSize = 100;
    var fontSize = defaultFontSize;

    function increaseText() {
        fontSize += 10;
        document.body.style.fontSize = fontSize + "%";
        localStorage.setItem('fontSize', fontSize);
    }

    function resetText() {
        fontSize = defaultFontSize;
        document.body.style.fontSize = fontSize + "%";
        localStorage.setItem('fontSize', fontSize);
    }

    function decreaseText() {
        fontSize -= 10;
        document.body.style.fontSize = fontSize + "%";
        localStorage.setItem('fontSize', fontSize);
    }

    function tornarSiteCinza() {
        var element = document.body;
        element.classList.toggle("grayscale");
    }

    function toggleContrast() {
        var element = document.body;
        element.classList.toggle("contrast");
    }

    function toggleNegative() {
        var element = document.body;
        element.classList.toggle("negative");
    }

    function toggleLight() {
        var element = document.body;
        element.classList.toggle("light");
    }

    function toggleUnderline() {
        var element = document.body;
        element.classList.toggle("underline-links");
    }

    function toggleReadableFont() {
        var element = document.body;
        element.classList.toggle("readable-font");
    }

    // Função leitordeTela
    function leitordeTela() {
        // Seleciona o elemento principal
        let mainElement = document.getElementById('main-content');

        // Obtém todo o texto dentro do elemento principal
        let text = mainElement.innerText;

        // Divide o texto em palavras
        let words = text.split(' ');

        // Índice da palavra atual
        let currentWordIndex = 0;

        // Função para remover o destaque de todas as palavras
        function removeHighlight() {
            mainElement.innerHTML = mainElement.innerHTML.replace(
                /<span style="border: 1px solid black; background-color: yellow;">(.*?)<\/span>/g, '$1');
        }

        // Função para destacar uma palavra em amarelo
        function highlightWord(word) {
            let innerHTML = mainElement.innerHTML;
            let index = innerHTML.indexOf(word);
            if (index >= 0) {
                innerHTML = innerHTML.substring(0, index) +
                    "<span style='border: 1px solid black; background-color: yellow;'>" + innerHTML.substring(index,
                        index + word.length) + "</span>" + innerHTML.substring(index + word.length);
                mainElement.innerHTML = innerHTML;
            }
        }

        // Função para falar uma palavra e destacá-la
        function speakAndHighlightWord() {
            if (currentWordIndex < words.length) {
                // Remove o destaque das palavras anteriores
                removeHighlight();

                // Destaca as próximas quatro palavras
                for (let i = 0; i < 4; i++) {
                    if (currentWordIndex + i < words.length) {
                        highlightWord(words[currentWordIndex + i]);
                    }
                }

                // Cria uma nova instância de SpeechSynthesisUtterance
                let utterance = new SpeechSynthesisUtterance(words.slice(currentWordIndex, currentWordIndex + 4).join(
                    ' '));

                // Fala as palavras usando a API de síntese de fala
                window.speechSynthesis.speak(utterance);

                // Incrementa o índice da palavra atual
                currentWordIndex += 4;

                // Chama esta função novamente quando as palavras atuais terminarem de ser faladas
                utterance.onend = function(event) {
                    setTimeout(speakAndHighlightWord, 100); // Adiciona um atraso de 100ms
                };
            }
        }

        // Inicia o leitor de tela
        speakAndHighlightWord();
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function toggle(className) {
        var element = document.body;
        var isActive = element.classList.toggle(className);
        setCookie(className, isActive ? 'true' : 'false', 30);
    }

    // Função para redefinir as configurações
    function resetSettings() {
        ['grayscale', 'contrast', 'negative', 'light', 'underline-links', 'readable-font'].forEach(function(className) {
            document.body.classList.remove(className);
            setCookie(className, 'false', 30);
            fontSize = defaultFontSize;
            document.body.style.fontSize = fontSize + "%";
        });
    }

    window.onload = function() {
        ['grayscale', 'contrast', 'negative', 'light', 'underline-links', 'readable-font'].forEach(function(
            className) {
            if (getCookie(className) === 'true') {
                document.body.classList.add(className);
            }
        });
    }
    </script>
```

11. Após inserir os códigos, clique em Salvar.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/f4c9977a-88b2-4358-a92e-4469dae95c9b)

12. Após salvar o arquivo index.html com as modificações desejadas, clique em Voltar ao Painel de Controle no canto superior esquerdo da página de edição de código.

13. Na página Configuração de Tema, selecione o tema modificado e clique em Ativar.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/b48ccd9a-27ea-4d98-ad42-ac66e33613f0)

14. Pronto! Agora você pode acessar o site e ver as mudanças que você fez no tema. Você pode testar o site em diferentes dispositivos e navegadores para garantir que ele esteja funcionando corretamente.

## Como contribuir

Para contribuir com o projeto, você pode:

- Reportar bugs e sugerir melhorias através da aba de issues do GitHub.
- Fazer um fork do repositório e enviar um pull request com suas alterações.
- Compartilhar o projeto com outras pessoas interessadas em acessibilidade digital.

## Licença

O projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
