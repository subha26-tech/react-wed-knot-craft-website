import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
const ShopContext = createContext(null);
const read = (key, fallback = []) => {
  try {
    return JSON.parse(sessionStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};
const accountKey = (prefix, email) => `${prefix}:${encodeURIComponent(email)}`;
export function ShopProvider({ children }) {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const email = user?.email?.trim().toLowerCase() || "";
  const [loadedEmail, setLoadedEmail] = useState(email);
  const [cart, setCart] = useState(() =>
    email ? read(accountKey("wedknot_cart", email)) : [],
  );
  const [wishlist, setWishlist] = useState(() =>
    email ? read(accountKey("wedknot_wishlist", email)) : [],
  );
  useEffect(() => {
    setCart(email ? read(accountKey("wedknot_cart", email)) : []);
    setWishlist(email ? read(accountKey("wedknot_wishlist", email)) : []);
    setLoadedEmail(email);
  }, [email]);
  useEffect(
    () => {
      if (email && loadedEmail === email)
        sessionStorage.setItem(accountKey("wedknot_cart", email), JSON.stringify(cart));
    },
    [cart, email, loadedEmail],
  );
  useEffect(
    () => {
      if (email && loadedEmail === email)
        sessionStorage.setItem(accountKey("wedknot_wishlist", email), JSON.stringify(wishlist));
    },
    [wishlist, email, loadedEmail],
  );
  useEffect(() => {
    const pending = location.state?.pendingAction;
    if (
      !isAuthenticated ||
      !email ||
      loadedEmail !== email ||
      location.pathname === "/account" ||
      !pending?.product
    )
      return;
    if (pending.type === "wishlist") {
      setWishlist((items) =>
        items.some((item) => item.id === pending.product.id)
          ? items.filter((item) => item.id !== pending.product.id)
          : [...items, pending.product],
      );
    }
    if (pending.type === "cart") {
      const quantity = Math.max(1, Math.floor(Number(pending.quantity) || 1));
      setCart((items) =>
        items.some((item) => item.id === pending.product.id)
          ? items.map((item) =>
              item.id === pending.product.id
                ? { ...item, qty: item.qty + quantity }
                : item,
            )
          : [...items, { ...pending.product, qty: quantity }],
      );
    }
    navigate(`${location.pathname}${location.search}${location.hash}`, {
      replace: true,
      state: null,
    });
  }, [email, isAuthenticated, loadedEmail, location, navigate]);
  const requestLogin = (type, product, quantity = 1) => {
    const from = {
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
    };
    navigate("/account", {
      state: { from, pendingAction: { type, product, quantity } },
    });
  };
  const toggleWishlist = (product) => {
    if (!isAuthenticated) return requestLogin("wishlist", product);
    setWishlist((items) =>
      items.some((item) => item.id === product.id)
        ? items.filter((item) => item.id !== product.id)
        : [...items, product],
    );
  };
  const addToCart = (product, quantity = 1) => {
    const amount = Math.max(1, Math.floor(Number(quantity) || 1));
    if (!isAuthenticated) return requestLogin("cart", product, amount);
    setCart((items) =>
      items.some((item) => item.id === product.id)
        ? items.map((item) =>
            item.id === product.id
              ? { ...item, qty: item.qty + amount }
              : item,
          )
        : [...items, { ...product, qty: amount }],
    );
  };
  const removeFromCart = (id) => setCart((x) => x.filter((i) => i.id !== id));
  const updateQty = (id, qty) =>
    setCart((x) =>
      x.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
    );
  const value = useMemo(
    () => ({
      cart,
      wishlist,
      toggleWishlist,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart: () => setCart([]),
      cart: loadedEmail === email ? cart : [],
      wishlist: loadedEmail === email ? wishlist : [],
      cartCount: loadedEmail === email ? cart.reduce((a, b) => a + b.qty, 0) : 0,
      wishlistCount: loadedEmail === email ? wishlist.length : 0,
    }),
    [cart, email, isAuthenticated, loadedEmail, wishlist],
  );
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
export const useShop = () => useContext(ShopContext);
