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
1. Clone o repositório para o seu computador: `git clone https://github.com/seu-usuario/projeto-botao-acessibilidade.git`
2. Acesse a pasta do projeto: `cd projeto-botao-acessibilidade`
3. Abra o arquivo `index.html` em um navegador de sua preferência.

## Como contribuir

Para contribuir com o projeto, você pode:

- Reportar bugs e sugerir melhorias através da aba de issues do GitHub.
- Fazer um fork do repositório e enviar um pull request com suas alterações.
- Compartilhar o projeto com outras pessoas interessadas em acessibilidade digital.

## Licença

O projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
