# Agsikapin Kapé — Website

Agsikapin Kapé / Your Cozy Spot in Binangonan

---

## What this is

A single-page website for **Agsikapin Kapé**, your café-resto in Mambog, Binangonan, Rizal. Built to be handed over and look finished — not a wireframe, not a placeholder.

The site covers:

- **Home** — hero with your food spread photo, menu tags, and two ways to order (View Menu or FB Messenger).
- **Catering** — Party Trays & Catering section with tray options, prices, and a Messenger order button.
- **Menu** — six cards: Rice Meals & Silog, Wings w/ Rice, Pasta & Grilled, Filipino Favorites, Special Menu, Fillet Favorites. All prices pulled from your actual menu flyers.
- **About** — your story section with the restaurant photo, the meaning of "Sikapin," and your address.
- **Find Us** — Google Maps embed, full address, clickable phone, email, hours note, reviews link, and social links.
- **Footer** — quick links, Facebook/Email/Call icons, copyright line.

---

## What's in this folder

```
agsikapin-kape/
├── index.html          ← the site (one file, everything in it)
├── photos/             ← all your photos, ready to use
│   ├── agsi.jpg            (party trays promo — hero)
│   ├── agsi1.jpg           (party trays pasta — catering)
│   ├── agsi2.jpg           (food combo — menu gallery)
│   ├── agsi3.jpg           (mixed sushi promo)
│   ├── agsi4.jpg           (rice meals + wings — menu)
│   ├── agsi5.jpg           (pasta, BBQ, garlic shrimp — menu)
│   ├── agsi6.jpg           (Filipino specials — menu)
│   ├── agsi7.jpg           (fish/chicken fillet — menu)
│   ├── agsi8.jpg           (special menu 2 — menu)
│   └── agsikapin.jpg       (restaurant interior — about)
└── README.md           ← this file
```

## Prices

Prices are in **Philippine pesos (₱)** and are taken from your actual menu flyers. They are as accurate as possible from what's on file. If anything has changed, see "How to edit prices" below.

Menu items are grouped based on your promotional flyers. Items that appeared across multiple flyers (rice meals, crispy pata, wings, pasta) are treated as regular menu. Flyers that were clearly one-off promos (sushi, holiday party trays) are treated as specials or catering.

---

## How to use

### To view locally

1. Make sure the `photos/` folder is in the same place as `index.html`.
2. Double-click `index.html` — it will open in your browser. Photos will show as long as the file is opened from the folder (not from a temp copy).

   If the photos don't show when double-clicking (some browsers restrict local file access), use a local server instead:

   - Open a terminal / command prompt in the folder.
   - Run: `python3 -m http.server 8080`
   - Open http://localhost:8080 in your browser.

### To put it online (free, no coding needed)

**Option 1 — Netlify (easiest):**

1. Go to https://netlify.com and sign up (free).
2. Drag the whole `agsikapin-kape` folder onto the Netlify dashboard.
3. Netlify gives you a live URL immediately. You can connect a custom domain later if you have one.

**Option 2 — GitHub Pages (free):**

1. Create a new GitHub repository.
2. Upload `index.html` and the `photos/` folder.
3. Go to Settings → Pages and enable it.
4. GitHub gives you a live URL.

---

## How to edit

Everything is in **one file: `index.html`**. Open it in any text editor (Notepad, VS Code, Notepad++, etc.).

### To change a price

Search for the price in the file (e.g. search for `₱160` or `Tapsilog`). The prices are in `<div class="menu-item-price">₱160</div>` blocks. Change the number inside.

### To add or remove a menu item

Look for the menu card you want to edit (search for the section title, e.g. `Rice Meals & Silog`). Each item is a block like:

```html
<div class="menu-item">
  <div class="menu-item-info">
    <div class="menu-item-name">Tapsilog</div>
    <div class="menu-item-desc">Beef tapa + garlic rice + egg — the classic</div>
  </div>
  <div class="menu-item-price">₱160</div>
</div>
```

To add one, copy a block like that, paste it in the right card, and change the name, description, and price. To remove one, delete the whole `<div class="menu-item">...</div>` block.

### To change the phone number

Search for `9690817173` in the file. It appears in two places: the Find Us card and the footer call icon. Change both.

### To change the email

Search for `agsikapincafeandresto@gmail.com`. Change it in both places it appears.

### To change the address

Search for `Mambog` or `T. Cenidoza`. The address appears in:
- The Footer copyright line
- The Find Us address card
- The About section signature

### To change hours

Search for `Check our Facebook page for today's hours`. Replace that text with your actual hours. Or change it to a fixed hours block.

### To swap a photo

Each photo is referenced as `src="photos/agsi.jpg"` (or agsi1, agsi2, etc.) in the HTML. To swap a photo:

1. Put your new photo in the `photos/` folder with the same filename (e.g. replace `agsi.jpg`).
2. Or rename the `src` attribute to point to a different file in `photos/`.

### To add a new section or change the design

The site is a single HTML file with CSS in the `<style>` block in the `<head>`. Colors, fonts, spacing — all in that `<style>` block. Colors use names like `--brown-900: #2c1810;` — change the hex values to change the whole color scheme at once.

---

## Colors (for reference)

| Name | Hex | Where |
|------|-----|-------|
| Deep brown (darkest) | #2c1810 | Backgrounds, footer |
| Brown (primary) | #5c3a28 | Logo icon, buttons |
| Warm brown | #8b5e3c | Accent borders |
| Tan / coffee | #c4a27d | Light accents |
| Cream (background) | #faf6f0 | Page background |
| Cream light | #fffcf7 | Card backgrounds |
| Accent (tan-gold) | #d4a373 | CTA buttons, highlights |
| Accent dark | #b8845a | Hover states |
| Text | #3a2a1e | Body text |
| Text light | #6b5a4a | Secondary text |

Fonts: **Playfair Display** (headings) and **Inter** (body) — both from Google Fonts, loaded automatically.

---

## Notes

- The Google Maps embed points to the Binangonan area. If you want the pin to be exact, replace the `src` of the `<iframe>` in the Find Us section with your own Google Maps embed link. To get one: go to Google Maps, find your spot, click Share → Embed a map → copy the HTML.
- The "Order Now" button in the nav and the "Order via FB Messenger" buttons all point to `https://www.facebook.com/agsikapinkape/messages/`. If your FB page URL changes, update those links (search for `agsikapinkape/messages`).
- The favicon (browser tab icon) is a coffee cup ☕ built directly into the HTML — no separate file needed.
- Photos are sized for web (max 1200px wide, quality 85) so the site loads fast.

---

## Questions

If something doesn't work or looks wrong, open `index.html` in a text editor and check the section in question. The file is plain HTML — no build step, no framework, no installer. If you break something, just edit it back or restore from a backup copy.

---

Built for Agsikapin Kapé — T. Cenidoza St., Mambog, Binangonan, Rizal.
