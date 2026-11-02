import { Venture } from '../types';

export const ventures: Venture[] = [
  {
    id: 'tickrcom',
    name: 'TickrCom',
    role: 'Co-Founder & Full-Stack Engineer',
    period: 'Mar 2026 – Present',
    location: 'West Palm Beach, FL',
    url: 'https://tickrcom.com',
    urlLabel: 'tickrcom.com',
    tagline: 'Identity, communication, and monetization infrastructure for online trading communities.',
    summary:
      'Pre-seed startup. I architected and shipped the V1 platform end to end: authentication, community discovery, real-time chat, live audio and video, trade posts, and direct messaging.',
    highlights: [
      'Designed a least-privilege access model: Supabase handles only authentication, all data flows through direct SQL under a restricted Postgres role, and one server-side check gates every read, write, and token request across free, locked-channel, and pay-to-enter communities, backed by 500+ Vitest cases in CI.',
      'Enforced data integrity at the database layer: trade posts are immutable with no UPDATE grant to the application role, deletions are irreversible via triggers, and self-verifying migrations fail if a prohibited write succeeds.',
      'Integrated Stream Chat through a server-side adapter that mirrors Postgres membership, issues read-only client tokens, and routes every message through a permission-checked server action.',
      'Delivered live audio and video stage sessions on LiveKit with server-enforced time limits, short-lived tokens revalidated on reconnect, and a per-minute pg_cron job that closes expired rooms and executes moderation actions.',
      'Hardened file uploads with byte-level type verification, image metadata stripping, and rejection of PDFs with active content, serving files from a private bucket only through the access check.',
      'Built GitHub Actions CI that lints, type-checks, runs database-backed tests, and builds every pull request, plus a static check blocking soft-deleted-table queries outside their accessor; migrations deploy on merge.'
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Stream Chat', 'LiveKit', 'Vitest', 'GitHub Actions']
  },
  {
    id: 'two-zero-two-studio',
    name: 'Two Zero Two Studio',
    role: 'Freelance Full-Stack Developer',
    period: 'Jan 2026 – Present',
    location: 'West Palm Beach, FL',
    url: 'https://2zero2.build',
    urlLabel: '2zero2.build',
    tagline: 'My freelance studio, building production web apps and sites for small businesses.',
    summary:
      'I take client projects from kickoff to production: internal tools, marketing sites, and the security, analytics, and testing work that keeps them running.',
    highlights: [],
    tech: ['Next.js', 'Astro', 'TypeScript', 'Supabase', 'Twilio Verify', 'Vercel', 'GA4'],
    clients: [
      {
        client: 'Bull Run Outdoor Power',
        period: 'Sep 2026 – Present',
        summary:
          'An internal parts lookup tool that lets an equipment dealer’s staff and customers find the parts already identified for each machine by phone number, so no part is identified twice.',
        highlights: [
          'Designed a Postgres schema with role-based row-level security, DELETE revoked from application roles, and audit columns on every staff change, backed by 203 automated tests that verify access through real user sessions.',
          'Engineered an invoice import pipeline from the store’s Epicor Eagle point-of-sale system that normalizes phone numbers to E.164, deduplicates invoices, and parses make, model, and serial number from free-text service lines.',
          'Implemented passwordless sign-in with SMS or voice codes via Twilio Verify and HMAC-SHA256-signed session cookies, scoping every query to the signed-in customer without revealing which numbers are on file.'
        ],
        tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Twilio Verify']
      },
      {
        client: 'VIP Concierge, LLC',
        period: 'Jul 2026 – Present',
        url: 'https://dcvipconcierge.com',
        summary:
          'The full marketing site for a premium transportation and concierge company serving government, corporate, and diplomatic-delegation clients, taken from kickoff to production in about 3 weeks.',
        highlights: [
          'Developed a 13-route static site in Astro and TypeScript, with shared data modules for services and the vehicle fleet powering navigation, the footer, service pages, and the contact form from a single source of truth.',
          'Built an accessible multi-step contact form with a date-range calendar, client-side validation, and Formspree integration, protected against spam by a honeypot field, input length limits, and a URL-parameter allowlist.',
          'Hardened security on Vercel with Content Security Policy, X-Frame-Options, Referrer-Policy, Permissions-Policy, and COOP headers, and remediated dependencies to zero npm audit vulnerabilities.',
          'Implemented Google Tag Manager, GA4, and Google Ads conversion tracking with custom dataLayer events and cross-domain tracking, attributing bookings completed on the third-party reservation platform to the site.'
        ],
        tech: ['Astro', 'TypeScript', 'Vercel', 'Formspree', 'GTM', 'GA4']
      }
    ]
  }
];
