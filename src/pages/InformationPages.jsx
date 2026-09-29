import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MessageCircle, MapPin, Clock3, ChevronDown, CheckCircle2, CalendarDays, Pencil, CircleUserRound, Package, Home as HomeIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useShop } from '../context/ShopContext';

const img = (name) => `/assets/${name}`;

export function About(){
  return <><Header/><main className="info-page about-page container">
    <h1 className="underlined-title">ABOUT US</h1>
    <section className="about-lead"><div><h2>Celebrating Love, One Invitation at a Time</h2><p>At Wed Knot Craft, we believe that every love story is unique and deserves to be celebrated in a way that reflects its individuality.</p></div><img src={img('Elegant_Vintage_Wedding_Invitations-removebg-preview.png')} alt="Wedding invitation"/></section>
    <section className="about-split"><img src={img('BC_1152_Floral_A5_Double-Sided_Invitation_-_Desi_Couple_in_Indian_Attire_with_Pink___Ivory_Floral_Border-removebg-preview.png')} alt="Pre wedding invitation"/><div><h2>OUR STORY</h2><p>What started as a passion for design has blossomed into a full-fledged business dedicated to bringing couples' visions to life. Our founder envisioned a platform where couples could find invitations that resonated with their personal style and cultural heritage.</p></div></section>
    <section className="about-split reverse"><div><h2>OUR PROMISE</h2><p>We are committed to providing:</p><ul><li><b>Custom Designs:</b> Tailored invitations that reflect your unique love story.</li><li><b>Quality Craftsmanship:</b> Invitations crafted with attention to detail and high-quality materials.</li><li><b>Customer Satisfaction:</b> A seamless experience from selection to delivery, ensuring your complete satisfaction.</li></ul></div><img src={img('Watercolor_Arabian_Lattice_Arch_Muslim_Wedding_Invitation-removebg-preview.png')} alt="Wedding design"/></section>
    <section className="about-cta"><h2>JOIN Us in Celebrating Your Special Day</h2><p>Explore our diverse range of designs and let us help you set the tone for your wedding celebration. At Wed Knot Craft, your love story is our inspiration.</p></section>
  </main><Footer/></>
}

export function Contact(){
 return <><Header/><main className="info-page contact-page container">
  <h1>Contact Us</h1><p className="lead">We’d love to hear from you! Whether you have a question, need help customizing your invites, or just want to chat about your dream wedding stationery — we’re here for you.</p>
  <div className="contact-block"><h2><MessageCircle/> <u>Support</u></h2><p>India (toll free):<br/>999-264-9444<br/>Only Call - No WhatsApp Number<br/><u>sales@wedknotcraftinvitationcards.com</u></p></div>
  <div className="contact-block"><h2><Mail/> <u>Proofing Department</u></h2><p>Indian Standard Time (IST)<br/>Mobile (9.00am to 9.00pm IST) Monday to Saturday<br/><u>HR Team</u><br/>+91 9876543210<br/>hrteam@wedknotcraftinvitationcards.com<br/><u>Customer Support Team</u><br/>+91 9876543210<br/>customersupport@wedknotcraftinvitationcards.com</p></div>
  <h2>Contact Us</h2><p>Whether you’re looking for inquiries, would like to ask before ordering, or just want to let us know how we did.</p>
  <h3 className="center-heading">An online Invitation Store with Worldwide Delivery</h3>
  <p>Weddings are always special but the fact about Wedknotcraft wedding Cards is that they are bespoke and exquisite in design that wins the hearts of millions across the world.</p><p>The team behind us is extremely talented and has more than 50 years of experience with them to translate your dream wedding card into reality.</p><p>If you want your wedding card to be truly rare and exceptional then look no further. The team here is fully able to weave dreams into reality.</p><p>No matter what kind of wedding you have planned, <span className="linkish">wedknotcraft.in</span> is well known to design various wedding invitations like Hindu Wedding Cards, Muslim Wedding Cards, Sikh Wedding Cards, Interface Wedding Cards and so on.</p>
  <p className="center-note">If you have any query related to invitation designs or our cards, please feel free to contact us!!!</p>
 </main><Footer/></>
}

