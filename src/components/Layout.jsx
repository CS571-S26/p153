import { NavLink, Outlet, Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
import Footer from './Footer'
import '../App.css'

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="app-brand" aria-label="Go to home page">
          <img className="app-logo" src="logo.png" alt="Beyond Taiwan logo" />
          <span className="app-brand-text">
            <strong>Beyond Taiwan</strong>
          </span>
        </Link>

        <Navbar expand="md" className="app-nav" aria-label="Primary navigation">
          <Navbar.Toggle aria-controls="primary-navigation" />
          <Navbar.Collapse id="primary-navigation">
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
          </Navbar.Collapse>
        </Navbar>

        <div className="d-flex align-items-center gap-2">
          <SocialIcon
            url="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 32, width: 32 }}
            fgColor="#ffffff"
            bgColor="#E79A2E"
          />
          <SocialIcon
            url="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 32, width: 32 }}
            fgColor="#ffffff"
            bgColor="#E79A2E"
          />
          <SocialIcon
            url="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 32, width: 32 }}
            fgColor="#ffffff"
            bgColor="#E79A2E"
          />
          <SocialIcon
            url="https://lin.ee/NmwIzZk"
            network="line"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 32, width: 32 }}
            fgColor="#ffffff"
            bgColor="#E79A2E"
          />
        </div>
      </header>

      <main className="app-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
