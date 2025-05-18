import React, { useState } from "react";
import "./App.css";

// Inline SVG fallback for logo
const TradejiniLogo = () => (
  <svg width="149" height="36" viewBox="0 0 149 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 36 }}>
    <rect width="36" height="36" rx="9" fill="#33a38b" />
    <text x="20" y="24" fontSize="18" fill="#fbfbfb" fontWeight="bold">TJ</text>
    <text x="48" y="25" fontSize="23" fill="#0d1a1d" fontWeight="bold">TRADEJINI</text>
  </svg>
);

// Inline SVG user icon for testimonials
const UserIcon = () => (
  <svg width="49" height="49" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#edf8f6"/>
    <ellipse cx="20" cy="16" rx="7" ry="7.5" fill="#cad0d1"/>
    <ellipse cx="20" cy="32" rx="12" ry="8" fill="#cad0d1"/>
  </svg>
);

const productTabs = [
  {
    key: "cubeplus",
    title: "CubePlus",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=360&q=80",
    desc:
      "Our all-in-one trading platform designed for seamless multi-leg option strategies, stock trading, and more. With advanced charting, real-time data, and smart order execution, CubePlus Web is perfect for both beginner and seasoned traders.",
    btnText: "Try CubePlus Now",
    btnLink: "#"
  },
  {
    key: "mobile",
    title: "CubePlus Mobile",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=360&q=80",
    desc:
      "Take your trading on the go with CubePlus Mobile. Manage your trades, analyze positions, and execute orders from anywhere with a simple, intuitive mobile interface.",
    btnText: "Download the App",
    btnLink: "#"
  },
  {
    key: "api",
    title: "CubePlus API",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=360&q=80",
    desc:
      "Trading app specially built for India's F&O traders, packed with Advanced Option Chain, Auto Slicing, Screeners, & much more! Build and execute strategies on the go with just a few taps.",
    btnText: "Start Building",
    btnLink: "#"
  },
  {
    key: "nxtoption",
    title: "NxtOption",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=360&q=80",
    desc:
      "A dedicated options trading platform powered for creating strategies, analyzing positions, and managing trades efficiently. Provides in-depth analytics, open interest, and other tools for options traders.",
    btnText: "Discover NxtOption",
    btnLink: "#"
  }
];

