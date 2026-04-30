export default function PageHeader({ title, subtitle, icon, className = '' }) {
	return (
		<div className={`text-center ${className}`.trim()}>
			<h1
				className={`mb-3 ${icon ? 'title-with-icon justify-content-center' : ''}`.trim()}
				style={{
					fontFamily: '"Cinzel", Georgia, serif',
					letterSpacing: '0.08em',
					textTransform: 'uppercase',
				}}
			>
				{icon ? <span className="page-header-icon" aria-hidden="true">{icon}</span> : null}
				{title}
			</h1>
			{subtitle ? (
				<p className="mb-4" style={{ fontSize: '1.1rem', color: '#1f1f1f' }}>
					{subtitle}
				</p>
			) : null}
		</div>
	)
}