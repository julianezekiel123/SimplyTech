# SimplyTech website

One-page site for done-for-you phone answering and lead follow-up, plus a
privacy page and a terms page. Astro + Tailwind v4, static output, no frontend
framework. Vertical-neutral by design.

Live: <https://simplytech.me> · Repo:
<https://github.com/julianezekiel123/SimplyTech> · Deploys from `main` on Vercel.

## Running it

```bash
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built dist/ locally
npm run og       # regenerate public/og-image.png from the brand tokens
```

## What this page is for

Traffic arrives from cold email, not search. The email already made the
argument, so the page is not doing the persuading. A visitor clicks to answer
one question:

> Is this a real company, and is this worth twenty minutes of my time?

Everything follows from that. The page is built to look established, explain
the thing plainly, answer every hesitation before it is asked, and **match
whatever the email promised**. A page that contradicts your email does more
damage than no page at all, because it turns a warm reader into a suspicious
one.

## The voice rule

**Nothing on this site describes the business as new, early, unproven, or asks
the reader to take a risk.** That was the old framing and it was costing you
deals. Every true fact behind it is still on the page — small team, limited
capacity, hands-on setup, low price, no contract — but stated as a deliberate
way of operating rather than an apology.

Being *selective* and being *inexperienced* are different claims. Only the
first one is here. Keep it that way when you edit copy:

| Do not write | Write instead |
| --- | --- |
| "We are early, so the price is low" | "Plans are sized to your call volume, and your rate is locked" |
| "Why take the risk on us?" | "What if it does not work for my business?" |
| "One person, who answers the phone" | "You deal with the person who builds it" |
| "We have no clients yet" | "We onboard a few at a time so each setup gets proper attention" |

## Selling without testimonials

There are deliberately **no testimonials, no case studies and no client logos**
in this codebase, because there are none to report yet. Do not add them until
they are real — fabricated proof is illegal advertising in most markets and the
fastest way to lose a deal in diligence.

Four things stand in their place. Do not break these.

**1. Cited third-party research** (`Evidence.astro`, `evidence` in `site.ts`) —
published, dated, attributed studies about response time. It carries authority
a young company's own claims cannot, and the reader can verify it. Two rules:
never present these as SimplyTech's own results, and never add a statistic you
cannot trace to a primary source. Several numbers that circulate in this
industry are folklore with no study behind them — "78% of buyers purchase from
the first responder" is the famous one. Citing folklore is worse than citing
nothing, because the one buyer who checks will catch it.

**2. The calculator** (`Calculator.astro`) — the visitor enters their own
missed calls, close rate and customer value, and sees the annual leak. Nothing
to defend, because it is their arithmetic about their business. The CTA carries
their figures into the email, so your first reply already knows their volume
and deal size. Defaults are conservative on purpose: 5 missed calls a week, 30%
close, $1,200 a customer, about $93,600. Resist inflating them.

**3. The transcript** (`SampleCall.astro`) — answers the objection that
actually kills this sale: *does it sound like a robot?* Currently
industry-neutral so it does not clash with whichever list you are emailing.
**Replace it with a real test call.** A genuine transcript with its awkward
moments left in beats a polished invented one; people can tell. If you run
campaigns one industry at a time, swapping this to match is the highest-value
edit available to you.

**4. The comparison table** (`Comparison.astro`) — answers "why not just use
voicemail / hire someone / use an answering service", which is the hesitation
that kills deals silently because nobody emails to ask it. **Keep it fair.** A
table that strawmans the alternatives is obvious to anyone who has used them
and costs you the credibility the rest of the page is building.

## Where to edit things

**Almost all copy lives in one file: [`src/data/site.ts`](src/data/site.ts).**
Search for `TODO` — that is your remaining checklist. See
[TODO.md](TODO.md) for what actually blocks you, in order.

| I want to change... | Go to |
| --- | --- |
| Any text, FAQ, transcript, comparison | `src/data/site.ts` |
| Privacy or terms wording | `src/pages/privacy.astro`, `src/pages/terms.astro` |
| Brand colors, fonts, fluid type scale | `src/styles/global.css` (the `@theme` block) |
| Section order | `src/pages/index.astro` |
| A section's layout | `src/components/<Name>.astro` |
| The logo mark | `src/components/Logo.astro` (and `public/favicon.svg` to match) |
| The social share card | `scripts/make-og-image.mjs`, then `npm run og` |

## Section order, and why

Each section answers the question the previous one creates:

| Section | Question it answers |
| --- | --- |
| Hero | What is this, and what does it cost me in effort? |
| Evidence | Says who? |
| Calculator | Is it a problem for *me*? |
| Problem | Where exactly does it leak? |
| Services | So what do you actually do? |
| Sample call | Does it sound like a robot? |
| Comparison | Why not just do X instead? |
| Process | How much of my time, and what breaks? |
| Commercials | What am I agreeing to? |
| About | Is there a real person behind this? |
| FAQ | Everything left, including the awkward ones |
| CTA | The one next step |

