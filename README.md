# URBAN DROPS (Aether Studio)
Demo link : https://urban-drops.vercel.app/

![Urban Drops Banner](https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop)

A premium, immersive e-commerce platform designed for high-end streetwear. Exploring the synthesis of urban culture and modern daily aesthetics since MMXXIV. Built with a focus on minimalist design, micro-animations, and a flawless user experience.

## ✨ Key Features

- **Immersive Hero Section:** Dynamic, animated entry with interactive parallax elements.
- **Full E-Commerce Flow:**
  - Dynamic **Product Listings** with category and price range filters.
  - Detailed **Product View** with size selection, image galleries, and related products.
  - Interactive **Shopping Cart** with quantity adjustments and real-time total calculation.
  - Complete **Checkout Process** simulating real-world logistics and payment capture.
  - **Order Confirmation** with dynamically generated protocol IDs.
- **Advanced Navigation & Search:** Dedicated, real-time search portal and categorized collections.
- **Institutional Pages:** High-fidelity "About Us" and "Contact" sections with built-in client testimonials and validation.
- **Premium Aesthetics:** Curated greyscale-to-color transition effects, glassmorphism, bespoke typography, and micro-interactions.

## 🛠 Tech Stack

- **Frontend Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS (v4) + Custom CSS architecture for animations
- **Routing:** React Router v7
- **Animations:** Motion (Framer Motion equivalent)
- **Icons:** Lucide React
- **Backend / Database (Mocked/Integrated):** Firebase Firestore (Orders & Data)

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/        # Navbar, Footer, ScrollToTop
│   └── ui-elements/   # Reusable Product Cards, Section Titles
├── context/           # React Context (Cart, Auth)
├── pages/             # All application routes (Home, Products, Checkout, etc.)
├── lib/               # Utility functions and Firebase configuration
├── constants.ts       # Centralized application data (Products, Categories)
├── App.tsx            # Main application router
└── main.tsx           # React DOM entry point
```

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/koushiksiddhu1916/URBAN-DROPS.git
   cd URBAN-DROPS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your Firebase credentials (refer to `.env.example` if available).
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ...
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## 🎨 Design Philosophy

URBAN DROPS is engineered to be more than a store—it's an interactive archive. We prioritize:
- **Visual Excellence:** Utilizing a brutalist yet refined interface with strict geometric boundaries and high-contrast typography.
- **Fluid Motion:** Leveraging `motion/react` to provide sensory feedback on every interaction without overwhelming the user.
- **Performance:** Using Vite for rapid development and optimized production builds.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Developed with focus on aesthetic utility and modern web standards.*
