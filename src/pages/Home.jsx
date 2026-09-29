import { useState } from "react";
import {
  ClipboardList,
  FileCheck2,
  Smartphone,
  PackageCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import Countdown from "../components/Countdown";
import { products, categories } from "../data/products";
const collection = [
  [
    "Hindu Invitation Collections",
    "Hindu_Invitations_Collections.png",
    "hindu",
    "Hindu Wedding Cards",
  ],
  [
    "Christian Invitation Collections",
    "Christian Invitation Collections.png",
    "christian",
    "Christian Wedding Cards",
  ],
  [
    "Muslim Invitation Collections",
    "Muslim Invitation Collections.png",
    "muslim",
    "Muslim Wedding Cards",
  ],
  [
    "Sikh Invitation Collections",
    "Sikh Invitation Collections.jfif",
    "sikh",
    "Sikh Wedding Cards",
  ],
];
const carouselImage = [
  {
    title: "Laser Cut Invitations",
    image: "/assets/Laser_Cut_Invitations.png",
  },
  { title: "Scroll Invitations", image: "/assets/Scroll_Invitations.png" },
  { title: "E-Wedding Invitations", image: "/assets/E-Wedding_Invitation.png" },
];
const testimonials = [
  [
    "James",
    "Absolutely beautiful invites!",
    "We were blown away by the quality and elegance of our wedding invitations. The paper felt luxurious, and the printing was flawless.",
    "/assets/James.jpg",
  ],
  [
    "Harshitha",
    "Customized to perfection",
    "We wanted something simple but unique, and they absolutely nailed it. Colors, fonts, wording — everything was exactly how we imagined.",
    "/assets/Harshitha.jpg",
  ],
  [
    "Santosh",
    "Great quality at a great price.",
    "We were on a tight budget, but didn’t want to compromise on style. These invites were not only affordable but looked premium.",
    "/assets/Santosh.jpg",
  ],
];
const steps = [
  ["Order Sample", "/assets/order_sample.png"],
  ["Get Sample Order In 5 days", "/assets/get_sample_order.png"],
  ["Approve Digital Draft", "/assets/approve_digital_draft.png"],
  ["Place Your Bulk Order", "/assets/bulk_order.png"],
  ["Print & Delivery", "/assets/print_delivery.png"],
];
export default function Home() {
  const [idx, setIdx] = useState(0);
  const affordable = products.slice(0, 6);
  const carousel = products.slice(0, 5);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="container section carousel-section">
          <Carousel items={carouselImage} />
        </section>
        <section className="container section">
          <SectionTitle
            title="Unique & Exclusive Invitation Cards"
            subtitle="Because Each Wedding is Truly Unique and Memorable"
          />
          <div className="category-grid three">
            {categories.slice(0, 3).map((x) => (
              <CategoryCard key={x.title} item={x} />
            ))}
          </div>
        </section>
        <section className="container section">
          <SectionTitle
            title="Theme Based Invitation"
            subtitle="Theme Based Invitation"
          />
          <div className="category-grid three">
            {categories.slice(3).map((x) => (
              <CategoryCard key={x.title} item={x} />
            ))}
          </div>
        </section>
        <section className="container promo-grid section">
          <div className="promo promo-one">
            <img className="promo-ornament" src="/assets/frame_1.png" alt="" aria-hidden="true" />
            <div className="promo-copy">
              Join our love-letters list and enjoy <b>20% off</b> your first set
              of wedding invitations.
            </div>
            <div className="promo-medallion">
              <img className="promo-img-one" src="/assets/frame_2.png" alt="" aria-hidden="true" />
              <strong>
                Get 20% Off
                <br />
                Your First Order!
              </strong>
            </div>
          </div>
          <div className="promo promo-two">
            <img className="promo-ornament" src="/assets/frame_3.png" alt="" aria-hidden="true" />
            <div className="promo-medallion">
              <img className="promo-img-two" src="/assets/frame_2.png" alt="" aria-hidden="true" />
              <strong>✧ Early Bird Bonus</strong>
            </div>
            <div className="promo-copy">
              Planning ahead pays off! Book your order 60+ days in advance and
              get a free set of 20 extra invites for last-minute guests.
            </div>
          </div>
        </section>
        <section className="container section">
          <SectionTitle title="Simple and Affordable Wedding Cards" />
          <div className="product-grid">
            {affordable.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
        <section className="sale">
          <div className="sale-inner">
            <div>
              <span>Summer</span>
              <em>Sale</em>
            </div>
            <div className="discounts">
              <b>100 cards – 10% Off</b>
              <b>200 cards – 15% Off</b>
              <b>300 cards – 20% Off</b>
              <b>400 cards – 25% Off</b>
              <b>500 cards – 30% Off</b>
            </div>
          </div>
          <div className="stock">
            <div>Stock Clearance - 40% to 60% off</div>
            <small>
              This offer is not applicable on customized card, E-cards and
              Luxury boxes.
            </small>
          </div>
        </section>
        <section className="container section">
          <div className="collection-grid">
            {collection.map(([title, img, theme, label]) => (
              <div className="collection-card" key={title}>
                <img src={"/assets/" + img} alt={title} />
                <h3>{title}</h3>
                <Link to={`/wedding-invitation?theme=${theme}&label=${encodeURIComponent(label)}`} className="btn small">
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="container section">
          <SectionTitle title="WHAT CLIENT SAY ABOUT US" />
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <div className="testimonial" key={t[0]}>
                <div className="avatar"><img src={t[3]} alt={t[0]} title={t[3]}/></div>
                <h3>{t[0]}</h3>
                <h4>{t[1]}</h4>
                <p>{t[2]}</p>
                <div className="stars">★★★★★</div>
              </div>
            ))}
          </div>
        </section>
        <section className="container section how">
          <SectionTitle title="How It Works" />
          <div className="steps">
            {steps.map(([label, image]) => (
              <div key={label}>
                <img src={image} alt={label} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
