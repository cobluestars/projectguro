import { Link, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import "./list.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Drink from "../Products_list/drink";

function List(props) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const dataParam = queryParams.get("category");

  let data = null;
  useEffect(() => {
    axios.get("/products.json").then((data) => {
      setProducts(data.data.categories);
    });
    if (dataParam) {
      try {
        data = JSON.parse(dataParam);
        setSelectedCategory(data);
      } catch (error) {
        console.error("Error parsing data from URL:", error);
      }
    }
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="inner">
      <div className="list-page">
        <Sidebar onCategoryClick={handleCategoryClick} />
        <div className="product-list">
          {selectedCategory ? (
            <div className="category">
              <h2>{selectedCategory.name}</h2>
              <div className="product-grid">
                {selectedCategory.products.map((product) => (
                  <Drink key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div className="category">
              <h2>시그니처</h2>
              <div className="product-grid">
                {products.length > 0 &&
                  products[0].products.map((product) => (
                    <Drink key={product.id} product={product} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default List;
