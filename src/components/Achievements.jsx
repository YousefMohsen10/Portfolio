import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">
            Recognition &amp; <span className="gold-text">Milestones</span>
          </h2>
        </div>

        <div className="achievements-content">
          <div className="achievement-card reveal reveal-delay-1">
            <div className="achievement-icon">
              <Trophy size={32} />
            </div>
            <div className="achievement-place">5th Place</div>
            <h3 className="achievement-title">Image Processing Competition</h3>
            <p className="achievement-description">
              Recognized for a project developed using C++ and Qt, demonstrating
              strong problem-solving skills and practical programming expertise in
              image processing and manipulation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
