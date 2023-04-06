import React from 'react'
import CartButton from '../buttons/CartButton';
import "./CategoryDishes.css"
import nonVeg from "../../assets/images/non-veg.svg";
import veg from "../../assets/images/veg.svg";


export default function CategoryDishes(props) {
  return (

    <div className='categoryDishes'>
      {props.dishes === undefined
        ? ""
        : props.dishes.map((item, index) => {
          return (
            <div>
              <div className="item" key={index}>

                <div className='content'>
                  <div className='foodType'>
                    {item?.dish_Type === 1 ? <img src={nonVeg} alt="veg" /> : <img src={veg} alt="nonVeg" />}
                  </div>
                  <div className='subContent'>
                    <h1>
                      {item?.dish_name}
                    </h1>
                    <div className="caloriesAndCash">
                      <h3>
                        {item?.dish_currency} {""} {item?.dish_price}
                      </h3>
                      <h3>
                        {item?.dish_calories} Calories
                      </h3>
                    </div>
                    <h4>
                      {item?.dish_description}
                    </h4>
                    {item.dish_Availability ? (
                      <CartButton item={item} cartCount={props.setCart} />
                    ) : (
                      <h4>
                        Not Available
                      </h4>
                    )}
                  </div>
                </div>
                <div className='caloriesAndImg'>
                  <div className='itemImage'>
                    <img src={item?.dish_image} alt="" />
                  </div>
                </div>
              </div>
              <hr />
            </div>

          );
        })}
    </div>
  )
}
