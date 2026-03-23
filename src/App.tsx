/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight, 
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Star,
  Heart,
  Users
} from 'lucide-react';
import { SPECIALTIES, TESTIMONIALS, CLINIC_INFO } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-girassol-yellow selection:text-girassol-brown">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              {/* Logo Placeholder - In a real app, this would be the <img> tag with the provided logo */}
              <div className="w-12 h-12 bg-girassol-yellow rounded-full flex items-center justify-center mr-3 shadow-sm overflow-hidden border-2 border-girassol-green">
                <img 
                  src={CLINIC_INFO.logoUrl} 
                  alt="Logo Clínica Girassol" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/sunflower/100/100';
                  }}
                />
              </div>
              <div className="hidden sm:block" translate="no">
                <span className="text-2xl font-extrabold text-girassol-brown leading-tight block">Clínica</span>
                <span className="text-sm font-bold text-girassol-green tracking-widest uppercase">Girassol</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Sobre', 'Especialidades', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-girassol-brown font-medium hover:text-girassol-green transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => window.open(CLINIC_INFO.whatsappUrl, '_blank')}
                className="btn-primary flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Agendar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-girassol-brown p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-girassol-offwhite overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {['Sobre', 'Especialidades', 'Contato'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="block w-full text-left px-3 py-4 text-base font-medium text-girassol-brown hover:bg-girassol-offwhite rounded-lg"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-4">
                  <button 
                    onClick={() => window.open(CLINIC_INFO.whatsappUrl, '_blank')}
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Agendar Avaliação
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-girassol-yellow/10 rounded-l-[100px] hidden lg:block" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-girassol-green/10 text-girassol-green font-bold text-sm mb-6">
                  <Heart size={16} />
                  Atendimento Humanizado & Afetivo
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-girassol-brown leading-tight mb-6">
                  Cuidando do <span className="text-girassol-green">Desenvolvimento</span> com Amor e Ciência
                </h1>
                <p className="text-lg text-girassol-brown/80 mb-8 max-w-xl leading-relaxed italic border-l-4 border-girassol-yellow pl-4">
                  {CLINIC_INFO.mission}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('contato')}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Agende uma Avaliação
                  </button>
                  <button 
                    onClick={() => scrollToSection('especialidades')}
                    className="flex items-center justify-center gap-2 text-girassol-brown font-bold hover:text-girassol-green transition-colors px-8 py-4"
                  >
                    Conheça nossas Terapias
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={CLINIC_INFO.heroImageUrl} 
                    alt="Criança em terapia" 
                    className="w-full h-full object-cover aspect-[4/3]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-girassol-yellow rounded-full -z-10 animate-pulse" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-girassol-green rounded-2xl rotate-12 -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a Clínica Girassol</h2>
              <div className="w-20 h-1.5 bg-girassol-yellow mx-auto rounded-full mb-6" />
              <p className="text-lg text-girassol-brown/70 italic">
                "O girassol busca a luz, assim como buscamos o melhor potencial de cada criança."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Missão',
                  desc: 'Melhorar a qualidade de vida de nossos pacientes através de intervenções baseadas em evidências e afeto.',
                  icon: Heart
                },
                {
                  title: 'Visão',
                  desc: 'Ser referência em terapia multidisciplinar infantil, reconhecida pela humanização e resultados científicos.',
                  icon: Star
                },
                {
                  title: 'Valores',
                  desc: 'Ética, transparência, respeito à neurodiversidade e compromisso com a evolução de cada família.',
                  icon: Users
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-girassol-offwhite border border-girassol-yellow/20"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-girassol-green shadow-sm mb-6">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-girassol-brown/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section id="especialidades" className="py-24 bg-girassol-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Especialidades</h2>
                <p className="text-lg text-girassol-brown/70">
                  Oferecemos um suporte completo e integrado para o desenvolvimento do seu filho, com profissionais especializados em diversas áreas.
                </p>
              </div>
              <button 
                onClick={() => scrollToSection('contato')}
                className="btn-secondary whitespace-nowrap"
              >
                Ver todas as terapias
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {SPECIALTIES.map((spec, idx) => (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-3xl group hover:bg-girassol-yellow/5 transition-colors"
                >
                  <div className="w-16 h-16 bg-girassol-yellow/20 rounded-2xl flex items-center justify-center text-girassol-brown mb-6 group-hover:bg-girassol-yellow transition-colors">
                    <spec.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{spec.title}</h3>
                  <p className="text-girassol-brown/70 mb-6 leading-relaxed">
                    {spec.description}
                  </p>
                  <ul className="space-y-2">
                    {spec.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-sm font-medium text-girassol-green">
                        <CheckCircle2 size={16} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-girassol-green text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">O que dizem as famílias</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                  <div className="flex gap-1 mb-4 text-girassol-yellow">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg mb-6 italic">"{t.text}"</p>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm opacity-70">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 bg-girassol-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Conversar?</h2>
                <p className="text-lg text-girassol-brown/70 mb-10">
                  Estamos prontos para acolher sua família e tirar todas as suas dúvidas sobre nossos tratamentos e avaliações.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-girassol-green shrink-0 shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Telefone / WhatsApp</p>
                      <p className="text-girassol-brown/70">{CLINIC_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-girassol-green shrink-0 shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Endereço</p>
                      <p className="text-girassol-brown/70">{CLINIC_INFO.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="font-bold mb-4">Siga-nos nas redes sociais</p>
                  <div className="flex gap-4">
                    <a href={CLINIC_INFO.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-girassol-brown hover:bg-girassol-yellow transition-colors shadow-sm">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-girassol-brown hover:bg-girassol-yellow transition-colors shadow-sm">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-girassol-yellow/10 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-girassol-yellow/20 rounded-full flex items-center justify-center text-girassol-brown mb-6">
                  <MessageCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Agende via WhatsApp</h3>
                <p className="text-girassol-brown/70 mb-8 leading-relaxed">
                  Para sua maior comodidade, realizamos todos os nossos agendamentos e tiramos dúvidas diretamente pelo WhatsApp.
                </p>
                <button 
                  onClick={() => window.open(CLINIC_INFO.whatsappUrl, '_blank')}
                  className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3"
                >
                  <MessageCircle size={24} />
                  Falar com a Recepção
                </button>
                <p className="mt-6 text-sm text-girassol-brown/50">
                  Atendimento rápido e humanizado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-girassol-brown text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-girassol-yellow rounded-full flex items-center justify-center mr-3">
                   <img 
                    src={CLINIC_INFO.logoUrl} 
                    alt="Logo" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/sunflower/50/50'}
                  />
                </div>
                <span className="text-2xl font-extrabold">Clínica Girassol</span>
              </div>
              <p className="text-white/60 max-w-md leading-relaxed">
                {CLINIC_INFO.mission}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-white/60">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-girassol-yellow transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-girassol-yellow transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('especialidades')} className="hover:text-girassol-yellow transition-colors">Especialidades</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-girassol-yellow transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Horário de Atendimento</h4>
              <ul className="space-y-4 text-white/60">
                <li>Segunda - Sexta: 08:00 - 19:00</li>
                <li>Sábado: 08:00 - 13:00</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p translate="no">© {new Date().getFullYear()} Clínica Girassol. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com carinho para o desenvolvimento infantil.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => window.open(CLINIC_INFO.whatsappUrl, '_blank')}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </button>
    </div>
  );
}
