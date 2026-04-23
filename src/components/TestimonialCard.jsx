import { Card } from 'react-bootstrap'

export default function TestimonialCard({ name, role, school, testimonial }) {
  return (
    <Card className="h-100 shadow-sm" style={{ border: 'none', borderTop: '4px solid #E79A2E' }}>
      <Card.Body>
        <div className="mb-3">
          <div>
            <Card.Title style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>
              {name}
            </Card.Title>
            <Card.Subtitle className="text-muted" style={{ fontSize: '0.85rem' }}>
              {role} • {school}
            </Card.Subtitle>
          </div>
        </div>
        <Card.Text style={{ fontSize: '0.95rem', color: '#5A5A5A', lineHeight: '1.6' }}>
          "{testimonial}"
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
