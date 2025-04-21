import { useEffect, useState } from "react";
import "./App.css";

// I was asked to fetch an API that returns a list of product IDs. 
// For each of these product IDs, I had to fetch additional details using another API 
// and display the complete product information on the UI using React.

function App() {
  const [ids, setIDs] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const fetchProductIDs = () => {
    fetch("http://localhost:3030/productDetails")
      .then((response) => response.json())
      .then((data) => {
        const idArray = data.map((product) => product.id);
        setIDs(idArray);
      })
      .catch((err) => console.log("Error in fetching IDs", err));
  };
  const fetchProductDetails = async (ids) => {
    for (let id of ids) {
      try {
        const res = await fetch(`http://localhost:3030/productDetails/${id}`);
        if (!res.ok) {
          console.error(`Error fetching product with id ${id}:`, res.status);
          continue;
        }
        const data = await res.json();
        setProductDetails((prev) => [...prev, data]);
      } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
      }
    }
  };
  useEffect(() => {
    fetchProductIDs();
  }, []);
  useEffect(() => {
    if (ids.length > 0) {
      fetchProductDetails(ids);
    }
  }, [ids]);

  return (
    <>
      <h2>Product Details</h2>
      <div className="container">
        {productDetails.map((product, index) => (
          <div key={index} className="product-card">
            <p>
              <strong>ID:</strong> {product.id}
            </p>
            <p>
              <strong>Name:</strong> {product.productName}
            </p>
            <p>
              <strong>Price:</strong> ₹{product.price}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
