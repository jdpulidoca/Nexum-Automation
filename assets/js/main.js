document.addEventListener('DOMContentLoaded', () => {
            
            // ==========================================================================
            // SISTEMA VISUAL BOOT OS (NO BLOQUEA EL MOTOR NEURONAL)
            // ==========================================================================
            const term1 = document.getElementById('term-line1');
            const term2 = document.getElementById('term-line2');
            const term3 = document.getElementById('term-line3');
            const terminal = document.getElementById('splash-terminal');
            const logoCont = document.getElementById('splash-logo-container');
            const splash = document.getElementById('splash-screen');
            const canvasContainer = document.getElementById('space-container');

            if (splash) {
                setTimeout(() => { term1.innerHTML = "> INITIATING NEXUM OS BOOT SEQUENCE...<span class='cursor-blink'></span>"; }, 500);
                setTimeout(() => { 
                    term1.innerHTML = "> INITIATING NEXUM OS BOOT SEQUENCE... <span class='term-success'>[OK]</span>"; 
                    term2.innerHTML = "> LOADING KERNEL v8.26.114...<span class='cursor-blink'></span>"; 
                }, 1800);
                setTimeout(() => { 
                    term2.innerHTML = "> LOADING KERNEL v8.26.114... <span class='term-success'>[OK]</span>"; 
                    term3.innerHTML = "> SYSTEM BOOT COMPLETED. WELCOME.<span class='cursor-blink'></span>"; 
                }, 3200);
                
                setTimeout(() => { 
                    terminal.style.opacity = '0'; 
                    setTimeout(() => {
                        terminal.style.display = 'none';
                        logoCont.style.display = 'flex';
                        setTimeout(() => { logoCont.style.opacity = '1'; }, 50);
                    }, 500); 
                }, 4800);
                
                // El Hub (container) ya estaba renderizándose en el fondo gracias al requestAnimationFrame paralelo
                setTimeout(() => {
                    splash.style.opacity = '0';
                    splash.style.pointerEvents = 'none'; // Permite que los clicks pasen al canvas
                    if(canvasContainer) canvasContainer.classList.add('loaded');
                    setTimeout(() => { splash.style.display = 'none'; }, 1000);
                }, 8000);
            }

            // ==========================================================================
            // MOTOR ORIGINAL NEX7 (INICIA DE INMEDIATO EN EL SEGUNDO 0)
            // ==========================================================================
            const container = document.getElementById('space-container');
            const svgCanvas = document.getElementById('canvas-synapses');
            const retinaEye = document.getElementById('retina-eye');
            const identityNode = document.getElementById('n-center');
            const toggleTheme = document.getElementById('mode-checkbox');

            toggleTheme.addEventListener('change', (e) => {
                document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
            });

            let activeConstellation = null; 
            let mouse = { x: 0, y: 0 };
            document.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });

            const networkElements = [];
            
            function registrarNodo(id, group, isSuper, isFunctional) {
                const el = document.getElementById(id);
                if (!el) return;
                networkElements.push({
                    el: el, group: group, isSupernode: isSuper, isFunctional: isFunctional, isIdentity: id === 'n-center',
                    currentX: 0, currentY: 0, targetX: 0, targetY: 0,
                    currentScale: isSuper ? 1 : 0, targetScale: isSuper ? 1 : 0,
                    currentOpacity: isSuper ? 1 : 0, targetOpacity: isSuper ? 1 : 0,
                    seed: Math.random() * 10
                });
            }

            registrarNodo('n-center', 'human', true, true);
            registrarNodo('n-resumen', 'human', false, true);
            registrarNodo('n-contexto', 'human', false, true);
            registrarNodo('n-reflexiones', 'human', false, true);
            registrarNodo('bib-sector1', 'human', false, true);

            registrarNodo('n-propuesta', 'commercial', true, true);
            registrarNodo('n-economia', 'commercial', false, true);
            registrarNodo('n-isa', 'commercial', false, true);
            registrarNodo('n-gestion', 'commercial', false, true);
            registrarNodo('bib-sector2', 'commercial', false, true);

            registrarNodo('n-digital', 'tech', true, true);
            registrarNodo('n-plc', 'tech', false, true);
            registrarNodo('n-celda', 'tech', false, true);
            registrarNodo('bib-sector3', 'tech', false, true);

            const aesthetics = document.querySelectorAll('.node-aesthetic');
            aesthetics.forEach(el => {
                networkElements.push({
                    el: el, isFunctional: false, isIdentity: false, isSupernode: false,
                    currentX: 0, currentY: 0, targetX: 0, targetY: 0, 
                    currentScale: 1, targetScale: 1, currentOpacity: 1, targetOpacity: 1, seed: Math.random() * 10 
                });
            });

            const structuralBackbone = [
                { from: 'n-center', to: 'n-contexto' }, { from: 'n-center', to: 'n-resumen' }, { from: 'n-center', to: 'n-reflexiones' }, { from: 'n-center', to: 'bib-sector1' },
                { from: 'n-center', to: 'n-propuesta' }, { from: 'n-propuesta', to: 'n-economia' }, { from: 'n-propuesta', to: 'bib-sector2' },
                { from: 'n-propuesta', to: 'n-digital' },
                { from: 'n-economia', to: 'n-isa' }, { from: 'n-isa', to: 'n-gestion' },
                { from: 'n-digital', to: 'n-plc' }, { from: 'n-digital', to: 'n-celda' }, { from: 'n-digital', to: 'bib-sector3' }
            ];

            const nodesMap = {};
            networkElements.forEach(n => { if (n.el.id) nodesMap[n.el.id] = n; });
            const linesData = [];
            const containerRect = container.getBoundingClientRect();

            structuralBackbone.forEach(link => {
                const fromNode = nodesMap[link.from];
                const toNode = nodesMap[link.to];
                if (fromNode && toNode) {
                    const lineEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    lineEl.setAttribute('class', 'axon-path backbone-link');
                    svgCanvas.appendChild(lineEl);
                    linesData.push({ el: lineEl, from: fromNode, to: toNode, isBackbone: true });
                }
            });

            for (let i = 0; i < networkElements.length; i++) {
                for (let j = i + 1; j < networkElements.length; j++) {
                    const id1 = networkElements[i].el.id; const id2 = networkElements[j].el.id;
                    if (id1 && id2 && structuralBackbone.some(l => (l.from === id1 && l.to === id2) || (l.from === id2 && l.to === id1))) continue;

                    const rA = networkElements[i].el.getBoundingClientRect();
                    const rB = networkElements[j].el.getBoundingClientRect();
                    const x1 = (rA.left + rA.width / 2) - containerRect.left;
                    const y1 = (rA.top + rA.height / 2) - containerRect.top;
                    const x2 = (rB.left + rB.width / 2) - containerRect.left;
                    const y2 = (rB.top + rB.height / 2) - containerRect.top;

                    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    if (distance < 165) {
                        const lineEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        lineEl.setAttribute('class', 'axon-path');
                        svgCanvas.appendChild(lineEl);
                        linesData.push({ el: lineEl, from: networkElements[i], to: networkElements[j], isBackbone: false });
                    }
                }
            }

            networkElements.forEach(node => {
                if(node.isSupernode) {
                    node.el.addEventListener('click', (e) => {
                        e.preventDefault(); e.stopPropagation();
                        activeConstellation = (activeConstellation === node.group) ? null : node.group;
                        actualizarEstadosHubs();
                    });
                }
            });

            container.addEventListener('click', (e) => {
                if (e.target === container || e.target === svgCanvas) {
                    activeConstellation = null;
                    actualizarEstadosHubs();
                }
            });

            function actualizarEstadosHubs() {
                networkElements.forEach(n => {
                    if (n.isSupernode) {
                        if (n.group === activeConstellation) n.el.classList.add('selected-hub');
                        else n.el.classList.remove('selected-hub');
                    }
                });
            }

            let eyeX = 0, eyeY = 0; let loopTime = 0;

            function runNeuralEngine() {
                loopTime += 0.015;
                const cRect = container.getBoundingClientRect();

                const centRect = identityNode.getBoundingClientRect();
                const centX = centRect.left + centRect.width / 2;
                const centY = centRect.top + centRect.height / 2;
                const angle = Math.atan2(mouse.y - centY, mouse.x - centX);
                const dist = Math.sqrt(Math.pow(mouse.x - centX, 2) + Math.pow(mouse.y - centY, 2));
                const eyeMoveRadius = Math.min(dist / 22, 10);
                eyeX += ((Math.cos(angle) * eyeMoveRadius) - eyeX) * 0.15;
                eyeY += ((Math.sin(angle) * eyeMoveRadius) - eyeY) * 0.15;
                retinaEye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;

                networkElements.forEach(node => {
                    const r = node.el.getBoundingClientRect();
                    const nX = r.left + r.width / 2 - node.currentX;
                    const nY = r.top + r.height / 2 - node.currentY;
                    const dX = mouse.x - nX; const dY = mouse.y - nY;
                    const mDist = Math.sqrt(dX * dX + dY * dY);
                    
                    const isNodeVisible = node.isSupernode || !node.isFunctional || node.group === activeConstellation;

                    if (isNodeVisible) {
                        node.targetOpacity = 1.0;
                        if (node.isFunctional) node.el.style.pointerEvents = 'auto';
                        
                        const influenceRadius = 140;

                        if (mDist < influenceRadius) {
                            node.el.classList.add('near');
                            if(!node.isFunctional) node.el.classList.add('active'); 
                            
                            const fAngle = Math.atan2(dY, dX);
                            const pushForce = (1 - (mDist / influenceRadius));
                            const displacement = node.isIdentity ? 6 : 14; 

                            node.targetX = Math.cos(fAngle) * displacement * pushForce;
                            node.targetY = Math.sin(fAngle) * displacement * pushForce;
                            
                            if(node.isSupernode) node.targetScale = 1.20;
                            else if(node.isFunctional) node.targetScale = 1.15;
                        } else {
                            node.el.classList.remove('near');
                            if(!node.isFunctional) node.el.classList.remove('active');
                            
                            node.targetX = Math.sin(loopTime + node.seed) * 2.5;
                            node.targetY = Math.cos(loopTime * 0.85 + node.seed) * 2;
                            node.targetScale = 1.0;
                        }
                    } else {
                        node.targetOpacity = 0.0;
                        node.targetScale = 0.0;
                        node.el.style.pointerEvents = 'none';
                        node.targetX = 0; node.targetY = 0;
                        node.el.classList.remove('near');
                    }

                    node.currentX += (node.targetX - node.currentX) * 0.1;
                    node.currentY += (node.targetY - node.currentY) * 0.1;
                    node.currentScale += (node.targetScale - node.currentScale) * 0.12;
                    node.currentOpacity += (node.targetOpacity - node.currentOpacity) * 0.12;
                    
                    node.el.style.transform = `translate(${node.currentX}px, ${node.currentY}px) scale(${node.currentScale})`;
                    node.el.style.opacity = node.currentOpacity;
                });

                linesData.forEach(line => {
                    const fromRect = line.from.el.getBoundingClientRect();
                    const toRect = line.to.el.getBoundingClientRect();
                    const x1 = (fromRect.left + fromRect.width / 2) - cRect.left;
                    const y1 = (fromRect.top + fromRect.height / 2) - cRect.top;
                    const x2 = (toRect.left + toRect.width / 2) - cRect.left;
                    const y2 = (toRect.top + toRect.height / 2) - cRect.top;

                    line.el.setAttribute('x1', x1); line.el.setAttribute('y1', y1);
                    line.el.setAttribute('x2', x2); line.el.setAttribute('y2', y2);

                    const lineVisibility = Math.max(0.2, Math.min(line.from.currentOpacity, line.to.currentOpacity));
                    line.el.style.opacity = lineVisibility;

                    if (lineVisibility > 0.5 && (line.from.el.classList.contains('near') || line.to.el.classList.contains('near'))) {
                        line.el.classList.add('active');
                    } else {
                        line.el.classList.remove('active');
                    }
                });

                requestAnimationFrame(runNeuralEngine);
            }
            
            // EL MOTOR ARRANCA EN EL MILISEGUNDO 0 (Mientras la pantalla de carga flota encima)
            requestAnimationFrame(runNeuralEngine);
        });

        // PANELES
        function cargarContenidoPanel(target, event) {
            if (event) event.preventDefault();
            
            const panel = document.getElementById('universal-panel');
            const panelContainer = document.getElementById('panel-dynamic-content');
            
            panel.classList.remove('panel-right', 'panel-left');
            if (event && event.clientX < window.innerWidth / 2) {
                panel.classList.add('panel-right');
            } else {
                panel.classList.add('panel-left');
            }

            let contentHtml = '';

            if (target === 'contexto') {
                contentHtml = `
                    <h2 class="panel-title">Contexto Operativo: Coca-Cola FEMSA</h2>
                    <p class="panel-text">Estudio analítico de tres líneas críticas de producción evaluadas en planta durante el periodo académico 2026:</p>
                    <div class="panel-tab">
                        <button class="panel-tablinks active" onclick="abrirPanelLinea(event, 'PanelMonster')">Monster</button>
                        <button class="panel-tablinks" onclick="abrirPanelLinea(event, 'PanelQuatro')">Quatro</button>
                        <button class="panel-tablinks" onclick="abrirPanelLinea(event, 'PanelBrisa')">Agua Brisa</button>
                    </div>
                    <div id="PanelMonster" class="panel-tabcontent" style="display: block;">
                        <h3 style="margin:10px 0 4px 0; font-size:16px;">🔋 Monster Energy (Lata 473ml)</h3>
                        <table class="nutrition-table">
                            <thead><tr><th colspan=\"2\">Información Nutricional (Base: 100 ml)</th></tr></thead>
                            <tbody><tr><td><strong>Calorías</strong></td><td style=\"text-align: right;\">47 kcal</td></tr><tr><td><strong>Carbohidratos</strong></td><td style=\"text-align: right;\">12 g</td></tr></tbody>
                        </table>
                    </div>
                    <div id="PanelQuatro" class="panel-tabcontent">
                        <h3 style="margin:10px 0 4px 0; font-size:16px;">🥤 Gaseosa Quatro (PET 1.5L)</h3>
                        <table class="nutrition-table">
                            <thead><tr><th colspan=\"2\">Información Nutricional (Base: 100 ml)</th></tr></thead>
                            <tbody><tr><td><strong>Calorías</strong></td><td style=\"text-align: right;\">20 kcal</td></tr><tr><td><strong>Sodio</strong></td><td style=\"text-align: right;\">26 mg</td></tr></tbody>
                        </table>
                    </div>
                    <div id="PanelBrisa" class="panel-tabcontent">
                        <h3 style="margin:10px 0 4px 0; font-size:16px;">💧 Agua Brisa (Garrafón 20L)</h3>
                        <p class=\"panel-text\">Línea de envases retornables sin aditivos calóricos.</p>
                    </div>
                `;
            } 
            else if (target === 'bib1') {
                contentHtml = `<h2 class="panel-title" style="color: var(--nexum-cyan);">Refs: Contexto e Identidad</h2><ul class="ref-list"><li class="ref-item"><span class="ref-tag" style="background:#E0F2FE; color:#0369A1;">Planta</span><strong>Coca-Cola FEMSA. (2024).</strong> <em>Reporte Operaciones.</em></li></ul>`;
            } 
            else if (target === 'bib2') {
                contentHtml = `<h2 class="panel-title" style="color: var(--nexum-amber);">Refs: Estrategia y Finanzas</h2><ul class="ref-list"><li class="ref-item"><span class="ref-tag" style="background:#FEF3C7; color:#B45309;">Gestión</span><strong>PMI. (2021).</strong> <em>Guía PMBOK 7th Ed.</em></li></ul>`;
            } 
            else if (target === 'bib3') {
                contentHtml = `<h2 class="panel-title" style="color: var(--nexum-purple);">Refs: Automatización</h2><ul class="ref-list"><li class="ref-item"><span class="ref-tag" style="background:#F3E8FF; color:#6B21A8;">ISA-95</span><strong>ISA. (2015).</strong> <em>Estándar ANSI/ISA-95.</em></li></ul>`;
            } 
            else if (target === 'bib-general') {
                contentHtml = `<h2 class="panel-title">Bibliografía General</h2><ul class="ref-list"><li class="ref-item"><strong>ANSI/ISA-95:</strong> Integración de Sistemas Enterprise-Control.</li><li class="ref-item"><strong>ABB RobotStudio:</strong> Manual de Simulación y Gemelos Digitales.</li></ul>`;
            }

            panelContainer.innerHTML = contentHtml;
            panel.classList.add('open');
        }

        function cerrarPanel() { document.getElementById('universal-panel').classList.remove('open'); }
        
        function abrirPanelLinea(evt, nombreLinea) {
            let i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("panel-tabcontent");
            for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
            tablinks = document.getElementsByClassName("panel-tablinks");
            for (i = 0; i < tablinks.length; i++) { tablinks[i].className = tablinks[i].className.replace(" active", ""); }
            document.getElementById(nombreLinea).style.display = "block";
            evt.currentTarget.className += " active";
        }