export default function PageHeader({ title, subtitle, className = '' }) {
	return (
		<div className={`text-center ${className}`.trim()}>
			<h2 className="mb-3">{title}</h2>
			{subtitle ? (
				<p className="mb-4" style={{ fontSize: '1.1rem', color: '#4b5563' }}>
					{subtitle}
				</p>
			) : null}
		</div>
	)
}