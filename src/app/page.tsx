import Link from "next/link";

const FEATURES = [
  {
    emoji: "📊",
    title: "Compteur de jours",
    desc: "Suis ta progression jour apres jour. Chaque journee sans casino est une victoire que tu peux visualiser.",
  },
  {
    emoji: "💰",
    title: "Economies calculees",
    desc: "Vois combien tu as economise en temps reel. L'argent que tu ne depenses plus au casino t'appartient.",
  },
  {
    emoji: "🆘",
    title: "SOS Envie",
    desc: "Une envie soudaine ? L'exercice de respiration guidee t'aide a surmonter le moment critique en 60 secondes.",
  },
  {
    emoji: "🏆",
    title: "17 badges a debloquer",
    desc: "Debloque des recompenses a chaque palier. Jours, economies, envies surmontees : ta progression est recompensee.",
  },
  {
    emoji: "📓",
    title: "Journal des envies",
    desc: "Note chaque envie, son intensite, son declencheur. Comprends tes patterns pour mieux les combattre.",
  },
  {
    emoji: "🔒",
    title: "100% prive",
    desc: "Aucune donnee ne quitte ton telephone. Pas de compte, pas de serveur, pas de jugement. Juste toi.",
  },
];

const STEPS = [
  { num: "1", title: "Installe l'app", desc: "Telecharge Stop Casino gratuitement sur l'App Store. Aucun compte a creer.", icon: "📱" },
  { num: "2", title: "Choisis ta date", desc: "Selectionne ta date d'arret : aujourd'hui, hier, ou le jour de ton choix.", icon: "📅" },
  { num: "3", title: "Suis ta progression", desc: "Chaque jour, l'app compte pour toi. Tes economies grandissent, tes badges se debloquent.", icon: "📈" },
  { num: "4", title: "Gere les envies", desc: "Quand l'envie arrive, appuie sur SOS. On t'accompagne avec des exercices concrets.", icon: "💪" },
];

const TESTIMONIALS = [
  { text: "Ca fait 67 jours aujourd'hui. Voir le compteur monter chaque jour, ca me motive a continuer. Les 3200 euros economises, c'est concret.", author: "Thomas, 34 ans", badge: "67 jours" },
  { text: "Le bouton SOS m'a sauve plusieurs fois. Quand l'envie monte, je respire, et ca passe. Simple mais efficace.", author: "Sarah, 28 ans", badge: "45 jours" },
  { text: "J'ai rechute 2 fois, mais l'app ne me juge pas. Le message 'C'est pas grave' m'a donne la force de recommencer.", author: "Marc, 41 ans", badge: "112 jours" },
];

