import { useEffect, useState } from "react";
import cross_icon from "../../Assets/cross_icon.png";
import "./ListProduct.css";
const ListProduct = () => {
  const BASE_URL = "http://localhost:4000";

  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch(`${BASE_URL}/allproducts`).then((res) =>
      res.json().then((data) => {
        setAllProducts(data);
      })
    );
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch(`${BASE_URL}/removeproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <div className="listproduct">
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  src={product.image}
                  className="listproduct-product-icon"
                  alt="Product_Image"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  className="listproduct-remove-icon"
                  src={cross_icon}
                  onClick={() => {
                    // confirm(
                    //   `Are you sure you want to delete '${product.name}'?`,
                    //   );
                    remove_product(product.id);
                  }}
                  alt="Remove_Icon"
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
