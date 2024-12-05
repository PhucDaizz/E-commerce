import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import start_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-starts">
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">${product.old_price}</div>
            <div className="productdisplay-right-prices-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            This stylish and versatile jacket is perfect for any season. Made from high-quality materials, it provides both warmth and comfort. 
            The exterior is crafted from durable, water-resistant fabric, ensuring you stay dry during unexpected showers. 
            The interior is lined with soft, breathable cotton, making it comfortable to wear all day long. 
            The jacket features a full-length zipper, making it easy to put on and take off. 
            It has two spacious front pockets, perfect for keeping your hands warm or storing small essentials. 
            The adjustable hood adds an extra layer of protection against the wind and rain, while the ribbed cuffs and hem provide a snug fit, keeping the cold air out. 
            Available in a range of colors, this jacket is both functional and fashionable, making it a must-have addition to any wardrobe. 
            Whether you're heading out for a casual day out or a brisk evening walk, this jacket will keep you warm and stylish.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button onClick={()=> {addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Moderm, Latest</p>

        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
