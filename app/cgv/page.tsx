import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions générales de vente des prestations de L-BOOST Digital Web, agence web à Troyes.',
  alternates: { canonical: 'https://www.lboost-digitalweb.fr/cgv' },
}

export default function CGV() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] text-white min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-[#C9A84C] mb-10">
            Conditions Générales de Vente
          </h1>

          <div className="space-y-10 text-white/80 font-inter text-sm leading-relaxed">
            {/* Objet */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 1 — Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre L-BOOST Digital Web (SIRET : 798 949 970 00031), ci-après le &laquo;&nbsp;Prestataire&nbsp;&raquo;, et toute personne physique ou morale souhaitant bénéficier de ses services, ci-après le &laquo;&nbsp;Client&nbsp;&raquo;.
              </p>
              <p className="mt-3">
                Toute commande de prestation implique l&apos;acceptation sans réserve des présentes CGV.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 2 — Services proposés</h2>
              <p>L-BOOST Digital Web propose les prestations suivantes :</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>Création de sites web (vitrine, e-commerce, sur-mesure)</li>
                <li>Branding et identité visuelle (logo, charte graphique)</li>
                <li>Référencement naturel (SEO) et local</li>
                <li>Community management et gestion des réseaux sociaux</li>
                <li>Chatbots IA et automatisations</li>
                <li>Carte de fidélité digitale WalKin</li>
                <li>Toute prestation de conseil et accompagnement digital</li>
              </ul>
            </section>

            {/* Devis et commande */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 3 — Devis et commande</h2>
              <p>
                Chaque prestation fait l&apos;objet d&apos;un devis personnalisé, gratuit et sans engagement, envoyé par email ou remis en main propre.
              </p>
              <p className="mt-3">
                Le devis est valable <strong className="text-white">30 jours</strong> à compter de sa date d&apos;émission. La commande est considérée comme ferme et définitive après acceptation écrite du devis (email, signature) et versement de l&apos;acompte prévu.
              </p>
            </section>

            {/* Tarifs */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 4 — Tarifs et paiement</h2>
              <p>
                Les prix sont indiqués en euros (EUR) et sont nets de taxes (TVA non applicable, article 293 B du CGI — auto-entrepreneur).
              </p>
              <p className="mt-3">Les modalités de paiement sont les suivantes :</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Acompte de 40%</strong> à la commande</li>
                <li><strong className="text-white">Solde de 60%</strong> à la livraison du projet</li>
              </ul>
              <p className="mt-3">
                Le paiement s&apos;effectue par virement bancaire ou tout autre moyen convenu entre les parties. En cas de retard de paiement, des pénalités de retard seront appliquées au taux légal en vigueur, sans qu&apos;un rappel soit nécessaire, conformément à l&apos;article L.441-10 du Code de commerce.
              </p>
              <p className="mt-3">
                Une indemnité forfaitaire de <strong className="text-white">40 euros</strong> pour frais de recouvrement sera due en cas de retard de paiement (article D.441-5 du Code de commerce).
              </p>
            </section>

            {/* Délais */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 5 — Délais de réalisation</h2>
              <p>
                Les délais de livraison sont indiqués dans le devis et courent à compter de la réception de l&apos;acompte et de tous les éléments nécessaires à la réalisation (contenus, images, accès, validations).
              </p>
              <p className="mt-3">
                Tout retard imputable au Client (non-fourniture des contenus, absence de validation) pourra entraîner un report des délais sans que la responsabilité du Prestataire ne soit engagée.
              </p>
            </section>

            {/* Validation */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 6 — Validation et livraison</h2>
              <p>
                Le Client dispose de <strong className="text-white">2 tours de modifications</strong> inclus dans chaque prestation, sauf mention contraire dans le devis.
              </p>
              <p className="mt-3">
                Toute modification supplémentaire sera facturée sur devis. La livraison est réputée acceptée si le Client n&apos;émet aucune réserve dans un délai de <strong className="text-white">7 jours ouvrés</strong> suivant la mise en ligne ou la remise des livrables.
              </p>
            </section>

            {/* Rétractation */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 7 — Droit de rétractation</h2>
              <p>
                Conformément aux articles L.221-18 et suivants du Code de la consommation, le Client consommateur dispose d&apos;un délai de <strong className="text-white">14 jours</strong> à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
              </p>
              <p className="mt-3">
                Toutefois, conformément à l&apos;article L.221-28, le droit de rétractation ne s&apos;applique pas lorsque la prestation a été <strong className="text-white">pleinement exécutée avant la fin du délai de rétractation</strong> et que l&apos;exécution a commencé avec l&apos;accord exprès du Client.
              </p>
              <p className="mt-3">
                Pour exercer ce droit, contactez-nous à <a href="mailto:contact@lboost-digitalweb.fr" className="text-[#C9A84C] hover:underline">contact@lboost-digitalweb.fr</a>.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 8 — Propriété intellectuelle</h2>
              <p>
                Les créations réalisées par L-BOOST Digital Web (designs, code, textes, visuels) restent la propriété du Prestataire jusqu&apos;au <strong className="text-white">paiement intégral</strong> de la prestation.
              </p>
              <p className="mt-3">
                Après paiement complet, les droits d&apos;utilisation des livrables sont cédés au Client pour un usage conforme à l&apos;objet de la prestation. Le Prestataire conserve le droit de mentionner la réalisation à titre de référence (portfolio, réseaux sociaux).
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 9 — Responsabilité</h2>
              <p>
                L-BOOST Digital Web s&apos;engage à exécuter les prestations avec diligence et professionnalisme (obligation de moyens).
              </p>
              <p className="mt-3">
                Le Prestataire ne saurait être tenu responsable des dommages indirects (perte de chiffre d&apos;affaires, perte de données, atteinte à l&apos;image) résultant de l&apos;utilisation des livrables. La responsabilité du Prestataire est limitée au montant total de la prestation concernée.
              </p>
            </section>

            {/* Résiliation */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 10 — Résiliation</h2>
              <p>
                En cas de manquement grave de l&apos;une des parties à ses obligations, l&apos;autre partie pourra résilier le contrat par lettre recommandée avec accusé de réception, après mise en demeure restée infructueuse pendant <strong className="text-white">15 jours</strong>.
              </p>
              <p className="mt-3">
                En cas de résiliation par le Client en cours de prestation, les sommes déjà versées resteront acquises au Prestataire au titre du travail réalisé.
              </p>
            </section>

            {/* Force majeure */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 11 — Force majeure</h2>
              <p>
                Aucune des parties ne pourra être tenue responsable de l&apos;inexécution de ses obligations en cas de force majeure telle que définie par l&apos;article 1218 du Code civil (catastrophes naturelles, pandémie, panne généralisée, cyberattaque).
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 12 — Protection des données</h2>
              <p>
                Le traitement des données personnelles est régi par notre{' '}
                <a href="/politique-de-confidentialite" className="text-[#C9A84C] hover:underline">Politique de Confidentialité</a>.
              </p>
            </section>

            {/* Litiges */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">Article 13 — Droit applicable et litiges</h2>
              <p>
                Les présentes CGV sont soumises au droit français.
              </p>
              <p className="mt-3">
                En cas de litige, les parties s&apos;engagent à rechercher une solution amiable. Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, le Client peut recourir gratuitement au service de médiation de la consommation. À défaut de résolution amiable, le litige sera porté devant les tribunaux compétents de <strong className="text-white">Troyes</strong>.
              </p>
            </section>

            <p className="text-white/30 text-xs pt-6 border-t border-white/10">
              Dernière mise à jour : mai 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
