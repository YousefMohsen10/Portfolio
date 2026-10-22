import { ArrowRight, ExternalLink } from 'lucide-react';
import { socialLinks } from '../data/projects';

export default function Hero() {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        {/* Left: Content */}
        <div className="hero-content">
          <div className="hero-label">
            <span className="dot"></span>
            FRONTEND DEVELOPER
          </div>

          <h1 className="hero-title">
            Crafting <span className="highlight">Digital</span><br />
            Experiences That<br />
            <span className="highlight">Stand Out.</span>
          </h1>

          <p className="hero-description">
            I'm <strong>Yousef Mohsen</strong>, a Frontend Developer passionate about building modern,
            responsive, and user-focused web experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => handleScroll(e, '#projects')}>
              Explore My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => handleScroll(e, '#contact')}>
              Let's Connect
            </a>
          </div>

          <div className="hero-socials">
            <span>Follow</span>
            <div className="divider"></div>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero-visual">
          <div className="hero-geometric">
            {/* Rotating rings */}
            <div className="hero-ring"></div>
            <div className="hero-ring-2"></div>

            {/* Central code block */}
            <div className="hero-code-block">
              <div className="code-line">
                <span className="keyword">const</span>{' '}
                <span className="property">developer</span>{' '}
                <span className="bracket">= {'{'}</span>
              </div>
              <div className="code-line">
                {'  '}<span className="property">name</span>:{' '}
                <span className="string">"Yousef"</span>,
              </div>
              <div className="code-line">
                {'  '}<span className="property">role</span>:{' '}
                <span className="string">"Frontend"</span>,
              </div>
              <div className="code-line">
                {'  '}<span className="property">passion</span>:{' '}
                <span className="string">"UI/UX"</span>,
              </div>
              <div className="code-line">
                {'  '}<span className="property">focus</span>:{' '}
                <span className="string">"Clean Code"</span>,
              </div>
              <div className="code-line">
                <span className="bracket">{'}'}</span>;
              </div>
            </div>

            {/* Floating elements */}
            <div className="hero-float-element hero-float-1">
              {'<'}<span className="keyword">React</span>{' />'}
            </div>
            <div className="hero-float-element hero-float-2">
              {'{ }'} <span className="keyword">JS</span>
            </div>
            <div className="hero-float-element hero-float-3">
              <span className="keyword">CSS</span> ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
