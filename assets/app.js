/* 千问办公全量系统 · 共享交互 v3 */
(function(){
  // ===== 统一 SVG 图标系统（Lucide 风格线性图标，24×24，currentColor 自适应容器色）=====
  const P = {
    home:'<path d="M3 9.6 12 3l9 6.6"/><path d="M5.2 10.4V20a1 1 0 0 0 1 1h11.6a1 1 0 0 0 1-1v-9.6"/><path d="M9.4 21v-6.2h5.2V21"/>',
    docs:'<path d="M14 2.6H6.6a2 2 0 0 0-2 2v14.8a2 2 0 0 0 2 2h10.8a2 2 0 0 0 2-2V8z"/><path d="M14 2.6V8h5.4"/><path d="M8.4 12.6h7.2M8.4 16.2h7.2M8.4 9.4h2.4"/>',
    grid:'<rect x="3.2" y="3.2" width="7.2" height="7.2" rx="1.6"/><rect x="13.6" y="3.2" width="7.2" height="7.2" rx="1.6"/><rect x="3.2" y="13.6" width="7.2" height="7.2" rx="1.6"/><rect x="13.6" y="13.6" width="7.2" height="7.2" rx="1.6"/>',
    cap:'<path d="M21.8 9.2 12 4.4 2.2 9.2 12 14z"/><path d="M6.2 11.4v5c0 1.4 2.6 2.6 5.8 2.6s5.8-1.2 5.8-2.6v-5"/><path d="M21.8 9.2v5.2"/>',
    briefcase:'<rect x="2.6" y="7.2" width="18.8" height="13.2" rx="2.2"/><path d="M8.6 7.2V5.4a1.6 1.6 0 0 1 1.6-1.6h3.6a1.6 1.6 0 0 1 1.6 1.6v1.8"/><path d="M2.6 12.6h18.8"/><path d="M10.4 12.6h3.2"/>',
    scale:'<path d="m16 16 3-7.6 3 7.6c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-7.6 3 7.6c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3.2V21"/><path d="M3.4 7.4h1.8c2 0 4.6-1 6.8-2 2.2 1 4.8 2 6.8 2h1.8"/>',
    yuan:'<circle cx="12" cy="12" r="9.3"/><path d="M8.2 8.2 12 12.6l3.8-4.4"/><path d="M12 12.6v3.6"/><path d="M9.2 13.8h5.6M9.2 15.8h5.6"/>',
    shield:'<path d="M12 2.6 4.8 5.5v6c0 4.3 3 7.9 7.2 9.2 4.2-1.3 7.2-4.9 7.2-9.2v-6z"/><path d="m9.1 11.9 2.1 2.1 3.9-4.1"/>',
    search:'<circle cx="11" cy="11" r="7.3"/><path d="m20.4 20.4-4.2-4.2"/>',
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
    video:'<rect x="2.6" y="6" width="12.8" height="12" rx="2.2"/><path d="m15.4 10.6 6-3.2v9.2l-6-3.2z"/>',
    live:'<circle cx="12" cy="12" r="2.2"/><path d="M7.9 7.9a5.8 5.8 0 0 0 0 8.2M16.1 7.9a5.8 5.8 0 0 1 0 8.2"/><path d="M5 5a9.9 9.9 0 0 0 0 14M19 5a9.9 9.9 0 0 1 0 14"/>',
    zap:'<path d="M13.2 2.4 4.8 13.6h6L10 21.6l8.4-11.2h-6z"/>',
    book:'<path d="M12 6.6S10.4 5.2 7.4 5.2 3 6.6 3 6.6v12.2s1.4-1.4 4.4-1.4S12 18.8 12 18.8s1.6-1.4 4.6-1.4S21 18.8 21 18.8V6.6S19.6 5.2 16.6 5.2 12 6.6 12 6.6z"/><path d="M12 6.6v12.2"/>',
    sliders:'<path d="M4 6.4h16M4 12h16M4 17.6h16"/><circle cx="9" cy="6.4" r="2.1"/><circle cx="15" cy="12" r="2.1"/><circle cx="8" cy="17.6" r="2.1"/>',
    sparkles:'<path d="M11 3.2 12.7 8 17.5 9.7 12.7 11.4 11 16.2 9.3 11.4 4.5 9.7 9.3 8z"/><path d="M17.6 15.2l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
    building:'<rect x="4" y="3.2" width="10.4" height="17.6" rx="1.2"/><path d="M14.4 8.4h4.4a1.2 1.2 0 0 1 1.2 1.2v11.2"/><path d="M2.8 20.8h18.4"/><path d="M7.2 7h1.6M7.2 10.6h1.6M7.2 14.2h1.6M11 7h.6M11 10.6h.6M11 14.2h.6"/>',
    wrench:'<path d="M14.6 6.4a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a5.9 5.9 0 0 1-7.8 7.8l-6.8 6.8a2.1 2.1 0 0 1-3-3l6.8-6.8a5.9 5.9 0 0 1 7.8-7.8z"/>',
    store:'<path d="M3.4 9.6 5 4.2h14l1.6 5.4"/><path d="M3.4 9.6a2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0"/><path d="M5.2 12.4v7.4a1 1 0 0 0 1 1h11.6a1 1 0 0 0 1-1v-7.4"/><path d="M9.4 20.8v-5.6h5.2v5.6"/>',
    help:'<circle cx="12" cy="12" r="9.3"/><path d="M9.6 9.6a2.5 2.5 0 1 1 3.3 2.4c-.6.2-.9.7-.9 1.3v.3"/><circle cx="12" cy="16.8" r=".8" fill="currentColor" stroke="none"/>',
    check:'<path d="m5 12.6 4.6 4.6L19 6.8"/>',
    copy:'<rect x="9" y="9" width="11.6" height="11.6" rx="2"/><path d="M5.4 15H4.6a1.2 1.2 0 0 1-1.2-1.2V4.6a1.2 1.2 0 0 1 1.2-1.2h9.2A1.2 1.2 0 0 1 15 4.6v.8"/>',
    external:'<path d="M14 4h6v6"/><path d="M20 4 11.2 12.8"/><path d="M18 13.8v5.6a1.2 1.2 0 0 1-1.2 1.2H4.6a1.2 1.2 0 0 1-1.2-1.2V7.2a1.2 1.2 0 0 1 1.2-1.2h5.6"/>',
    play:'<path d="M7.4 4.8v14.4L19 12z"/>',
    download:'<path d="M12 3.4v11.4"/><path d="m7.6 10.6 4.4 4.4 4.4-4.4"/><path d="M4.4 19.8h15.2"/>',
    flame:'<path d="M8.6 14.4A2.4 2.4 0 0 0 11 12c0-1.3-.5-2-1-3-1-2-.2-3.9 2-5.7.5 2.4 2 4.7 3.9 6.2 1.9 1.6 2.9 3.4 2.9 5.3a6.8 6.8 0 1 1-13.6 0c0-1.1.4-2.2 1-2.9a2.4 2.4 0 0 0 2.4 2.5z"/>',
    chevron:'<path d="m9.4 6.4 5.6 5.6-5.6 5.6"/>',
    arrow:'<path d="M4.4 12h14.4"/><path d="m13 6.2 5.8 5.8-5.8 5.8"/>',
    target:'<circle cx="12" cy="12" r="8.8"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>',
    bulb:'<path d="M9.2 18.4h5.6M10.2 21.2h3.6"/><path d="M12 3a6 6 0 0 0-3.4 10.9c.5.4.8.9.9 1.5l.1.5h4.8l.1-.5c.1-.6.4-1.1.9-1.5A6 6 0 0 0 12 3z"/>',
    chart:'<path d="M3.4 20.6h17.2"/><rect x="5.4" y="11" width="3.4" height="7" rx="1"/><rect x="10.6" y="6" width="3.4" height="12" rx="1"/><rect x="15.8" y="14" width="3.4" height="4" rx="1"/>',
    layers:'<path d="m12 3 8.8 4.8L12 12.6 3.2 7.8z"/><path d="m3.2 12.6 8.8 4.8 8.8-4.8"/><path d="m3.2 16.8 8.8 4.8 8.8-4.8"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6.8V12l3.4 2"/>',
    user:'<circle cx="12" cy="8" r="3.8"/><path d="M4.8 20.4a7.2 7.2 0 0 1 14.4 0"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3.2 12h17.6"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>',
    lock:'<rect x="4.6" y="10.4" width="14.8" height="10.2" rx="2"/><path d="M8.2 10.4V7.4a3.8 3.8 0 0 1 7.6 0v3"/><path d="M12 14.6v2.2"/>',
    star:'<path d="m12 3.4 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.9l6.1-.9z"/>',
    rocket:'<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.9-.9.9-2.2 0-3s-2.1-.9-3 0z"/><path d="M9.5 12.5 7 10c1-3 3-6.5 7-8.5 2.5 4 2 8-1 11l-2.5 2.5z"/><path d="M14.5 7.5h.01"/>',
    box:'<path d="M20.5 7.8 12 3.5 3.5 7.8v8.4L12 20.5l8.5-4.3z"/><path d="M3.5 7.8 12 12l8.5-4.2"/><path d="M12 12v8.5"/>',
    link:'<path d="M10.2 13.8a4 4 0 0 0 5.7 0l2.5-2.5a4 4 0 0 0-5.7-5.7l-.9.9"/><path d="M13.8 10.2a4 4 0 0 0-5.7 0l-2.5 2.5a4 4 0 0 0 5.7 5.7l.9-.9"/>',
    message:'<path d="M20.5 11.6a8 8 0 0 1-8.6 8 8 8 0 0 1-3.4-.8L3.5 20.5l1.7-4.9a8 8 0 0 1-.7-3.4 8 8 0 0 1 8-8.6h.4a8 8 0 0 1 7.6 8.3z"/>',
    monitor:'<rect x="2.6" y="3.6" width="18.8" height="12.4" rx="2"/><path d="M8.6 20.4h6.8"/><path d="M12 16v4.4"/>',
    x:'<path d="M6.4 6.4 17.6 17.6M17.6 6.4 6.4 17.6"/>',
    edit:'<path d="M15.6 5.4 18.6 8.4"/><path d="M5 19h3.1L19 8.1a1.9 1.9 0 0 0 0-2.7l-.4-.4a1.9 1.9 0 0 0-2.7 0L5 15.9z"/>',
    refresh:'<path d="M20.4 12a8.4 8.4 0 1 1-2.5-6"/><path d="M20.4 4.2v5h-5"/>',
    image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.6" cy="9.6" r="1.6"/><path d="M21 15.6 16.4 11 8 19.4"/>',
    alert:'<path d="M12 3.6 2.9 19.4h18.2z"/><path d="M12 9.6v4.2"/><circle cx="12" cy="16.9" r=".85" fill="currentColor" stroke="none"/>',
    flask:'<path d="M9.4 3h5.2"/><path d="M10.6 3v6.1L5.8 16.9a2 2 0 0 0 1.7 3.1h9a2 2 0 0 0 1.7-3.1L13.4 9.1V3"/><path d="M8.2 14.4h7.6"/>',
    folder:'<path d="M3 7.4a2 2 0 0 1 2-2h3.5a2 2 0 0 1 1.6.8l1 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v7.2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  };
  window.icon = function(name, cls){
    const d = P[name] || P.grid;
    return '<svg class="ic-svg'+(cls?' '+cls:'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>';
  };
  window.ICONS = P;

  const MODULES = [
    {grp:"概览"},
    {id:"index", ic:"home", t:"首页 · 产品总览", sub:"定位 / 核心能力 / 多端", href:"index.html"},
    {grp:"了解千问办公"},
    {id:"features", ic:"docs", t:"功能详情 & 帮助", sub:"官方文档库 250 篇全文", href:"features.html"},
    {id:"scenarios", ic:"grid", t:"应用场景", sub:"行业×岗位×场景 矩阵", href:"scenarios.html"},
    {id:"academy", ic:"cap", t:"千问办公学院", sub:"课程 / 直播 / 指南 / 更新", href:"academy.html"},
    {id:"cases", ic:"briefcase", t:"案例库", sub:"51 官方实战 + 标杆客户", href:"cases.html"},
    {grp:"销售专用"},
    {id:"compare", ic:"scale", t:"WorkBuddy 对比", sub:"产品/功能/价格/价值", href:"compare.html"},
    {id:"pricing", ic:"yuan", t:"报价专用", sub:"个人版 / 企业版", href:"pricing.html"},
    {id:"trust", ic:"shield", t:"信任背书", sub:"软著 / 信通院 / 安全", href:"trust.html"},
  ];
  window.MODULES = MODULES;

  window.renderNav = function(activeId){
    const nav=document.getElementById('sidenav'); if(!nav) return;
    let h=`<div class="nav-head"><img class="nav-logo" src="assets/brand/qwenwork-icon-180.png" alt="千问办公"><span class="t">千问办公 · 全量系统</span><span class="v">SALES</span></div>`;
    MODULES.forEach(m=>{
      if(m.grp){ h+=`<div class="grp">${m.grp}</div>`; return; }
      h+=`<a class="ni ${m.id===activeId?'active':''}" href="${m.href}">
            <span class="ic">${icon(m.ic)}</span>
            <span class="tx">${m.t}<span class="sub">${m.sub}</span></span>
            <span class="arw">${icon('chevron')}</span></a>`;
    });
    h+=`<div class="nav-foot"><span class="chipme"><span class="av">刘</span>刘瑞隆 · 销售赋能</span><br>
        数据源：官方帮助中心 / 学院 / 实战案例库 / 钉钉知识库<br>千问办公（阿里）与 WorkBuddy（腾讯）严格分区</div>`;
    nav.innerHTML=h;
  };

  window.renderTop = function(){
    return `<div class="topbar">
      <button class="topbtn menu-only" id="menuBtn">${icon('menu')}</button>
      <a class="brand" href="index.html"><img class="brand-logo" src="assets/brand/qwenwork-logo.svg" alt="千问办公"><span class="sys-tag">全量系统 · SALES</span></a>
      <div class="searchwrap"><span class="si">${icon('search')}</span>
        <input id="gsearch" type="text" placeholder="搜索场景 / 功能 / 课程 / 案例 / 岗位…" autocomplete="off">
        <span class="kbd">⌘K</span><div class="suggest" id="suggest"></div></div>
      <a class="topbtn" href="pricing.html">${icon('yuan')} 报价</a>
      <a class="topbtn solid" href="https://qwenwork.cn/app" target="_blank">进入千问办公 ${icon('external')}</a>
    </div>`;
  };

  // ===== 全局搜索索引（跨所有数据源）=====
  const CAT_MAP={'product-introduction':'产品简介','getting-started':'入门指南','install':'安装指引','benefits':'产品权益','web':'网页端','desktop':'桌面端','features':'核心功能','workspaces':'工作台','enterprise':'企业版','developer':'开发者API','faq':'常见问题','feedback':'反馈','activity':'活动'};
  function catOf(slug){ const p=(slug||'').split('/')[0]; return CAT_MAP[p]||'官方知识库'; }
  function buildIndex(){
    const arr=[];
    if(typeof SCENARIOS!=='undefined') SCENARIOS.forEach(s=>arr.push({t:s.t,m:`应用场景 · ${s.ind} · ${s.roles.join('/')}`,href:'scenarios.html?s='+encodeURIComponent(s.t),ic:'grid',type:'场景'}));
    if(typeof DOC_TITLES!=='undefined') Object.keys(DOC_TITLES).forEach(k=>arr.push({t:DOC_TITLES[k],m:`功能文档 · ${catOf(k)}`,href:'features.html#'+k,ic:'docs',type:'文档'}));
    if(typeof siteContent!=='undefined'){
      (siteContent.courses||[]).forEach(c=>arr.push({t:c.title,m:`学院课程 · ${c.kind||''} ${c.level||''}`,href:'academy.html#c-'+c.id,ic:'cap',type:'课程'}));
      (siteContent.guides||[]).forEach(g=>arr.push({t:g.title,m:'学院 · 使用指南',href:'academy.html#g-'+g.id,ic:'book',type:'指南'}));
      (siteContent.updates||[]).forEach(u=>arr.push({t:u.title,m:'学院 · 最新功能',href:'academy.html#u-'+u.id,ic:'sparkles',type:'更新'}));
    }
    if(typeof QW_CASES!=='undefined') QW_CASES.forEach(c=>arr.push({t:c.title,m:`实战案例 · ${(c.roles||[]).join('/')}`,href:'cases.html#'+c.id,ic:'briefcase',type:'案例'}));
    if(typeof DIMS!=='undefined'){ DIMS.ind.forEach(i=>arr.push({t:i,m:'按行业浏览应用场景',href:'scenarios.html?ind='+encodeURIComponent(i),ic:'target',type:'行业'}));
      DIMS.role.forEach(r=>arr.push({t:r,m:'按岗位浏览应用场景',href:'scenarios.html?role='+encodeURIComponent(r),ic:'target',type:'岗位'})); }
    MODULES.forEach(m=>{ if(!m.grp) arr.push({t:m.t,m:'系统模块',href:m.href,ic:m.ic,type:'模块'}); });
    return arr;
  }

  function initSearch(){
    const inp=document.getElementById('gsearch'), box=document.getElementById('suggest'); if(!inp) return;
    let INDEX=null, idx=0, cur=[];
    function ensure(){ if(!INDEX) INDEX=buildIndex(); return INDEX; }
    function render(list){ cur=list; idx=0;
      if(!list.length){ box.innerHTML=`<div class="sg"><span class="ico">${icon('search')}</span><div><div class="t">无匹配结果</div><div class="m">换个关键词试试</div></div></div>`; box.classList.add('on'); return; }
      box.innerHTML=list.slice(0,14).map((x,i)=>`<div class="sg ${i===0?'act':''}" data-href="${x.href}"><span class="ico">${icon(x.ic)}</span><div><div class="t">${x.t}</div><div class="m">${x.type} · ${x.m}</div></div></div>`).join('');
      box.classList.add('on');
    }
    inp.addEventListener('input',()=>{ const q=inp.value.trim().toLowerCase(); if(!q){box.classList.remove('on');return;}
      render(ensure().filter(x=>(x.t+x.m).toLowerCase().includes(q))); });
    inp.addEventListener('keydown',e=>{ const items=box.querySelectorAll('.sg[data-href]');
      if(e.key==='ArrowDown'){e.preventDefault();idx=Math.min(idx+1,items.length-1);}
      else if(e.key==='ArrowUp'){e.preventDefault();idx=Math.max(idx-1,0);}
      else if(e.key==='Enter'){if(cur[idx])location.href=cur[idx].href;return;}
      else if(e.key==='Escape'){box.classList.remove('on');inp.blur();return;} else return;
      items.forEach((it,i)=>it.classList.toggle('act',i===idx)); if(items[idx])items[idx].scrollIntoView({block:'nearest'}); });
    box.addEventListener('click',e=>{const sg=e.target.closest('.sg[data-href]');if(sg)location.href=sg.dataset.href;});
    document.addEventListener('click',e=>{if(!e.target.closest('.searchwrap'))box.classList.remove('on');});
    document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();inp.focus();inp.select();}});
  }

  // ===== 详情弹窗 =====
  window.openModal=function(html){
    let mask=document.getElementById('modalMask');
    if(!mask){ mask=document.createElement('div'); mask.id='modalMask'; mask.className='modal-mask'; document.body.appendChild(mask);
      mask.addEventListener('click',e=>{ if(e.target===mask) window.closeModal(); }); }
    mask.innerHTML=`<div class="modal">${html}</div>`;
    mask.classList.add('on'); document.body.style.overflow='hidden';
    mask.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',window.closeModal));
  };
  window.closeModal=function(){ const m=document.getElementById('modalMask'); if(m){m.classList.remove('on');m.innerHTML='';} document.body.style.overflow=''; };
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') window.closeModal(); });

  // ===== 复制 =====
  window.copyText=function(txt,btn){
    const done=()=>{ if(btn){const o=btn.textContent;btn.textContent='✓ 已复制';setTimeout(()=>btn.textContent=o,1600);} };
    if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(txt).then(done).catch(()=>fallback()); }
    else fallback();
    function fallback(){ const ta=document.createElement('textarea');ta.value=txt;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(ta); }
  };

  // ===== 产物链接解析（区分 活链接 / 死链 / 裸文件名）=====
  // 案例库 out 字段三种形态：①裸host(缺https://) ②裸文件名(无URL) ③已死host
  // 死链名单经 2026-11 实测复核：仅保留真正 404 的；ttktlcux / rf7mc797 实测 200 存活，已放行
  const DEAD_OUT = new Set(['3uyhp845.qwenwork.host','l4j9znxb.qwenwork.host','2cb38epn.qwenwork.host','qwenwork-mkt.github.io']);
  const FILE_RE = /\.(html?|mp4|mov|webm|png|jpe?g|gif|xlsx?|pptx?|docx?|pdf|csv|zip)$/i;
  window.resolveOut = function(out){
    if(!out) return {url:'', label:'', dead:false};
    out = String(out).trim();
    if(FILE_RE.test(out) && !/^https?:/i.test(out)) return {url:'', label:out, dead:false}; // 裸文件名：仅展示，不可点
    const url = /^https?:/i.test(out) ? out : 'https://' + out;
    const host = url.replace(/^https?:\/\//i,'').split('/')[0];
    if(DEAD_OUT.has(host)) return {url:'', label:out, dead:true}; // 已死链：不可点
    return {url, label:out, dead:false};
  };

  // ===== 演示视频解析（含 case id 兜底）=====
  // video 字段：相对 /cases/media/* 拼 usecase 源站，或 supabase 全 URL；
  // 兜底：部分案例 video 字段为空但 out 是裸 .mp4，其视频实际存于 supabase case-videos/videos/<id>.mp4（实测 206 存活）
  const MEDIA_BASE = 'https://usecase.qwenwork.host';
  const SUPABASE_VIDEO = 'https://nvplhjhdvwcffmqzsqlv.supabase.co/storage/v1/object/public/case-videos/videos/';
  window.resolveVideo = function(c){
    if(!c) return '';
    if(c.video){
      const v = String(c.video).trim();
      if(/^https?:/i.test(v)) return v;
      return v.startsWith('/') ? MEDIA_BASE + v : MEDIA_BASE + '/' + v;
    }
    const o = String(c.out||'').trim();
    if(/\.mp4$/i.test(o) && !/^https?:/i.test(o) && c.id) return SUPABASE_VIDEO + c.id + '.mp4';
    return '';
  };

  // ===== 滚动揭示 =====
  function initReveal(){
    const els=document.querySelectorAll('.reveal'); if(!els.length||!('IntersectionObserver'in window))return;
    const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.08});
    els.forEach(el=>io.observe(el));
  }

  function initMenu(){ const b=document.getElementById('menuBtn'),n=document.getElementById('sidenav'); if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open')); }

  window.initShell=function(activeId){
    const slot=document.getElementById('topbar-slot'); if(slot) slot.innerHTML=renderTop();
    renderNav(activeId); initSearch(); initMenu(); initReveal();
  };
})();
