import { Link } from 'react-router-dom';
export default function Hero() { 
    return (
        <section className="hero">
            <div className="hero-paper">
                <h1>Your Love Story Begins Here</h1>
                <p>Create stunning wedding invitations that capture the essence of your special day. Elegant designs, heartfelt words, and everything you need to make your first impression unforgettable.</p>
                <Link to="/wedding-invitation" className="btn">Get your style</Link>
            </div>
        </section>
    )
}
