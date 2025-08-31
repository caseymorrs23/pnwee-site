// PNW Electrical Engineering - main interactions
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const toggle = document.querySelector('#mobile-toggle');
  const menu = document.querySelector('#mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // File input label update
  const fileInput = document.querySelector('#plans');
  const fileHelp = document.querySelector('#file-help');
  if (fileInput && fileHelp) {
    fileInput.addEventListener('change', () => {
      const names = Array.from(fileInput.files).map(f => f.name).join(', ');
      fileHelp.textContent = names ? `Selected: ${names}` : 'Attach PDF/DWG/ZIP, up to 25MB';
    });
  }

  // Quote form (validation + GA4 event)
  const form = document.querySelector('#quote-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      // Simple validation
      const required = form.querySelectorAll('[required]');
      let ok = true;
      required.forEach(el => {
        if (!el.value.trim()) ok = false;
      });
      if (!ok) {
        e.preventDefault();
        alert('Please complete all required fields.');
        return; // stop if invalid
      }

      // GA4 lead event
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'Form',
          event_label: 'Quote Form'
        });
      }
    });
  }
});
