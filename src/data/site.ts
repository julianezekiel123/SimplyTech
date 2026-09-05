/* ============================================================================
 * SITE CONTENT — every word on the site lives here.
 *
 * POSITIONING
 * Done-for-you phone answering and lead follow-up for any business that runs
 * on booked appointments. Deliberately vertical-neutral, because traffic
 * arrives from cold email campaigns that hit many industries.
 *
 * VOICE
 * Confident and specific. Small is stated as a deliberate operating choice,
 * never as an apology. Nothing on this page describes the business as new,
 * early, unproven, or asks the reader to take a risk on us. Being selective
 * and being inexperienced are different claims; only the first one is here.
 *
 * PROOF
 * There are no testimonials, no case studies, no client logos and no invented
 * metrics anywhere in this file, because there are none to report yet. What
 * stands in their place is: (1) published third-party research, cited by name
 * so the reader can verify it, (2) the visitor's own arithmetic in the
 * calculator, (3) a full call transcript, and (4) commercial terms stated
 * plainly enough to be checked. Do not add invented proof. It is illegal
 * advertising in most markets and the fastest way to lose a deal in diligence.
 *
 * KEEP THIS IN SYNC WITH YOUR COLD EMAIL. A page that contradicts the email
 * does more damage than no page at all.
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
export type Support = 'yes' | 'no' | 'partial'
export interface Currency {
  code: string
  label: string
  locale: string
  /** Slider bounds for "what a customer is worth", in this currency's own terms. */
  jobValue: { min: number; max: number; step: number; default: number }
}

/* ---------------------------------------------------------------------------
 * 1. IDENTITY
 * ------------------------------------------------------------------------ */
export const company = {
  name: 'SimplyTech',
  legalName: 'SimplyTech',
  tagline: 'Every call answered. Every lead followed up. Nothing left on voicemail.',
  domain: 'https://www.simplytech.me',
  // TODO: move to hello@simplytech.me before any cold outreach. A Gmail address
  // reads as "one guy with a laptop" to a stranger, and bulk sending from Gmail
  // gets the account suspended. Zoho Mail has a free tier.
  email: 'julianezekiel123@gmail.com',
  // Two numbers. The US line is a Twilio number that forwards to the PH mobile,
  // so it leads — a US buyer dials it without thinking about international
  // rates. `raw` is digits only and powers tap-to-call; `display` is what a
  // human reads. They must point at the same number.
  phones: [
    { region: 'US', display: '+1 (225) 438-7738', raw: '+12254387738' },
    { region: 'PH', display: '+63 967 579 3256', raw: '+639675793256' },
  ],
  // Stating where you operate from is a trust signal for cold traffic — an
  // unlocatable company reads as a scam. TODO: narrow this to a city.
  location: 'Philippines',
  // TODO: state hours you will genuinely answer, in a timezone the reader
  // shares. Better: point the Twilio number at your own assistant, so the
  // company selling call answering never misses its own calls.
  hours: 'Mon–Fri, 9am–6pm Manila time',
  responseTime: 'Every message gets a reply inside one business day.',
  linkedin: '', // Full URL, or leave blank to hide the link
}

/** The number to lead with wherever there is only room for one. */
export const primaryPhone = company.phones[0]

/* ---------------------------------------------------------------------------
 * 2. NAVIGATION
 * ------------------------------------------------------------------------ */
