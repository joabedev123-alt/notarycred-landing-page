import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const WHATSAPP_LINK = "https://wa.me/5500000000000";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-nc-navy-dark shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo04.png" alt="NotaryCred" className="h-[80px] md:h-[120px] w-auto object-contain" />
          </div>
          <nav className="hidden md:flex gap-8 text-base lg:text-lg font-semibold text-slate-200">
            <a href="#inicio" className="hover:text-nc-navy-blue transition-colors">Início</a>
            <a href="#solucoes" className="hover:text-nc-navy-blue transition-colors">Soluções</a>
            <a href="#como-funciona" className="hover:text-nc-navy-blue transition-colors">Como funciona</a>
            <a href="#faq" className="hover:text-nc-navy-blue transition-colors">FAQ</a>
          </nav>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hidden md:flex bg-nc-primary-blue text-white px-6 py-2.5 rounded-full font-semibold hover:bg-nc-tech-blue transition-colors shadow-lg shadow-nc-navy-dark/30">
            Falar com especialista
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-3xl text-nc-navy-blue focus:outline-none">
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            className="md:hidden bg-nc-navy-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4 shadow-lg"
          >
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-slate-200 hover:text-nc-navy-blue">Início</a>
            <a href="#solucoes" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-slate-200 hover:text-nc-navy-blue">Soluções</a>
            <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-slate-200 hover:text-nc-navy-blue">Como funciona</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-slate-200 hover:text-nc-navy-blue">FAQ</a>
            <a href={WHATSAPP_LINK} onClick={() => setIsMobileMenuOpen(false)} className="bg-nc-primary-blue text-white px-6 py-3 rounded-full font-bold text-center mt-2">
              Falar com especialista
            </a>
          </motion.div>
        )}
      </header>

      {/* 2. HERO PRINCIPAL */}
      {/* 2. HERO PRINCIPAL */}
      <section id="inicio" className="pt-36 pb-56 sm:pb-32 lg:pt-48 lg:pb-40 bg-nc-navy-dark text-white relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/hero-principal1.png')" }}>
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforme seu imóvel em crédito e conquiste sua escritura com <span className="text-nc-primary-blue">segurança e agilidade.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Usamos tecnologia e especialistas notariais e registrais para liberar o crédito que regulariza seu imóvel sem complicação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-white text-nc-navy-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 text-center">
                Fale com um Especialista <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#solucoes" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-center">
                Conheça as Soluções
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative flex justify-center lg:justify-end"
          >
            <div className="mt-4 md:mt-0 bg-white/10 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/20 z-20 flex items-center justify-center md:justify-start gap-4 shadow-2xl shadow-black/40 lg:mr-8 mb-8 lg:mb-0">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center text-white backdrop-blur-md flex-shrink-0">
                <i className="bi bi-shield-check text-2xl md:text-3xl"></i>
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm text-blue-100 font-semibold tracking-wide">Certificação Jurídica</p>
                <p className="text-base md:text-2xl font-bold text-white leading-tight">Processo 100% Seguro</p>
              </div>
            </div>
          </motion.div>
        </div>


      </section>

      {/* 2.1 COMO FUNCIONA (Linha do Tempo Horizontal) */}
      <section id="como-funciona" className="py-20 lg:py-32 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nc-navy-blue tracking-tight mb-4">Como Funciona</h2>
            <p className="text-nc-navy-blue text-lg md:text-xl font-semibold">Um processo simples e transparente do início ao fim</p>
          </div>
          
          <div className="relative">
            {/* Linha horizontal conectando os passos (Desktop) */}
            <div className="hidden lg:block absolute top-[4.25rem] left-[10%] right-[10%] h-1 bg-gradient-to-r from-nc-primary-blue via-nc-teal-title to-nc-tech-blue z-0 opacity-80"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {[
                { title: 'Simule seu crédito', desc: 'Preencha o formulário e receba uma simulação personalizada.', icon: 'bi-calculator' },
                { title: 'Analisamos seu imóvel', desc: 'Nossa equipe avalia seu imóvel e documentação.', icon: 'bi-search' },
                { title: 'Crédito aprovado', desc: 'Você recebe a aprovação e as melhores condições.', icon: 'bi-check-circle' },
                { title: 'Cartórios parceiros resolvem', desc: 'Escritura, ITBI e registro sem você se preocupar.', icon: 'bi-file-text' },
                { title: 'Imóvel 100% regularizado', desc: 'Seu patrimônio valorizado e pronto para o futuro.', icon: 'bi-house' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-nc-primary-blue to-nc-tech-blue flex items-center justify-center text-white mb-6 shadow-xl shadow-nc-primary-blue/20 group-hover:scale-105 transition-transform duration-300 relative z-10 border-[6px] border-white">
                    <i className={`bi ${step.icon} text-5xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-nc-navy-blue mb-2 px-2">{step.title}</h3>
                  <p className="text-nc-navy-blue text-sm leading-relaxed max-w-[220px] font-normal">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>






      {/* 5. SEÇÃO DOS 3 PRODUTOS PRINCIPAIS */}
      <section id="solucoes" className="py-16 lg:py-24 bg-nc-soft-bg">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-nc-navy-blue mb-4 whitespace-nowrap overflow-hidden text-ellipsis">Conheça as principais soluções da NotaryCred</h2>
            <p className="text-lg text-nc-text-gray">Escolha a solução ideal para regularizar, viabilizar ou transformar seu imóvel em oportunidade.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="mb-6 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center text-nc-navy-blue text-3xl mb-6 shadow-inner ring-1 ring-blue-200/50">
                  <i className="bi bi-house-heart-fill"></i>
                </div>
                <h3 className="text-2xl font-bold text-nc-text-dark mb-2">Home Equity Convencional</h3>
                <p className="text-nc-primary-blue font-semibold mb-4">Empréstimo com garantia do imóvel</p>
                <p className="text-nc-text-gray mb-6 leading-relaxed">Transforme o patrimônio do seu imóvel em capital para investir, reorganizar sua vida financeira, quitar dívidas ou desenvolver novos projetos. Com análise jurídica especializada e estrutura segura, você acessa crédito com condições mais vantajosas do que as modalidades tradicionais.</p>
                
                
                <div className={`overflow-hidden transition-all duration-500 ${showMore1 ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <h4 className="text-lg font-bold text-nc-navy-blue mb-3">Ideal para</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Pessoas físicas</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Empresários</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Investidores</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Profissionais liberais</li>
                  </ul>

                  <h4 className="text-lg font-bold text-nc-navy-blue mb-3">Diferenciais</h4>
                  <ul className="space-y-2 mb-8">
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Crédito com garantia real do imóvel</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Taxas mais competitivas</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Prazos maiores para pagamento</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Análise jurídica especializada</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Processo transparente e seguro</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Atendimento personalizado durante toda a operação</li>
                  </ul>
                </div>
                
                <button onClick={() => setShowMore1(!showMore1)} className="text-nc-primary-blue font-bold text-sm flex items-center gap-2 mt-2 mb-6 hover:text-nc-navy-blue transition-colors outline-none">
                  {showMore1 ? 'Ler menos' : 'Ler mais'} <i className={`bi ${showMore1 ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                </button>
              </div>
              <a href={WHATSAPP_LINK} className="w-full block text-center bg-white border-2 border-nc-primary-blue text-nc-navy-blue hover:bg-nc-navy-dark hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
                Quero crédito com meu imóvel
              </a>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-nc-navy-dark text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nc-gold/20 rounded-full blur-3xl"></div>
              <div className="mb-6 flex-1 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center text-nc-primary-blue text-3xl mb-6 backdrop-blur-md ring-1 ring-white/20 shadow-lg">
                  <i className="bi bi-file-earmark-check-fill"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Regulariza Já</h3>
                <p className="text-nc-light-blue font-semibold mb-4">A nova forma de fazer crédito com Escritura Pública.</p>
                <p className="text-blue-100 mb-4 leading-relaxed">Muitas famílias deixam de realizar a escritura definitiva porque não conseguem pagar os custos de ITBI, escritura e registro.</p>
                <p className="text-blue-100 mb-6 leading-relaxed">O Regulariza Já transforma o próprio imóvel em garantia para viabilizar esses custos, permitindo que o proprietário finalmente regularize seu patrimônio com segurança jurídica.</p>
                
                
                <div className={`overflow-hidden transition-all duration-500 ${showMore2 ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <h4 className="text-lg font-bold mb-3 text-nc-light-blue">Ideal para</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Compradores de imóveis novos</li>
                    <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Clientes de construtoras</li>
                    <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Proprietários que ainda não escrituraram</li>
                  </ul>

                  <h4 className="text-lg font-bold mb-3 text-nc-light-blue">Diferenciais</h4>
                  <ul className="space-y-2 mb-8">
                    <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-check-circle-fill text-nc-primary-blue mt-0.5"></i> Crédito para custear escritura, ITBI e registro</li>
                    <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-check-circle-fill text-nc-primary-blue mt-0.5"></i> Não exige liquidez imediata</li>
                    <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-check-circle-fill text-nc-primary-blue mt-0.5"></i> Processo simples e rápido</li>
                    <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-check-circle-fill text-nc-primary-blue mt-0.5"></i> Segurança jurídica durante toda a operação</li>
                    <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-check-circle-fill text-nc-primary-blue mt-0.5"></i> Mais conversão para construtoras</li>
                    <li className="flex gap-3 text-blue-50 text-sm"><i className="bi bi-check-circle-fill text-nc-primary-blue mt-0.5"></i> Solução integrada entre cliente, cartório e incorporadora/construtora</li>
                  </ul>
                </div>
                
                <button onClick={() => setShowMore2(!showMore2)} className="text-nc-light-blue font-bold text-sm flex items-center gap-2 mt-2 mb-6 hover:text-white transition-colors outline-none relative z-10">
                  {showMore2 ? 'Ler menos' : 'Ler mais'} <i className={`bi ${showMore2 ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                </button>
              </div>
              <a href={WHATSAPP_LINK} className="w-full block text-center bg-white border-2 border-nc-primary-blue text-nc-navy-blue hover:bg-nc-navy-dark hover:text-white px-6 py-3 rounded-full font-bold transition-colors relative z-10">
                Quero regularizar agora
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="mb-6 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center text-nc-navy-blue text-3xl mb-6 shadow-inner ring-1 ring-blue-200/50">
                  <i className="bi bi-binoculars-fill"></i>
                </div>
                <h3 className="text-2xl font-bold text-nc-text-dark mb-2">Real Estate Intelligence Scanner</h3>
                <p className="text-nc-primary-blue font-semibold mb-4">Inteligência imobiliária para identificar oportunidades invisíveis.</p>
                <p className="text-nc-text-gray mb-4 leading-relaxed">Uma plataforma desenvolvida para construtoras, incorporadoras e parceiros do mercado imobiliário que identifica empreendimentos entregues cujas unidades ainda não tiveram a escritura definitiva realizada.</p>
                <p className="text-nc-text-gray mb-6 leading-relaxed">A tecnologia cruza informações registrais e imobiliárias para localizar oportunidades de regularização, recuperação de receita e relacionamento com clientes.</p>
                
                
                <div className={`overflow-hidden transition-all duration-500 ${showMore3 ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <h4 className="text-lg font-bold text-nc-navy-blue mb-3">Ideal para</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Construtoras</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Incorporadoras</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Fundos imobiliários</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Servicers</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-arrow-right-short text-nc-primary-blue mt-0.5"></i> Operações de pós-venda</li>
                  </ul>

                  <h4 className="text-lg font-bold text-nc-navy-blue mb-3">Diferenciais</h4>
                  <ul className="space-y-2 mb-8">
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Identificação automática de imóveis ainda não escriturados</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Inteligência baseada em dados registrais</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Mapeamento de oportunidades em escala</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Recuperação de receitas esquecidas</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Geração de novos negócios</li>
                    <li className="flex gap-3 text-nc-text-gray text-sm"><i className="bi bi-check-circle-fill text-nc-navy-blue mt-0.5"></i> Dashboard com indicadores e inteligência operacional</li>
                  </ul>
                </div>

                <button onClick={() => setShowMore3(!showMore3)} className="text-nc-primary-blue font-bold text-sm flex items-center gap-2 mt-2 mb-6 hover:text-nc-navy-blue transition-colors outline-none">
                  {showMore3 ? 'Ler menos' : 'Ler mais'} <i className={`bi ${showMore3 ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                </button>
              </div>
              <a href={WHATSAPP_LINK} className="w-full block text-center bg-white border-2 border-nc-primary-blue text-nc-navy-blue hover:bg-nc-navy-dark hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
                Conhecer solução para empresas
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO INSTITUCIONAL / SOBRE */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12">
          
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
             className="lg:w-1/2 flex flex-col lg:items-end text-left"
          >
            <div className="w-full max-w-lg">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-nc-text-dark mb-6 tracking-tight leading-tight">O que a <span className="text-nc-primary-blue">NotaryCred</span><br/>faz por você</h2>
              <div className="w-16 h-1 bg-nc-primary-blue mb-8"></div>
              <p className="text-lg text-nc-text-gray font-normal mb-12 leading-relaxed">
                Unimos crédito inteligente, suporte jurídico e tecnologia para tornar a regularização do seu imóvel mais simples, segura e acessível.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#EAF5F0] rounded-2xl flex items-center justify-center text-nc-primary-blue text-2xl flex-shrink-0 shadow-sm">
                    <i className="bi bi-house-add"></i>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-nc-text-dark text-lg mb-1">Crédito com segurança</h4>
                    <p className="text-nc-text-gray text-sm leading-relaxed">Soluções de crédito com garantia do seu imóvel<br/>e taxas mais competitivas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#EAF5F0] rounded-2xl flex items-center justify-center text-nc-primary-blue text-2xl flex-shrink-0 shadow-sm">
                    <i className="bi bi-file-earmark-text"></i>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-nc-text-dark text-lg mb-1">Regularização facilitada</h4>
                    <p className="text-nc-text-gray text-sm leading-relaxed">Viabilizamos a escritura, ITBI e registro<br/>sem burocracia e com agilidade.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#EAF5F0] rounded-2xl flex items-center justify-center text-nc-primary-blue text-2xl flex-shrink-0 shadow-sm">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-nc-text-dark text-lg mb-1">Tecnologia e especialistas</h4>
                    <p className="text-nc-text-gray text-sm leading-relaxed">Processos digitais, análise jurídica especializada<br/>e total segurança em cada etapa.</p>
                  </div>
                </div>
              </div>

              <a href="#solucoes" className="inline-flex items-center gap-2 bg-nc-primary-blue text-white px-8 py-4 rounded-full font-bold hover:bg-nc-tech-blue transition-colors shadow-lg shadow-nc-primary-blue/30">
                Fale com um especialista <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </motion.div>

          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
             className="lg:w-1/2 relative flex justify-center lg:justify-start mt-16 lg:mt-0"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-lg aspect-square lg:aspect-[4/4] relative">
              <img src="/segunda-imagem.png" alt="Segunda imagem NotaryCred" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Overlay card */}
            <div className="absolute -bottom-8 right-2 lg:-right-8 bg-[#0a192f] text-white p-6 md:p-8 rounded-[2rem] shadow-2xl w-[90%] max-w-[340px] z-20 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-nc-primary-blue/40 flex items-center justify-center text-nc-cyan-blue text-2xl flex-shrink-0 bg-[#0a192f]">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4 className="font-bold text-lg md:text-xl leading-tight mt-1">Segurança que<br/>gera tranquilidade.</h4>
              </div>
              <p className="font-normal text-sm text-slate-300 leading-relaxed mb-6">Cuidamos de todo o processo para você conquistar a regularização do seu imóvel com confiança.</p>
              <div className="bg-white text-nc-text-dark px-4 py-3 rounded-full flex items-center justify-start gap-3 text-xs font-bold w-[90%] shadow-md">
                <i className="bi bi-lock text-base text-nc-text-gray"></i> Processo 100% Seguro
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* 2.5 MARCAS PARCEIRAS */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nc-navy-blue tracking-tight text-center">Marcas que confiam na NotaryCred</h2>
        </div>
        
        <div className="relative flex w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 md:gap-32 items-center whitespace-nowrap pl-16 md:pl-32">
            {[...Array(2)].flatMap(() => [
              '/logos/7.png',
              '/logos/8.png',
              '/logos/9.png',
              '/logos/10.png',
              '/logos/11.png',
              '/logos/12.png',
              '/logos/13.png'
            ]).map((logo, idx) => (
              <img key={idx} src={logo} alt="Marca parceira" className="h-32 md:h-48 w-auto max-w-[400px] object-contain mix-blend-multiply flex-shrink-0" />
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 O QUE É HOME EQUITY / COMPARAÇÃO */}
      <section className="py-20 lg:py-32 bg-[#0F1724] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-nc-primary-blue/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-nc-tech-blue/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          {/* Lado Esquerdo - Card de Comparação */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-[#162032] rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl relative">
              <div className="text-center mb-10 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Comparação de Taxas</h3>
                <p className="text-nc-text-gray text-base">Taxa mensal (% a.m.)</p>
              </div>
              
              <div className="space-y-10">
                {/* NotaryCred */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <div>
                      <h4 className="text-lg text-white font-bold">NotaryCred</h4>
                      <p className="text-nc-text-gray text-sm">Garantia de Imóvel</p>
                    </div>
                    <span className="text-[#189E4F] font-black text-2xl">1,30%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-[#189E4F] h-3 rounded-full shadow-[0_0_10px_rgba(24,158,79,0.5)]" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                {/* Empréstimo Pessoal */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <div>
                      <h4 className="text-lg text-white font-bold">Empréstimo Pessoal</h4>
                      <p className="text-nc-text-gray text-sm">Banco tradicional</p>
                    </div>
                    <span className="text-orange-500 font-bold text-xl">6,47%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                {/* Cartão Rotativo */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <div>
                      <h4 className="text-lg text-white font-bold">Cartão Rotativo</h4>
                      <p className="text-nc-text-gray text-sm">Crédito rotativo</p>
                    </div>
                    <span className="text-red-500 font-bold text-xl">14,06%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-nc-primary-blue rounded-xl p-5 text-center shadow-[0_4px_20px_rgba(0,87,184,0.4)]">
                <p className="text-white text-lg md:text-xl font-bold tracking-wide">Economia de até 78% escolhendo NotaryCred</p>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito - Textos */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">O que é Home Equity?</h2>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 font-normal">
              É um empréstimo que usa seu imóvel quitado como garantia, oferecendo taxas até 5x menores e prazos de até 240 meses. Perfeito para regularizar sua propriedade e aumentar seu patrimônio.
            </p>
            
            <ul className="space-y-5 mb-10">
              {[
                'Juros até 5x menores que empréstimos pessoais',
                'Até 60% do valor do seu imóvel',
                'O imóvel continua sendo seu durante todo o processo',
                'Prazos de até 240 meses para pagar'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-lg text-slate-200">
                  <div className="mt-1 w-8 h-8 rounded-full bg-nc-primary-blue/20 flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-check text-nc-primary-blue text-xl"></i>
                  </div>
                  <span className="font-semibold pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-block bg-nc-primary-blue text-white px-10 py-5 text-lg rounded-xl font-bold hover:bg-nc-primary-blue/90 transition-colors shadow-lg shadow-nc-primary-blue/20">
              Simule seu crédito
            </a>
          </motion.div>
        </div>
      </section>







      {/* 11. FAQ */}
      <section id="faq" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-nc-navy-blue mb-4">Dúvidas frequentes</h2>
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
              <details key={idx} className="group bg-nc-soft-bg rounded-2xl border border-gray-100 cursor-pointer">
                <summary className="flex items-center justify-between p-6 font-bold text-nc-text-dark list-none">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <i className="bi bi-chevron-down text-nc-primary-blue"></i>
                  </span>
                </summary>
                <div className="text-nc-text-gray px-6 pb-6 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CTA FINAL */}
      <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">Pronto para transformar seu patrimônio?</h2>
          <p className="text-slate-300 mb-10 text-lg md:text-xl max-w-2xl mx-auto font-normal">Fale com um especialista agora e descubra como a NotaryCred pode acelerar o processo de forma 100% segura.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-block bg-nc-primary-blue text-nc-text-dark px-10 py-5 rounded-2xl font-extrabold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-nc-primary-blue/20">
            Falar com Especialista
          </a>
        </div>
      </section>

      {/* 14. RODAPÉ */}
      <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo04.png" alt="NotaryCred" className="h-[60px] md:h-[80px] w-auto object-contain" />
              </div>
              <p className="text-nc-text-gray text-base md:text-lg mb-6">A nova forma de fazer crédito com escritura pública.</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-nc-text-gray hover:text-white hover:bg-nc-navy-dark transition-colors text-lg"><i className="bi bi-instagram"></i></a>
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-nc-text-gray hover:text-white hover:bg-nc-navy-dark transition-colors text-lg"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-nc-text-gray hover:text-white hover:bg-nc-navy-dark transition-colors text-lg"><i className="bi bi-facebook"></i></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Menu rápido</h4>
              <ul className="space-y-3 text-base text-nc-text-gray">
                <li><a href="#inicio" className="hover:text-nc-primary-blue transition-colors">Início</a></li>
                <li><a href="#solucoes" className="hover:text-nc-primary-blue transition-colors">Soluções</a></li>
                <li><a href="#como-funciona" className="hover:text-nc-primary-blue transition-colors">Como funciona</a></li>
                <li><a href="#faq" className="hover:text-nc-primary-blue transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Soluções</h4>
              <ul className="space-y-3 text-base text-nc-text-gray">
                <li><a href="#solucoes" className="hover:text-nc-primary-blue transition-colors">Home Equity</a></li>
                <li><a href="#solucoes" className="hover:text-nc-primary-blue transition-colors">Intelligence Scanner</a></li>
                <li><a href="#solucoes" className="hover:text-nc-primary-blue transition-colors">Regulariza Já</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-4 text-base text-nc-text-gray">
                <li className="flex items-start gap-3">
                  <i className="bi bi-whatsapp text-nc-primary-blue mt-1"></i>
                  <span>Atendimento nacional via WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="bi bi-envelope text-nc-primary-blue mt-1"></i>
                  <span>contato@notarycred.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-slate-400 text-sm">
                © 2026 NotaryCred. Todos os direitos reservados.
              </p>
              <p className="text-slate-400 text-sm flex items-center">
                Produzida com <i className="bi bi-heart-fill text-nc-primary-blue mx-1"></i> por <a href="https://camaly.com.br/" target="_blank" rel="noreferrer" className="font-bold text-white hover:text-nc-primary-blue transition-colors ml-1">CAMALY</a>
              </p>
            </div>
            <p className="text-nc-text-gray text-xs md:text-sm max-w-xl text-center md:text-right">
              Aviso institucional: A análise está sujeita à avaliação documental, jurídica e de crédito, conforme o tipo de solução contratada.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-20 h-20 rounded-full flex items-center justify-center text-5xl shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
        aria-label="Falar pelo WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
