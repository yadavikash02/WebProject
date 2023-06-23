import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div id="sidebar">
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/information">Information</Link></li>
      <li><Link to="/guide">Guide</Link></li>
    </ul>
  </div>
  )
}

export default Sidebar
