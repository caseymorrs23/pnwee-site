
(function(){ // active link
  var here = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav a').forEach(function(a){
    var rel = new URL(a.getAttribute('href'), location.href).pathname.replace(/\/index\.html$/, '/');
    if (rel === here) { a.style.background='rgba(255,255,255,.10)'; a.style.textDecoration='none'; }
  });
})();

/* FORM ENHANCE */
(function(){
  function enhance(form){
    if(!form) return;
    var btn = form.querySelector('button.btn, .btn[type="submit"]') || form.querySelector('button, input[type="submit"]');
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        // Trigger native validation UI
        form.reportValidity();
        e.preventDefault();
        return false;
      }
      if(btn){
        btn.dataset.orig = btn.textContent;
        btn.textContent = 'Sending...';
        btn.setAttribute('disabled','disabled');
      }
    });
    // Custom messages (optional)
    var email = form.querySelector('input[type="email"]');
    if(email){
      email.addEventListener('invalid', function(){
        email.setCustomValidity('Please enter a valid email like name@example.com');
      });
      email.addEventListener('input', function(){ email.setCustomValidity(''); });
    }
  }
  document.querySelectorAll('form').forEach(enhance);
})();
