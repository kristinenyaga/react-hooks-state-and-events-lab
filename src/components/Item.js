import React, { useState } from "react";

function Item({ name, category }) {
  const[isInCart,setIsInCart]=useState(false)
  function handleCart(e){
    setIsInCart(isInCart => !isInCart)
    console.log(e)
  }
  return (
    <li className= {isInCart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{isInCart? "Remove From Cart":"Add to Cart" }</button>
    </li>
  );
}

export default Item;