export const nav: NavLink[] = [
  { label: 'The cost', href: '#leak' },
  { label: 'What we do', href: '#services' },
  { label: 'Hear it', href: '#demo' },
  { label: 'Compare', href: '#compare' },
  { label: 'Setup', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

/* ---------------------------------------------------------------------------
 * 3. HERO
 *
 *    A visitor decides in about five seconds. So the fold has to carry four
 *    things: what this is, who it is for, one action, and the answer to the
 *    first hesitation ("how much does this disrupt my business?"). The trust
 *    strip below the buttons does that last job.
 * ------------------------------------------------------------------------ */
export const hero = {
  chip: 'Phone answering and lead follow-up, run for you',
  headline: 'Never lose another customer to voicemail.',
  subhead:
    'Your team is busy with the customer in front of them. The phone rings anyway, and whoever is calling is already dialling the next name on their list. We answer every call, text back every missed one inside a minute, and put the appointment on your calendar before your competitor rings back.',
  primaryCta: 'Hear it handle a call',
  secondaryCta: 'Call',
  // Answers the first objection before it forms: "what does this cost me in
  // effort, and what breaks?" Nothing, and nothing.
  reassurance: 'Keep your number. Nothing to install. Nothing to learn.',
  // Four facts, each verifiable against the terms further down the page.
  trustStrip: [
    'Live in about a week',
    'Your number stays yours',
    'Setup done for you',
    'No contract, cancel any time',
  ],
  highlights: [
    {
      title: 'Answers on the first ring',
      body: 'Day, night, weekends and holidays. Callers get a conversation, not a beep.',
    },
    {
      title: 'Replies in under a minute',
      body: 'Missed calls and web enquiries get a text back before the caller has moved on.',
    },
    {
      title: 'Books onto your calendar',
      body: 'Qualified, and slotted against your real availability. You just turn up.',
    },
  ],
}

/* ---------------------------------------------------------------------------
 * 3b. EVIDENCE
 *
 *     This section does the job testimonials would do, without inventing any.
 *     Every figure is published third-party research, named and dated so the
 *     reader can look it up. Two rules if you edit this:
 *
 *     1. Never present these as SimplyTech's own results. They are not.
 *     2. Never add a statistic you cannot trace to a primary source. Several
 *        of the numbers that circulate in this industry — "78% of buyers
 *        purchase from the first responder" is the famous one — have no
 *        traceable study behind them. Citing folklore is worse than citing
 *        nothing, because the one buyer who checks will catch it.
 * ------------------------------------------------------------------------ */
export const evidence = {
  eyebrow: 'Why speed decides it',
  headline: 'This is not our opinion. It has been measured, repeatedly.',
  intro:
    'Why answering fast matters is one of the better-studied questions in sales. We have no interest in you taking our word for it, so here are the sources.',
  stats: [
    {
      figure: '7×',
      body: 'more likely to qualify a lead when the first contact happens within an hour, rather than an hour later.',
      source: 'Harvard Business Review, “The Short Life of Online Sales Leads”, 2011',
    },
    {
      figure: '42 hrs',
      body: 'was the average first response across the 2,241 companies audited in that same study. A further 23% never responded at all.',
      source: 'Harvard Business Review, 2011',
    },
    {
      figure: '21×',
      body: 'drop in the odds of qualifying a lead between calling back at five minutes and calling back at thirty.',
      source: 'Lead Response Management Study, Oldroyd / InsideSales, 2007',
    },
  ],
  footnote:
    'None of that is a claim about us. It is the reason this service exists: no owner beats those numbers while holding a drill, a clipboard, or another customer.',
}

/* ---------------------------------------------------------------------------
 * 4. THE LEAK CALCULATOR
 *
 *    The visitor does arithmetic about their own business. Nothing here is a
 *    claim anyone has to defend, which is exactly why it works.
 *
 *    Defaults are deliberately conservative. Resist inflating them — a number
 *    that looks absurd loses the reader entirely, and the whole value of this
 *    section is that it looks like their own honest maths.
 * ------------------------------------------------------------------------ */
export const calculator = {
  eyebrow: 'Your numbers',
  headline: 'Work out what your unanswered phone already costs.',
  intro:
    'No industry averages and no statistics from somebody else’s business. Put your own figures in and see what a year of missed calls comes to.',
  inputs: {
    missedCalls: { label: 'Calls you miss in a typical week', min: 0, max: 100, step: 1, default: 5 },
    closeRate: { label: 'Of the calls you do answer, how many book', min: 5, max: 100, step: 5, default: 30 },
    jobValue: { label: 'What an average customer is worth to you' },
  },
  currencyLabel: 'Currency',
  resultLabel: 'Revenue walking out the door each year',
  footnote:
    'That is the size of the leak, not a promise of what we recover. Catching even half of it pays for this several times over, which is the entire argument.',
  ctaLabel: 'Send us these numbers',
  disclaimer:
    'Straight arithmetic on what you entered: missed calls per week × 52 × your booking rate × what a customer is worth. No adjustments and no assumptions of ours.',
}

/* ---------------------------------------------------------------------------
 * 4b. CURRENCIES
 *
 *    Each currency carries its own slider range rather than converting from
 *    USD. That is deliberate: exchange rates go stale, and a converted range
 *    produces absurd steps (a slider moving in 57-peso increments). These are
 *    plausible customer values in each market, in that market's own terms.
 *
 *    To add one, copy a row. `locale` controls digit grouping AND how the
 *    symbol is drawn: CAD/AUD/SGD deliberately use en-US, because their own
 *    locales render a bare "$" that reads as US dollars.
 * ------------------------------------------------------------------------ */
export const defaultCurrency = 'USD'

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
  eyebrow: 'Where it goes',
  headline: 'Leads rarely die from bad selling. They die from silence.',
  intro:
    'Nobody decides to ignore a customer. It happens because the work and the phone want the same pair of hands, and the work wins every time. Four places it leaks:',
  pains: [
    {
      title: 'The phone rings while everyone is busy',
      body: 'Somebody who needs you today does not leave a voicemail and wait. They hang up and call the next name on the list. You never learn the call happened, so it never feels like a loss.',
    },
    {
      title: 'After hours is a dead zone',
      body: 'Evenings and weekends are when people finally get round to sorting this out. If your answer to that is an answering machine, you have handed those bookings to whoever picks up.',
    },
    {
      title: 'The callback lands hours too late',
      body: 'You ring back at six, after the last appointment of the day. By then they have had three conversations and booked one of them. Being second is the same as being nowhere.',
    },
    {
      title: 'Quotes go out and nothing follows',
      body: 'The proposal is sent, the customer goes quiet, and nobody chases, because chasing is not actually anyone’s job. A meaningful share of that pipeline was winnable with two follow-ups.',
    },
  ],
}

/* ---------------------------------------------------------------------------
 * 6. SERVICES — keep this list to what you can deliver for a real client
 *    this month. Anything aspirational here becomes a promise you have to
 *    walk back on a call.
 * ------------------------------------------------------------------------ */
export const services: Service[] = [
  {
    name: 'Phone answering',
    tagline: 'Picks up on the first ring. Every time.',
    description:
      'A voice assistant answers your calls when you cannot, in an ordinary conversation. It works out what the caller needs and how urgent it is, then books them in or puts anything genuinely urgent straight through to you.',
    deliverables: [
      'Answers 24/7, including nights, weekends and holidays',
      'Trained on your services, your area and your prices',
      'Books directly onto your calendar',
      'Puts anything urgent through to your phone immediately',
      'Full transcript and recording of every call sent to you',
    ],
  },
  {
    name: 'Speed to lead',
    tagline: 'A reply before they reach the next company.',
    description:
      'Every missed call, web form and message gets an instant, human-sounding text back. The goal is narrow and specific: be the first response they get, because the first response wins a disproportionate share of the time.',
    deliverables: [
      'Missed calls texted back automatically within a minute',
      'Web forms and online enquiries answered instantly',
      'One inbox for calls, texts and web messages',
      'Conversations continue by text until they book',
      'Nothing sits unanswered overnight',
    ],
  },
  {
    name: 'Follow-up and rebooking',
    tagline: 'The chasing nobody has time to do.',
    description:
      'Quotes get followed up, no-shows get rebooked, and past customers hear from you at the right moment. Set up once, runs on its own, and stops the second someone replies so nothing feels automated.',
    deliverables: [
      'Automatic follow-up on unanswered quotes',
      'Appointment reminders that cut no-shows',
      'Check-ins with past customers at the right interval',
      'Review requests after completed work',
      'Stops immediately when a real conversation starts',
    ],
  },
]

// Real revenue, but leading with it would make the page vague to the person
// who just clicked your email. Kept small and low on purpose.
export const alsoAvailable = {
  headline: 'Also, less glamorously',
  body: 'We take on other operations work for the same clients — inventory tracking, scheduling cleanups, and the internal systems that never quite got built. Not what this page is about, but ask if you need it.',
}

/* ---------------------------------------------------------------------------
 * 6b. COMPARISON
 *
 *     Answers "why not just do X instead", which is the hesitation that stops
 *     people quietly, without ever becoming a question they ask you.
 *
 *     KEEP THIS FAIR. A comparison table that strawmans the alternatives is
 *     obvious to anyone who has used them, and it costs you the credibility
 *     the rest of the page is building. Every value below is true of the
 *     mainstream version of that option, including the ones that go against
 *     us — voicemail handles unlimited simultaneous callers, and a human
 *     receptionist knows your prices better than any assistant will.
 * ------------------------------------------------------------------------ */
export const comparison = {
  eyebrow: 'The alternatives',
  headline: 'You already have four options. Here they are honestly.',
  intro:
    'Most businesses end up on one of these. They all work. They just fail in different places, and this is where each one gives out.',
  columns: ['Voicemail', 'A receptionist', 'Answering service', 'SimplyTech'],
  rows: [
    { label: 'Picks up outside business hours', values: ['partial', 'no', 'yes', 'yes'] },
    { label: 'Books straight onto your calendar', values: ['no', 'yes', 'no', 'yes'] },
    { label: 'Handles two callers at the same time', values: ['yes', 'no', 'yes', 'yes'] },
    { label: 'Knows your prices and service area', values: ['no', 'yes', 'no', 'yes'] },
    { label: 'Texts a missed call back within a minute', values: ['no', 'no', 'no', 'yes'] },
    { label: 'Chases quotes that have gone quiet', values: ['no', 'partial', 'no', 'yes'] },
    { label: 'Never off sick, never on holiday', values: ['yes', 'no', 'yes', 'yes'] },
    { label: 'Costs less than a part-time wage', values: ['yes', 'no', 'partial', 'yes'] },
  ] as { label: string; values: Support[] }[],
  footnote:
    'The honest summary: voicemail is free and loses the caller, a receptionist is excellent and expensive and goes home at five, and a traditional answering service takes a message rather than a booking. We are trying to be the option that books the appointment at eleven at night.',
}

/* ---------------------------------------------------------------------------
 * 7. SAMPLE CALL
 *
 *    The objection that actually kills this sale is "does it sound like a
 *    robot?", so the page answers it by showing a call rather than describing
 *    one. Written industry-neutral so it does not clash with whichever list
 *    you are emailing this week.
 *
 *    HIGHEST-VALUE EDIT AVAILABLE TO YOU: replace this with a transcript of a
 *    real test call, awkward moments left in. A genuine one reads differently
 *    from a written one and people can tell. If you run campaigns one industry
 *    at a time, swapping this to match that industry is the single best edit
 *    on the page.
 * ------------------------------------------------------------------------ */
export const demo = {
  eyebrow: 'What it sounds like',
  headline: 'A call, start to finish, with nothing cut.',
  intro:
    'This is the part people want to judge for themselves, so rather than describe it: here is a call from the first ring to a booked appointment.',
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
    headline: 'Without this, every one of those calls is a voicemail.',
    points: [
      'Answered in one ring, at seven in the evening',
      'Rescued a web form that had already gone cold',
      'Qualified the job and checked the service area before booking',
      'Booked, confirmed by text and logged, with no involvement from the owner',
    ],
  },
  ctaLabel: 'Hear it live on a call',
  ctaNote: 'We run it with you directly rather than through a public demo line, so you hear it answering as your business rather than reading a generic script.',
}

