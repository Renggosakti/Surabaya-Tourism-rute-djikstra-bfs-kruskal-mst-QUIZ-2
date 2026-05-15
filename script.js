// ════════════════════════════════════════════════
//  DATA TEMPAT
// ════════════════════════════════════════════════
const PLACES = [
  {id:0, name:"Hotel Majapahit",        lat:-7.2575,lng:112.7378,cat:"hotel",   icon:"hotel", desc:"Hotel bersejarah era kolonial Belanda, dibangun 1910. Saksi Peristiwa Yamato 1945.",    hours:"24 jam",   ticket:"—",          rating:"5/5"},
  {id:1, name:"Tunjungan Plaza",         lat:-7.2617,lng:112.7378,cat:"belanja",  icon:"shopping-bag", desc:"Pusat perbelanjaan terbesar Surabaya dengan 6 menara. Ikon belanja kota Pahlawan.",     hours:"10–22",    ticket:"Gratis",      rating:"4/5"},
  {id:2, name:"Kebun Binatang Surabaya", lat:-7.2935,lng:112.7363,cat:"alam",    icon:"leaf", desc:"Kebun binatang tertua Asia Tenggara, didirikan 1916. Rumah 350+ spesies satwa.",        hours:"08–16",    ticket:"Rp 40.000",   rating:"4/5"},
  {id:3, name:"Tugu Pahlawan",           lat:-7.2459,lng:112.7378,cat:"sejarah", icon:"landmark", desc:"Monumen 41,15 m memperingati Pertempuran Surabaya 10 November 1945.",                   hours:"07–17",    ticket:"Rp 2.000",    rating:"5/5"},
  {id:4, name:"House of Sampoerna",      lat:-7.2340,lng:112.7290,cat:"museum",  icon:"library", desc:"Museum kretek & galeri seni dalam bangunan Dutch colonial 1862. Wajib dikunjungi!",    hours:"09–22",    ticket:"Gratis",      rating:"5/5"},
  {id:5, name:"Jembatan Merah",          lat:-7.2366,lng:112.7333,cat:"sejarah", icon:"map-pin", desc:"Kawasan kota lama ikonik. Jembatan merah di jantung perdagangan kolonial Surabaya.",   hours:"Terbuka",  ticket:"Gratis",      rating:"4/5"},
  {id:6, name:"Taman Bungkul",           lat:-7.2893,lng:112.7357,cat:"taman",   icon:"tree-pine", desc:"Taman RTH favorit warga. Jogging track, skatepark, WiFi gratis & pujasera kuliner.",   hours:"24 jam",   ticket:"Gratis",      rating:"4/5"},
  {id:7, name:"Masjid Cheng Hoo",        lat:-7.2623,lng:112.7524,cat:"religi",  icon:"moon-star", desc:"Masjid unik bergaya arsitektur Tiongkok, simbol harmoni Islam-Tionghoa di Surabaya.",  hours:"05–21",    ticket:"Gratis",      rating:"5/5"},
  {id:8, name:"Kampung Lawas Maspati",   lat:-7.2466,lng:112.7298,cat:"budaya",  icon:"home", desc:"Kampung heritage tertua Surabaya usia 200+ tahun. Wisata budaya dan kuliner otentik.",  hours:"08–17",    ticket:"Gratis",      rating:"4/5"},
  {id:9, name:"Kenjeran Park",           lat:-7.2279,lng:112.8005,cat:"alam",    icon:"waves", desc:"Taman bahari tepi pantai, wahana, perahu & view Selat Madura yang menawan.",           hours:"06–18",    ticket:"Rp 10.000",   rating:"4/5"},
  {id:10,name:"Monumen Kapal Selam",     lat:-7.2650,lng:112.7482,cat:"museum",  icon:"anchor", desc:"Museum di dalam KRI Pasopati 410 asli TNI AL. Pengalaman di dalam kapal selam nyata.", hours:"08–22",    ticket:"Rp 15.000",   rating:"5/5"},
  {id:11,name:"Kya-Kya Kembang Jepun",  lat:-7.2388,lng:112.7376,cat:"kuliner", icon:"utensils-crossed", desc:"Kawasan pecinan & wisata kuliner malam. Jajanan dengan suasana Tionghoa yang kental.", hours:"17–00",    ticket:"Gratis",      rating:"4/5"},
  {id:12,name:"Pelabuhan Tanjung Perak", lat:-7.1975,lng:112.7317,cat:"modern",  icon:"ship", desc:"Pelabuhan terbesar Indonesia Timur. Spot foto kapal dan aktivitas pelabuhan internasional.",hours:"Terbuka",ticket:"Gratis",    rating:"3/5"},
  {id:13,name:"G-Walk Citraland",        lat:-7.2892,lng:112.6633,cat:"kuliner", icon:"coffee", desc:"Pusat kuliner & hiburan outdoor terbesar Surabaya Barat. Ratusan tenant pilihan.",      hours:"10–22",    ticket:"Gratis",      rating:"4/5"},
  {id:14,name:"Delta Plaza",             lat:-7.2617,lng:112.7468,cat:"belanja",  icon:"shopping-cart", desc:"Mall & bioskop strategis di jantung kota, dekat Stasiun Gubeng Surabaya.",            hours:"10–22",    ticket:"Gratis",      rating:"3/5"},
  {id:15,name:"Surabaya North Quay",     lat:-7.2059,lng:112.7250,cat:"modern",  icon:"camera", desc:"Waterfront modern di Pelabuhan Tanjung Perak, kafe, pameran & view malam indah.",      hours:"10–21",    ticket:"Gratis",      rating:"4/5"},
  {id:16,name:"Masjid Al-Akbar",         lat:-7.3369,lng:112.7275,cat:"religi",  icon:"building", desc:"Masjid terbesar kedua Indonesia. Arsitektur megah, kubah biru ikonik Surabaya.",       hours:"04–21",    ticket:"Gratis",      rating:"5/5"},
  {id:17,name:"Ekowisata Mangrove",      lat:-7.3203,lng:112.8135,cat:"alam",    icon:"tent", desc:"Hutan mangrove 188 ha dengan track kayu & perahu susur sungai, eco-tourism terbaik.",  hours:"07–17",    ticket:"Rp 5.000",    rating:"4/5"},
];

