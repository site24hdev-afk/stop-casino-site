import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions generales d'utilisation — Stop Casino",
  description: "Conditions generales d'utilisation de l'application Stop Casino.",
};

export default function CGUPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📜</div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5">
            Conditions generales d&apos;utilisation
          </h1>
          <p className="text-gray-600">Derniere mise a jour : juin 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg max-w-none">

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-10">
            <h2 className="text-emerald-800 font-bold text-lg mt-0 mb-2">En resume</h2>
            <p className="text-emerald-700 text-sm mb-0">
              Stop Casino est un outil d&apos;accompagnement, pas un traitement medical. Tes donnees restent sur ton telephone. Les abonnements sont geres par Apple/Google.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Objet</h2>
          <p className="text-gray-600 leading-relaxed">
            Les presentes conditions generales d&apos;utilisation (CGU) regissent l&apos;utilisation de l&apos;application mobile Stop Casino, disponible sur l&apos;App Store et le Google Play Store. En telechargant et en utilisant l&apos;application, vous acceptez ces conditions sans reserve.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. Description du service</h2>
          <p className="text-gray-600 leading-relaxed">
            Stop Casino est une application d&apos;aide a l&apos;arret du jeu d&apos;argent. Elle propose des outils de suivi (compteur de jours, journal des envies), des exercices de gestion des pulsions (SOS respiration), des statistiques de progression, des ressources educatives et des jeux de simulation sans argent reel.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. Acceptation</h2>
          <p className="text-gray-600 leading-relaxed">
            En telechargant, installant ou utilisant Stop Casino, vous declarez avoir lu et accepte les presentes CGU ainsi que notre{" "}
            <a href="/confidentialite" className="text-emerald-600 font-semibold hover:underline">
              politique de confidentialite
            </a>. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser l&apos;application.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. Abonnements et paiements</h2>
          <p className="text-gray-600 leading-relaxed">
            L&apos;application propose une version gratuite avec des fonctionnalites limitees et des abonnements payants (Essentiel, Pro, Premium, Elite) pour acceder a des fonctionnalites avancees.
          </p>
          <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
            <li>Les paiements sont traites exclusivement par l&apos;App Store (Apple) ou le Google Play Store (Google).</li>
            <li>Les abonnements mensuels et annuels se renouvellent automatiquement sauf annulation au moins 24 heures avant la fin de la periode en cours.</li>
            <li>L&apos;offre Elite est un achat unique (a vie) qui ne necessite pas de renouvellement.</li>
            <li>Aucun remboursement n&apos;est effectue pour la periode en cours. Les demandes de remboursement doivent etre adressees directement a Apple ou Google.</li>
            <li>Nous n&apos;avons acces a aucune information de paiement (numero de carte, identifiants bancaires).</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">5. Avertissement medical</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-6">
            <p className="text-amber-800 text-sm mb-0">
              <strong>Important :</strong> Stop Casino est un outil d&apos;accompagnement et ne constitue en aucun cas un traitement medical, un diagnostic ou un avis professionnel. L&apos;application ne remplace pas une consultation avec un medecin, un psychologue ou un addictologue. Si vous souffrez d&apos;une addiction severe au jeu, veuillez consulter un professionnel de sante ou contacter Joueurs Info Service au 09 74 75 13 13.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">6. Donnees personnelles</h2>
          <p className="text-gray-600 leading-relaxed">
            Toutes les donnees saisies dans l&apos;application (compteur, journal, preferences) sont stockees localement sur votre appareil. Aucune donnee n&apos;est transmise a nos serveurs. Pour plus de details, consultez notre{" "}
            <a href="/confidentialite" className="text-emerald-600 font-semibold hover:underline">
              politique de confidentialite
            </a>.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">7. Propriete intellectuelle</h2>
          <p className="text-gray-600 leading-relaxed">
            L&apos;ensemble du contenu de l&apos;application (textes, graphismes, icones, sons, code source) est protege par le droit d&apos;auteur. Toute reproduction, modification ou distribution non autorisee est interdite.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">8. Limitation de responsabilite</h2>
          <p className="text-gray-600 leading-relaxed">
            L&apos;application est fournie &ldquo;en l&apos;etat&rdquo;, sans garantie d&apos;aucune sorte. Nous ne garantissons pas de resultats specifiques dans le cadre de l&apos;arret du jeu. L&apos;utilisation de l&apos;application se fait sous votre entiere responsabilite. Nous ne saurions etre tenus responsables de tout dommage direct ou indirect lie a l&apos;utilisation de l&apos;application.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">9. Liens externes</h2>
          <p className="text-gray-600 leading-relaxed">
            L&apos;application contient des liens vers des ressources externes (lignes d&apos;ecoute, associations, forums). Ces sites tiers ont leurs propres conditions d&apos;utilisation et politiques de confidentialite. Nous n&apos;assumons aucune responsabilite quant a leur contenu.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">10. Resiliation</h2>
          <p className="text-gray-600 leading-relaxed">
            Vous pouvez cesser d&apos;utiliser l&apos;application a tout moment en la desinstallant de votre appareil. Les abonnements actifs doivent etre annules via les parametres de votre store (App Store ou Google Play) avant la desinstallation.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">11. Urgence</h2>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 my-6">
            <p className="text-red-800 text-sm mb-0">
              En cas d&apos;urgence ou de detresse, contactez immediatement le <strong>3114</strong> (numero national de prevention du suicide) ou le <strong>15</strong> (SAMU). Vous pouvez egalement appeler <strong>Joueurs Info Service</strong> au <strong>09 74 75 13 13</strong> (7j/7, 8h-2h, gratuit et anonyme).
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">12. Droit applicable</h2>
          <p className="text-gray-600 leading-relaxed">
            Les presentes conditions sont regies par le droit français. Tout litige relatif a l&apos;utilisation de l&apos;application sera soumis aux tribunaux competents de Paris, France.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">13. Modifications</h2>
          <p className="text-gray-600 leading-relaxed">
            Nous nous reservons le droit de modifier ces CGU a tout moment. Les modifications seront publiees sur cette page avec la date de mise a jour. L&apos;utilisation continue de l&apos;application apres modification vaut acceptation des nouvelles conditions.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">14. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            Pour toute question relative a ces conditions d&apos;utilisation :{" "}
            <a href="mailto:contact@stopcasino.app" className="text-emerald-600 font-semibold hover:underline">
              contact@stopcasino.app
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
