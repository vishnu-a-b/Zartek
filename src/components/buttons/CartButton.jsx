import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment,decrement } from "../../redux/slices/createSlices";
import "./CartButton.css"

const CartButton = (props) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  //function for increment button count and cart count
  const handleAddToCart = (no) => {
    if (no === -1 && count === 0) {
      setText("");
    } else {
      setCount(count + no);
      if(no=== -1){
        dispatch(decrement())
      }else{
        dispatch(increment())
      }
      
      setText("Customizations available");
    }
  };

  return (
    <>
      <div className="cartButton">
        <button onClick={() => handleAddToCart(-1)}>
          -
        </button>
        <div>{count}</div>
        <button onClick={() => handleAddToCart(1)}>
          +
        </button>
      </div>
      {props.item.dish_Availability ? (
        <h4 className="colorRed">{text}</h4>
      ) : ""}
    </>
  );
};

export default CartButton;