const EDGES = [
  [0,1,0.4],[0,3,1.5],[0,10,1.2],[0,7,1.8],[0,11,0.9],
  [1,2,3.5],[1,3,1.2],[1,10,0.9],[1,6,3.2],[1,14,0.8],
  [2,6,0.3],[2,13,7.8],
  [3,4,1.8],[3,5,1.4],[3,8,0.9],[3,11,0.8],
  [4,5,0.7],[4,8,1.0],[4,12,4.2],[4,15,5.1],
  [5,11,0.6],[5,12,3.8],
  [6,2,0.3],[6,13,7.5],[6,16,5.2],
  [7,10,0.5],[7,9,7.0],[7,14,0.9],
  [8,11,1.0],
  [9,12,6.5],[9,17,4.2],
  [10,14,0.8],[10,1,0.9],
  [11,3,0.8],[11,5,0.6],
  [12,4,4.2],[12,15,0.9],
  [13,6,7.5],[13,16,4.8],
  [14,7,0.9],[14,1,0.8],
  [15,12,0.9],[15,4,5.1],
  [16,6,5.2],[16,13,4.8],
  [17,9,4.2],
];

const ADJ={};
PLACES.forEach(p=>ADJ[p.id]=[]);
EDGES.forEach(([a,b,w])=>{ADJ[a].push({to:b,w});ADJ[b].push({to:a,w});});

const CAT_LABELS = {all:'Semua',hotel:'Hotel',sejarah:'Sejarah',museum:'Museum',alam:'Alam',taman:'Taman',budaya:'Budaya',religi:'Religi',kuliner:'Kuliner',belanja:'Belanja',modern:'Modern'};
const CAT_COLORS = {hotel:'#2563eb',sejarah:'#dc2626',museum:'#7c3aed',alam:'#059669',taman:'#16a34a',budaya:'#d97706',religi:'#0891b2',kuliner:'#ea580c',belanja:'#db2777',modern:'#0e7490'};

// ── STATUS APLIKASI ──
let srcId=null, stops=[], algo='dijkstra', animSpd=40, running=false;
let visitedMarkers=[], pathLines=[], mstLines=[], allMarkers=[], baseEdgeLines=[], baseEdgeLabels=[];
let activeCategory='all', lastRoute=null;
let solveId = 0; // ID sesi pencarian rute
let srcPlaceholderRemoved = false;
let dstPlaceholderRemoved = false;
// Cache geometri rute OSRM
const routeCache = {};

// ── INISIALISASI PETA ──
const map = L.map('map',{zoomControl:true}).setView([-7.265,112.745],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution:'© <a href="https://openstreetmap.org">OpenStreetMap</a>',maxZoom:19
}).addTo(map);

// ── FUNGSI PEMBANTU OSRM ──
async function fetchOSRM(latA,lngA,latB,lngB){
  const url=`https://router.project-osrm.org/route/v1/driving/${lngA},${latA};${lngB},${latB}?overview=full&geometries=geojson`;
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000); // Batas waktu 3 detik

  try{
    const r=await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    const d=await r.json();
    if(d.routes&&d.routes[0]){
      return d.routes[0].geometry.coordinates.map(([lng,lat])=>([lat,lng]));
    }
  }catch(e){
    clearTimeout(timeoutId);
    console.warn("Gagal memuat rute OSRM, menggunakan garis lurus", e);
  }
  return [[latA,lngA],[latB,lngB]];
}

const geomRequests = {}; // Mencegah permintaan ganda untuk rute yang sama

async function getRouteGeom(a,b){
  const key=`${Math.min(a,b)}-${Math.max(a,b)}`;
  if(routeCache[key])return routeCache[key];
  
  if(geomRequests[key]) return await geomRequests[key];

  const pa=PLACES[a],pb=PLACES[b];
  geomRequests[key] = fetchOSRM(pa.lat,pa.lng,pb.lat,pb.lng);
  
  const geom = await geomRequests[key];
  routeCache[key]=geom;
  delete geomRequests[key];
  return geom;
}

// Menggambar koneksi jalan dasar
async function drawBaseEdges(){
  document.getElementById('osrmStatus').style.display='inline';
  baseEdgeLines.forEach(l=>map.removeLayer(l)); baseEdgeLines=[];
  baseEdgeLabels.forEach(m=>map.removeLayer(m)); baseEdgeLabels=[];
  
  EDGES.forEach(([a,b,w])=>{
    const pa=PLACES[a],pb=PLACES[b];
    const l=L.polyline([[pa.lat,pa.lng],[pb.lat,pb.lng]],{color:'#cbd5e1',weight:2,opacity:.5}).addTo(map);
    baseEdgeLines.push(l);
    const ml=(pa.lat+pb.lat)/2,mg=(pa.lng+pb.lng)/2;
    const marker = L.marker([ml,mg],{
      icon:L.divIcon({html:`<div style="font-size:8.5px;color:#94a3b8;background:rgba(255,255,255,.92);padding:1px 4px;border-radius:3px;border:1px solid #e2e8f0;white-space:nowrap;">${w}km</div>`,className:'',iconAnchor:[14,7]}),
      interactive:false
    }).addTo(map);
    baseEdgeLabels.push(marker);
  });
  
  // Memperbarui ke rute jalan nyata OSRM secara bertahap
  for(let i=0;i<EDGES.length;i++){
    const [a,b]=EDGES[i];
    const pa=PLACES[a],pb=PLACES[b];
    const url=`https://router.project-osrm.org/route/v1/driving/${pa.lng},${pa.lat};${pb.lng},${pb.lat}?overview=full&geometries=geojson`;
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const r=await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      const d=await r.json();
      
      if(d.routes&&d.routes[0]){
        const geom = d.routes[0].geometry.coordinates.map(([lng,lat])=>([lat,lng]));
        const realDist = +(d.routes[0].distance / 1000).toFixed(1);
        
        routeCache[`${Math.min(a,b)}-${Math.max(a,b)}`] = geom;
        
        EDGES[i][2] = realDist;
        const adjA = ADJ[a].find(x=>x.to===b); if(adjA) adjA.w = realDist;
        const adjB = ADJ[b].find(x=>x.to===a); if(adjB) adjB.w = realDist;

        if (baseEdgeLabels[i]) {
            baseEdgeLabels[i].setIcon(L.divIcon({html:`<div style="font-size:8.5px;color:#059669;background:rgba(255,255,255,.95);padding:1px 4px;border-radius:3px;border:1px solid #6ee7b7;white-space:nowrap;font-weight:600;">${realDist}km</div>`,className:'',iconAnchor:[14,7]}));
        }

        if(baseEdgeLines[i]){
          map.removeLayer(baseEdgeLines[i]);
          baseEdgeLines[i]=L.polyline(geom,{color:'#cbd5e1',weight:2,opacity:.6}).addTo(map);
        }
      }
    } catch(e) {
      console.warn("Gagal memuat OSRM untuk sisi", a, b);
    }
    
    document.getElementById('osrmStatus').textContent=`⟳ Memuat jalan ${i+1}/${EDGES.length}...`;
    await sleep(60);
  }
  document.getElementById('osrmStatus').style.display='none';
  log('Peta jalan & jarak nyata dimuat via OSRM ✓','lg');
}
drawBaseEdges();

