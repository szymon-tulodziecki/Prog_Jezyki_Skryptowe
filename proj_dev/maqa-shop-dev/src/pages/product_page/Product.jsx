import "./Product.css";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  if (!product) return null;

  return (
    <section className="product-page-section">
      <div className="product-page-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-page-info">
        <h1>{product.name}</h1>
        <div className="product-rating">
          <span className="stars">
            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
          </span>
          <span className="score">{product.rating.toFixed(2)}/5</span>
          <span className="opinions">(103 opinie)</span>
        </div>
        <div className="product-price">{product.price.toFixed(2)} zł</div>
        <div className="product-availability">
          <span className="dot dot-green"></span> Dostępny
        </div>
        <div className="product-loyalty">
          Gdy kupisz ten produkt otrzymasz <b>5 punktów</b> w <Link to="/program-lojalnosciowy">programie lojalnościowym</Link>.
        </div>
        <div className="product-qty-row">
          <label htmlFor="product-qty">Ilość:</label>
          <input id="product-qty" type="number" min="1" max="99" defaultValue={1} />
        </div>
        <button className="product-add-to-cart">Dodaj do koszyka</button>
        <ul className="product-details-list">
          <li>🚚 Wysyłka w 1-2 dni robocze</li>
          <li>🇵🇱 Wyprodukowane w Polsce</li>
          <li>♻️ EKO–opakowanie</li>
        </ul>
        <div className="product-category">
          Kategoria: {product.categories && product.categories.length > 0 && (
            <Link to={`/sklep/${product.categories[0]}`}>
              {product.categories[0].toUpperCase()}
            </Link>
          )}
        </div>
        <div className="product-description">
          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
}
