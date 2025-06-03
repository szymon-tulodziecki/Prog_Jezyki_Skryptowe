import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";
import Ciemna_razowa from "./main_components_assets/ciemna_razowa.png";
import Jasna_razowa from "./main_components_assets/jasna_razowa.png";
import Kasza_gryczana from "./main_components_assets/kasza_gryczana.png";
import Makaron from "./main_components_assets/makaron.png";
import Oliwa from "./main_components_assets/oliwa.png";
import Otreby from "./main_components_assets/otreby.png";
import Ciastka from "./main_components_assets/ciastka.png";
import Ziarna from "./main_components_assets/ziarna.png";
import Trufle from "./main_components_assets/trufle.png";
import Pagination from "./Pagination.jsx";

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

const PRODUCTS_PER_PAGE = 12;

function ProductGrid({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("../../products.json");
        if (!response.ok) throw new Error('Błąd sieci');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Błąd pobierania produktów:', error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [sort, products.length, selectedCategory]);

  const filteredProducts = selectedCategory && selectedCategory !== "all"
    ? products.filter(p =>
        p.categories && p.categories.includes(selectedCategory)
      )
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "name-asc") return a.name.localeCompare(b.name, "pl");
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <section className="product-section">
      <div className="product-section__header">
        <h1>Sklep Maqa</h1>
        <div className="product-sort">
          <label>
            Sortuj:
            <select value={sort} onChange={e => setSort(e.target.value)}>
              <option value="default">Domyślnie</option>
              <option value="price-asc">Cena rosnąco</option>
              <option value="price-desc">Cena malejąco</option>
              <option value="name-asc">Nazwa A-Z</option>
            </select>
          </label>
        </div>
      </div>
      <div className="product-grid">
        {paginatedProducts.length === 0 ? (
          <div className="no-products-message">
            Brak produktów w tej kategorii.
          </div>
        ) : (
          paginatedProducts.map(product => (
            <Link
              to={`/produkt/${product.id}`}
              state={{ product }}
              key={product.id}
              className="product-card-link"
            >
              <div className="product-card">
                <img
                  src={images[product.image] || images.Ciemna_razowa}
                  alt={product.name}
                  className="product-card__image"
                />
                <div className="product-card__info">
                  <h3 className="product-card__title">{product.name}</h3>
                  <p className="product-card__price">{product.price} zł</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
      <div className="product-section__seo">
        <h2>Najlepszy sklep z mąkami i produktami Maqa</h2>
        <p>
          Nasz sklep oferuje szeroki wybór naturalnych mąk, kasz oraz produktów premium. Dbamy o jakość i pochodzenie naszych produktów – sprawdź sam!
        </p>
      </div>
    </section>
  );
}

export default ProductGrid;
