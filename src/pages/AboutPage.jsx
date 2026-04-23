import '../App.css'
import PageHeader from '../components/PageHeader'
import TeamSection from '../components/TeamSection'

export default function AboutPage() {
  const teams = {
    Presidents: [
      {
        name: 'Sarah Chen',
        title: 'Co-President',
        school: 'University of California, Berkeley',
        image: 'https://via.placeholder.com/200?text=Sarah+Chen',
      },
      {
        name: 'Alex Rodriguez',
        title: 'Co-President',
        school: 'New York University',
        image: 'https://via.placeholder.com/200?text=Alex+Rodriguez',
      },
    ],
    Curriculum: [
      {
        name: 'Jamie Park',
        title: 'Curriculum Lead',
        school: 'University of Toronto',
        image: 'https://via.placeholder.com/200?text=Jamie+Park',
      },
      {
        name: 'Taylor Smith',
        title: 'Curriculum Associate',
        school: 'University of Washington',
        image: 'https://via.placeholder.com/200?text=Taylor+Smith',
      },
    ],
    Mentorship: [
      {
        name: 'Jordan Lee',
        title: 'Mentorship Coordinator',
        school: 'University of Michigan',
        image: 'https://via.placeholder.com/200?text=Jordan+Lee',
      },
    ],
    Internship: [
      {
        name: 'Casey Martinez',
        title: 'Internship Program Lead',
        school: 'University of Southern California',
        image: 'https://via.placeholder.com/200?text=Casey+Martinez',
      },
      {
        name: 'Morgan Davis',
        title: 'Career Partnerships Associate',
        school: 'Boston University',
        image: 'https://via.placeholder.com/200?text=Morgan+Davis',
      },
    ],
    Sponsorship: [
      {
        name: 'Riley Anderson',
        title: 'Sponsorship Lead',
        school: 'University of Illinois Urbana-Champaign',
        image: 'https://via.placeholder.com/200?text=Riley+Anderson',
      },
    ],
    Marketing: [
      {
        name: 'Blake Wilson',
        title: 'Marketing Lead',
        school: 'University of British Columbia',
        image: 'https://via.placeholder.com/200?text=Blake+Wilson',
      },
      {
        name: 'Drew Brown',
        title: 'Social Media Associate',
        school: 'University of Edinburgh',
        image: 'https://via.placeholder.com/200?text=Drew+Brown',
      },
    ],
  }

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <PageHeader title="About BT"className="mt-2" />

      <div className="w-100" style={{ maxWidth: '56rem' }}>
        <section className="mt-4">
          <h4 className="mb-2">Our Belief</h4>
          <p className="mb-4">
            We believe every student deserves the freedom to choose their own educational path.
          </p>
        </section>

        <section className="mt-2">
          <h4 className="mb-2">Who are We?</h4>
          <p className="mb-3">
            We are a nonprofit founded by Taiwanese students studying at institutions around the world, united by a shared mission: to empower others to explore education beyond traditional boundaries. Through mentorship, institutional knowledge, and a supportive community, we help make alternative and non-traditional college pathways more accessible and less intimidating.
          </p>
          <p className="mb-4">
            As a student-led organization, we bring together members from diverse academic disciplines and global institutions. This diversity allows us to offer personalized guidance tailored to each student’s interests and goals. More than that, we are an international network—connecting students across borders and opening doors to opportunities worldwide.
          </p>
        </section>

        <h3 className="mb-4 mt-5">Board Members</h3>
        {Object.entries(teams).map(([teamName, members]) => (
          <TeamSection key={teamName} teamName={teamName} members={members} />
        ))}
      </div>
    </div>
  )
}
