# Wed Knot Craft

A React single-page storefront for browsing Indian wedding invitations, occasion cards, themed designs, and digital invitations. The app includes product details, account-gated cart and wishlist actions, and a client-side checkout/order-history flow.

## Getting Started

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL when the server starts.

## Commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

There are currently no test or lint scripts in `package.json`.

## Main Features

- Home page collections and curated invitation sections.
- Product listings filtered by product category and theme.
- Global search across all product categories at `/search?search=...`.
- Product details with an adjustable quantity selector.
- Login prompt before wishlist/cart mutations; the requested action resumes after login.
- Account profile with expandable order history.
- Cart and checkout based on the signed-in user's cart and delivery profile.
- Responsive navigation and layouts, with Lucide icons.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page |
| `/search?search=...` | Search all products |
| `/wedding-invitation` | Wedding type selector and filtered wedding designs |
| `/special-occasions` | Occasion invitation listings |
| `/theme-cards` | Theme card listings |
| `/scroll-invitation` | Scroll invitation listings |
| `/digital-invitation` | Digital invitation listings |
| `/product/:id` | Product details and quantity selector |
| `/account` | Login, sign-up, profile, and order history |
| `/wishlist` | Signed-in user's saved products |
| `/cart` | Signed-in user's cart |
| `/checkout` | Protected checkout |
| `/order-placed` | Order confirmation |
| `/about`, `/contact`, `/faq`, `/how-to-order` | Information pages |
| `/wedding-details` | Wedding details invitation view |

Category filters use query parameters such as `?theme=hindu`. Search uses `?search=term` and is not limited to a single category.

## Project Structure

- `src/App.jsx` defines the routes and protected shopping pages.
- `src/components/` contains shared navigation, product, category, and layout components.
- `src/context/AuthContext.jsx` manages the demo account session and saved profile/order records.
- `src/context/ShopContext.jsx` manages per-account cart/wishlist state and login-gated actions.
- `src/data/products.js` is the local product catalog and category configuration.
- `src/pages/` contains home, listing, product, account, cart, checkout, and information pages.
- `src/styles/global.css` contains the site-wide styling and responsive rules.
- `public/assets/` contains local product and design imagery.

## Persistence and Checkout Limits

This is a frontend demonstration; it has no server-side authentication, database, or payment integration. Login accepts any non-empty email and password. The active login session and per-account cart/wishlist are held in `sessionStorage`; profile details and order history are held in `localStorage` on the current browser. These stores are not secure or shared between devices.

Checkout calculates an 18% tax and currently sets shipping to Rs.0. Selecting UPI, card, or cash on delivery records a payment preference only; it does not charge a payment method. Configure production authentication, durable server-side order storage, shipping rules, and a payment provider before using this as a live store.

For the full functional and behavioral specification, see [PROJECT_SPEC.md](PROJECT_SPEC.md).
