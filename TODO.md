# SimplyTech — launch checklist

Ordered by what actually blocks you. Tick as you go.

Live: <https://simplytech.me> · Repo: <https://github.com/julianezekiel123/SimplyTech>

---

## 1. Blocking — visible placeholder text on the live site

**These render as-is to anyone who opens the page right now.**

- [ ] **`about.body` literally prints the word "TODO"**
      → [`src/data/site.ts`](src/data/site.ts), section 11
      Two or three sentences in your own voice: why you're doing this, what you
      were doing before. This is where a stranger decides you're a real person.
      Write it badly and send it to me — I'll tidy it.

- [ ] **The sample call transcript is invented**
      → [`src/data/site.ts`](src/data/site.ts), section 7 (`demo.transcript`)
      Run one real test call and paste what actually happened, awkward pauses
      included. It's the only proof on the page, and a real one reads differently
      from a written one. Highest-value single edit available to you.

---

## 2. Decisions only you can make

- [ ] **What the price-lock actually includes**
      → `commercials.terms`, the "Your price never goes up" entry
      The site promises a permanently locked price. AI voice bills you per minute,
      every month, forever — so an unlimited-usage promise turns a heavy caller
      into a permanent loss you can't exit. Say "locked permanently, includes up
      to N minutes/month" instead. Work out your per-minute cost first.

- [ ] **Publish a price, or don't**
      → `showStartingPrice` (currently `false`) and `startingPrice`
      Flip to `true` once you know your costs. Until then the site explains the
      shape of the deal without naming a number, which is the right call.

- [ ] **Trim the services list to what you can deliver this month**
      → `services` array. Anything you can't set up for a real client, cut.

- [ ] **Confirm the early-access terms you'll honor**
      → `founding.terms`. A discount you don't give, or scarcity you don't
      enforce, is something your first customers will eventually notice.

- [ ] **Set the default currency**
      → `defaultCurrency` in `site.ts`, currently `'USD'`. Change to `'PHP'` if
      most visitors are local.

---

## 3. Contact details

- [ ] **Business email on your own domain** — `hello@simplytech.me`
      → `company.email`, currently your personal Gmail
      Fine while leads come from people who know you. Not fine when a stranger is
      deciding if you're a real company, and Gmail can't send cold email at volume
      without getting suspended. Zoho Mail has a free tier; Google Workspace is
      ~$7/month.

- [ ] **Fix the listed hours** — `company.hours` says `Mon–Fri, 8am–6pm ET`
      Your Twilio number forwards to your PH mobile, and 8am–6pm ET is 8pm–6am in
      Manila. Either state hours you'll genuinely answer, or point that Twilio
      number at your own AI receptionist. The second option covers the gap *and*
      demos the product on first contact — a company selling call answering that
      misses its own calls is the one thing you can't explain away.

- [ ] **LinkedIn URL** → `company.linkedin`. Leave blank and the link hides itself.
      Worth having: it's a cheap trust signal for cold traffic.

---

## 4. Brand assets

- [ ] **Logo** — currently an "S" letter tile
      → `Header.astro` and `Footer.astro`; swap the `<span>` for `<img src="/logo.svg">`

- [ ] **Favicon** → replace `public/favicon.svg` (currently a matching "S" tile)

- [ ] **Social share image** → add a 1200×630 PNG at `public/og-image.png`
      This is the preview card when your link is pasted into Messenger, Slack, or
      WhatsApp. A link with no card looks more like spam. Ten minutes in Canva.

---

## 5. Legal — before any cold outreach

- [ ] **Privacy policy and terms pages**
      The footer links to `/privacy` and `/terms`; both are 404 right now.
      Near-mandatory for a business sending cold email, and a trust signal for
      exactly the traffic you're planning.

- [ ] **Call recording consent**
      The site promises clients transcripts and recordings. Around a dozen US
      states require *all* parties to consent, not just one. Standard fix is a
      spoken notice at the start of the call. Sort before your first client.

- [ ] **Decide your position on medical callers**
      The FAQ already flags that clinics and med spas need handling separately —
      patient data puts you in HIPAA scope and you'd need a BAA from your voice
      provider. Most budget providers won't sign one. Don't stumble into it
      because a med spa happens to reply.

---

## 6. When you start cold outreach

- [ ] **Buy separate sending domains** for Instantly — never send from
      `simplytech.me`. When a sending domain gets burned (some will, at volume),
      your real domain's reputation survives. Prefer `.com` for these.

- [ ] **Keep the site and the email in sync.** If the offer changes in your
      sequences, change `commercials` and `founding` the same day. A page that
      contradicts the email destroys the trust the email just earned.

- [ ] **Per-industry landing pages** — ask me and I'll wire the vertical up as a
      single config value, so each campaign can point at a page whose transcript
      and hero match the industry it's targeting.

- [ ] **Add analytics** (Plausible or Fathom, one script tag in `Base.astro`).
      You'll want to know whether clickers read or bounce.

---

## Notes

- `.me` renewal is roughly $20–25/year — the $2 was a first-year promo.
- ICANN locks new domains against transfer for 60 days, so you can't move
  `simplytech.me` to a cheaper registrar until early November 2026.
- Updating the site is: I edit → `git push` → Vercel redeploys in about a minute.
