// Lightweight 3D-ish lift based on mouse position
const card = document.getElementById('aboutCard');
if (card) {
  let rafId = 0;

  function onMove(e) {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;   // -0.5 .. 0.5
    const dy = (e.clientY - cy) / rect.height;  // -0.5 .. 0.5
    const liftX = (dx * 8).toFixed(2) + 'px';
    const liftY = (dy * 8).toFixed(2) + 'px';

    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      card.style.setProperty('--liftX', liftX);
      card.style.setProperty('--liftY', liftY);
    });
  }

  function onEnter() {
    card.classList.add('is-hovering');
  }
  function onLeave() {
    card.classList.remove('is-hovering');
    card.style.setProperty('--liftX', '0px');
    card.style.setProperty('--liftY', '0px');
  }

  card.addEventListener('mousemove', onMove);
  card.addEventListener('mouseenter', onEnter);
  card.addEventListener('mouseleave', onLeave);

  // Click → pop animation → navigate
  function goAbout() {
    card.classList.add('pop');
    // wait for the small pop, then navigate
    setTimeout(() => {
      window.location.href = 'about.html';
    }, 190);
  }

  card.addEventListener('click', goAbout);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goAbout();
    }
  });
}


///note!! was made by chat gpt!! ^^^^^
