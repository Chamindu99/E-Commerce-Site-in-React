import React from "react";
import '../components/CategoryProducts.css';
import { Link,useNavigate } from "react-router-dom";

const CategoryProducts = ({ id,title, image, specs, features, price, stock }) => {
   const Navigate=useNavigate();
    return (
        <>
            <article >
                <br />
                <br />
                <div className='category-product-title' style={{ color: 'red', fontWeight: 'bold', fontSize: '20px', fontfamily: 'Lato', }}>
                    <Link to={`products/${id}`}>{title}</Link></div><br/><br/>
                <figure>
                    <div className='category-product-image-container' style={{ paddingLeft: '100px' }}>
                         <img src={`./assets/${image}`} alt={title} />
                    </div>
                </figure>
                <aside className="dimcap">
                    <div className='category-product-info-dimensions'>
                        <h3>Dimensions</h3>
                        <label>{specs?.dimensions}</label>
                    </div>
                    {specs?.capacity && (
                        <div className='category-product-info-capacity'>
                            <h3>capacity</h3>
                            <label>{specs?.capacity}</label>
                        </div>
                    )}
                    <div className='category-product-info-features'>
                        <h3>Features</h3>
                        <ul>
                            {features?.map((f,i) => {
                                return <li key={`feature${i}`}>{f}</li>;
                            })}
                        </ul>
                    </div>
                </aside>
                <aside className='category-product-finance' style={{ paddingLeft: '800px' }}>
                    <div className='category-product-finance-price'>US :${price}</div>
                    <div className='category-product-info-stock'>
                        <label>Stock Level :{stock}</label><br/>
                        <label>Free delivery</label>
                    </div> <br /> <br />
                    <div className='category-product-action' style={{ display: 'flex', gap: '10px' }}>
                        <button className="Btn" onClick={()=>Navigate(`products/${id}`)}>View Product</button>
                        <button className="Btn">Add to Cart</button>
                    </div>
                    <br/><br/><br/>
                </aside>
                <br />
                
            </article>
        </>
    );
}

export default CategoryProducts;
