# **Botão de Acessibilidade para Portal Modelo (e-MAG)**

Este projeto tem como objetivo oferecer uma solução de acessibilidade robusta, profissional e extremamente fácil de instalar para o **Portal Modelo** (sistema CMS utilizado por diversos órgãos públicos no Brasil).

O widget flutuante permite ao cidadão controlar contraste, tamanho da fonte e ativar recursos de leitura de tela, garantindo a inclusão digital e conformidade com as diretrizes do **e-MAG** (Modelo de Acessibilidade em Governo Eletrônico).

**🚀 Atualização:** Agora a instalação é feita via **CDN**, garantindo que você receba correções de segurança e melhorias automaticamente, sem precisar editar códigos complexos.

## **🛠 Tecnologias utilizadas**

* **HTML5 & CSS3:** Estrutura e estilo moderno.  
* **JavaScript (Vanilla):** Código leve, sem necessidade de bibliotecas externas.  
* **Font Awesome:** Ícones intuitivos para navegação.  
* **Bootstrap:** Compatível com a estrutura padrão do Portal Modelo.

## **👨‍💻 Sobre o Desenvolvedor**

Este projeto foi desenvolvido e é mantido por **Delmar de Lima**.

Acesse o repositório oficial para atualizações e contribuições:  
https://github.com/delmardelima/acessibilidade-portal-modelo

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

### **⚠️ Instalação Simplificada (Via CDN)**

Para instalar, você só precisa colar **uma linha de código**. O script cuidará de criar o visual, os estilos e as funcionalidades automaticamente.

1. Role o arquivo index.html até o final.  
2. Encontre a tag de fechamento </body>.  
3. Cole o código abaixo **imediatamente antes** dessa tag.

```html
<script src="https://cdn.jsdelivr.net/gh/delmardelima/acessibilidade-portal-modelo@main/acessibilidade.js"></script>
```

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
