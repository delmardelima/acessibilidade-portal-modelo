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
![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/340204ee-4e65-4c5c-b098-01d5bb2eb6f3)
2. No canto superior direito da tela, selecione o nome do usuário e, em seguida, clique em Configuração do site.
![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/ac4e7290-b04b-480f-8cc6-a8e0479114e7)
3. Na página Configuração do site, selecione a opção Tema.
![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/625a72ff-d245-42c0-9627-ccc66a7fb1cb)


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
