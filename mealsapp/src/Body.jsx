import React, { useEffect, useState } from "react";
import axios from "axios";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
function Body() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);
        setitems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist = items.map((item) => {
    return (
      <div className="col-md-4">
        <p>{item.strMeal}</p>
        <img src={item.strMealThumb} alt="food photo" className="img-fluid" />
        <p>{item.idMeal}</p>
      </div>
    );
  });
  return <div className="row">{itemslist}</div>;
}

export default Body;
