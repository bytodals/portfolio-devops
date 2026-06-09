import Link from 'next/link'
import { getSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

const widgets = [
  {
    id: 'calendar',
    title: 'Calendar',
    text: 'Overview of deadlines, publications and personal events.',
  },
  { id: 'todo', title: 'Todo', text: 'Prioritized tasks with deadlines and status.' },
  {
    id: 'notes',
    title: 'Notes',
    text: 'Quick ideas, drafts and admin notes in one place.',  
  },
  {
    id: 'publisher',
    title: 'Instagram Publisher',
    text: 'Prepared space for uploading and scheduling.',
  },
]

const menuItems = [
  { href: '#overview', label: 'Overview' },
  { href: '#calendar', label: 'Calendar' },
  { href: '#todo', label: 'Todo' },
  { href: '#notes', label: 'Notes' },
  { href: '#publisher', label: 'Publisher' },
  { href: '#settings', label: 'Settings' },
]

export default function Dashboard() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-shell">
        <aside className="dashboard-sidebar" aria-label="Private menu">
          <div className="dashboard-sidebar__brand">
            <div className="hero-badge">Private section • protected shell</div>
            <p className="dashboard-sidebar__title">Personal Dashboard</p>
            <p className="dashboard-sidebar__text">
              This menu is only visible here — perfect as your internal shortcut to the pages you want to access quickly.
              </p>
          </div>

          <nav className="dashboard-menu">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className="dashboard-menu__item">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="dashboard-sidebar__footer">
            <div className="dashboard-footer-actions">
              <Link href="/" className="button button-secondary dashboard-backlink">
                Back to portfolio
              </Link>
              <button onClick={() => signOut({ callbackUrl: '/' })} className="button button-ghost">
                Sign out
              </button>
            </div>
          </div>
        </aside>

        <div className="dashboard-main">
          <section className="hero-card dashboard-hero" id="overview">
            <div className="hero-badge">Private section • protected shell</div>
            <p className="eyebrow">Dashboard</p>
            <h1>Personal Dashboard</h1>
            <p className="lead">
              This is a protected area of the portfolio, only accessible to me. Here I can have an overview of my projects, deadlines, notes and other personal information that I want to keep separate from the public portfolio.
            </p>
            <div className="hero-actions">
              <Link href="/" className="button button-secondary">
                Back to portfolio
              </Link>
            </div>
          </section>

          <section className="dashboard-grid">
            {widgets.map((widget) => (
              <article key={widget.id} id={widget.id} className="info-card dashboard-card">
                <p className="section-label">Private module</p>
                <h2>{widget.title}</h2>
                <p>{widget.text}</p>
              </article>
            ))}

            <article id="settings" className="info-card dashboard-card dashboard-card--accent">
              <p className="section-label">Settings</p>
              <h2>Settings and future access</h2>
              <p>
                Here you can later add theme, account settings, roles and protected access when we enable login.  
              </p>
            </article>
          </section>
        </div>
      </div>
    </main>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  if (!session) return { redirect: { destination: '/login', permanent: false } }
  return { props: {} }
}