/* ---------------------------------------------------------------------------
 * 8. PROCESS — kept short. The barrier here is effort, not trust in method.
 * ------------------------------------------------------------------------ */
export const process = {
  eyebrow: 'Getting started',
  headline: 'Live inside a week, and you keep your number.',
  intro:
    'What owners want to know is how much of their time this costs and what it disrupts. About an hour, and nothing.',
  steps: [
    {
      step: '01',
      title: 'One call about how your business actually runs',
      description:
        'What you do and what you do not, the area you cover, your prices, what counts as urgent, and how you want to be interrupted when something urgent comes in. This is the only part that needs your time.',
      duration: '45 minutes',
    },
    {
      step: '02',
      title: 'We build it and test it against real situations',
      description:
        'We set the assistant up, connect it to your calendar, and run test calls until it handles your awkward cases properly, not just the easy ones. You listen to the recordings and tell us what to change.',
      duration: '3 to 5 days',
    },
    {
      step: '03',
      title: 'Go live, quietly',
      description:
        'Your number stays exactly as it is. Calls you do not pick up forward to the assistant instead of to voicemail. Nothing changes for you, and nothing changes for customers who reach you directly.',
      duration: 'Same day',
    },
    {
      step: '04',
      title: 'We watch it and keep tuning it',
      description:
        'We read the transcripts through the first weeks and fix anything it handles badly. You get a summary of what came in, what got booked, and what it could not deal with.',
      duration: 'Ongoing',
    },
  ] as ProcessStep[],
}

