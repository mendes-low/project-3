import React from 'react';
import { useState } from 'react';
import './App.css';
import './assests/styles/Cards.css'; // Cards-CSS //
import './assests/styles/Products.css' // Products-CSS //
import { sculptureList } from './data.js';
// import { Shower } from '@mui/icons-material';
// import Cards from './components/Cards'
// import Products from './components/Products';
// import Gallery from './components/Gallery';
import { Counter, ChangeBackgroundColor, ToggleText, ToDoList, Todo } from './components/Challenges';
// import TestCards from './components/Test';

import '../src/assests/styles/Test.css';
import { productsList } from './data.js';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Header />
      <TestCards />
      {/* <Footer /> */}
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














function Gallery() {

  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClickNext() {

    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handleClickPrev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleShowMore() {
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClickPrev} disabled={index === 0}>
        Prev
      </button>

      <button onClick={handleClickNext} disabled={index === sculptureList.length - 1}>
        Next
      </button>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <button onClick={handleShowMore}>
        {showMore ? 'Hide' : 'Show'} datails
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}

export default App;


