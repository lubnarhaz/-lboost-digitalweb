import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site lboost-digitalweb.fr — L-BOOST Digital Web, agence web à Troyes.',
  alternates: { canonical: 'https://lboost-digitalweb.fr/mentions-legales' },
}

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] text-white min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-[#C9A84C] mb-10">
            Mentions Légales
          </h1>

          <div className="space-y-10 text-white/80 font-inter text-sm leading-relaxed">
            {/* Éditeur */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">1. Éditeur du site</h2>
              <p>
                Le site <strong className="text-white">lboost-digitalweb.fr</strong> est édité par :
              </p>
              <ul className="mt-3 space-y-1.5 list-none">
                <li><span className="text-white/50">Nom commercial :</span> <strong className="text-white">L-BOOST Digital Web</strong></li>
                <li><span className="text-white/50">Statut :</span> Entrepreneur individuel (auto-entrepreneur)</li>
                <li><span className="text-white/50">SIRET :</span> 798 949 970 00031</li>
                <li><span className="text-white/50">Siège :</span> Troyes, France</li>
                <li><span className="text-white/50">Email :</span> <a href="mailto:l-boost@hotmail.com" className="text-[#C9A84C] hover:underline">l-boost@hotmail.com</a></li>
                <li><span className="text-white/50">Téléphone :</span> <a href="tel:+33756959078" className="text-[#C9A84C] hover:underline">07 56 95 90 78</a></li>
              </ul>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">2. Directeur de la publication</h2>
              <p>Le directeur de la publication est le responsable de L-BOOST Digital Web.</p>
              <p className="mt-1">Contact : <a href="mailto:l-boost@hotmail.com" className="text-[#C9A84C] hover:underline">l-boost@hotmail.com</a></p>
            </section>

            {/* Hébergeur */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">3. Hébergement</h2>
              <p>Le site est hébergé par :</p>
              <ul className="mt-3 space-y-1.5 list-none">
                <li><span className="text-white/50">Raison sociale :</span> <strong className="text-white">Vercel Inc.</strong></li>
                <li><span className="text-white/50">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><span className="text-white/50">Site :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">vercel.com</a></li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">4. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu du site lboost-digitalweb.fr (textes, images, graphismes, logo, icônes, vidéos, sons, logiciels, etc.) est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite préalable de L-BOOST Digital Web.
              </p>
              <p className="mt-3">
                Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
              </p>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">5. Liens hypertextes</h2>
              <p>
                Le site lboost-digitalweb.fr peut contenir des liens hypertextes vers d&apos;autres sites internet. L-BOOST Digital Web n&apos;exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">6. Limitation de responsabilité</h2>
              <p>
                L-BOOST Digital Web s&apos;efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="mt-3">
                L-BOOST Digital Web ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site lboost-digitalweb.fr.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux de Troyes seront seuls compétents.
              </p>
            </section>

            {/* Crédits */}
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">8. Crédits</h2>
              <p>
                Conception et développement : <strong className="text-[#C9A84C]">L-BOOST Digital Web</strong>
              </p>
              <p className="mt-1">
                Certaines images proviennent de banques d&apos;images libres de droits (Unsplash, Pexels).
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
