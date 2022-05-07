import useInventory from "../../../hooks/useInventory";
import Banner from "../Banner/Banner";
import "./Home.css";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import Loading from "../../Shared/Loading/Loading";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [items, setItems, isLoading] = useInventory();
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <Banner></Banner>
      {/* Item section */}
      <section className="container">
        <h1 className="text-center my-5 py-5">Featured Items</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {items.slice(0, 6).map((item, idx) => (
              <div className="col item-container" key={idx}>
                <div className="item">
                  <h4>{item.name}</h4>
                  <div className="image-container">
                    <img src={item.image} alt="" />
                  </div>
                  <h5 className="text-secondary text-uppercase">
                    {item.brand}
                  </h5>
                  <h5>Price: ${item.price}</h5>
                  <h5>Stock Available: {item.quantity}</h5>
                  <h5>Description</h5>
                  <p>{item.description}</p>
                  <h4 className="fs-6">Supplier Name: {item.supplierName}</h4>
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate(`/inventory/${item._id}`)}
                  >
                    Stock Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="d-flex justify-content-center my-5">
          <button
            className="btn btn-outline-dark mx-auto"
            onClick={() => navigate("/manage-inventory")}
          >
            Manage Inventories
          </button>
        </div>
      </section>
      {/* Slider */}
      <section className="container">
        <motion.div className="carousel" ref={carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {items.map((item, idx) => (
              <motion.div className="item" key={idx}>
                <img src={item.image} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
