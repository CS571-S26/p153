import { Card } from 'react-bootstrap'
import SignupForm from '../components/SignupForm'
import PageHeader from '../components/PageHeader'
import '../App.css'

export default function MentorshipProgramPage() {
	return (
		<div className="container py-2">
			<PageHeader
				title="Mentorship Program"
				subtitle="What mentorship program is about"
			/>

			<div className="row g-3">
				<div className="col-12 col-md-6">
					<Card className="h-100">
						<Card.Body className="d-flex flex-column">
							<Card.Title>Becoming a Mentor</Card.Title>
							<p className="text-muted">Guide students by sharing your experience and practical advice.</p>
							<ul>
								<li>Complete mentor profile</li>
								<li>Choose mentorship topics</li>
								<li>Set weekly availability</li>
							</ul>
							<SignupForm roleLabel="Mentor" buttonVariant="outline-dark" />
						</Card.Body>
					</Card>
				</div>

				<div className="col-12 col-md-6">
					<Card className="h-100">
						<Card.Body className="d-flex flex-column">
							<Card.Title>Becoming a Mentee</Card.Title>
							<p className="text-muted">Connect with mentors to receive support on academics and career growth.</p>
							<ul>
								<li>Complete mentee profile</li>
								<li>Pick preferred mentor focus areas</li>
								<li>Submit mentorship request</li>
							</ul>
							<SignupForm roleLabel="Mentee" buttonVariant="dark" />
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	)
}
