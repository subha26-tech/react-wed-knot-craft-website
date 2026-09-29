import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext";
import { ChevronDown, LogOut } from "lucide-react";

function Auth() {
	const [mode, setMode] = useState("login");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { login, signup } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const loginRequired = Boolean(location.state?.from);

	const submit = (event) => {
		event.preventDefault();
		const result = mode === "login" ? login(email, password) : signup(name, email, password);
		if (!result.ok) {
			setError(result.message);
			return;
		}
		const pendingAction = location.state?.pendingAction;
		if (location.state?.from || pendingAction) {
			navigate(location.state?.from || "/", {
				replace: true,
				state: pendingAction ? { pendingAction } : null,
			});
		}
	};

	return (
		<div className="auth-card">
			{loginRequired && <p className="login-required">Please log in to continue with your shopping.</p>}
			<div className="tabs">
				<button className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>Login</button>
				<button className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>Sign Up</button>
			</div>
			<form onSubmit={submit}>
				{mode === "signup" && <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Full name" required />}
				<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" required />
				<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" required />
				{error && <p className="error">{error}</p>}
				<button className="btn wide">{mode === "login" ? "Login" : "Create account"}</button>
			</form>
		</div>
	);
}

function Profile() {
	const { user, logout } = useAuth();
	const [orderHistoryOpen, setOrderHistoryOpen] = useState(false);
	return (
		<div className="profile">
			<div><span className="eyebrow">Welcome back</span><h1>{user.name}</h1><p>{user.email}</p></div>
			<button className="btn outline logout-btn" onClick={logout}><LogOut size={18} />Logout</button>
			<div className="orders">
				<button className="orders-toggle" type="button" aria-expanded={orderHistoryOpen} onClick={() => setOrderHistoryOpen((open) => !open)}>
					<span>Order History</span>
					<ChevronDown className={orderHistoryOpen ? "expanded" : ""} size={20} />
				</button>
				{orderHistoryOpen && (user.orders?.length ? (
					<div className="order-history-list">
						{[...user.orders].reverse().map((order) => (
							<article className="order-history-item" key={order.id}>
								<div className="order-history-heading"><h3>Order {order.id}</h3><strong>Rs.{Number(order.total || 0).toFixed(2)}</strong></div>
								<p>{order.createdAt ? new Date(order.createdAt).toLocaleString() : "Date unavailable"} · {order.status || "Confirmed"} · {order.paymentMethod || "Payment method unavailable"}</p>
								<div className="order-history-products">
									{(order.items || []).map((item) => <p key={item.id}>{item.title} × {item.qty} <span>Rs.{(Number(item.price || 0) * Number(item.qty || 0)).toFixed(2)}</span></p>)}
								</div>
								<p className="order-history-address">Deliver to: {order.customer?.address}, {order.customer?.city} {order.customer?.postalCode}</p>
							</article>
						))}
					</div>
				) : <p>No orders yet. Your invitation journey starts with a design you love.</p>)}
			</div>
		</div>
	);
}

export default function Account() {
	const { isAuthenticated } = useAuth();
	return <><Header /><main className="account container">{isAuthenticated ? <ProtectedRoute><Profile /></ProtectedRoute> : <Auth />}</main><Footer /></>;
}
