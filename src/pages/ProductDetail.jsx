import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useShop } from "../context/ShopContext";
import { Heart, ShoppingBag, Check, Minus, Plus } from "lucide-react";
export default function ProductDetail() {
  const { id } = useParams();
  const p = products.find((x) => x.id === id) || products[0];
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const fav = wishlist.some((x) => x.id === p.id);
  return (
    <>
      <Header />
      <main className="detail container">
        <div className="detail-main">
          <div className="detail-image">
            <img src={p.image} alt={p.title} />
          </div>
          <div className="detail-copy">
            <h1>{p.title}</h1>
            <div className="price">Rs.{p.price.toFixed(2)}</div>
            <p>
              Elegant, customizable invitation design created for a memorable
              celebration. Choose your wording, colours and finishing options to
              make it uniquely yours.
            </p>
            <ul>
              <li>
                <Check /> High-resolution artwork
              </li>
              <li>
                <Check /> Personalization support
              </li>
              <li>
                <Check /> Premium print-ready layout
              </li>
            </ul>
            <div className="detail-quantity" aria-label="Quantity">
              <button
                type="button"
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              >
                <Minus size={18} />
              </button>
              <output aria-live="polite">{quantity}</output>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((current) => current + 1)}
              >
                <Plus size={18} />
              </button>
            </div>
            <div className="detail-actions">
              <button className="btn" onClick={() => addToCart(p, quantity)}>
                <ShoppingBag /> Add to Cart
              </button>
              <button
                className={"btn outline " + (fav ? "active" : "")}
                onClick={() => toggleWishlist(p)}
              >
                <Heart /> {fav ? "Wishlisted" : "Add to Wishlist"}
              </button>
            </div>
            <Link className="back" to="/wedding-invitation">
              ← Continue browsing
            </Link>
          </div>
        </div>
        <section className="section">
          <h2>Related Designs</h2>
          <div className="product-grid">
            {products
              .filter((x) => x.id !== p.id)
              .slice(0, 4)
              .map((x) => (
                <ProductCard key={x.id} product={x} />
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
