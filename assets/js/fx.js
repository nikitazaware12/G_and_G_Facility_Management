(()=>{const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover)').matches;
document.addEventListener('DOMContentLoaded',()=>{
const p=document.createElement('div');p.id='prog';document.body.prepend(p);
const g=document.createElement('div');g.id='glow';if(fine&&!rm)document.body.prepend(g);
const hd=()=>document.querySelector('header');
addEventListener('scroll',()=>{const h=document.documentElement,s=h.scrollTop/(h.scrollHeight-h.clientHeight);p.style.width=s*100+'%';hd()&&hd().classList.toggle('shrunk',h.scrollTop>40)},{passive:true});
if(fine&&!rm){addEventListener('pointermove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
document.querySelectorAll('.card3').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty('--mx',x+'px');c.style.setProperty('--my',y+'px');if(c.tagName==='FORM')return;c.style.transform=`perspective(900px) rotateX(${(.5-y/r.height)*10}deg) rotateY(${(x/r.width-.5)*12}deg) translateY(-8px)`});c.addEventListener('pointerleave',()=>c.style.transform='')})}
document.querySelectorAll('.card3,[data-lb]').forEach((c,i)=>c.style.transitionDelay=(i%4)*70+'ms');
document.querySelectorAll('section.relative.overflow-hidden.text-white').forEach(s=>{const a=document.createElement('div');a.className='aurora';s.prepend(a);if(rm)return;const b=document.createElement('div');b.className='bubbles absolute inset-0 pointer-events-none';for(let i=0;i<14;i++){const e=document.createElement('span'),z=14+Math.random()*46;e.style.cssText=`left:${Math.random()*100}%;width:${z}px;height:${z}px;animation-duration:${9+Math.random()*12}s;animation-delay:-${Math.random()*15}s`;b.appendChild(e)}s.appendChild(b)});
const r=document.querySelector('.rot');if(r&&!rm){const w=['Responsibility','Priority','Promise','Commitment'];let i=0;setInterval(()=>{i=(i+1)%w.length;r.classList.remove('sw');void r.offsetWidth;r.textContent=w[i];r.classList.add('sw')},2800)}
});})();