/* ---------------------------------------------------------------------------
 * 9. COMMERCIAL TERMS
 *
 *    IMPORTANT: this must match what your cold email promises. If the email
 *    offers one deal and the page describes another, the click costs you the
 *    trust the email just earned. Change both together, always.
 *
 *    Note the wording on the rate lock. It says the RATE is locked and that
 *    plans are sized to call volume — not that usage is unlimited. AI voice
 *    bills you per minute, every month, forever, so a permanent flat price
 *    against unlimited usage turns a heavy caller into a loss you cannot exit.
 *    This phrasing keeps the promise a buyer cares about and caps that.
 * ------------------------------------------------------------------------ */
export const showStartingPrice = false // Flip to true once you know your costs
export const startingPrice = '' // e.g. '$299'

export const commercials = {
  eyebrow: 'The commercial terms',
  headline: 'What you are agreeing to, in four lines.',
  intro:
    'No order forms, no minimum term, and nothing that only becomes clear on a call. If any of this changes later, it changes for new customers, not for you.',
  terms: [
    {
      title: 'Setup is on us',
      body: 'Configuration, test calls, calendar connection and the tuning afterwards are included. There is nothing to install, nothing to license and nothing for you to learn.',
    },
    {
      title: 'Your rate is locked',
      body: 'The rate you start on is the rate you keep, for as long as you stay. Plans are sized to your call volume, so you are never paying for capacity you do not use and never surprised by an overage you did not agree to.',
    },
    {
      title: 'No contract, no notice period',
      body: 'Month to month. If it stops earning its keep, you say so and it stops. Nobody here is going to hold a customer in place with paperwork.',
    },
    {
      title: 'Your number and your data stay yours',
      body: 'You keep your phone number. Recordings, transcripts and customer details are yours to export at any point, including on the way out. There is no fee for leaving with your own data.',
    },
  ],
}

