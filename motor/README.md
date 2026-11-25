# Motor dos Reels

Cada vídeo é um arquivo em `src/vN.js` com `window.render(t)` (HTML por frame) e `window.TOTAL` (duração em s).
`src/engine.js` tem as cores, a moldura (barra de progresso, selo "IA na Prática #N") e as funções de animação.

Renderizar (precisa de Node, Playwright, Google Chrome e ffmpeg):

    node render.mjs v1                     # gera out/v1.mp4 (1080x1920, 30 fps)
    node render.mjs v1 stills 1.5,10,20    # quadros soltos para conferir

Ajuste o caminho do Playwright no topo de `render.mjs` se necessário.

## Narração

Os roteiros falados ficam em `narracao/vN.json` (trechos `de`/`ate` na linha do tempo original de `src/vN.js`).

    python3 narrar.py v2        # voz Piper pt_BR (sherpa-onnx) -> out/v2.narracao.wav + out/v2.timing.json
    node render.mjs v2          # remapeia as cenas ao tempo da fala e mixa o áudio (-14 LUFS)

Pronúncia: escreva "IA" como "i-á" e "e-mail" como "imêiu" no texto da fala.
`SEM_NARRACAO=1 node render.mjs v2` renderiza a versão muda original.
