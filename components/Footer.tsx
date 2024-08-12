// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import { Button } from "./ui/button";

// Icon imports from Lucide
import { Github, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

// Asset imports
import Logo from "../public/stakeholders logos/logo.png";

// Health Icons SVG (příklad ikony nemocnice)
const HospitalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
    <path d="M33 11H15C13.8954 11 13 11.8954 13 13V39C13 40.1046 13.8954 41 15 41H33C34.1046 41 35 40.1046 35 39V13C35 11.8954 34.1046 11 33 11Z" fill="#333333"/>
    <path d="M17 7H31V11H17V7Z" fill="#333333"/>
    <path d="M23 21V31" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 26H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

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
                src={Logo}
                alt="DigiMedic Logo"
                width={120}
                height={27.27}
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
              <HospitalIcon />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-bold">Webové stránky</h5>
            <Link href="/blog">Blog</Link>
            <Link href="/sluzby">Služby</Link>
            <Link href="/o-nas">O nás</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-bold">Právní informace</h5>
            <Link href="/ochrana-soukromi">Ochrana soukromí</Link>
            <Link href="/obchodni-podminky">Obchodní podmínky</Link>
            <Link href="/cookie-policy">Zásady používání cookies</Link>
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