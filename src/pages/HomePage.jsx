import { useState } from 'react'
import '../App.css'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TestimonialCard from '../components/TestimonialCard'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const feedback = [
    {
      name: 'Student A',
      role: 'Mentorship participant',
      school: 'Taipei Municipal High School',
      testimonial: 'I felt much more confident after the program and finally had a clear plan for my next steps.',
    },
    {
      name: 'Student B',
      role: 'Workshop attendee',
      school: 'Kaohsiung Senior High School',
      testimonial: 'The advice was practical, encouraging, and easy to apply right away.',
    },
    {
      name: 'Student C',
      role: 'Community member',
      school: 'Taichung First Senior High',
      testimonial: 'I loved how supportive the community felt. It made the process much less intimidating.',
    },
  ]

  const handleMailingListSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <>
      <header className="home-hero-large py-5">
        <div className="container text-center">
          <h1 className="display-title">Beyond Taiwan</h1>
        </div>
      </header>

      <main className="home-page">
        <section className="feature-tiles container py-5">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <Link to="/mentorship-program" className="feature-tile" style={{ backgroundImage: "url('mentorship.png')" }}>
                <div className="feature-overlay">
                  <h2>Mentorship Program</h2>
                  <span className="btn btn-outline-light">Learn More</span>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-4">
              <Link to="/events/curriculum" className="feature-tile" style={{ backgroundImage: "url('event2-1.png')" }}>
                <div className="feature-overlay">
                  <h2>Events</h2>
                  <span className="btn btn-outline-light">Learn More</span>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-4">
              <Link to="/about" className="feature-tile" style={{ backgroundImage: "url('event3-1.png')" }}>
                <div className="feature-overlay">
                  <h2>Past Events</h2>
                  <span className="btn btn-outline-light">Learn More</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-5 home-about-section">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <h2 className="home-section-title text-start">About Us</h2>
              <p className="home-about-text">
                Started by a group of enthusiastic and compassionate college students, Beyond Taiwan is a non-profit
                organization dedicated to helping public high school students choose their own educational journey.
                We believe that a personalized education can empower individuals to lead a successful and
                influential career and life as a whole.
              </p>
              <p className="home-about-text mb-4">
                By providing knowledge transfers, 1-1 mentorships, and a supportive community, we strive to make
                alternative, non-traditional college options accessible.
              </p>
              <Button as={Link} to="/about" variant="dark">
                Meet Our Team
              </Button>
            </div>
            <div className="col-12 col-lg-5 text-center">
              <img className="home-about-logo" src="logo.png" alt="Beyond Taiwan logo" />
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <h2 className="home-section-title text-center">Our Team</h2>
              <div className="home-photo-frame">
                <img src="team.jpeg" alt="Our team" className="home-photo-large" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="home-section-title text-center">Our Mentee</h2>
              <div className="home-photo-frame">
                <img src="member.jpeg" alt="Our mentee" className="home-photo-large" />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5 home-feedback">
          <h2 className="home-section-title text-center mb-4">Student Feedback</h2>
          <div className="row g-3">
            {feedback.map((item) => (
              <div className="col-12 col-md-4" key={item.name}>
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </section>

        <section className="container py-5">
          <div className="home-mailing-list">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-6">
                <h2 className="home-section-title text-start mb-3">Join our mailing list</h2>
                <p className="home-about-text mb-0">
                  Get updates about upcoming mentorship cycles, events, and application tips delivered straight to your inbox.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                {submitted ? (
                  <Alert variant="success" className="mb-3">
                    Thanks for subscribing. We’ll keep you posted.
                  </Alert>
                ) : null}
                <Form className="home-mailing-form" onSubmit={handleMailingListSubmit}>
                  <Form.Group controlId="mailingListEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value)
                        if (submitted) {
                          setSubmitted(false)
                        }
                      }}
                      required
                    />
                  </Form.Group>
                  <Button variant="dark" type="submit">
                    Subscribe
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
