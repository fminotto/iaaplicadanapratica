import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
const [,, id, mode='video', at='0'] = process.argv;
const css=fs.readFileSync('src/base.css','utf8'), eng=fs.readFileSync('src/engine.js','utf8'), sc=fs.readFileSync(`src/${id}.js`,'utf8');
// Narração (gerada por narrar.py): out/vN.timing.json remapeia o tempo das cenas e out/vN.narracao.wav vira a trilha.
const tf=`out/${id}.timing.json`, wav=`out/${id}.narracao.wav`;
const timing=fs.existsSync(tf)&&!process.env.SEM_NARRACAO?JSON.parse(fs.readFileSync(tf,'utf8')):null;
const warp=timing?`<script>(()=>{const M=${JSON.stringify(timing.mapa)},R=window.render;
 const f=t=>{for(let i=1;i<M.length;i++){if(t<=M[i][0]||i==M.length-1){const[a0,b0]=M[i-1],[a1,b1]=M[i];return b0+(b1-b0)*Math.min(1,(t-a0)/(a1-a0));}}return t;};
 window.render=t=>R(f(t)); window.TOTAL=${timing.total};})()</script>`:'';
const html=`<html><head><style>${css}</style></head><body><div id=r></div><script>(()=>{${eng}})()</script><script>(()=>{${sc}})()</script>${warp}</body></html>`;
const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});
const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.setContent(html); await p.evaluate(()=>document.fonts.ready);
const draw=t=>p.evaluate(t=>{document.getElementById('r').innerHTML=window.render(t)},t);
if(mode==='stills'){ for(const s of at.split(',')){await draw(+s); await p.screenshot({path:`out/${id}_${s}.png`});} await b.close(); process.exit(0);}
const total=await p.evaluate(()=>window.TOTAL), fps=30, n=Math.round(total*fps);
const audio=timing&&fs.existsSync(wav);
const args=['-y','-loglevel','error','-f','image2pipe','-framerate',''+fps,'-c:v','mjpeg','-i','-'];
if(audio) args.push('-i',wav,'-af','loudnorm=I=-14:TP=-1.5:LRA=11,apad','-c:a','aac','-b:a','160k','-ar','48000','-shortest');
args.push('-c:v','libx264','-preset','veryfast','-crf','20','-pix_fmt','yuv420p','-movflags','+faststart',`out/${id}.mp4`);
const ff=spawn('ffmpeg',args,{stdio:['pipe','inherit','inherit']});
for(let i=0;i<n;i++){await draw(i/fps); const buf=await p.screenshot({type:'jpeg',quality:92}); if(!ff.stdin.write(buf)) await new Promise(r=>ff.stdin.once('drain',r));}
ff.stdin.end(); await new Promise(r=>ff.on('close',r)); await b.close(); console.log('done',n,audio?'(com narração)':'');
