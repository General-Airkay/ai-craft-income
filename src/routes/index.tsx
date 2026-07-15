import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Award, BadgeCheck, BriefcaseBusiness, Building2, Check, CheckCircle2,
  CircleDollarSign, Clock3, CreditCard, GraduationCap, HeartHandshake, MousePointerClick,
  PlayCircle, Rocket, School, ShieldCheck, Sparkles, Star, Target, TrendingUp, Users, X, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero.jpg";
import certificateImg from "@/assets/certificate.jpg";
import coursePreviewImg from "@/assets/course-preview.jpg";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";
import t4 from "@/assets/t4.jpg";
import t5 from "@/assets/t5.jpg";
import t6 from "@/assets/t6.jpg";

const CHECKOUT_URL = "https://paystack.shop/pay/ai-website-income";
const PRICE = "₦5,000";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hi-Tech Surge | AI Website Income Accelerator" },
      { name: "description", content: "Build professional websites with AI, find clients, and create a profitable income stream—no coding required." },
      { property: "og:title", content: "Hi-Tech Surge | AI Website Income Accelerator" },
      { property: "og:description", content: "Build websites with AI. Get clients. Create income." },
    ],
  }),
  component: Index,
});

const trustBadges = ["Beginner Friendly", "No Coding Required", "Phone & Laptop Compatible", "Step-by-Step Training", "Lifetime Access", "Certificate Included"];
const modules = [
  "Introduction to AI Website Creation", "Best AI Website Building Tools", "Creating Beautiful Websites Without Coding",
  "Publishing Websites Online", "Connecting Domains", "Using GitHub and Modern Hosting Platforms",
  "Creating Websites for Different Industries", "Building Websites Using Only AI Prompts", "Client Acquisition Strategies",
  "Pricing and Packaging Your Services", "Automating Your Workflow", "Scaling into an Agency",
];
const bonuses = [
  ["How To Get Paying Clients Within 30 Days", "₦75,000"], ["100 High-Converting AI Prompts", "₦50,000"],
  ["Client Proposal Templates", "₦40,000"], ["WhatsApp Outreach Scripts", "₦35,000"],
  ["Website Pricing Blueprint", "₦45,000"], ["How To Automate Your Website Business", "₦85,000"],
  ["50 Profitable Website Niches", "₦35,000"], ["Freelancer Starter Toolkit", "₦50,000"],
  ["AI Content Creation Toolkit", "₦45,000"], ["Business Automation Starter Pack", "₦65,000"],
];

const testimonials: Array<{ name: string; role: string; quote: string; photo: string }> = [
  { name: "Christina Puder", role: "Founder · Madrid, Spain", photo: t1,
    quote: "I discovered Lovable and quickly created a professional landing page. A $20/month AI subscription effectively became my entire web development team—I launch and continuously improve my business site without hiring developers." },
  { name: "Nick Boas", role: "Small Business Owner", photo: t2,
    quote: "I had my website up and running in literally five minutes. Three weeks in I've already gotten two solid client leads that came straight from the site." },
  { name: "Steve S.", role: "Chief Financial Officer", photo: t3,
    quote: "It's easy to use. You get to see a preview before paying, and the look and feel of the site is modern and user-friendly." },
  { name: "Thomas Hennessy", role: "Consultant", photo: t4,
    quote: "I'd been putting off getting a real website for years. AI let me build one myself instead of paying an agency thousands of dollars." },
  { name: "Skipdwait", role: "Agency Operator", photo: t5,
    quote: "The chat-based build is the part I keep coming back to. Sites come out clean and our clients are happy with what we deliver." },
  { name: "SEO Agency Owner", role: "New Jersey, USA", photo: t6,
    quote: "I built two client websites almost entirely with AI. We now get phone calls every day and rank #1 in several local search areas—still doing some human editing, but the leverage is huge." },
];

const faqs: Array<[string, string]> = [
  ["Do I need coding experience?", "No. The course is designed to take you from complete beginner to confident AI website creator without writing code."],
  ["Can I use my phone?", "Yes. Many lessons and tools work on a modern phone, though a laptop can make larger projects more comfortable."],
  ["Will I get a certificate?", "Yes. Complete the training and practical requirements to receive a professional certificate of completion."],
  ["How long do I have access?", "You receive lifetime access, including future updates added to the program."],
  ["Will I learn how to get clients?", "Yes. Dedicated modules cover positioning, outreach, proposals, pricing, and client acquisition."],
  ["Can I use free AI tools?", "Yes. We show free and paid options so you can begin with the resources available to you."],
  ["How quickly can I finish?", "You can learn at your own pace. Focused students can complete the core training within a few weeks."],
  ["How do I access the course?", "After enrollment, your access details are delivered instantly so you can begin right away."],
];

