import { Code2, Smartphone, BookOpen } from 'lucide-react';

const highlights = [
  {
    icon: <Code2 size={22} />,
    title: 'Clean & Maintainable Code',
    description: 'Writing well-structured, readable code that follows best practices and is easy to maintain.',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Responsive Web Design',
    description: 'Creating interfaces that look and function beautifully across all devices and screen sizes.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Continuous Learning',
    description: 'Constantly exploring new technologies, frameworks, and techniques to grow as a developer.',
  },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Building Experiences,<br />
            <span className="gold-text">One Line at a Time.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal reveal-delay-1">
            <p>
              I'm a Frontend Developer who enjoys turning ideas into functional and
              engaging digital experiences. I focus on writing clean code, building
              responsive interfaces, and continuously improving my development skills.
            </p>
            <p>
              My experience spans web development and programming projects, including
              image processing using C++ and Qt. I believe in building things that not
              only work well but also provide an excellent user experience.
            </p>
          </div>

          <div className="about-cards">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`about-card reveal reveal-delay-${index + 1}`}
              >
                <div className="about-card-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
