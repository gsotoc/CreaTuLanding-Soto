import UsarData from "../hooks/UsarData";
import { useState, useEffect } from "react";

function ItemCount({ id, count, stock, onAdd }) {
  const { increaseCount, decreaseCount } = UsarData();
  const [localCount, setLocalCount] = useState(count);
  const [mensajeStock, setMensajeStock] = useState("");

  useEffect(() => {
    setLocalCount(count);
  }, [count]);

  useEffect(() => {
    if (mensajeStock) {
      const timeout = setTimeout(() => setMensajeStock(""), 2000);
      return () => clearTimeout(timeout);
    }
  }, [mensajeStock]);

  const handleIncrease = () => {
    if (localCount < stock) {
      if (onAdd) {
        setLocalCount(localCount + 1);
      } else {
        increaseCount(id);
      }
      setMensajeStock("");
    } else {
      setMensajeStock("No hay stock suficiente");
    }
  };

  const handleDecrease = () => {
    if (localCount > 1) {
      if (onAdd) {
        setLocalCount(localCount - 1);
      } else {
        decreaseCount(id);
      }
      setMensajeStock("");
    }
  };

  const handleAdd = () => {
    if (onAdd) {
      onAdd(localCount);
      setLocalCount(1);
      setMensajeStock("");
    }
  };

  return (
    <>
      <div className="count-manager">
        <button onClick={handleDecrease}>-</button>
        <span>{localCount}</span>
        <button onClick={handleIncrease}>+</button>
      </div>

      {mensajeStock && <p style={{ color: "red" }}>{mensajeStock}</p>}

      {onAdd && (
        <button className="addToCart" onClick={handleAdd}>
          Agregar al carrito
        </button>
      )}
    </>
  );
}

export default ItemCount;
