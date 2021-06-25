import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetailPage() {
  // ⬇️ setting state for ONE product
  const [product, setProduct] = useState(null);

  // ⬇️ using params (need to look into) so we have access to iD
  const { id } = useParams();

  // ⬇️ using useEffect to fetch all the product detail info from server

  return (
    <main>
      <section class="product-detail main-wrapper">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        />
        <div class="product-detail__side">
          <h3></h3>
          <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
          <p>
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
          <p>£109.95</p>
          {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
          <button>Add to basket</button>
        </div>
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
