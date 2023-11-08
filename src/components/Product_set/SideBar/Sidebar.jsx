import "./Sidebar.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Sidebar({ onCategoryClick }) {
  const [categories, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/products.json").then((data) => {
      setProducts(data.data.categories);
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {categories.map((category) => (
            <li
              key={category.name}
              className="sidebarListItem"
              onClick={() => onCategoryClick(category)}
            >
              <div className="categoryBox">
                {category.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
