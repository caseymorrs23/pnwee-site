document.addEventListener('DOMContentLoaded',()=>{const h=document.querySelector('#hamb'),n=document.querySelector('#nav');if(h&&n)h.addEventListener('click',()=>n.classList.toggle('open'));});
// ACTIVE-NAV: highlight current page
(function(){
  try{
    var here = location.pathname.replace(/\/index\.html$/, '/');
    document.querySelectorAll('.nav a').forEach(function(a){
      var href = a.getAttribute('href');
      if(!href) return;
      var rel = new URL(href, location.href).pathname.replace(/\/index\.html$/, '/');
      if(here === rel){ a.classList.add('active'); a.setAttribute('aria-current','page'); }
    });
  }catch(e){}
})();
