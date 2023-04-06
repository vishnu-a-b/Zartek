import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CategoryDishes from "./CategoryDishes";
import "./MenuCategory.css"

export default function MenuCategory(props) {
  console.log(props)
  const settings = {
    dots: false,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          focusOnSelect: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          focusOnSelect: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          focusOnSelect: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [dishes, setDishes] = useState(props.data[0].category_dishes);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleClick = (cat, dishes, index) => {
    console.log(dishes);
    setDishes(dishes);
    setActiveSlide(index);
  };

  return (
    <div className="menuCategory">
      <Slider {...settings}>
        {props.data?.map((item, index) => {
          return (
            <div key={index} className={`slide ${index === activeSlide ? "active" : ""}`} onClick={() => handleClick(item.menu_category, item.category_dishes, index)}>
              <h3 >
                {item?.menu_category}
              </h3>
              <hr></hr>
            </div>
          );
        })}
      </Slider>
      <CategoryDishes dishes={dishes} />
    </div>
  );
};
