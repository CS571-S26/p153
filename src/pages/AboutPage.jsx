import '../App.css'
import { Card } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'

export default function AboutPage() {
  const teams = {
    Presidents: [
      { name: 'Sarah Chen', image: 'https://via.placeholder.com/200?text=Sarah+Chen' },
      { name: 'Alex Rodriguez', image: 'https://via.placeholder.com/200?text=Alex+Rodriguez' },
    ],
    Curriculum: [
      { name: 'Jamie Park', image: 'https://via.placeholder.com/200?text=Jamie+Park' },
      { name: 'Taylor Smith', image: 'https://via.placeholder.com/200?text=Taylor+Smith' },
    ],
    Mentorship: [
      { name: 'Jordan Lee', image: 'https://via.placeholder.com/200?text=Jordan+Lee' },
    ],
    Internship: [
      { name: 'Casey Martinez', image: 'https://via.placeholder.com/200?text=Casey+Martinez' },
      { name: 'Morgan Davis', image: 'https://via.placeholder.com/200?text=Morgan+Davis' },
    ],
    Sponsorship: [
      { name: 'Riley Anderson', image: 'https://via.placeholder.com/200?text=Riley+Anderson' },
    ],
    Marketing: [
      { name: 'Blake Wilson', image: 'https://via.placeholder.com/200?text=Blake+Wilson' },
      { name: 'Drew Brown', image: 'https://via.placeholder.com/200?text=Drew+Brown' },
    ],
  }

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <PageHeader title="About" subtitle="What BT is about" className="mt-2" />

      <div className="w-100" style={{ maxWidth: '56rem' }}>
        <h3 className="mb-4 mt-5">Board Members</h3>
        {Object.entries(teams).map(([teamName, members]) => (
          <div key={teamName} className="mb-5">
            <h5 className="mb-3" style={{ fontWeight: 'bold' }}>{teamName}</h5>
            <div className="row g-3">
              {members.map((member, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4">
                  <Card className="text-center h-100">
                    <Card.Img variant="top" src={member.image} style={{ height: '180px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '0.95rem' }}>{member.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