/* ---------------------------------------------------------------------------
 * 10. HOW WE WORK
 *
 *     This section used to say "we are early, so we are cheap". It now says
 *     the same true thing — limited capacity, hands-on setup, low price — as a
 *     deliberate operating choice rather than an apology. Both describe the
 *     same business. Only one of them sells.
 *
 *     Only publish terms you will actually honour. Scarcity you do not
 *     enforce is a lie your first customers eventually notice.
 * ------------------------------------------------------------------------ */
export const founding = {
  eyebrow: 'How we work',
  headline: 'A limited number of businesses at a time. On purpose.',
  body: [
    'Every setup here is built by hand against how your business actually runs, then watched closely through the first few weeks and corrected. Nobody can do that for fifty businesses at once, so we do not pretend to. We onboard a few at a time and finish each one properly.',
    'It also means we turn work down. If you already answer every call and your calendar is full, this is not worth your money, and we will say so on the first call rather than sell you something.',
  ],
  terms: [
    'Built around your business, not configured from a template',
    'You work with the person who builds it, not a support queue',
    'Full setup, testing and tuning included at no extra cost',
    'Month to month — no contract, no notice period',
    'We will say plainly if this is not right for you',
  ],
  spotsNote: 'Onboarding a small number at a time so every setup gets proper attention.',
}

