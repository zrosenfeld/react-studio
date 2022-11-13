function BakeryItem(props) {
  const handleClick = () => {
    const newList = props.cartItems.concat(props.item);
    props.setCartItems(newList);
    props.setPrice(props.price + props.item.price);
  };
  return (
    <div>
      <img class="image" src={props.item.image} />
      <h2>{props.item.name}</h2>
      <h3>{props.item.description}</h3>
      <div class="row">
        <img
          onClick={handleClick}
          class="column"
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
        />
        <h1>{props.item.price}</h1>
      </div>
    </div>
  );
}

export default BakeryItem;
