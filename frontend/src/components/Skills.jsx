import { skills } from '../data/profile';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-category">
              <h3 className="skill-category-title">{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Skills };
