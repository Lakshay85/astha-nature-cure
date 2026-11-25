import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Booking from "@/components/Booking";
import Countdown from "@/components/Countdown";
import { Icon, Leaf, Mandala } from "@/components/Icons";
import { posts, BYLINE } from "@/lib/posts";
import { treatments, camp, conditions, HOSPITAL } from "@/lib/data";

export default function Home() {
  return (
    <>
      <a href="#book" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to booking</a>
      <Nav />
      <main id="top">
        {/* Demo + camp banners */}
        <div role="note" className="bg-ink px-4 py-2 text-center text-sm font-medium text-white">Demo only: no appointments or camp registrations are sent from this website.</div>
        <a href="#camp" className="block bg-saffron text-center text-sm font-medium text-white">
          <span className="block px-4 py-2">SAMPLE camp (demo content): {camp.date}. See details &rarr;</span>
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
            <div className="relative mx-auto w-full max-w-sm">
              <div className="aspect-[3/4] overflow-hidden rounded-[40%_40%_1.5rem_1.5rem] bg-moss shadow-2xl ring-8 ring-moss">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/director.jpg" alt="Dr. Gaurav Rajput, Director" width={636} height={848} className="h-full w-full object-cover object-top" fetchPriority="high" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-white px-6 py-3 text-center shadow-xl"><div className="text-xs uppercase tracking-widest text-saffron">Meet the director</div><div className="font-display text-xl text-moss-dark">Dr. Gaurav Rajput</div><div className="text-sm text-ink/60">Director</div></div>
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
              <p className="inline-block rounded-full bg-saffron px-4 py-1 text-sm font-medium text-white">Sample camp (demo) &middot; Not a real event</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">{camp.title}</h2>
              <p className="mt-4 text-lg text-cream/80">{camp.date}<br />{camp.time}<br />{camp.where}</p>
              <div className="mt-7"><Countdown to={camp.iso} /></div>
              <a href="#book" className="mt-8 inline-block rounded-full bg-saffron px-8 py-4 font-medium text-white shadow-lg transition hover:-translate-y-0.5">See sample registration (demo)</a>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
                <h3 className="font-display text-2xl">What you get</h3>
                <ul className="mt-4 space-y-3">{camp.includes.map((c) => <li key={c} className="flex gap-3"><svg viewBox="0 0 24 24" width="22" height="22" className="mt-0.5 shrink-0 text-saffron" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg>{c}</li>)}</ul>
                <p className="mt-5 text-sm text-cream/60">This camp is invented sample content for the website demo. It is not a real event.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mx-auto max-w-6xl px-5 py-20">
          <Reveal><p className="text-sm uppercase tracking-widest text-saffron">Inside the hospital</p><h2 className="mt-2 font-display text-4xl text-moss-dark md:text-5xl">Our hospital and people</h2></Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["/img/reception.jpg", "Reception", 358, 478], ["/img/team.jpg", "Our team", 638, 478], ["/img/team2.jpg", "Our team", 638, 478], ["/img/camp.jpg", "Community health camp", 638, 478]].map(([src, cap, w, h], i) => (
              <Reveal key={src as string} delay={i * 90}>
                <figure className="group overflow-hidden rounded-3xl bg-white shadow-sm">
                  <div className="aspect-[4/5] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src as string} alt={cap as string} width={w as number} height={h as number} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <figcaption className="px-5 py-3 text-sm font-medium text-moss-dark">{cap}</figcaption>
                </figure>
              </Reveal>
            ))}
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

        {/* Blog */}
        <section id="blog" className="bg-sand/50 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal><p className="text-sm uppercase tracking-widest text-saffron">Health reading</p><h2 className="mt-2 font-display text-4xl text-moss-dark md:text-5xl">From the blog</h2><p className="mt-4 max-w-2xl text-ink/70">General education from the {BYLINE}. It is not medical advice. A physician will assess your case.</p></Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {posts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <a href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div className="text-xs uppercase tracking-widest text-saffron">{p.tag}</div>
                    <h3 className="mt-2 font-display text-2xl text-moss-dark">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.excerpt}</p>
                    <span className="mt-auto pt-5 text-sm font-medium text-moss underline-offset-4 group-hover:underline">Read &middot; {p.read} &rarr;</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="book" className="bg-gradient-to-b from-sand/60 to-cream py-20">
          <div className="mx-auto max-w-4xl px-5">
            <Reveal><div className="mb-10 text-center"><p className="text-sm uppercase tracking-widest text-saffron">Book a visit</p><h2 className="mt-2 font-display text-4xl text-moss-dark md:text-5xl">Request an appointment</h2><p className="mt-3 text-ink/70">This is a demo form. To book a real appointment, call <a className="font-medium text-moss underline" href={`tel:${HOSPITAL.tel}`}>{HOSPITAL.phone}</a>.</p></div></Reveal>
            <Reveal><div role="note" className="mb-4 rounded-2xl border-2 border-saffron bg-saffron/10 px-5 py-3 text-center font-medium text-ink">Demo only: no appointments or camp registrations are sent. Nothing you type here leaves your browser.</div><Booking /></Reveal>
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
