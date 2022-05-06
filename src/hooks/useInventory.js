import { useEffect, useState } from "react";

const axios = require("axios").default;

const useInventory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const url = "https://ebike-warehouse.herokuapp.com/inventory";
      const { data } = await axios.get(url);
      setItems(data);
    };
    getItems();
  }, []);
  return [items, setItems];
};

export default useInventory;
