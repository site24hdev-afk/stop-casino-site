import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonctionnalites — Stop Casino",
  description: "Decouvre toutes les fonctionnalites de Stop Casino : compteur de jours, economies, SOS envie, badges, journal et bien plus.",
};

const SECTIONS = [
  {
    id: "compteur",
    emoji: "📊",
    badge: "Motivation",
    title: "Compteur de jours",
    desc: "Le coeur de l'application. Chaque jour sans casino est compte et affiche en grand sur ton ecran d'accueil. Quand tu vois ce nombre grandir, ca te donne une raison concrete de continuer.",
    details: [
      "Compteur en temps reel (jours, semaines, mois)",
      "Badge automatique a chaque palier (1 semaine, 1 mois...)",
      "Choix de ta date d'arret (passee ou presente)",
      "Reset bienveillant si rechute — sans jugement",
    ],
    color: "emerald",
  },
  {
    id: "economies",
    emoji: "💰",
    badge: "Finances",
    title: "Suivi des economies",
    desc: "Tu definis combien tu depensais en moyenne par jour au casino. L'app calcule en temps reel ce que tu as economise. Voir 3000 euros economises, ca motive.",
    details: [
      "Calcul automatique base sur ta depense moyenne",
      "Projections a 1 mois et 1 an",
      "Chiffre affiche en gros sur l'accueil",
      "Objectifs financiers personnalises",
    ],
    color: "blue",
  },
  {
    id: "sos",
    emoji: "🆘",
    badge: "Urgence",
    title: "SOS Envie",
    desc: "Le moment critique : une envie soudaine de jouer. Appuie sur le bouton SOS rouge et l'app te guide avec un exercice de respiration de 60 secondes. Le temps que ca passe.",
    details: [
      "Exercice de respiration guidee (4-4-4)",
      "Timer visuel avec progression",
      "Plusieurs etapes pour desamorcer l'envie",
      "Compteur d'envies surmontees — ta fierte",
    ],
    color: "red",
  },
  {
    id: "badges",
    emoji: "🏆",
    badge: "Gamification",
    title: "17 badges a debloquer",
    desc: "Chaque victoire merite une recompense. Les badges se debloquent automatiquement quand tu atteins un palier : jours sans casino, euros economises, envies surmontees.",
    details: [
      "8 badges temps : 1 jour a 1 an",
      "4 badges argent : 100 euros a 5000 euros",
      "5 badges envies : 1 a 50 envies surmontees",
      "Modal de celebration a chaque nouveau badge",
    ],
    color: "amber",
  },
  {
    id: "journal",
    emoji: "📓",
    badge: "Analyse",
    title: "Journal des envies",
    desc: "Note chaque envie quand elle arrive. Son intensite, ou tu etais, ce qui l'a declenchee, et si tu as resiste. Avec le temps, tu comprendras tes patterns.",
    details: [
      "Intensite de 1 a 5",
      "Declencheurs : ennui, stress, solitude, publicite...",
      "Lieu : maison, travail, transport...",
      "Heure de pointe de tes envies",
    ],
    color: "purple",
  },
  {
    id: "rechute",
    emoji: "🤝",
    badge: "Bienveillance",
    title: "Gestion de la rechute",
    desc: "Rechuter ne veut pas dire echouer. L'app te propose un message encourageant, une citation inspirante, et la possibilite de repartir de zero — sans honte.",
    details: [
      "Message 'C'est pas grave' avec citation aleatoire",
      "Remise a zero du compteur en un clic",
      "10 citations inspirantes differentes",
      "Aucune donnee de rechute partagee",
    ],
    color: "orange",
  },
  {
    id: "confidentialite",
    emoji: "🔒",
    badge: "Vie privee",
    title: "100% prive",
    desc: "Aucun compte a creer. Aucune donnee envoyee a un serveur. Tout reste sur ton telephone, dans ton espace prive. Personne ne saura que tu utilises cette app.",
    details: [
      "Stockage local uniquement (AsyncStorage)",
      "Zero tracking, zero analytics",
      "Pas de compte / pas d'email",
      "Suppression totale en desinstallant l'app",
    ],
    color: "gray",
  },
  {
    id: "abonnement",
    emoji: "💎",
    badge: "Premium",
    title: "Offres d'abonnement",
    desc: "L'essentiel est gratuit. Les abonnements debloquent des fonctions avancees : stats detaillees, journal illimite, jeux de diversion, bibliotheque de ressources.",
    details: [
      "Gratuit : compteur, SOS, 2 entrees journal/mois",
      "Essentiel : journal illimite, aide complete",
      "Pro : stats avancees, bibliotheque",
      "Premium & Elite : tout debloquer + priorite",
    ],
    color: "violet",
  },
];

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700" },
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", badge: "bg-blue-100 text-blue-700" },
  red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", badge: "bg-red-100 text-red-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", badge: "bg-amber-100 text-amber-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", badge: "bg-purple-100 text-purple-700" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", badge: "bg-orange-100 text-orange-700" },
  gray: { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-200", badge: "bg-gray-100 text-gray-700" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200", badge: "bg-violet-100 text-violet-700" },
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5">
            Toutes les fonctionnalites
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stop Casino est pense pour t&apos;aider au quotidien. Chaque fonction a un but precis : te garder sur la bonne voie.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SECTIONS.map((s, i) => {
            const c = COLOR_MAP[s.color] || COLOR_MAP.emerald;
            return (
              <div key={i} id={s.id} className={`${c.bg} rounded-3xl p-8 sm:p-10 border ${c.border}`}>
                <div className="flex items-start gap-5">
                  <div className="text-4xl shrink-0">{s.emoji}</div>
                  <div className="flex-1">
                    <span className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${c.badge}`}>
                      {s.badge}
                    </span>
                    <h2 className="text-2xl font-black text-gray-900 mb-3">{s.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-2.5">
                      {s.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <svg className={`w-5 h-5 mt-0.5 shrink-0 ${c.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Convaincu ?</h2>
          <p className="text-emerald-200 mb-8">Telecharge Stop Casino gratuitement et commence des aujourd&apos;hui.</p>
          <Link href="/#telecharger" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all text-lg">
            Telecharger l&apos;app
          </Link>
        </div>
      </section>
    </>
  );
}
