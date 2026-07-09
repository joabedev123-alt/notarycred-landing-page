const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Mod 1: Logo
content = content.replace(/logo03.png/g, 'logo04.png');

// Mod 2: Hero Button
content = content.replace(/bg-nc-trust-green text-nc-teal-title px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-nc-teal-title transition-all duration-300 shadow-xl shadow-nc-trust-green\/20 flex items-center justify-center gap-2/, 'bg-white text-nc-navy-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl flex items-center justify-center gap-2');

// Mod 3: Hero Image
content = content.replace(/https:\/\/images.unsplash.com\/photo-1600596542815-ffad4c1539a9\?auto=format&fit=crop&w=1200&q=80/g, '/broker-contract.png');
content = content.replace(/alt="Imóvel premium"/, 'alt="Corretor assinando contrato"');

// Mod 4: Navbar
content = content.replace(/bg-white\/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100/, 'bg-nc-navy-dark/95 backdrop-blur-md z-50 shadow-sm border-b border-white/10');
content = content.replace(/nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600"/, 'nav className="hidden md:flex gap-8 text-sm font-medium text-slate-200"');
content = content.replace(/bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg/, 'bg-nc-navy-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4 shadow-lg');
content = content.replace(/font-medium text-slate-600 hover:text-nc-teal-title/g, 'font-medium text-slate-200 hover:text-nc-teal-title');

// Mod 5: Institutional Image & Quote
content = content.replace(/<div className="rounded-\[2.5rem\] overflow-hidden shadow-2xl">/, '<div className="rounded-[2.5rem] overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0 lg:ml-auto">');
content = content.replace(/https:\/\/images.unsplash.com\/photo-1564013799919-ab600027ffc6\?auto=format&fit=crop&w=1000&q=80/, '/simple-house.png');
content = content.replace(/alt="Consultoria imobiliária premium"/, 'alt="Casa de classe média"');
content = content.replace(/aspect-\[4\/5\]/, 'aspect-square');
content = content.replace(/absolute -bottom-10 -right-10 bg-slate-900 text-white p-10 rounded-\[2rem\] shadow-2xl max-w-\[320px\] hidden md:block/, 'absolute -bottom-4 -right-4 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl max-w-[260px] hidden md:block z-20');
content = content.replace(/text-5xl text-nc-trust-green mb-4 block opacity-50/, 'text-4xl text-nc-trust-green mb-2 block opacity-50');
content = content.replace(/font-light text-lg leading-relaxed/, 'font-light text-sm leading-relaxed');

// Mod 6: Extract blocks based on comments
// We can use a regex to grab everything between section markers
const getBlock = (idStr, isFooter=false) => {
  const startIdx = content.indexOf('{/* ' + idStr);
  if(startIdx === -1) return '';
  let endIdx;
  if(isFooter) {
    endIdx = content.indexOf('</div>', content.indexOf('</footer>'));
  } else {
    endIdx = content.indexOf('{/* ', startIdx + 10);
    if(endIdx === -1) endIdx = content.indexOf('</section>', startIdx) + 10;
  }
  return content.substring(startIdx, endIdx);
};

const head = content.substring(0, content.indexOf('{/* 1. HEADER */}'));
const header = getBlock('1. HEADER');
const hero = getBlock('2. HERO');
const rapido = getBlock('3. BLOCO');
const inst = getBlock('4. SEÇÃO');
const prod = getBlock('5. SEÇÃO');
const ind = getBlock('6. BANNER');
const func = getBlock('7. COMO');
const ben = getBlock('8. BENEFÍCIOS');
const faq = getBlock('11. FAQ');
const cta = getBlock('13. CTA');
const foot = getBlock('14. RODAPÉ', true);

// Mod 7: Custom New Sections
const newHomeEquity = 
      {/* 5.5 O QUE É HOME EQUITY / COMPARAÇÃO */}
      <section className="py-20 lg:py-32 bg-[#0F1724] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-nc-trust-green/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-nc-tech-blue/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2">
            <div className="bg-[#162032] rounded-[2rem] p-8 md:p-10 border border-white/5 shadow-2xl relative">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-white mb-2">Comparação de Taxas</h3>
                <p className="text-slate-400 text-sm">Taxa mensal (% a.m.)</p>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <div><h4 className="text-white font-bold">NotaryCred</h4><p className="text-slate-400 text-xs">Garantia de Imóvel</p></div>
                    <span className="text-nc-trust-green font-black text-xl">1.30%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-nc-trust-green h-2 rounded-full shadow-[0_0_10px_rgba(24,158,79,0.5)]" style={{ width: '15%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <div><h4 className="text-white font-bold">Empréstimo Pessoal</h4><p className="text-slate-400 text-xs">Banco tradicional</p></div>
                    <span className="text-orange-500 font-bold text-lg">6.47%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <div><h4 className="text-white font-bold">Cartão Rotativo</h4><p className="text-slate-400 text-xs">Crédito rotativo</p></div>
                    <span className="text-red-500 font-bold text-lg">14.06%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-red-500 h-2 rounded-full" style={{ width: '90%' }}></div></div>
                </div>
              </div>
              <div className="mt-10 bg-nc-trust-green/10 border border-nc-trust-green/20 rounded-xl p-4 text-center">
                <p className="text-nc-trust-green text-sm font-medium">Economia de até 78% escolhendo NotaryCred</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">O que é Home Equity?</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">É um empréstimo que usa seu imóvel quitado como garantia, oferecendo taxas até 5x menores e prazos de até 240 meses. Perfeito para regularizar sua propriedade e aumentar seu patrimônio.</p>
            <ul className="space-y-5 mb-10">
              {['Juros até 5x menores que empréstimos pessoais','Até 60% do valor do seu imóvel','O imóvel continua sendo seu durante todo o processo','Prazos de até 240 meses para pagar'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-200"><div className="mt-1 w-6 h-6 rounded-full bg-nc-trust-green/20 flex items-center justify-center flex-shrink-0"><i className="bi bi-check text-nc-trust-green text-lg"></i></div><span className="font-medium">{item}</span></li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-block bg-nc-trust-green text-white px-8 py-4 rounded-xl font-bold hover:bg-nc-trust-green/90 transition-colors shadow-lg shadow-nc-trust-green/20">Simule seu crédito</a>
          </motion.div>
        </div>
      </section>
;

const newFunciona = 
      {/* 7. COMO FUNCIONA (Linha do Tempo Horizontal) */}
      <section id="como-funciona" className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nc-teal-title tracking-tight mb-4">Como Funciona</h2>
            <p className="text-nc-teal-title/70 text-lg md:text-xl font-medium">Um processo simples e transparente do início ao fim</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-[4.25rem] left-[10%] right-[10%] h-1 bg-gradient-to-r from-nc-trust-green via-nc-teal-title to-nc-tech-blue z-0 opacity-80"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {[
                { title: 'Simule seu crédito', desc: 'Preencha o formulário e receba uma simulação personalizada.', icon: 'bi-calculator' },
                { title: 'Analisamos seu imóvel', desc: 'Nossa equipe avalia seu imóvel e documentação.', icon: 'bi-search' },
                { title: 'Crédito aprovado', desc: 'Você recebe a aprovação e as melhores condições.', icon: 'bi-check-circle' },
                { title: 'Cartórios parceiros resolvem', desc: 'Escritura, ITBI e registro sem você se preocupar.', icon: 'bi-file-text' },
                { title: 'Imóvel 100% regularizado', desc: 'Seu patrimônio valorizado e pronto para o futuro.', icon: 'bi-house' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-nc-trust-green to-nc-tech-blue flex items-center justify-center text-white mb-6 shadow-xl shadow-nc-trust-green/20 group-hover:scale-105 transition-transform duration-300 relative z-10 border-[6px] border-white">
                    <i className={'bi ' + step.icon + ' text-5xl'}></i>
                  </div>
                  <h3 className="text-lg font-bold text-nc-teal-title mb-2 px-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-[220px] font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
;

const wappBtn = 
      {/* Botão Flutuante do WhatsApp */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group" aria-label="Falar pelo WhatsApp">
        <i className="bi bi-whatsapp"></i>
      </a>
;

// Now build the new ordered content
const finalContent = head + header + '\n' +
  hero + '\n' +
  ind + '\n' +
  inst + '\n' +
  prod + '\n' +
  newHomeEquity + '\n' +
  newFunciona + '\n' +
  ben + '\n' +
  rapido + '\n' +
  faq + '\n' +
  cta + '\n' +
  foot + '\n' +
  wappBtn + '\n' +
  '    </div>\n  );\n}\n\nexport default App;\n';

fs.writeFileSync('src/App.tsx', finalContent, 'utf8');
