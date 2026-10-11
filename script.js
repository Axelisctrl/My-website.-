// ===== EDIT YOUR COURSES HERE: [title, level, description, lessons, price] =====
var C=[
  ["Foundations","Beginner","Build a rock-solid base with core concepts and a first project.","8 lessons","$49"],
  ["The Polymath Method","Intermediate","Master several fields and connect ideas across disciplines.","12 lessons","$89"],
  ["Mastery Lab","Advanced","Live projects and frameworks to turn skill into income.","16 lessons","$149"],
  ["Learn Faster","Beginner","Study systems, memory and focus techniques that stick.","6 lessons","$39"],
  ["Thinking Tools","Intermediate","Mental models for sharper decisions and problem solving.","10 lessons","$69"],
  ["Build in Public","Advanced","Create, launch and grow your own audience and brand.","14 lessons","$119"]
];

// ===== EDIT YOUR FREE PDFs HERE: [title, pages] =====
var D=[
  ["Beginner's Roadmap","12 pages"],
  ["Polymath Cheat Sheet","6 pages"],
  ["30-Day Study Planner","9 pages"],
  ["Mental Models Guide","14 pages"],
  ["Focus & Memory Toolkit","8 pages"],
  ["Launch Checklist","5 pages"]
];

function card(c){
  return '<div class="card"><div class="th"><i>'+c[1].toUpperCase()+'</i><svg viewBox="0 0 95 90"><use href="#mk"/></svg></div><div class="cb"><h3>'+c[0]+'</h3><p>'+c[2]+'</p><div class="meta"><span>'+c[3]+'</span><b>'+c[4]+'</b></div><button class="btn" onclick="go(\'contact\')">Enroll</button></div></div>';
}

function show(f){
  document.getElementById('cg').innerHTML=C.filter(function(c){return f=='All'||c[1]==f}).map(card).join('');
  document.querySelectorAll('.chip').forEach(function(b){b.classList.toggle('on',b.textContent==f)});
}

document.getElementById('flt').innerHTML=['All','Beginner','Intermediate','Advanced'].map(function(t){
  return '<button class="chip" onclick="show(\''+t+'\')">'+t+'</button>';
}).join('');

document.getElementById('feat').innerHTML=C.slice(0,3).map(card).join('');

document.getElementById('dl').innerHTML=D.map(function(d,i){
  return '<div class="doc"><svg viewBox="0 0 44 54"><use href="#pdf"/></svg><div><h3>'+d[0]+'</h3><small>'+d[1]+' · Free</small></div><button class="btn" onclick="pick('+i+')">Get PDF</button></div>';
}).join('');

function pick(i){
  document.getElementById('dsel').value=D[i][0];
  document.getElementById('dok').style.display='none';
  document.getElementById('df').style.display='grid';
  document.querySelector('#df input[type=email]').focus();
}

// Switch between pages (intro, home, courses, docs, about, contact)
function go(p){
  document.querySelectorAll('.page').forEach(function(e){e.classList.remove('on')});
  document.getElementById(p).classList.add('on');
  var i=(p=='intro');
  document.getElementById('nav').classList.toggle('on',!i);
  document.getElementById('ft').classList.toggle('on',!i);
  document.querySelectorAll('.nv').forEach(function(n){n.classList.toggle('cur',n.dataset.p==p)});
  document.getElementById('menu').classList.remove('open');
  if(p=='courses') show('All');
  window.scrollTo(0,0);
}

document.getElementById('df').onsubmit=function(e){
  e.preventDefault();
  if(!document.getElementById('dsel').value){alert('Select a PDF first');return}
  this.style.display='none';
  document.getElementById('dok').style.display='block';
};

document.getElementById('cf').onsubmit=function(e){
  e.preventDefault();
  this.style.display='none';
  document.getElementById('cok').style.display='block';
};
