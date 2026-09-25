const variants = [
  { name: "Laranja Solar", tone: "#ef6f2f", caption: "Energia e atitude." },
  { name: "Rosa Tropical", tone: "#e69a9c", caption: "Delicada e vibrante." },
  { name: "Bege Natural", tone: "#c9c39d", caption: "Leve e atemporal." },
  { name: "Lilás Floral", tone: "#a889bd", caption: "Moderna e divertida." },
  { name: "Verde Brasil", tone: "#0d4d36", caption: "Autêntica e marcante." },
];

const stickerSpecs = [
  { symbol: "🐆", size: "12 mm", label: "Onça" },
  { symbol: "✿", size: "10 mm", label: "Flor" },
  { symbol: "☘", size: "10 mm", label: "Folha" },
  { symbol: "🍉", size: "12 mm", label: "Melancia" },
  { symbol: "🍌", size: "12 mm", label: "Banana" },
  { symbol: "♥", size: "8 mm", label: "Coração" },
  { symbol: "🍋", size: "10 mm", label: "Limão" },
];

const faqs = [
  {
    q: "Quantos adesivos vêm em cada pacote?",
    a: "Cada pacote da linha Tropical Pop foi apresentado com 24 adesivos. A configuração final da embalagem deve seguir o lote aprovado para venda.",
  },
  {
    q: "Posso usar durante o dia e à noite?",
    a: "A proposta da linha é permitir uso diurno e noturno. As instruções finais de tempo de uso serão exibidas conforme a orientação definitiva da embalagem.",
  },
  {
    q: "Como aplicar?",
    a: "Aplique sobre a pele limpa e seca, diretamente na área desejada. Evite cremes ou oleosidade na região antes da aplicação para favorecer a aderência.",
  },
  {
    q: "Os desenhos são sempre os mesmos?",
    a: "Os formatos podem variar por folha e por versão. A linha foi desenvolvida com desenhos tropicais e colecionáveis.",
  },
  {
    q: "Qual é o tamanho dos adesivos?",
    a: "A referência visual atual trabalha com formatos entre aproximadamente 8 mm e 12 mm. A medida final deve acompanhar a especificação técnica do produto fabricado.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Brota Beleza - início">
      <span className="brand-rays" aria-hidden="true">✦</span>
      <span className="brand-name">brota<br />beleza!</span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="announcement">
        <span>BROTA BELEZA!</span>
        <span className="announcement-dot">•</span>
        <span>BELEZA REAL EM PEQUENOS GESTOS</span>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav aria-label="Navegação principal">
            <a href="#produto">Produto</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#como-usar">Como usar</a>
            <a href="#ingrediente">Ingrediente</a>
            <a href="#faq">FAQ</a>
          </nav>
          <button className="header-cta" type="button" aria-disabled="true">
            Comprar
          </button>
        </div>
      </header>

      <section className="product-shell" id="produto">
        <div className="product-gallery">
          <figure className="gallery-card gallery-main">
            <img src="/images/brota/hero-pouch.webp" alt="Embalagem laranja Brota Beleza Tropical Pop" />
            <figcaption>24 adesivos • Tropical Pop</figcaption>
          </figure>

          <figure className="gallery-card">
            <div className="gallery-brand-card">
              <span className="mini-script">beleza real<br />em pequenos gestos ♡</span>
              <strong>PELE BONITA<br />TODOS OS DIAS</strong>
            </div>
          </figure>

          <figure className="gallery-card gallery-wide">
            <img src="/images/brota/display-box.webp" alt="Display com embalagens Brota Beleza" />
          </figure>

          <figure className="gallery-card gallery-wide collection-card">
            <div className="mini-pouch-row" aria-label="Cinco versões de embalagem Brota Beleza">
              {variants.map((variant) => (
                <div className="mini-pouch" key={variant.name} style={{ background: variant.tone }}>
                  <span>24</span>
                  <b>brota<br />beleza!</b>
                  <small>{variant.name}</small>
                </div>
              ))}
            </div>
          </figure>
        </div>

        <aside className="product-panel">
          <div className="product-kicker">CAMINHO 1 · TROPICAL POP</div>
          <h1>Adesivos secantes de espinha com ácido salicílico</h1>
          <p className="product-subtitle">Pele bonita todos os dias — com um cuidado pequeno, prático e cheio de personalidade.</p>

          <div className="rating-placeholder">
            <span className="stars">★★★★★</span>
            <span>Avaliações em breve</span>
          </div>

          <div className="hero-benefits">
            <div><span>01</span><strong>Seca a espinha</strong></div>
            <div><span>02</span><strong>Protege e acalma</strong></div>
            <div><span>03</span><strong>Uso diurno e noturno</strong></div>
          </div>

          <div className="option-block">
            <div className="option-head">
              <strong>Escolha seu estilo</strong>
              <span>5 cores</span>
            </div>
            <div className="color-options">
              {variants.map((variant, index) => (
                <button className={`color-choice ${index === 0 ? "active" : ""}`} key={variant.name} type="button" aria-label={variant.name}>
                  <span style={{ background: variant.tone }} />
                  <small>{variant.name}</small>
                </button>
              ))}
            </div>
          </div>

          <div className="price-box">
            <div>
              <small>Preço</small>
              <strong>R$ --,--</strong>
            </div>
            <span>24 adesivos</span>
          </div>

          <button className="buy-button" type="button" aria-disabled="true">
            COMPRAR AGORA
            <span>→</span>
          </button>
          <p className="checkout-note">Checkout será conectado após a aprovação visual da página.</p>

          <div className="mini-trust">
            <span>✓ Designs exclusivos</span>
            <span>✓ Fácil de aplicar</span>
            <span>✓ Formatos colecionáveis</span>
          </div>
        </aside>
      </section>

      <section className="benefit-band" id="beneficios">
        <div className="section-inner benefit-grid">
          <div className="benefit-title">
            <span className="eyebrow">PEQUENO NO TAMANHO</span>
            <h2>Grande no cuidado.</h2>
          </div>
          <div className="benefit-point">
            <span className="benefit-icon">◌</span>
            <strong>Cuidado localizado</strong>
            <p>Um gesto simples para incluir na rotina quando uma espinha resolve aparecer.</p>
          </div>
          <div className="benefit-point">
            <span className="benefit-icon">◇</span>
            <strong>Proteção no dia a dia</strong>
            <p>O adesivo cria uma cobertura física sobre a área aplicada.</p>
          </div>
          <div className="benefit-point">
            <span className="benefit-icon">♡</span>
            <strong>Design que vira acessório</strong>
            <p>Onça, flor, folhas, frutas e corações transformam o cuidado em parte do look.</p>
          </div>
        </div>
      </section>

      <section className="content-section how-use" id="como-usar">
        <div className="section-inner">
          <div className="section-heading centered">
            <span className="eyebrow">COMO USAR</span>
            <h2>Três passos. Sem complicação.</h2>
          </div>
          <div className="steps-grid">
            <article>
              <div className="step-photo soft-bg"><span>01</span><b>✧</b></div>
              <h3>Prepare a pele</h3>
              <p>Limpe a região e deixe a pele completamente seca antes de aplicar.</p>
            </article>
            <article>
              <div className="step-photo patch-bg"><span>02</span><b className="patch-symbol">✿</b></div>
              <h3>Aplique o adesivo</h3>
              <p>Posicione o desenho diretamente sobre a área desejada e pressione suavemente.</p>
            </article>
            <article>
              <div className="step-photo warm-bg"><span>03</span><b>♡</b></div>
              <h3>Deixe agir</h3>
              <p>Use pelo período indicado na embalagem final e remova delicadamente.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="ingredient-section" id="ingrediente">
        <div className="section-inner split-section">
          <div className="ingredient-visual ingredient-art">
            <div className="ingredient-bubble large">SA</div>
            <div className="ingredient-bubble small-one">✦</div>
            <div className="ingredient-bubble small-two">◌</div>
            <span>ÁCIDO<br />SALICÍLICO</span>
          </div>
          <div className="split-copy">
            <span className="eyebrow">ATIVO EM DESTAQUE</span>
            <h2>Com ácido salicílico.</h2>
            <p>O produto foi concebido para um cuidado pontual e prático. Nesta página, as alegações técnicas finais serão ajustadas para refletir exatamente a fórmula e a documentação do produto aprovado.</p>
            <ul>
              <li>Aplicação localizada</li>
              <li>Uso simples na rotina</li>
              <li>Adesivos com recorte rente ao desenho</li>
              <li>Design tropical e colecionável</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="box-content">
        <div className="section-inner box-grid">
          <div className="box-copy">
            <span className="eyebrow">O QUE VEM NO PACOTE</span>
            <h2>24 adesivos.<br />Vários jeitos de usar.</h2>
            <p>A linha combina formatos entre aproximadamente 8 mm e 12 mm, com variações como onça, flor, folha, melancia, banana, coração e limão.</p>
          </div>
          <div className="technical-card" aria-label="Guia visual de formatos e dimensões dos adesivos Brota Beleza">
            <div className="sticker-specs">
              {stickerSpecs.map((sticker) => (
                <div className="sticker-spec" key={sticker.label}>
                  <span className="spec-symbol">{sticker.symbol}</span>
                  <strong>{sticker.size}</strong>
                  <small>{sticker.label}</small>
                </div>
              ))}
            </div>
            <p className="spec-note">Referência visual de tamanhos. As medidas finais seguem a especificação técnica do produto.</p>
          </div>
        </div>
      </section>

      <section className="story-grid section-inner">
        <article className="story-card dark-story">
          <div className="story-copy">
            <span className="eyebrow light">NÃO PRECISA ESCONDER</span>
            <h2>Espinha a gente também descomplica.</h2>
            <p>O adesivo vira parte da rotina — e o design deixa o cuidado mais leve.</p>
          </div>
          <div className="sticker-symbols" aria-label="Exemplos de desenhos"><span>🐆</span><span>✿</span><span>♥</span><span>🍉</span><span>🍋</span></div>
        </article>

        <article className="story-card photo-story">
          <img src="/images/brota/display-box.webp" alt="Display Brota Beleza Tropical Pop" />
          <div className="story-copy">
            <span className="eyebrow">BELEZA REAL</span>
            <h2>Um pequeno gesto que cabe no seu dia.</h2>
          </div>
        </article>
      </section>

      <section className="variants-section">
        <div className="section-inner">
          <div className="section-heading">
            <span className="eyebrow">ESCOLHA O SEU ESTILO</span>
            <h2>Cinco cores. Uma mesma atitude.</h2>
          </div>
          <div className="collection-showcase" aria-label="Coleção Tropical Pop Brota Beleza com cinco cores">
            {variants.map((variant) => (
              <div className="collection-pouch" key={variant.name} style={{ background: variant.tone }}>
                <span className="collection-count">24</span>
                <strong>brota<br />beleza!</strong>
                <small>adesivos secantes<br />de espinha</small>
              </div>
            ))}
          </div>
          <div className="variant-labels">
            {variants.map((variant) => (
              <div key={variant.name}>
                <span style={{ background: variant.tone }} />
                <strong>{variant.name}</strong>
                <small>{variant.caption}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-inner faq-grid">
          <div className="faq-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Dúvidas frequentes.</h2>
            <p>Conteúdo técnico e comercial pode ser atualizado antes da publicação final.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}<span>+</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="section-inner final-inner">
          <div>
            <span className="eyebrow light">BROTA BELEZA!</span>
            <h2>Mais vida.<br />Menos espinha.</h2>
            <p>Checkout e Pixel entram na etapa final, sem precisar refazer o layout.</p>
          </div>
          <button className="final-button" type="button" aria-disabled="true">QUERO EXPERIMENTAR <span>→</span></button>
        </div>
      </section>

      <footer className="footer">
        <div className="section-inner footer-inner">
          <Brand />
          <p className="footer-script">beleza real em pequenos gestos ♡</p>
          <div className="footer-links">
            <a href="#produto">Produto</a>
            <a href="#como-usar">Como usar</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
