import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/eloria-hero.jpg";
import vipImage from "@/assets/eloria-vip.jpg";
import craftImage from "@/assets/eloria-craft.jpg";
import galleryImage from "@/assets/eloria-gallery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Éloria | Beauté premium au Cameroun" },
      { name: "description", content: "Maison de beauté VIP à Yaoundé et Douala : coiffure, soins, maquillage, massages et suites privées." },
      { property: "og:title", content: "Maison Éloria | Beauté premium au Cameroun" },
      { property: "og:description", content: "Des rituels beauté sur mesure dans deux écrins privés à Yaoundé et Douala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { name: "Cérémonie des cheveux", short: "Coiffure", duration: "120 min", price: "25 000", desc: "Diagnostic, soin profond et mise en forme des cheveux texturés." },
  { name: "Bain de lumière", short: "Visage", duration: "90 min", price: "18 000", desc: "Un protocole ciblé pour purifier, hydrater et révéler l’éclat." },
  { name: "Coiffure couture", short: "Cheveux", duration: "150 min", price: "30 000", desc: "Tresses, extensions et coiffures d’exception, dessinées sur mesure." },
  { name: "Sculpture du corps", short: "Corps", duration: "75 min", price: "28 000", desc: "Gommage, enveloppement et gestuelle tonifiante ou relaxante." },
  { name: "Mains & pieds", short: "Ongles", duration: "75 min", price: "15 000", desc: "Soin complet, précision des contours et finition signature." },
  { name: "Maquillage d’apparat", short: "Maquillage", duration: "90 min", price: "22 000", desc: "Un teint travaillé et une allure pensée pour votre événement." },
  { name: "Rituels bien-être", short: "Massage", duration: "120 min", price: "35 000", desc: "Massage enveloppant, huiles précieuses et déconnexion profonde." },
  { name: "Suite Éloria", short: "VIP", duration: "Sur mesure", price: "95 000", desc: "Espace privé, experte dédiée et programme entièrement orchestré." },
];

const experts = [
  ["Élora M.", "Directrice artistique", "Cheveux texturés & cérémonies"],
  ["Sandrine B.", "Make-up artist", "Teint couture & événements"],
  ["Mireille T.", "Skin expert", "Soins visage & diagnostics"],
];

