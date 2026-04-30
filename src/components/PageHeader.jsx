export default function PageHeader({ title, subtitle, className = '' }) {
	return (
		<div className={`text-center ${className}`.trim()}>
			<h1
				className="mb-3"
				style={{
					fontFamily: '"Cinzel", Georgia, serif',
					letterSpacing: '0.08em',
					textTransform: 'uppercase',
				}}
			>
				{title}
			</h1>
			{subtitle ? (
				<p className="mb-4" style={{ fontSize: '1.1rem', color: '#4b5563' }}>
					{subtitle}
				</p>
			) : null}
		</div>
	)
}