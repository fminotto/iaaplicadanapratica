// Tiny deterministic motion engine: each frame rebuilds the DOM from time t (seconds).
const FPS = 30;
const C = { bg:'#0B0F1A', lime:'#C6FF3D', white:'#F4F6FB', gray:'#7C8597', red:'#FF4D5E', blue:'#5B8CFF', orange:'#FFA24D', purple:'#B57CFF', card:'#151B2B', line:'#232B40' };
const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const lerp=(a,b,p)=>a+(b-a)*p;
const easeOut=p=>1-Math.pow(1-clamp(p),3);
const easeInOut=p=>{p=clamp(p);return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2};
const back=p=>{p=clamp(p);const c1=1.70158,c3=c1+1;return 1+c3*Math.pow(p-1,3)+c1*Math.pow(p-1,2)};
// progress of t within [a, a+d]
const pr=(t,a,d)=>clamp((t-a)/d);
// fade+rise in at a, out at b
function vis(t,a,b,rise=40,dur=.35){const i=easeOut(pr(t,a,dur));const o=b==null?1:1-easeInOut(pr(t,b-dur,dur));const op=Math.min(i,o);return `opacity:${op};transform:translateY(${(1-i)*rise}px)`;}
function pop(t,a,dur=.45){const p=back(pr(t,a,dur));return `opacity:${clamp(pr(t,a,.15))};transform:scale(${lerp(.6,1,p)})`;}
function typed(s,t,a,cps=22){const n=Math.floor(clamp((t-a)*cps,0,s.length));return s.slice(0,n);}
function caret(t){return Math.floor(t*2)%2?'':'<span style="color:'+C.lime+'">▍</span>';}
function frame(t,total,n,inner){
  const pg=clamp(t/total);
  return `<div class="stage">
    <div class="grid"></div>
    <div class="glow" style="transform:translate(${Math.sin(t*.4)*80}px,${Math.cos(t*.3)*60}px)"></div>
    <div style="position:absolute;top:150px;left:70px;right:70px;height:8px;border-radius:8px;background:${C.line}"><div style="width:${pg*100}%;height:100%;border-radius:8px;background:${C.lime}"></div></div>
    <div class="badge">IA na Prática <b>#${n}</b></div>
    ${inner}
  </div>`;
}
window.__engine={C,clamp,lerp,easeOut,easeInOut,back,pr,vis,pop,typed,caret,frame,FPS};
const plane=(c)=>`<svg width="220" height="220" viewBox="0 0 24 24"><path d="M2 11.5 21.5 3l-6.8 18-3.3-7.2z" fill="${c||'#C6FF3D'}"/><path d="M11.4 13.8 21.5 3" stroke="#0B0F1A" stroke-width="1.2"/></svg>`;
function title(t,a,b,html,top,size){return `<div class="h" style="top:${top}px;font-size:${size}px;${vis(t,a,b)}">${html}</div>`;}
function dmCta(t,a,html,T){const fly=easeInOut(pr(t,a+1.2,1.4));
  return title(t,a,T-.6,html,520,104)+`<div style="position:absolute;left:${430+fly*300}px;top:${1060-fly*260}px;${pop(t,a+.4)};opacity:${clamp(pr(t,a+.4,.2))*(1-fly)}">${plane()}</div>`;}
function chip(txt,c,extra=''){return `<span style="display:inline-block;padding:8px 22px;border-radius:999px;background:${c}22;border:3px solid ${c};color:${c};font-weight:700;${extra}">${txt}</span>`;}
Object.assign(window.__engine,{plane,title,dmCta,chip});
