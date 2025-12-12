# **Botão de Acessibilidade para Portal Modelo (e-MAG)**

Este projeto tem como objetivo oferecer uma solução de acessibilidade robusta e fácil de instalar para o **Portal Modelo** (sistema CMS utilizado por diversos órgãos públicos no Brasil). O widget flutuante permite ao cidadão controlar contraste, tamanho da fonte e ativar recursos de leitura de tela, garantindo a inclusão digital e conformidade com as diretrizes do **e-MAG** (Modelo de Acessibilidade em Governo Eletrônico).

**Atualização Importante:** Esta versão do código corrige falhas de layout onde o botão sumia ao ativar o "Contraste Negativo" e garante que o menu flutuante fique sempre visível acima de outros elementos do site.

## **🚀 Tecnologias utilizadas**

* **HTML5 & CSS3:** Estrutura e estilo moderno.  
* **JavaScript (Vanilla):** Código leve, sem necessidade de bibliotecas externas.  
* **Font Awesome:** Ícones intuitivos para navegação.  
* **Bootstrap:** Compatível com a estrutura padrão do Portal Modelo.

## **📦 Como instalar (Passo a Passo Ilustrado)**

Siga este tutorial visual para implementar o botão no seu portal em poucos minutos.

### **1\. Acesso ao Painel**

Acesse o portal utilizando suas credenciais de administrador.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/96b85788-c4d6-4002-87e5-15ca1ae05885)

### **2\. Configuração do Site**

No canto superior direito da tela, clique no nome do usuário e selecione **Configuração do site**.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/ec6de4e2-06bd-4411-89c5-17d2f626978c)

### **3\. Acessar Temas**

Na página de configurações, clique na opção **Tema**.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/0fcb3db5-cce9-4d4e-8127-08f7da5bba54)

### **4\. Backup do Tema Atual (Segurança)**

Na tela de Temas, localize o tema que está em uso e clique em **Download** para salvar uma cópia de segurança no seu computador. Isso permite restaurar o site caso algo dê errado.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/b5a29e61-b16a-4b5d-9c16-6af380519230)

### **5\. Preparar para Edição**

Após baixar, clique no botão **Enviar um arquivo zip** para reenviar o tema que você acabou de baixar (isso cria uma cópia editável) ou selecione um tema existente para editar.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/314b9553-0ba3-4223-83f1-7ce1f64ffc3c)

### **6\. Importar Tema**

Selecione o arquivo zip do seu computador e clique em **Importar**.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/0872505d-b653-4a22-8f92-d900da8d54d9)

### **7\. Acessar o Editor de Código**

Com o tema importado, clique no botão **Modificar Tema** (ou no ícone de pincel/editor) para abrir os arquivos do site.
   
![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/707c1346-be99-41ff-b0c4-b3906b2d84c8)

### **8\. Abrir o arquivo index.html**

No menu lateral esquerdo, localize e clique sobre o arquivo index.html. É aqui que inseriremos o código do botão.

