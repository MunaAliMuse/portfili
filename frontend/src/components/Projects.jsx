// Linkiyada frontend – backend ka saar
const GITHUB_BASE = 'https://github.com/MunaAliMuse';

const PROJECTS = [
  { id: 1, title: 'Tenant Management System', description: 'React Dashboard with CRUD, payments, Google Auth.', tech: ['React', 'Node.js', 'MongoDB'], github: GITHUB_BASE, demo: '' },
  { id: 2, title: 'Apartment Management System', description: 'Admin panel, tenant checkout, PDF receipts.', tech: ['React', 'Express', 'MongoDB'], github: GITHUB_BASE, demo: '' },
  { id: 3, title: 'Payment System', description: 'Voucher upload, reports, transaction history.', tech: ['React', 'Node.js', 'MongoDB'], github: GITHUB_BASE, demo: '' },
  { id: 4, title: 'E-commerce Website', description: 'E-commerce web project. Live on Vercel.', tech: ['React', 'v0'], github: GITHUB_BASE, demo: 'https://e-commerc-wepsite-646te3vpg-muna-ali-muses-projects.vercel.app/' },
  { id: 5, title: 'Another Project', description: 'Web app project built with v0 by Vercel.', tech: ['React', 'v0'], github: GITHUB_BASE, demo: 'https://v0.app/chat/muna-ali-muse-another-project-ULRBypofeRT' },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="card">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
              <div className="card-tech">
                {(project.tech || []).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="card-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link">
                  View on GitHub
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="card-link">
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Projects };
