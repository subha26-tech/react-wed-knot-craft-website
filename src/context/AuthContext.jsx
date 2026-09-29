import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const KEY = "wedknot_auth";
const PROFILES_KEY = "wedknot_profiles";

const readProfiles = () => {
  try {
    return JSON.parse(localStorage.getItem(PROFILES_KEY)) || {};
  } catch {
    return {};
  }
};

const saveProfile = (profile) => {
  const profiles = readProfiles();
  profiles[profile.email.toLowerCase()] = profile;
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
};

const profileFor = (name, email) => {
  const stored = readProfiles()[email.toLowerCase()];
  return stored || { name, email, phone: "", address: "", city: "", postalCode: "", orders: [] };
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem(KEY)) || null;
    } catch {
      return null;
    }
  });
  useEffect(() => {
    if (user) sessionStorage.setItem(KEY, JSON.stringify(user));
    else sessionStorage.removeItem(KEY);
  }, [user]);
  const login = (email, password) => {
    if (!email || !password)
      return { ok: false, message: "Please enter email and password." };
    setUser(profileFor(email.split("@")[0], email));
    return { ok: true };
  };
  const signup = (name, email, password) => {
    if (!name || !email || !password)
      return { ok: false, message: "Please complete all fields." };
    setUser(profileFor(name, email));
    return { ok: true };
  };
  const updateProfile = (updates) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    setUser(updated);
    saveProfile(updated);
  };
  const addOrder = (order, profileUpdates = {}) => {
    if (!user) return;
    const updated = {
      ...user,
      ...profileUpdates,
      orders: [...(user.orders || []), order],
    };
    setUser(updated);
    saveProfile(updated);
  };
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, signup, updateProfile, addOrder, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
