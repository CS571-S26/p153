import { Card } from 'react-bootstrap'
import SignupForm from '../components/SignupForm'
import PageHeader from '../components/PageHeader'
import FAQSection from '../components/FAQSection'
import StatsCounter from '../components/StatsCounter'
import TestimonialCard from '../components/TestimonialCard'
import '../App.css'

export default function MentorshipProgramPage() {
	const stats = [
		{ number: '50+', label: 'Colleges' },
		{ number: '100+', label: 'Mentors' },
		{ number: '100+', label: 'Students' },
	]

	const faqItems = [
		{
			question: 'Who can apply as a mentee?',
			answer: 'Taiwanese public high school students who want to learn more about studying abroad or are preparing to apply to colleges abroad.',
		},
		{
			question: 'Who can apply as a mentor?',
			answer: 'Any student who has the experience of applying to colleges abroad.',
		},
		{
			question: 'How does match work?',
			answer: 'Mentors and mentees are matched one-on-one based on target country, study field, interests, and background.',
		},
		{
			question: 'What is the commitment?',
			answer: 'Regular meetings with mentee/mentor depend on how you would like to work with your mentee/mentor. All mentors and menteess need to attend orientation at the beginning of the term and at least one workshop and coffee chat. There will be two check-in surveys throughout the term, be sure to fill them out.',
		},
		{
			question: 'Can mentees become mentors in the future?',
			answer: 'Yes. Many mentees return to support younger students as mentors in later semesters.',
		},
	]

	const testimonials = [
		{
			name: 'Yun Chen',
			role: 'Mentee',
			school: 'Taipei First Girls High School',
			testimonial: 'My mentor helped me build my timeline and essays. I felt supported the whole semester.',
			image: 'https://via.placeholder.com/50?text=Yun',
		},
		{
			name: 'Eric Wang',
			role: 'Mentor',
			school: 'University of Toronto',
			testimonial: 'Mentoring gave me a way to give back. Seeing students grow more confident was incredibly rewarding.',
			image: 'https://via.placeholder.com/50?text=Eric',
		},
		{
			name: 'Sophia Liu',
			role: 'Mentee',
			school: 'Taichung Girls High School',
			testimonial: 'The one-on-one support helped me stay organized and less stressed during applications.',
			image: 'https://via.placeholder.com/50?text=Sophia',
		},
	]

	return (
		<div className="container py-2">
			<PageHeader
				title="Mentorship Program"
			/>

			<section className="mt-2 mx-auto" style={{ maxWidth: '56rem' }}>
				<p>
					Beyond Taiwan organizes a Mentorship Program each semester to help Taiwanese public high school students apply to overseas universities. Mentees will be matched one-on-one with senior students (mentors) who have successfully applied to overseas universities, based on their target country, field of study, academic interests, and extracurricular background.
				</p>
				<p className="mb-0">
					Through this program, mentees will not only receive professional guidance on application strategies and academic development, but also become part of the Beyond Taiwan community. They can connect with like-minded peers pursuing studies abroad, exchange experiences, share resources, and support and encourage one another throughout the application process. In the future, these mentees may return to the community as mentors themselves, continuing to guide younger students and allowing this impact to grow and spread.
				</p>
			</section>

			<StatsCounter stats={stats} />

			<FAQSection items={faqItems} />

			<section className="mt-4">
				<h2 className="mb-3">Mentor & Mentee Feedback</h2>
				<div className="row g-3">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="col-12 col-md-4">
							<TestimonialCard {...testimonial} />
						</div>
					))}
				</div>
			</section>

			<div className="row g-3 mt-3">
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
