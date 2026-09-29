import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import CategoryCard from "../components/CategoryCard";
import { products, weddingCategories } from "../data/products";
export default function ListingPage({ type, title, subtitle }) {
  const [params] = useSearchParams();
  const q = (params.get("search") || "").toLowerCase();
  const searchTerm = params.get("search") || "";
  const theme = (params.get("theme") || "").toLowerCase();
  const label = params.get("label");
  const selectedWeddingCategory = weddingCategories.find(
    (category) => category.theme === theme,
  );
  const showWeddingCategories = type === "wedding" && !theme && !q;
  const list = useMemo(
    () =>
      products.filter(
        (p) =>
          (!type || p.category === type) &&
          (!q || p.title.toLowerCase().includes(q) || p.theme.includes(q)) &&
          (!theme || p.theme === theme),
      ),
    [type, q, theme],
  );
  return (
    <>
      <Header />
      <main className="listing">
        <div className="container">
          <SectionTitle
            title={showWeddingCategories ? "Wedding Cards" : label || selectedWeddingCategory?.title || (q ? `Results for "${searchTerm}"` : title)}
            subtitle={showWeddingCategories ? "Explore invitation designs by wedding type." : subtitle}
          />
          {showWeddingCategories ? (
            <div className="category-grid three wedding-type-grid">
              {weddingCategories.map((category) => (
                <CategoryCard key={category.theme} item={category} />
              ))}
            </div>
          ) : (
            <>
              <div className="filter-row">
                <span>{list.length} designs</span>
              </div>
              {list.length ? (
            <div className="product-grid">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h3>No invitations found</h3>
              <p>Try another search or browse all wedding cards.</p>
            </div>
          )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
