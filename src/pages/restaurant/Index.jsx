import React, { useEffect, useState } from 'react'
import MenuCategory from '../../components/restaurant/MenuCategory';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setRestaurantName } from "../../redux/slices/resturantSlice";

export default function index() {
  const [menuList, setMenuList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
        );
        setMenuList(response.data[0].table_menu_list);
        dispatch(setRestaurantName(response.data[0].restaurant_name));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error: {error.message}</p>;
  }
  return (
    <MenuCategory data={menuList}/>
  )
}
