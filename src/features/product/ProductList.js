
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ListItem from "./ListItem";
import { getProduct } from "./productApi";

const ProductList = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct()
      .then((res) => {
        // המרת התשובה למערך של אובייקטים בפורמט JSON
        const data = JSON.parse(res.data);
        setProducts(data);
      })
      .catch((err) => {
        alert("לא ניתן לטעון את המוצרים");
        console.error("eror:" +err);
      });
  }, []);



  return (<>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ListItem one={product} />
        </li>
      ))}
    </ul>
    <Outlet/>
    </>
  );
};

export default ProductList;
