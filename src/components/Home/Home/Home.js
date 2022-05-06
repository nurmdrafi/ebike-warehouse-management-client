import useInventory from "../../../hooks/useInventory";
import Banner from "../Banner/Banner";
import "./Home.css";
import { useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();
  const [items] = useInventory();

  return (
    <div>
      <Banner></Banner>
      {/* Item section */}
      <section className="container">
        <h1 className="text-center my-5 py-5">Featured Items</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {items.slice(0, 6).map((item, idx) => (
            <div className="col item-container" key={idx}>
              <div className="item">
                <h4>{item.name}</h4>
                <div className="image-container">
                  <img src={item.image} alt="" />
                </div>
                <h5 className="text-secondary text-uppercase">{item.brand}</h5>
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
        <div className="d-flex justify-content-center my-5">
          <button
            className="btn btn-outline-dark mx-auto"
            onClick={() => navigate("/manage-inventory")}
          >
            Manage Inventories
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
