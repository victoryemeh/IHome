import { useState } from "react";
import "./App.css";
import heroImage from "./assets/hero-img.avif";
import house1 from "./assets/house1.avif";
import house2 from "./assets/house2.avif";
import house3 from "./assets/house3.webp";
import house4 from "./assets/house4.webp";
import house5 from "./assets/house5.webp";
import aerialImage from "./assets/aerial.png";
import aerialVideo from "./assets/aerial-view.mp4";
import avatar1 from "./assets/avatar1.jpg";
import avatar2 from "./assets/avatar2.jpg";
import avatar3 from "./assets/avatar3.jpg";
import avatar4 from "./assets/avatar4.jpg";
import avatar5 from "./assets/avatar5.jpg";
import avatar6 from "./assets/avatar6.jpg";
import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpg";
import person3 from "./assets/person3.jpg";
import person4 from "./assets/person4.jpg";
import person5 from "./assets/person5.jpg";
import person6 from "./assets/person6.jpg";
import person7 from "./assets/person7.jpg";
import person8 from "./assets/person8.jpg";

const navItems = ["Home", "Buy", "Rent", "Sell", "Agents", "Blog"];

const featuredHomes = [
  {
    title: "Beverly Hills Villa",
    location: "Los Angeles, CA",
    price: "$2.4M",
    image: house1,
  },
  {
    title: "Skyline Residence",
    location: "New York, NY",
    price: "$1.9M",
    image: house2,
  },
  {
    title: "Ocean View House",
    location: "Malibu, CA",
    price: "$3.1M",
    image: house3,
  },
  {
    title: "Modern Courtyard",
    location: "Miami, FL",
    price: "$2.8M",
    image: house4,
  },
];

const typeCards = [
  { icon: "⌂", title: "Villas", subtitle: "1,246 homes" },
  { icon: "▣", title: "Townhouses", subtitle: "980 homes" },
  { icon: "◫", title: "Apartments", subtitle: "2,184 homes" },
  { icon: "▤", title: "Penthouses", subtitle: "436 homes" },
  { icon: "◍", title: "Farmhouses", subtitle: "612 homes" },
];

const locationCards = [
  { title: "Beverly Hills", subtitle: "2,341 homes", image: house2 },
  { title: "Miami Beach", subtitle: "1,780 homes", image: house3 },
  { title: "Austin", subtitle: "914 homes", image: house4 },
  { title: "Brooklyn", subtitle: "1,240 homes", image: house5 },
];

const agentCards = [
  {
    name: "Serena Miller",
    title: "Local expert, Personal advisor",
    phone: "+1 (305) 555-0148",
    image: person1,
  },
  {
    name: "Daniel Carter",
    title: "Luxury property expert",
    phone: "+1 (212) 555-9010",
    image: person2,
  },
  {
    name: "Chloe Brooks",
    title: "International client advisor",
    phone: "+1 (415) 555-3381",
    image: person3,
  },
  {
    name: "Richard Evans",
    title: "Market strategist",
    phone: "+1 (512) 555-2309",
    image: person4,
  },
];

const teamAvatars = [
  person4,
  person5,
  person6,
  person7,
  person8,
  avatar1,
  avatar2,
  avatar3,
];

const footerLinks = {
  Company: ["About us", "How it works", "Careers", "Contact"],
  Discover: ["Homes for sale", "Apartments", "Villas", "Office spaces"],
  Resources: ["Blog", "FAQ", "Guides", "Support"],
};

