import { useState } from 'react'
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'

export default function CurriculumnPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    notes: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  return (
    <Container className="py-4">
      <PageHeader
        title="Curriculumn"
        subtitle="Description of what curriculum team does"
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
                Description 
              </p>
              <p>Date/Time: </p>
              <p>Location: </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="shadow-sm mt-4">
        <Card.Body>
          <h3 className="mb-3">Registration Form</h3>
          <Form>
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
