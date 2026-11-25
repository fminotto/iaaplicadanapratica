"""Gera a narração de um Reel e o mapa de tempo das cenas.

    python3 narrar.py v2            # lê narracao/v2.json, grava out/v2.narracao.wav e out/v2.timing.json

Cada segmento de narracao/vN.json cobre um trecho [de, ate] da linha do tempo original
de src/vN.js. A duração nova de cada trecho é a da fala mais uma folga; render.mjs
remapeia o tempo (linear por trecho) para as animações acompanharem a voz.

Voz: Piper pt_BR (via sherpa-onnx). Modelo em $TTS_MODELO (pasta vits-piper-pt_BR-*).
"""
import json, os, sys
import numpy as np, sherpa_onnx, soundfile as sf

vid = sys.argv[1]
MOD = os.environ.get('TTS_MODELO', '/home/claude/tts/models/vits-piper-pt_BR-faber-medium')
VEL = float(os.environ.get('TTS_VELOCIDADE', '1.08'))
LEAD, TAIL, MIN_FATOR = 0.12, 0.30, 0.6

onnx = next(f for f in os.listdir(MOD) if f.endswith('.onnx'))
cfg = sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(
    vits=sherpa_onnx.OfflineTtsVitsModelConfig(model=f'{MOD}/{onnx}', tokens=f'{MOD}/tokens.txt',
                                               data_dir=f'{MOD}/espeak-ng-data'),
    num_threads=4))
tts = sherpa_onnx.OfflineTts(cfg)

segs = json.load(open(f'narracao/{vid}.json'))['segmentos']
sr, clips, new_t, mapa = None, [], 0.0, [[0.0, 0.0]]
for s in segs:
    a = tts.generate(s['fala'], sid=0, speed=VEL)
    sr = a.sample_rate
    x = np.array(a.samples, dtype=np.float32)
    nz = np.nonzero(np.abs(x) > 0.01)[0]          # apara silêncio das pontas
    x = x[max(0, nz[0] - 1600): nz[-1] + 1600] if len(nz) else x
    d = len(x) / sr
    orig = s['ate'] - s['de']
    if s.get('final'):
        D = max(LEAD + d + 1.3, 0.8 * orig)
    else:
        D = max(LEAD + d + TAIL, MIN_FATOR * orig)
    clips.append((new_t + LEAD, x))
    print(f"{s['de']:5.1f}-{s['ate']:5.1f}  orig {orig:4.1f}s  fala {d:4.2f}s  -> {D:4.2f}s  | {s['fala'][:60]}")
    new_t += D
    mapa.append([round(new_t, 3), s['ate']])

total = round(new_t, 3)
buf = np.zeros(int(total * sr) + sr, dtype=np.float32)
for st, x in clips:
    i = int(st * sr); buf[i:i + len(x)] += x
buf = buf[:int(total * sr)]
os.makedirs('out', exist_ok=True)
sf.write(f'out/{vid}.narracao.wav', buf, sr)
json.dump({'total': total, 'mapa': mapa, 'falas': [[round(st, 3), s['fala']] for (st, _), s in zip(clips, segs)]},
          open(f'out/{vid}.timing.json', 'w'), ensure_ascii=False, indent=1)
print(f'{vid}: total {total:.2f}s (original {segs[-1]["ate"]}s)')
