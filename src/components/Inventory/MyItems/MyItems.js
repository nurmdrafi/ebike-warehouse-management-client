import React, { useEffect } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const getItemsByEmail = async () => {
      const email = user?.email;
      if(email){
        const url = `https://ebike-warehouse.herokuapp.com/inventory?userEmail=${email}`;
        await axios.get(url)
        .then(({data}) => {
            console.log(data)
        })
        .catch(err =>{
            console.log(err)
        })
      }
  };
  useEffect(() => {
    getItemsByEmail();
  }, []);
  return <div></div>;
};

export default MyItems;
