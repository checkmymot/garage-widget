# Publishing this widget

The code is ready. Publishing needs a GitHub account (one-time, ~5 min).

## Steps

1. Create a GitHub account at https://github.com/signup (if you don't have one).
2. Create an **organization** named `checkmymot` (profile → Organizations → New organization → free plan).
3. Create a **public** repository named `garage-widget` inside that org.
4. On this machine, run:
   ```bash
   cd ~/workspace/checkmymot/github/garage-widget
   git remote add origin git@github.com:checkmymot/garage-widget.git
   git push -u origin main
   ```
   (If SSH isn't set up, use the HTTPS URL and log in when prompted —
   or run `gh auth login` first, then `gh repo create` handles it.)
5. In the repo: Settings → Pages → Source: **Deploy from a branch**,
   Branch: `main`, folder: `/ (root)` → Save.
6. After ~1 minute the widget is live at:
   `https://checkmymot.github.io/garage-widget/`
   and the embed script at:
   `https://checkmymot.github.io/garage-widget/widget.js`

## If the org name differs

If you pick a different org/repo name, update the two URLs in
`index.html` (the `<script src>` in the demo and the `<pre>` embed code)
and in this PUSH.md, then push again.

## Next: get garages to install it

The widget only earns links/traffic when garages embed it. Outreach angles:
- The daily dealer/garage email outreach already running — add the widget
  as a free extra in the pitch ("free MOT checker box for your website").
- PistonHeads / garage forums: genuinely useful free tool, not spam.
- The demo page itself can rank for "free MOT checker widget for garages".