![image](https://github.com/delmardelima/acessibilidade-portal-modelo/assets/27692608/969d5dcd-b3ca-4a5d-a31e-4a9be1d030e3)

### **⚠️ Atenção: Copie e Cole os códigos abaixo com cuidado**

#### **Passo A: Adicionar o Estilo (CSS)**

Role o código até encontrar a tag de fechamento `</head>`. **Imediatamente ANTES** dela, cole o seguinte bloco:

```html
<link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css)">
<style>
    /* Container do Widget - Fixo e acima de tudo */
    .acessibilidade-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 2147483647;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        filter: none !important;
    }

    /* Botão Flutuante */
    .button-access {
        background-color: #3288F2;
        border: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: transform 0.2s, background-color 0.2s;
    }
    .button-access:hover { transform: scale(1.1); background-color: #1c75e2; }
    .button-access .fa { font-size: 30px; }

    /* Menu de Opções */
    .dropdown {
        display: none;
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0;
        margin-bottom: 15px;
        width: 220px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        overflow: hidden;
    }
      
    @media (min-width: 768px) {
        .acessibilidade-container:hover .dropdown { display: block; }
    }

    .dropdown a {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        text-decoration: none;
        color: #333;
        cursor: pointer;
        border-bottom: 1px solid #e0e0e0;
        background: #fff;
        transition: background 0.2s;
        font-family: Arial, sans-serif;
        font-size: 14px;
    }
    .dropdown a:hover { background-color: #e6e6e6; }
    .dropdown a:last-child { border-bottom: none; }
    .dropdown i { width: 25px; text-align: center; margin-right: 10px; color: #3288F2; }
    #menu-title { background-color: #3288F2; color: white; padding: 10px; font-weight: bold; text-align: center; }

    /* Classes de Efeito (Não altere) */
    .acessibilidade-grayscale { filter: grayscale(100%) !important; }
    .acessibilidade-contrast { filter: contrast(200%) !important; }
    .acessibilidade-negative { filter: invert(100%) !important; background-color: #fff; }
    .acessibilidade-light-mode { background-color: #FFF !important; color: #000 !important; }
    .acessibilidade-light-mode * { background-color: #FFF !important; color: #000 !important; border-color: #000 !important; }
    .acessibilidade-underline a { text-decoration: underline !important; }
    .acessibilidade-font { font-family: Arial, Helvetica, sans-serif !important; line-height: 1.5 !important; letter-spacing: 0.5px !important; }
</style>
```

#### **Passo B: Adicionar a Funcionalidade (HTML/JS)**

Agora, role até o final do arquivo e encontre a tag de fechamento `</body>`. **Imediatamente ANTES** dela, cole este bloco:

```html
<div class="acessibilidade-container" id="acessibilidade-wrapper">
    <div class="dropdown" id="menu-options">
        <div id="menu-title">Acessibilidade</div>
        <a onclick="increaseText()"><i class="fas fa-text-height"></i> Aumentar texto</a>
        <a onclick="decreaseText()"><i class="fas fa-text-height"></i> Diminuir texto</a>
        <a onclick="resetText()"><i class="fas fa-sync-alt"></i> Redefinir texto</a>
        <a onclick="toggleReadableFont()"><i class="fas fa-font"></i> Fonte legível</a>
        <a onclick="tornarSiteCinza()"><i class="fas fa-barcode"></i> Escala de cinza</a>
        <a onclick="toggleContrast()"><i class="fas fa-adjust"></i> Alto Contraste</a>
        <a onclick="toggleNegative()"><i class="fas fa-eye"></i> Contraste Negativo</a>
        <a onclick="toggleLight()"><i class="fas fa-sun"></i> Fundo claro</a>
        <a onclick="toggleUnderline()"><i class="fas fa-underline"></i> Sublinhar Links</a>
        <a onclick="leitordeTela()"><i class="fas fa-volume-up"></i> Leitor de tela</a>
        <a onclick="resetSettings()"><i class="fas fa-trash-restore"></i> Redefinir Tudo</a>
    </div>
    <button class="button-access" id="menu-button" aria-label="Abrir menu de acessibilidade">
        <i class="fa fa-wheelchair"></i>
    </button>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // 1. Configuração Inicial e Proteção
    var container = document.getElementById("acessibilidade-wrapper");
    if (container && container.parentNode !== document.body) {
        document.body.appendChild(container); // Move para o final para evitar conflitos
    }

    // 2. Controle do Menu (Mobile/Desktop)
    var btn = document.getElementById("menu-button");
    var menu = document.getElementById("menu-options");
    var visible = false;

    btn.addEventListener("click", function(e) {
        e.stopPropagation();
        visible = !visible;
        menu.style.display = visible ? "block" : "";
    });

    document.addEventListener("click", function(e) {
        if (visible && !container.contains(e.target)) {
            menu.style.display = "";
            visible = false;
        }
    });

    // 3. Funções de Acessibilidade
    function getElements() {
        // Seleciona todo o site exceto o widget de acessibilidade
        return document.querySelectorAll('body > *:not(#acessibilidade-wrapper):not(script):not(style)');
    }

    var fontSize = 100;

    window.toggleFilter = function(cls) {
        var els = getElements();
        if (cls === 'acessibilidade-negative') {
            els.forEach(el => el.classList.remove('acessibilidade-grayscale', 'acessibilidade-contrast'));
            var active = false;
            els.forEach(el => active = el.classList.toggle(cls));
            document.body.style.backgroundColor = active ? '#000' : '';
        } else {
            els.forEach(el => el.classList.remove('acessibilidade-negative'));
            document.body.style.backgroundColor = '';
            if(cls === 'acessibilidade-grayscale') els.forEach(el => el.classList.remove('acessibilidade-contrast'));
            if(cls === 'acessibilidade-contrast') els.forEach(el => el.classList.remove('acessibilidade-grayscale'));
            els.forEach(el => el.classList.toggle(cls));
        }
    };

    window.toggleEffect = function(cls) {
        getElements().forEach(el => el.classList.toggle(cls));
    };

    window.fontManager = function(action) {
        if (action === 'increase') fontSize += 10;
        if (action === 'decrease') fontSize -= 10;
        if (action === 'reset') fontSize = 100;
        if (fontSize < 70) fontSize = 70;
        if (fontSize > 200) fontSize = 200;
        document.body.style.fontSize = fontSize + "%";
        var icon = document.querySelector('.button-access');
        if(icon) icon.style.fontSize = "16px";
    };

    window.leitordeTela = function() {
        window.speechSynthesis.cancel();
        var text = document.body.innerText;
        var utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'pt-BR';
        window.speechSynthesis.speak(utter);
    };

    window.resetSettings = function() {
        getElements().forEach(el => {
            el.classList.remove('acessibilidade-grayscale', 'acessibilidade-contrast', 'acessibilidade-negative', 
            'acessibilidade-light-mode', 'acessibilidade-underline', 'acessibilidade-font');
        });
        document.body.style.backgroundColor = '';
        document.body.style.fontSize = '';
        fontSize = 100;
        window.speechSynthesis.cancel();
    };

    // Mapeamento Global
    window.tornarSiteCinza = function() { toggleFilter('acessibilidade-grayscale'); };
    window.toggleContrast = function() { toggleFilter('acessibilidade-contrast'); };
    window.toggleNegative = function() { toggleFilter('acessibilidade-negative'); };
    window.toggleLight = function() { toggleEffect('acessibilidade-light-mode'); };
    window.toggleUnderline = function() { toggleEffect('acessibilidade-underline'); };
    window.toggleReadableFont = function() { toggleEffect('acessibilidade-font'); };
    window.increaseText = function() { fontManager('increase'); };
    window.decreaseText = function() { fontManager('decrease'); };
    window.resetText = function() { fontManager('reset'); };
});
</script>
```

# **Instalação Rápida (Via CDN)**

Para instalar o Botão de Acessibilidade no seu site, você **não precisa baixar nada**. Basta copiar a linha de código abaixo e colar antes do fechamento da tag \</body\> do seu site.

Copie e cole este código:

```html
<script src="https://cdn.jsdelivr.net/gh/delmardelima/acessibilidade-portal-modelo@main/acessibilidade.js"></script>
```

### **Vantagens deste método:**

* **Instalação em segundos:** Apenas uma linha de código.  
* **Atualização automática:** Se lançarmos melhorias, seu site recebe automaticamente.  
* **Sem conflitos:** O script cria seu próprio CSS e HTML de forma isolada.

### **9\. Salvar e Ativar**

Após colar os códigos, clique no botão **Salvar** (ícone de disquete ou botão verde) localizado no canto superior da tela.

Em seguida, clique em **Voltar ao Painel de Controle**, selecione o seu tema modificado e clique em **Ativar**.

### **10\. Resultado Final**

Pronto\! Seu portal agora possui um botão de acessibilidade flutuante e funcional, que não atrapalha o layout e ajuda todos os cidadãos.

## **🤝 Como contribuir**

Este é um projeto colaborativo. Sinta-se à vontade para:

* Reportar bugs na aba **Issues**.  
* Fazer um **Fork** e enviar melhorias via **Pull Request**.  
* Compartilhar com outros gestores de portais públicos.

## **📞 Suporte**

Dúvidas na implementação?

* **WhatsApp:** [Clique aqui para conversar](https://wa.me/5597991442486)

## **💰 Doação**

Ajude a manter o projeto ativo:

* **PIX (Email):** delmar.apui@gmail.com  
* **PIX (Celular):** (97) 99144-2486

## **🌐 Redes Sociais**

* [YouTube](https://bit.ly/SeguirCortesDev)  
* [Instagram](https://www.instagram.com/cortesdevoficial/)  
* [Facebook](https://www.fb.com/cortesdevoficial)

## **📄 Licença**

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
