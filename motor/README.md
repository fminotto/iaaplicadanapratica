# Motor dos Reels

Cada vídeo é um arquivo em `src/vN.js` com `window.render(t)` (HTML por frame) e `window.TOTAL` (duração em s).
`src/engine.js` tem as cores, a moldura (barra de progresso, selo "IA na Prática #N") e as funções de animação.

Renderizar (precisa de Node, Playwright, Google Chrome e ffmpeg):

    node render.mjs v1                     # gera out/v1.mp4 (1080x1920, 30 fps)
    node render.mjs v1 stills 1.5,10,20    # quadros soltos para conferir

Ajuste o caminho do Playwright no topo de `render.mjs` se necessário.