// FAQ Accordion Implementation
const faqList = [
  {
    q: 'What sets Tradejini apart from other trading platforms?',
    a: 'Tradejini is built with institutional-grade infrastructure, pro-level support, fast execution, and user-friendly tools.'
  },
  {
    q: 'Is there a fee for opening a Demat account?',
    a: 'No, opening an account is free and paperless. Get started in minutes!'
  },
  {
    q: 'Do you support mobile trading?',
    a: 'Yes, CubePlus Mobile is available for Android and iOS with all major trading features.'
  },
  {
    q: 'How can I get customer support?',
    a: 'Our team is available via chat, phone, and email. Quick, knowledgeable responses are our hallmark.'
  },
];
function FaqAccordion() {
  const [openIdx, setOpenIdx] = React.useState(null);
  return (
    <div className="faq-accordion">
      {faqList.map((item, i) => (
        <div
          className={"faq-item" + (openIdx === i ? " open" : "")}
          key={i}
        >
          <button
            className="faq-question"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            {item.q}
            <span className="faq-toggle">{openIdx === i ? "-" : "+"}</span>
          </button>
          <div className="faq-answer" style={{display: openIdx === i ? "block" : "none"}}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("cubeplus");

  return (
    <div className="App">
      {/* Header/Navbar */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <TradejiniLogo />
          </div>
          <ul className="nav-links">
            <li><a href="#">Open Account</a></li>
            <li><a href="#">Who we are?</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Funds</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Chat now</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Press Coverage</a></li>
            <li><a href="#">Podcast</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Calculators</a></li>
            <li><a href="#">Algo Traders</a></li>
            <li><a href="#">Holiday Calendar</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Unlock Elite <span className="highlight">Trading</span> Performance!
              </h1>
              <p>
                Open a free Demat account in minutes.
              </p>
              <a href="#" className="cta-button">Start Now!</a>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=400&q=80"
                alt="Mobile devices showcase"
              />
            </div>
          </div>
        </section>
        <section className="product-tabs-section">
          <div className="tabs-header">
            {productTabs.map((tab) => (
              <button
                key={tab.key}
                className={"tab-btn" + (activeTab === tab.key ? " active" : "")}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="tab-panel">
            {productTabs.map(
              (tab) =>
                tab.key === activeTab && (
                  <div className="tab-content" key={tab.key}>
                    <img
                      className="tab-img"
                      src={tab.image}
                      alt={tab.title}
                    />
                    <div className="tab-details">
                      <h2>{tab.title}</h2>
                      <p>{tab.desc}</p>
                      <a className="tab-action-btn" href={tab.btnLink}>{tab.btnText}</a>
                    </div>
                  </div>
                )
            )}
          </div>
        </section>
        <section className="every-trader-section">
          <h2 className="every-trader-title">Built for Every <span className="highlight">Trader</span></h2>
          <p className="every-trader-desc">We’re on a mission to provide advanced trading tools and experiences for every kind of trader. Whether you’re a professional options trader, a high-speed scalper, or a long-term investor, we have the features that matter to you!</p>
          <div className="trader-cards-grid">
            <div className="trader-card">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=160&q=80" alt="Option Traders" className="trader-icon" />
              <h3>Option Traders</h3>
              <p>Real-time options data with Greeks and volatility metrics for precise analysis.</p>
            </div>
            <div className="trader-card">
              <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b1041?auto=format&fit=crop&w=160&q=80" alt="Scalpers" className="trader-icon" />
              <h3>Scalpers</h3>
              <p>High-speed tools for precise and lightning-fast market execution.</p>
            </div>
            <div className="trader-card">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=160&q=80" alt="Investors" className="trader-icon" />
              <h3>Investors</h3>
              <p>View seasonal trends of stocks to identify patterns and optimize investing strategies.</p>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <h2 className="testimonials-title">Loved by traders <span className="highlight">across India!</span></h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <span className="testimonial-avatar"><UserIcon /></span>
              <div className="testimonial-text"><b>Gopal D N</b><br/> Cube Plus trading app is very useful and easy to trade, particularly for new traders. All trade instruments are handy in a single click!</div>
            </div>
            <div className="testimonial-card">
              <span className="testimonial-avatar"><UserIcon /></span>
              <div className="testimonial-text"><b>Rohit Kansara</b><br/> Client since 2019, app is amazing for trading. Market data, charts, and support are top notch!</div>
            </div>
            <div className="testimonial-card">
              <span className="testimonial-avatar"><UserIcon /></span>
              <div className="testimonial-text"><b>Afroze Khan</b><br/> Fully satisfied with their services. The recent Cube Plus software is very good.</div>
            </div>
            <div className="testimonial-card">
              <span className="testimonial-avatar"><UserIcon /></span>
              <div className="testimonial-text"><b>Harshitha Ynr</b><br/> Quick customer service, using CubePlus application for a year with no glitches. Every trader must try!</div>
            </div>
            <div className="testimonial-card">
              <span className="testimonial-avatar"><UserIcon /></span>
              <div className="testimonial-text"><b>Manjesh Kumar</b><br/> Been using Tradejini for 3 years. Excellent support and quick response. Highly recommend!</div>
            </div>
            <div className="testimonial-card">
              <span className="testimonial-avatar"><UserIcon /></span>
              <div className="testimonial-text"><b>Shantha Kumar</b><br/> Corporate Actions, deals, news and market info. Features give a complete company view. CubePlus app is good!</div>
            </div>
          </div>
        </section>
        <section className="community-section">
          <div className="community-banner">
            <span>👥</span> Join the <b>Tradejini Community</b>
            <a href="#" className="community-btn">Join Now</a>
          </div>
          <div className="press-section">
            <h3>We are in the News</h3>
            <div className="press-logos">
              <span className="press-logo-badge" style={{background:'#1b4f72',color:'#fff'}}>Moneycontrol</span>
              <span className="press-logo-badge" style={{background:'#e9c46a',color:'#222'}}>Goodreturns</span>
              <span className="press-logo-badge" style={{background:'#00a6ed',color:'#fff'}}>Economic Times</span>
            </div>
          </div>
          <div className="awards-section">
            <h3>Awards and Recognition</h3>
            <div className="awards-logos">
              <div className="award-icon"><span role="img" aria-label="award">🏆</span><p>Best Fintech Startup<br/>2023</p></div>
              <div className="award-icon"><span role="img" aria-label="award">🏅</span><p>Customer Choice<br/>Award</p></div>
              <div className="award-icon"><span role="img" aria-label="award">🥇</span><p>#1 Stock Broker<br/>India</p></div>
            </div>
          </div>
        </section>

        {/* FAQ Section with accordion */}
        <section className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <FaqAccordion />
        </section>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-col footer-brand">
              <div className="footer-logo"><TradejiniLogo /></div>
              <div className="footer-socials">
                <a href="#" className="footer-social" aria-label="X"><svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="12" fill="#0d1a1d"/><text x="6" y="19" fontSize="17" fontWeight="bold" fill="#33a38b">X</text></svg></a>
                <a href="#" className="footer-social" aria-label="LinkedIn"><svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="12" fill="#0d1a1d"/><text x="5" y="18" fontSize="17" fontWeight="bold" fill="#33a38b">in</text></svg></a>
                <a href="#" className="footer-social" aria-label="YouTube"><svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="12" fill="#0d1a1d"/><text x="3" y="18" fontSize="17" fontWeight="bold" fill="#33a38b">YT</text></svg></a>
                <a href="#" className="footer-social" aria-label="Instagram"><svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="12" fill="#0d1a1d"/><text x="2.7" y="18" fontSize="17" fontWeight="bold" fill="#33a38b">IG</text></svg></a>
              </div>
              <div className="footer-copy">© {new Date().getFullYear()} Tradejini | Made with <span style={{color:'#e25555'}}>♥</span></div>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul><li><a href="#">Help Center</a></li><li><a href="#">Contact Us</a></li><li><a href="#">FAQs</a></li></ul>
            </div>
            <div className="footer-col">
              <h4>Pricing</h4>
              <ul><li><a href="#">Plans</a></li><li><a href="#">Charges</a></li></ul>
            </div>
            <div className="footer-col">
              <h4>Tools</h4>
              <ul><li><a href="#">Calculators</a></li><li><a href="#">APIs</a></li><li><a href="#">Blog</a></li></ul>
            </div>
            <div className="footer-col">
              <h4>Partner With Us</h4>
              <ul><li><a href="#">Become a Partner</a></li></ul>
              <h4>Quick Links</h4>
              <ul><li><a href="#">Open Account</a></li><li><a href="#">IPO</a></li></ul>
            </div>
            <div className="footer-col footer-apps">
              <a href="#" className="footer-app-badge" aria-label="App Store">
                <svg width="120" height="38" viewBox="0 0 120 38" fill="none"><rect x="0" y="0" width="120" height="38" rx="9" fill="#0d1a1d"/><text x="18" y="24" fontSize="16" fill="#fbfbfb" fontWeight="bold">App Store</text></svg>
              </a>
              <a href="#" className="footer-app-badge" aria-label="Google Play">
                <svg width="120" height="38" viewBox="0 0 120 38" fill="none"><rect x="0" y="0" width="120" height="38" rx="9" fill="#0d1a1d"/><text x="14" y="24" fontSize="16" fill="#fbfbfb" fontWeight="bold">Google Play</text></svg>
              </a>
            </div>
          </div>
          <div className="footer-disclaimer">
            <b>Attention Investors & Disclaimer:</b> Market investments are subject to risk. Please read all scheme-related documents carefully before investing.
          </div>
        </footer>
      </main>
    </div>
  );
}
