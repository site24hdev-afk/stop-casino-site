import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Stop Casino",
  description: "Questions frequentes sur Stop Casino : fonctionnement, confidentialite, abonnement, rechute.",
};

const FAQS = [
  {
    category: "General",
    questions: [
      {
        q: "C'est quoi Stop Casino ?",
        a: "Stop Casino est une application mobile qui t'aide a arreter le casino. Elle te propose un compteur de jours, un suivi de tes economies, un systeme de badges, un journal pour comprendre tes envies, et un bouton SOS pour les moments difficiles.",
      },
      {
        q: "L'app est gratuite ?",
        a: "Oui, l'essentiel de l'app est 100% gratuit : compteur de jours, economies, SOS envie, badges. Des abonnements optionnels debloquent des fonctions avancees comme le journal illimite ou les statistiques detaillees.",
      },
      {
        q: "Sur quelles plateformes est disponible l'app ?",
        a: "Stop Casino est disponible sur iOS (iPhone et iPad). Une version Android est en cours de developpement.",
      },
      {
        q: "Est-ce que l'app remplace un suivi medical ?",
        a: "Non. Stop Casino est un outil d'aide au quotidien, mais ne remplace pas un suivi medical ou psychologique professionnel. Si tu as besoin d'aide, contacte Joueurs Info Service au 09 74 75 13 13.",
      },
    ],
  },
  {
    category: "Confidentialite",
    questions: [
      {
        q: "Mes donnees sont-elles partagees ?",
        a: "Non. Absolument aucune donnee ne quitte ton telephone. Pas de serveur, pas de cloud, pas de tracking. Tout est stocke localement sur ton appareil.",
      },
      {
        q: "Faut-il creer un compte ?",
        a: "Non. Tu n'as besoin ni d'email, ni de mot de passe, ni de compte. Tu installes l'app et tu commences directement.",
      },
      {
        q: "Comment supprimer mes donnees ?",
        a: "Il suffit de desinstaller l'application. Comme toutes les donnees sont stockees localement, elles sont supprimees avec l'app.",
      },
    ],
  },
  {
    category: "Utilisation",
    questions: [
      {
        q: "Comment fonctionne le compteur de jours ?",
        a: "Tu choisis ta date d'arret lors de l'onboarding (aujourd'hui, hier, ou une date passee). L'app calcule automatiquement le nombre de jours depuis cette date.",
      },
      {
        q: "Que se passe-t-il si je rechute ?",
        a: "L'app ne te juge pas. Tu appuies sur 'J'ai rejoue', tu recois un message encourageant avec une citation inspirante, et tu peux repartir de zero. La rechute fait partie du parcours.",
      },
      {
        q: "Comment fonctionne le SOS Envie ?",
        a: "Quand tu ressens une envie, appuie sur le bouton SOS (le rond rouge). L'app te guide a travers un exercice de respiration de 60 secondes. Le temps que l'envie passe. A la fin, tu peux marquer l'envie comme surmontee.",
      },
      {
        q: "Les badges se debloquent comment ?",
        a: "Automatiquement ! Il y a 17 badges repartis en 3 categories : jours sans casino (1 jour a 1 an), argent economise (100 a 5000 euros), et envies surmontees (1 a 50). Chaque badge debloquer affiche un modal de celebration.",
      },
    ],
  },
  {
    category: "Abonnement",
    questions: [
      {
        q: "Quels sont les differents abonnements ?",
        a: "Il y a 4 offres payantes : Essentiel, Pro, Premium et Elite. Chacune debloque progressivement plus de fonctionnalites. L'offre gratuite inclut deja le compteur, les economies, le SOS et les badges.",
      },
      {
        q: "Puis-je annuler mon abonnement ?",
        a: "Oui, a tout moment. L'abonnement se gere directement depuis les parametres de ton App Store (Apple). Aucun engagement.",
      },
      {
        q: "Pourquoi proposer des abonnements ?",
        a: "Les abonnements permettent de financer le developpement continu de l'app : nouvelles fonctionnalites, maintenance, support. L'essentiel restera toujours gratuit.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5">
            Questions frequentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout ce que tu dois savoir sur Stop Casino. Si ta question n&apos;est pas ici,{" "}
            <Link href="/contact" className="text-emerald-600 font-semibold hover:underline">contacte-nous</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {FAQS.map((cat, i) => (
            <div key={i}>
              <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm font-bold">
                  {cat.category.charAt(0)}
                </span>
                {cat.category}
              </h2>
              <div className="space-y-4">
                {cat.questions.map((faq, j) => (
                  <details key={j} className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left">
                      <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                      <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Tu n&apos;as pas trouve ta reponse ?</h2>
          <p className="text-gray-600 mb-6">Ecris-nous, on te repond rapidement.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-colors">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