function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (event, item) => {
    event.preventDefault();
    setActiveNav(item);

    const sectionMap = {
      Home: "top",
      Buy: "featured-properties",
      Rent: "featured-properties",
      Sell: "popular-locations",
      Agents: "agents",
      Blog: "newsletter",
    };

    scrollToSection(sectionMap[item] || "top");
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterMessage("Thanks! You’re on the list for new listings.");
    setEmail("");
  };

  return (
    <div className="page-shell" id="top">
      <header className="hero">
        <div className="hero-overlay" />
        <div className="topbar">
          <div className="brand" aria-label="Havens home">
            <span className="brand-mark">H</span>
            <span className="brand-text">IHome</span>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                href="#"
                key={item}
                className={`nav-link ${activeNav === item ? "active" : ""}`}
                onClick={(event) => handleNavClick(event, item)}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="nav-button"
            onClick={() => scrollToSection("featured-properties")}
          >
            Book a View
          </button>
        </div>

        <div className="hero-content">
          <p className="eyebrow">A lifestyle beyond walls</p>
          <h1>
            Discover Homes
            <br />
            That Elevate Your
            <br />
            Everyday Life
          </h1>
          <p className="hero-text">
            Find elevated spaces crafted for meaningful living and effortless
            comfort.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="primary-btn"
              onClick={() => scrollToSection("featured-properties")}
            >
              Explore Homes
            </button>
            <button
              type="button"
              className="secondary-btn"
              onClick={() => scrollToSection("newsletter")}
            >
              Learn More
            </button>
          </div>

          <div className="mini-search">
            <span>Buy</span>
            <span>Apartment</span>
            <span>Location</span>
            <button
              type="button"
              onClick={() => scrollToSection("featured-properties")}
            >
              Search
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div
            className="card-thumb"
            style={{ backgroundImage: `url(${house5})` }}
          />
          <div className="card-copy">
            <strong>Luxury Villa</strong>
            <span>3 Bedrooms • 2 Baths</span>
          </div>
          <div className="card-price">$2.9M</div>
        </div>
      </header>

      <main className="page-body">
        <section
          className="section-block property-section"
          id="featured-properties"
        >
          <div className="section-header">
            <h2>Featured Properties</h2>
            <a href="#">View all</a>
          </div>

          <div className="property-grid">
            {featuredHomes.map((property) => (
              <article key={property.title} className="property-card">
                <div
                  className="property-image"
                  style={{ backgroundImage: `url(${property.image})` }}
                />
                <div className="property-meta">
                  <div>
                    <p className="meta-tag">Featured</p>
                    <h3>{property.title}</h3>
                    <span>{property.location}</span>
                  </div>
                  <strong>{property.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block type-section" id="property-type">
          <div className="section-header small-header">
            <h2>Explore by Property Type</h2>
            <div className="icon-row" aria-label="Property type tabs">
              <span className="icon-item active">⌂</span>
              <span className="icon-item">▣</span>
              <span className="icon-item">◫</span>
              <span className="icon-item">▤</span>
            </div>
          </div>

          <div className="type-grid">
            {typeCards.map((type) => (
              <div key={type.title} className="type-card">
                <span className="type-icon">{type.icon}</span>
                <div>
                  <h3>{type.title}</h3>
                  <p>{type.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section-block location-section"
          id="popular-locations"
        >
          <div className="section-header">
            <h2>Popular Locations</h2>
            <a href="#">Explore all</a>
          </div>

          <div className="location-grid">
            {locationCards.map((location) => (
              <article key={location.title} className="location-card">
                <div
                  className="location-image"
                  style={{ backgroundImage: `url(${location.image})` }}
                />
                <div className="location-overlay">
                  <h3>{location.title}</h3>
                  <span>{location.subtitle}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block lifestyle-section">
          <div className="lifestyle-copy">
            <p className="eyebrow dark">The lifestyle</p>
            <h2>Homes shaped around the way you live.</h2>
            <p>
              Thoughtful architecture, serene interiors, and connected spaces
              bring everyday life into focus.
            </p>
            <button className="primary-btn dark-btn">Book a Visit</button>
          </div>

          <div className="lifestyle-visual">
            <div className="visual-card large-card">
              <video autoPlay muted loop playsInline>
                <source src={aerialVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="section-block agents-section" id="agents">
          <div className="section-header agents-header">
            <div>
              <h2>Meet Our Agents</h2>
              <p>Local experts, personal advisors</p>
            </div>
            <button
              type="button"
              className="view-agents-btn"
              onClick={() => scrollToSection("agents")}
            >
              View All Agents
            </button>
          </div>

          <div className="agents-grid">
            {agentCards.map((agent) => (
              <article key={agent.name} className="agent-card">
                <div
                  className="agent-portrait"
                  style={{ backgroundImage: `url(${agent.image})` }}
                />
                <div className="agent-info">
                  <h3>{agent.name}</h3>
                  <p className="agent-role">{agent.title}</p>
                  <div className="agent-contact-row">
                    <span className="mini-icon">☎</span>
                    <span>{agent.phone}</span>
                  </div>
                  <div className="agent-actions">
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() =>
                        (window.location.href = `tel:${agent.phone.replace(/\s+/g, "")}`)
                      }
                    >
                      ✆
                    </button>
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() =>
                        (window.location.href = `mailto:${agent.name.toLowerCase().replace(/\s+/g, ".")}@ihome.com`)
                      }
                    >
                      ✉
                    </button>
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => setActiveNav("Agents")}
                    >
                      ◌
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block testimonial-section">
          <div className="testimonial-card">
            <div className="quote-content">
              <div className="quote-mark">“</div>
              <h3>What Our Clients Say</h3>
              <p>
                “Havenly made our dream home search seamless and incredibly
                personal. Their team understood exactly what we wanted and
                guided us through every step with care and confidence.”
              </p>
              <div className="quote-author">
                <strong>Michael &amp; Emily</strong>
                <span>Homeowners in Beverly Hills</span>
              </div>
            </div>

            <div className="testimonial-visual">
              <div className="testimonial-image-wrap">
                <img
                  src={aerialImage}
                  alt="Luxury interior with panoramic view"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-block newsletter-section" id="newsletter">
          <div className="newsletter-card">
            <div className="newsletter-copy">
              <h3>Stay in the Know</h3>
              <p>
                Get the latest listings, market updates, and real estate advice
                delivered straight to your inbox.
              </p>
            </div>

            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button type="submit" aria-label="Submit email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="preview-icon"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
          {newsletterMessage && (
            <p className="newsletter-status">{newsletterMessage}</p>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand-block">
            <div className="brand footer-brand" aria-label="IHome">
              <span className="brand-text">IHome</span>
            </div>
            <p>
              Your premium partner in discovering exceptional homes and spaces
              that feel like home.
            </p>
            <div className="social-row">
              <span>f</span>
              <span>x</span>
              <span>in</span>
              <span>◎</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer-column">
              <h4>{group}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2025 IHome. Website by VeeCodes.</span>
          <div className="legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Accessibility</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
