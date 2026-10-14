
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const srvrData = await fetch("https://dummyjson.com/products");
        const jsonData = await srvrData.json();

        setProducts(jsonData.products);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <h3>{products[0]?.title}</h3>

      {/* <h3>{products.map(products) => (
        
      )}</h3> */}
    </div>
  );
}

export default Products;

