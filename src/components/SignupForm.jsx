import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

export default function SignupForm({ roleLabel, buttonVariant }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		school: '',
		notes: '',
	})
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((current) => ({
			...current,
			[name]: value,
		}))
		if (submitted) {
			setSubmitted(false)
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setSubmitted(true)
	}

	return (
		<Form className="mt-3" onSubmit={handleSubmit}>
			{submitted ? (
				<Alert variant="success">Thanks for signing up as a {roleLabel}. We will contact you soon.</Alert>
			) : null}
			<Form.Group className="mb-3" controlId={`${roleLabel}-name`}>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Enter your name"
					required
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId={`${roleLabel}-email`}>
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Enter your email"
					required
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId={`${roleLabel}-school`}>
				<Form.Label>School</Form.Label>
				<Form.Control
					type="text"
					name="school"
					value={formData.school}
					onChange={handleChange}
					placeholder="Enter your school"
					required
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId={`${roleLabel}-notes`}>
				<Form.Label>Why do you want to become a mentor/mentee?</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					name="notes"
					value={formData.notes}
					onChange={handleChange}
					placeholder="Add a short message"
				/>
			</Form.Group>

			<Button variant={buttonVariant} className="w-100" type="submit">
				Sign Up as {roleLabel}
			</Button>
		</Form>
	)
}
