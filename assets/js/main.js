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
            registrarNodo('n-equipo', 'human', false, true);
            registrarNodo('n-contexto', 'human', false, true);
            registrarNodo('n-isa', 'human', false, true);
            registrarNodo('n-reflexiones', 'human', false, true);
            registrarNodo('bib-sector1', 'human', false, true);

            // Nodo aparte de los 3 supernodos de sector: siempre visible, guía la navegación inicial
            registrarNodo('n-resumen', 'summary', true, true);

            registrarNodo('n-propuesta', 'commercial', true, true);
            registrarNodo('n-propuesta-doc', 'commercial', false, true);
            registrarNodo('n-economia', 'commercial', false, true);
            registrarNodo('n-gestion', 'commercial', false, true);
            registrarNodo('n-simulacion', 'commercial', false, true);
            registrarNodo('bib-sector2', 'commercial', false, true);

            // SECTOR TECH CORREGIDO (Nuevos nodos agregados)
            registrarNodo('n-digital', 'tech', true, true);
            registrarNodo('n-plc', 'tech', false, true);
            registrarNodo('n-scada', 'tech', false, true);
            registrarNodo('n-celda', 'tech', false, true);
            registrarNodo('n-twin', 'tech', false, true);
            registrarNodo('bib-sector3', 'tech', false, true);

            const aesthetics = document.querySelectorAll('.node-aesthetic');
            aesthetics.forEach(el => {
                networkElements.push({
                    el: el, isFunctional: false, isIdentity: false, isSupernode: false,
                    currentX: 0, currentY: 0, targetX: 0, targetY: 0, 
                    currentScale: 1, targetScale: 1, currentOpacity: 1, targetOpacity: 1, seed: Math.random() * 10 
                });
            });

            // ESTRUCTURA DE LÍNEAS CORREGIDA (Nuevos nodos conectados)
            const structuralBackbone = [
                // Conexiones del Sector 1 (Incluyendo a ISA)
                { from: 'n-center', to: 'n-equipo' }, { from: 'n-center', to: 'n-contexto' }, { from: 'n-center', to: 'n-isa' }, { from: 'n-center', to: 'n-reflexiones' }, { from: 'n-center', to: 'bib-sector1' },
                
                // Conexiones del Sector 2
                { from: 'n-center', to: 'n-propuesta' }, // Enlace principal entre sectores
                { from: 'n-propuesta', to: 'n-propuesta-doc' }, { from: 'n-propuesta', to: 'n-economia' }, { from: 'n-propuesta', to: 'n-gestion' }, { from: 'n-propuesta', to: 'bib-sector2' },
                { from: 'n-gestion', to: 'n-simulacion' },
                
                // Conexiones del Sector 3
                { from: 'n-propuesta', to: 'n-digital' }, // Enlace principal entre sectores
                { from: 'n-digital', to: 'n-plc' }, { from: 'n-digital', to: 'n-scada' }, { from: 'n-digital', to: 'n-celda' }, { from: 'n-digital', to: 'n-twin' }, { from: 'n-digital', to: 'bib-sector3' }
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
            
            // Configura de qué lado se abre el panel dependiendo de dónde se hizo clic
            panel.classList.remove('panel-right', 'panel-left');
            if (event && event.clientX < window.innerWidth / 2) {
                panel.classList.add('panel-right');
            } else {
                panel.classList.add('panel-left');
            }

            // Detiene cualquier instancia anterior del SCADA
            if (typeof window.__nexumScadaCleanup === 'function') {
                window.__nexumScadaCleanup();
            }

            // Muestra un estado de carga mientras trae el archivo
            panelContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #666;">Cargando información...</p>';
            panel.classList.add('open');

            // Aquí está la magia: va y busca el archivo en la carpeta "content/"
            fetch(`content/${target}.html`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Archivo no encontrado');
                    }
                    return response.text(); // Convierte la respuesta a texto HTML
                })
                .then(html => {
                    // Inyecta el contenido del archivo externo en el panel
                    panelContainer.innerHTML = html;

                    // IMPORTANTE: los <script> insertados vía innerHTML NO se ejecutan
                    // solos (así funciona el DOM en todos los navegadores). Si el
                    // fragmento trae su propio <script> (parallax, selectores, etc.),
                    // hay que recrearlo para que sí corra:
                    panelContainer.querySelectorAll('script').forEach(oldScript => {
                        const newScript = document.createElement('script');
                        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                        newScript.textContent = oldScript.textContent;
                        oldScript.replaceWith(newScript);
                    });
                })
                .catch(error => {
                    console.error('Error cargando el panel:', error);
                    panelContainer.innerHTML = `
                        <div style="padding: 20px; text-align: center; color: red;">
                            <h3>Error 404</h3>
                            <p>No se pudo encontrar el archivo <b>content/${target}.html</b>.</p>
                        </div>`;
                });
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