# Rezaur Rahman Ratul — Portfolio (Static Site)

This is a static (HTML/CSS/JS) conversion of the original PHP portfolio, ready for GitHub Pages.
The PHP admin panel, database, and server-side scripts were removed since GitHub Pages only serves
static files — the content they managed is now hard-coded into `index.html` / `publications.html`.

## Deploy to GitHub Pages

1. Create a new GitHub repo, e.g. `Rezaur16.github.io` (for a user site) or any name for a project site.
2. Push the contents of this folder to the repo root (on `main`).
3. In the repo, go to **Settings → Pages**, set Source to `main` / `/ (root)`, and save.
4. Your site will be live at `https://Rezaur16.github.io/` (user site) or
   `https://Rezaur16.github.io/<repo-name>/` (project site).

## Editing content

All text content (bio, projects, publications, awards, contact info) lives in one place:
`content.py` + `generate.py` were used to build the HTML — if you're comfortable with Python, edit
`content.py`'s dictionary and re-run `python3 generate.py` to regenerate `index.html` and
`publications.html`. Otherwise, just hand-edit the HTML files directly; it's plain HTML.

## Contact form

The contact form posts to [FormSubmit](https://formsubmit.co) (`https://formsubmit.co/rezaurrahmanratul@gmail.com`),
a free static-site-friendly form backend — no server needed. **The first submission will trigger a
one-time confirmation email from FormSubmit that you must click to activate the form.** If you'd
rather not depend on a third party, swap the form `action` for another provider (e.g. Formspree) or
just link to `mailto:`.

## Structure

```
index.html              Home page
publications.html       Sortable/filterable publication list
Profile.pdf             Downloadable CV
assets/css/style.css    Styling (light/dark theme via data-theme attribute)
assets/js/app.js        Nav toggle, theme toggle, contact-form honeypot
assets/js/publications.js  Search/filter/sort/BibTeX export for the publications table
assets/img/profile.png  Profile photo
assets/downloads/       Bio text and other downloadable files
```

## Notes on content updates from your CV

Compared to the original placeholder content, the site now reflects your CV:
- Added phone number and university email as primary contact, personal Gmail as alternate.
- Added an **Awards & Achievements** section (Champion, two 1st Runner-ups, UIHP Top 4,
  Harvard Hackathon Top 10, National Blockchain Top 30, NSysS 2025 publication).
- Added the Waste Dataset image segmentation project and the SHOHOCHOR/UIHP project.
- Added the Bdwatersurfaceset (Data in Brief) and SoundIDS-SP (IEEE S&P) research threads.
- Renamed "Teaching" → "Experience & Teaching" and added your UIHP trainee role and certifications.

Feel free to add real links (GitHub repos, PDFs, DOIs) once available — currently several link
fields are empty since the CV/portfolio didn't specify URLs.
