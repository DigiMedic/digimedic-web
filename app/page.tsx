import FUIHeroSectionWithLogoClouds from '@/components/FUIHeroSectionWithLogoClouds'
import FAQ from '@/components/FAQ'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-faintest">
      <FUIHeroSectionWithLogoClouds />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Naše služby</h2>
          <ul className="list-disc list-inside text-primary-light">
            <li>Poskytování moderních technologických řešení pro zdravotnictví</li>
            <li>Efektivní využití technologií pro zlepšení kvality a dostupnosti péče</li>
            <li>Digitalizace a automatizace procesů ve zdravotnictví</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Naše vize</h2>
          <p className="text-primary-light mb-4">
            Naše projekty a iniciativy mají jediný cíl: <strong>zlepšit zdravotní péči v České republice</strong>.
          </p>
          <Image
            src="/Brand-materials/INTEREPROABILNI SIT.png"
            alt="Interoperabilní síť"
            width={600}
            height={400}
            className="mx-auto mb-4"
          />
          <Image
            src="/Brand-materials/digitalni oater.svg"
            alt="Digitální páteř"
            width={600}
            height={400}
            className="mx-auto"
          />
        </section>

        <FAQ />
      </main>
    </div>
  )
}
