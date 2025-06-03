import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from '../../main_components/Header.jsx';
import Footer from '../../main_components/Footer.jsx';
import Product from "./Product.jsx";

import Ciemna_razowa from "../../main_components/main_components_assets/ciemna_razowa.png";
import Jasna_razowa from "../../main_components/main_components_assets/jasna_razowa.png";
import Kasza_gryczana from "../../main_components/main_components_assets/kasza_gryczana.png";
import Makaron from "../../main_components/main_components_assets/makaron.png";
import Oliwa from "../../main_components/main_components_assets/oliwa.png";
import Otreby from "../../main_components/main_components_assets/otreby.png";
import Ciastka from "../../main_components/main_components_assets/ciastka.png";
import Ziarna from "../../main_components/main_components_assets/ziarna.png";
import Trufle from "../../main_components/main_components_assets/trufle.png";

const images = {
  Ciemna_razowa,
  Jasna_razowa,
  Kasza_gryczana,
  Makaron,
  Oliwa,
  Otreby,
  Ciastka,
  Ziarna,
  Trufle,
};

export default function ProductPage() {
  const { productId } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!product);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (product) {
      setLoading(false);
      return;
    }
    const fetchProducts = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch("../../../products.json"); 
        if (!response.ok) throw new Error('Błąd pobierania produktów');
        const data = await response.json();
        const found = data.find(p => String(p.id) === String(productId));
        if (!found) throw new Error('Nie znaleziono produktu');
        setProduct(found);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [productId, product]);

  const mappedProduct = product
    ? {
        ...product,
        image: images[product.image] || images.Ciemna_razowa,
        rating: product.rating || 5,
      }
    : null;

  return (
    <>
      <Header />
      <main className="product-page-bg">
        <nav className="product-breadcrumbs">
        </nav>
        <section className="product-page-section">
          {loading && <div>Ładowanie...</div>}
          {error && <div>Błąd podczas pobierania produktu.</div>}
          {!loading && !error && mappedProduct && (
            <Product product={mappedProduct} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
