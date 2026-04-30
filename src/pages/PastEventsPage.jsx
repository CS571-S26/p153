import { Container } from 'react-bootstrap'
import EventCard from '../components/EventCard'
import PageHeader from '../components/PageHeader'

export default function CurrentEventsPage() {
  const events = [
    {
      id: 1,
      title: '2025 Summer Bootcamp ',
      images: [
        'event1-1.png',
        'event1-2.png',
        'event1-3.png',
      ],
      date: 'April 15, 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'Student Center, Room 101',
      description: 'We will be covering how to stand out in extracurriculars, essay, to create college lists. We also invite speakers from top universities to share their experience studying abroad and application process.',
    },
    {
      id: 2,
      title: 'Study Abroad 101',
      images: [
        'event2-1.png',
        'event2-2.png',
        'event2-3.png',
      ],
      date: 'April 22, 2026',
      time: '4:00 PM - 5:30 PM',
      location: 'Career Center',
      description: 'Come join us as we invite speakers from Europe, North America, Australia, Japan, Korea, and Singapore, where they will share their lives abroad and how they applied to schools in those countries.',
    },
    {
      id: 3,
      title: 'SAT/TOEFL/IELTS Test Prep',
      images: [
        'event3-1.png',
        'event3-2.png',
        'event3-3.png',
      ],
      date: 'May 1, 2026',
      time: '5:30 PM - 7:30 PM',
      location: 'TGF 1100',
      description: 'Join us as we go over the tips and tricks on taking standardized tests and some sample questions.',
    },
  ]

  return (
    <Container className="py-4">
      <PageHeader title="Past Events" subtitle="Browse previous events and highlights" />
      {events.map((event) => (
        <EventCard key={event.id} event={event} variant="detailed" />
      ))}
    </Container>
  )
}
