import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  let [cartItems, setCartItems] = useState([]);
  let [price, setPrice] = useState(0);

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map(
        (
          item,
          index // TODO: map bakeryData to BakeryItem components
        ) => (
          <BakeryItem
            item={item}
            index={index}
            cartItems={cartItems}
            setCartItems={setCartItems}
            price={price}
            setPrice={setPrice}
          /> // replace with BakeryItem component
        )
      )}
      <div>
        <h1>Cart</h1>
        {cartItems.map(
          (
            item,
            index // TODO: map bakeryData to BakeryItem components
          ) => (
            <h2>{item.name}</h2>
          )
        )}
        <h2>Total: {price}</h2>
      </div>
    </div>
  );
}

export default App;
