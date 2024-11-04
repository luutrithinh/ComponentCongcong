import React from 'react'
import Item1 from '../assets/Item1.png'
import Item2 from '../assets/Item2.png'
import Item3 from '../assets/Item3.png'
import Item4 from '../assets/Item4.png'
import './Product_Item.css'
export default function Product_Item() {
  return (
    <div className="container">
      <div className="title">NEW ARRIVALS</div>
      <div className="products">
        <div className="product-card">
          <img
            src={Item1}
            alt="T-shirt with Tape Details"
            className="product-image"
          />
          <div className="product-name">T-shirt with Tape Details</div>
          <div className="rating">★★★★☆ 4.5/5</div>
          <div className="product-price">$120</div>
        </div>
        <div className="product-card">
          <img src={Item2} alt="Skinny Fit Jeans" className="product-image" />
          <div className="product-name">Skinny Fit Jeans</div>
          <div className="rating">★★★☆☆ 3.5/5</div>
          <div className="product-price">
            $240 <span className="old-price">$260</span>
            <span className="discount">-20%</span>
          </div>
        </div>
        <div className="product-card">
          <img src={Item3} alt="Checkered Shirt" className="product-image" />
          <div className="product-name">Checkered Shirt</div>
          <div className="rating">★★★★☆ 4.5/5</div>
          <div className="product-price">$180</div>
        </div>
        <div className="product-card">
          <img
            src={Item4}
            alt="Sleeve Striped T-shirt"
            className="product-image"
          />
          <div className="product-name">Sleeve Striped T-shirt</div>
          <div className="rating">★★★★☆ 4.5/5</div>
          <div className="product-price">
            $130 <span className="old-price">$160</span>
            <span className="discount">-30%</span>
          </div>
        </div>
      </div>
      <button className="View">View ALL</button>
    </div>

  )
}
