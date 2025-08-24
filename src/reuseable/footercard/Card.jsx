import React from 'react'
import './card.css'
import { FaBaseballBall } from "react-icons/fa";


const Card = () => {
  return (
    <div className='f-card'>

      <div className="card-icon"><FaBaseballBall />
      </div>

      <div className="card-text">
        <h3>Immediate Deployment</h3>
        <p>Et vero eos et accusamus et 
iusto odio dignissimos</p>
      </div>
    </div>
  )
}

export default Card
