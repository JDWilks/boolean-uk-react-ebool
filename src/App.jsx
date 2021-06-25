import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import BasketPage from "./pages/BasketPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          {/* ⬇️ Exact Route (React 'page') to: home(which is redirected to products) */}
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>
          {/* ⬇️ Exact Route (React 'page') to: products page */}
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          {/* ⬇️ Exact Route (React 'page') to: products detail page using the id // i need to understand the : syntax */}
          <Route path="/products/:id" exact>
            <ProductDetailPage />
          </Route>
          {/* ⬇️ Exact Route (React 'page') to: categoreis page */}
          <Route path="/categories" exact>
            <CategoriesPage />
          </Route>
          {/* ⬇️ Exact Route (React 'page') to: basket page */}
          <Route path="/basket" exact>
            <BasketPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

// - The templates folder has a template for each page you have to build
// - There's a folder with screenshots of each page you have to build
// - The app should have 3 main routes: products, categories, basket
// - When a user lands on the app, it should be redirected to the products route
// - Make sure you have dynamic routes for the products detail page once a user clicks on a product card
// - Inside the Categories, each category should lead to a filtered version of the products page
// - The add to basket button on the Products Details page shout add the item to the basket, and take you to the basket page