Two rules if you reorder. The **calculator stays high**, because it makes the
visitor prove the problem to themselves before we ask them to believe anything
about us. **Commercial terms stay after the transcript**, because nobody cares
what it costs until they believe it works.

## Design system

Deliberate choices, so you do not accidentally undo them:

- **Warm paper ground** (`--color-paper`, `#faf9f6`) rather than pure white,
  and a **warm neutral ink ramp** rather than a cool grey one. Warm greys read
  as designed; cool greys read as an untouched framework default.
- **Deep emerald accent** rather than the indigo every AI product uses. One
  warm signal colour (`--color-signal-*`) appears exactly once, on the
  calculator's loss figure, so the eye reads it as the point of that section.
- **Fluid type** (`display-1/2/3` in `global.css`) using `clamp()`, so
  headlines scale continuously instead of stepping at breakpoints.
- **Sections alternate paper / white / ink** to give the page a rhythm. If you
  add a section, keep the alternation going.
- **No dark mode.** Marketing sites are near-universally light, and it halves
  the surface area for visual bugs.

## Accessibility and standards

Already handled — do not regress them: skip link, visible focus rings, native
`<details>` FAQ that works with no JavaScript, `prefers-reduced-motion` honored
throughout, screen-reader text behind every icon in the comparison table, and
scroll-reveal that degrades to plain visible content if JavaScript never runs.
The comparison table scrolls inside its own container on narrow screens, so the
page body never scrolls sideways.

## Before you promise "your price never goes up"

**AI voice bills you per minute, every month, forever.** A permanent flat price
against unlimited usage means a client whose call volume triples becomes a
permanent loss you cannot exit.

The current wording already handles this: it locks the **rate**, and says plans
are sized to call volume. That delivers the promise a buyer cares about without
promising unlimited minutes. Do not weaken it to "unlimited" to close a deal.
`src/pages/terms.astro` says the same thing, so change both together.

## Pricing display

`showStartingPrice` is `false`, so the site explains the *shape* of the deal
without naming a number — correct while you do not know your costs, and the FAQ
still answers the buyer's real anxiety ("am I about to be quoted five thousand
dollars?"). When you know your numbers: set `showStartingPrice = true` and fill
in `startingPrice`. That is the only change needed.

## Cold email specifics

**Do not send from your main domain.** Buy a few lookalike domains for Instantly
to send from and point them at this site. If a sending domain gets burned — and
at volume, some will — `simplytech.me`'s reputation survives. This is standard
practice and the single most expensive mistake to make late.

**Keep the site and the email in sync.** If the offer changes in your sequences,
change `commercials` and `founding` the same day.

**Match the landing page to the campaign.** Astro makes per-industry variants
cheap: copy `src/pages/index.astro` to `src/pages/dental.astro`, override the
transcript and hero, and link that URL from that campaign. Say the word and I
will wire the vertical up as a single config value rather than a duplicated
page.

**Call recording consent.** The site promises clients transcripts and
recordings. About a dozen US states require *all* parties to consent, not just
one. The standard fix is a spoken notice at the start of the call, which the
privacy page already commits you to configuring. Sort it before your first
client.

**Medical callers.** The FAQ deliberately flags that clinics and med spas need
handling separately — patient information puts you in HIPAA scope and you would
need a BAA from whichever voice platform you resell. Most budget providers will
not sign one. Not a reason to avoid the market forever, but a reason not to
stumble into it because a med spa happened to reply.

## Deploying

The repo is connected to Vercel. **`git push` to `main` redeploys the site in
about a minute.** There is nothing else to run.

If the domain ever needs re-pointing: Vercel project → Settings → Domains. SSL
is automatic and you should never pay anyone for a certificate.

Three files carry the domain and must agree: `astro.config.mjs` (`site`),
`src/data/site.ts` (`company.domain`), and `public/robots.txt` (the `Sitemap:`
line). They control the canonical URL and the link preview card.

## What is deliberately not here

- **No contact form.** The calculator CTA does the qualifying a form would have
  done, and a form needs a backend or a third-party endpoint that can break
  silently. If you want one later, Web3Forms or Formspree need no backend.
- **No analytics.** Add Plausible or Fathom with one script tag in
  `src/layouts/Base.astro`. Worth doing once campaigns are running — you will
  want to know whether clickers read or bounce. **If you add one, update the
  privacy page the same day**, because it currently states truthfully that the
  site runs no analytics and sets no cookies.
- **No cookie banner**, because there are no cookies to consent to. Keep it
  that way if you can; it is a small trust advantage.
