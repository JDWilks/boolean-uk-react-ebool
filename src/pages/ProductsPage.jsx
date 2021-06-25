import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  // ⬇️ setting state for products
  const [products, setProducts] = useState([]);

  // ⬇️ useEffect to fetch products from json server and set the state with all the products
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then(setProducts);
  }, []);

  console.log("state", products);

  // ⬇️ interpolation using product which we get from the map (mapping over products to get a product)

  return (
    <main>
      <section class="products-container main-wrapper">
        <ul class="products-container__list">
          {products.map((product) => (
            <li>
              <Link to={`/products/${product.id}`}>
                <article class="product-item">
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "categoryId": 3,
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//     },
