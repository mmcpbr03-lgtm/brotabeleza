"use client";

import { useEffect, useRef, useState } from "react";

const variants = [
  { name: "Laranja Solar", slug: "laranja-solar", tone: "#f18b42", ink: "#982e17", caption: "Energia e atitude.", colors: ["#dc5e20", "#f79b58", "#f4b18b"] },
  { name: "Rosa Tropical", slug: "rosa-tropical", tone: "#f3b5a5", ink: "#ad231c", caption: "Delicada e vibrante.", colors: ["#e36d79", "#f5c1ae", "#b82420"] },
  { name: "Bege Natural", slug: "bege-natural", tone: "#e6d7b5", ink: "#35441c", caption: "Leve e atemporal.", colors: ["#515e2d", "#9ba475", "#f4c77b"] },
  { name: "Lilás Floral", slug: "lilas-floral", tone: "#cbb1dc", ink: "#522161", caption: "Moderna e divertida.", colors: ["#602570", "#efa5a3", "#b695cc"] },
  { name: "Verde Brasil", slug: "verde-brasil", tone: "#184b34", ink: "#fff0ce", caption: "Autêntica e marcante.", colors: ["#16462f", "#a4af7b", "#e28792"] },
];

function Botanical({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 240 300" fill="none" aria-hidden="true"><path d="M115 300C120 205 120 98 176 8" stroke="currentColor" strokeWidth="5" /><path d="M131 226C49 233 10 177 17 126C96 133 125 162 131 226ZM145 163C213 172 238 122 237 75C178 83 151 116 145 163ZM162 111C99 108 66 60 79 19C135 33 162 62 162 111ZM122 274C195 285 226 238 220 194C159 202 132 227 122 274Z" fill="currentColor"/><path d="M128 222L43 151M148 157L211 97M159 104L97 38M124 268L202 211" stroke="#f6f0e4" strokeWidth="2" opacity=".4"/></svg>;
}

function Brand() {
  return <a className="brand" href="#top" aria-label="Brota Beleza início">brota<br />beleza!</a>;
}

function Flower({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="M50 42C15 0 0 23 30 49C-10 60 12 95 43 65C42 108 78 106 61 66C99 89 113 52 70 48C105 15 65-7 54 40Z" /><path d="M50 37v27M37 50h27M41 41l19 19M41 60l19-19" stroke="#f6ead7" strokeWidth="2" /></svg>;
}

export default function Home() {
  const [selected, setSelected] = useState(0);
  const current = variants[selected];
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = element.querySelectorAll<HTMLElement>(".section-heading, .product-card, .offer, .care-art, .care-copy, .faq > div, .editorial-art, .editorial-copy, .sticker-guide-art, .sticker-side");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-delay", `${(index % 5) * 65}ms`);
      target.classList.add("reveal");
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);
  return <main id="top" ref={root}>
    <div className="topbar">PELE BONITA TODOS OS DIAS · MAIS VIDA, MENOS ESPINHA</div>
    <header><div className="header-inner"><Brand /><nav aria-label="Navegação principal"><a href="#colecao">A coleção</a><a href="#cuidado">O cuidado</a><a href="#faq">Dúvidas</a></nav><a className="header-link" href="#colecao">Escolha sua cor <span>↗</span></a></div></header>
    <section className="hero section-inner">
      <div className="hero-copy"><Flower className="copy-flower" /><span className="eyebrow">UM PEQUENO CUIDADO. MUITA PERSONALIDADE.</span><h1>Mais vida,<br />menos <i>espinha.</i></h1><p>Adesivos secantes de espinha com ácido salicílico. Cinco cores para acompanhar seus dias, do seu jeito.</p><a className="button" href="#colecao">Conheça a coleção <span>↗</span></a><div className="hero-note"><span>24</span><p>adesivos em<br />cada embalagem</p></div></div>
      <div className="hero-art" style={{ background: current.tone, color: current.ink }}><Botanical className="hero-botanical" /><Flower className="hero-flower" /><span className="floating-seal" aria-hidden="true">mais cor<br /><b>mais vida</b><Flower /></span><span className="art-label">pele bonita<br />todos os dias</span><div key={current.slug} className={`pack-window hero-pack ${current.slug}`}><img src={`/images/brota/${current.slug}.jpg`} alt={`Embalagem Brota Beleza ${current.name}, com 24 adesivos`} /></div><div className="art-bottom"><span>MAIS VIDA, MENOS ESPINHA</span><span>{String(selected + 1).padStart(2, "0")} / 05 CORES</span></div></div>
    </section>
    <div className="ticker"><div className="ticker-track">{[0,1,2,3].map(i => <div className="ticker-group" key={i} aria-hidden={i > 0 ? true : undefined}><span>brota beleza!</span><Flower /><span>mais vida, menos espinha</span><Flower /><span>pele bonita todos os dias</span><Flower /></div>)}</div></div>
    <section className="editorial section-inner"><div className="editorial-art"><img src="/images/brota/tropical-art.webp" alt="Arte tropical com onça, flores de hibisco e folhagens nas cores da Brota Beleza" loading="lazy" /><span className="art-stamp">UM TOQUE<br />DE BRASIL</span></div><div className="editorial-copy"><span className="eyebrow">A NATUREZA TEM PERSONALIDADE. VOCÊ TAMBÉM.</span><h2>Seu cuidado.<br /><i>Seu lado tropical.</i></h2><p>Flores, cores e um pouco de ousadia. Um convite para colocar mais leveza nos pequenos momentos do dia.</p><a href="#colecao" className="text-link">Descubra sua cor <span>↗</span></a><Flower className="editorial-flower" /></div></section>
    <section className="collection section-inner" id="colecao">
      <div className="section-heading"><div><span className="eyebrow">A COLEÇÃO</span><h2>Qual cor combina<br />com o seu dia?</h2></div><p>A mesma proposta de cuidado.<br />Cinco jeitos de expressar quem você é.</p></div>
      <div className="catalog">{variants.map((variant, i) => <button className={`product-card ${selected === i ? "selected" : ""}`} type="button" key={variant.slug} onClick={() => setSelected(i)} aria-pressed={selected === i} aria-label={`Selecionar ${variant.name}`} style={{ "--tone": variant.tone, "--pack-ink": variant.ink } as React.CSSProperties}><div className="product-image"><span className="product-index">0{i + 1}</span><div className={`pack-window ${variant.slug}`}><img src={`/images/brota/${variant.slug}.jpg`} alt={`Brota Beleza ${variant.name}`} loading="lazy" /></div><span className="selection-mark" aria-hidden="true">{selected === i ? "✓" : "↗"}</span></div></button>)}</div>
      <div className="version-selector"><label htmlFor="version">Escolha sua versão</label><select id="version" value={selected} onChange={event => setSelected(Number(event.target.value))}>{variants.map((variant, i) => <option value={i} key={variant.slug}>{variant.name}</option>)}</select></div>
      <div className="offers" aria-label="Opções de compra">
        <article className="offer"><div><span className="eyebrow">PARA CONHECER</span><h3>1 pacote</h3><p>24 adesivos para acompanhar sua rotina.</p></div><div className="offer-purchase"><div className="price">R$ 39,99</div><button type="button" className="button" aria-disabled="true" aria-label="Comprar 1 pacote, botão demonstrativo">Comprar ↗</button></div></article>
        <article className="offer"><div><span className="eyebrow">MAIS CUIDADO POR PERTO</span><h3>3 pacotes</h3><p>72 adesivos · R$ 33,00 por pacote.</p></div><div className="offer-purchase"><div className="price">R$ 99,00</div><button type="button" className="button" aria-disabled="true" aria-label="Comprar 3 pacotes, botão demonstrativo">Comprar ↗</button></div></article>
        <article className="offer subscription"><div><span className="eyebrow">POR ASSINATURA</span><h3>Cuidado que continua</h3><p>24 adesivos por pacote.</p></div><div className="offer-purchase"><div className="price">R$ 29,99<small>por pacote na assinatura</small></div><button type="button" className="button" aria-disabled="true" aria-label="Assinar, botão demonstrativo">Assinar ↗</button></div></article>
      </div>
      <p className="demo-note">Versão de visualização. Os botões de compra são demonstrativos e não realizam pedidos ou cobranças.</p>
    </section>
    <section className="sticker-section" id="adesivos"><div className="section-inner"><div className="section-heading"><div><span className="eyebrow">TROPICAL POP · OS DESENHOS</span><h2>Pequenos adesivos.<br /><i>Muita personalidade.</i></h2></div><p>Onça, flores, folhas e frutas.<br />Conheça de perto os desenhos da coleção.</p></div><div className="sticker-layout"><div className="sticker-guide-art"><img src="/images/brota/sticker-guide.webp" alt="Referência de nove desenhos: onça, flor, folha 1, melancia, banana, coração, limão, folha 2 e flor 2, com medidas sugeridas entre 8 e 12 milímetros" loading="lazy" /></div><div className="sticker-side"><div className="application-art"><img src="/images/brota/collection-details.webp" alt="Referência visual de adesivos de onça, flor e coração aplicados na pele" loading="lazy" /></div><span className="eyebrow">UM TOQUE DE COR</span><h3>Beleza real em<br />pequenos gestos.</h3><p>Uma coleção de desenhos tropicais para deixar o cuidado com a sua cara.</p><p className="reference-note">Formatos e medidas ilustrativos, sujeitos a ajustes na produção, conforme o material de referência.</p></div></div><details className="reference-board"><summary>Ver a cartela e os detalhes dos adesivos <span>+</span></summary><img src="/images/brota/sticker-guide.webp" alt="Prancha de referência completa com desenhos, cartela de 24 adesivos e dimensões sugeridas" loading="lazy" /></details></div></section>
    <section className="care" id="cuidado"><div className="section-inner care-grid"><div className="care-art"><Botanical className="care-botanical" /><Flower /><Brand /><p>pele bonita<br />todos os dias.</p><span className="care-label">COR NA ROTINA. CUIDADO POR PERTO.</span></div><div className="care-copy"><span className="eyebrow">BELEZA EM PEQUENOS GESTOS</span><h2>Um cuidado que<br />cabe na rotina.</h2><p>Para levar na bolsa, deixar por perto e usar conforme as orientações da embalagem. A Brota Beleza traz cor para esse pequeno momento de cuidado.</p><div className="facts"><div><strong>24</strong><span>adesivos por pacote</span></div><div><strong>5</strong><span>cores de embalagem</span></div><div><strong>Ácido<br />salicílico</strong><span>na composição</span></div></div><p className="care-note">Antes de aplicar, consulte as instruções, o tempo de uso e os cuidados indicados na embalagem.</p></div></div></section>
    <section className="faq section-inner" id="faq"><div><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Vamos conversar<br />sobre o cuidado?</h2><Flower /></div><div className="faq-list">{[
      ["Quantos adesivos vêm em cada pacote?", "Cada embalagem contém 24 adesivos, conforme indicado nos produtos da coleção."],
      ["Quais desenhos aparecem na coleção?", "A referência apresenta onça, flores, folhas, melancia, banana, coração e limão. Consulte a embalagem para os desenhos e a composição de cada cartela."],
      ["O produto contém ácido salicílico?", "Sim. As cinco embalagens informam ácido salicílico na composição. Consulte a embalagem para os detalhes da fórmula."],
      ["Como usar os adesivos?", "Siga as instruções de aplicação, o tempo de uso e as precauções indicadas na embalagem do produto."],
    ].map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
    <section className="closing"><Botanical className="closing-botanical" /><Flower /><p>Do seu jeito.<br /><i>Todos os dias.</i></p><a className="button" href="#colecao">Encontre sua cor ↗</a></section>
    <footer className="section-inner"><Brand /><p>Mais vida, menos espinha.</p><a href="#top">Voltar ao topo ↑</a></footer>
  </main>;
}
