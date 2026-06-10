import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite — Stop Casino",
  description: "Politique de confidentialite de l'application Stop Casino. Aucune donnee personnelle collectee.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🔒</div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5">
            Politique de confidentialite
          </h1>
          <p className="text-gray-600">Derniere mise a jour : 10 juin 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg max-w-none">

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-10">
            <h2 className="text-emerald-800 font-bold text-lg mt-0 mb-2">En resume</h2>
            <p className="text-emerald-700 text-sm mb-0">
              Stop Casino ne collecte <strong>aucune donnee personnelle</strong>. Tout est stocke localement sur ton telephone. Pas de serveur, pas de tracking, pas de partage. Point.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Qui sommes-nous ?</h2>
          <p className="text-gray-600 leading-relaxed">
            Stop Casino est une application mobile independante conçue pour aider les personnes souhaitant arreter les jeux de casino. L&apos;application est editee par un developpeur independant base en France.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. Donnees collectees</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Aucune.</strong> Stop Casino ne collecte, ne transmet et ne stocke aucune donnee personnelle sur un serveur distant. Toutes les informations que tu saisis (date d&apos;arret, depense moyenne, journal des envies, badges) sont stockees exclusivement sur ton appareil via le systeme de stockage local (AsyncStorage).
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. Pas de compte utilisateur</h2>
          <p className="text-gray-600 leading-relaxed">
            L&apos;application ne requiert aucune inscription, aucun email, aucun mot de passe. Tu peux commencer a utiliser l&apos;app immediatement apres l&apos;avoir telechargee.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. Pas de tracking ni d&apos;analytics</h2>
          <p className="text-gray-600 leading-relaxed">
            Stop Casino n&apos;utilise aucun outil de tracking (pas de Google Analytics, pas de Facebook Pixel, pas de Firebase Analytics). Nous ne savons pas qui tu es, comment tu utilises l&apos;app, ni combien de temps tu y passes.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">5. Pas de publicite</h2>
          <p className="text-gray-600 leading-relaxed">
            L&apos;application ne contient aucune publicite. Aucun SDK publicitaire n&apos;est integre. Ton experience n&apos;est jamais interrompue par des annonces.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">6. Achats in-app</h2>
          <p className="text-gray-600 leading-relaxed">
            Stop Casino propose des abonnements optionnels pour debloquer des fonctionnalites avancees. Ces achats sont geres exclusivement par Apple via l&apos;App Store. Nous n&apos;avons acces a aucune information de paiement.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">7. Suppression des donnees</h2>
          <p className="text-gray-600 leading-relaxed">
            Toutes tes donnees etant stockees localement, il te suffit de desinstaller l&apos;application pour les supprimer definitivement. Aucune donnee ne persiste sur un serveur distant.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4" id="cgu">8. Conditions d&apos;utilisation</h2>
          <p className="text-gray-600 leading-relaxed">
            Stop Casino est fourni &ldquo;tel quel&rdquo;, sans garantie. L&apos;application ne constitue pas un avis medical et ne remplace pas une consultation avec un professionnel de sante. En cas de probleme d&apos;addiction severe, contactez Joueurs Info Service (09 74 75 13 13) ou un professionnel de sante.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4" id="cookies">9. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            L&apos;application mobile n&apos;utilise aucun cookie. Le site web stopcasino.app n&apos;utilise aucun cookie de tracking. Seuls des cookies techniques strictement necessaires au fonctionnement du site peuvent etre utilises.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">10. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            Pour toute question relative a cette politique de confidentialite, tu peux nous contacter a l&apos;adresse :{" "}
            <a href="mailto:contact@stopcasino.app" className="text-emerald-600 font-semibold hover:underline">
              contact@stopcasino.app
            </a>
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">11. Modifications</h2>
          <p className="text-gray-600 leading-relaxed">
            Cette politique peut etre mise a jour. Toute modification sera publiee sur cette page avec la date de mise a jour. L&apos;utilisation continue de l&apos;application apres modification vaut acceptation.
          </p>
        </div>
      </section>
    </>
  );
}
