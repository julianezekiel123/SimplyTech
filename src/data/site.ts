/* ============================================================================
 * SITE CONTENT — every word on the site lives here.
 *
 * Positioning: done-for-you lead response and AI phone answering for any
 * business that runs on booked appointments. Deliberately vertical-neutral,
 * because traffic arrives from cold email campaigns that hit many industries.
 *
 * THIS PAGE IS A CREDIBILITY CHECK, NOT A SALES PITCH.
 * Visitors arrive from a cold email that has already made the argument. They
 * click to answer one question: is this a real company or a scam? So the page
 * is built to look legitimate, explain the thing plainly, and match whatever
 * the email promised. Copy that contradicts your email does more damage than
 * no website at all.
 *
 * Search for "TODO" to find what you must change before launch.
 * There is no invented proof anywhere in this file — no fake case studies,
 * no fake testimonials, no borrowed logos.
 * ==========================================================================*/

export interface NavLink { label: string; href: string }
export interface Service {
  name: string
  tagline: string
  description: string
  deliverables: string[]
}
export interface ProcessStep { step: string; title: string; description: string; duration: string }
export interface Faq { question: string; answer: string }
export interface TranscriptLine { speaker: 'caller' | 'assistant'; text: string }
export interface Currency {
  code: string
  label: string
  locale: string
  /** Slider bounds for "what a customer is worth", in this currency's own terms. */
  jobValue: { min: number; max: number; step: number; default: number }
}

/* ---------------------------------------------------------------------------
 * 1. IDENTITY — TODO: all of this
 * ------------------------------------------------------------------------ */
export const company = {
  name: 'SimplyTech',
  legalName: 'SimplyTech',
  tagline: 'Every call answered. Every lead followed up. Nothing left on voicemail.',
  domain: 'https://simplytech.me',
  // Personal Gmail for now — fine while leads come from existing connections.
  // TODO: move to hello@<yourdomain> before any cold outreach. Gmail reads as
  // "one guy" to a stranger, and bulk sending from Gmail gets you suspended.
  email: 'julianezekiel123@gmail.com',
  // Two numbers. The US line is a Twilio number that forwards to the PH mobile,
  // so it is the one to lead with — a US buyer will call it without thinking
  // about international rates. The PH number is listed second for anyone who
  // would rather dial direct.
  //
  // `raw` is digits only (plus a leading +) and powers tap-to-call. `display`
  // is what a human reads. They must point at the same number.
  phones: [
    { region: 'US', display: '+1 (225) 438-7738', raw: '+12254387738' },
    { region: 'PH', display: '+63 967 579 3256', raw: '+639675793256' },
  ],
  // TODO: state a timezone. "8am-6pm" means nothing to a reader 13 hours away.
  hours: 'Mon–Fri, 8am–6pm ET',
  responseTime: 'We reply within one business day.',
  linkedin: '', // TODO — full URL, or leave blank to hide the link
}

/** The number to lead with wherever there is only room for one. */
export const primaryPhone = company.phones[0]

/* ---------------------------------------------------------------------------
 * 2. NAVIGATION
 * ------------------------------------------------------------------------ */
