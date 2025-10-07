
(function(){ // active link
  var here = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav a').forEach(function(a){
    var rel = new URL(a.getAttribute('href'), location.href).pathname.replace(/\/index\.html$/, '/');
    if (rel === here) { a.style.background='rgba(255,255,255,.10)'; a.style.textDecoration='none'; }
  });
})();
