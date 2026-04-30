export default function SectionTitle({ as = 'h2', icon, className = '', children }) {
  const Tag = as

  return (
    <Tag className={`home-section-title title-with-icon ${className}`.trim()}>
      {icon ? <span className="page-header-icon" aria-hidden="true">{icon}</span> : null}
      {children}
    </Tag>
  )
}
