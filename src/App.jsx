import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import {
  About,
  Contact,
  FAQ,
  HowToOrder,
  WeddingDetails,
  Checkout,
  OrderPlaced,
} from "./pages/InformationPages";
import ListingPage from "./pages/ListingPage";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/search"
        element={
          <ListingPage
            title="Search Results"
            subtitle="Search across all invitation styles and occasions."
          />
        }
      />
      <Route
        path="/wedding-invitation"
        element={
          <ListingPage
            type="wedding"
            title="Wedding Invitation"
            subtitle="Traditional, elegant and contemporary wedding card designs for every celebration."
          />
        }
      />
      <Route
        path="/special-occasions"
        element={
          <ListingPage
            type="special"
            title="Special Occasions"
            subtitle="Beautiful invitations for life's memorable milestones."
          />
        }
      />
      <Route
        path="/theme-cards"
        element={
          <ListingPage
            type="theme"
            title="Theme Cards"
            subtitle="Find a theme that feels unmistakably yours."
          />
        }
      />
      <Route
        path="/scroll-invitation"
        element={
          <ListingPage
            type="scroll"
            title="Scroll Invitation"
            subtitle="Ornate scroll invitations with a timeless royal character."
          />
        }
      />
      <Route
        path="/digital-invitation"
        element={
          <ListingPage
            type="digital"
            title="Digital Invitation"
            subtitle="Mobile-first invitations made for sharing on WhatsApp and beyond."
          />
        }
      />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/account" element={<Account />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/how-to-order" element={<HowToOrder />} />
      <Route path="/wedding-details" element={<WeddingDetails />} />
      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/order-placed" element={<ProtectedRoute><OrderPlaced /></ProtectedRoute>} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
