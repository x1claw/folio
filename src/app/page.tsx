'use client';

import { useState, useEffect } from 'react';
import { FaApple, FaGithub, FaDownload, FaArrowRight, FaLaptop, FaBolt, FaShield, FaWandMagic, FaMoon, FaSun } from 'react-icons/fa6';

const apps = [
  {
    name: "1Calendar",
    icon: "📅",
    iconBg: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
    description: "A beautiful native macOS calendar app. Manage your schedule with elegance and ease.",
    downloadUrl: "https://github.com/x1claw/1Calendar-release",
    features: ["Native macOS design", "Event creation & editing", "Multiple calendars", "Menu bar integration"],
  },
  {
    name: "App Two",
    icon: "⚡",
    iconBg: "linear-gradient(135deg, #4ECDC4, #44A08D)",
    description: "Another amazing macOS utility designed to boost your productivity workflow.",
    downloadUrl: "#",
    features: ["Lightning fast", "Easy to use", "Regular updates", "Open source"],
  },
  {
    name: "App Three",
    icon: "🎨",
    iconBg: "linear-gradient(135deg, #667eea, #764ba2)",
    description: "A creative tool that brings your ideas to life with powerful features.",
    downloadUrl: "#",
    features: ["Powerful features", "Beautiful UI", "Secure & private", "Free forever"],
  },
];

const features = [
  {
    icon: <FaLaptop />,
    title: "Native Performance",
    description: "Built specifically for macOS with SwiftUI, delivering buttery smooth performance and native feel."
  },
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    description: "Optimized for speed with instant launch times and responsive interactions."
  },
  {
    icon: <FaShield />,
    title: "Privacy First",
    description: "Your data stays on your device. No tracking, no cloud sync, no compromises."
  },
  {
    icon: <FaWandMagic />,
    title: "Delightful UX",
    description: "Thoughtfully designed with attention to every detail and micro-interaction."
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Navigation */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-content">
          <div className="nav-logo">
            <div className="nav-logo-icon">⚡</div>
            <span>Claw</span>
          </div>
          <ul className="nav-links">
            <li><a href="#apps">Apps</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#download">Download</a></li>
          </ul>
          <div className="nav-right">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <a href="#download" className="nav-cta">Get Apps</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            Open Source macOS Apps
          </div>
          <h1 className="font-display">
            Beautiful tools for<br />
            <span className="gradient-text">your Mac</span>
          </h1>
          <p className="hero-description">
            A collection of carefully crafted macOS applications designed to enhance your productivity and workflow.
          </p>
          <div className="hero-buttons">
            <a href="#apps" className="btn-primary">
              <FaArrowRight />
              Explore Apps
            </a>
            <a href="https://github.com/x1claw" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FaGithub />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Apps Showcase */}
      <section id="apps" className="app-showcase">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="font-display">My Apps</h2>
            <p>Native macOS applications built with love and attention to detail.</p>
          </div>
          <div className="apps-grid">
            {apps.map((app, index) => (
              <div key={index} className={`app-card animate-on-scroll stagger-${index + 1}`}>
                <div className="app-card-icon" style={{ background: app.iconBg }}>
                  {app.icon}
                </div>
                <h3 className="font-display">{app.name}</h3>
                <p className="description">{app.description}</p>
                <div className="app-card-features">
                  {app.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <a href={app.downloadUrl} target="_blank" rel="noopener noreferrer" className="app-card-cta">
                  Download <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="font-display">Why These Apps?</h2>
            <p>Built with the same principles that make macOS great.</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card animate-on-scroll stagger-${index + 1}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="font-display">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="screenshots">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="font-display">Screenshots</h2>
            <p>A glimpse of what awaits you.</p>
          </div>
          <div className="screenshot-grid">
            <div className="screenshot-item animate-on-scroll stagger-1">
              <span className="screenshot-placeholder">Screenshot 1</span>
            </div>
            <div className="screenshot-item animate-on-scroll stagger-2">
              <span className="screenshot-placeholder">Screenshot 2</span>
            </div>
            <div className="screenshot-item animate-on-scroll stagger-3">
              <span className="screenshot-placeholder">Wide Screenshot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download">
        <div className="container">
          <h2 className="font-display animate-on-scroll">Ready to try?</h2>
          <p className="animate-on-scroll stagger-1">All apps are free and open source. Download directly from GitHub.</p>
          <div className="download-buttons animate-on-scroll stagger-2">
            <a href="https://github.com/x1claw" target="_blank" rel="noopener noreferrer" className="download-btn">
              <FaApple className="icon" />
              <div>
                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>Download on</div>
                <div>GitHub</div>
              </div>
            </a>
            <a href="https://github.com/x1claw" target="_blank" rel="noopener noreferrer" className="download-btn download-btn-secondary">
              <FaGithub className="icon" />
              <div>
                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>View</div>
                <div>Source Code</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <div className="footer-logo">
            <div className="nav-logo-icon">⚡</div>
            <span>Claw</span>
          </div>
          <ul className="footer-links">
            <li><a href="https://github.com/x1claw" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Email</a></li>
          </ul>
          <p className="footer-copyright">© {new Date().getFullYear()} Claw. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
