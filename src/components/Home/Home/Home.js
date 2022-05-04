
import useInventory from "../../../hooks/useInventory";
import Banner from "../Banner/Banner";
import './Home.css'

const Home = () => {
  const [items] = useInventory();
  return (
    <div>
      <Banner></Banner>
      {/* Item section */}
      <section className="container">
      
          <div className="row row-cols-1 row-cols-lg-3 g-0">
              {
                  items.slice(0,6).map((item, idx) => <div className="col" key={idx}>
                      <div className="items">
                      <h3>{item.name}</h3>
                      <h2>{item.brand}</h2>
                      <div className="image-container">
                          <img src={item.image} alt="" />
                      </div>
                      </div>
                  </div>)
              }
          </div>
          </section>
      
    </div>
  );
};

export default Home;
