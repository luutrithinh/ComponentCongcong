import React from 'react'
import '../pagination/pagination.css'
export default function pagination() {
  return (
    <div className="pagination">
    <button className="previous">« Previous</button>
    <a href="#" className="active">
      1
    </a>
    <a href="#">2</a>
    <a href="#">3</a>
    <span>...</span>
    <a href="#">8</a>
    <a href="#">9</a>
    <a href="#">10</a>
    <button className="next">Next »</button>
  </div>
  )
}
