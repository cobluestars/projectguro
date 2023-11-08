import { useNavigate } from "react-router-dom";
import "./drink.css";

function Drink({ product }) {
  const navigate = useNavigate();
  function onClick() {
    navigate("/Detailpage?data=" + JSON.stringify(product));
  }

  return (
    <div className="product" onClick={onClick}>
      <div className="product_image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product_name">
        <span>{product.name}</span>
      </div>

      <div className="product_price">
        <span className="price">
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <span className="unit">원</span>
      </div>
    </div>
  );
}

export default Drink;
