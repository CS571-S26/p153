import { useState } from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'

export default function EventCarousel({ events }) {
  const [activeImageIndices, setActiveImageIndices] = useState(
    events.reduce((acc, event, idx) => ({ ...acc, [idx]: 0 }), {})
  )

  const handleSelectImage = (eventIdx, selectedIndex) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [eventIdx]: selectedIndex,
    }))
  }

  return (
    <div>
      {events.map((event, eventIdx) => (
        <div
          key={event.id}
          style={{
            marginBottom: '4rem',
            padding: '2rem',
            border: '1px solid #e5e5e5',
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          }}
        >
          <Row className="align-items-center" style={{ gap: '3rem' }}>
            <Col md={5} className="mb-4 mb-md-0" style={{ flex: '1 1 45%' }}>
              <Carousel
                activeIndex={activeImageIndices[eventIdx]}
                onSelect={(index) => handleSelectImage(eventIdx, index)}
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

            <Col md={5} style={{ flex: '1 1 45%' }}>
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#ffc46c' }}>{event.title}</h3>
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
                <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.6' }}>
                  {event.description}
                </p>
                <button
                  style={{
                    marginTop: '1rem',
                    padding: '0.6rem 1.5rem',
                    backgroundColor: '#ffc46c',
                    color: '#1f2937',
                    border: 'none',
                    borderRadius: '999px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#f5a623')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#ffc46c')}
                >
                  Learn More
                </button>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  )
}
