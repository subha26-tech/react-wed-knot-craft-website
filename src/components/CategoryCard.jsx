import { Link } from "react-router-dom";
export default function CategoryCard({ item }) {
  return (
    <Link to={item.path} className="category-card">
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
    </Link>
  );
}
