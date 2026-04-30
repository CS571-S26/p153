import { useState } from 'react'
import '../App.css'
import { Alert, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaEnvelopeOpenText, FaHistory, FaInfoCircle, FaUserFriends, FaUsers } from 'react-icons/fa'
import TestimonialCard from '../components/TestimonialCard'
import FeatureTile from '../components/FeatureTile'
import SectionTitle from '../components/SectionTitle'
import ContentSection from '../components/ContentSection'

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
      <header className="home-hero-large">
        <div className="home-hero-media">
          <img
            className="home-hero-image"
            src="hero.png"
            alt="Students at a Beyond Taiwan event"
          />
          <h1 className="display-title home-hero-title">Beyond Taiwan</h1>
        </div>
      </header>

      <main className="home-page">
        <ContentSection className="feature-tiles">
          <div className="row g-4">
            <FeatureTile
              to="/mentorship-program"
              image="mentorship.png"
              title="Mentorship Program"
              icon={<FaUserFriends aria-hidden="true" />}
            />
            <FeatureTile
              to="/events/curriculum"
              image="event2-1.png"
              title="Events"
              icon={<FaCalendarAlt aria-hidden="true" />}
            />
            <FeatureTile
              to="/events/pastevent"
              image="event3-1.png"
              title="Past Events"
              icon={<FaHistory aria-hidden="true" />}
            />
          </div>
        </ContentSection>

        <ContentSection className="home-about-section">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <SectionTitle className="text-start" icon={<FaInfoCircle aria-hidden="true" />}>About Us</SectionTitle>
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
        </ContentSection>

        <ContentSection>
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <SectionTitle className="text-center justify-content-center" icon={<FaUsers aria-hidden="true" />}>Our Team</SectionTitle>
              <div className="home-photo-frame">
                <img src="team.jpeg" alt="Our team" className="home-photo-large" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <SectionTitle className="text-center justify-content-center" icon={<FaUserFriends aria-hidden="true" />}>Our Mentee</SectionTitle>
              <div className="home-photo-frame">
                <img src="member.jpeg" alt="Our mentee" className="home-photo-large" />
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection className="home-feedback">
          <SectionTitle className="text-center mb-4 justify-content-center" icon={<FaUsers aria-hidden="true" />}>Student Feedback</SectionTitle>
          <div className="row g-3">
            {feedback.map((item) => (
              <div className="col-12 col-md-4" key={item.name}>
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection>
          <div className="home-mailing-list">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-6">
                <SectionTitle className="text-start mb-3" icon={<FaEnvelopeOpenText aria-hidden="true" />}>Join our mailing list</SectionTitle>
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
        </ContentSection>
      </main>
    </>
  )
}