const faqs=[
 ['How much do Indian wedding invitation cards typically cost?','The cost of Indian wedding cards can vary widely depending on several factors such as design complexity, materials used, customization options, and quantity ordered. Typically, Indian wedding invitations can range from affordable options to more extravagant and luxurious choices.\n\nFor simpler and more budget-friendly options, you can find Indian wedding cards starting from around INR 10 to INR 60 per card. These cards may feature standard designs, basic printing techniques, and standard paper quality.'],
 ['Do you provide sample card before finalizing the order?','We don\'t practise business by providing sample cards, since all the cards are manufactured against order. Once the customer places the order, we go for the manufacturing process. So we don\'t keep sample cards to carry.'],
 ['Do you provide printing services?','Yes, we provide the cards with printing. The text can be printed in ink, foil and by using thermographic process.'],
 ['How much time will it take for the complete procedure for an order?','Once the customer approve the proof and after the confirmation of the payment, we shall start the printing process and deliver the cards in ten working days time. Then the cards can be shipped across in three to four days, which is to be door delivered.'],
 ['Do you provide add on cards like Rsvp, Thank you cards etc.?','Yes, we provide full range of save the date Card, Rsvp card, Thank you card, Place card, Reception card, Sangeet card, Cocktail card, Mehndi card etc.'],
 ['Do you provide the text samples of addon cards?','Kindly visit the (******) for the text samples link.'],
 ['Could you suggest me, wordings, symbols, logos for the order?','You can select appropriate text for your card with related logos fonts the link and as specified below.'],
 ['How to place the order after selecting the card?','You can choose a card from the hosted list and initially register with us for proceeding to the order booking. After registration, you can book the card with the quantity required and other details.'],
 ['Can I add up extra page / insert in the card?','You can add extra inserts to your card. The charges for the insert and the printing charges will be additional.'],
 ['How do we pay through online?','After all your selections are finished, you can make use of the view cost option, to view the entire selections of cards with their prices and shipping cost. Then click on the pay icon which will take you to the online payment gateway through which the payment can be done online within minutes. After the confirmation of the payment only we shall start the manufacturing process.']
];
export function FAQ(){
 const [open,setOpen]=useState(-1);
 return <><Header/><main className="info-page faq-page container"><h1>FREQUENTLY ASKED QUESTIONS</h1><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpen(open===i?-1:i)}><span>{i+1}. {q}</span><ChevronDown className={open===i?'rot':''}/></button><div className={'faq-answer '+(open===i?'show':'')}><p>{a}</p></div></div>)}</div></main><Footer/></>
}

export function HowToOrder(){return <><Header/><main className="info-page how-page container"><h1>How do I order wedding cards from Wed Knot Craft online?</h1><div className="how-copy">
 <p><b>Browse the Collection:</b> Take your time to explore our collection and discover various designs that suit your style and preferences. You can use the search filters to narrow down your options based on themes, colors, or card types.</p>
 <p><b>Select a Design:</b> Once you have found a design that catches your eye, click on it to view more details. You can zoom in to see the intricate details and read the card description to ensure it meets your requirements.</p>
 <p><b>Add to Cart:</b> Once you are happy with your design, select the quantity and click on the "Add to Cart" button to proceed to the next step.</p>
 <p><b>Review Your Order:</b> In the shopping cart, you will be able to review your order summary, including the quantity, price, and any additional services you have selected.</p>
 <p><b>Secure Payment:</b> King of Cards offers a secure online payment system. Choose your preferred payment method and enter the necessary details to complete your transaction.</p>
 <p><b>Place Your Order:</b> After confirming your payment, you will receive an order confirmation via email, along with an estimated delivery date.</p>
 </div></main><Footer/></>}

export function WeddingDetails(){return <main className="wedding-details"><div className="floral floral-tl">✿ ❀</div><div className="floral floral-tr">❀ ✿</div><div className="floral floral-bl">❀ ✿</div><div className="floral floral-br">✿ ❀</div><div className="wedding-medallion"><span>Groom Name</span><b>&amp;</b><span>Bride Name</span></div><h1>Together with their families, joyfully<br/>invite you to their wedding</h1><div className="details-box"><div><CalendarDays/><span>Date</span><Pencil/></div><div><Clock3/><span>Time</span><Pencil/></div><div><MapPin/><span>Location</span><Pencil/></div><div className="detail-actions"><button>View map</button><button>Add to calendar</button></div></div><div className="reception">Reception to Follow<br/>Dress Code: <span>“Any Dress Code”</span><br/>Kindly <b>RSVP</b> by <span>“Wedding Date”</span><br/><Link to="/account" className="btn">RSVP Now</Link></div></main>}

