import { Accordion } from 'react-bootstrap'

export default function FAQSection({ title = 'FAQ', items = [] }) {
  return (
    <section className="mx-auto mt-4" style={{ maxWidth: '56rem' }}>
      <h3 className="mb-3">{title}</h3>
      <Accordion alwaysOpen>
        {items.map((item, index) => (
          <Accordion.Item eventKey={`${index}`} key={`${item.question}-${index}`}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  )
}