function useCountdown() {
  const [seconds, setSeconds] = useState(6 * 3600 + 42 * 60 + 18);
  useEffect(() => { const timer = window.setInterval(() => setSeconds((v) => v > 0 ? v - 1 : 0), 1000); return () => window.clearInterval(timer); }, []);
  return { h: String(Math.floor(seconds / 3600)).padStart(2, "0"), m: String(Math.floor((seconds % 3600) / 60)).padStart(2, "0"), s: String(seconds % 60).padStart(2, "0") };
}

function Countdown({ compact = false }: { compact?: boolean }) {
  const time = useCountdown();
  return <div className="flex items-center justify-center gap-2" aria-label={`${time.h}h ${time.m}m ${time.s}s remaining`}>
    {Object.entries(time).map(([label, value]) => <div key={label} className={`rounded-lg border border-primary/25 bg-surface-deep text-center ${compact ? "min-w-12 px-2 py-1" : "min-w-18 px-3 py-3"}`}><b className={`${compact ? "text-lg" : "text-2xl md:text-3xl"} font-display text-primary`}>{value}</b><span className="ml-1 text-[9px] uppercase text-muted-foreground">{label}</span></div>)}
  </div>;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
    <p className="mb-3 text-xs font-bold uppercase tracking-[.24em] text-accent">{eyebrow}</p>
    <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">{title}</h2>
    {copy && <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{copy}</p>}
  </div>;
}

function CTA({ label = "GET INSTANT ACCESS", className = "", variant = "hero" as const }: { label?: string; className?: string; variant?: "hero" | "glass" }) {
  return <Button asChild variant={variant} size="xl" className={className}>
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">{label} <ArrowRight /></a>
  </Button>;
}

