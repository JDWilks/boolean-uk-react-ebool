import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import BasketPage from "./pages/BasketPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useState } from "react";

// ⬇️ hardcoded basket in state
function App() {
  const [basket, setBasket] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      categoryId: 3,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      categoryId: 3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      categoryId: 3,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      categoryId: 3,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
  ]);

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
          <Route setBasket={setBasket} path="/products/:id" exact>
            <ProductDetailPage />
          </Route>
          {/* ⬇️ Exact Route (React 'page') to: categoreis page */}
          <Route path="/categories" exact>
            <CategoriesPage />
          </Route>
          {/* ⬇️ Exact Route (React 'page') to: basket page */}
          <Route path="/basket" exact>
            {/* ⬇️ passing basket (state) to Basketpage as a prop */}
            <BasketPage basket={basket} />
          </Route>
          {/* ⬇️ Route (React 'page') for 404 */}
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