function makeIcon(p){
  const isSrc=srcId !== null && p.id===srcId, isStop=stops.includes(p.id);
  const bg=isSrc?'#2563eb':isStop?'#059669':(CAT_COLORS[p.cat] || '#e37400');
  const sz=isSrc||isStop?34:28;
  const border=isSrc?'2px solid #93c5fd':isStop?'2px solid #6ee7b7':'1.5px solid white';
  
  let content;
  if (isSrc) {
    content = `<i data-lucide="map-pin" style="width:16px;height:16px;color:#fff;"></i>`;
  } else if (isStop) {
    content = `<span style="font-size:12px;font-weight:800;color:#fff;">${stops.indexOf(p.id) + 1}</span>`;
  } else {
    content = `<i data-lucide="${p.icon || 'map-pin'}" style="width:14px;height:14px;color:#fff;"></i>`;
  }
  
  return L.divIcon({
    html:`<div style="width:${sz}px;height:${sz}px;border-radius:50%;background:${bg};border:${border};display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.2);">${content}</div>`,
    className:'',iconSize:[sz,sz],iconAnchor:[sz/2,sz/2]
  });
}
function makePopup(p){
  const isSrc=srcId !== null && p.id===srcId,isStop=stops.includes(p.id);
  const badge=isSrc?'<span class="pc-badge src">Titik Asal</span>':isStop?'<span class="pc-badge stop">Destinasi</span>':'';
  const conns=ADJ[p.id].map(e=>`${PLACES[e.to].name.split(' ')[0]}(${e.w}km)`).join(' · ');
  return`<div class="pc">
    <div class="pc-h"><div><div class="pc-name">${p.name}</div><div class="pc-cat">${CAT_LABELS[p.cat]||p.cat}</div></div></div>
    ${badge?`<div style="margin-bottom:6px;">${badge}</div>`:''}
    <div class="pc-desc">${p.desc}</div>
    <div class="pc-div"></div>
    <div class="pc-row">🕐 <b>Jam:</b>&nbsp;${p.hours}</div>
    <div class="pc-row">🎟 <b>Tiket:</b>&nbsp;${p.ticket}</div>
    <div class="pc-row">${p.rating}</div>
    <div class="pc-conns">🔗 ${conns}</div>
    ${!isStop&&p.id!==srcId?`<button class="pc-addBtn" onclick="addStopById(${p.id})">Tambah ke Rute</button>`:''}
  </div>`;
}
function drawAllMarkers(){
  allMarkers.forEach(m=>map.removeLayer(m)); allMarkers=[];
  PLACES.forEach(p=>{
    const m=L.marker([p.lat,p.lng],{icon:makeIcon(p)}).addTo(map).bindPopup(makePopup(p),{maxWidth:260});
    allMarkers.push(m);
  });
  if(window.lucide) lucide.createIcons();
}
drawAllMarkers();

