export default function ContentSection({ className = '', children }) {
  return <section className={`container py-5 ${className}`.trim()}>{children}</section>
}
