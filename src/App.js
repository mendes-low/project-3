import React, { useState } from 'react';
import './App.css';
import { productsList } from './data';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Header />
      <TestCards />
      <Footer />
    </div>
  );
}

function TestCard({ product }) {
  const { title, brand, description, price, images } = product;

  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handlePrev() {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(images.length - 1);
    }
  }

  function handleNext() {
    setIndex(index + 1);
    if (index === images.length - 1) {
      setIndex(0)
    }
  }

  function handleShowMore() {
    setShowMore(!showMore)
  }

  const img = images[index];
  return (
    <div className="test-card">
      <div className="img-slider">
        <ArrowBackIosIcon onClick={handlePrev} />
        <img src={img} alt={title} />
        <ArrowForwardIosIcon onClick={handleNext} />
      </div>
      <h3>{title}</h3>
      <h4>${price}</h4>
      <p>{brand}</p>
      <button onClick={handleShowMore}>
        {showMore ? 'Hide' : 'More...'}
      </button>
      {showMore && <p>{description}</p>}
    </div>
  )
}

function TestCards() {
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="test-cards">
        {productsList.map(item => (
          <TestCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

function Header() {
  return (
    <header>
      <h1>Shopify</h1>
      <ShoppingCartIcon />
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div>
        <p>© 2024 Shopify</p>
      </div>
    </footer>
  )
}

export default App;


