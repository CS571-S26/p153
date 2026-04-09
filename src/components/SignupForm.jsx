import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function SignupForm({ roleLabel, buttonVariant }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		school: '',
		notes: '',
	})

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((current) => ({
			...current,
			[name]: value,
		}))
	}

	return (
		<Form className="mt-3">
			<Form.Group className="mb-3" controlId={`${roleLabel}-name`}>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Enter your name"
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
