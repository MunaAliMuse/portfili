const GITHUB_URL = 'https://github.com/MunaAliMuse';
const CV_URL = '/cv.pdf';

function Hero({ profile }) {
  const name = profile?.name || 'Muna Ali Muuse';
  const title = profile?.title || 'Full Stack Developer (MERN)';
  const bio = profile?.bio || 'MERN Stack (MongoDB, Express, React, Node.js) & Tailwind CSS. Building modern web applications.';

  return (
    <section id="hero" className="hero">
      <div className="container-sm">
        <p className="hero-label">Professional Full Stack Developer</p>
        <h1 className="hero-title">{name}</h1>
        <p className="hero-subtitle">{title}</p>
        <p className="hero-bio">{bio}</p>
        <div className="hero-btns">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">GitHub</a>
          <a href={CV_URL} download className="btn-secondary">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export { Hero };
