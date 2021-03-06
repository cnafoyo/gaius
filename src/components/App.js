import React from 'react';
import '../styles/App.css';
import Header from './Header';
import AboutUs from './AboutUs';
import Footer from './Footer';
import ProductList from './ProductList'

function App() {

  return (
    <React.Fragment>
      <div className='container-fluid'>
        <Header />
        <AboutUs />
        <Footer />
        <ProductList />
      </div>

    </React.Fragment>
  )
}

export default App;