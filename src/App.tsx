import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const WHATSAPP_LINK = "https://wa.me/5500000000000";

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HEADER */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo03.png" alt="NotaryCred" className="h-[75px] w-auto object-contain" />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#inicio" className="hover:text-nc-blue transition-colors">Início</a>
            <a href="#solucoes" className="hover:text-nc-blue transition-colors">Soluções</a>
            <a href="#como-funciona" className="hover:text-nc-blue transition-colors">Como funciona</a>
            <a href="#beneficios" className="hover:text-nc-blue transition-colors">Benefícios</a>
            <a href="#faq" className="hover:text-nc-blue transition-colors">FAQ</a>
          </nav>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hidden md:flex bg-nc-blue text-white px-6 py-2.5 rounded-full font-medium hover:bg-nc-blue-light transition-colors shadow-lg shadow-nc-blue/30">
            Falar com especialista
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-3xl text-nc-blue focus:outline-none">
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg"
          >
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-600 hover:text-nc-blue">Início</a>
            <a href="#solucoes" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-600 hover:text-nc-blue">Soluções</a>
            <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-600 hover:text-nc-blue">Como funciona</a>
            <a href="#beneficios" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-600 hover:text-nc-blue">Benefícios</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-600 hover:text-nc-blue">FAQ</a>
            <a href={WHATSAPP_LINK} onClick={() => setIsMobileMenuOpen(false)} className="bg-nc-blue text-white px-6 py-3 rounded-full font-bold text-center mt-2">
              Falar com especialista
            </a>
          </motion.div>
        )}
      </header>

      {/* 2. HERO PRINCIPAL */}
      <section id="inicio" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-nc-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-nc-blue-light/20 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Regularize seu imóvel com mais <span className="text-nc-gold">facilidade, segurança e inteligência</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              A NotaryCred une tecnologia, crédito e regularização imobiliária para ajudar você a resolver escritura, ITBI, registro e crédito com garantia de imóvel de forma muito mais prática.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-nc-gold text-nc-blue text-center px-8 py-3.5 rounded-full font-bold hover:bg-nc-gold-light transition-all shadow-lg shadow-nc-gold/20">
                Quero regularizar meu imóvel
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-transparent border border-white text-white text-center px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors">
                Falar com especialista
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-400"></i>
                <span>Atendimento em todo o Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-400"></i>
                <span>Soluções para pessoas e empresas</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-400"></i>
                <span>Crédito com garantia de imóvel</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-400"></i>
                <span>Regularização facilitada</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-white/20 group">
              <div className="absolute inset-0 bg-gradient-to-t from-nc-blue/60 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80" alt="Imóvel premium e seguro" className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700" />
              
              {/* Elementos flutuantes premium */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl p-4 rounded-xl shadow-2xl z-20 flex items-center gap-4 border border-white/40">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <i className="bi bi-shield-check text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Status Protegido</p>
                  <p className="text-base font-bold text-slate-800">Escritura Aprovada</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. BLOCO DE SOLUÇÕES RÁPIDAS */}
      <section className="py-16 lg:py-24 bg-nc-gray relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-nc-blue mb-4">Soluções para cada etapa da sua jornada imobiliária</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Crédito com garantia',
                desc: 'Use seu imóvel para acessar crédito com melhores condições.',
                img: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=600&q=80',
                alt: 'Imóvel moderno'
              },
              {
                title: 'Regularização facilitada',
                desc: 'Orientação para escritura, ITBI, registro e documentação.',
                img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80',
                alt: 'Documentos e assinaturas'
              },
              {
                title: 'Segurança jurídica',
                desc: 'Mais clareza e confiança para avançar com seu imóvel.',
                img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80',
                alt: 'Segurança e justiça'
              },
              {
                title: 'Tecnologia imobiliária',
                desc: 'Identificação inteligente de oportunidades de regularização.',
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
                alt: 'Tecnologia e dados'
              },
              {
                title: 'Atendimento nacional',
                desc: 'Soluções para clientes em todo o Brasil.',
                img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
                alt: 'Atendimento global e mapa'
              },
              {
                title: 'Soluções para empresas',
                desc: 'Ferramentas para construtoras, incorporadoras e parceiros.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
                alt: 'Prédios corporativos'
              }
            ].map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl shadow-xl flex flex-col h-[320px] md:h-[360px] relative overflow-hidden group ring-1 ring-gray-200">
                <div className="h-1/2 w-full relative overflow-hidden">
                  <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-nc-blue/90"></div>
                </div>
                <div className="h-1/2 bg-gradient-to-b from-nc-blue to-slate-900 p-8 flex flex-col justify-center text-center">
                  <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">{item.title}</h3>
                  <p className="text-blue-100 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO INSTITUCIONAL / SOBRE */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
             className="lg:w-1/2 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200 group">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80" alt="Consultoria imobiliária premium" className="w-full h-auto object-cover aspect-[4/5] scale-105 group-hover:scale-100 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-nc-blue to-slate-900 text-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block ring-1 ring-white/10">
              <i className="bi bi-quote text-5xl text-nc-gold mb-4 block drop-shadow-md"></i>
              <p className="font-medium text-lg leading-relaxed">"Unimos análise especializada e tecnologia para transformar complexidade em soluções."</p>
            </div>
          </motion.div>
          
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
             className="lg:w-1/2"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-nc-gray text-nc-blue font-semibold text-sm mb-4 tracking-wider uppercase">Sobre a NotaryCred</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Tornamos a regularização imobiliária mais simples para quem quer resolver de verdade
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              A NotaryCred nasceu para facilitar a vida de quem possui imóvel irregular, precisa escriturar, deseja regularizar a documentação ou quer utilizar o patrimônio com mais inteligência. Unimos análise especializada, soluções acessíveis e tecnologia para transformar um processo complexo em algo mais claro, prático e confiável.
            </p>
            <a href="#solucoes" className="inline-flex items-center gap-2 bg-nc-blue text-white px-8 py-3.5 rounded-full font-medium hover:bg-nc-blue-light transition-colors">
              Conhecer soluções
              <i className="bi bi-arrow-right"></i>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 5. SEÇÃO DOS 3 PRODUTOS PRINCIPAIS */}
      <section id="solucoes" className="py-16 lg:py-24 bg-nc-gray">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-nc-blue mb-4">Conheça as principais soluções da NotaryCred</h2>
            <p className="text-lg text-slate-600">Escolha a solução ideal para regularizar, viabilizar ou transformar seu imóvel em oportunidade.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="mb-6 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center text-nc-blue text-3xl mb-6 shadow-inner ring-1 ring-blue-200/50">
                  <i className="bi bi-house-heart-fill"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Home Equity Convencional</h3>
                <p className="text-nc-gold font-medium mb-4">Empréstimo com garantia do imóvel</p>
                <p className="text-slate-600 mb-6 leading-relaxed">Use seu imóvel como garantia para acessar crédito com taxas mais competitivas, mais segurança e melhores possibilidades para reorganizar sua vida financeira ou investir com inteligência.</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3 text-slate-700 text-sm"><i className="bi bi-check-circle-fill text-nc-blue mt-0.5"></i> Crédito com garantia real</li>
                  <li className="flex gap-3 text-slate-700 text-sm"><i className="bi bi-check-circle-fill text-nc-blue mt-0.5"></i> Taxas mais competitivas</li>
                  <li className="flex gap-3 text-slate-700 text-sm"><i className="bi bi-check-circle-fill text-nc-blue mt-0.5"></i> Utilização do imóvel como garantia</li>
                  <li className="flex gap-3 text-slate-700 text-sm"><i className="bi bi-check-circle-fill text-nc-blue mt-0.5"></i> Segurança jurídica e análise documental especializada</li>
                </ul>
              </div>
              <a href={WHATSAPP_LINK} className="w-full block text-center bg-white border-2 border-nc-blue text-nc-blue hover:bg-nc-blue hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
                Quero crédito com meu imóvel
              </a>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-nc-blue text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nc-gold/20 rounded-full blur-3xl"></div>
              <div className="mb-6 flex-1 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center text-nc-gold text-3xl mb-6 backdrop-blur-md ring-1 ring-white/20 shadow-lg">
                  <i className="bi bi-binoculars-fill"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Real Estate Intelligence Scanner</h3>
                <p className="text-nc-gold-light font-medium mb-4">Sistema de busca de imóveis não escriturados</p>
                <p className="text-blue-100 mb-6 leading-relaxed">Tecnologia desenvolvida para identificar imóveis entregues e ainda não escriturados, gerando oportunidades para regularização em escala, inteligência imobiliária e novos negócios.</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-check-circle-fill text-nc-gold mt-0.5"></i> Identificação de unidades entregues e ainda não escrituradas</li>
                  <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-check-circle-fill text-nc-gold mt-0.5"></i> Busca em cartórios de registro de incorporação</li>
                  <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-check-circle-fill text-nc-gold mt-0.5"></i> Uso de tecnologia e inteligência de dados</li>
                  <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-check-circle-fill text-nc-gold mt-0.5"></i> Geração de leads para regularização em escala</li>
                </ul>
              </div>
              <a href={WHATSAPP_LINK} className="w-full block text-center bg-nc-gold text-nc-blue hover:bg-nc-gold-light px-6 py-3 rounded-full font-bold transition-colors relative z-10">
                Conhecer solução para empresas
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="mb-6 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center text-nc-blue text-3xl mb-6 shadow-inner ring-1 ring-blue-200/50">
                  <i className="bi bi-file-earmark-check-fill"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Regulariza Já NotaryCred</h3>
                <p className="text-nc-gold font-medium mb-4">Transformamos o imóvel em crédito para garantir a escritura</p>
                <p className="text-slate-600 mb-6 leading-relaxed">Solução pensada para quem precisa regularizar o imóvel, mas acha o processo caro ou difícil. A NotaryCred ajuda a viabilizar os custos da escritura, ITBI, registro e demais despesas.</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3 text-slate-700 text-sm"><i className="bi bi-check-circle-fill text-nc-blue mt-0.5"></i> Financiamento para custear escritura, ITBI, registro e despesas</li>
                  <li className="flex gap-3 text-slate-700 text-sm"><i className="bi bi-check-circle-fill text-nc-blue mt-0.5"></i> Solução para quem não possui liquidez imediata</li>
                  <li className="flex gap-3 text-slate-700 text-sm"><i className="bi bi-check-circle-fill text-nc-blue mt-0.5"></i> Aumenta a conversão de escrituras</li>
                  <li className="flex gap-3 text-slate-700 text-sm"><i className="bi bi-check-circle-fill text-nc-blue mt-0.5"></i> Parceria estratégica com construtoras e cartórios</li>
                </ul>
              </div>
              <a href={WHATSAPP_LINK} className="w-full block text-center bg-white border-2 border-nc-blue text-nc-blue hover:bg-nc-blue hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
                Quero regularizar agora
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAIXA DE NÚMEROS / INDICADORES */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-700/50">
            <div className="text-center px-4">
              <i className="bi bi-layers text-3xl text-nc-gold mb-3 inline-block"></i>
              <h4 className="text-4xl font-bold text-white mb-2">3</h4>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Soluções Principais</p>
              <p className="text-slate-500 text-xs mt-1">Para crédito, tecnologia e regularização</p>
            </div>
            <div className="text-center px-4">
              <i className="bi bi-map text-3xl text-nc-gold mb-3 inline-block"></i>
              <h4 className="text-4xl font-bold text-white mb-2">Nacional</h4>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Atendimento</p>
              <p className="text-slate-500 text-xs mt-1">Clientes em todo o Brasil</p>
            </div>
            <div className="text-center px-4">
              <i className="bi bi-graph-down text-3xl text-nc-gold mb-3 inline-block"></i>
              <h4 className="text-4xl font-bold text-white mb-2">Acessível</h4>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Processo Simples</p>
              <p className="text-slate-500 text-xs mt-1">Mais clareza para regularizar seu imóvel</p>
            </div>
            <div className="text-center px-4">
              <i className="bi bi-shield-check text-3xl text-nc-gold mb-3 inline-block"></i>
              <h4 className="text-4xl font-bold text-white mb-2">Segurança</h4>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Patrimonial</p>
              <p className="text-slate-500 text-xs mt-1">Regularização com orientação e estrutura</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMO FUNCIONA */}
      <section id="como-funciona" className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nc-blue">Como funciona na prática</h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-gray-100 -z-10"></div>
            
            {[
              { num: '1', title: 'Você entra em contato', desc: 'Fala com a NotaryCred e explica a situação do imóvel.', icon: 'bi-chat-dots-fill' },
              { num: '2', title: 'Análise do caso', desc: 'A equipe entende a documentação e identifica a necessidade.', icon: 'bi-search' },
              { num: '3', title: 'Solução ideal', desc: 'Indicamos o melhor caminho: regularização, viabilização ou crédito.', icon: 'bi-lightbulb-fill' },
              { num: '4', title: 'Avanço com segurança', desc: 'Você segue o processo com mais clareza, apoio e praticidade.', icon: 'bi-rocket-fill' }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center max-w-[200px] mb-10 md:mb-0 mx-auto group">
                <div className="w-24 h-24 bg-white border-[6px] border-nc-gray rounded-full flex items-center justify-center text-4xl text-nc-blue mb-6 shadow-xl relative group-hover:scale-110 group-hover:border-nc-gold/20 transition-all duration-300">
                  <i className={`bi ${step.icon} drop-shadow-md`}></i>
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-nc-gold to-yellow-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {step.num}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BENEFÍCIOS */}
      <section id="beneficios" className="py-16 lg:py-24 bg-nc-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-nc-blue mb-4">Por que escolher a NotaryCred?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'bi-shield-fill-check', title: 'Mais segurança jurídica' },
              { icon: 'bi-graph-up-arrow', title: 'Mais valorização do patrimônio' },
              { icon: 'bi-house-check-fill', title: 'Facilidade para vender ou regularizar' },
              { icon: 'bi-lightning-charge-fill', title: 'Menos burocracia' },
              { icon: 'bi-piggy-bank-fill', title: 'Solução acessível e prática' },
              { icon: 'bi-headset', title: 'Atendimento claro e orientado' },
              { icon: 'bi-cpu-fill', title: 'Tecnologia aplicada ao mercado' },
              { icon: 'bi-gem', title: 'Imóvel como oportunidade financeira' }
            ].map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-nc-gold/10 to-nc-gold/5 text-nc-gold rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ring-1 ring-nc-gold/20 group-hover:bg-nc-gold group-hover:text-white transition-colors duration-300">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h4 className="text-slate-800 font-bold leading-tight">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-nc-blue mb-4">Dúvidas frequentes</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'O que a NotaryCred faz?', a: 'A NotaryCred atua unindo tecnologia, crédito e regularização imobiliária para facilitar processos como escrituração, ITBI e registros.' },
              { q: 'O que é Home Equity?', a: 'É uma modalidade de crédito onde você utiliza seu imóvel como garantia, acessando taxas muito mais atrativas no mercado.' },
              { q: 'O que é o Real Estate Intelligence Scanner?', a: 'É um sistema exclusivo que busca e identifica imóveis que ainda não foram escriturados, facilitando a regularização em grande escala.' },
              { q: 'O que é o Regulariza Já?', a: 'É a nossa solução para ajudar nos custos da escritura, ITBI e registros, para quem precisa regularizar mas não tem liquidez imediata.' },
              { q: 'A NotaryCred atende todo o Brasil?', a: 'Sim! Nossas soluções de regularização e crédito com garantia estão disponíveis em todo o território nacional.' },
              { q: 'Meu imóvel ainda não tem escritura. Posso falar com vocês?', a: 'Com certeza! Nós ajudamos exatamente a viabilizar o processo de escrituração do seu imóvel.' },
              { q: 'A solução é só para pessoa física?', a: 'Não, também atendemos construtoras, incorporadoras e empresas parceiras do setor imobiliário.' }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-nc-gray rounded-2xl border border-gray-100 cursor-pointer">
                <summary className="flex items-center justify-between p-6 font-bold text-slate-800 list-none">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <i className="bi bi-chevron-down text-nc-gold"></i>
                  </span>
                </summary>
                <div className="text-slate-600 px-6 pb-6 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CTA FINAL */}
      <section className="py-16 lg:py-20 bg-nc-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nc-gold to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para regularizar seu imóvel com mais clareza?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Fale com a NotaryCred e descubra qual solução faz mais sentido para o seu caso.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={WHATSAPP_LINK} className="bg-nc-gold text-nc-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-nc-gold-light transition-all shadow-xl shadow-nc-gold/20">
              Falar com especialista
            </a>
            <a href="#solucoes" className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Conhecer soluções
            </a>
          </div>
        </div>
      </section>

      {/* 14. RODAPÉ */}
      <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div 
                  className="h-16 w-64 bg-nc-gold"
                  style={{
                    WebkitMaskImage: 'url(/logo03.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'left center',
                    maskImage: 'url(/logo03.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'left center'
                  }}
                  aria-label="NotaryCred Logo"
                ></div>
              </div>
              <p className="text-slate-400 text-sm mb-6">A nova forma de fazer crédito com escritura pública.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-nc-blue transition-colors"><i className="bi bi-instagram"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-nc-blue transition-colors"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-nc-blue transition-colors"><i className="bi bi-facebook"></i></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Menu rápido</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#inicio" className="hover:text-nc-gold transition-colors">Início</a></li>
                <li><a href="#solucoes" className="hover:text-nc-gold transition-colors">Soluções</a></li>
                <li><a href="#como-funciona" className="hover:text-nc-gold transition-colors">Como funciona</a></li>
                <li><a href="#faq" className="hover:text-nc-gold transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Soluções</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#solucoes" className="hover:text-nc-gold transition-colors">Home Equity</a></li>
                <li><a href="#solucoes" className="hover:text-nc-gold transition-colors">Intelligence Scanner</a></li>
                <li><a href="#solucoes" className="hover:text-nc-gold transition-colors">Regulariza Já</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <i className="bi bi-whatsapp text-nc-gold mt-1"></i>
                  <span>Atendimento nacional via WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="bi bi-envelope text-nc-gold mt-1"></i>
                  <span>contato@notarycred.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-slate-500 text-xs">
                © 2026 NotaryCred. Todos os direitos reservados.
              </p>
              <p className="text-slate-500 text-xs flex items-center">
                Produzida com <i className="bi bi-heart-fill text-nc-gold mx-1"></i> por <a href="https://camaly.com.br/" target="_blank" rel="noreferrer" className="font-bold text-white hover:text-nc-gold transition-colors ml-1">CAMALY</a>
              </p>
            </div>
            <p className="text-slate-600 text-[10px] max-w-xl text-center md:text-right">
              Aviso institucional: A análise está sujeita à avaliação documental, jurídica e de crédito, conforme o tipo de solução contratada.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
