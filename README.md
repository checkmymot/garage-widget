# CheckMyMOT Garage Widget

A free, zero-config embeddable **"Check your MOT"** box for UK garage websites.
Garages paste two lines; their visitors get a free MOT history & due-date
check powered by [CheckMyMOT](https://checkmymot.com/) (official DVSA data).

**Live demo:** https://checkmymot.github.io/garage-widget/
*(URL updates to your org/pages domain after publishing — see PUSH.md)*

## Install (for garages)

Paste where the box should appear:

```html
<div class="cmm-mot-widget"></div>
<script src="https://checkmymot.github.io/garage-widget/widget.js" async></script>
```

That's it. No account, no API key, no maintenance.

## How it works

- `widget.js` (~4KB, no dependencies) finds every `.cmm-mot-widget` div and
  renders an isolated card (Shadow DOM where available, so it never fights
  the host site's CSS).
- The visitor types a registration and clicks through to the full free
  checker on checkmymot.com (new tab).
- The "Powered by CheckMyMOT" link is a plain follow link — that's the
  deal: free tool for the garage, attribution link for us.

## Files

| File | What |
|---|---|
| `widget.js` | The embed script garages load |
| `index.html` | Demo + "get the widget" landing page (served by GitHub Pages) |
| `README.md` | This file |

## Roadmap

- v2: `?reg=` prefill on the checker page (needs a 5-line addition to the
  checkmymot.com checker to read the query param)
- v2: `data-theme="dark"` option if garages ask for it

## License

MIT — garages and anyone else may use and adapt freely.
