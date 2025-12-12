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
            filter: none !important; pointer-events: none;
            font-family: Arial, sans-serif;
        }
        .acessibilidade-container > * { pointer-events: auto; }
        
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
            border-radius: 5px; padding: 0; margin-bottom: 15px; width: 280px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2); overflow: hidden;
            margin-bottom: 10px; 
        }
        
        .dropdown-access a {
            display: flex; align-items: center; justify-content: space-between;
            padding: 10px 15px; text-decoration: none; color: #333; cursor: pointer;
            border-bottom: 1px solid #e0e0e0; background: #fff;
            transition: background 0.2s; font-size: 14px;
        }
        .dropdown-access a:hover { background-color: #e6e6e6; }
        .dropdown-access i { width: 25px; text-align: center; margin-right: 10px; color: #3288F2; }
        
        .access-key {
            font-size: 10px; color: #666; background: #ddd; padding: 2px 5px; 
            border-radius: 4px; border: 1px solid #ccc; min-width: 50px; text-align: center;
        }

        #menu-title { background-color: #3288F2; color: white; padding: 10px; font-weight: bold; text-align: center; }

        /* Estilo para o link de créditos */
        .credits-link {
            display: block; text-align: center; font-size: 11px; color: #666; 
            padding: 8px; text-decoration: none; background-color: #f9f9f9;
            border-top: 1px solid #ddd;
        }
        .credits-link:hover { color: #3288F2; text-decoration: underline; background-color: #f0f0f0; }

        /* Classes de Efeito */
        .acessibilidade-grayscale { filter: grayscale(100%) !important; }
        .acessibilidade-contrast { filter: contrast(200%) !important; }
        .acessibilidade-negative { filter: invert(100%) !important; background-color: #fff; }
        body.acessibilidade-global-negative { background-color: #000 !important; }
        .acessibilidade-light-mode { background-color: #FFF !important; color: #000 !important; }
        .acessibilidade-light-mode * { background-color: #FFF !important; color: #000 !important; border-color: #000 !important; }
        .acessibilidade-underline a { text-decoration: underline !important; }
        .acessibilidade-font { font-family: Arial, Helvetica, sans-serif !important; line-height: 1.5 !important; letter-spacing: 0.5px !important; }
    `;
    document.head.appendChild(style);

    // =================================================================
    // 3. INJEÇÃO DE HTML (Widget com Créditos)
    // =================================================================
    var widgetHTML = `
        <div class="dropdown-access" id="menu-options-access">
            <div id="menu-title">Acessibilidade</div>
            
            <a id="btn-inc-text" title="Aumentar (Alt+Shift+A)">
                <span><i class="fas fa-plus"></i> Aumentar texto</span>
                <span class="access-key">Alt+Shft+A</span>
            </a>
            <a id="btn-dec-text" title="Diminuir (Alt+Shift+D)">
                <span><i class="fas fa-minus"></i> Diminuir texto</span>
                <span class="access-key">Alt+Shft+D</span>
            </a>
            <a id="btn-reset-text" title="Original (Alt+Shift+O)">
                <span><i class="fas fa-sync-alt"></i> Redefinir texto</span>
                <span class="access-key">Alt+Shft+O</span>
            </a>
            <a id="btn-readable" title="Legível (Alt+Shift+L)">
                <span><i class="fas fa-font"></i> Fonte legível</span>
                <span class="access-key">Alt+Shft+L</span>
            </a>
            <a id="btn-gray" title="Cinza (Alt+Shift+G)">
                <span><i class="fas fa-barcode"></i> Escala de cinza</span>
                <span class="access-key">Alt+Shft+G</span>
            </a>
            <a id="btn-contrast" title="Contraste (Alt+Shift+C)">
                <span><i class="fas fa-adjust"></i> Alto Contraste</span>
                <span class="access-key">Alt+Shft+C</span>
            </a>
            <a id="btn-negative" title="Inverter (Alt+Shift+N)">
                <span><i class="fas fa-eye"></i> Contraste Negativo</span>
                <span class="access-key">Alt+Shft+N</span>
            </a>
            <a id="btn-light" title="Fundo Claro (Alt+Shift+B)">
                <span><i class="fas fa-sun"></i> Fundo claro</span>
                <span class="access-key">Alt+Shft+B</span>
            </a>
            <a id="btn-underline" title="Sublinhar (Alt+Shift+U)">
                <span><i class="fas fa-underline"></i> Sublinhar Links</span>
                <span class="access-key">Alt+Shft+U</span>
            </a>
            <a id="btn-reader" title="Ler Tela (Alt+Shift+S)">
                <span><i class="fas fa-volume-up"></i> Leitor de tela</span>
                <span class="access-key">Alt+Shft+S</span>
            </a>
            <a id="btn-reset" title="Resetar (Alt+Shift+R)">
                <span><i class="fas fa-trash-restore"></i> Redefinir Tudo</span>
                <span class="access-key">Alt+Shft+R</span>
            </a>

            <!-- LINK DE CRÉDITOS AO DESENVOLVEDOR -->
            <a href="https://github.com/delmardelima/acessibilidade-portal-modelo" target="_blank" class="credits-link" title="Ver projeto no GitHub">
                Desenvolvido por: Delmar de Lima
            </a>
        </div>
        <button class="button-access" id="menu-button-access" aria-label="Abrir menu de acessibilidade (Alt + Shift + M)">
            <i class="fa fa-wheelchair"></i>
        </button>
    `;

    var container = document.createElement('div');
    container.id = 'acessibilidade-wrapper';
    container.className = 'acessibilidade-container';
    container.innerHTML = widgetHTML;
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(container));
    } else {
        document.body.appendChild(container);
    }

    // =================================================================
    // 4. LÓGICA DO SISTEMA (Híbrida)
    // =================================================================
    
    setTimeout(function() {
        var btn = document.getElementById("menu-button-access");
        var menu = document.getElementById("menu-options-access");
        var hideTimeout = null; 
        var isMenuOpen = false;

        function openMenu() {
            clearTimeout(hideTimeout);
            menu.style.display = "block";
            isMenuOpen = true;
        }

        function closeMenu() {
            hideTimeout = setTimeout(function() {
                menu.style.display = "none";
                isMenuOpen = false;
            }, 300);
        }

        function toggleMenu() {
            if (isMenuOpen) {
                clearTimeout(hideTimeout);
                menu.style.display = "none";
                isMenuOpen = false;
            } else {
                openMenu();
            }
        }

        // Eventos
        btn.addEventListener("mouseenter", openMenu);
        btn.addEventListener("mouseleave", closeMenu);
        menu.addEventListener("mouseenter", openMenu);
        menu.addEventListener("mouseleave", closeMenu);
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            toggleMenu();
        });
        document.addEventListener("click", function(e) {
            if (isMenuOpen && !container.contains(e.target)) {
                clearTimeout(hideTimeout);
                menu.style.display = "none";
                isMenuOpen = false;
            }
        });

        // Funções de Acessibilidade
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
                if (active) document.body.classList.add('acessibilidade-global-negative');
                else document.body.classList.remove('acessibilidade-global-negative');
            } else {
                els.forEach(el => el.classList.remove('acessibilidade-negative'));
                document.body.classList.remove('acessibilidade-global-negative');
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
            document.body.classList.remove('acessibilidade-global-negative');
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

        // Binds
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

        // Atalhos
        document.addEventListener('keydown', function(e) {
            if (e.altKey && e.shiftKey) {
                switch(e.key.toUpperCase()) {
                    case 'A': fontManager('increase'); break;
                    case 'D': fontManager('decrease'); break;
                    case 'O': fontManager('reset'); break;
                    case 'L': toggleEffect('acessibilidade-font'); break;
                    case 'G': toggleFilter('acessibilidade-grayscale'); break;
                    case 'C': toggleFilter('acessibilidade-contrast'); break;
                    case 'N': toggleFilter('acessibilidade-negative'); break;
                    case 'B': toggleEffect('acessibilidade-light-mode'); break;
                    case 'U': toggleEffect('acessibilidade-underline'); break;
                    case 'S': leitordeTela(); break;
                    case 'R': resetSettings(); break;
                    case 'M': 
                        if(isMenuOpen) { clearTimeout(hideTimeout); menu.style.display = "none"; isMenuOpen=false; }
                        else openMenu();
                        break;
                }
            }
        });

        // Load State
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

    }, 500);

})();
