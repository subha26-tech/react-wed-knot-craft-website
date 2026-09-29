import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";
import { useShop } from "../context/ShopContext";
import { useAuth } from "../context/AuthContext";

const nav = [
  { label: "Home", to: "/" },
  { label: "Wedding Invitation", to: "/wedding-invitation" },
  {
    label: "Special occasions",
    to: "/special-occasions",
    children: [
      { label: "Birthday Invitations", theme: "birthday" },
      { label: "Puppetry Cards", theme: "puppetry" },
      { label: "Ear Boring Cards", theme: "ear_boring" },
      { label: "Engagement Cards", theme: "engagement" },
      { label: "House Warming Cards", theme: "house_warming" },
      { label: "Anniversary Cards", theme: "anniversary" },
    ],
  },
  {
    label: "Theme Cards",
    to: "/theme-cards",
    children: [
      { label: "Beach Theme Cards", theme: "beach" },
      { label: "Birds Theme Cards", theme: "birds" },
      { label: "Box Cards", theme: "box" },
      { label: "Single Sheet Cards", theme: "single_sheet" },
    ],
  },
  {
    label: "Scroll Invitation",
    to: "/scroll-invitation",
    children: [
      { label: "Small Size Scroll", theme: "scroll" },
      { label: "Box Scroll", theme: "scroll" },
      { label: "Only Scroll", theme: "scroll" },
      { label: "High End Scroll", theme: "scroll" },
    ],
  },
  {
    label: "Digital Invitation",
    to: "/digital-invitation",
    children: [
      { label: "WhatsApp Cards", theme: "whatsapp" },
      { label: "Save the Date Cards", theme: "save-date" },
    ],
  },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { cartCount, wishlistCount } = useShop();
  const { user, isAuthenticated } = useAuth();
  const submit = (e) => {
    e.preventDefault();
    if (query.trim())
      navigate(
        "/search?search=" + encodeURIComponent(query.trim()),
      );
  };
  return (
    <>
      <header className="site-header">
        <div className="header-main container">
          <Link className="brand" to="/">
            <img
              className="brand-mark"
              src="/assets/Header_Logo.png"
              alt="logo"
            />
            <span className="logo-inside">
              Cherish <br /> By
            </span>
            <span>
              <p>Wed</p>
              <p>Knot</p>
              <p>Craft</p>
            </span>
            <span className="logo-bottom">Wedding Cards</span>
          </Link>
          <div className="header-tools">
            <form className="search" onSubmit={submit}>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search invitations"
              />
              <button aria-label="Search">
                <Search size={21} />
              </button>
            </form>
            <button
              className="icon-btn header-account"
              onClick={() => navigate("/account")}
              aria-label={isAuthenticated ? `Account: ${user.name}` : "Account"}
            >
              <UserRound />
              {isAuthenticated && <span className="header-user-name">{user.name}</span>}
            </button>
            <button
              className="icon-btn badge-wrap"
              onClick={() => navigate("/wishlist")}
              aria-label="Wishlist"
            >
              <Heart />
              <span>{wishlistCount}</span>
            </button>
            <button
              className="icon-btn badge-wrap"
              onClick={() => navigate("/cart")}
              aria-label="Cart"
            >
              <ShoppingCart />
              <span>{cartCount}</span>
            </button>
            <button
              className="mobile-menu"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <nav className={"nav " + (open ? "open" : "")}>
          <div className="container nav-inner">
            {nav.map((item) => (
              <div
                className={
                  "nav-item" + (activeMenu === item.to ? " submenu-open" : "")
                }
                key={item.to}
              >
                {item.children ? (
                  <button
                    className="nav-trigger"
                    type="button"
                    aria-expanded={activeMenu === item.to}
                    onClick={() =>
                      setActiveMenu(activeMenu === item.to ? null : item.to)
                    }
                  >
                    {item.label}
                    <ChevronDown size={15} />
                  </button>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => {
                      setOpen(false);
                      setActiveMenu(null);
                    }}
                  >
                    {item.label}
                  </NavLink>
                )}
                {item.children && (
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={`${item.to}?theme=${encodeURIComponent(child.theme)}&label=${encodeURIComponent(child.label)}`}
                        onClick={() => {
                          setOpen(false);
                          setActiveMenu(null);
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
