const variants = [
  { name: "Laranja Solar", tone: "#ef6f2f", caption: "Energia e atitude." },
  { name: "Rosa Tropical", tone: "#efa09f", caption: "Delicada e vibrante." },
  { name: "Bege Natural", tone: "#d7d0a9", caption: "Leve e atemporal." },
  { name: "Lilás Floral", tone: "#b59acd", caption: "Moderna e divertida." },
  { name: "Verde Brasil", tone: "#0d4d36", caption: "Autêntica e marcante." },
];

const benefits = [
  { icon: "◜", title: "Seca a espinha" },
  { icon: "✦", title: "Protege e acalma" },
  { icon: "☼", title: "Uso diurno e noturno" },
  { icon: "♢", title: "Com ácido salicílico" },
  { icon: "♡", title: "Designs exclusivos" },
];

const specs = [
  { icon: "🐆", label: "Onça", w: "11 mm", h: "10 mm" },
  { icon: "✿", label: "Flor", w: "10 mm", h: "10 mm" },
  { icon: "☘", label: "Folha 1", w: "9 mm", h: "11 mm" },
  { icon: "🍉", label: "Melancia", w: "12 mm", h: "9 mm" },
  { icon: "🍌", label: "Banana", w: "12 mm", h: "10 mm" },
  { icon: "♥", label: "Coração", w: "9 mm", h: "8 mm" },
  { icon: "🍋", label: "Limão", w: "8 mm", h: "12 mm" },
  { icon: "🌿", label: "Folha 2", w: "8 mm", h: "12 mm" },
  { icon: "🌸", label: "Flor 2", w: "8 mm", h: "8 mm" },
];

const faqs = [
  {
    q: "Quantos adesivos vêm em cada pacote?",
    a: "Cada pacote da linha Tropical Pop contém 24 adesivos variados.",
  },
  {
    q: "Posso usar durante o dia e à noite?",
    a: "A proposta da linha é permitir uso diurno e noturno, conforme as instruções finais da embalagem.",
  },
  {
    q: "Como aplicar?",
    a: "Com a pele limpa e seca, aplique o adesivo diretamente sobre a área desejada e pressione suavemente.",
  },
  {
    q: "Os formatos variam?",
    a: "Sim. A coleção trabalha com desenhos tropicais variados e colecionáveis.",
  },
  {
    q: "Qual é o tamanho dos adesivos?",
    a: "A referência visual trabalha com formatos entre aproximadamente 8 mm e 12 mm.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Brota Beleza início">
      <span className="brand-rays" aria-hidden="true">✦</span>
      <span className="brand-name">brota<br />beleza!</span>
    </a>
  );
}

