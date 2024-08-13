// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import { Button } from "./ui/button";

// Icon imports
import { Github, Twitter, Facebook, Mail, Phone, MapPin, FileText, Shield, HospitalIcon } from "./Icons";

/**
 * Footer component for the DigiMedic website.
 * 
 * This component displays the main footer of the website, including:
 * - Company logo
 * - Brief description
 * - Contact icons
 * - Site navigation links
 * - Legal information links
 * - Social media buttons
 * - Copyright notice
 * 
 * @component
 * @example
 * ```jsx
 * <Footer />
 * ```
 */
export default function Footer() {
  return (
    <footer className="bg-primary-faintest">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">DigiMedic</h3>
              <Image
                src="/Brand materials/DigiMedic-logo-long.svg"
                alt="DigiMedic Logo"
                width={200}
                height={45}
                className="transition-all hover:opacity-75 dark:invert"
              />
            </Link>
            <p>
              DigiMedic je digitální páteř českého zdravotnictví, poskytující inovativní řešení pro efektivnější a kvalitnější zdravotní péči.
            </p>
            <div className="flex gap-4">
              <Mail className="w-5 h-5" />
              <Phone className="w-5 h-5" />
              <MapPin className="w-5 h-5" />
              <HospitalIcon size={20} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-bold">Webové stránky</h5>
            <Link href="/blog" className="flex items-center gap-2">
              <FileText size={16} />
              Blog
            </Link>
            <Link href="/sluzby" className="flex items-center gap-2">
              <HospitalIcon size={16} />
              Služby
            </Link>
            <Link href="/o-nas" className="flex items-center gap-2">
              <Shield size={16} />
              O nás
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-bold">Právní informace</h5>
            <Link href="/ochrana-soukromi" className="flex items-center gap-2">
              <Shield size={16} />
              Ochrana soukromí
            </Link>
            <Link href="/obchodni-podminky" className="flex items-center gap-2">
              <FileText size={16} />
              Obchodní podmínky
            </Link>
            <Link href="/cookie-policy" className="flex items-center gap-2">
              <Shield size={16} />
              Zásady používání cookies
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © DigiMedic. Všechna práva vyhrazena. 2024-současnost.
          </p>
        </div>
      </div>
    </footer>
  );
}