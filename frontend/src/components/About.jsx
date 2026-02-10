import { profile } from '../data/profile';

function About() {
  return (
    <section id="about" className="section">
      <div className="container-sm">
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />
        <p className="about-text">{profile.aboutMe}</p>
      </div>
    </section>
  );
}

export { About };
