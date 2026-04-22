import { useState } from 'react'
import { Container, Card, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'

export default function CurriculumPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        subtitle="Our curriculum team builds practical, student-friendly learning experiences."
      />
      <Card className="shadow-sm">
        <Card.Body>
          <Row className="align-items-center g-4">
            <Col md={5}>
              <img
                src="/flyer.png"
                alt="Curriculum event flyer"
                style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
              />
            </Col>
            <Col md={7}>
              <h3 className="mb-3">2026 Summer Bootcamp</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563' }}>
                Join a weekend bootcamp focused on communication, project planning, and career readiness.
              </p>
              <p><strong>Date/Time:</strong> May 10, 2026, 1:00 PM - 4:30 PM</p>
              <p><strong>Location:</strong> Engineering Hall 220</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="shadow-sm mt-4">
        <Card.Body>
          <h3 className="mb-3">Registration Form</h3>
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
                <Form.Group controlId="curriculumNotes">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Add any questions or comments"
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
