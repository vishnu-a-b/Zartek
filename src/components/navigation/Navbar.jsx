import { useSelector } from "react-redux";
import './Navbar.css'
import cartImg from "../../assets/images/cart-shopping-solid.svg";
export default function Navbar() {
  const restaurantName = useSelector((state) => state.restaurant);
  const count = useSelector((state) => state.cartCount);
  return (
    <nav className="navBar">
      <h1>{restaurantName}</h1>
      <div className="cart">
        <h3>My Orders</h3>
        <img src={cartImg} alt="cart" />
        <div className="cart-count">{count}</div>
      </div>

    </nav>
  );
}


