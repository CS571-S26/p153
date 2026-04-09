import { Container } from 'react-bootstrap'
import EventCarousel from '../components/EventCarousel'
import PageHeader from '../components/PageHeader'

export default function CurrentEventsPage() {
  const events = [
    {
      id: 1,
      title: 'Summer Bootcamp',
      images: [
        'https://via.placeholder.com/400x500?text=Tech+Networking+1',
        'https://via.placeholder.com/400x500?text=Tech+Networking+2',
        'https://via.placeholder.com/400x500?text=Tech+Networking+3',
      ],
      date: 'April 15, 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'Student Center, Room 101',
      description: 'Connect with industry professionals, explore career opportunities, and expand your professional network. Refreshments will be provided.',
    },
    {
      id: 2,
      title: 'Study Abroad 101',
      images: [
        'https://via.placeholder.com/400x500?text=Interview+Skills+1',
        'https://via.placeholder.com/400x500?text=Interview+Skills+2',
      ],
      date: 'April 22, 2026',
      time: '4:00 PM - 5:30 PM',
      location: 'Career Center',
      description: 'Learn effective interview techniques, confident body language, and how to answer tricky questions. Register early as spots are limited!',
    },
    {
      id: 3,
      title: 'SAT Prep',
      images: [
        'https://via.placeholder.com/400x500?text=Social+Mixer+1',
        'https://via.placeholder.com/400x500?text=Social+Mixer+2',
        'https://via.placeholder.com/400x500?text=Social+Mixer+3',
        'https://via.placeholder.com/400x500?text=Social+Mixer+4',
      ],
      date: 'May 1, 2026',
      time: '5:30 PM - 7:30 PM',
      location: 'Campus Lawn',
      description: 'Meet fellow Beyond Taiwan members, make new friends, and enjoy games, food, and live music. All students welcome!',
    },
  ]

  return (
    <Container className="py-4">
      <PageHeader title="Past Events" subtitle="Browse previous events and highlights" />
      <EventCarousel events={events} />
    </Container>
  )
}
