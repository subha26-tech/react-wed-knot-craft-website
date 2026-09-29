import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const loc = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/account" state={{ from: loc }} replace />
  );
}