function Index() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => setProgress(Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <main className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
    <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-muted"><div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} /></div>

    <div className="sticky top-0 z-50 border-b border-primary/20 bg-surface-deep/90 px-4 py-2 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <p className="truncate text-xs font-bold text-foreground md:text-sm"><span className="text-accent">●</span> Special Launch Price Ends Soon</p>
        <Countdown compact />
      </div>
    </div>

    <section className="relative overflow-hidden px-4 pb-20 pt-8 md:pb-28 md:pt-14">
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <nav className="mb-12 flex items-center justify-between gap-4">
          <img src={logo} alt="Hi-Tech Surge" width={160} height={48} className="h-10 w-auto md:h-12" />
          <CTA label="Enrol Now" variant="glass" />
        </nav>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div className="animate-reveal text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold text-primary"><Users size={15} /> Join 1,500+ ambitious students</div>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-.035em] md:text-6xl">Build professional websites with AI. <span className="text-gradient">Turn the skill into income.</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-xl md:leading-8 lg:mx-0">Create stunning websites in minutes using just your phone or laptop—and follow a proven path to getting paid for it.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">{trustBadges.slice(0,4).map((item) => <span key={item} className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-2 text-xs font-semibold"><Check size={14} className="text-primary" />{item}</span>)}</div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <CTA className="w-full sm:w-auto" />
              <span className="flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="text-primary" /> Instant lifetime access</span>
            </div>
          </div>
          <div className="relative animate-float">
            <img src={heroImg} alt="AI-powered website builder on a modern laptop" width={1280} height={1024} className="glass-panel w-full rounded-3xl object-cover" />
            <div className="glass-panel absolute -bottom-6 left-4 right-4 rounded-2xl p-4 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Special launch price ends soon</p>
              <Countdown />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-border bg-surface-deep/60 px-4 py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 text-center md:grid-cols-4">
        {[["1,500+","Students"],["12","Core Modules"],["10","Premium Bonuses"],["Lifetime","Access"]].map(([value,label]) => <div key={label}><b className="font-display text-2xl text-primary md:text-3xl">{value}</b><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>)}
      </div>
    </section>

    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The hidden cost" title="Why Most People Struggle to Make Money Online" copy="It's not lack of ambition. Most people simply haven't found a valuable skill they can learn quickly, apply practically, and sell confidently." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[
          [GraduationCap,"Students","Need income but lack marketable skills and depend on limited opportunities."],
          [BriefcaseBusiness,"Professionals","Need an additional income stream without sacrificing their current career."],
          [Building2,"Business Owners","Pay too much for websites, then wait weeks for simple updates."],
          [Target,"Freelancers","Struggle for consistent clients and lose hours building manually."],
        ].map(([Icon,title,copy]) => { const C = Icon as typeof GraduationCap; return <article key={String(title)} className="glass-panel rounded-2xl p-6 transition-transform hover:-translate-y-1"><C className="mb-5 text-primary" /><h3 className="text-lg font-bold">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p></article> })}</div>
      </div>
    </section>

    <section className="bg-surface-deep/70 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="The shift" title="AI Has Changed Everything" copy="The barrier between your idea and a professional website has never been lower." />
        <div className="grid overflow-hidden rounded-3xl border border-border md:grid-cols-2">
          <div className="bg-muted/50 p-6 md:p-10"><p className="mb-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">The old way</p>{["Learn coding for months","Build every page manually","Slow project delivery","Difficult for beginners","High learning curve"].map(x => <p key={x} className="flex items-center gap-3 border-b border-border py-3 text-muted-foreground"><X size={17} className="text-destructive" />{x}</p>)}</div>
          <div className="relative bg-primary/10 p-6 md:p-10"><div className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">SMARTER</div><p className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">The new AI way</p>{["Build websites quickly","No coding required","Deliver projects faster","Beginner friendly","Easier to scale"].map(x => <p key={x} className="flex items-center gap-3 border-b border-primary/15 py-3 font-semibold"><CheckCircle2 size={17} className="text-primary" />{x}</p>)}</div>
        </div>
      </div>
    </section>

    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Your new capability" title="Imagine Being Able To..." />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">{[
          [Zap,"Build websites faster"],[CircleDollarSign,"Create for clients"],[TrendingUp,"Start a side hustle"],[Rocket,"Launch an agency"],[HeartHandshake,"Serve churches"],[School,"Build for schools"],[Star,"Create event sites"],[Building2,"Serve businesses"],[Users,"Create portfolios"],[CircleDollarSign,"Earn extra income"],
        ].map(([Icon,label]) => { const C = Icon as typeof Zap; return <div key={String(label)} className="glass-panel rounded-2xl p-5"><C className="mb-8 text-primary" /><h3 className="text-sm font-bold md:text-base">{String(label)}</h3></div> })}</div>
      </div>
    </section>

    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <img src={coursePreviewImg} alt="Preview of websites" loading="lazy" width={1280} height={900} className="glass-panel w-full rounded-3xl object-cover" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[.24em] text-accent">Inside the course</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Ship real, portfolio-ready websites</h2>
          <p className="mt-5 leading-7 text-muted-foreground">Practical, project-led lessons walk you through building websites for businesses, schools, churches, events and portfolios—so you finish with proof of skill, not just theory.</p>
          <div className="mt-6"><CTA label="Start Building with AI Today" /></div>
        </div>
      </div>
    </section>

    <section className="bg-surface-deep/70 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="12-module roadmap" title="What You'll Learn" copy="A practical sequence that takes you from first prompt to profitable delivery." />
        <Accordion type="single" collapsible className="grid gap-3">{modules.map((module,index) => <AccordionItem key={module} value={`module-${index}`} className="glass-panel rounded-2xl border px-5"><AccordionTrigger className="py-5 hover:no-underline"><span className="flex items-center gap-4 text-left"><b className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-sm text-primary">{String(index+1).padStart(2,"0")}</b><span>{module}</span></span></AccordionTrigger><AccordionContent className="pl-13 text-muted-foreground">Follow-along lessons, tool walkthroughs, practical exercises, and an action step to apply what you learn.</AccordionContent></AccordionItem>)}</Accordion>
      </div>
    </section>

    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Included free" title="Enrol Today and Get These Bonuses FREE" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{bonuses.map(([name,value],index) => <article key={name} className="glass-panel relative overflow-hidden rounded-2xl p-6"><span className="absolute right-4 top-4 text-5xl font-extrabold text-primary/10">{String(index+1).padStart(2,"0")}</span><Award className="mb-8 text-accent" /><h3 className="max-w-[80%] font-bold">{name}</h3><p className="mt-4 text-sm text-muted-foreground">Value: <b className="text-primary">{value}</b></p></article>)}</div>
        <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/10 p-6 text-center"><p className="text-sm text-muted-foreground">Total bonus value</p><p className="mt-1 font-display text-4xl font-extrabold text-primary">₦525,000</p><p className="mt-2 text-sm font-bold text-foreground">Yours FREE when you enrol today</p></div>
      </div>
    </section>

    <section className="bg-surface-deep/70 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Real market value" title="What Could One Website Be Worth?" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[["Church","₦150,000 – ₦500,000"],["Business","₦300,000 – ₦2,000,000+"],["Event","₦100,000 – ₦500,000"],["Portfolio","₦80,000 – ₦300,000"],["School","₦500,000 – ₦5,000,000+"],["Corporate","₦1,000,000 – ₦10,000,000+"]].map(([type,value]) => <div key={type} className="glass-panel rounded-2xl p-6"><p className="text-sm text-muted-foreground">{type} website</p><h3 className="mt-3 text-xl font-extrabold text-primary">{value}</h3></div>)}</div>
        <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-5 text-muted-foreground">Income examples are illustrative. Results vary based on effort, skill application, market demand, and experience.</p>
      </div>
    </section>

    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Real people, real results" title="What AI Website Builders Are Saying" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{testimonials.map((t) => <figure key={t.name} className="glass-panel flex h-full flex-col rounded-3xl p-7">
          <div className="mb-6 flex items-center gap-4">
            <img src={t.photo} alt={t.name} loading="lazy" width={512} height={512} className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-primary/40" />
            <div className="min-w-0"><figcaption className="truncate font-bold">{t.name}</figcaption><p className="truncate text-sm text-muted-foreground">{t.role}</p></div>
          </div>
          <div className="mb-4 flex gap-1 text-accent">{Array.from({length:5}).map((_,i)=><Star key={i} size={16} fill="currentColor" />)}</div>
          <blockquote className="text-base leading-7 text-foreground">"{t.quote}"</blockquote>
        </figure>)}</div>
      </div>
    </section>

    <section className="bg-surface-deep/70 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Built for action" title="Why Students Love This Program" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{["Practical projects","Real-world examples","Beginner friendly","No coding needed","Community support","Lifetime access","Constant updates","Income-focused training"].map((item) => <div key={item} className="glass-panel rounded-2xl p-5"><BadgeCheck className="mb-5 text-primary" /><h3 className="text-sm font-bold">{item}</h3></div>)}</div>
      </div>
    </section>

    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <img src={certificateImg} alt="Certificate of completion" loading="lazy" width={1200} height={900} className="glass-panel w-full rounded-3xl object-cover" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[.24em] text-accent">Proof of progress</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Earn Your Certificate of Completion</h2>
          <p className="mt-5 leading-7 text-muted-foreground">Complete the training and receive a professional certificate that recognises your new AI-powered website creation skills.</p>
          <div className="mt-6 flex items-center gap-3 text-sm font-bold"><Award className="text-accent" /> Shareable. Professional. Yours to keep.</div>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="bg-surface-deep/70 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Simple 4-step process" title="How You'll Get Instant Access" copy="From click to course access in under a minute." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[
          [MousePointerClick, "Click Get Instant Access", "Tap the button anywhere on this page to begin your enrolment."],
          [ShieldCheck, "Secure Paystack Checkout", "You're redirected to our secure Paystack payment page."],
          [CreditCard, "Complete Payment", "Pay with card, bank transfer or USSD in less than a minute."],
          [PlayCircle, "Start Learning Instantly", "You'll land on the course access page and can begin immediately."],
        ].map(([Icon,title,copy],i) => { const C = Icon as typeof MousePointerClick; return <div key={String(title)} className="glass-panel relative rounded-2xl p-6"><span className="absolute right-4 top-4 font-display text-4xl font-extrabold text-primary/15">{i+1}</span><C className="mb-5 text-primary" size={28} /><h3 className="font-bold">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p></div>; })}</div>
        <div className="mt-10 text-center"><CTA /></div>
      </div>
    </section>

    <section id="offer" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="The complete offer" title="Everything You Get Today" />
        <div className="glass-panel overflow-hidden rounded-3xl">
          <div className="border-b border-border p-6 md:p-9">{[["Complete AI Website Income Accelerator","₦250,000"],...bonuses].map(([name,value]) => <div key={name} className="flex items-center justify-between gap-4 border-b border-border py-3 last:border-0"><span className="flex items-center gap-2 text-sm"><Check size={16} className="shrink-0 text-primary" />{name}</span><b className="shrink-0 text-sm text-muted-foreground">{value}</b></div>)}</div>
          <div className="bg-primary/10 p-7 text-center md:p-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Total value <s>₦775,000</s></p>
            <p className="mt-5 text-sm font-bold text-accent">TODAY'S DISCOUNTED PRICE</p>
            <p className="my-2 font-display text-6xl font-extrabold tracking-tight text-primary md:text-8xl">{PRICE}</p>
            <p className="mb-7 text-sm text-muted-foreground">One payment · Lifetime access</p>
            <CTA className="w-full sm:w-auto" />
            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground"><span className="flex items-center gap-1"><ShieldCheck size={14}/> Secure Paystack checkout</span><span className="flex items-center gap-1"><Clock3 size={14}/> Instant access</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-accent/10 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[.24em] text-accent">Limited-time offer</p>
        <h2 className="text-3xl font-extrabold md:text-5xl">This Discount Will Not Last Forever</h2>
        <p className="mt-4 text-muted-foreground">When the timer reaches zero, this special launch pricing may disappear.</p>
        <div className="my-8"><Countdown /></div>
        <div className="mx-auto mb-8 max-w-lg">
          <div className="mb-2 flex justify-between text-xs"><span>Discounted seats claimed</span><b className="text-accent">Only 37 remaining</b></div>
          <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[82%] rounded-full bg-accent" /></div>
        </div>
        <CTA label="Claim My Discount" />
      </div>
    </section>

    <section className="bg-surface-deep/70 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Questions, answered" title="Everything You Need to Know" />
        <Accordion type="single" collapsible className="grid gap-3">{faqs.map(([q,a],index) => <AccordionItem key={q} value={`faq-${index}`} className="glass-panel rounded-2xl border px-5"><AccordionTrigger className="py-5 text-base hover:no-underline">{q}</AccordionTrigger><AccordionContent className="leading-6 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion>
      </div>
    </section>

    {/* Access Policy */}
    <section className="px-4 py-20 md:py-28">
      <div className="glass-panel mx-auto grid max-w-5xl gap-8 rounded-3xl p-7 md:grid-cols-[auto_1fr] md:p-12">
        <div className="grid h-20 w-20 place-items-center rounded-3xl bg-primary/15 text-primary"><ShieldCheck size={38} /></div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.24em] text-accent">Purchase Assurance</p>
          <h2 className="mt-3 text-3xl font-extrabold">Our Access Policy</h2>
          <p className="mt-4 leading-7 text-muted-foreground">We're confident in the quality and practical value of this training. Because you receive immediate lifetime access to all digital course materials the moment your payment is confirmed, purchases are considered final and are therefore not eligible for refunds.</p>
          <p className="mt-3 leading-7 text-muted-foreground">Please review the course information carefully before completing your purchase. If you have any questions before enrolling, feel free to reach out—we're happy to help.</p>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-primary px-4 py-24 text-primary-foreground md:py-32">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Sparkles className="mx-auto mb-6" />
        <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">One Skill Could Change Your Financial Future</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 opacity-80">The AI revolution is already here. Learn a valuable skill, build professional websites faster, and position yourself for opportunities in today's digital economy.</p>
        <Button asChild size="xl" className="mt-9 bg-background text-foreground shadow-2xl hover:bg-background/90">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">YES! I WANT INSTANT ACCESS <ArrowRight /></a>
        </Button>
      </div>
    </section>

    <footer className="border-t border-border bg-surface-deep px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <img src={logo} alt="Hi-Tech Surge" width={140} height={42} className="h-9 w-auto" />
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Hi-Tech Surge. All rights reserved.</p>
      </div>
    </footer>

    {/* Mobile sticky CTA */}
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/25 bg-surface-deep/95 p-3 backdrop-blur-xl md:hidden">
      <Button asChild variant="hero" size="xl" className="w-full">
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">GET INSTANT ACCESS — {PRICE} <ArrowRight /></a>
      </Button>
    </div>
  </main>;
}
