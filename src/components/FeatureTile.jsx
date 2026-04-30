import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function FeatureTile({ to, image, title, icon }) {
  return (
    <div className="col-12 col-md-4">
      <Link to={to} className="feature-tile" style={{ backgroundImage: `url('${image}')` }}>
        <div className="feature-overlay">
          <h2 className="feature-title-with-icon">
            {icon}
            {title}
          </h2>
          <span className="btn btn-outline-light">
            Learn More
            <FaArrowRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    </div>
  )
}