function MiniPouch({ tone, name }: { tone: string; name: string }) {
  const darkText = name === "Rosa Tropical" || name === "Bege Natural" || name === "Lilás Floral";
  return (
    <div className={`mini-pack ${darkText ? "dark-copy" : ""}`} style={{ background: tone }}>
      <span className="pack-slot" />
      <small>pele bonita<br />todos os dias</small>
      <strong>brota<br />beleza!</strong>
      <em>24</em>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="topbar">
        <span>🚚 FRETE GRÁTIS acima de R$ 99</span>
        <span>PEQUENOS CUIDADOS, GRANDES DIAS ♡</span>
        <span>★ PRODUTOS ORIGINAIS</span>
        <span>▣ COMPRA SEGURA</span>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav aria-label="Navegação principal">
            <a href="#produto">Todos os produtos</a>
            <a href="#adesivos">Adesivos</a>
            <a href="#historia">Nossa história</a>
            <a href="#como-usar">Dicas de cuidado</a>
            <a href="#faq">Blog</a>
          </nav>
          <div className="header-actions" aria-label="Atalhos">
            <span>⌕</span>
            <span>♙</span>
            <span className="bag">▢<b>0</b></span>
          </div>
        </div>
      </header>

      <section className="hero section-inner" id="produto">
        <div className="hero-gallery">
          <div className="thumb-rail">
            <button className="thumb active" type="button">
              <img src="/images/brota/hero-pouch.webp" alt="Embalagem Brota Beleza" />
            </button>
            <button className="thumb sticker-thumb" type="button" aria-label="Adesivos tropicais">
              <span>🐆 ✿</span><span>☘ ♥</span><span>🍉 🍌</span>
            </button>
            <button className="thumb skin-thumb" type="button" aria-label="Adesivo aplicado">
              <span>🐆</span>
            </button>
            <button className="thumb skin-thumb flower" type="button" aria-label="Adesivo floral aplicado">
              <span>✿</span>
            </button>
          </div>

          <div className="hero-stage">
            <div className="leaf leaf-one" />
            <div className="leaf leaf-two" />
            <div className="leaf leaf-three" />
            <span className="hero-flower flower-one">✿</span>
            <span className="hero-flower flower-two">✿</span>
            <img src="/images/brota/hero-pouch.webp" alt="Brota Beleza Tropical Pop laranja" />
            <p>beleza real<br />em pequenos gestos ♡</p>
            <button className="gallery-arrow left" type="button" aria-label="Imagem anterior">‹</button>
            <button className="gallery-arrow right" type="button" aria-label="Próxima imagem">›</button>
          </div>
        </div>

        <aside className="product-panel" id="adesivos">
          <div className="rating"><span>★★★★★</span><b>4,9</b><small>(avaliações em breve)</small></div>
          <h1>Adesivos secantes de espinha com ácido salicílico</h1>
          <p className="subcopy">Mais vida, menos espinha. Cuidados que se adaptam à sua rotina, com muito mais cor.</p>

          <div className="benefit-icons">
            {benefits.map((item) => (
              <div key={item.title}>
                <span>{item.icon}</span>
                <small>{item.title}</small>
              </div>
            ))}
          </div>

          <div className="variant-title">ESCOLHA SUA VERSÃO</div>
          <div className="variant-picker">
            {variants.map((variant, i) => (
              <button key={variant.name} className={i === 0 ? "selected" : ""} type="button">
                <MiniPouch tone={variant.tone} name={variant.name} />
                <strong>{variant.name}</strong>
                <small>{variant.caption}</small>
              </button>
            ))}
          </div>

          <div className="purchase-row">
            <div className="qty"><button type="button">−</button><span>1</span><button type="button">+</button></div>
            <button className="cart-button" type="button" aria-disabled="true">▣ ADICIONAR AO CARRINHO</button>
          </div>

          <div className="purchase-trust">
            <div><span>🚚</span><small>Frete grátis<br />acima de R$ 99</small></div>
            <div><span>▤</span><small>Pagamento seguro<br />e parcelado</small></div>
            <div><span>🎁</span><small>Embalagem linda<br />para presentear</small></div>
          </div>
        </aside>
      </section>

      <section className="showcase section-inner" id="historia">
        <article className="show-card versions-card">
          <div className="card-copy">
            <span>COLEÇÃO TROPICAL POP</span>
            <h2>5 versões para todos os seus dias</h2>
          </div>
          <div className="pack-row">
            {variants.map((variant) => <MiniPouch key={variant.name} tone={variant.tone} name={variant.name} />)}
          </div>
        </article>

        <article className="show-card display-card">
          <div className="card-copy">
            <span>DISPLAY PDV</span>
            <h2>Pequenos cuidados, grandes dias ♡</h2>
          </div>
          <img src="/images/brota/display-box.webp" alt="Display Brota Beleza" />
        </article>

        <article className="show-card pocket-card">
          <div className="card-copy script-card">
            <span>Fácil de levar</span>
            <h2>sempre com você</h2>
          </div>
          <div className="pocket-scene">
            <span className="mini-flower">✿</span>
            <img src="/images/brota/hero-pouch.webp" alt="Brota Beleza para levar com você" />
          </div>
        </article>

        <article className="show-card designs-card">
          <div className="card-copy script-card">
            <span>Designs exclusivos</span>
            <h2>e colecionáveis</h2>
          </div>
          <div className="sticker-cloud">
            <span>🐆</span><span>✿</span><span>☘</span><span>♥</span><span>🍉</span><span>🍌</span><span>🍋</span><span>🌿</span>
          </div>
        </article>
      </section>

      <section className="sizes section-inner">
        <div className="sizes-heading">
          <div>
            <span className="eyebrow">FORMATOS E DIMENSÕES</span>
            <h2>7 designs exclusivos!</h2>
          </div>
          <p>Escala real sugerida entre 8 mm e 12 mm, com recorte rente ao desenho.</p>
        </div>

        <div className="sizes-layout">
          <div className="spec-grid">
            {specs.map((item) => (
              <article key={item.label}>
                <small>{item.label}</small>
                <span>{item.icon}</span>
                <div><b>{item.w}</b><em>×</em><b>{item.h}</b></div>
              </article>
            ))}
          </div>

          <aside className="tech-card">
            <h3>Especificações técnicas</h3>
            <ul>
              <li>Tamanhos entre 8 mm e 12 mm</li>
              <li>Recorte rente ao desenho, sem borda branca</li>
              <li>Cores chapadas, sem degradê</li>
              <li>Formatos simples e ergonômicos</li>
              <li>Material conforme viabilidade técnica do fabricante</li>
            </ul>
            <div className="important"><b>!</b><p>As dimensões e formatos podem ser ajustados conforme a viabilidade técnica do fabricante.</p></div>
          </aside>
        </div>
      </section>

      <section className="how section-inner" id="como-usar">
        <div className="how-head">
          <span className="eyebrow">COMO USAR</span>
          <h2>É muito simples!</h2>
        </div>
        <div className="steps">
          <article>
            <span className="step-number">1</span>
            <div className="skin-scene"><b>♥</b></div>
            <p>Com a pele limpa e seca, cole o adesivo sobre a espinha.</p>
          </article>
          <article>
            <span className="step-number">2</span>
            <div className="skin-scene flower"><b>✿</b></div>
            <p>Deixe agir durante o dia ou enquanto dorme.</p>
          </article>
          <article>
            <span className="step-number">3</span>
            <div className="skin-scene jaguar"><b>🐆</b></div>
            <p>Retire com cuidado seguindo a orientação final da embalagem.</p>
          </article>
          <aside className="results-card">
            <h3>Pequenos cuidados,<br />grandes gestos</h3>
            <ul>
              <li>Ajuda a cuidar da área</li>
              <li>Protege contra impurezas</li>
              <li>Uso prático no dia a dia</li>
              <li>Discreto e confortável</li>
              <li>Mais cor na sua rotina</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="faq-wrap">
        <div className="section-inner faq-grid" id="faq">
          <div>
            <span className="eyebrow">DÚVIDAS FREQUENTES</span>
            <h2>Antes de brotar, tire suas dúvidas.</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}<span>+</span></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="final-banner">
            <div className="final-leaf leaf-one" />
            <div className="final-leaf leaf-two" />
            <span className="final-flower">✿</span>
            <p>Pequenos cuidados,<br />grandes dias ♡</p>
            <Brand />
            <small>ADESIVOS SECANTES DE ESPINHA<br />COM ÁCIDO SALICÍLICO</small>
            <div className="final-icons">
              {benefits.map((item) => <span key={item.title}>{item.icon}</span>)}
            </div>
            <button type="button" aria-disabled="true">GARANTIR O MEU AGORA →</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-inner footer-inner">
          <Brand />
          <p>beleza real em pequenos gestos ♡</p>
          <div>
            <a href="#produto">Produto</a>
            <a href="#faq">FAQ</a>
            <a href="mailto:contato@brotabeleza.com.br">Contato</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
