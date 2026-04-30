import { useState } from 'react'
import { Container, Card, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'
import FAQSection from '../components/FAQSection'
import StatsCounter from '../components/StatsCounter'
import TestimonialCard from '../components/TestimonialCard'

export default function CurriculumPage() {
  const stats = [
    { number: '3-5', label: 'Programs Each Year' },
    { number: '100+', label: 'Attendees' },
    { number: '20+', label: 'Events' },
  ]

  const testimonials = [
    {
      name: 'Angela Lin',
      role: 'Workshop Attendee',
      school: 'Taipei Municipal High School',
      testimonial: 'The bootcamp gave me practical steps for planning my applications and building confidence.',
      image: 'https://via.placeholder.com/50?text=Angela',
    },
    {
      name: 'Kevin Hsu',
      role: 'Panel Participant',
      school: 'Taichung First Senior High',
      testimonial: 'I learned a lot from student speakers and left with clear next steps for studying abroad.',
      image: 'https://via.placeholder.com/50?text=Kevin',
    },
    {
      name: 'Mia Chang',
      role: 'Workshop Attendee',
      school: 'Kaohsiung Senior High School',
      testimonial: 'The sessions were practical and easy to follow. I now have a much clearer plan for my next steps.',
      image: 'https://via.placeholder.com/50?text=Mia',
    },
  ]

  const faqItems = [
    {
      question: 'Who can join the curriculum events?',
      answer: 'Any student interested in studying abroad is welcome to join.',
    },
    {
      question: 'Do I need to pay to attend?',
      answer: 'Most Beyond Taiwan workshops and camps are free of charge.',
    },
    {
      question: 'How will I know my registration is complete?',
      answer: 'After submitting the form, you will see a confirmation message and receive an email update.',
    },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    grade: '',
    role: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
    if (submitted) {
      setSubmitted(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Container className="py-4">
      <PageHeader
        title="Curriculum"
      />
      <section className="mx-auto mb-4" style={{ maxWidth: '56rem' }}>
        <p className="mb-0">
          Since its founding in 2020, Beyond Taiwan has organized 3 to 5 workshops, panels, and camps each year, both online and in person. Nearly all of our programs are offered free of charge, ensuring that every student interested in studying abroad has an equal opportunity to pursue this path.
        </p>
      </section>
      <StatsCounter stats={stats} />
      <section className="my-5 py-2">
        <Row className="align-items-center g-4">
          <Col md={5}>
            <img
              src="flyer.png"
              alt="Curriculum event flyer"
              style={{ width: '92%', maxWidth: '28rem', borderRadius: '12px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
            />
          </Col>
          <Col md={7}>
            <h2 className="mb-3">2026 Summer Bootcamp</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#5A5A5A' }}>
              Join a weekend bootcamp to learn more abroad studying abroad and how to stand out in applications with speakers from across the world.
            </p>
            <p><strong>Date/Time:</strong> June 7, 2026, 9:00 AM - 5:00 PM</p>
            <p><strong>Location:</strong> TFG</p>
          </Col>
        </Row>
      </section>

      

      <FAQSection items={faqItems} />

      <section className="mt-4">
        <h2 className="mb-3">Attendee Feedback</h2>
        <Row className="g-3">
          {testimonials.map((testimonial, index) => (
            <Col key={index} xs={12} md={4}>
              <TestimonialCard {...testimonial} />
            </Col>
          ))}
        </Row>
      </section>

      <Card className="shadow-sm mt-4">
        <Card.Body>
          <h2 className="mb-3">Registration Form</h2>
          <Form onSubmit={handleSubmit}>
            {submitted ? (
              <Alert variant="success">You are registered. Check your email for a confirmation message.</Alert>
            ) : null}
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="curriculumName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="curriculumEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="curriculumSchool">
                  <Form.Label>School</Form.Label>
                  <Form.Control
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="Enter your school"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="curriculumGrade">
                  <Form.Label>Grade</Form.Label>
                  <Form.Control
                    type="text"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    placeholder="Enter your grade"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="curriculumNotes">
                  <Form.Label>Why do you want to attend this event?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Share your motivation for attending"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12} className="text-end">
                <Button variant="dark" type="submit">
                  Sign Up
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

     
    </Container>
  )
}