export const nav: NavLink[] = [
  { label: 'The problem', href: '#leak' },
  { label: 'What we do', href: '#services' },
  { label: 'Hear it', href: '#demo' },
  { label: 'Setup', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

/* ---------------------------------------------------------------------------
 * 3. HERO
 *    Vertical-neutral. Speaks to anyone whose revenue depends on answering
 *    the phone and who cannot always answer the phone.
 * ------------------------------------------------------------------------ */
export const hero = {
  eyebrow: 'Lead response, done for you',
  headline: 'The call you just missed was worth more than this costs.',
  subhead:
    'Your team is busy with the customer in front of them. The phone rings anyway — and whoever is calling is already dialing the next company on their list. We make sure someone answers, every time, and that the appointment lands on your calendar before your competitor calls back.',
  reassurance: 'Set up for you. Nothing to install, nothing to learn.',
  primaryCta: 'See it in action',
  secondaryCta: 'Call',
  highlights: [
    'Answers every call, day or night, including weekends',
    'Texts back missed calls and web inquiries in under a minute',
    'Books straight onto your calendar — you just show up',
  ],
}

/* ---------------------------------------------------------------------------
 * 4. THE LEAK CALCULATOR
 *
 *    The visitor does arithmetic about their own business. Nothing here is a
 *    claim you have to defend, which matters when you have no case studies.
 *
 *    Defaults are deliberately conservative. Resist inflating them — a number
 *    that looks absurd loses the reader entirely.
 * ------------------------------------------------------------------------ */
export const calculator = {
  eyebrow: 'The math',
  headline: 'Work out what your missed calls are already costing you.',
  intro:
    'No industry statistics, no averages from someone else. Put in your own numbers and see what a year of unanswered phones adds up to.',
  inputs: {
    missedCalls: { label: 'Calls you miss in a typical week', min: 0, max: 100, step: 1, default: 5 },
    closeRate: { label: 'Of the ones you do answer, how many book', min: 5, max: 100, step: 5, default: 30 },
    jobValue: { label: 'What an average customer is worth to you' },
  },
  currencyLabel: 'Currency',
  resultLabel: 'Revenue walking out the door each year',
  footnote:
    'That is the size of the leak, not a guarantee of what we recover. Even catching half of it pays for this many times over — which is the entire argument.',
  ctaLabel: 'Send us these numbers',
  disclaimer:
    'Rough arithmetic based on what you entered: missed calls per week, times 52, times your booking rate, times what a customer is worth.',
}

/* ---------------------------------------------------------------------------
 * 4b. CURRENCIES
 *
 *    Each currency carries its own slider range rather than converting from
 *    USD. That is deliberate: exchange rates go stale, and a converted range
 *    produces absurd steps (a slider moving in 57-peso increments). These are
 *    plausible customer values in each market, in that market's own terms.
 *
 *    TODO: sanity-check the ranges for the markets you actually sell into.
 *    To add one, copy a row. `locale` controls digit grouping AND how the
 *    symbol is drawn: CAD/AUD/SGD deliberately use en-US, because their own
 *    locales render a bare "$" that reads as US dollars.
 * ------------------------------------------------------------------------ */
export const defaultCurrency = 'USD' // TODO: set to 'PHP' if most visitors are local

export const currencies: Currency[] = [
  { code: 'USD', label: 'USD — US Dollar',        locale: 'en-US', jobValue: { min: 100,  max: 20000,   step: 100,  default: 1200 } },
  { code: 'PHP', label: 'PHP — Philippine Peso',  locale: 'en-PH', jobValue: { min: 500,  max: 500000,  step: 500,  default: 20000 } },
  { code: 'EUR', label: 'EUR — Euro',             locale: 'de-DE', jobValue: { min: 100,  max: 20000,   step: 100,  default: 1000 } },
  { code: 'GBP', label: 'GBP — British Pound',    locale: 'en-GB', jobValue: { min: 100,  max: 20000,   step: 100,  default: 1000 } },
  { code: 'CAD', label: 'CAD — Canadian Dollar',  locale: 'en-US', jobValue: { min: 100,  max: 25000,   step: 100,  default: 1500 } },
  { code: 'AUD', label: 'AUD — Australian Dollar',locale: 'en-US', jobValue: { min: 100,  max: 25000,   step: 100,  default: 1500 } },
  { code: 'SGD', label: 'SGD — Singapore Dollar', locale: 'en-US', jobValue: { min: 100,  max: 25000,   step: 100,  default: 1500 } },
  { code: 'AED', label: 'AED — UAE Dirham',       locale: 'en-AE', jobValue: { min: 500,  max: 75000,   step: 500,  default: 4500 } },
  { code: 'INR', label: 'INR — Indian Rupee',     locale: 'en-IN', jobValue: { min: 1000, max: 1000000, step: 1000, default: 50000 } },
  { code: 'MYR', label: 'MYR — Malaysian Ringgit',locale: 'en-MY', jobValue: { min: 100,  max: 100000,  step: 100,  default: 5000 } },
]

/* ---------------------------------------------------------------------------
 * 5. PROBLEM — where leads leak, described without naming an industry.
 * ------------------------------------------------------------------------ */
export const problem = {
  eyebrow: 'Where the money goes',
  headline: 'Leads do not usually die from bad selling. They die from silence.',
  intro:
    'Nobody sets out to ignore customers. It happens because the work and the phone compete for the same pair of hands, and the work always wins. Here is where it leaks:',
  pains: [
    {
      title: 'The phone rings while everyone is busy',
      body: 'Someone who needs you now does not leave a voicemail and wait. They hang up and call the next name on the list. You never find out the call happened, so it never feels like a loss.',
    },
    {
      title: 'After hours is a dead zone',
      body: 'Evenings and weekends are when people finally get around to sorting this out. If your answer to that is an answering machine, you have handed those bookings to whoever picks up.',
    },
    {
      title: 'The callback comes hours too late',
      body: 'You get back to them at six, after the last appointment of the day. By then they have had three conversations and booked one of them. Being second is the same as being nowhere.',
    },
    {
      title: 'Quotes go out and nothing follows',
      body: 'The proposal gets sent, the customer goes quiet, and nobody chases because chasing is nobody’s actual job. A meaningful share of that pipeline was winnable with two follow-ups.',
    },
  ],
}

/* ---------------------------------------------------------------------------
 * 6. SERVICES — TODO: adjust to match exactly what you can deliver today.
 *    Do not list anything here you cannot set up for a client this month.
 * ------------------------------------------------------------------------ */
export const services: Service[] = [
  {
    name: 'AI phone answering',
    tagline: 'Picks up on the first ring. Every time.',
    description:
      'A voice assistant answers your calls when you cannot, in a normal conversation. It works out what the caller needs and how urgent it is, then books them in or passes anything genuinely urgent straight to you.',
    deliverables: [
      'Answers 24/7, including nights and weekends',
      'Trained on your services, your area, and your prices',
      'Books directly onto your calendar',
      'Escalates anything urgent to your phone immediately',
      'Full transcript and recording of every call sent to you',
    ],
  },
  {
    name: 'Speed to lead',
    tagline: 'A reply before they reach the next company.',
    description:
      'Every missed call, web form, and message gets an instant, human-sounding text back. The goal is narrow and specific: be the first response they get, because the first response wins most of the time.',
    deliverables: [
      'Missed calls texted back automatically within a minute',
      'Web forms and online inquiries answered instantly',
      'One inbox for calls, texts, and web messages',
      'Conversations continue by text until they book',
      'Nothing sits unanswered overnight',
    ],
  },
  {
    name: 'Follow-up and booking',
    tagline: 'The chasing nobody has time to do.',
    description:
      'Quotes get followed up, no-shows get rebooked, and past customers hear from you at the right time. Set up once, runs on its own, and stops the moment someone replies so nothing feels automated.',
    deliverables: [
      'Automatic follow-up on unanswered quotes',
      'Appointment reminders that cut no-shows',
      'Check-ins with past customers at the right interval',
      'Review requests after completed work',
      'Stops immediately when a real conversation starts',
    ],
  },
]

// Kept deliberately small and low on the page. Real revenue, but leading with
// it would make the site vague to the person who just clicked your email.
export const alsoAvailable = {
  headline: 'Also, less glamorously',
  body: 'We take on other operations work for the same clients — inventory tracking, scheduling cleanups, and the internal systems that never quite got built. Not what this page is about, but ask if you need it.',
}

/* ---------------------------------------------------------------------------
 * 7. SAMPLE CALL — your proof substitute.
 *
 *    Written to be industry-neutral so it does not clash with whichever list
 *    you are emailing this week.
 *
 *    TODO: replace with a transcript of a real test call. A genuine one, with
 *    its awkward moments left in, is far more convincing than a polished
 *    invented one — people can tell the difference.
 *
 *    If you run campaigns one industry at a time, swapping this transcript to
 *    match that industry is the highest-value edit on the page.
 * ------------------------------------------------------------------------ */
export const demo = {
  eyebrow: 'What it sounds like',
  headline: 'A real call, start to finish.',
  intro:
    'This is the whole point of the thing, so rather than describe it, here is a call from beginning to booked.',
  scenario: 'Seven in the evening. A web form from that afternoon, and a caller expecting voicemail.',
  transcript: [
    { speaker: 'assistant', text: 'Good evening, thanks for calling Halstead. How can I help?' },
    { speaker: 'caller', text: 'Oh — hi. I filled in the form on your site this afternoon and had not heard back. I assumed you would be closed by now.' },
    { speaker: 'assistant', text: 'We are closed for the evening, but I can pick this up now so you are not waiting until Monday. What were you looking to get done?' },
    { speaker: 'caller', text: 'I need someone to come out and give me a quote.' },
    { speaker: 'assistant', text: 'I can get that booked. Is this for a home or a business?' },
    { speaker: 'caller', text: 'It is for our office. Two floors.' },
    { speaker: 'assistant', text: 'Two floors, noted. Can I take the address so I can check you are inside the area we cover?' },
    { speaker: 'caller', text: 'It is 41 Bramble Court, in Ashford.' },
    { speaker: 'assistant', text: 'Ashford is well inside our area. I have Tuesday morning between eight and ten, or Wednesday afternoon between one and three. Which suits you better?' },
    { speaker: 'caller', text: 'Tuesday morning is better.' },
    { speaker: 'assistant', text: 'Booked for Tuesday, eight to ten. The visit and the quote are free and there is no obligation either way. Can I take a mobile number for the confirmation text?' },
    { speaker: 'caller', text: 'Sure, it is 555 0148.' },
    { speaker: 'assistant', text: 'That is confirmed and the text is on its way. Someone will call Monday to narrow the window if that helps. Anything else?' },
    { speaker: 'caller', text: 'No, that is great. Honestly did not expect to get anyone tonight.' },
  ] as TranscriptLine[],
  outcome: {
    headline: 'That call would otherwise have been a voicemail.',
    points: [
      'Answered in one ring, at seven in the evening',
      'Picked up a web form that had already gone cold',
      'Qualified the job and checked the service area before booking',
      'Booked, confirmed by text, and logged — with no involvement from you',
    ],
  },
}

/* ---------------------------------------------------------------------------
 * 8. PROCESS — short. The barrier is effort, not trust in method.
 * ------------------------------------------------------------------------ */
export const process = {
  eyebrow: 'Getting started',
  headline: 'Live within a week, and you keep your number.',
  intro:
    'The main thing owners want to know is how much of their time this costs and whether it disrupts anything. The answer is about an hour, and no.',
  steps: [
    {
      step: '01',
      title: 'A call about how your business actually runs',
      description:
        'What you do, what you do not, the area you cover, your prices, what counts as urgent, and how you want to be interrupted when something urgent comes in. This is the only part that needs your time.',
      duration: '45 minutes',
    },
    {
      step: '02',
      title: 'We build and test it',
      description:
        'We set the assistant up, connect it to your calendar, and run test calls until it handles your common situations properly. You listen to the recordings and tell us what to change.',
      duration: '3 to 5 days',
    },
    {
      step: '03',
      title: 'Go live, quietly',
      description:
        'Your number stays exactly as it is. Calls you do not pick up forward to the assistant instead of voicemail. Nothing changes for you, and nothing changes for customers who reach you directly.',
      duration: 'Same day',
    },
    {
      step: '04',
      title: 'We watch it and tune it',
      description:
        'We read the transcripts in the first weeks and fix anything it handles badly. You get a summary of what came in, what got booked, and what it could not deal with.',
      duration: 'Ongoing',
    },
  ] as ProcessStep[],
}

/* ---------------------------------------------------------------------------
 * 9. COMMERCIAL TERMS
 *
 *    IMPORTANT: this section must match what your cold email promises. If the
 *    email offers a discounted early-access deal and the site says "flat
 *    monthly fee, cancel anytime", the click costs you the trust the email
 *    just earned. Change both together, always.
 * ------------------------------------------------------------------------ */
export const showStartingPrice = false // TODO: flip to true once you know your pricing
export const startingPrice = '$TODO' // TODO: the early-access figure

export const commercials = {
  eyebrow: 'How this works commercially',
  headline: 'Priced low now, on purpose, and locked there.',
  intro:
    'We are early, and we would rather have a handful of businesses using this properly than a price list nobody has tested. So the deal is deliberately lopsided in your favor right now:',
  terms: [
    { title: 'Early-access pricing', body: 'A fraction of what this will cost once it is refined. You are getting the early version, and the price reflects that honestly.' },
    // TODO: before you promise this, decide what usage it covers. AI voice bills
    // you per minute, every month, forever. A permanent flat price against
    // unlimited usage means a client whose call volume triples turns into a
    // permanent loss. Lock the RATE, not unlimited usage: "locked permanently,
    // includes up to N minutes a month" keeps the promise and caps the downside.
    { title: 'Your price never goes up', body: 'Whatever you start at is what you pay, permanently. When the standard rate arrives, it applies to new customers, not to you.' },
    { title: 'We do the whole setup', body: 'Configuration, testing, and connecting it to your calendar are on us. There is nothing for you to install and nothing to learn.' },
    { title: 'No lock-in', body: 'If it is not earning its keep, say so and it stops. We are not going to hold an early customer hostage with a contract.' },
  ],
}

/* ---------------------------------------------------------------------------
 * 10. EARLY ACCESS
 *
 *     You have no clients yet. This is the honest, and genuinely persuasive,
 *     way to say so — it turns being early into a reason to move now.
 *
 *     TODO: only publish terms you will actually honor. A discount you do not
 *     give, or scarcity you do not enforce, is a lie your first customers
 *     eventually notice.
 * ------------------------------------------------------------------------ */
export const founding = {
  eyebrow: 'Where we are',
  headline: 'We are early, and pricing it accordingly.',
  body: [
    'We are taking on a small number of early customers. In exchange for a price far below what this will eventually cost, and a lot more of our attention than a normal customer would get, we want honest feedback while we sharpen it — and a testimonial at the end if it earns one.',
    'That is the trade, stated plainly. You get the low price permanently and direct access to the person building your setup. We get real businesses to learn on and, hopefully, something to point at afterwards.',
  ],
  terms: [
    'Early-access rate, locked in permanently',
    'You work directly with the founder, not a support queue',
    'Full setup done for you, at no extra cost',
    'Walk away whenever — no contract, no notice period',
    'We will tell you if we do not think this fits your business',
  ],
  spotsNote: 'Taking these on a few at a time so each one gets proper attention.',
}

/* ---------------------------------------------------------------------------
 * 11. ABOUT — TODO: rewrite this in your own words.
 *
 *     This section carries unusual weight when visitors arrive from a cold
 *     email: it is where they decide whether you are a real person. Do not
 *     invent a career you have not had. You do not need one.
 * ------------------------------------------------------------------------ */
export const about = {
  eyebrow: 'Who you would be dealing with',
  headline: 'One person, who answers the phone.',
  body: [
    'TODO: two or three sentences in your own voice. Why this problem, and what you were doing before. Being new is not a problem to hide — plenty of owners would rather deal with someone reachable and invested than a company where they are account number four hundred.',
    'What I can tell you is how this runs: you deal with me directly, I build your setup myself, and if something breaks you are not filing a ticket. That will not be true forever, but it is true today and it is worth something.',
  ],
  principles: [
    {
      title: 'We will tell you if it does not fit',
      body: 'If you already answer every call and your calendar is full, you do not need this, and we will say so rather than sell you something.',
    },
    {
      title: 'You keep your number and your data',
      body: 'Your phone number stays yours. Call recordings, transcripts, and customer details are yours to export at any point, including on the way out.',
    },
    {
      title: 'One number matters',
      body: 'Bookings you would otherwise have missed. We will show you call volumes and response times because they diagnose problems, but they are not the point.',
    },
  ],
}

/* ---------------------------------------------------------------------------
 * 12. FAQ — the real objections, including the ones a cold email creates.
 *     Anyone arriving from an unsolicited email is already suspicious. The
 *     first question exists specifically to meet that head-on.
 * ------------------------------------------------------------------------ */
export const faqs: Faq[] = [
  {
    question: 'You emailed me out of the blue. Who are you?',
    answer:
      'Fair question. We do reach out cold, because we are new and nobody is searching for us yet. Everything about us is on this page: what we do, what it costs, who you would be dealing with, and a phone number a real person answers. If you would rather not hear from us again, say so in a reply and you will not.',
  },
  {
    question: 'Will my customers know they are talking to a machine?',
    answer:
      'Some will and some will not, and we do not think it should be hidden either way. It introduces itself as an assistant for your company. What someone with an urgent problem actually cares about is whether anyone picks up and whether they can get an appointment — not who is on the other end. If a caller asks for a person, it says so plainly and gets you.',
  },
  {
    question: 'What happens when it does not know the answer?',
    answer:
      'It says it does not know and takes a message, or puts the call through to you if you want it to. It is set up not to guess at prices, timescales, or anything technical. A booked appointment with an open question is fine; an assistant that invents a quote is not, and that is the failure mode we design against hardest.',
  },
  {
    question: 'Do I have to change my phone number?',
    answer:
      'No. You keep the number you have, so nothing you have already printed or advertised becomes wrong. We change one thing: calls you do not answer go to the assistant instead of voicemail. Calls you do answer are completely unaffected.',
  },
  {
    question: 'What if it books something it should not have?',
    answer:
      'You set the rules — the area you cover, the work you take, your hours, what counts as urgent — and it works inside them. You see every booking as it happens and can cancel or move it like any other appointment. In the first weeks we read the transcripts ourselves and tighten anything that comes out wrong.',
  },
  {
    question: 'You are new. Why would I take the risk?',
    answer:
      'We would rather say we are early than pretend otherwise. The way we have tried to make that reasonable: the setup is free, the price is a fraction of what this will eventually cost, it is locked there permanently, and there is no contract. If it does not book you work, you stop. That is a genuinely small downside, and it is the honest offer we can make at this stage.',
  },
  {
    question: 'How much time does this take from me?',
    answer:
      'About an hour to set up, in one conversation about how your business works. After that, effectively none. If we need a decision from you we will ask, but the whole point is that this runs without you.',
  },
  {
    question: 'Does this work for my kind of business?',
    answer:
      'If your revenue depends on people booking appointments, almost certainly. The leak is the same everywhere — the call comes in while you are with a customer. Where it does not fit is businesses with no booking step at all, and we will tell you if that is you. One thing to flag upfront: medical and clinical work brings patient-privacy obligations that need sorting out properly before we could take you on, so say so early if that is your situation.',
  },
]

/* ---------------------------------------------------------------------------
 * 13. FINAL CTA
 * ------------------------------------------------------------------------ */
export const cta = {
  eyebrow: 'Next step',
  headline: 'Find out what you are missing.',
  body:
    'Reply to the email, send a new one, or call during working hours. We will look at how your calls come in, tell you roughly what you are leaking, and show you the assistant working. If it is not worth it for your business, we will say that instead.',
  emailSubject: 'Missed calls inquiry',
  emailBody:
    'Hi,\n\nAbout my business:\n\n- Company:\n- What we do:\n- Where we work:\n- Roughly how many calls a week:\n- Roughly what a customer is worth:\n\nWhat happens now when we cannot answer the phone:\n\n',
}

/* ---------------------------------------------------------------------------
 * 14. SEO — matters less than usual, since traffic comes from email rather
 *     than search. Still worth setting: these tags control the preview card
 *     when someone pastes your link into Slack, WhatsApp, or LinkedIn, and
 *     a link with no preview card looks more like spam.
 * ------------------------------------------------------------------------ */
export const seo = {
  title: 'SimplyTech — Never miss another call',
  description:
    'AI phone answering and instant lead follow-up, set up for you. Every call answered, every inquiry replied to in under a minute, booked straight onto your calendar.',
  ogImage: '/og-image.png', // TODO: add a 1200x630 image at public/og-image.png
}