export function Checkout() {
  const navigate = useNavigate();
  const { user, addOrder } = useAuth();
  const { cart, clearCart } = useShop();
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [delivery, setDelivery] = useState(() => ({
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
    city: user?.city || "",
    postalCode: user?.postalCode || "",
  }));
  const subtotal = cart.reduce((sum, product) => sum + product.price * product.qty, 0);
  const tax = subtotal * 0.18;
  const shipping = 0;
  const total = subtotal + tax + shipping;

  const submitOrder = (event) => {
    event.preventDefault();
    if (!cart.length || !user) return;
    const customer = { ...delivery, email: user.email };
    const order = {
      id: `WK-${Date.now()}`,
      createdAt: new Date().toISOString(),
      items: cart.map((product) => ({ ...product })),
      subtotal,
      tax,
      shipping,
      total,
      paymentMethod,
      status: "Confirmed",
      customer,
    };
    addOrder(order, customer);
    clearCart();
    navigate("/order-placed", { replace: true, state: { order } });
  };

  return <><Header />{cart.length ? <main className="checkout-page container">
    <form id="checkout-form" className="payment-panel checkout-form" onSubmit={submitOrder}>
      <h1>Delivery Details</h1>
      <p className="checkout-account">Ordering as <b>{user.name}</b> · {user.email}</p>
      <div className="checkout-fields">
        <label>Full name<input required autoComplete="name" value={delivery.name} onChange={(event) => setDelivery({ ...delivery, name: event.target.value })} /></label>
        <label>Phone number<input required type="tel" autoComplete="tel" value={delivery.phone} onChange={(event) => setDelivery({ ...delivery, phone: event.target.value })} /></label>
        <label className="checkout-full">Street address<input required autoComplete="street-address" value={delivery.address} onChange={(event) => setDelivery({ ...delivery, address: event.target.value })} /></label>
        <label>City<input required autoComplete="address-level2" value={delivery.city} onChange={(event) => setDelivery({ ...delivery, city: event.target.value })} /></label>
        <label>Postal code<input required autoComplete="postal-code" value={delivery.postalCode} onChange={(event) => setDelivery({ ...delivery, postalCode: event.target.value })} /></label>
      </div>
      <h2>Payment Method</h2>
      {[["UPI", "Pay by UPI"], ["Card", "Credit or debit card"], ["Cash on Delivery", "Cash on delivery"]].map(([value, label]) => (
        <label className="pay-row" key={value}>
          <input type="radio" name="payment" value={value} checked={paymentMethod === value} onChange={() => setPaymentMethod(value)} />
          <strong>{label}</strong><span>{value === "Cash on Delivery" ? "COD" : value}</span>
        </label>
      ))}
      <p className="pay-note">Payment is recorded as a checkout preference. Online payment processing is not configured.</p>
    </form>
    <OrderSummary cart={cart} subtotal={subtotal} tax={tax} shipping={shipping} total={total} />
  </main> : <main className="checkout-empty container"><h1>Your cart is empty</h1><p>Add an invitation design before checkout.</p><Link to="/wedding-invitation" className="btn">Browse invitations</Link></main>}<Footer /></>;
}

function OrderSummary({ cart, subtotal, tax, shipping, total }) {
  return <aside className="order-summary checkout-summary">
    <h2>Order Summary</h2>
    <div className="checkout-products">{cart.map((product) => <div className="date-row" key={product.id}><span>{product.title} × {product.qty}</span><b>Rs.{(product.price * product.qty).toFixed(2)}</b></div>)}</div>
    <hr />
    <div className="date-row"><span>Subtotal</span><b>Rs.{subtotal.toFixed(2)}</b></div>
    <div className="date-row"><span>Tax (18%)</span><b>Rs.{tax.toFixed(2)}</b></div>
    <div className="date-row"><span>Shipping</span><b>Rs.{shipping.toFixed(2)}</b></div>
    <div className="orange-row"><span>Total</span><b>Rs.{total.toFixed(2)}</b></div>
    <button className="btn wide" type="submit" form="checkout-form">Place Order · Rs.{total.toFixed(2)}</button>
  </aside>;
}

export function OrderPlaced() {
  const location = useLocation();
  const { user } = useAuth();
  const order = location.state?.order || user?.orders?.at(-1);
  return <><Header /><main className="order-page container">{order ? <>
    <div className="confirm-orbit"><CheckCircle2 /><span>O R D E R &nbsp; C O N F I R M E D</span></div>
    <div className="order-layout">
      <section>
        <h1>Your Order</h1>
        <h3>Order ID: {order.id}</h3>
        <p>Placed {new Date(order.createdAt).toLocaleString()}</p>
        <h3>Thank you, {order.customer.name}. Your order is confirmed.</h3>
        {order.items.map((product) => <div className="order-product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <b>{product.title}<br /><br />Quantity: {product.qty}</b>
          <strong>Rs.{(product.price * product.qty).toFixed(2)}</strong>
        </div>)}
        <div className="order-box"><h3>Order Summary</h3>
          <div>Subtotal <b>Rs.{order.subtotal.toFixed(2)}</b></div>
          <div>Shipping <b>Rs.{order.shipping.toFixed(2)}</b></div>
          <div>Tax <b>Rs.{order.tax.toFixed(2)}</b></div>
          <div>Payment method <b>{order.paymentMethod}</b></div>
          <hr /><div><strong>Total</strong><strong>Rs.{order.total.toFixed(2)}</strong></div>
        </div>
      </section>
      <aside className="customer-stack">
        <div><h3>Customer</h3><p><CircleUserRound /> {order.customer.name}</p><p><Package /> {user.orders.length} order{user.orders.length === 1 ? "" : "s"}</p></div>
        <div><h3>Customer Information</h3><p><Mail /> {order.customer.email}</p><p><Phone /> {order.customer.phone}</p></div>
        <div><h3>Shipping Address</h3><p><MapPin /> {order.customer.address}, {order.customer.city} {order.customer.postalCode}</p></div>
        <div><h3>Billing Address</h3><p>Same as shipping address</p></div>
      </aside>
    </div>
    <Link to="/" className="btn order-continue">Continue Shopping</Link>
  </> : <div className="empty"><h1>No recent order found</h1><Link to="/cart" className="btn">Return to cart</Link></div>}</main><Footer /></>;
}
