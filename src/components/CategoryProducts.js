import React from "react";
import '../components/CategoryProducts';

const CategoryProducts = ({ title, image, specs, features, price, stock }) => {
    return (
        <>
            <article >
                <br />
                <br />
                <div className='category-product-title' style={{ color: 'red', fontWeight: 'bold', fontSize: '20px', fontfamily: 'Lato', }}>{title}</div><br/><br/>
                <figure>
                    <div className='category-product-image-container' style={{ paddingLeft: '100px' }}>
                        <img src={`./assets/${image}`} alt={title} />
                    </div>
                </figure>
                <aside style={{ flex: 1,paddingLeft: '800px',  fontFamily: 'Lato', color: '#333' }}>
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
                            {features?.map((f) => {
                                return <li >{f}</li>;
                            })}
                        </ul>
                    </div>
                </aside>
                <br />
                <aside className='category-product-finance' style={{ paddingLeft: '800px' }}>
                    <div className='category-product-finance-price'>Rs :{price}</div>
                    <div className='category-product-info-stock'>
                        <label>Stock Level :{stock}</label>
                        <label>Free delivery</label>
                    </div> <br /> <br />
                    <div className='category-product-action' style={{ display: 'flex', gap: '10px' }}>
                        <button className="Btn">View Product</button>
                        <button style={{
                            padding: '10px 20px', 
                            fontSize: '16px', 
                            borderRadius: '8px', 
                            border: 'none', 
                            backgroundColor: '#007BFF', 
                            color: 'white', 
                            cursor: 'pointer', 
                            transition: 'background-color 0.3s ease'
                        }}>Add to Cart</button>
                    </div>
                </aside>
            </article>
        </>
    );
}

export default CategoryProducts;
