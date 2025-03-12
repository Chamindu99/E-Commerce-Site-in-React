import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Category from './components/Category';
// import Products from './components/Products';
import { getCategories,getproducts } from './Fetcher';
import Category_products from './components/Category_products';


function App() {
  const [categories,setCategories]=useState({errorMessage:'',data:[]});
  const [products,setProducts]=useState({errorMessage:'',data:[]});

  useEffect(()=>
  {
    const fetchData=async ()=>{
    const responseObject =await getCategories();
    setCategories(responseObject);
  }
  fetchData();
  },[])




  const handleCategoryClick= (id) =>{
      const fetchData=async ()=>{
      const responseObject =await getproducts();
      setProducts(responseObject);
    };
    fetchData();

  }


  const renderCategories= ()=>{
    return categories.data.map(c=>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={()=>handleCategoryClick(c.id)}/>
    );
  }

const renderProducts=()=>{
  return products.data.map(p => 
    <Category_products key={p.id} {...p}>{p.title}</Category_products>
  );


}



  return (
    <>
    <header><p>My Store</p></header>
    <section> 
      <nav> 
      {categories.errorMessage && <div>Error :{categories.errorMessage}</div>}
      {  categories.data && renderCategories()  }
    
      </nav>
      <article>
        <h1>Products</h1>
        {products.errorMessage && <div>Error:{products.errorMessage}</div>}
        {products && renderProducts()}
      </article>
    </section>

    <footer>
      footer
    </footer>


    </>
  );
}

export default App;
