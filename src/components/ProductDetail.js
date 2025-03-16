import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { getProductById } from "../Fetcher";

const ProductDetail = () => {
  const [product, setProduct] = useState({ errorMessage: "", data: {} });
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
      setProduct(responseObject);
    };
    fetchData();
  }, [productId]);

  return (
    <article>
      <br />
      <br />
      <div
        className="category-product-title"
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "20px",
          fontfamily: "Lato",
        }}
      >
        {product.data?.title}
      </div>
      <br />
      <br />
      <figure>
        <div
          className="category-product-image-container"
          style={{ paddingLeft: "100px" }}
        >
          <img
            src={`../assets/${product.data.image}`}
            alt={product.data?.title}
          />
        </div>
      </figure>
     <br></br>
      <aside className="dimcap">
        <div className="category-product-info-dimensions">
          <h3>Dimensions</h3>
          <label>{product.data.specs?.dimensions}</label>
        </div>
        {product.data.specs?.capacity && (
          <div className="category-product-info-capacity">
            <h3>capacity</h3>
            <label>{product.data.specs?.capacity}</label>
          </div>
        )}
        <div className="category-product-info-features">
          <h3>Features</h3>
          <ul>
            {product.data.features?.map((f, i) => {
              return <li key={`feature${i}`}>{f}</li>;
            })}
          </ul>
        </div>
      </aside>
      <br />
      <aside
        className="category-product-finance"
        style={{ paddingLeft: "800px" }}
      >
        <div className="category-product-finance-price-PD">
          US :${product.data?.price}
        </div>
        <div className="category-product-info-stock">
          <label>Stock Level :{product.data?.stock}</label>
          <label>Free delivery</label>
        </div>{" "}
        <br /> <br />
        <div
          className="category-product-action"
          style={{ display: "flex", gap: "10px" }}
        >
          <button className="Btn">Add to Cart</button>
        </div>
      </aside>
      <div className="prodec" dangerouslySetInnerHTML={{ __html: product.data.description }} />
      
    </article>
  );
};

export default ProductDetail;
