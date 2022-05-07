import { useEffect, useState } from "react";

import axios from "axios";


const useInventory = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    const getItems = async () => {
      const url = "https://ebike-warehouse.herokuapp.com/inventory";
      const { data } = await axios.get(url);
      setItems(data);
      setIsloading(false)
    };
    getItems();
  }, []);
  return [items, setItems, isLoading];
};

export default useInventory;
