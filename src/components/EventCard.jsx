import { useState } from 'react'
import { Carousel, Row, Col, Card } from 'react-bootstrap'

export default function EventCard({ event, variant = 'detailed' }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (variant === 'compact') {
    // Compact card view
    return (
      <Card className="h-100 shadow-sm" style={{ border: 'none' }}>
        <Card.Img
          variant="top"
          src={event.images[0]}
          style={{ height: '200px', objectFit: 'cover' }}
          alt={event.title}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{event.title}</Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
            <strong>Date:</strong> {event.date}
          </Card.Text>
          <Card.Text style={{ fontSize: '0.85rem', color: '#1f1f1f', lineHeight: '1.7' }}>
            {event.description.substring(0, 80)}...
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  // Detailed carousel view (default)
  return (
    <div className="event-card-detailed">
      <Row className="align-items-center g-4">
        <Col md={5} className="mb-4 mb-md-0">
          <Carousel
            activeIndex={activeImageIndex}
            onSelect={(index) => setActiveImageIndex(index)}
            controls
            indicators
          >
            {event.images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <img
                  d="block"
                  width="100%"
                  src={image}
                  alt={`${event.title} ${idx + 1}`}
                  style={{ height: '500px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        <Col md={5}>
          <div>
            <h3 style={{ marginBottom: '1rem', color: '#8A5A12' }}>{event.title}</h3>
            <div style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
            </div>
            <p style={{ fontSize: '1rem', color: '#1f1f1f', lineHeight: '1.75' }}>
              {event.description}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
