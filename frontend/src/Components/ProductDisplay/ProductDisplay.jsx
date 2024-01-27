import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Product_Image" />
          <img src={product.image} alt="Product_Image" />
          <img src={product.image} alt="Product_Image" />
          <img src={product.image} alt="Product_Image" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="Product_Image"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="Star_Icon" />
          <img src={star_icon} alt="Star_Icon" />
          <img src={star_icon} alt="Star_Icon" />
          <img src={star_icon} alt="Star_Icon" />
          <img src={star_icon} alt="Star_Icon" />
          <img src={star_dull_icon} alt="Star_Dull_Icon" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          repellat voluptatem, eaque repudiandae quo, vero voluptate eos libero
          ipsam voluptates nihil. Quis odit inventore in labore sit, sint quam
          explicabo.
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
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category : </span> Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span> Modern, Latest
        </p>
      </div>
    </div>
  );
};
