import Head from 'next/head';
import { useState } from 'react';
import CartItem from '../components/CartItem';
import { fetchCartItems } from '../utils/api'; // Assuming you have a function to fetch cart items

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from the API or any data source
  useEffect(() => {
    const fetchCartData = async () => {
      const items = await fetchCartItems();
      setCartItems(items);
    };
    fetchCartData();
  }, []);

  const handleRemoveItem = (itemId) => {
    // Remove the item with the given itemId from the cartItems state
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Head>
        <title>Fashion App - Cart</title>
        {/* Add any other meta tags you need */}
      </Head>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
          ))}
          <p>Total: ${calculateTotal(cartItems)}</p>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  // Fetch any data needed for the cart page here if required
  return {
    props: {},
  };
}

// Utility function to calculate the total price of items in the cart
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default Cart;