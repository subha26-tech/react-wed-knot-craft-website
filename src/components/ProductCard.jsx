import { Heart, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist, addToCart } = useShop();
  const fav = wishlist.some((x) => x.id === product.id);
  return (
    <article className="product-card">
      <Link to={"/product/" + product.id} className="product-image">
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="product-body">
        <Link to={"/product/" + product.id} className="product-title">
          {product.title}
        </Link>
        <div className="product-bottom">
          <b>Rs.{product.price.toFixed(2)}</b>
          <div className="product-actions">
            <button
              onClick={() => toggleWishlist(product)}
              className={fav ? "active" : ""}
              aria-label="Wishlist"
            >
              <Heart fill={fav ? "currentColor" : "none"} />
            </button>
            <button onClick={() => addToCart(product)} aria-label="Add to cart">
              <ShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
