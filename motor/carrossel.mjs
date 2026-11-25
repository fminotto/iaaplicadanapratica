// Gera um carrossel do Instagram (1080x1350, PNG) a partir de src/<id>.js, que define window.SLIDES (HTML de cada slide).
// Uso: node carrossel.mjs c1   →   out/c1/01.png, 02.png, ...
import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
import fs from 'node:fs';
const [,, id] = process.argv;
const W=1080, H=1350;
const css=fs.readFileSync('src/base.css','utf8').replaceAll('1920px',H+'px'), eng=fs.readFileSync('src/engine.js','utf8'), sc=fs.readFileSync(`src/${id}.js`,'utf8'), kit=fs.readFileSync('src/kit.js','utf8');
const html=`<html><head><style>${css}
.badge{top:80px}.foot{position:absolute;left:70px;right:70px;bottom:64px;display:flex;justify-content:space-between;font-size:30px;font-weight:600;color:#7C8597}
.dots{display:flex;gap:12px;align-items:center}.dots i{width:14px;height:14px;border-radius:7px;background:#232B40}.dots i.on{width:40px;background:#C6FF3D}</style></head>
<body><div id=r></div><script>(()=>{${eng}})()</script><script>${kit}</script><script>(()=>{${sc}})()</script></body></html>`;
const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});
const p=await b.newPage({viewport:{width:W,height:H}});
await p.setContent(html); await p.evaluate(()=>document.fonts.ready);
const n=await p.evaluate(()=>window.SLIDES.length);
fs.mkdirSync(`out/${id}`,{recursive:true});
for(let i=0;i<n;i++){
  await p.evaluate(([i,n])=>{
    const dots=Array.from({length:n},(_,k)=>`<i class="${k==i?'on':''}"></i>`).join('');
    const next=i<n-1?'arrasta →':'@iaaplicadanapratica';
    document.getElementById('r').innerHTML=`<div class="stage"><div class="grid"></div>
      <div class="glow" style="top:${300+i*40}px"></div>
      <div class="badge">IA na Prática <b>· ${window.TEMA||''}</b></div>${window.SLIDES[i]}
      <div class="foot"><div class="dots">${dots}</div><div>${next}</div></div></div>`;
  },[i,n]);
  await p.screenshot({path:`out/${id}/${String(i+1).padStart(2,'0')}.png`});
}
await b.close(); console.log('slides',n);
