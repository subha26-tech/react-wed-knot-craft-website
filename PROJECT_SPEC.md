# Wed Knot Craft Project Specification

## 1. Product Summary

Wed Knot Craft is a responsive invitation-card storefront built with React and Vite. Visitors can explore wedding, special-occasion, themed, scroll, and digital invitations; signed-in demo users can save products, manage a cart, provide delivery details, and review submitted orders.

The current implementation is a client-side prototype. It demonstrates the intended shopping and order flow but is not a production commerce system.

## 2. Goals and Users

### Goals

- Present invitation designs in browsable categories and searchable listings.
- Help a customer inspect a product and choose a quantity.
- Keep cart and wishlist actions associated with the signed-in account.
- Calculate an order from the current cart and show a customer-specific confirmation.
- Let customers revisit their profile and order history in the current browser.

### Primary user

A customer looking for a wedding or celebration invitation who wants to compare designs, shortlist products, and place a sample/demo order.

## 3. User Journeys

### Browse and search

1. Browse the home page collections or open a listing route.
2. Select a category/theme or use global search.
3. Open a product to view its image, price, and details.

### Save or add a product

1. Use Wishlist or Add to Cart on a product card or product detail page.
2. If logged out, go to Account with the selected action retained.
3. Log in or sign up; the pending action resumes on the originating page.
4. On product details, Add to Cart uses the selected quantity (minimum 1).

### Checkout

1. Review and edit quantities in the signed-in user's cart.
2. Proceed to checkout; checkout displays the current account and cart.
3. Enter or confirm recipient name, phone, street address, city, and postal code.
4. Choose a payment preference and submit the order.
5. The app records the order, clears the account's cart, and displays a confirmation.
6. The account's Order History control expands to show saved order details.

## 4. Functional Requirements

### Catalog and navigation

- The home page displays featured wedding cards, theme cards, promotions, collections, testimonials, and process information.
- Wedding, special-occasion, theme, scroll, and digital listings filter by their product `category`.
- Theme query filters further restrict results by exact product `theme`.
- `/search?search=term` searches product titles and themes across all categories, case-insensitively.
- Empty searches show an empty-state message rather than unrelated products.

### Product detail

- A product is addressed by its catalog ID at `/product/:id`.
- The page displays the product image, name, and price.
- Quantity starts at one. Decrease cannot lower it below one; increase adds one.
- Add to Cart adds the selected quantity and supports the same login gate as product-card actions.

### Authentication and profile

- Account routes support the existing demo login and sign-up forms.
- The header displays the current user's name when signed in.
- A guest who attempts a protected shopping action is sent to the login form with the action retained.
- Cart, wishlist, checkout, and order confirmation routes require an authenticated demo session.
- Profile shows the user's name, email, logout control, and collapsible Order History.
- Each order history entry includes its ID, timestamp, status, payment preference, items/quantities, total, and delivery address when available.

### Cart and order calculations

- Cart lines are grouped by product ID; adding an existing product increases its quantity.
- Cart quantity cannot be reduced below one; users can remove a line.
- Subtotal is the sum of price multiplied by quantity.
- Current tax is 18% of subtotal.
- Current shipping charge is Rs.0.
- Order total is subtotal plus tax plus shipping.
- Order placement stores a copy of the cart and customer/delivery data, then empties that account's cart.

## 5. Routes

| Path | Access | Description |
| --- | --- | --- |
| `/` | Public | Home page |
| `/search?search=...` | Public | Global product search |
| `/wedding-invitation` | Public | Wedding type chooser; theme filters show matching wedding products |
| `/special-occasions` | Public | Special-occasion catalog |
| `/theme-cards` | Public | Theme catalog |
| `/scroll-invitation` | Public | Scroll catalog |
| `/digital-invitation` | Public | Digital catalog |
| `/product/:id` | Public | Product detail and quantity selection |
| `/account` | Public | Login, sign-up, and authenticated profile |
| `/wishlist` | Authenticated | Account wishlist |
| `/cart` | Authenticated | Account cart |
| `/checkout` | Authenticated | Delivery and order submission |
| `/order-placed` | Authenticated | Latest order confirmation |
| `/about` | Public | About page |
| `/contact` | Public | Contact page |
| `/faq` | Public | Frequently asked questions |
| `/how-to-order` | Public | Ordering information |
| `/wedding-details` | Public | Wedding details invitation view |

## 6. Technical Design

- **UI:** React function components and CSS.
- **Build/development:** Vite.
- **Routing:** React Router.
- **Icons:** Lucide React.
- **Catalog source:** Static JavaScript data in `src/data/products.js`.
- **Auth state:** `AuthContext`.
- **Commerce state:** `ShopContext`.
- **Protected access:** `ProtectedRoute`.

### Persistence

- `wedknot_auth` is stored in `sessionStorage` for the active login session.
- Cart and wishlist are stored in `sessionStorage` using account-specific keys derived from the signed-in email.
- Profiles and order histories are stored in `localStorage` under `wedknot_profiles`, indexed by normalized email.
- No server API or remote database is currently used.

## 7. Non-Functional Requirements

- Layouts should remain usable at desktop, tablet, and mobile widths.
- Forms and interactive controls should expose labels or accessible names and keyboard-operable behavior.
- User-facing product totals should be formatted as Indian rupees with two decimal places.
- Category/search empty states should explain when there are no matching designs.

## 8. Running and Verification

Requirements: Node.js and npm.

```bash
npm install
npm run dev
npm run build
npm run preview
```

`package.json` currently has no automated test or lint script. Verify shopping changes manually in the browser and run `npm run build` before release.

## 9. Current Limitations and Production Work

- Authentication is a demo flow: any non-empty email/password pair is accepted; passwords are not validated or stored.
- Browser storage is not secure, durable, or synchronized across devices. Do not store sensitive personal/payment data in this prototype.
- UPI/card/COD selection records a preference only. There is no payment provider, transaction authorization, or refund flow.
- Tax and shipping are fixed client-side values and need server-side business rules for production.
- Orders are client-generated and stored locally; a production store needs server-generated IDs, durable order records, inventory handling, and transactional validation.
- Product inventory and imagery are static local assets.

## 10. Design Reference

The visual structure is based on the supplied invitation storefront reference frames. Product imagery and other local assets are served from `public/assets/`; no remote catalog API is currently configured.
