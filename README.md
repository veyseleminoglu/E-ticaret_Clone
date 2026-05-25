# 🛒 React Context Store

A clean React + Vite demo project showing how to build a shopping cart with Context API, React Router, and Tailwind CSS.

![Demo GIF](./demo.gif)

## ✨ What it includes

- React 19 + Vite for fast development
- Context API for global state management
- React Router for page navigation
- Tailwind CSS for utility-first styling
- Axios for loading product data
- Simple shopping cart flow with add/remove/clear actions

## 🚀 Project structure

- `src/main.jsx` - app bootstrap with providers
- `src/App.jsx` - router setup and page layout
- `src/context/productContext.jsx` - product list loader
- `src/context/basketContext.jsx` - shopping cart state
- `src/pages/home.jsx` - product list page
- `src/pages/basket.jsx` - basket page
- `src/components` - UI components and layout pieces

## 🧪 How to run

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## 🔧 Available scripts

- `npm run dev` - start Vite development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint over the project

## 💡 Notes

- The cart state is managed with `BasketContext`
- Products are loaded from `https://dummyjson.com/products`
- `BasketItem` and `BasketInfo` are ready to display cart details
- Use the navigation links to switch between home and basket pages

## 📌 Recommended improvements

- Add error handling UI for product loading failures
- Persist basket state to `localStorage`
- Add checkout page or payment flow
- Add unit tests for context and page behavior

## ⭐ License

This repository is provided as a learning demo and can be adapted for small frontend projects.
