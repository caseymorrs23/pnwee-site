
# PNW Electrical Engineering — One-Page Website

A professional, SEO-ready one-page site for a Washington-licensed Electrical P.E. focused on plan reviews and stamping for EV charging, solar PV, audits, and low-voltage/controls.

## What’s Included
- `index.html` — Accessible, responsive one-page site
- `assets/styles.css` — Modern, clean design
- `assets/main.js` — Mobile nav, form helpers
- `assets/img/logo-primary.png` and `assets/img/logo-stamp.png`
- `favicon.png`, `robots.txt`, `sitemap.xml`
- JSON-LD structured data (ProfessionalService) in `<head>`

## Customize
- Replace license placeholder: **WA P.E. License #XXXXX** (header badge, contact panel).
- Update contact: `contact@pnwee.com` and `(206) 555-0198` in HTML + JSON-LD.
- Replace `https://example.com` in `index.html`, `robots.txt`, and `sitemap.xml` with your real domain.
- Optional: add your Google Analytics tag in `<head>`.

## Form Submissions
This template uses **FormSubmit**:
- In `index.html`, change the form `action` from `https://formsubmit.co/contact@pnwee.com` to `https://formsubmit.co/YOUR_EMAIL`.
- First submission triggers a confirmation email to validate the address.
- For sensitive files, use SharePoint/Dropbox links instead of attachments (or remove the file input).

**Alternatives**
- **Netlify**: Add `netlify` attribute to the form and host on Netlify for built-in form handling.
- **Formspree/Formspark**: Replace the `action` URL with provider endpoint.

## SEO Setup
- Page title, meta description, and keywords are tuned for Washington P.E. stamping + EV/Solar/Audits.
- Add a **Google Business Profile** with your domain and service area (Washington).
- Create 2–3 blog posts targeting common queries (see below).

### Suggested Blog Topics
- Do EV charging stations in Washington require a P.E. stamp?
- 5 steps to get solar plans approved in Washington
- What electrical engineers look for in permit compliance audits

## Deploy
### GitHub Pages
1. Create a new repo (e.g., `pnwee-site`).
2. Upload the contents of this folder (or the ZIP).
3. In **Settings → Pages**, set source to `main` branch `/root`.
4. Your site will appear at `https://<username>.github.io/pnwee-site/`.

### GoDaddy (cPanel)
1. Zip the folder (see `pnwee_site.zip`).
2. Upload to `/public_html` via File Manager.
3. Extract; ensure `index.html` is at the web root.

### Custom Domain & HTTPS
- Point DNS A-record to your host or set GitHub Pages CNAME.
- Enforce HTTPS in host settings.

## Accessibility
- High-contrast color system, focus rings, semantic HTML, and ARIA hints.
- Keyboard-accessible nav and form.

## Notes
- Logos included are placeholders; swap in your final artwork anytime (same filenames).
- This is a static site—no server code required.
