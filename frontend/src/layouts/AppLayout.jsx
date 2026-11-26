import { Link, NavLink, Outlet } from 'react-router-dom'

const links = [
  {
    to: '/app',
    label: 'Dashboard',
    end: true,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    to: '/datasets/new',
    label: 'Upload dataset',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    to: '/jobs',
    label: 'Jobs',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    to: '/exports',
    label: 'Exports',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
      </svg>
    ),
  },
  {
    to: '/benchmarks/pix2pix',
    label: 'Pix2Pix Benchmark',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function AppLayout() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden font-sans" style={{ backgroundColor: '#F1F5F9' }}>
      {/* Sidebar - Fixed & Independent from right side scroll */}
      <aside
        className="w-full md:w-64 md:h-screen shrink-0 flex flex-col justify-between overflow-y-auto z-20"
        style={{
          backgroundColor: '#0F172A',
          backgroundImage: 'linear-gradient(180deg, #0F172A 0%, #111827 50%, #1E1B4B 100%)',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div>
          {/* Logo Header */}
          <div className="px-6 py-6 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
            <Link to="/" className="flex items-center gap-3 group transition-opacity hover:opacity-95" title="View Landing Page">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-lg group-hover:scale-105 transition-transform"
                style={{
                  background: 'linear-gradient(135deg, #0D9488 0%, #4F46E5 100%)',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)',
                }}
              >
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 2h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V3L8 2z" />
                </svg>
              </div>
              <div>
                <p className="text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  MedAugment <span className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-300" style={{ backgroundColor: 'rgba(13, 148, 136, 0.3)', border: '1px solid rgba(45, 212, 191, 0.3)' }}>AI</span>
                </p>
                <p className="text-xs font-medium" style={{ color: '#94A3B8' }}>
                  Radiology Dataset Studio
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Main" className="p-4 space-y-1.5 flex flex-row overflow-x-auto md:flex-col md:overflow-visible">
            {links.map(({ to, label, end, icon }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'hover:text-white'
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? {
                        background: 'linear-gradient(135deg, #0D9488 0%, #4F46E5 100%)',
                        color: '#FFFFFF',
                        boxShadow: '0 4px 12px rgba(13, 148, 136, 0.35)',
                      }
                    : {
                        color: '#CBD5E1',
                        backgroundColor: 'transparent',
                      }
                }
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
                    e.currentTarget.style.color = '#FFFFFF'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#CBD5E1'
                  }
                }}
              >
                <span className="shrink-0">{icon}</span>
                <span className="truncate">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer info badge */}
        <div className="hidden md:block p-5 m-4 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#2DD4BF' }} />
            <p className="text-[11px] font-bold uppercase tracking-wider text-teal-400">Conservative Engine</p>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
            Transformations preserve clinical validity. Originals are never modified.
          </p>
        </div>
      </aside>

      {/* Main Content Pane - Independently Scrollable */}
      <main className="min-w-0 flex-1 h-full overflow-y-auto p-5 md:p-8 lg:p-10" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="mx-auto max-w-6xl">{<Outlet />}</div>
      </main>
    </div>
  )
}
