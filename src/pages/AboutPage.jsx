import '../App.css'
import { FaBookOpen, FaGlobeAmericas, FaUsers } from 'react-icons/fa'
import PageHeader from '../components/PageHeader'
import TeamSection from '../components/TeamSection'

export default function AboutPage() {
  const teams = {
    Presidents: [
      {
        name: 'Sarah Chen',
        title: 'Co-President',
        school: 'University of California, Berkeley',
        image: 'person2.webp',
      },
      {
        name: 'Alex Rodriguez',
        title: 'Co-President',
        school: 'New York University',
        image: 'person1.png',
      },
    ],
    Curriculum: [
      {
        name: 'Jamie Park',
        title: 'Curriculum Lead',
        school: 'University of Toronto',
        image: 'person3.png',
      },
      {
        name: 'Taylor Smith',
        title: 'Curriculum Associate',
        school: 'University of Washington',
        image: 'person4.webp',
      },
    ],
    Mentorship: [
      {
        name: 'Jordan Lee',
        title: 'Mentorship Coordinator',
        school: 'University of Michigan',
        image: 'person5.jpeg',
      },
    ],
    Internship: [
      {
        name: 'Casey Martinez',
        title: 'Internship Program Lead',
        school: 'University of Southern California',
        image: 'person6.webp',
      },
      {
        name: 'Morgan Davis',
        title: 'Career Partnerships Associate',
        school: 'Boston University',
        image: 'person7.jpg',
      },
    ],
    Sponsorship: [
      {
        name: 'Riley Anderson',
        title: 'Sponsorship Lead',
        school: 'University of Illinois Urbana-Champaign',
        image: 'person8.webp',
      },
    ],
    Marketing: [
      {
        name: 'Blake Wilson',
        title: 'Marketing Lead',
        school: 'University of British Columbia',
        image: 'person9.webp',
      },
      {
        name: 'Drew Brown',
        title: 'Social Media Associate',
        school: 'University of Edinburgh',
        image: 'person10.jpeg',
      },
    ],
  }

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <PageHeader title="About Beyond Taiwan" className="mt-2" />

      <div className="w-100" style={{ maxWidth: '56rem' }}>
        <section className="mt-4">
          <h2 className="mb-2 title-with-icon"><FaBookOpen aria-hidden="true" /> Our Belief</h2>
          <p className="mb-4">
            We believe every student deserves the freedom to choose their own educational path.
          </p>
        </section>

        <section className="mt-2">
          <h2 className="mb-2 title-with-icon"><FaGlobeAmericas aria-hidden="true" /> Who are We?</h2>
          <p className="mb-3">
            We are a nonprofit founded by Taiwanese students studying at institutions around the world, united by a shared mission: to empower others to explore education beyond traditional boundaries. Through mentorship, institutional knowledge, and a supportive community, we help make alternative and non-traditional college pathways more accessible and less intimidating.
          </p>
          <p className="mb-4">
            As a student-led organization, we bring together members from diverse academic disciplines and global institutions. This diversity allows us to offer personalized guidance tailored to each student’s interests and goals. More than that, we are an international network—connecting students across borders and opening doors to opportunities worldwide.
          </p>
        </section>

        <h2 className="mb-4 mt-5 title-with-icon"><FaUsers aria-hidden="true" /> Board Members</h2>
        {Object.entries(teams).map(([teamName, members]) => (
          <TeamSection key={teamName} teamName={teamName} members={members} />
        ))}
      </div>
    </div>
  )
}
