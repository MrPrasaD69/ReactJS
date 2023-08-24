import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div class="text-center mt-5 mb-5">
      <img src="img/erreur-404.jpg" className="img-fluid" alt="augrade"/>
      <h4>Go to the  <Link to="/"><strong>Homepage</strong></Link></h4>
    </div>
  )
}
