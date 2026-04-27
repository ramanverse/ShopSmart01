# EtherealRetail 🌿

![EtherealHero](https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop)

> Nature, distilled. A full-stack, end-to-end e-commerce concept optimizing the digital storefront experience through sophisticated Mongoose schemas, programmatic algorithmic data filtering, and a bespoke "Bento Grid" React user interface.

### 🌐 Live Deployment & Source Code
*   **Live Application**: [https://ethereal-retail.vercel.app](https://ethereal-retail.vercel.app)
*   **GitHub Repository**: [https://github.com/Abhi3975/EtherealRetail](https://github.com/Abhi3975/EtherealRetail)
## 🌟 Elite Architecture Features

- **Advanced Database Aggregation**: Uses deeply nested MongoDB/$group pipelines inside the `/api/analytics` routes to instantly render Admin KPIs.
- **Dynamic Programmatic Pagination**: The catalog APIs dynamically parse multi-parameter queries (`?category=Jackets&sort=price_desc&limit=10`) using Mongoose cursor operations (`.skip().limit()`).
- **Heavy Frontend Operations**: Implements React `Suspense` and `lazy()` boundary boundaries to aggressively code-split the router bundle, optimizing initial painting times.
- **Bcrypt Hash/Salting**: Pure cryptographic token storage within Mongoose `pre-save` hooking.
- **REST Autodocumentation**: Ships with an embedded `Swagger / OpenAPI` sandbox interface so any engineering team can play with the routes directly.

## 🛠️ Stack Architecture
- **Environment**: Node.js & Express.js (protected by `Helmet` and `Express Rate Limiters`)
- **Database**: MongoDB Atlas via `Mongoose`
- **Frontend**: Vite + React 18
- **Styling UI**: TailwindCSS + `framer-motion` for iOS-like transitions
- **Storage Box**: Multer interceptors wired asynchronously into Cloudinary APIs.

## 🚀 Getting Started

To run the application locally, follow these steps:

1. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Install dependencies: `npm install`
   - Create a `.env` file with your `MONGO_URI` and `JWT_SECRET`.
   - Start the server: `node server.js`

2. **Frontend Setup**:
   - Navigate to the `frontend` directory.
   - Install dependencies: `npm install`
   - Start the development server: `npm run dev`

3. **Database Seeding (Optional)**:
   - Run `node seed.js` in the `backend` directory to populate the database with initial products.

---
*Built meticulously for an obsessive approach to digital retail.*
