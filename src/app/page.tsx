export default function Home() {
  return (
    <>
      {/* ── Header ── */}
      <header className="site-header">
        <div className="container">
          <div className="brand">
            Agsikapin<span>Kapé</span>
          </div>
          <nav>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#catering">Catering</a>
            <a href="#visit">Visit</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/photos/agsi.jpg"
            className="hero-video"
          >
            <source src="/photos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="container">
          <span className="hero-tag">Binangonan, Rizal</span>
          <h1>
            Agsikapin<span className="accent"> Kapé</span>
          </h1>
          <p className="hero-sub">
            A cozy spot where good food, fresh coffee, and warm
            conversations come together. Come — you&apos;re family here,
            Kasikap.
          </p>
          <a href="#visit" className="hero-cta">
            Find Us &nbsp;→
          </a>
          <p className="hero-contact-line">
            ✆&nbsp;{" "}
                        <a href="tel:+639690817173">+63 969 081 7173</a>
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-title">
            <h2>More Than Just a Cafe</h2>
            <div className="underline" />
            <p>
              Every visit feels like a compliment — that&apos;s what Agsikapin
              means to us.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h3>Welcome, Kasikap 👋</h3>
              <p>
                Agsikapin Kapé is a cozy neighborhood cafe tucked along T.
                Cenidoza Street in Mambog, Binangonan, Rizal. Whether
                you&apos;re stopping by for a silog meal, a fresh brew, a
                sandwich, or a slice of cake — there&apos;s always a warm seat
                waiting for you.
              </p>
              <p>
                We brew premium local and international coffee beans, serve
                comforting rice and silog meals, and take pride in everything
                made with care. Sushi lovers — we also take pre-orders for
                freshly prepared sushi sets, perfect for sharing or
                celebrations.
              </p>
              <p>
                New face today, suki tomorrow? We like the sound of that.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/photos/agsikapin.jpg"
                alt="Agsikapin Kapé restaurant interior"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Menu Preview ── */}
      <section className="section section-alt" id="menu">
        <div className="container">
          <div className="section-title">
            <h2>What We Serve</h2>
            <div className="underline" />
            <p>
              From morning coffee to sushi pre-orders — something for every
              craving.
            </p>
          </div>
          <div className="menu-grid">
            <div className="menu-card">
              <div className="menu-card-img">
                <img src="/photos/agsi2.jpg" alt="Fresh brewed coffee" className="menu-card-img-el" />
              </div>
              <div className="icon">☕</div>
              <h3>Fresh Brewed Coffee</h3>
              <p>
                Premium local &amp; international beans, brewed to bring out
                the best in every cup. Your go-to coffee place.
              </p>
              <span className="tag">Local &amp; Imported Beans</span>
            </div>

            <div className="menu-card">
              <div className="menu-card-img">
                <img src="/photos/agsi4.jpg" alt="Silog meals" className="menu-card-img-el" />
              </div>
              <div className="icon">🍳</div>
              <h3>Silog Meals</h3>
              <p>
                Classic Filipino silog combos — savory, garlicky, and paired
                perfectly with a hot cup of coffee.
              </p>
              <span className="tag">Comfort Food</span>
            </div>

            <div className="menu-card">
              <div className="menu-card-img">
                <img src="/photos/agsi4.jpg" alt="Rice meals" className="menu-card-img-el" />
              </div>
              <div className="icon">🍚</div>
              <h3>Rice Meals</h3>
              <p>
                Hearty rice-based meals made with care — a satisfying choice
                for lunch or a quiet afternoon bite.
              </p>
              <span className="tag">Hearty &amp; Homemade</span>
            </div>

            <div className="menu-card">
              <div className="menu-card-img">
                <img src="/photos/agsi5.jpg" alt="Snacks and sandwiches" className="menu-card-img-el" />
              </div>
              <div className="icon">🥪</div>
              <h3>Snacks &amp; Sandwiches</h3>
              <p>
                Quick bites and satisfying sandwiches — perfect for a light
                meal or an afternoon snack.
              </p>
              <span className="tag">Quick Bites</span>
            </div>

            <div className="menu-card">
              <div className="menu-card-img">
                <img src="/photos/agsi6.jpg" alt="Cakes and sweets" className="menu-card-img-el" />
              </div>
              <div className="icon">🍰</div>
              <h3>Cakes &amp; Sweets</h3>
              <p>
                Sweet endings and cafe treats — ideal with your coffee or as a
                little something special.
              </p>
              <span className="tag">Desserts</span>
            </div>

            <div className="menu-card">
              <div className="menu-card-img">
                <img src="/photos/agsi3.jpg" alt="Sushi pre-orders" className="menu-card-img-el" />
              </div>
              <div className="icon">🍣</div>
              <h3>Sushi Pre-Orders</h3>
              <p>
                Freshly made sushi sets for sharing, celebrations, or simply
                satisfying your sushi cravings. Message us to reserve.
              </p>
              <span className="tag">Pre-Order Only</span>
            </div>
          </div>

          {/* ── Catering Section ── */}
          <section className="section section-alt" id="catering">
            <div className="container">
              <div className="section-title">
                <h2>Party Trays &amp; Catering</h2>
                <div className="underline" />
                <p>
                  Feed the whole crew — from office parties to family 축하.
                </p>
              </div>
              <div className="catering-grid">
                <div className="catering-image">
                  <img
                    src="/photos/agsi1.jpg"
                    alt="Party tray catering"
                    className="catering-img"
                  />
                </div>
                <div className="catering-info">
                  <h3>Made for sharing</h3>
                  <p>
                    Our party trays come in three sizes — perfect for birthdays,
                    fiestas, office events, or just a weekend at home with the
                    whole family.
                  </p>
                  <div className="catering-options">
                    <div className="catering-option">
                      <h4>Small Tray</h4>
                      <p>4–6 people · ₱850</p>
                    </div>
                    <div className="catering-option">
                      <h4>Medium Tray</h4>
                      <p>8–10 people · ₱1,400</p>
                    </div>
                    <div className="catering-option">
                      <h4>Large Tray</h4>
                      <p>12–15 people · ₱2,200</p>
                    </div>
                  </div>
                  <a href="https://www.facebook.com/agsikapinkape/messages/" className="hero-cta" style={{ backgroundColor: 'var(--brown-700)', color: 'var(--cream-50)' }}>
                    Order via Messenger &nbsp;→
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ── Visit / Contact ── */}
      <section className="section" id="visit">
        <div className="container">
          <div className="section-title">
            <h2>Visit Us</h2>
            <div className="underline" />
            <p>Your cozy corner in Mambog is just a message or a visit away.</p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>
                <span className="icon">📍</span> Location
              </h3>
              <div className="info-row">
                <span className="label">Address</span>
                <span>
                  T. Cenidoza St., Mambog<br />
                  Binangonan, Rizal<br />
                  Philippines 1940
                </span>
              </div>
              <div className="info-row">
                <span className="label">Facebook</span>
                <a
                  href="https://www.facebook.com/agsikapinkape"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agsikapin Kapé
                </a>
              </div>
              <div className="info-row">
                <span className="label">Events</span>
                <span>
                  Stall B14, Plaza del Pilar<br />
                  (inside parking area near Fort Pilar)
                </span>
              </div>
            </div>

            <div className="info-card">
              <h3>
                <span className="icon">📞</span> Contact &amp; Hours
              </h3>
              <div className="info-row">
                <span className="label">Phone</span>
                <a href="tel:+639690817173">+63 969 081 7173</a>
              </div>
              <div className="info-row">
                <span className="label">Hours</span>
                <span>Open daily from 11:00 AM</span>
              </div>
              <table className="hours-table">
                <tr>
                  <td>Monday – Sunday</td>
                  <td>11:00 AM – Late</td>
                </tr>
                <tr>
                  <td>Sushi Pre-Orders</td>
                  <td>Message us to reserve</td>
                </tr>
                <tr>
                  <td>Events / Sweet Corner</td>
                  <td>DM to book</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container">
          <div className="social-links">
            <a
              href="https://www.facebook.com/agsikapinkape"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/agsikapinkape"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="divider" />
          <p>
            Agsikapin Kapé &nbsp;·&nbsp; T. Cenidoza St., Mambog,
            Binangonan, Rizal 1940
          </p>
          <p style={{ marginTop: 6, opacity: 0.6 }}>
            ☕ Made with care for every Kasikap.
          </p>
        </div>
      </footer>
    </>
  );
}
