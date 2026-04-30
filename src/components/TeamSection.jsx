import { Card } from 'react-bootstrap'

export default function TeamSection({ teamName, members }) {
  return (
    <div className="mb-5">
      <h3 className="mb-3" style={{ fontWeight: 'bold' }}>{teamName}</h3>
      <div className="row g-3">
        {members.map((member) => (
          <div key={`${teamName}-${member.name}`} className="col-12 col-sm-6 col-lg-4">
            <Card className="text-center h-100">
              <Card.Img
                variant="top"
                src={member.image}
                alt={`Portrait of ${member.name}`}
                style={{ aspectRatio: '1 / 1', width: '100%', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '0.95rem' }}>{member.name}</Card.Title>
                <Card.Text className="mb-1">{member.title}</Card.Text>
                <Card.Text className="text-muted mb-0">{member.school}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
