/**
 * Generates public/og-image.png — the 1200x630 preview card that appears when
 * somebody pastes the site's URL into Slack, WhatsApp, LinkedIn or iMessage.
 *
 * This matters more than usual here. Traffic arrives as a link in an email or
 * a message, and a link that renders with no preview card looks materially
 * more like spam than one that renders with a branded card.
 *
 * Run with:  npm run og
 *
 * Rendered through sharp (already a dependency of Astro) rather than a design
 * tool, so the card regenerates from the brand tokens instead of drifting out
 * of date in somebody's Canva account. Social platforms do not reliably render
 * SVG, so the output is a PNG.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = resolve(root, 'public/og-image.png')

// Kept in step with src/styles/global.css by hand. There are five of them.
const INK = '#100f0d'
const PAPER = '#faf9f6'
const BRAND_300 = '#74bc96'
const BRAND_600 = '#146845'
const MUTED = '#9c968a'

// The system font stack is spelled out rather than assumed, because this runs
// on whatever machine happens to build the site.
const FONT = "Segoe UI, Inter, Helvetica Neue, Arial, sans-serif"

const waveform = (x, y, scale, fill, opacity) =>
  [
    [0, 6.5, 5],
    [4.7, 3, 12],
    [9.4, 0, 18],
    [14.1, 4, 10],
    [18.8, 6.5, 5],
  ]
    .map(
      ([dx, dy, h]) =>
        `<rect x="${x + dx * scale}" y="${y + dy * scale}" width="${2.6 * scale}" height="${
          h * scale
        }" rx="${1.3 * scale}" fill="${fill}" opacity="${opacity}" />`,
    )
    .join('')

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <!-- Radial, so the wash fades out on every edge. A linear gradient here
         leaves a visible hard rim down the side of the ellipse. -->
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="${BRAND_600}" stop-opacity="0.5" />
      <stop offset="55%" stop-color="${BRAND_600}" stop-opacity="0.18" />
      <stop offset="100%" stop-color="${BRAND_600}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="${INK}" />
  <ellipse cx="940" cy="40" rx="620" ry="420" fill="url(#glow)" />

  <!-- Wordmark -->
  <rect x="72" y="70" width="52" height="52" rx="13" fill="${PAPER}" />
  ${waveform(72 + 52 * (5.3 / 32), 70 + 52 * (7 / 32), 52 / 32, BRAND_600, 1)}
  <text x="140" y="105" font-family="${FONT}" font-size="27" font-weight="700"
        fill="${PAPER}" letter-spacing="-0.5">SimplyTech</text>

  <!-- Headline -->
  <text x="72" y="290" font-family="${FONT}" font-size="76" font-weight="700"
        fill="${PAPER}" letter-spacing="-2.6">Never lose another</text>
  <text x="72" y="378" font-family="${FONT}" font-size="76" font-weight="700"
        fill="${PAPER}" letter-spacing="-2.6">customer to voicemail.</text>

  <!-- Subline -->
  <text x="72" y="443" font-family="${FONT}" font-size="28" font-weight="400" fill="${MUTED}">
    Phone answering and lead follow-up, set up and run for you.
  </text>

  <!-- Footer rule and proof points -->
  <rect x="72" y="512" width="1056" height="1" fill="#ffffff" opacity="0.14" />
  <text x="72" y="558" font-family="${FONT}" font-size="23" font-weight="600" fill="${BRAND_300}">
    Answers 24/7  ·  Books your calendar  ·  Keep your number  ·  No contract
  </text>
  <text x="1128" y="558" text-anchor="end" font-family="${FONT}" font-size="23"
        font-weight="600" fill="${MUTED}">simplytech.me</text>
</svg>
`

await mkdir(dirname(out), { recursive: true })
const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer()
await writeFile(out, png)

const { width, height } = await sharp(png).metadata()
console.log(`og-image.png written — ${width}x${height}, ${(png.length / 1024).toFixed(1)} KB`)
