(function() {
    // =================================================================
    // 1. INJEÇÃO DE DEPENDÊNCIAS (Font Awesome)
    // =================================================================
    if (!document.querySelector('link[href*="font-awesome"]')) {
        var fa = document.createElement('link');
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        fa.rel = 'stylesheet';
        document.head.appendChild(fa);
    }

    // =================================================================
    // 2. INJEÇÃO DE ESTILOS (CSS)
    // =================================================================
    var style = document.createElement('style');
    style.innerHTML = `
        .acessibilidade-container {
            position: fixed; bottom: 20px; right: 20px; z-index: 2147483647;
            display: flex; flex-direction: column; align-items: flex-end;
            filter: none !important; pointer-events: none; /* Permite clicar através do container vazio */
        }
        .acessibilidade-container > * { pointer-events: auto; } /* Reativa cliques nos filhos */
        
        .button-access {
            background-color: #3288F2; border: none; color: white;
            display: flex; justify-content: center; align-items: center;
            font-size: 16px; cursor: pointer; border-radius: 50%;
            width: 60px; height: 60px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: transform 0.2s, background-color 0.2s;
        }
        .button-access:hover { transform: scale(1.1); background-color: #1c75e2; }
        .button-access .fa { font-size: 30px; }
        
        .dropdown-access {
            display: none; background-color: #f1f1f1; border: 1px solid #ccc;
            border-radius: 5px; padding: 0; margin-bottom: 15px; width: 220px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2); overflow: hidden;
        }
        @media (min-width: 768px) {
            .acessibilidade-container:hover .dropdown-access { display: block; }
        }
        .dropdown-access a {
            display: flex; align-items: center; padding: 10px 15px;
            text-decoration: none; color: #333; cursor: pointer;
            border-bottom: 1px solid #e0e0e0; background: #fff;
            transition: background 0.2s; font-family: Arial, sans-serif; font-size: 14px;
        }
        .dropdown-access a:hover { background-color: #e6e6e6; }
        .dropdown-access i { width: 25px; text-align: center; margin-right: 10px; color: #3288F2; }
        #menu-title { background-color: #3288F2; color: white; padding: 10px; font-weight: bold; text-align: center; font-family: sans-serif; }

        /* Classes de Efeito */
        .acessibilidade-grayscale { filter: grayscale(100%) !important; }
        .acessibilidade-contrast { filter: contrast(200%) !important; }
        .acessibilidade-negative { filter: invert(100%) !important; background-color: #fff; }
        .acessibilidade-light-mode { background-color: #FFF !important; color: #000 !important; }
        .acessibilidade-light-mode * { background-color: #FFF !important; color: #000 !important; border-color: #000 !important; }
        .acessibilidade-underline a { text-decoration: underline !important; }
        .acessibilidade-font { font-family: Arial, Helvetica, sans-serif !important; line-height: 1.5 !important; letter-spacing: 0.5px !important; }
    `;
    document.head.appendChild(style);

    // =================================================================
    // 3. INJEÇÃO DE HTML (Widget)
    // =================================================================
    var widgetHTML = `
        <div class="dropdown-access" id="menu-options-access">
            <div id="menu-title">Acessibilidade</div>
            <a id="btn-inc-text"><i class="fas fa-text-height"></i> Aumentar texto</a>
            <a id="btn-dec-text"><i class="fas fa-text-height"></i> Diminuir texto</a>
            <a id="btn-reset-text"><i class="fas fa-sync-alt"></i> Redefinir texto</a>
            <a id="btn-readable"><i class="fas fa-font"></i> Fonte legível</a>
            <a id="btn-gray"><i class="fas fa-barcode"></i> Escala de cinza</a>
            <a id="btn-contrast"><i class="fas fa-adjust"></i> Alto Contraste</a>
            <a id="btn-negative"><i class="fas fa-eye"></i> Contraste Negativo</a>
            <a id="btn-light"><i class="fas fa-sun"></i> Fundo claro</a>
            <a id="btn-underline"><i class="fas fa-underline"></i> Sublinhar Links</a>
            <a id="btn-reader"><i class="fas fa-volume-up"></i> Leitor de tela</a>
            <a id="btn-reset"><i class="fas fa-trash-restore"></i> Redefinir Tudo</a>
        </div>
        <button class="button-access" id="menu-button-access" aria-label="Abrir menu de acessibilidade">
            <i class="fa fa-wheelchair"></i>
        </button>
    `;

    var container = document.createElement('div');
    container.id = 'acessibilidade-wrapper';
    container.className = 'acessibilidade-container';
    container.innerHTML = widgetHTML;
    
    // Garante que carrega após o DOM estar pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(container));
    } else {
        document.body.appendChild(container);
    }

    // =================================================================
    // 4. LÓGICA DO SISTEMA
    // =================================================================
    
    // Aguarda elementos existirem para adicionar eventos
    setTimeout(function() {
        var btn = document.getElementById("menu-button-access");
        var menu = document.getElementById("menu-options-access");
        var visible = false;

        // Controle Mobile/Click
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

        // Funções Auxiliares
        function getElements() {
            return document.querySelectorAll('body > *:not(#acessibilidade-wrapper):not(script):not(style):not(link)');
        }

        var fontSize = 100;

        function toggleFilter(cls) {
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
            saveState();
        }

        function toggleEffect(cls) {
            getElements().forEach(el => el.classList.toggle(cls));
            saveState();
        }

        function fontManager(action) {
            if (action === 'increase') fontSize += 10;
            if (action === 'decrease') fontSize -= 10;
            if (action === 'reset') fontSize = 100;
            if (fontSize < 70) fontSize = 70;
            if (fontSize > 200) fontSize = 200;
            document.body.style.fontSize = fontSize + "%";
            var icon = document.querySelector('.button-access');
            if(icon) icon.style.fontSize = "16px";
            localStorage.setItem('acc_fontSize', fontSize);
        }

        function leitordeTela() {
            window.speechSynthesis.cancel();
            var text = document.body.innerText;
            var utter = new SpeechSynthesisUtterance(text);
            utter.lang = 'pt-BR';
            window.speechSynthesis.speak(utter);
        }

        function resetSettings() {
            getElements().forEach(el => {
                el.classList.remove('acessibilidade-grayscale', 'acessibilidade-contrast', 'acessibilidade-negative', 
                'acessibilidade-light-mode', 'acessibilidade-underline', 'acessibilidade-font');
            });
            document.body.style.backgroundColor = '';
            document.body.style.fontSize = '';
            fontSize = 100;
            localStorage.removeItem('acc_classes');
            localStorage.removeItem('acc_fontSize');
            window.speechSynthesis.cancel();
        }

        function saveState() {
            var activeClasses = [];
            var sampleElement = document.querySelector('body > div:not(#acessibilidade-wrapper)'); 
            if(sampleElement) {
                sampleElement.classList.forEach(cls => {
                    if(cls.startsWith('acessibilidade-')) activeClasses.push(cls);
                });
                localStorage.setItem('acc_classes', JSON.stringify(activeClasses));
            }
        }

        // Event Listeners (Sem onclick no HTML para evitar escopo global)
        document.getElementById('btn-inc-text').onclick = () => fontManager('increase');
        document.getElementById('btn-dec-text').onclick = () => fontManager('decrease');
        document.getElementById('btn-reset-text').onclick = () => fontManager('reset');
        document.getElementById('btn-readable').onclick = () => toggleEffect('acessibilidade-font');
        document.getElementById('btn-gray').onclick = () => toggleFilter('acessibilidade-grayscale');
        document.getElementById('btn-contrast').onclick = () => toggleFilter('acessibilidade-contrast');
        document.getElementById('btn-negative').onclick = () => toggleFilter('acessibilidade-negative');
        document.getElementById('btn-light').onclick = () => toggleEffect('acessibilidade-light-mode');
        document.getElementById('btn-underline').onclick = () => toggleEffect('acessibilidade-underline');
        document.getElementById('btn-reader').onclick = () => leitordeTela();
        document.getElementById('btn-reset').onclick = () => resetSettings();

        // Carregar Estado
        var savedSize = localStorage.getItem('acc_fontSize');
        if (savedSize) {
            fontSize = parseInt(savedSize);
            document.body.style.fontSize = fontSize + "%";
        }
        var savedClasses = JSON.parse(localStorage.getItem('acc_classes') || "[]");
        if (savedClasses.length > 0) {
            savedClasses.forEach(cls => {
                if (cls.includes('filter') || cls.includes('negative')) toggleFilter(cls);
                else toggleEffect(cls);
            });
        }

    }, 500); // Pequeno delay para garantir injeção

})();