// ── KONTROL DROPDOWN & KATEGORI ──
function buildCatFilter(){
  const cats=['all','hotel','sejarah','museum','alam','taman','budaya','religi','kuliner','belanja','modern'];
  document.getElementById('catWrap').innerHTML = cats.map(c=>
    `<button class="catbtn${c===activeCategory?' on':''}" onclick="setCategory('${c}',this)">${CAT_LABELS[c]||c}</button>`
  ).join('');
}
function setCategory(cat,btn){
  activeCategory=cat;
  document.querySelectorAll('.catbtn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  buildDstSelect();
}
function buildDstSelect(){
  const dst=document.getElementById('selDst');
  const pool = activeCategory==='all' ? PLACES : PLACES.filter(p=>p.cat===activeCategory);
  
  let options = '';
  if (!dstPlaceholderRemoved) {
    options += `<option value="" disabled selected>Pilih destinasi</option>`;
  }
  
  options += pool.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  dst.innerHTML = options;
}
function populateSrc(){
  const src = document.getElementById('selSrc');
  let options = '';
  if (!srcPlaceholderRemoved) {
    options += `<option value="" disabled selected>Pilih titik asal</option>`;
  }
  options += PLACES.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  src.innerHTML = options;
}
populateSrc(); buildDstSelect(); buildCatFilter();

function onSrcChange(){
  srcId=parseInt(document.getElementById('selSrc').value);
  srcPlaceholderRemoved = true;
  populateSrc();
  document.getElementById('selSrc').value = srcId;
  clearRoute();
  drawAllMarkers();
  if(window.lucide) lucide.createIcons();
}

function onDstChange(){
  dstPlaceholderRemoved = true;
  const currentVal = document.getElementById('selDst').value;
  buildDstSelect();
  document.getElementById('selDst').value = currentVal;
}

// ── MANAJEMEN DESTINASI ──
function addStop(){
  const val = document.getElementById('selDst').value;
  if (!val) {
    log('Pilih destinasi terlebih dahulu!', 'lr');
    return;
  }
  const v=parseInt(val);
  addStopById(v);
}
function addStopById(v){
  if(v===srcId){log('Destinasi sama dengan asal!','lr');return;}
  if(stops.includes(v)){log('Sudah ada di rute!','lr');return;}
  if(stops.length>=6){log('Maks 6 destinasi.','lr');return;}
  stops.push(v);renderStops();drawAllMarkers(); if(window.lucide) lucide.createIcons();
  map.setView([PLACES[v].lat,PLACES[v].lng],15);
  log('Tambah: '+PLACES[v].name,'lb');
}
function removeStop(id){stops=stops.filter(s=>s!==id);renderStops();clearRoute();drawAllMarkers(); if(window.lucide) lucide.createIcons();}
function renderStops(){
  const el=document.getElementById('stopList');
  document.getElementById('stopCount').textContent=stops.length;
  if(!stops.length){el.innerHTML='<div style="font-size:.74rem;color:var(--text3);text-align:center;padding:8px;">Belum ada destinasi</div>';return;}
  el.innerHTML=stops.map((id,i)=>`
    <div class="stop-item">
      <div class="s-num">${i+1}</div>
      <span style="flex:1;font-size:.77rem;">${PLACES[id].name.split('(')[0].trim()}</span>
      <button class="s-del" onclick="removeStop(${id})">✕</button>
    </div>`).join('');
}

// ── IMPLEMENTASI ALGORITMA ──
class MinHeap{
  constructor(){this.h=[];}
  push(x){this.h.push(x);this._up(this.h.length-1);}
  pop(){const t=this.h[0],l=this.h.pop();if(this.h.length){this.h[0]=l;this._dn(0);}return t;}
  get size(){return this.h.length;}
  _up(i){while(i>0){const p=(i-1)>>1;if(this.h[p][0]<=this.h[i][0])break;[this.h[p],this.h[i]]=[this.h[i],this.h[p]];i=p;}}
  _dn(i){const n=this.h.length;while(true){let s=i,l=2*i+1,r=2*i+2;if(l<n&&this.h[l][0]<this.h[s][0])s=l;if(r<n&&this.h[r][0]<this.h[s][0])s=r;if(s===i)break;[this.h[s],this.h[i]]=[this.h[i],this.h[s]];i=s;}}
}

function dijkstraRun(src,tgt){
  const dist={},prev={},vis=[];
  PLACES.forEach(p=>dist[p.id]=Infinity);
  dist[src]=0;const heap=new MinHeap();heap.push([0,src]);
  while(heap.size){
    const[d,u]=heap.pop();if(vis.includes(u))continue;vis.push(u);if(u===tgt)break;
    for(const{to,w}of ADJ[u])if(d+w<dist[to]){dist[to]=d+w;prev[to]=u;heap.push([d+w,to]);}
  }
  return{dist:dist[tgt],prev,visited:vis};
}
function bfsRun(src,tgt){
  const prev={},vis=[],seen=new Set([src]),q=[src];
  while(q.length){const u=q.shift();vis.push(u);if(u===tgt)break;for(const{to}of ADJ[u])if(!seen.has(to)){seen.add(to);prev[to]=u;q.push(to);}}
  const path=recon(prev,src,tgt)||[];
  let d=0;for(let i=0;i<path.length-1;i++){const e=ADJ[path[i]].find(x=>x.to===path[i+1]);if(e)d+=e.w;}
  return{dist:d,prev,visited:vis};
}
function kruskalRun(){
  const parent=PLACES.map((_,i)=>i);
  function find(x){while(parent[x]!==x){parent[x]=parent[parent[x]];x=parent[x];}return x;}
  function union(a,b){const ra=find(a),rb=find(b);if(ra===rb)return false;parent[ra]=rb;return true;}
  const sorted=[...EDGES].sort((a,b)=>a[2]-b[2]);
  const mst=[];let tw=0;
  for(const[a,b,w]of sorted)if(union(a,b)){mst.push([a,b,w]);tw+=w;if(mst.length===PLACES.length-1)break;}
  return{mst,totalW:tw,visited:[...new Set(mst.flatMap(e=>[e[0],e[1]]))]};
}
function recon(prev,src,tgt){const p=[];let c=tgt;while(c!==undefined){p.unshift(c);c=prev[c];}return p[0]===src?p:null;}

// ── DATA PSEUDOCODE ──
const PSEUDO={
  dijkstra:[
    {id:'d1', text:`<span class="kw">function</span> <span class="fn">Dijkstra</span>(<span class="vr">graph</span>, <span class="vr">src</span>, <span class="vr">tgt</span>):`},
    {id:'d2', text:`  <span class="cm">// Init semua dist = ∞</span>`},
    {id:'d3', text:`  <span class="kw">for each</span> node <span class="vr">v</span>: dist[v] ← <span class="nm">∞</span>`},
    {id:'d4', text:`  dist[<span class="vr">src</span>] ← <span class="nm">0</span>`},
    {id:'d5', text:`  heap ← PriorityQueue()  <span class="cm">// min-heap</span>`},
    {id:'d6', text:`  heap.<span class="fn">push</span>([<span class="nm">0</span>, src])`},
    {id:'d7', text:`  <span class="kw">while</span> heap <span class="kw">not empty</span>:`},
    {id:'d8', text:`    [d, u] ← heap.<span class="fn">extractMin</span>()  <span class="cm">// node jarak terkecil</span>`},
    {id:'d9', text:`    <span class="kw">if</span> u == <span class="vr">tgt</span>: <span class="kw">break</span>`},
    {id:'d10',text:`    <span class="kw">for each</span> neighbor <span class="vr">v</span> <span class="kw">of</span> u:`},
    {id:'d11',text:`      <span class="kw">if</span> d + w(u,v) &lt; dist[<span class="vr">v</span>]:  <span class="cm">// relaksasi</span>`},
    {id:'d12',text:`        dist[v] ← d + w(u,v)`},
    {id:'d13',text:`        prev[v] ← u`},
    {id:'d14',text:`        heap.<span class="fn">push</span>([dist[v], v])`},
    {id:'d15',text:`  <span class="kw">return</span> <span class="fn">reconstruct</span>(prev, src, tgt)`},
  ],
  bfs:[
    {id:'b1', text:`<span class="kw">function</span> <span class="fn">BFS</span>(<span class="vr">graph</span>, <span class="vr">src</span>, <span class="vr">tgt</span>):`},
    {id:'b2', text:`  queue ← Queue()  <span class="cm">// FIFO</span>`},
    {id:'b3', text:`  queue.<span class="fn">enqueue</span>(src)`},
    {id:'b4', text:`  visited ← {src}`},
    {id:'b5', text:`  prev ← {}`},
    {id:'b6', text:`  <span class="kw">while</span> queue <span class="kw">not empty</span>:`},
    {id:'b7', text:`    u ← queue.<span class="fn">dequeue</span>()  <span class="cm">// ambil paling depan</span>`},
    {id:'b8', text:`    <span class="kw">if</span> u == <span class="vr">tgt</span>: <span class="kw">break</span>`},
    {id:'b9', text:`    <span class="kw">for each</span> neighbor <span class="vr">v</span> <span class="kw">of</span> u:`},
    {id:'b10',text:`      <span class="kw">if</span> v <span class="kw">not in</span> visited:`},
    {id:'b11',text:`        visited.<span class="fn">add</span>(v)`},
    {id:'b12',text:`        prev[v] ← u`},
    {id:'b13',text:`        queue.<span class="fn">enqueue</span>(v)`},
    {id:'b14',text:`  <span class="kw">return</span> <span class="fn">reconstruct</span>(prev, src, tgt)`},
  ],
  kruskal:[
    {id:'k1', text:`<span class="kw">function</span> <span class="fn">Kruskal</span>(<span class="vr">graph</span>):`},
    {id:'k2', text:`  <span class="cm">// Urutkan semua sisi ascending</span>`},
    {id:'k3', text:`  edges ← <span class="fn">sort</span>(graph.edges, by=weight)`},
    {id:'k4', text:`  uf ← <span class="fn">UnionFind</span>(graph.nodes)`},
    {id:'k5', text:`  mst ← []`},
    {id:'k6', text:`  <span class="kw">for each</span> edge (u, v, w) <span class="kw">in</span> edges:`},
    {id:'k7', text:`    <span class="kw">if</span> uf.<span class="fn">find</span>(u) ≠ uf.<span class="fn">find</span>(v):  <span class="cm">// bukan siklus</span>`},
    {id:'k8', text:`      mst.<span class="fn">add</span>(u, v, w)`},
    {id:'k9', text:`      uf.<span class="fn">union</span>(u, v)  <span class="cm">// gabungkan komponen</span>`},
    {id:'k10',text:`      <span class="kw">if</span> |mst| == V−1: <span class="kw">break</span>`},
    {id:'k11',text:`  <span class="kw">return</span> mst  <span class="cm">// V−1 sisi, bobot total minimum</span>`},
  ],
};

function renderPseudo(key,hlIds=[]){
  const lines=PSEUDO[key];
  document.getElementById('pseudoBlock').innerHTML=
    `<div class="pseudo">${lines.map(l=>`<span class="pln${hlIds.includes(l.id)?' hl':''}" id="pl-${l.id}">${l.text}</span>`).join('\n')}</div>`;
}
renderPseudo('dijkstra');

function hlPseudo(key,ids){
  renderPseudo(key,ids);
  if(ids.length){
    const el=document.getElementById('pl-'+ids[0]);
    if(el)el.scrollIntoView({block:'nearest',behavior:'smooth'});
  }
}

// ── GOOGLE MAPS ──
function openInGMaps(){
  if(!lastRoute||lastRoute.length<1)return;
  const origin=`${PLACES[lastRoute[0]].lat},${PLACES[lastRoute[0]].lng}`;
  const dest=`${PLACES[lastRoute[lastRoute.length-1]].lat},${PLACES[lastRoute[lastRoute.length-1]].lng}`;
  const wps=lastRoute.slice(1,-1).map(id=>`${PLACES[id].lat},${PLACES[id].lng}`).join('|');
  let url=`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`;
  if(wps)url+=`&waypoints=${wps}`;
  window.open(url,'_blank');
}

// ── PANEL HASIL KRUSKAL ──
function renderKruskalPanel(result){
  const {mst,totalW}=result;
  const skipped=EDGES.length-mst.length;
  let html=`<div class="kruskal-panel">
    <div class="kp-head">
      <div class="kp-title">Hasil Kruskal — MST Surabaya</div>
      <span style="font-size:.68rem;opacity:.85;">${PLACES.length} node</span>
    </div>
    <div class="kp-stats">
      <div class="kp-stat"><div class="kp-sl">Total Bobot MST</div><div class="kp-sv">${totalW.toFixed(1)} km</div></div>
      <div class="kp-stat"><div class="kp-sl">Sisi dalam MST</div><div class="kp-sv">${mst.length}</div></div>
      <div class="kp-stat"><div class="kp-sl">Sisi Dibuang</div><div class="kp-sv" style="color:#dc2626">${skipped}</div></div>
      <div class="kp-stat"><div class="kp-sl">Total Sisi</div><div class="kp-sv" style="color:var(--text2)">${EDGES.length}</div></div>
    </div>
    <div class="kp-total-bar">
      <span>Total Bobot MST</span>
      <strong>${totalW.toFixed(1)} km</strong>
    </div>
    <div class="kp-edges">
      <div class="kp-etitle">Sisi MST (${mst.length} sisi, urutan dipilih)</div>
      <div class="kp-edge-list">`;
  mst.forEach(([a,b,w],i)=>{
    html+=`<div class="kp-edge-item">
      <div class="kp-edge-num">${i+1}</div>
      <div class="kp-edge-name"><b>${PLACES[a].name.split(' ').slice(0,2).join(' ')}</b> ↔ <b>${PLACES[b].name.split(' ').slice(0,2).join(' ')}</b></div>
      <div class="kp-edge-km">${w} km</div>
    </div>`;
  });
  html+=`</div></div></div>`;
  document.getElementById('kruskalPanel').innerHTML=html;
  document.getElementById('kruskalPanel').style.display='block';
  document.getElementById('pathStepsWrap').style.display='none';
}

// ── PENJELASAN ALGORITMA ──
function buildExplanation(key,segs){
  const cls={dijkstra:'d',bfs:'b',kruskal:'k'}[key];
  const color={dijkstra:'var(--blue)',bfs:'var(--green)',kruskal:'var(--amber)'}[key];
  const aName={dijkstra:'Dijkstra',bfs:'BFS',kruskal:'Kruskal MST'}[key];
  let html='';

  if(key==='kruskal'){
    const r=segs[0].result;
    html+=`<div class="expl-block">
      <div class="expl-head k">Kruskal MST — Analisis Jaringan ${PLACES.length} Destinasi</div>
      <div class="expl-body">
        <div class="expl-txt"><b>Kruskal</b> bukan mencari rute A→B, melainkan membangun <b>Minimum Spanning Tree</b> — jaringan minimum yang menghubungkan semua ${PLACES.length} destinasi sekaligus.<br><br>
        <b>Proses:</b> ${EDGES.length} sisi diurutkan dari yang terpendek. Tiap sisi dicoba ditambah — jika kedua ujungnya berada di komponen berbeda (cek via Union-Find), sisi masuk ke MST. Jika berada di komponen yang sama, sisi dibuang untuk mencegah siklus.</div>
        <div class="insight a">📊 <b>${r.mst.length}/${EDGES.length}</b> sisi masuk MST &nbsp;|&nbsp; <b>${EDGES.length-r.mst.length}</b> sisi dibuang karena siklus<br>
        Total bobot MST: <b style="color:var(--amber)">${r.totalW.toFixed(1)} km</b></div>
      </div></div>`;
    return html;
  }

  segs.forEach((seg,si)=>{
    const{src,tgt,result,path}=seg;
    const vis=result.visited;
    html+=`<div class="expl-block">
      <div class="expl-head ${cls}">${aName} Segmen ${si+1}/${segs.length}: ${PLACES[src].name.split(' ').slice(0,2).join(' ')} → ${PLACES[tgt].name.split(' ').slice(0,2).join(' ')}</div>
      <div class="expl-body">`;
    if(key==='dijkstra'){
      html+=`<div class="expl-txt">
        <b>Init:</b> Semua node dist=∞, kecuali ${PLACES[src].name.split(' ')[0]}=0. Masukkan ke min-heap.<br>
        <b>Eksplorasi:</b> Heap extractMin() mengambil node dengan jarak terkecil. Dari ${PLACES[src].name.split(' ')[0]}, periksa ${ADJ[src].length} tetangga: ${ADJ[src].map(e=>PLACES[e.to].name.split(' ')[0]+'('+e.w+'km)').join(', ')}.<br>
        <b>Relaksasi Sisi:</b> Jika dist[u]+w(u,v) &lt; dist[v], perbarui dist[v] dan prev[v].
      </div>`;
    } else {
      html+=`<div class="expl-txt">
        <b>Init:</b> ${PLACES[src].name.split(' ')[0]} dimasukkan ke antrean FIFO dan ditandai sebagai dikunjungi.<br>
        <b>Level-per-level:</b> BFS mengeluarkan node dari depan antrean, lalu memasukkan semua tetangga yang belum dikunjungi ke belakang antrean.<br>
        <b>Level 1</b> dari ${PLACES[src].name.split(' ')[0]}: ${ADJ[src].map(e=>PLACES[e.to].name.split(' ')[0]).join(', ')}.
      </div>`;
    }
    html+=`<div class="flabel" style="font-size:.59rem;color:var(--text3);letter-spacing:.08em;text-transform:uppercase;margin-bottom:4px;">Node dieksplorasi (${vis.length})</div>
      <div class="nt-wrap">`;
    vis.forEach((id,idx)=>{
      const isS=id===src,isT=id===tgt,onP=path&&path.includes(id);
      const type=isS||isT?'se':onP?'path':'vis';
      const lbl=isS?'▶ Mulai':isT?'Target ditemukan!':onP?'✓ Di jalur akhir':'○ Eksplorasi saja';
      html+=`<div class="nt-item ${type}">
        <div class="nt-num" style="background:${isS?'var(--green)':isT?'var(--red)':onP?'var(--blue)':'#94a3b8'}">${idx+1}</div>
        <div><div><b>${PLACES[id].name.split(' ').slice(0,2).join(' ')}</b></div>
        <div class="nt-sub">${lbl}</div></div></div>`;
    });
    html+=`</div>`;
    if(path&&path.length>1){
      let sd=0;for(let i=0;i<path.length-1;i++){const e=EDGES.find(x=>(x[0]===path[i]&&x[1]===path[i+1])||(x[0]===path[i+1]&&x[1]===path[i]));if(e)sd+=e[2];}
      const pn=path.map(id=>`${PLACES[id].name.split(' ')[0]}`).join(' → ');
      html+=`<div class="expl-txt"><b>Rekonstruksi melalui prev[]:</b><br>
        <span style="color:${color};font-weight:600;font-size:.72rem;">${pn}</span><br>
        Jarak: <b style="color:${color}">${sd.toFixed(1)} km</b>${key==='bfs'?` · <b>${path.length-1} hop</b>`:''}
      </div>`;
    }
    const ic=key==='dijkstra'?'b':'g';
    const it=key==='dijkstra'
      ?`Dijkstra mengunjungi <b>${vis.length}/${PLACES.length} node</b>. Min-heap memastikan node terdekat selalu diproses lebih dulu — jaminan rute optimal.`
      :`BFS mengunjungi <b>${vis.length}/${PLACES.length} node</b> secara level demi level. Jalur memiliki <b>${path?path.length-1:'?'} hop</b> (minimum), namun belum tentu jarak km terpendek.`;
    html+=`<div class="insight ${ic}">💡 ${it}</div></div></div>`;
  });
  return html;
}

// ── FUNGSI EKSEKUSI RUTE ──
async function solve(){
  if(running) return;
  if(srcId === null){log('Pilih titik asal terlebih dahulu!','lr');return;}
  if(algo!=='kruskal'&&stops.length===0){log('Tambah minimal 1 destinasi!','lr');return;}
  
  running=true;
  const currentSolveId = ++solveId; 
  
  clearRoute(false, false);
  document.getElementById('btnSolve').disabled=true;
  document.getElementById('gmapsBtn').disabled=true;
  document.querySelectorAll('#selSrc, #selDst, .btn-add, .catbtn, .s-del').forEach(el => el.disabled = true);
  log('Menjalankan '+algo.toUpperCase()+'...','lb');
  renderPseudo(algo);

  const checkCancel = () => currentSolveId !== solveId;

  if(algo==='kruskal'){
    const tAlgorithmStart = performance.now();
    const r=kruskalRun();
    const algorithmTime = (performance.now() - tAlgorithmStart).toFixed(3);

    hlPseudo('kruskal',['k1','k3','k4']);
    await sleep(animSpd*2);
    if(checkCancel()) return;

    hlPseudo('kruskal',['k6','k7']);
    for(const id of r.visited){
      if(checkCancel()) return;
      const p=PLACES[id];
      const c=L.circleMarker([p.lat,p.lng],{radius:18,fillColor:'#d97706',fillOpacity:.12,color:'#d97706',weight:1.5,opacity:.4}).addTo(map);
      visitedMarkers.push(c);
      if(animSpd>0) await sleep(animSpd);
    }

    hlPseudo('kruskal',['k8','k9','k10']);
    for(const[a,b] of r.mst){
      if(checkCancel()) return;
      const geom=await getRouteGeom(a,b);
      if(checkCancel()) return;
      const l=L.polyline(geom,{color:'#059669',weight:5,opacity:.9}).addTo(map);
      mstLines.push(l);
      if(animSpd>0) await sleep(animSpd*1.5);
    }

    if(checkCancel()) return;
    hlPseudo('kruskal',['k11']);
    drawAllMarkers();

    setStats(r.totalW.toFixed(1)+' km', PLACES.length+' node', r.visited.length, algorithmTime+' ms', `MST: ${r.mst.length} sisi`);
    renderKruskalPanel(r);

    const lats=r.mst.flatMap(e=>[PLACES[e[0]].lat,PLACES[e[1]].lat]);
    const lngs=r.mst.flatMap(e=>[PLACES[e[0]].lng,PLACES[e[1]].lng]);
    map.fitBounds([[Math.min(...lats)-.01,Math.min(...lngs)-.01],[Math.max(...lats)+.01,Math.max(...lngs)+.01]]);

    document.getElementById('prog').style.width='100%';
    log('MST selesai! Total: '+r.totalW.toFixed(1)+' km, '+r.mst.length+' sisi ('+algorithmTime+' ms)','lg');

    document.getElementById('explainContent').innerHTML=buildExplanation('kruskal',[{src:srcId,tgt:null,result:r,path:null}]);
    autoSwitchExplain();

  } else {
    let totalDist=0,allVis=[],allPE=[],cur=srcId,ok=true;
    const routeNames=[PLACES[srcId].name],segs=[],routeIds=[srcId];
    let totalAlgorithmTime = 0;

    for(let i=0;i<stops.length;i++){
      const tgt=stops[i];
      if(checkCancel()) return;

      const tAlgorithmStart = performance.now();
      const res=algo==='dijkstra'?dijkstraRun(cur,tgt):bfsRun(cur,tgt);
      totalAlgorithmTime += (performance.now() - tAlgorithmStart);

      hlPseudo(algo,algo==='dijkstra'?['d3','d4','d5','d6']:['b2','b3','b4']);
      await sleep(animSpd);
      if(checkCancel()) return;

      for(const v of res.visited){
        if(checkCancel()) return;
        if(!allVis.includes(v))allVis.push(v);
        if(animSpd>0){
          const p=PLACES[v];
          const c=L.circleMarker([p.lat,p.lng],{radius:16,fillColor:'#2563eb',fillOpacity:.1,color:'#2563eb',weight:1,opacity:.35}).addTo(map);
          visitedMarkers.push(c);
          hlPseudo(algo,algo==='dijkstra'?['d7','d8']:['b6','b7']);
          await sleep(animSpd);
        }
      }
      if(!animSpd){
        allVis.forEach(id=>{const p=PLACES[id];const c=L.circleMarker([p.lat,p.lng],{radius:16,fillColor:'#2563eb',fillOpacity:.1,color:'#2563eb',weight:1,opacity:.35}).addTo(map);visitedMarkers.push(c);});
      }

      if(!isFinite(res.dist)){log('Tidak ada rute ke '+PLACES[tgt].name,'lr');ok=false;break;}
      const path=recon(res.prev,cur,tgt);
      if(!path){ok=false;break;}

      hlPseudo(algo,algo==='dijkstra'?['d11','d12','d13']:['b11','b12']);
    for(let j=0;j<path.length-1;j++){
        if(checkCancel()) return;
        
        const nodeA = PLACES[path[j]].name.split(' ')[0];
        const nodeB = PLACES[path[j+1]].name.split(' ')[0];
        log(`Mengambil rute jalan: ${nodeA} ↔ ${nodeB}...`, 'lb');

        const geom=await getRouteGeom(path[j],path[j+1]);
        if(checkCancel()) return;
        
        const l=L.polyline(geom,{color:'#fbbf24',weight:6,opacity:.95}).addTo(map);
        pathLines.push(l);
        allPE.push([path[j],path[j+1]]);
        if(animSpd>0)await sleep(animSpd);
      }

      if(checkCancel()) return;
      hlPseudo(algo,algo==='dijkstra'?['d15']:['b14']);
      await sleep(animSpd>0?animSpd:0);

      segs.push({src:cur,tgt,result:res,path});
      totalDist+=res.dist;routeNames.push(PLACES[tgt].name);routeIds.push(tgt);cur=tgt;
      document.getElementById('prog').style.width=((i+1)/stops.length*100)+'%';
    }

    if(checkCancel()) return;
    drawAllMarkers();
    const finalAlgorithmTime = totalAlgorithmTime.toFixed(3);

    if(ok){
      lastRoute=routeIds;
      setStats(totalDist.toFixed(1)+' km', stops.length, allVis.length, finalAlgorithmTime+' ms',
        routeNames.map(n=>n.split(' ').slice(0,2).join(' ')).join(' → '));
      renderPathSteps(allPE);
      document.getElementById('gmapsBtn').disabled=false;

      if(allPE.length){
        const lats=allPE.flatMap(s=>[PLACES[s[0]].lat,PLACES[s[1]].lat]);
        const lngs=allPE.flatMap(s=>[PLACES[s[0]].lng,PLACES[s[1]].lng]);
        map.fitBounds([[Math.min(...lats)-.008,Math.min(...lngs)-.008],[Math.max(...lats)+.008,Math.max(...lngs)+.008]]);
      }
      log('Selesai! '+totalDist.toFixed(1)+' km | Node dikunjungi:'+allVis.length+' | '+finalAlgorithmTime+' ms','lg');
      document.getElementById('explainContent').innerHTML=buildExplanation(algo,segs);
      autoSwitchExplain();
    }
  }

  running=false;
  document.getElementById('btnSolve').disabled=false;
  document.querySelectorAll('#selSrc, #selDst, .btn-add, .catbtn, .s-del').forEach(el => el.disabled = false);
}

function autoSwitchExplain(){
  document.querySelectorAll('.rp-tab').forEach((t,i)=>t.classList.toggle('on',i===1));
  document.querySelectorAll('.rp-pane').forEach((p,i)=>p.classList.toggle('on',i===1));
}

function setStats(d,s,v,t,r){
  document.getElementById('sDist').textContent=d;
  document.getElementById('sStops').textContent=s;
  document.getElementById('sVis').textContent=v;
  document.getElementById('sTime').textContent=t;
  document.getElementById('sRoute').textContent=r;
}

function renderPathSteps(edges){
  const el=document.getElementById('routeSteps');
  if(!edges.length){el.innerHTML='<div style="font-size:.74rem;color:var(--text3);">Tidak ada langkah.</div>';return;}
  const nodes=[edges[0][0],...edges.map(e=>e[1])];
  el.innerHTML=nodes.map((id,i)=>{
    const e=edges[i];
    const w=e?EDGES.find(x=>(x[0]===e[0]&&x[1]===e[1])||(x[0]===e[1]&&x[1]===e[0]))?.[2]||'?':'';
    return`<div class="r-step">
      <div class="r-dot ${i===0?'start':i===nodes.length-1?'end':''}"></div>
      <div style="flex:1">
        <div class="r-node">${PLACES[id].name}</div>
        ${e?`<div class="r-dist">↓ ${w} km → ${PLACES[e[1]].name.split(' ').slice(0,2).join(' ')}</div>`:''}
      </div>
    </div>`;
  }).join('');
}

function clearRoute(redraw=true, shouldCancel=true){
  if (shouldCancel) {
    solveId++;
    running=false;
    document.getElementById('btnSolve').disabled=false;
    document.querySelectorAll('#selSrc, #selDst, .btn-add, .catbtn, .s-del').forEach(el => el.disabled = false);
  }

  visitedMarkers.forEach(m=>map.removeLayer(m)); visitedMarkers=[];
  pathLines.forEach(l=>map.removeLayer(l)); pathLines=[];
  mstLines.forEach(l=>map.removeLayer(l)); mstLines=[];
  document.getElementById('prog').style.width='0%';
  setStats('—','—','—','—','—');
  document.getElementById('routeSteps').innerHTML='<div style="font-size:.74rem;color:var(--text3);">Klik "Cari Rute Optimal".</div>';
  document.getElementById('kruskalPanel').style.display='none';
  document.getElementById('pathStepsWrap').style.display='block';
  document.getElementById('gmapsBtn').disabled=true;
  lastRoute=null;
  if(redraw) {
    drawAllMarkers();
    if(window.lucide) lucide.createIcons();
  }
}

function resetAll(){
  solveId++;
  stops=[];srcId=null;
  srcPlaceholderRemoved = false;
  dstPlaceholderRemoved = false;
  populateSrc();
  buildDstSelect();
  renderStops();clearRoute();
  if(window.lucide) lucide.createIcons();
  log('Reset semua.','lb');
}

function setAlgo(a,el){
  algo=a;
  document.querySelectorAll('.apill').forEach(b=>b.classList.remove('on'));
  el.classList.add('on');
  ['dijkstra','bfs','kruskal'].forEach(k=>document.getElementById('ami-'+k).classList.toggle('show',k===a));
  renderPseudo(a);clearRoute();log('Algoritma: '+a.toUpperCase(),'lb');
}
function setSpd(ms,el){animSpd=ms;document.querySelectorAll('.spd').forEach(b=>b.classList.remove('on'));el.classList.add('on');}
function toggleSec(h){h.classList.toggle('open');h.nextElementSibling.classList.toggle('open');}
function switchTab(name,btn){
  document.querySelectorAll('.rp-tab').forEach(t=>t.classList.remove('on'));
  document.querySelectorAll('.rp-pane').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('pane-'+name).classList.add('on');
}
function log(msg,cls=''){
  const box=document.getElementById('logBox'),d=document.createElement('div');
  d.textContent='> '+msg;if(cls)d.className=cls;
  box.appendChild(d);box.scrollTop=box.scrollHeight;
}
function sleep(ms){return new Promise(r=>ms>0?setTimeout(r,ms):r());}

// ── LOGIKA LOGIN ──
function attemptLogin() {
  const usn = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const error = document.getElementById('loginError');

  if (usn === "admin" && pass === "daa2026") {
    localStorage.setItem('surabaya_route_login', 'true');
    showApp();
    log('Login berhasil. Selamat datang, admin.', 'lg');
  } else {
    error.style.display = 'block';
    setTimeout(() => { error.style.display = 'none'; }, 3000);
  }
}

function showApp() {
  document.getElementById('loginScreen').style.display = 'none';
  const mainApp = document.getElementById('mainApp');
  mainApp.style.display = 'flex';
  setTimeout(() => {
    map.invalidateSize();
    const allLats = PLACES.map(p => p.lat);
    const allLngs = PLACES.map(p => p.lng);
    map.fitBounds([
      [Math.min(...allLats) - 0.01, Math.min(...allLngs) - 0.01],
      [Math.max(...allLats) + 0.01, Math.max(...allLngs) + 0.01]
    ]);
  }, 100);
}

function logout() {
  localStorage.removeItem('surabaya_route_login');
  location.reload();
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('surabaya_theme', isDark ? 'dark' : 'light');
  document.getElementById('themeBtn').textContent = isDark ? '☀️' : '🌓';
}

window.addEventListener('load', () => {
  if (localStorage.getItem('surabaya_route_login') === 'true') {
    showApp();
  }
  if (localStorage.getItem('surabaya_theme') === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('themeBtn').textContent = '☀️';
  }
});

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && document.getElementById('loginScreen').style.display !== 'none') {
    attemptLogin();
  }
});