export default function Home() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Disponible sur iOS
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                Reprends le{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">controle</span>{" "}
                de ta vie.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stop Casino t&apos;aide a arreter le casino jour apres jour. Compteur, economies, badges, SOS — tout ce qu&apos;il faut pour avancer, sans jugement.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#telecharger" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-base">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Telecharger gratuitement
                </a>
                <Link href="/fonctionnalites" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full border border-gray-200 shadow-sm hover:shadow transition-all text-base">
                  Decouvrir les fonctions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {["bg-emerald-400","bg-blue-400","bg-purple-400","bg-amber-400"].map((c,i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white`} />
                  ))}
                </div>
                <p className="text-sm text-gray-500"><span className="font-bold text-gray-800">+10 000</span> personnes ont repris le controle</p>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="animate-float">
                <div className="relative w-[280px] sm:w-[300px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-10" />
                  <div className="bg-gray-100 rounded-[2.4rem] overflow-hidden aspect-[9/19.5]">
                    <div className="p-5 pt-12 h-full flex flex-col">
                      <p className="text-xs text-gray-500 font-medium">Stop Casino</p>
                      <p className="text-[10px] text-gray-400 mb-4">Salut, guerrier 💪</p>
                      <div className="bg-white rounded-2xl p-4 text-center shadow-sm mb-3">
                        <div className="text-2xl mb-1">🏆</div>
                        <div className="text-4xl font-black text-emerald-600">45</div>
                        <p className="text-xs text-gray-500 mt-1">jours sans casino</p>
                        <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-600 text-[9px] font-bold px-2 py-0.5 rounded-full mt-2">🔥 1 mois !</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 flex justify-around shadow-sm mb-3">
                        <div className="text-center">
                          <p className="text-sm font-extrabold text-emerald-600">3 375 &euro;</p>
                          <p className="text-[8px] text-gray-400">economises</p>
                        </div>
                        <div className="w-px bg-gray-200" />
                        <div className="text-center">
                          <p className="text-sm font-extrabold text-blue-600">12</p>
                          <p className="text-[8px] text-gray-400">envies vaincues</p>
                        </div>
                      </div>
                      <p className="text-[8px] font-bold text-gray-700 mb-1.5">Recompenses <span className="text-gray-400 font-normal float-right">11/17</span></p>
                      <div className="flex gap-1.5 mb-3">
                        {["🌱","🌿","🌳","🏔️","⭐"].map((e,i) => (
                          <div key={i} className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-sm">{e}</div>
                        ))}
                      </div>
                      <div className="bg-white rounded-lg p-2 flex items-center gap-2 shadow-sm">
                        <div className="w-0.5 h-5 bg-emerald-500 rounded-full" />
                        <p className="text-[8px] text-gray-500 italic">L&apos;ennui n&apos;est pas une raison de jouer.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-emerald-400 opacity-10 blur-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="bg-emerald-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10k+", label: "Telechargements" },
              { value: "89%", label: "Taux de retention" },
              { value: "4.8", label: "Note App Store" },
              { value: "0", label: "Donnees collectees" },
            ].map((s,i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-black text-white">{s.value}</p>
                <p className="text-emerald-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="fonctionnalites" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">Fonctionnalites</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Tout ce qu&apos;il faut pour avancer</h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">Des outils simples, efficaces, conçus par des personnes qui comprennent le combat.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f,i) => (
              <div key={i} className="group bg-gray-50 hover:bg-white rounded-2xl p-7 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-100 group-hover:bg-emerald-200 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-colors">{f.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/fonctionnalites" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              Voir toutes les fonctionnalites
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">Comment ca marche</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Simple, rapide, efficace</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step,i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl mb-5">{step.icon}</div>
                <div className="absolute -top-2 left-1/2 translate-x-5 w-7 h-7 bg-emerald-600 text-white text-xs font-black rounded-full flex items-center justify-center">{step.num}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">Temoignages</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Ils ont repris le controle</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t,i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_,j) => (
                    <svg key={j} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                  <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2.5 py-1 rounded-full">{t.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRIVACY ══ */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto bg-white rounded-3xl shadow-md flex items-center justify-center text-4xl mb-6">🔒</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">Tes donnees restent chez toi</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Stop Casino ne collecte <strong>aucune donnee personnelle</strong>. Pas de compte a creer, pas de serveur, pas de tracking. Tout reste sur ton telephone, point.
          </p>
          <Link href="/confidentialite" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
            En savoir plus sur la confidentialite
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* ══ CTA DOWNLOAD ══ */}
      <section id="telecharger" className="py-20 sm:py-28 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-white rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">Pret a changer ta vie ?</h2>
          <p className="text-lg text-emerald-200 max-w-2xl mx-auto mb-10">Rejoins les milliers de personnes qui ont repris le controle. Gratuit, prive, sans engagement.</p>
          <a href="#" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all text-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Telecharger sur l&apos;App Store
          </a>
          <p className="mt-6 text-sm text-emerald-300">Gratuit &middot; Pas de compte requis &middot; iOS 16+</p>
        </div>
      </section>

      {/* ══ HELP BANNER ══ */}
      <section className="py-12 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-800 font-medium mb-2">Tu as besoin d&apos;aide maintenant ?</p>
          <p className="text-amber-700 text-sm mb-4">Joueurs Info Service est disponible 7j/7 de 8h a 2h du matin.</p>
          <a href="tel:0974751313" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            09 74 75 13 13
          </a>
        </div>
      </section>
    </>
  );
}
