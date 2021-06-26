function BasketItem({ item }) {
  return (
    <li>
      <article class="basket-container__item">
        <img src={item.image} alt={item.title} width="90" />
        <p>{item.title}</p>
        <p>
          Qty:
          <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </p>
        {/* <!-- The item total is calculated using the Qty selected value --> */}
        <p>Item total: £{(item.quantity * item.price).toFixed(2)}</p>
      </article>
    </li>
  );
}

export default BasketItem;

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "categoryId": 3,
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//     },
