import Link from 'next/link'

const education = [
  { date: '2025 — CURRENT', id: 'ST_01', title: 'Front-end developer React', location: 'Yrkeshögskolan i Borås' },
  { date: '2024', id: 'ST_02', title: 'Digital Visual Identity', location: 'Högskolan Borås' },
  { date: '2021 — PRESENT', id: 'ST_03', title: 'UX Design', location: 'IT-HÖGSKOLAN' },
]

const experience = [
  {
    date: '2021 — PRESENT',
    id: 'ST_01',
    title: 'UX Designer',
    location: 'BYTODALS',
    description: 'Freelancing.\nResearching and architecting high-fidelity design systems in Figma.',
  },
  {
    date: '2025',
    id: 'ST_02',
    title: 'UX Designer & Front-end Dev',
    location: 'PODMANAGER_AI',
    description: 'Designed and developed professional new features for the launch of the webapp',
  },
  {
    date: '2022 — 2023',
    id: 'ST_03',
    title: 'UX Designer',
    location: 'CETASOL',
    description: 'Cooperated with Front-end and JavaScript interns to design and build a new website.',
  },
]

const skills = [
  { num: '01', title: 'Figma\nPrototyping' },
  { num: '02', title: 'React &\nReact Native' },
  { num: '03', title: 'JavaScript\n& Typescript' },
  { num: '04', title: 'Agile Workflow' },
  { num: '05', title: 'User\nResearch' },
  { num: '06', title: 'Brand\nStrategy' },
  { num: '07', title: 'HTML5\n& CSS' },
  { num: '08', title: 'Visual\nIdentity' },
]

export default function Home() {
  return (
    <main className="portfolio-page">
      <div aria-hidden="true" className="portfolio-bg">
        <div className="portfolio-bg__overlay" />
        <div className="portfolio-bg__glow portfolio-bg__glow--left" />
        <div className="portfolio-bg__glow portfolio-bg__glow--right" />
      </div>

      <header className="portfolio-nav">
        <div className="portfolio-shell portfolio-nav__inner">
          <Link href="/" className="portfolio-logo" aria-label="Home">
            JT
          </Link>

          <nav className="portfolio-links" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="portfolio-shell portfolio-hero">
        <div className="portfolio-hero__content">
          <div className="portfolio-tag">
            <span className="portfolio-tag__dot" />
            <span>SYSTEM_ONLINE // SECTION_1</span>
          </div>

          <h1 className="portfolio-name">
            <span className="portfolio-name__line portfolio-name__line--solid">JOHANNA</span>
            <span className="portfolio-name__line portfolio-name__line--ghost">TODAL</span>
          </h1>

          <p className="portfolio-summary">
            UX Designer & Web Developer in training specializing in high-fashion aesthetics and
            editorial-grade digital artifacts. Creating interfaces that fuse refined elegance with
            bold technical intensity.
          </p>

          <div className="portfolio-actions">
            <a href="mailto:todals@hotmail.com" className="portfolio-button portfolio-button--primary">
              <span>INITIATE_CONTACT</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/johanna-todal/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-button portfolio-button--secondary"
            >
              VISIT_LINKEDIN
            </a>
          </div>
        </div>

        <div className="portfolio-visual" aria-hidden="true">
          <div className="portfolio-visual__card">
            <div className="portfolio-visual__label">UI_FRAGMENT_742</div>
            <div className="portfolio-visual__figure">
              <div className="portfolio-visual__portrait" />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-shell portfolio-section" id="projects">
        <div className="portfolio-divider">
          <span className="portfolio-divider__line" />
          <span className="portfolio-divider__label">SECTION_02 // EXP</span>
        </div>

        <h2 className="portfolio-section__title">Technical_Logs</h2>

        <div className="portfolio-grid portfolio-grid--education">
          {education.map((item) => (
            <article key={item.id} className="portfolio-card portfolio-card--dark">
              <div className="portfolio-meta">
                <span>{item.date}</span>
                <span>{item.id}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.location}</p>
            </article>
          ))}
        </div>

        <div className="portfolio-grid portfolio-grid--experience">
          {experience.map((item) => (
            <article key={item.id} className="portfolio-card portfolio-card--dark portfolio-card--experience">
              <div className="portfolio-meta">
                <span>{item.date}</span>
                <span>{item.id}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="portfolio-card__location">{item.location}</p>
              <p className="portfolio-card__description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-shell portfolio-section portfolio-section--skills">
        <div className="portfolio-divider">
          <span className="portfolio-divider__line" />
          <span className="portfolio-divider__label">SECTION_3 // SKILLS</span>
        </div>

        <h2 className="portfolio-section__title portfolio-section__title--bright">Skills</h2>

        <div className="portfolio-skills">
          {skills.map((skill) => (
            <article key={skill.num} className="portfolio-skill">
              <span className="portfolio-skill__num">{skill.num}</span>
              <span className="portfolio-skill__title">{skill.title}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-shell portfolio-section portfolio-section--cta" id="contact">
        <div className="portfolio-cta">
          <div className="portfolio-cta__bg">ENCRYPT_YOUR_PROJECT</div>
          <p className="portfolio-cta__text">
            Opening channel for collaboration on premium digital infrastructure.
          </p>

          <a href="mailto:todals@hotmail.com" className="portfolio-cta__button">
            START_TRANSMISSION
          </a>
        </div>
      </section>
    </main>
  )
}
