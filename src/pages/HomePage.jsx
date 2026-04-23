import '../App.css'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import StatsCounter from '../components/StatsCounter'
import TestimonialCard from '../components/TestimonialCard'

export default function HomePage() {
  return (
    <div className="container py-4">
      <PageHeader
        title="Beyond Taiwan"
        subtitle="A student-led community creating opportunities in mentorship, leadership, and events."
      />

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h3 className="mb-3">What We Do</h3>
          <p className="mb-3" style={{ color: '#5A5A5A', lineHeight: '1.7' }}>
            We organize workshops, mentoring sessions, and campus events to help students build practical
            skills and stronger professional networks.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <Button as={Link} to="/mentorship-program" variant="dark">
              Join Mentorship
            </Button>
            <Button as={Link} to="/events/curriculum" variant="outline-dark">
              Explore Curriculum Events
            </Button>
          </div>
        </Card.Body>
      </Card>

      <div className="row g-3">
        <div className="col-12 col-md-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Mentorship</Card.Title>
              <Card.Text>Pairing students with experienced mentors for academic and career support.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Curriculum</Card.Title>
              <Card.Text>Designing workshops that focus on practical tools, collaboration, and confidence.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Community Events</Card.Title>
              <Card.Text>Hosting social and professional events that connect students across interests.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
