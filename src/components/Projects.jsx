import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

/* ---------- CSS-based project preview visuals ---------- */

function ImageProcessingVisual() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0d0d0d 0%, #161616 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />
      {/* Toolbar */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          padding: '10px 14px',
          background: 'rgba(22,22,22,0.9)',
          border: '1px solid rgba(212,175,55,0.15)',
          borderRadius: '8px',
          zIndex: 1,
        }}
      >
        {['Filters', 'Transform', 'Adjust', 'Export'].map((label) => (
          <span
            key={label}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--gold)',
              padding: '4px 12px',
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.2)',
              borderRadius: '4px',
              letterSpacing: '1px',
            }}
          >
            {label}
          </span>
        ))}
      </div>
      {/* Split view */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          zIndex: 1,
        }}
      >
        {/* Original */}
        <div
          style={{
            background: 'linear-gradient(145deg, #1a1a1a, #111)',
            border: '1px solid rgba(212,175,55,0.12)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              borderBottom: '1px solid rgba(212,175,55,0.1)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--text-muted)',
              letterSpacing: '1px',
            }}
          >
            ORIGINAL
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            {/* Abstract image representation */}
            <div style={{ position: 'relative', width: '80%', height: '80%' }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: `${60 - i * 10}%`,
                    height: `${60 - i * 10}%`,
                    top: `${10 + i * 8}%`,
                    left: `${10 + i * 8}%`,
                    background: `rgba(${100 + i * 30}, ${100 + i * 30}, ${100 + i * 30}, 0.15)`,
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Processed */}
        <div
          style={{
            background: 'linear-gradient(145deg, #1a1a1a, #111)',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              borderBottom: '1px solid rgba(212,175,55,0.1)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--gold)',
              letterSpacing: '1px',
            }}
          >
            PROCESSED
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            <div style={{ position: 'relative', width: '80%', height: '80%' }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: `${60 - i * 10}%`,
                    height: `${60 - i * 10}%`,
                    top: `${10 + i * 8}%`,
                    left: `${10 + i * 8}%`,
                    background: `rgba(212, 175, 55, ${0.05 + i * 0.03})`,
                    borderRadius: '4px',
                    border: '1px solid rgba(212,175,55,0.12)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Histogram bar */}
      <div
        style={{
          display: 'flex',
          gap: '3px',
          alignItems: 'flex-end',
          height: '32px',
          padding: '0 14px',
          zIndex: 1,
        }}
      >
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${Math.sin((i / 30) * Math.PI) * 100}%`,
              background: `rgba(212, 175, 55, ${0.2 + Math.sin((i / 30) * Math.PI) * 0.4})`,
              borderRadius: '2px 2px 0 0',
              minHeight: '2px',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function JobSeekerVisual() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0d0d0d 0%, #161616 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        gap: '12px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Search bar */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          padding: '12px 16px',
          background: 'rgba(22,22,22,0.9)',
          border: '1px solid rgba(212,175,55,0.15)',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            flex: 1,
            height: '10px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '4px',
          }}
        />
        <div
          style={{
            padding: '6px 18px',
            background: 'var(--gold)',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: '#080808',
            fontWeight: '600',
            letterSpacing: '1px',
          }}
        >
          Search
        </div>
      </div>
      {/* Filter chips */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {['Remote', 'Full-time', 'Tech', 'Design'].map((tag) => (
          <span
            key={tag}
            style={{
              padding: '4px 12px',
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.2)',
              borderRadius: '100px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--gold)',
              letterSpacing: '0.5px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Job cards */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          { title: 'Frontend Developer', company: 'Tech Corp', type: 'Full-time' },
          { title: 'React Engineer', company: 'StartupXYZ', type: 'Remote' },
          { title: 'UI Developer', company: 'DesignCo', type: 'Contract' },
        ].map((job) => (
          <div
            key={job.title}
            style={{
              padding: '14px 16px',
              background: 'rgba(22,22,22,0.8)',
              border: '1px solid rgba(212,175,55,0.12)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            {/* Company avatar */}
            <div
              style={{
                width: '36px',
                height: '36px',
                minWidth: '36px',
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--gold)',
                fontWeight: '600',
              }}
            >
              {job.company[0]}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '2px',
                }}
              >
                {job.title}
              </div>
              <div
                style={{
                  fontSize: '0.62rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {job.company}
              </div>
            </div>
            <span
              style={{
                padding: '3px 10px',
                background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.15)',
                borderRadius: '100px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: 'var(--gold)',
              }}
            >
              {job.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const projectVisuals = {
  1: <ImageProcessingVisual />,
  2: <JobSeekerVisual />,
};

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Featured <span className="gold-text">Work</span>
          </h2>
          <p className="section-subtitle">
            Selected projects that showcase my skills and passion for building
            meaningful digital products.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card reveal ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="project-visual">
                {projectVisuals[project.id]}
              </div>

              <div className="project-info">
                <div className="project-number">{project.number}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
