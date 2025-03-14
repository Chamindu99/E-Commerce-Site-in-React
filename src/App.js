import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Category from './components/Category';
import { getCategories,getproducts } from './Fetcher';
import CategoryProducts from './components/CategoryProducts';


function App() {
  const [categories,setCategories]=useState({errorMessage:'',data:[]});
  const [products,setProducts]=useState({errorMessage:'',data:[]});
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  
  useEffect(()=>
  {
    const fetchData=async ()=>{
    const responseObject =await getCategories();
    setCategories(responseObject);
  }
  fetchData();
  },[])




  const handleCategoryClick = async (id) => {
    setSelectedCategoryId(id);
    const responseObject = await getproducts(id);
    setProducts(responseObject);
  };


  const renderCategories= ()=>{
    return categories.data.map(c=>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={()=>handleCategoryClick(c.id)}/>
    );
  }

const renderProducts=()=>{
  return products.data.map(p => 
    <CategoryProducts {...p}>{p.title}</CategoryProducts>
  )


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
        <h1 style={{color:'#7310be',fontFamily: 'Lato',fontSize:'45px',paddingLeft:'16cm'}}>Products</h1><br/><br/>
        {products.errorMessage && <div>Error:{products.errorMessage}</div>}
        {selectedCategoryId && products && renderProducts()}
      </article>
    </section>

    <footer>
      footer
    </footer>


    </>
  );
}

export default App;
