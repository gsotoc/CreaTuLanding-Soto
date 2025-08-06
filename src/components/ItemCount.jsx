import UsarData from "../hooks/UsarData";
import { useState, useEffect } from "react";

function ItemCount({ id, count, stock, onAdd }) {
  const { increaseCount, decreaseCount } = UsarData();
  const [localCount, setLocalCount] = useState(count);

  useEffect(() => {
    setLocalCount(count);
  }, [count]);

  const handleIncrease = () => {
    if (localCount < stock) {
      if (onAdd) {
        setLocalCount(localCount + 1); 
      } else {
        increaseCount(id); 
      }
    }
  };

  const handleDecrease = () => {
    if (localCount > 1) {
      if (onAdd) {
        setLocalCount(localCount - 1); 
      } else {
        decreaseCount(id); 
      }
    }
  };

  const handleAdd = () => {
    if (onAdd) {
      onAdd(localCount); 
      setLocalCount(1);
    }
  };

  return (
    <>
      <div className="count-manager">
        <button onClick={handleDecrease}>-</button>
        <span>{localCount}</span>
        <button onClick={handleIncrease} disabled={localCount >= stock}>+</button>
      </div>

      {onAdd && (
        <button className="addToCart" onClick={handleAdd}>Agregar al carrito</button>
      )}
    </>
  );
}

export default ItemCount;
