function setupReveal(){
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((e)=>{
      if(e.isIntersecting){
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

function setupProgress(){
  const bar = document.getElementById("progress");
  if(!bar) return;

  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = p.toFixed(2) + "%";
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupParallaxLogo(){
  const logo = document.querySelector(".hero__bgLogo");
  if(!logo) return;

  const onScroll = () => {
    const y = window.scrollY || 0;
    logo.style.transform = `translate3d(0, ${y * 0.08}px, 0)`;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

setupReveal();
setupProgress();
setupParallaxLogo();
