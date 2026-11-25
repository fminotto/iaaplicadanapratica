import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
const [,, id, mode='video', at='0'] = process.argv;
const css=fs.readFileSync('src/base.css','utf8'), eng=fs.readFileSync('src/engine.js','utf8'), sc=fs.readFileSync(`src/${id}.js`,'utf8');
const html=`<html><head><style>${css}</style></head><body><div id=r></div><script>(()=>{${eng}})()</script><script>(()=>{${sc}})()</script></body></html>`;
const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});
const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.setContent(html); await p.evaluate(()=>document.fonts.ready);
const draw=t=>p.evaluate(t=>{document.getElementById('r').innerHTML=window.render(t)},t);
if(mode==='stills'){ for(const s of at.split(',')){await draw(+s); await p.screenshot({path:`out/${id}_${s}.png`});} await b.close(); process.exit(0);}
const total=await p.evaluate(()=>window.TOTAL), fps=30, n=Math.round(total*fps);
const ff=spawn('ffmpeg',['-y','-loglevel','error','-f','image2pipe','-framerate',''+fps,'-c:v','mjpeg','-i','-','-c:v','libx264','-preset','veryfast','-crf','20','-pix_fmt','yuv420p','-movflags','+faststart',`out/${id}.mp4`],{stdio:['pipe','inherit','inherit']});
for(let i=0;i<n;i++){await draw(i/fps); const buf=await p.screenshot({type:'jpeg',quality:92}); if(!ff.stdin.write(buf)) await new Promise(r=>ff.stdin.once('drain',r));}
ff.stdin.end(); await new Promise(r=>ff.on('close',r)); await b.close(); console.log('done',n);
