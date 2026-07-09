const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf8');

// The parts are delimited by "      {/* "
// So let's split by that to get chunks.
const chunks = content.split('      {/* ');

// chunks[0] is the top of the file until right before HEADER
// Let's identify the chunks by their starting string
const parts = {};
let headerIdx = -1;

for(let i=1; i<chunks.length; i++) {
    const text = chunks[i];
    if(text.startsWith('1. HEADER')) parts.header = text;
    else if(text.startsWith('2. HERO PRINCIPAL')) parts.hero = text;
    else if(text.startsWith('3. BLOCO DE SOLUÇÕES RÁPIDAS')) parts.solucoes_rapidas = text;
    else if(text.startsWith('4. SEÇÃO INSTITUCIONAL')) parts.institucional = text;
    else if(text.startsWith('5. SEÇÃO DOS 3 PRODUTOS')) parts.produtos = text;
    else if(text.startsWith('5.5 O QUE É HOME EQUITY')) parts.home_equity = text;
    else if(text.startsWith('6. BANNER DE INDICADORES')) parts.indicadores = text;
    else if(text.startsWith('7. COMO FUNCIONA')) parts.como_funciona = text;
    else if(text.startsWith('8. BENEFÍCIOS')) parts.beneficios = text;
    else if(text.startsWith('11. FAQ')) parts.faq = text;
    else if(text.startsWith('13. CTA FINAL')) parts.cta = text;
    else if(text.startsWith('14. RODAPÉ')) parts.rodape = text;
    else if(text.startsWith('Botão Flutuante')) parts.wapp = text;
}

const newOrder = [
    parts.header,
    parts.hero,
    parts.indicadores,
    parts.institucional,
    parts.produtos,
    parts.home_equity,
    parts.como_funciona,
    parts.beneficios,
    parts.solucoes_rapidas,
    parts.faq,
    parts.cta,
    parts.rodape,
    parts.wapp
];

const newContent = chunks[0] + '      {/* ' + newOrder.join('      {/* ');
fs.writeFileSync('src/App.tsx', newContent, 'utf8');
