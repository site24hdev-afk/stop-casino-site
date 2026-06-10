import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="text-white text-lg font-black">S</span>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                Stop Casino
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              L&apos;application qui t&apos;aide a reprendre le controle.
              Chaque jour sans casino est une victoire.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-emerald-400 transition-colors">Accueil</Link></li>
              <li><Link href="/fonctionnalites" className="text-sm hover:text-emerald-400 transition-colors">Fonctionnalites</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li><Link href="/confidentialite" className="text-sm hover:text-emerald-400 transition-colors">Politique de confidentialite</Link></li>
              <li><Link href="/confidentialite#cgu" className="text-sm hover:text-emerald-400 transition-colors">Conditions d&apos;utilisation</Link></li>
              <li><Link href="/confidentialite#cookies" className="text-sm hover:text-emerald-400 transition-colors">Cookies</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Aide et ressources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:0974751313" className="text-sm hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  09 74 75 13 13 (Joueurs Info Service)
                </a>
              </li>
              <li>
                <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-emerald-400 transition-colors">
                  joueurs-info-service.fr
                </a>
              </li>
              <li>
                <a href="https://www.adictel.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-emerald-400 transition-colors">
                  adictel.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Stop Casino. Tous droits reserves.
          </p>
          <p className="text-xs text-gray-600">
            Stop Casino ne remplace pas un suivi medical ou psychologique professionnel.
          </p>
        </div>
      </div>
    </footer>
  );
}
