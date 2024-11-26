import Navigation from './Navigation/Nav';
import { useState } from 'react';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import './index.css'
//Database
import products from './db/data'
import Card from './components/Card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("");

  //Input Filter
  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  //When you type on the search bar to search for item
  const filteredItems = products.filter(product =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  
  // const filteredItems = products.filter((product) => 
  //   product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== 
  // -1
  // );

  //----------------Radio Filter -------------------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }
  
    //----------------Button Filter -------------------
    const handleClick = event => {
      setSelectedCategory(event.target.value)
    }

    function filteredData(Products, selected, query) {
      let filteredProducts = Products
    
      //Filtering Input Items
      if (query) {
        filteredProducts = filteredItems
      }

      //Selected Filter
      if(selected) {
        filteredProducts = filteredProducts.filter(({category, color, company, newPrice, 
          title}) => 
          category === selected || 
          color === selected ||
          company === selected || 
          newPrice === selected || 
          title === selected );
      }

      return filteredProducts.map(({img, title, star, newPrice, reviews, prevPrice}) => (
        <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
        />
      ))
    }

    const result = filteredData(products, selectedCategory, query)

  return (
    <>
    < Sidebar handleChange={handleChange} />
    < Navigation query={query} handleInputChange={handleInputChange}/>
    < Recommended handleClick={handleClick} />
    < Products result={result} />
    
    </>
  );
}

export default App;
