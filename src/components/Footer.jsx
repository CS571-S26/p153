import { Link } from 'react-router-dom'
import '../App.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-5 py-5" style={{ backgroundColor: '#5A5A5A', color: '#F5F5F5' }}>
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Brand Section */}
          <div className="col-12 col-md-4">
            <h5 className="mb-3">Beyond Taiwan</h5>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              A student-led community empowering Taiwanese students to explore education beyond traditional boundaries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li className="mb-2">
                <Link to="/" style={{ color: '#FFD27A', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" style={{ color: '#FFD27A', textDecoration: 'none' }}>
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/events/curriculum" style={{ color: '#FFD27A', textDecoration: 'none' }}>
                  Curriculum
                </Link>
              </li>
              <li>
                <Link to="/mentorship-program" style={{ color: '#FFD27A', textDecoration: 'none' }}>
                  Mentorship Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4">
            <h5 className="mb-3">Contact</h5>
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Email:</strong> contact@beyondtaiwan.org
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ borderColor: '#D9D9D9', opacity: 0.3 }} />

        {/* Copyright */}
        <div className="text-center" style={{ fontSize: '0.9rem', color: '#D9D9D9' }}>
          <p className="mb-0">
            © {currentYear} Beyond Taiwan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
