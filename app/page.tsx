const variants = [
  { name: "Laranja Solar", className: "orange" },
  { name: "Rosa Tropical", className: "pink" },
  { name: "Bege Natural", className: "beige" },
  { name: "Lilás Floral", className: "lilac" },
  { name: "Verde Brasil", className: "green" },
];

const faqs = [
  "Quantos adesivos vêm em cada pacote?",
  "Posso usar durante o dia?",
  "Como aplicar o adesivo corretamente?",
  "Os formatos variam em cada pacote?",
];

function ProductPouch({ tone = "orange", compact = false }: { tone?: string; compact?: boolean }) {
  return (
    <div className={`pouch ${tone} ${compact ? "compact" : ""}`} aria-label="Embalagem Brota Beleza">
      <div className="pouch-hole" />
      <div className="pouch-flower">✦</div>
      <div className="pouch-copy">
        <span>pele bonita<br />todos os dias</span>
        <strong>brota<br />beleza!</strong>
        <small>adesivos secantes<br />de espinha<br />com ácido salicílico</small>
      </div>
      <div className="pouch-cat">◉ᴥ◉</div>
      <div className="pouch-bottom"><b>24</b><span>adesivos</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">FRETE GRÁTIS ACIMA DE R$ 149 • ENVIO PARA TODO O BRASIL</div>

      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Brota Beleza início">
          <span className="brand-mark">✦</span>
          <span>brota<br />beleza!</span>
        </a>
        <nav>
          <a href="#produto">Produto</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#como-usar">Como usar</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="cart" aria-label="Sacola">Sacola (0)</button>
      </header>

      <section id="top" className="product shell">
        <div className="gallery">
          <div className="thumbs" aria-label="Miniaturas da galeria">
            <button className="thumb active"><ProductPouch tone="orange" compact /></button>
            <button className="thumb"><span className="skin-thumb">♡</span></button>
            <button className="thumb"><span className="sheet-thumb">✿ ♥ ◒</span></button>
          </div>
          <div className="hero-media">
            <div className="media-badge">24 adesivos</div>
            <ProductPouch tone="orange" />
            <div className="media-caption">beleza real em pequenos gestos ♡</div>
          </div>
        </div>

        <div className="product-info" id="produto">
          <div className="eyebrow">ADESIVOS SECANTES DE ESPINHA</div>
          <h1>Brota Beleza!<br />Tropical Pop</h1>
          <div className="stars">★★★★★ <span>avaliações em breve</span></div>
          <p className="lead">Adesivos com ácido salicílico para uma rotina de cuidado prática, divertida e cheia de personalidade.</p>

          <div className="quick-benefits" id="beneficios">
            <span>Seca a espinha</span>
            <span>Protege e acalma</span>
            <span>Uso diurno e noturno</span>
          </div>

          <div className="selector">
            <div className="selector-head"><b>Escolha seu estilo</b><span>5 opções</span></div>
            <div className="variant-grid">
              {variants.map((variant) => (
                <button key={variant.name} className="variant">
                  <span className={`swatch ${variant.className}`} />
                  <small>{variant.name}</small>
                </button>
              ))}
            </div>
          </div>

          <div className="price-row">
            <div><span className="price-label">Preço</span><strong>R$ --,--</strong></div>
            <div className="qty"><button>-</button><span>1</span><button>+</button></div>
          </div>

          <button className="buy disabled" aria-disabled="true">COMPRAR AGORA <span>→</span></button>
          <p className="checkout-note">Checkout será conectado na próxima etapa.</p>

          <div className="trust-row">
            <span>✓ 24 adesivos</span>
            <span>✓ Com ácido salicílico</span>
            <span>✓ Designs colecionáveis</span>
          </div>
        </div>
      </section>

      <section className="editorial">
        <div className="shell editorial-grid">
          <div>
            <div className="eyebrow">PEQUENOS CUIDADOS, GRANDES DIAS</div>
            <h2>Um adesivo que cuida<br />sem esconder sua personalidade.</h2>
          </div>
          <p>Uma proposta de skincare prática para transformar o cuidado pontual com espinhas em um gesto simples da rotina.</p>
        </div>
      </section>

      <section className="benefit-strip shell">
        <div><b>01</b><strong>Seca a espinha</strong><span>Aplicação simples e localizada.</span></div>
        <div><b>02</b><strong>Protege</strong><span>Cria uma barreira sobre a área aplicada.</span></div>
        <div><b>03</b><strong>Dia ou noite</strong><span>Use no momento que fizer sentido para sua rotina.</span></div>
        <div><b>04</b><strong>Tem estilo</strong><span>Formatos tropicais, divertidos e colecionáveis.</span></div>
      </section>

      <section className="how shell" id="como-usar">
        <div className="section-heading">
          <span className="eyebrow">COMO USAR</span>
          <h2>Três passos. Zero complicação.</h2>
        </div>
        <div className="steps">
          <article><span className="step-number">1</span><div className="step-visual clean">✧</div><h3>Limpe e seque</h3><p>A pele deve estar limpa e seca antes da aplicação.</p></article>
          <article><span className="step-number">2</span><div className="step-visual patch">◉ᴥ◉</div><h3>Aplique</h3><p>Posicione o adesivo diretamente sobre a área desejada.</p></article>
          <article><span className="step-number">3</span><div className="step-visual remove">♡</div><h3>Deixe agir</h3><p>Use conforme a orientação final da embalagem do produto.</p></article>
        </div>
      </section>

      <section className="designs">
        <div className="shell designs-grid">
          <div className="design-copy">
            <span className="eyebrow">TROPICAL POP</span>
            <h2>Designs que você vai querer usar.</h2>
            <p>Onça, flor, folhas, melancia, banana, coração e limão em uma estética brasileira e divertida.</p>
          </div>
          <div className="stickers" aria-label="Exemplos de formatos de adesivos">
            <span>🐆</span><span>✿</span><span>☘</span><span>🍉</span><span>🍌</span><span>♥</span><span>🍋</span>
          </div>
        </div>
      </section>

      <section className="ingredient shell">
        <div className="ingredient-art"><div className="serum-drop one"/><div className="serum-drop two"/><div className="serum-drop three"/></div>
        <div className="ingredient-copy">
          <span className="eyebrow">ATIVO EM DESTAQUE</span>
          <h2>Com ácido salicílico.</h2>
          <p>Vamos usar aqui apenas as alegações e orientações finais aprovadas para a fórmula do produto. Esta seção já está pronta para receber o texto técnico definitivo.</p>
          <ul><li>Aplicação localizada</li><li>Rotina simples</li><li>Formato discreto e confortável</li></ul>
        </div>
      </section>

      <section className="variants shell">
        <div className="section-heading"><span className="eyebrow">ESCOLHA O SEU ESTILO</span><h2>Cinco cores. Uma mesma atitude.</h2></div>
        <div className="variant-cards">
          {variants.map((variant) => (
            <article key={variant.name}><ProductPouch tone={variant.className} compact /><h3>{variant.name}</h3></article>
          ))}
        </div>
      </section>

      <section className="faq shell" id="faq">
        <div><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Antes de brotar,<br />tire suas dúvidas.</h2></div>
        <div className="faq-list">
          {faqs.map((faq) => <details key={faq}><summary>{faq}<span>+</span></summary><p>Resposta será preenchida com a orientação oficial do produto.</p></details>)}
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-grid">
          <div><span className="eyebrow light">BROTA BELEZA!</span><h2>Mais vida.<br />Menos espinha.</h2><p>O botão de compra será ativado quando definirmos o checkout.</p></div>
          <button className="buy light-button disabled" aria-disabled="true">QUERO EXPERIMENTAR <span>→</span></button>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><span className="brand-mark">✦</span><span>brota<br />beleza!</span></a>
        <p>beleza real em pequenos gestos ♡</p>
        <div><a href="#">Política de Privacidade</a><a href="#">Termos de Uso</a><a href="mailto:contato@brotabeleza.com.br">Contato</a></div>
      </footer>
    </main>
  );
}
