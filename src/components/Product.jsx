import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import "./Product.css";

export default function Product() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [visibleCount, setVisibleCount] = useState(6); 
  const { user, cart, setCart } = useContext(AppContext);

  const fetchProducts = async () => {
    try {
      const url = `${API_URL}/api/products/all`;
      const result = await axios.get(url);
      setProducts(result.data.products);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const found = cart.find((item) => item._id === product._id);
    if (!found) {
      product.qty = 1;
      setCart([...cart, product]);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more on click
  };

  return (
    <div className="Product-Wrapper">
      <div className="Product-List">
        {products &&
          products.slice(0, visibleCount).map((product) => (
            <div key={product._id} className="Product-Card">
              <img src={product.imgUrl} alt={product.productName} />
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <h4>₹{product.price}</h4>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>

      {/* Load More Button */}
      {visibleCount < products.length && (
        <div className="LoadMoreWrapper">
          <button className="LoadMoreBtn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}


// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AppContext } from "../App";
// import "./Product.css";

// export default function Product() {
//   const API_URL = import.meta.env.VITE_API_URL;
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState();
//   const { user, cart, setCart } = useContext(AppContext);
//   const fetchProducts = async () => {
//     try {
//       const url = `${API_URL}/api/products/all`;
//       const result = await axios.get(url);
//       setProducts(result.data.products);
//     } catch (err) {
//       console.log(err);
//       setError("Something went wrong");
//     }
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const addToCart = (product) => {
//     const found = cart.find((item) => item._id === product._id);
//     if (!found) {
//       product.qty = 1;
//       setCart([...cart, product]);
//     }
//   };
// return (
//   <div className="Product-List">
//     {products &&
//       products.map((product) => (
//         <div key={product._id} className="Product-Card">
//           <img src={product.imgUrl} alt={product.productName} />
//           <h3>{product.productName}</h3>
//           <p>{product.description}</p>
//           <h4>₹{product.price}</h4>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//   </div>
// );

// }