/* ---------------------------------------------------------------------------
 * 11. ABOUT
 *
 *     Carries unusual weight when visitors arrive from a cold email: this is
 *     where they decide whether a real person is behind the page.
 *
 *     TODO (optional, and worth doing): add one sentence of your own about
 *     what you were doing before this and why you picked this problem. Do not
 *     invent a career — you do not need one, and the copy below stands without
 *     it. One true sentence in your own voice beats three impressive ones.
 * ------------------------------------------------------------------------ */
export const about = {
  eyebrow: 'Who you would be dealing with',
  headline: 'You deal with the person who builds it.',
  body: [
    'SimplyTech is deliberately small. I take the setup call, I build the assistant against your business myself, and I read the transcripts through the first weeks to catch what it gets wrong before your customers do. If something breaks at seven in the evening, you are messaging me, not filing a ticket and waiting in a queue.',
    'That is a real advantage, and it is also why we cap how many businesses we take on at once. Something that answers your phone for you is not a thing to hand to a template and hope.',
  ],
  principles: [
    {
      title: 'We will tell you if it does not fit',
      body: 'If you already answer every call and your diary is full, you do not need this. We would rather say that on the first call than sell you something you cancel in two months.',
    },
    {
      title: 'You keep your number and your data',
      body: 'Your phone number stays yours. Call recordings, transcripts and customer details are exportable at any point, including on the way out.',
    },
    {
      title: 'One number actually matters',
      body: 'Bookings you would otherwise have missed. We will show you call volumes and response times because they diagnose problems, but they are not the point and we will not dress them up as results.',
    },
  ],
}

/* ---------------------------------------------------------------------------
 * 12. FAQ
 *
 *     This is the hesitation-killer, and on this site it does more work than
 *     any other section, because cold traffic arrives suspicious and will not
 *     email to ask. Order matters: identity first, then the objection that
 *     kills the sale (does it sound like a robot), then money, then the
 *     mechanical worries, then the legal ones.
 *
 *     Rule for adding to this list: only add a question somebody has actually
 *     hesitated over. Invented questions read as invented.
 * ------------------------------------------------------------------------ */
