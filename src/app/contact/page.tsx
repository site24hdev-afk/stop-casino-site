import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Stop Casino",
  description: "Contacte l'equipe Stop Casino pour toute question, suggestion ou probleme.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5">
            Contact
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question ? Une suggestion ? Un bug ? On est la pour t&apos;aider.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-black text-gray-900 mb-6">Nous ecrire</h2>
                <div className="space-y-5">
                  <a href="mailto:contact@stopcasino.app" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-emerald-600 text-sm">contact@stopcasino.app</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Delai de reponse</p>
                      <p className="text-gray-500 text-sm">Sous 24 a 48 heures</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-black text-gray-900 mb-6">Types de demandes</h2>
                <div className="space-y-3">
                  {[
                    { emoji: "🐛", text: "Signaler un bug" },
                    { emoji: "💡", text: "Suggerer une fonctionnalite" },
                    { emoji: "❓", text: "Poser une question" },
                    { emoji: "🤝", text: "Proposer un partenariat" },
                    { emoji: "📰", text: "Contact presse" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-600">
                      <span className="text-lg">{item.emoji}</span>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ shortcut */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Avant de nous ecrire</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  La plupart des questions trouvent leur reponse dans notre FAQ. Jette un oeil, ca peut te faire gagner du temps !
                </p>
                <Link href="/faq" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 text-sm transition-colors">
                  Consulter la FAQ
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Urgence */}
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-3">Tu as besoin d&apos;aide urgente ?</h3>
                <p className="text-amber-800 text-sm leading-relaxed mb-5">
                  Stop Casino ne remplace pas un professionnel de sante. Si tu es en difficulte, ces services sont la pour toi :
                </p>
                <div className="space-y-3">
                  <a href="tel:0974751313" className="flex items-center gap-3 text-amber-900 font-semibold text-sm hover:text-amber-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    09 74 75 13 13 — Joueurs Info Service
                  </a>
                  <p className="text-amber-700 text-xs ml-7">7j/7 de 8h a 2h du matin — Appel non surtaxe</p>
                  <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-amber-900 font-semibold text-sm hover:text-amber-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    joueurs-info-service.fr
                  </a>
                  <a href="https://www.adictel.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-amber-900 font-semibold text-sm hover:text-amber-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    adictel.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
