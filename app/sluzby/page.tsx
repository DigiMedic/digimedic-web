"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroHighlight } from '../../components/HeroHighlight';
import { MonitorSmartphone, Rocket, BarChart3, Bot, Smartphone } from 'lucide-react';
import { HospitalIcon } from '../../components/HealthIcons';

const services = [
  {
    title: 'Vývoj softwaru na míru',
    description: 'Vytváříme specializovaný software pro zdravotnická zařízení, který odpovídá jejich specifickým potřebám a požadavkům.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Implementace technologických řešení',
    description: 'Pomáháme zdravotnickým zařízením implementovat nejnovější technologie pro zefektivnění jejich procesů a zlepšení péče o pacienty.',
    icon: Rocket,
  },
  {
    title: 'Kontrola vyúčtování',
    description: 'Nabízíme služby kontroly a optimalizace vyúčtování zdravotní péče pro maximalizaci příjmů a minimalizaci chyb.',
    icon: BarChart3,
  },
  {
    title: 'Virtuální asistence',
    description: 'Poskytujeme virtuální asistenční služby pro efektivní správu administrativních úkolů ve zdravotnictví.',
    icon: Bot,
  },
  {
    title: 'Asistence při elektronizaci',
    description: 'Podporujeme zdravotnická zařízení při přechodu na elektronické systémy a digitalizaci procesů.',
    icon: Smartphone,
  },
  {
    title: 'Optimalizace zdravotnických procesů',
    description: 'Analyzujeme a optimalizujeme procesy ve zdravotnických zařízeních pro zvýšení efektivity a kvality péče.',
    icon: HospitalIcon,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      <HeroHighlight />
      <div className="container mx-auto py-20">
        <motion.h1 
          className="text-4xl font-spaceBold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Naše služby
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="text-4xl mb-4 text-primary">
                {React.createElement(service.icon, { size: 48 })}
              </div>
              <h2 className="text-2xl font-spaceBold text-primary mb-4">{service.title}</h2>
              <p className="font-raleway text-primary-light mb-4">{service.description}</p>
              <Link href={`/sluzby/${service.title.toLowerCase().replace(/ /g, '-')}`} className="text-primary font-spaceBold hover:text-primary-light transition-colors duration-300">
                Zjistit více →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;