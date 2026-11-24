import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Booking from "@/components/Booking";
import Countdown from "@/components/Countdown";
import { Icon, Leaf, Mandala } from "@/components/Icons";
import { treatments, camp, conditions, HOSPITAL } from "@/lib/data";

export default function Home() {
  return (
    <>
      <a href="#book" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to booking</a>
      <Nav />
      <main id="top">
        {/* Camp banner */}
        <a href="#camp" className="block bg-saffron text-center text-sm font-medium text-white">
          <span className="block px-4 py-2">Free camp on {camp.date}. Register now &rarr;</span>
        </a>

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-sand/70 to-cream">
          <Mandala className="spin-slow pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] text-moss/15 md:-right-24 md:-top-24 md:h-[44rem] md:w-[44rem]" />
          <Leaf className="float pointer-events-none absolute left-[6%] top-24 hidden h-24 w-16 text-moss/40 md:block" style={{ "--r": "-18deg" } as React.CSSProperties} />
          <Leaf className="float pointer-events-none absolute bottom-16 right-[12%] hidden h-20 w-14 text-saffron/60 md:block" style={{ "--r": "24deg", animationDelay: "1.5s" } as React.CSSProperties} />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:py-28">
            <div className="rise">
              <p className="mb-4 inline-block rounded-full border border-moss/30 px-4 py-1 text-sm text-moss">Yoga &middot; Natural therapies &middot; Since 1995</p>
              <h1 className="font-display text-5xl leading-[1.05] text-moss-dark md:text-7xl">Heal naturally. Live lightly.</h1>
              <p className="mt-6 max-w-xl text-lg text-ink/75">For over 30 years, Astha Yoga & Nature Cure Hospital in Rohtak has helped patients manage pain, stress and lifestyle conditions with yoga and drug-free natural therapies.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#book" className="rounded-full bg-moss px-8 py-4 font-medium text-white shadow-lg shadow-moss/30 transition hover:-translate-y-0.5 hover:bg-moss-dark">Book an appointment</a>
                <a href="#treatments" className="rounded-full border border-moss/40 px-8 py-4 font-medium text-moss transition hover:bg-moss/10">Explore treatments</a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/70">
                <li><b className="font-display text-2xl text-moss-dark">1995</b> established</li>
                <li><b className="font-display text-2xl text-moss-dark">30+</b> years of experience</li>
                <li><b className="font-display text-2xl text-moss-dark">8</b> therapies</li>
              </ul>
            </div>
            <div className="relative mx-auto hidden w-full max-w-sm md:block" aria-hidden="true">
              <div className="aspect-[4/5] rounded-[40%_40%_1.5rem_1.5rem] bg-moss p-6 shadow-2xl">
                <svg viewBox="0 0 200 250" className="h-full w-full">
                  <circle cx="100" cy="95" r="52" fill="#d98324" opacity="0.95" />
                  <circle cx="100" cy="95" r="70" fill="none" stroke="#f6efe0" strokeOpacity="0.3" />
                  <path d="M0 190c40-30 80-30 100-10s60 20 100-10v70H0z" fill="#f6efe0" opacity="0.18" />
                  <path d="M0 215c50-25 90-20 120 0s60 10 80-5v40H0z" fill="#f6efe0" opacity="0.28" />
                  <path d="M100 232V150" stroke="#f6efe0" strokeWidth="3" />
                  <path d="M100 185c-26 0-38-14-38-36 26 0 38 14 38 36z" fill="#f6efe0" />
                  <path d="M100 165c22 0 34-12 34-32-22 0-34 12-34 32z" fill="#f6efe0" opacity="0.85" />
                </svg>
              </div>
              <div className="float absolute -bottom-6 -left-8 rounded-2xl bg-white p-4 shadow-xl"><div className="text-xs text-ink/55">Next camp</div><div className="font-display text-lg text-moss-dark">13 Dec, free entry</div></div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {[["Drug-free care", "Natural therapies and yoga that work with the body instead of masking symptoms."], ["Three decades of experience", "Serving Rohtak and nearby towns since 1995 with a steady, patient-first approach."], ["One roof, many therapies", "Acupressure, hydro therapy, Ceragem, Sujok and more, combined into a plan for you."]].map(([t, d], i) => (
              <Reveal key={t} delay={i * 120}><div className="h-full rounded-3xl bg-white p-7 shadow-sm"><h3 className="font-display text-2xl text-moss-dark">{t}</h3><p className="mt-3 text-ink/70">{d}</p></div></Reveal>
            ))}
          </div>
        </section>

        {/* Treatments */}
        <section id="treatments" className="bg-sand/50 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal><p className="text-sm uppercase tracking-widest text-saffron">What we treat</p><h2 className="mt-2 font-display text-4xl text-moss-dark md:text-5xl">Treatments and therapies</h2><p className="mt-4 max-w-2xl text-ink/70">Tap Book on any therapy and it is pre-selected in the form below. Which mix suits you is decided at your first consultation.</p></Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {treatments.map((t, i) => (
                <Reveal key={t.id} delay={(i % 4) * 90}>
                  <article className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-moss/10 text-moss transition group-hover:bg-moss group-hover:text-white"><Icon k={t.icon} /></div>
                    <h3 className="font-display text-2xl text-moss-dark">{t.name}</h3>
                    <div className="text-sm text-saffron">{t.hindi}</div>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{t.blurb}</p>
                    <ul className="mt-4 space-y-1 text-sm text-ink/80">{t.good.map((g) => <li key={g} className="flex gap-2"><span className="text-moss">&bull;</span>{g}</li>)}</ul>
                    <a href={`#book`} data-treatment={t.name} className="mt-auto pt-5 text-sm font-medium text-moss underline-offset-4 hover:underline">Book &rarr;</a>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-xs text-ink/50">Natural therapies support health alongside, not instead of, emergency or specialist medical treatment. In an emergency, go to the nearest hospital.</p>
          </div>
        </section>

        {/* Camp */}
        <section id="camp" className="relative overflow-hidden bg-moss-dark py-20 text-cream">
          <Mandala className="spin-slow pointer-events-none absolute -left-32 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 text-white/10" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
            <Reveal>
              <p className="inline-block rounded-full bg-saffron px-4 py-1 text-sm font-medium text-white">Upcoming camp &middot; Free entry</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">{camp.title}</h2>
              <p className="mt-4 text-lg text-cream/80">{camp.date}<br />{camp.time}<br />{camp.where}</p>
              <div className="mt-7"><Countdown to={camp.iso} /></div>
              <a href="#book" className="mt-8 inline-block rounded-full bg-saffron px-8 py-4 font-medium text-white shadow-lg transition hover:-translate-y-0.5">Register for the camp</a>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
                <h3 className="font-display text-2xl">What you get</h3>
                <ul className="mt-4 space-y-3">{camp.includes.map((c) => <li key={c} className="flex gap-3"><svg viewBox="0 0 24 24" width="22" height="22" className="mt-0.5 shrink-0 text-saffron" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg>{c}</li>)}</ul>
                <p className="mt-5 text-sm text-cream/60">Limited seats. Please carry old reports and a list of current medicines. (Sample camp details for this demo.)</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Conditions */}
        <section id="conditions" className="mx-auto max-w-6xl px-5 py-20">
          <Reveal><p className="text-sm uppercase tracking-widest text-saffron">Who we help</p><h2 className="mt-2 font-display text-4xl text-moss-dark md:text-5xl">Conditions we treat</h2><p className="mt-4 max-w-2xl text-ink/70">Patients come to us for these and related concerns. A physician will tell you honestly what natural therapy can and cannot do in your case.</p></Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {conditions.map((c, i) => (
              <Reveal key={c} delay={(i % 6) * 60}><span className="inline-block rounded-full border border-moss/25 bg-white px-5 py-2.5 text-moss-dark shadow-sm transition hover:-translate-y-0.5 hover:bg-moss hover:text-white">{c}</span></Reveal>
            ))}
          </div>
        </section>

        {/* Booking */}
        <section id="book" className="bg-gradient-to-b from-sand/60 to-cream py-20">
          <div className="mx-auto max-w-4xl px-5">
            <Reveal><div className="mb-10 text-center"><p className="text-sm uppercase tracking-widest text-saffron">Book a visit</p><h2 className="mt-2 font-display text-4xl text-moss-dark md:text-5xl">Request an appointment</h2><p className="mt-3 text-ink/70">Fill in the form and our front desk will call to confirm.</p></div></Reveal>
            <Reveal><Booking /></Reveal>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7"><h3 className="font-display text-2xl text-moss-dark">Timings</h3><p className="mt-3 text-ink/70">Morning: 6:30 AM to 12:30 PM<br />Evening: 4:00 PM to 8:00 PM</p></div>
            <div className="rounded-3xl bg-white p-7"><h3 className="font-display text-2xl text-moss-dark">Contact</h3><p className="mt-3 text-ink/70"><a className="font-medium text-moss underline-offset-4 hover:underline" href={`tel:${HOSPITAL.tel}`}>{HOSPITAL.phone}</a><br /><a className="underline-offset-4 hover:underline" href={`mailto:${HOSPITAL.email}`}>{HOSPITAL.email}</a></p></div>
            <div className="rounded-3xl bg-white p-7"><h3 className="font-display text-2xl text-moss-dark">Find us</h3><p className="mt-3 text-ink/70">{HOSPITAL.address}</p><a className="mt-3 inline-block text-sm font-medium text-moss underline-offset-4 hover:underline" href={HOSPITAL.map} target="_blank" rel="noopener noreferrer">Open in Google Maps &rarr;</a></div>
          </div>
        </section>
      </main>
      <footer className="bg-moss-dark py-10 text-center text-sm text-cream/70">
        <p className="font-display text-xl text-cream">Astha Yoga &amp; Nature Cure Hospital</p>
        <p className="mt-2 px-5">Rohtak, Haryana &middot; Since 1995</p>
        <p className="mt-2 px-5 text-cream/50">Demo website concept. The upcoming camp and the booking form are sample content.</p>
      </footer>
      <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-treatment]');if(a){window.__pick=a.getAttribute('data-treatment');setTimeout(function(){var s=document.getElementById('f-treatment');if(s){var o=[].slice.call(s.options).find(function(x){return x.text.indexOf(window.__pick)===0});if(o){var set=Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value').set;set.call(s,o.value||o.text);s.dispatchEvent(new Event('change',{bubbles:true}));}}},50)}});` }} />
    </>
  );
}
