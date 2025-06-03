import { useState } from 'react';
import Header from './main_components/Header.jsx';
import ProductGrid from './main_components/ProductGrid.jsx';
import BenefitsBar from './main_components/BenefitsBar.jsx';
import Footer from './main_components/Footer.jsx';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Header cartCount={10} onCategorySelect={setSelectedCategory} />

      <main>
        <ProductGrid selectedCategory={selectedCategory} />
        <BenefitsBar />
      </main>

      <Footer />
    </>
  )
}

export default App
