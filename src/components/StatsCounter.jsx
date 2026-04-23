export default function StatsCounter({ stats = [] }) {
  return (
    <section className="my-4">
      <div className="container" style={{ maxWidth: '56rem' }}>
        <div className="row g-3 text-center justify-content-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3">
              <div
                className="h-100 d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: '#F2B65A',
                  borderRadius: '12px',
                  minHeight: '118px',
                  padding: '0.85rem 0.6rem',
                }}
              >
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    lineHeight: 1.1,
                    marginBottom: '0.35rem',
                  }}
                >
                  {stat.number}
                </h2>
                <p style={{ fontSize: '0.92rem', color: '#5A5A5A', margin: 0 }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
