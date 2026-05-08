import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles — L-BOOST Digital Web, Troyes.',
  alternates: { canonical: 'https://lboost-digitalweb.fr/politique-de-confidentialite' },
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] text-white min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-[#C9A84C] mb-10">
            Politique de Confidentialité
          </h1>

          <div className="space-y-10 text-white/80 font-inter text-sm leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">1. Introduction</h2>
              <p>
                L-BOOST Digital Web (SIRET : 798 949 970 00031), en tant que responsable du traitement, s&apos;engage à protéger la vie privée des utilisateurs de son site lboost-digitalweb.fr, conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
              </p>
              <p className="mt-3">
                Cette politique détaille quelles données sont collectées, pourquoi, comment elles sont utilisées et quels sont vos droits.
              </p>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">2. Données personnelles collectées</h2>
              <p>Nous collectons les données suivantes via le formulaire de contact du site :</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>Nom et prénom</li>
                <li>Nom de l&apos;entreprise ou du commerce</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Type de commerce</li>
                <li>Volume de clients estimé par mois</li>
                <li>Message décrivant le besoin</li>
              </ul>
              <p className="mt-3">
                Ces données sont fournies volontairement par l&apos;utilisateur lorsqu&apos;il remplit le formulaire de contact.
              </p>
            </section>

            {/* Finalité */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">3. Finalité du traitement</h2>
              <p>Les données collectées sont utilisées exclusivement pour :</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>Répondre à votre demande de contact ou de devis</li>
                <li>Vous recontacter par email ou téléphone dans le cadre de votre projet</li>
                <li>Gérer la relation commerciale (suivi, facturation)</li>
              </ul>
              <p className="mt-3">
                Vos données ne sont <strong className="text-white">jamais vendues, louées ou transmises à des tiers</strong> à des fins commerciales.
              </p>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">4. Base légale du traitement</h2>
              <p>Le traitement de vos données repose sur :</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Votre consentement</strong> — en soumettant le formulaire de contact, vous consentez au traitement de vos données pour les finalités décrites</li>
                <li><strong className="text-white">L&apos;intérêt légitime</strong> — pour assurer le suivi commercial et répondre aux demandes de prospects</li>
                <li><strong className="text-white">L&apos;exécution contractuelle</strong> — dans le cadre d&apos;une prestation de service convenue</li>
              </ul>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">5. Durée de conservation</h2>
              <p>Vos données personnelles sont conservées :</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Prospects</strong> : 3 ans à compter du dernier contact</li>
                <li><strong className="text-white">Clients</strong> : pendant la durée de la relation contractuelle, puis 5 ans à des fins comptables conformément aux obligations légales</li>
              </ul>
              <p className="mt-3">Au-delà de ces délais, les données sont supprimées ou anonymisées.</p>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">6. Destinataires des données</h2>
              <p>Vos données peuvent être accessibles uniquement par :</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>Le responsable de L-BOOST Digital Web</li>
                <li><strong className="text-white">Google</strong> (Google Sheets, Google Apps Script) — pour le stockage sécurisé des demandes de contact</li>
                <li><strong className="text-white">Vercel Inc.</strong> — hébergeur du site</li>
              </ul>
              <p className="mt-3">
                Ces sous-traitants sont conformes au RGPD et offrent des garanties adéquates de protection des données.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">7. Cookies</h2>
              <p>Le site lboost-digitalweb.fr utilise des cookies strictement nécessaires au fonctionnement du site :</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Cookies techniques</strong> — indispensables à la navigation et au bon fonctionnement du site</li>
                <li><strong className="text-white">Cookies d&apos;analyse (Vercel Analytics)</strong> — données anonymisées pour mesurer l&apos;audience du site</li>
              </ul>
              <p className="mt-3">
                Aucun cookie publicitaire ou de tracking tiers n&apos;est utilisé. Aucune donnée personnelle n&apos;est collectée via les cookies.
              </p>
            </section>

            {/* Droits */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">8. Vos droits</h2>
              <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Droit d&apos;accès</strong> — obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
                <li><strong className="text-white">Droit de rectification</strong> — corriger des données inexactes ou incomplètes</li>
                <li><strong className="text-white">Droit de suppression</strong> — demander l&apos;effacement de vos données</li>
                <li><strong className="text-white">Droit à la portabilité</strong> — recevoir vos données dans un format structuré et couramment utilisé</li>
                <li><strong className="text-white">Droit d&apos;opposition</strong> — vous opposer au traitement de vos données pour des motifs légitimes</li>
                <li><strong className="text-white">Droit à la limitation</strong> — demander la limitation du traitement dans certains cas</li>
              </ul>
              <p className="mt-3">
                Pour exercer vos droits, contactez-nous par email à{' '}
                <a href="mailto:contact@lboost-digitalweb.fr" className="text-[#C9A84C] hover:underline">contact@lboost-digitalweb.fr</a>{' '}
                ou par courrier à L-BOOST Digital Web, Troyes, France.
              </p>
              <p className="mt-3">
                Nous nous engageons à répondre à votre demande dans un délai de 30 jours.
              </p>
            </section>

            {/* Réclamation */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">9. Réclamation auprès de la CNIL</h2>
              <p>
                Si vous estimez que le traitement de vos données ne respecte pas la réglementation en vigueur, vous avez le droit d&apos;introduire une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
              </p>
              <ul className="mt-3 space-y-1.5 list-none">
                <li><span className="text-white/50">Site :</span> <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">www.cnil.fr</a></li>
                <li><span className="text-white/50">Adresse :</span> CNIL, 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
              </ul>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">10. Sécurité des données</h2>
              <p>
                L-BOOST Digital Web met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction :
              </p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>Connexion sécurisée HTTPS (certificat SSL/TLS)</li>
                <li>Hébergement sur infrastructure sécurisée (Vercel)</li>
                <li>Accès restreint aux données (authentification Google)</li>
              </ul>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">11. Modification de la politique</h2>
              <p>
                L-BOOST Digital Web se réserve le droit de modifier la présente politique de confidentialité à tout moment. La version en vigueur est celle publiée sur cette page. Nous vous invitons à la consulter régulièrement.
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
