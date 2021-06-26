import { useEffect, useState } from "react";
import { useParams } from "react-router";

// i don't understand the additemtobaset here in {} which is then used on line 32 with the product
export default function ProductDetailPage({ addItemToBasket }) {
  // ⬇️ setting state for ONE product
  const [product, setProduct] = useState(null);

  // ⬇️ using params (need to look into) so we have access to iD
  const { id } = useParams();

  // ⬇️ using useEffect to fetch all the product detail info from server

  useEffect(() => {
    // Update the document title using the browser API
    fetch(`http://localhost:4000/products/${id}`)
      .then((response) => response.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <h1>Hang on buddy, page is loading...</h1>;

  return (
    <section class="product-detail main-wrapper">
      <img src={product.image} alt={product.title} />
      <div class="product-detail__side">
        <h3></h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>£${product.price}</p>
        {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
        <button onClick={() => addItemToBasket(product)}>Add to basket</button>
      </div>
    </section>
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