export const faqs: Faq[] = [
  {
    question: 'You emailed me out of the blue. Who are you?',
    answer:
      'A small operations company that sets up phone answering and lead follow-up, run from the Philippines and working with businesses in several countries. We reach out directly because that is how this kind of service reaches the people who need it — nobody wakes up and searches for it. Everything worth checking is on this page: what we do, what the terms are, who you would be dealing with, and two phone numbers a person answers. If you would rather not hear from us again, reply and say so, and you will not.',
  },
  {
    question: 'Will my customers know they are talking to a machine?',
    answer:
      'Some will and some will not, and we do not think it should be hidden either way. It introduces itself as an assistant for your company. What somebody with an urgent problem cares about is whether anyone picked up and whether they got an appointment, not who was on the other end. If a caller asks for a human, it says so plainly and gets you.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Less than a part-time wage, and a fraction of a full-time receptionist once you count the hours nobody is at the desk. We quote after the first call rather than off a price list, because the right plan depends on your call volume and what you want it to handle. Setup is included, there is no contract, and the rate you start on is the rate you keep. If the number does not comfortably clear what the calculator on this page says you are losing, we will tell you that.',
  },
  {
    question: 'What if it does not work for my business?',
    answer:
      'Then you stop, and that is the end of it. No contract, no notice period, no exit fee, and you leave with your number and every recording, transcript and contact record. We would rather lose a customer cleanly than keep one who is not getting value from it. It is the same reason we tell people on the first call when we think it is not a fit.',
  },
  {
    question: 'What happens when it does not know the answer?',
    answer:
      'It says it does not know and takes a message, or transfers the call to you if that is how you have set it up. It is deliberately built not to guess at prices, timescales or anything technical. A booked appointment with one open question is fine. An assistant that invents a quote is not, and that is the failure mode we design against hardest.',
  },
  {
    question: 'Do I have to change my phone number?',
    answer:
      'No. You keep the number you have, so nothing you have already printed, advertised or listed becomes wrong. One thing changes: calls you do not answer forward to the assistant instead of to voicemail. Calls you do answer are completely unaffected.',
  },
  {
    question: 'How does it get onto my calendar?',
    answer:
      'It connects to the calendar you already use — Google Calendar and Outlook are the common ones — and books against your real availability, including whatever buffers and travel time you tell us about. Bookings appear the moment they happen, and you move or cancel them like any other appointment.',
  },
  {
    question: 'What if it books something it should not have?',
    answer:
      'You set the rules — the area you cover, the work you take, your hours, what counts as urgent — and it works inside them. You see every booking as it happens. Through the first weeks we read the transcripts ourselves and tighten anything that came out wrong, which is the point of that period rather than an afterthought.',
  },
  {
    question: 'How much of my time does this take?',
    answer:
      'About an hour, in one conversation about how your business works, plus however long you spend listening to the test recordings. After go-live, effectively none. If we need a decision from you we will ask, but the entire point is that it runs without you.',
  },
  {
    question: 'You are recording calls. Is that legal?',
    answer:
      'It depends where your callers are, and it is worth getting right. Around a dozen US states require every party on a call to consent, not just one. The standard fix is a short spoken notice at the start of the call, and we set that up as part of your configuration rather than leaving you to remember it. If your situation is unusual, say so on the first call.',
  },
  {
    question: 'Where is my customer data held, and who sees it?',
    answer:
      'Recordings, transcripts and contact details sit in your account and belong to you. We read them during setup and through the tuning period, because that is how the assistant gets corrected, and we do not sell, share or reuse them for anything else. You can export the lot at any time and ask us to delete it when you leave.',
  },
  {
    question: 'Does this work for my kind of business?',
    answer:
      'If your revenue depends on people booking appointments, almost certainly. The leak is identical everywhere: the call comes in while you are with a customer. Where it does not fit is businesses with no booking step at all, and we will tell you if that is you. One thing to flag early — medical and clinical work brings patient-privacy obligations that have to be sorted out properly before we could take you on, so mention it up front if that is your situation.',
  },
]

/* ---------------------------------------------------------------------------
 * 13. FINAL CTA
 * ------------------------------------------------------------------------ */
export const cta = {
  eyebrow: 'Next step',
  headline: 'Find out what you are missing.',
  body:
    'One call, about twenty minutes. We look at how calls reach you now, tell you roughly what is leaking, and let you hear the assistant answering as your business. If it is not worth the money for you, we will say that instead of quoting you.',
  emailSubject: 'Missed calls enquiry',
  emailBody:
    'Hi,\n\nAbout my business:\n\n- Company:\n- What we do:\n- Where we work:\n- Roughly how many calls a week:\n- Roughly what a customer is worth:\n\nWhat happens now when we cannot answer the phone:\n\n',
}

/* ---------------------------------------------------------------------------
 * 14. SEO
 *
 *     Matters less than usual, since traffic arrives from email rather than
 *     search. Still worth setting: these tags control the preview card when
 *     somebody pastes your link into Slack, WhatsApp or LinkedIn, and a link
 *     with no preview card looks more like spam.
 * ------------------------------------------------------------------------ */
export const seo = {
  title: 'SimplyTech — Never lose another customer to voicemail',
  description:
    'Phone answering and lead follow-up, set up and run for you. Every call answered around the clock, every missed call texted back in under a minute, appointments booked straight onto your calendar. Keep your number, no contract.',
  ogImage: '/og-image.png',
}

/* ---------------------------------------------------------------------------
 * 15. LEGAL — powers /privacy and /terms.
 *     TODO: have someone qualified read these before you run paid ads.
 * ------------------------------------------------------------------------ */
export const legal = {
  lastUpdated: '6 September 2026',
  governingLaw: 'the Republic of the Philippines',
}
