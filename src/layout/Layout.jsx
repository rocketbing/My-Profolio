import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <>
      <header className="container-fluid" id="mainHead">
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid">
            <div className="navbar-brand d-flex justify-content-center align-items-end">
              <h2 className="logo d-block">Steve Zhang</h2>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse row mx-3" id="navbarSupportedContent">
              <ul className="navbar-nav nav-pills col-xl-6">
                <li className="nav-item">
                  <NavLink to="/" end className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>About Me</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/projects" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>My Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/resume" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>My Resume</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Get In Touch</NavLink>
                </li>
              </ul>
              <div className="col-xl-5" id="myBirth" />
              <button id="themeIcon" className="col-xl-1 mt-1 btn btn-link" onClick={() => setIsDark(v => !v)} aria-label="Toggle theme">
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <hr />
      <main className="container-fluid">
        <Outlet />
      </main>
      <footer className="py-2 text-start" id="mainFooter">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <p className="mb-0">Copyright<span className="align-text-bottom">&copy;</span> 2025 Steve Zhang</p>
          <a href="https://github.com/rocketbing" target="_blank" className="github" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  )
}


