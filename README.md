# Quantum Information Meets Quantum Physics — workshop website

A compact, responsive Jekyll website designed for a small invited physics workshop. It is compatible with GitHub Pages and does not use a third-party theme.

## Edit the workshop information

The main settings are in `_config.yml`:

- workshop title and short title;
- date, venue, room, city, and contact address;
- registration URL;
- GitHub Pages `url` and `baseurl`.

Edit the structured content here:

- `_data/speakers.yml` — invited speakers;
- `_data/schedule.yml` — dynamic multi-day timetable;
- `_data/topics.yml` — scientific topics.

Replace `assets/images/hero-placeholder.svg` with your own image. Keeping the same filename avoids changing any templates. PNG, JPG, WebP, and SVG all work; update the filename in `_includes/hero.html` when needed.

## Run locally

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000/quantum-workshop/`.

## Publish with GitHub Pages

1. Create a public GitHub repository, for example `quantum-workshop`.
2. Upload this project to the repository.
3. In `_config.yml`, set:

```yaml
url: "https://YOUR-USERNAME.github.io"
baseurl: "/quantum-workshop"
```

4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder.
7. Save. GitHub will publish the site at `https://YOUR-USERNAME.github.io/quantum-workshop/`.

For a user or organization site named `YOUR-USERNAME.github.io`, set `baseurl: ""`.

## Registration

Replace this value in `_config.yml`:

```yaml
registration_url: "https://forms.gle/YOUR-FORM"
```

The registration buttons then link to your Google Form automatically.

## Design customization

Colors and dimensions are defined at the beginning of `assets/css/main.css` as CSS variables. The main palette is:

- dark navy: `#10243d`;
- teal: `#2b7a78`;
- warm accent: `#d88258`;
- pale background: `#eef3f8`.

## License

You may freely adapt this website for your academic workshop.
