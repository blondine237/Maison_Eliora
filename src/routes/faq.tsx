import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Questions fréquentes — Maison Éloria" },
      { name: "description", content: "Réservation, tarifs, expérience VIP, adresses à Yaoundé et Douala : toutes les réponses aux questions fréquentes de Maison Éloria." },
      { property: "og:title", content: "Questions fréquentes — Maison Éloria" },
      { property: "og:description", content: "Réservation, tarifs, expérience VIP et adresses : toutes les réponses de Maison Éloria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    category: "Réservation",
    items: [
      {
        q: "Comment réserver un soin ?",
        a: "Cliquez sur « Réserver » et laissez-vous guider en six étapes : prestation, experte, date, heure, coordonnées, confirmation. Votre demande est ensuite envoyée à notre conciergerie via WhatsApp au 682 293 965, qui vous confirme sous quelques heures.",
      },
      {
        q: "Puis-je modifier ou annuler mon rendez-vous ?",
        a: "Oui, gratuitement jusqu'à 24 heures avant le rendez-vous, par WhatsApp au 682 293 965. Passé ce délai, un acompte de 30 % peut être retenu sur les prestations de plus de deux heures.",
      },
      {
        q: "Faut-il verser un acompte ?",
        a: "Un acompte de 30 % est demandé pour les rituels signature et l'expérience VIP afin de garantir votre créneau. Il est déductible du montant total le jour du soin.",
      },
      {
        q: "Puis-je choisir mon experte ?",
        a: "Absolument. Lors de la réservation, vous pouvez sélectionner Élora, Sandrine ou Mireille, ou nous laisser vous attribuer l'experte la plus adaptée à votre prestation.",
      },
    ],
  },
  {
    category: "Prestations & tarifs",
    items: [
      {
        q: "Les tarifs affichés sont-ils définitifs ?",
        a: "Nos tarifs sont indicatifs : ils sont confirmés après un diagnostic offert en début de séance, selon la longueur, la densité et la technicité souhaitée. Aucun soin ne commence sans votre accord sur le prix final.",
      },
      {
        q: "Quels produits utilisez-vous ?",
        a: "Nous travaillons avec des gammes professionnelles sélectionnées pour les cheveux texturés et les peaux riches en mélanine, sans ingrédients agressifs. La liste complète est disponible sur demande en cabine.",
      },
      {
        q: "Proposez-vous des prestations à domicile ?",
        a: "Oui, dans Yaoundé et Douala, pour les rituels signature et l'expérience VIP, avec un supplément de déplacement. La suite mobile est réservée sur demande via WhatsApp.",
      },
    ],
  },
  {
    category: "Expérience VIP",
    items: [
      {
        q: "En quoi consiste l'expérience VIP ?",
        a: "Une suite privée avec experte dédiée, rituel sur mesure de trois heures, collation et mise en beauté finale. Discrétion absolue, entrée privée possible sur demande.",
      },
      {
        q: "Peut-on privatiser la maison pour un événement ?",
        a: "Oui — mariages, anniversaires, préparations de shooting. Notre conciergerie compose une proposition sur mesure sous 48 heures.",
      },
    ],
  },
  {
    category: "Adresses & accès",
    items: [
      {
        q: "Où se trouvent vos salons ?",
        a: "Maison Éloria vous accueille à Yaoundé (quartier Bastos) et à Douala (quartier Bonanjo). Les adresses exactes et itinéraires sont indiqués en bas de la page d'accueil.",
      },
      {
        q: "Quels sont vos horaires ?",
        a: "Du mardi au samedi, de 9 h à 19 h. L'expérience VIP est accessible sur rendez-vous jusqu'à 21 h.",
      },
      {
        q: "Comment vous contacter rapidement ?",
        a: "Sur WhatsApp au 682 293 965 : c'est le canal le plus rapide pour réserver, poser une question ou suivre une demande en cours.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-xl italic leading-snug md:text-2xl">{q}</span>
        <ChevronDown className={`size-5 shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground">{a}</p>}
    </div>
  );
}

function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link to="/" className="flex items-baseline gap-3">
            <span className="font-display text-2xl italic">Maison Éloria</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-gold sm:inline">Yaoundé · Douala</span>
          </Link>
          <Button variant="luxuryOutline" asChild>
            <Link to="/"><ArrowLeft className="size-4" /> Retour au site</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Conciergerie — réponses</p>
        <h1 className="mt-4 font-display text-5xl italic leading-tight md:text-6xl">Questions fréquentes</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
          Tout ce qu'il faut savoir avant votre première visite à la maison. Une question plus précise ?
          Notre conciergerie répond sur WhatsApp au 682 293 965.
        </p>

        {faqs.map((group) => (
          <section key={group.category} className="mt-14">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">{group.category}</h2>
            <div className="mt-4 border-t border-border">
              {group.items.map((item) => <FaqItem key={item.q} q={item.q} a={item.a} />)}
            </div>
          </section>
        ))}

        <div className="mt-16 border border-gold/40 bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="font-display text-3xl italic md:text-4xl">Une autre question ?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-primary-foreground/70">
            Notre conciergerie vous répond personnellement, du mardi au samedi, de 9 h à 19 h.
          </p>
          <Button
            variant="gold"
            size="lg"
            className="mt-6"
            onClick={() => window.open("https://wa.me/237682293965?text=" + encodeURIComponent("Bonjour Maison Éloria, j'ai une question."), "_blank")}
          >
            <MessageCircle className="size-4" /> Écrire sur WhatsApp — 682 293 965
          </Button>
        </div>
      </main>

      <footer className="border-t border-border bg-primary py-8 text-center text-primary-foreground/50">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em]">Maison Éloria — Yaoundé · Douala</p>
      </footer>
    </div>
  );
}
