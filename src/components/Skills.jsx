import { Monitor, Server, Cpu, Wrench } from 'lucide-react';
import { skills } from '../data/projects';

const categoryIcons = {
  frontend: <Monitor size={20} />,
  backend: <Server size={20} />,
  programming: <Cpu size={20} />,
  tools: <Wrench size={20} />,
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            My <span className="gold-text">Technical</span> Toolkit
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build modern web experiences.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([key, category], index) => (
            <div
              key={key}
              className={`skill-category reveal reveal-delay-${index + 1}`}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {categoryIcons[key]}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.items.map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
