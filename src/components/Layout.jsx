import { NavLink, Outlet, Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../App.css'

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="app-brand" aria-label="Go to home page">
          <img className="app-logo" src="public/logo.png" alt="Beyond Taiwan logo" />
          <span className="app-brand-text">
            <strong>Beyond Taiwan</strong>
          </span>
        </Link>

        <Navbar className="app-nav" aria-label="Primary navigation">
          <Nav className="ms-auto align-items-md-center gap-2">
            <Nav.Link as={NavLink} to="/" end className={({ isActive }) => isActive ? 'app-nav-link active' : 'app-nav-link'}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={({ isActive }) => isActive ? 'app-nav-link active' : 'app-nav-link'}>
              About
            </Nav.Link>
            <NavDropdown title="Events" className="app-nav-dropdown">
              <NavDropdown.Item key="curriculum" as={Link} to="/events/curriculum">
                Curriculum
              </NavDropdown.Item>
              <NavDropdown.Item key="past-event" as={Link} to="/events/pastevent">
                Past Event
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/mentorship-program" className={({ isActive }) => isActive ? 'app-nav-link active' : 'app-nav-link'}>
              Mentorship Program
            </Nav.Link>
            
          </Nav>
        </Navbar>
      </header>

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}
