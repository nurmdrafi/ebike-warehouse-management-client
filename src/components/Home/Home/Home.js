import useInventory from "../../../hooks/useInventory";
import Banner from "../Banner/Banner";
import "./Home.css";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import Loading from "../../Shared/Loading/Loading";
import { motion } from "framer-motion";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Footer from "../../Shared/Footer/Footer";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Home = () => {
  const navigate = useNavigate();
  const [items, setItems, isLoading] = useInventory();
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(3940 - 1296);
  }, []);

  return (
    <div style={{minHeight: "calc(100vh - 185px)"}}>
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
      <h1 className="text-center my-5 py-5">Image Gallery</h1>
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
      {/* Location */}
      <section className="container-fluid p-0">
      <h1 className="text-center my-5 py-5">Location</h1>
        <MapContainer
          center={[23.7934, 90.4064]}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.7934, 90.4064]}>
            <Popup>
              Ebike Warehouse
            </Popup>
          </Marker>
        </MapContainer>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