const prices = [
  { title: "Éclat", price: "45 000", items: ["Diagnostic beauté", "Soin visage signature", "Coiffage naturel"] },
  { title: "Cérémonie", price: "85 000", items: ["Soin capillaire profond", "Coiffure couture", "Maquillage signature"], featured: true },
  { title: "Suite privée", price: "150 000", items: ["Espace privatisé", "Rituel corps & visage", "Conciergerie dédiée"] },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(0);
  const [selectedService, setSelectedService] = useState("Cérémonie des cheveux");
  const [selectedExpert, setSelectedExpert] = useState("Sans préférence");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [beforeAfter, setBeforeAfter] = useState(52);

  const openBooking = (service?: string) => {
    if (service) setSelectedService(service);
    setBookingStep(0);
    setBookingOpen(true);
  };

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-ivory/15 bg-primary/75 text-primary-foreground backdrop-blur-xl">
        <div className="mx-auto grid h-18 max-w-[1280px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:justify-between lg:px-8">
          <a href="#accueil" className="flex min-w-0 items-baseline gap-3">
            <span className="truncate font-display text-2xl italic">Maison Éloria</span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.22em] text-primary-foreground/55 sm:inline">Yaoundé · Douala</span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.15em] text-primary-foreground/70 lg:flex">
            <a href="#maison" className="transition-colors hover:text-gold">La maison</a>
            <a href="#prestations" className="transition-colors hover:text-gold">Prestations</a>
            <a href="#vip" className="transition-colors hover:text-gold">VIP</a>
            <a href="#galerie" className="transition-colors hover:text-gold">Galerie</a>
            <a href="#tarifs" className="transition-colors hover:text-gold">Tarifs</a>
            <Link to="/faq" className="transition-colors hover:text-gold">FAQ</Link>
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button variant="gold" className="hidden sm:inline-flex" onClick={() => openBooking()}>Réserver</Button>
            <Button variant="ghost" size="icon" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} className="text-primary-foreground lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-ivory/15 bg-primary px-5 py-5 font-mono text-xs uppercase tracking-[0.15em] lg:hidden">
            {[["La maison", "#maison"], ["Prestations", "#prestations"], ["Expérience VIP", "#vip"], ["Galerie", "#galerie"], ["Tarifs", "#tarifs"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-ivory/10 py-3">{label}</a>
            ))}
            <Link to="/faq" onClick={() => setMenuOpen(false)} className="block border-b border-ivory/10 py-3">FAQ</Link>
            <Button variant="gold" className="mt-5 w-full" onClick={() => openBooking()}>Prendre rendez-vous</Button>
          </nav>
        )}
      </header>

      <section id="accueil" className="relative min-h-[720px] pt-18 lg:min-h-[820px]">
        <img src={heroImage} width={1920} height={1080} alt="Campagne Maison Éloria avec une femme aux cheveux naturels" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto flex min-h-[650px] max-w-[1280px] items-end px-5 pb-16 pt-28 lg:min-h-[750px] lg:px-8 lg:pb-20">
          <div className="reveal-up max-w-2xl text-primary-foreground">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">(a) — Maison de beauté privée · Cameroun</p>
            <h1 className="mt-5 max-w-[10ch] font-display text-6xl font-medium italic leading-[0.88] sm:text-7xl lg:text-8xl">La beauté, comme un rituel de cérémonie.</h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-primary-foreground/75 sm:text-base">Un écrin VIP où chaque geste devient une signature — cheveux texturés, peau lumineuse et moments précieusement orchestrés.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="gold" size="lg" onClick={() => openBooking()}>Prendre rendez-vous <ArrowRight /></Button>
              <Button variant="luxuryOutline" size="lg" asChild><a href="#prestations">Découvrir nos services</a></Button>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-3 border-t border-primary-foreground/20 pt-5">
              {[["14", "ans d’expertise"], ["2 400+", "clientes"], ["4,9/5", "avis vérifiés"]].map(([value, label]) => (
                <div key={label}><p className="font-display text-2xl italic text-gold sm:text-3xl">{value}</p><p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-primary-foreground/55">{label}</p></div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden border-l border-t border-ivory/20 bg-primary/70 px-7 py-5 text-primary-foreground backdrop-blur-md lg:block">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">Prochain créneau</p>
          <p className="mt-1 font-display text-xl italic">Aujourd’hui · 16h30</p>
        </div>
      </section>

      <section id="maison" className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
        <div className="lg:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">(b) — Notre manifeste</p>
          <h2 className="mt-4 font-display text-5xl italic leading-[0.95]">Un temps à soi. Une beauté qui vous ressemble.</h2>
        </div>
        <div className="lg:col-span-5">
          <p className="font-display text-2xl italic leading-snug">« Nous ne proposons pas simplement des soins. Nous composons des moments qui restent. »</p>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">Née d’une vision camerounaise de l’élégance, Maison Éloria réunit expertise, discrétion et chaleur. Chaque diagnostic commence par l’écoute; chaque protocole s’adapte à votre peau, vos textures et votre rythme.</p>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-border lg:col-span-3">
          {[["01", "Précision"], ["02", "Discrétion"], ["03", "Excellence"], ["04", "Attention"]].map(([n, value]) => (
            <div key={n} className="bg-card p-5"><span className="font-mono text-[9px] text-gold">{n}</span><p className="mt-6 font-display text-xl italic">{value}</p></div>
          ))}
        </div>
      </section>

      <section id="prestations" className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="grid gap-6 border-b border-border pb-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">(c) — Le menu</p><h2 className="mt-3 font-display text-5xl italic">Huit gestes, une écriture</h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Des rituels pensés pour les beautés africaines, accompagnés de prix clairs et d’un temps préservé.</p>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-x-12">
            {services.map((service, index) => (
              <article key={service.name} className="group grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-border py-6">
                <div className="min-w-0">
                  <div className="flex min-w-0 items-baseline gap-4"><span className="shrink-0 font-mono text-[10px] text-gold">{String(index + 1).padStart(2, "0")}</span><h3 className="font-display text-2xl italic sm:text-3xl">{service.name}</h3></div>
                  <p className="mt-2 pl-8 text-xs leading-5 text-muted-foreground sm:text-sm">{service.desc}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end justify-between text-right">
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">{service.duration}<br />dès {service.price}</span>
                  <Button variant="ghost" size="icon" aria-label={`Réserver ${service.name}`} className="mt-3 rounded-full border border-border group-hover:border-gold group-hover:text-gold" onClick={() => openBooking(service.name)}><ArrowRight /></Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="savoir-faire" className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">(d) — Savoir-faire</p>
            <h2 className="mt-4 font-display text-5xl italic leading-[0.95]">Le geste se voit. Le résultat se ressent.</h2>
            <p className="mt-6 text-sm leading-7 text-primary-foreground/60">Nos protocoles sont précis, nos produits choisis pour les peaux mélaninées et les cheveux texturés, nos expertes formées en continu.</p>
            <button className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-gold" onClick={() => setLightbox(4)}><span className="grid size-11 place-items-center rounded-full border border-gold"><Play className="size-4" /></span> Voir le film de la maison</button>
          </div>
          <div className="lg:col-span-8">
            <img src={craftImage} loading="lazy" width={1600} height={1200} alt="Gestes experts de coiffure et de soins Maison Éloria" className="aspect-[4/3] w-full rounded-lg object-cover" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[["98%", "de fidélité"], ["18", "protocoles experts"], ["100%", "diagnostic inclus"]].map(([v, l]) => <div key={l} className="border border-primary-foreground/15 p-4"><p className="font-display text-3xl italic text-gold">{v}</p><p className="font-mono text-[8px] uppercase tracking-[0.12em] text-primary-foreground/50">{l}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="vip" className="relative min-h-[680px]">
        <img src={vipImage} loading="lazy" width={1600} height={1000} alt="Suite de beauté privée Maison Éloria" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1280px] items-end px-5 py-16 lg:items-center lg:px-8">
          <div className="max-w-lg bg-card/90 p-7 backdrop-blur-md sm:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">(e) — Expérience VIP</p>
            <h2 className="mt-4 font-display text-5xl italic leading-[0.95]">La maison se retire. Il ne reste que vous.</h2>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">Accueil personnalisé, suite privée, experte dédiée, collation et programme beauté composé autour de votre occasion.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 font-mono text-[9px] uppercase tracking-[0.1em]">
              {["Conciergerie dédiée", "Espace privatisé", "Rituel sur mesure", "Service discret"].map(item => <span key={item} className="flex items-center gap-2 border-t border-border pt-3"><Sparkles className="size-3 text-gold" />{item}</span>)}
            </div>
            <Button variant="luxury" size="lg" className="mt-8" onClick={() => openBooking("Suite Éloria")}>Réserver la suite <ArrowRight /></Button>
          </div>
        </div>
      </section>

      <section id="galerie" className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">(f) — Galerie</p><h2 className="mt-3 font-display text-5xl italic">Beautés signées Éloria</h2></div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">Une collection de textures, de gestes et de transformations réelles.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[0,1,2,3].map((item) => (
            <button key={item} aria-label={`Ouvrir la photo ${item + 1}`} onClick={() => setLightbox(item)} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <img src={galleryImage} loading="lazy" width={800} height={600} alt={["Coiffure afro naturelle", "Tresses couture", "Chignon texturé", "Boucles sculptées"][item]} className={`h-[200%] w-[200%] max-w-none object-cover transition-transform duration-700 group-hover:scale-105 ${item % 2 ? "-translate-x-1/2" : ""} ${item > 1 ? "-translate-y-1/2" : ""}`} />
              <span className="gallery-shade absolute inset-0 opacity-70" />
              <span className="absolute bottom-4 left-4 text-left font-mono text-[9px] uppercase tracking-[0.18em] text-primary-foreground">Collection 0{item + 1}<br /><strong className="mt-1 block font-display text-xl normal-case tracking-normal">{["Volume naturel", "Tresses couture", "Attache signature", "Boucles lumière"][item]}</strong></span>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">(g) — Avant / Après</p>
            <h2 className="mt-4 font-display text-5xl italic leading-[0.95]">La transformation, sans artifice.</h2>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">Faites glisser le curseur pour découvrir le résultat d’un rituel capillaire Éloria.</p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground"><Clock3 className="size-4 text-gold" /> Rituel 2h30 · Coiffure couture</div>
          </div>
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
              <img src={craftImage} loading="lazy" width={1600} height={1200} alt="Avant le rituel capillaire" className="absolute inset-0 h-full w-full object-cover grayscale" />
              <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${beforeAfter}%` }}>
                <img src={craftImage} loading="lazy" width={1600} height={1200} alt="Après le rituel capillaire" className="h-full max-w-none object-cover" style={{ width: "calc((100vw - 2.5rem) * 0.667)", minWidth: "680px" }} />
              </div>
              <div className="absolute inset-y-0 w-px bg-ivory" style={{ left: `${beforeAfter}%` }}><span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ivory text-foreground shadow-lg">↔</span></div>
              <span className="absolute left-4 top-4 bg-primary/80 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-primary-foreground">Après</span>
              <span className="absolute right-4 top-4 bg-primary/80 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-primary-foreground">Avant</span>
              <input aria-label="Comparer avant et après" type="range" min="10" max="90" value={beforeAfter} onChange={e => setBeforeAfter(Number(e.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
            </div>
          </div>
        </div>
      </section>

      <section id="expertes" className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">(h) — Elles en parlent</p>
              <div className="mt-8 flex gap-1 text-gold">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 fill-current" />)}</div>
              <blockquote className="mt-5 max-w-xl font-display text-4xl italic leading-tight">« Tout est pensé : la douceur de l’accueil, la précision du geste et cette sensation rare d’être la seule cliente de la maison. »</blockquote>
              <div className="mt-6 flex items-center gap-4"><div className="grid size-12 place-items-center rounded-full bg-gold font-display text-xl italic text-gold-foreground">AN</div><div><p className="font-medium">Aïcha N.</p><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-primary-foreground/50">Cliente Signature · Yaoundé</p></div></div>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">Nos expertes</p>
              <div className="mt-6 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
                {experts.map(([name, role, specialty], i) => <div key={name} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-5"><span className="grid size-12 place-items-center rounded-full bg-primary-foreground/10 font-display text-xl italic text-gold">0{i+1}</span><div className="min-w-0"><p className="font-display text-2xl italic">{name}</p><p className="truncate text-xs text-primary-foreground/55">{specialty}</p></div><span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] text-gold sm:block">{role}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tarifs" className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="text-center"><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">(i) — Collections</p><h2 className="mt-3 font-display text-5xl italic">Des expériences, en toute clarté</h2></div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {prices.map((pack) => <article key={pack.title} className={`relative border p-7 ${pack.featured ? "border-gold bg-primary text-primary-foreground" : "border-border bg-card"}`}>
            {pack.featured && <span className="absolute right-5 top-5 font-mono text-[8px] uppercase tracking-[0.15em] text-gold">La plus choisie</span>}
            <p className="font-display text-3xl italic">{pack.title}</p><p className="mt-5 font-display text-5xl italic text-gold">{pack.price}<span className="ml-2 font-mono text-[9px] not-italic uppercase">FCFA</span></p>
            <ul className={`mt-7 space-y-3 text-sm ${pack.featured ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{pack.items.map(item=><li key={item} className="flex items-center gap-3"><Check className="size-4 text-gold" />{item}</li>)}</ul>
            <Button variant={pack.featured ? "gold" : "luxury"} className="mt-8 w-full" onClick={() => openBooking(pack.title)}>Choisir</Button>
          </article>)}
        </div>
        <p className="mt-5 text-center text-xs text-muted-foreground">Tarifs indicatifs, confirmés après diagnostic. Les prix peuvent varier selon la longueur et la technicité.</p>
      </section>

      <section id="adresses" className="bg-card py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4"><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">(j) — Nous trouver</p><h2 className="mt-4 font-display text-5xl italic">Deux villes, une même signature.</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Adresses de démonstration à remplacer par les informations définitives du centre.</p></div>
          {[{city:"Yaoundé", area:"Bastos · Rue 1.870", phone:"+237 6 90 00 00 00"},{city:"Douala", area:"Bonanjo · Avenue de Gaulle",phone:"+237 6 91 00 00 00"}].map((place)=><article key={place.city} className="border-t border-border pt-5 lg:col-span-4"><span className="font-mono text-[9px] uppercase tracking-[0.15em] text-gold">Maison Éloria</span><h3 className="mt-2 font-display text-4xl italic">{place.city}</h3><div className="mt-6 space-y-3 text-sm text-muted-foreground"><p className="flex gap-3"><MapPin className="size-4 shrink-0 text-gold" />{place.area}</p><p className="flex gap-3"><Phone className="size-4 shrink-0 text-gold" />{place.phone}</p><p className="flex gap-3"><Clock3 className="size-4 shrink-0 text-gold" />Mar — Sam · 09h à 19h</p></div><a href="https://maps.google.com" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em]">Itinéraire <ChevronRight className="size-3" /></a></article>)}
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div><p className="font-display text-3xl italic">Maison Éloria</p><p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/55">Beauté VIP au Cameroun. Des rituels sur mesure, une expérience discrète, une signature.</p></div>
          <div><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-gold">Navigation</p><div className="mt-4 space-y-2 text-sm text-primary-foreground/60"><a className="block" href="#maison">La maison</a><a className="block" href="#prestations">Prestations</a><a className="block" href="#vip">Expérience VIP</a><a className="block" href="#tarifs">Tarifs</a><Link className="block" to="/faq">FAQ</Link></div></div>
          <div><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-gold">Horaires</p><p className="mt-4 text-sm leading-7 text-primary-foreground/60">Mardi — Samedi<br />09h00 — 19h00<br />Sur rendez-vous</p></div>
          <div><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-gold">Suivre la maison</p><div className="mt-4 flex gap-3"><a aria-label="Instagram" href="#" className="grid size-10 place-items-center rounded-full border border-primary-foreground/20"><Instagram className="size-4" /></a><a aria-label="WhatsApp" href="https://wa.me/237682293965" className="grid size-10 place-items-center rounded-full border border-primary-foreground/20"><MessageCircle className="size-4" /></a></div></div>
        </div>
        <div className="border-t border-primary-foreground/10"><div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3 px-5 py-5 font-mono text-[8px] uppercase tracking-[0.15em] text-primary-foreground/35 lg:px-8"><span>© 2026 Maison Éloria · Tous droits réservés</span><span>Yaoundé · Douala · Cameroun</span></div></div>
      </footer>

      <button aria-label="Contacter Maison Éloria sur WhatsApp" onClick={() => window.open("https://wa.me/237682293965", "_blank")} className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-gold text-gold-foreground shadow-xl transition-transform hover:scale-105"><MessageCircle className="size-6" /></button>

      <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-h-[90vh] max-w-5xl overflow-hidden border-primary-foreground/10 bg-primary p-2 text-primary-foreground">
          <DialogHeader className="sr-only"><DialogTitle>Galerie Maison Éloria</DialogTitle><DialogDescription>Vue agrandie d’une réalisation</DialogDescription></DialogHeader>
          <img src={lightbox === 4 ? craftImage : galleryImage} width={1600} height={1200} alt="Réalisation Maison Éloria en plein écran" className="max-h-[84vh] w-full object-contain" />
        </DialogContent>
      </Dialog>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} step={bookingStep} setStep={setBookingStep} selectedService={selectedService} setSelectedService={setSelectedService} selectedExpert={selectedExpert} setSelectedExpert={setSelectedExpert} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
    </main>
  );
}

type BookingProps = {
  open: boolean; onOpenChange: (open: boolean) => void; step: number; setStep: (step: number) => void;
  selectedService: string; setSelectedService: (value: string) => void; selectedExpert: string; setSelectedExpert: (value: string) => void;
  selectedDate: string; setSelectedDate: (value: string) => void; selectedTime: string; setSelectedTime: (value: string) => void;
};

function BookingDialog(props: BookingProps) {
  const { open, onOpenChange, step, setStep, selectedService, setSelectedService, selectedExpert, setSelectedExpert, selectedDate, setSelectedDate, selectedTime, setSelectedTime } = props;
  const labels = ["Prestation", "Experte", "Date", "Heure", "Coordonnées", "Confirmation"];
  return <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-h-[92vh] w-[calc(100%-1rem)] max-w-3xl overflow-y-auto border-border bg-background p-0">
      <div className="grid lg:grid-cols-[210px_1fr]">
        <aside className="bg-primary p-6 text-primary-foreground">
          <p className="font-display text-2xl italic">Maison Éloria</p><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.16em] text-gold">Votre rituel commence ici</p>
          <ol className="mt-7 grid grid-cols-6 gap-2 lg:grid-cols-1">{labels.map((label, i) => <li key={label} className={`flex items-center gap-3 ${i <= step ? "text-primary-foreground" : "text-primary-foreground/30"}`}><span className={`grid size-7 shrink-0 place-items-center rounded-full border font-mono text-[9px] ${i === step ? "border-gold bg-gold text-gold-foreground" : "border-current"}`}>{i < step ? <Check className="size-3" /> : i + 1}</span><span className="hidden font-mono text-[8px] uppercase tracking-[0.12em] lg:block">{label}</span></li>)}</ol>
        </aside>
        <div className="p-6 sm:p-9">
          <DialogHeader><DialogTitle className="font-display text-4xl italic">{labels[step]}</DialogTitle><DialogDescription className="mt-1">Étape {step + 1} sur 6 · Aucun paiement en ligne.</DialogDescription></DialogHeader>
          <div className="mt-7 min-h-[250px]">
            {step === 0 && <div className="grid gap-2 sm:grid-cols-2">{services.map(s=><button key={s.name} onClick={()=>setSelectedService(s.name)} className={`border p-4 text-left transition-colors ${selectedService===s.name?"border-gold bg-gold/10":"border-border bg-card"}`}><p className="font-display text-xl italic">{s.name}</p><p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted-foreground">{s.duration} · dès {s.price} FCFA</p></button>)}</div>}
            {step === 1 && <div className="grid gap-2">{["Sans préférence", "Élora M.", "Sandrine B.", "Mireille T."].map(name=><button key={name} onClick={()=>setSelectedExpert(name)} className={`flex items-center justify-between border p-4 text-left ${selectedExpert===name?"border-gold bg-gold/10":"border-border"}`}><span className="font-display text-xl italic">{name}</span>{selectedExpert===name&&<Check className="size-4 text-gold" />}</button>)}</div>}
            {step === 2 && <div><label className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">Choisissez une date</label><Input type="date" min="2026-09-13" value={selectedDate} onChange={e=>setSelectedDate(e.target.value)} className="mt-3 h-14 text-base" /></div>}
            {step === 3 && <div className="grid grid-cols-3 gap-3">{["09:00","10:00","11:30","13:00","14:30","16:00","17:30"].map(time=><button key={time} onClick={()=>setSelectedTime(time)} className={`border py-4 font-mono text-xs ${selectedTime===time?"border-gold bg-gold text-gold-foreground":"border-border"}`}>{time}</button>)}</div>}
            {step === 4 && <div className="grid gap-4"><Input placeholder="Nom et prénom" aria-label="Nom et prénom" className="h-12" /><Input placeholder="Téléphone WhatsApp" aria-label="Téléphone WhatsApp" type="tel" className="h-12" /><Input placeholder="Adresse e-mail" aria-label="Adresse e-mail" type="email" className="h-12" /><textarea aria-label="Message facultatif" placeholder="Une précision pour votre experte ?" className="min-h-24 rounded-md border border-input bg-transparent p-3 text-sm outline-none focus:ring-1 focus:ring-ring" /></div>}
            {step === 5 && <div className="text-center"><span className="mx-auto grid size-16 place-items-center rounded-full bg-gold text-gold-foreground"><Check className="size-7" /></span><h3 className="mt-5 font-display text-3xl italic">Votre demande est prête</h3><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">{selectedService} avec {selectedExpert.toLowerCase()}, le {selectedDate || "jour choisi"} à {selectedTime}. Notre conciergerie confirmera par WhatsApp.</p><Button variant="gold" className="mt-6" onClick={() => window.open(`https://wa.me/237682293965?text=${encodeURIComponent(`Bonjour Maison Éloria, je souhaite réserver : ${selectedService} avec ${selectedExpert}, le ${selectedDate || "jour à convenir"} à ${selectedTime}.`)}`, "_blank")}><MessageCircle className="size-4" /> Envoyer ma demande sur WhatsApp</Button></div>}
          </div>
          <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
            <Button variant="ghost" disabled={step===0} onClick={()=>setStep(step-1)}><ArrowLeft /> Retour</Button>
            {step < 5 ? <Button variant="gold" onClick={()=>setStep(step+1)}>Continuer <ArrowRight /></Button> : <Button variant="gold" onClick={()=>onOpenChange(false)}>Terminer</Button>}
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>;
}