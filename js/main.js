
  const slides = Array.from(document.querySelectorAll('.slide'));
  const total = slides.length;
  let i = 0;
  document.getElementById('tot').textContent = total;
  const bar = document.getElementById('bar');
  const cur = document.getElementById('cur');

  function show(n){
    i = Math.max(0, Math.min(total - 1, n));
    slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    bar.style.width = ((i + 1) / total * 100) + '%';
    cur.textContent = i + 1;
  }
  function next(){ show(i + 1); }
  function prev(){ show(i - 1); }

  document.getElementById('next').addEventListener('click', next);
  document.getElementById('prev').addEventListener('click', prev);
  document.addEventListener('keydown', e => {
    if(['ArrowRight',' ','PageDown'].includes(e.key)) { e.preventDefault(); next(); }
    if(['ArrowLeft','PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
    if(e.key === 'Home') show(0);
    if(e.key === 'End') show(total - 1);
  });
  // clique na metade direita/esquerda avança/volta
  document.getElementById('deck').addEventListener('click', e => {
    if(e.target.closest('.nav')) return;
    (e.clientX > window.innerWidth / 2) ? next() : prev();
  });
  show(0);
