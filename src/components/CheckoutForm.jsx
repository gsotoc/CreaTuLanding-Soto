import { useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import CartTotal from '../hooks/CartTotal';
import UsarData from '../hooks/UsarData';
import '../App.css';

function CheckoutForm () {
  const { cartItems, clearCart } = UsarData();

  const [compraRealizada, setCompraRealizada] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    metodoPago: "tarjeta",
    productosComprados: cartItems
  });

  const [idCompra, setIdCompra] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const ventas = collection(db, "ventas");
    const docRef = await addDoc(ventas, formData);
    clearCart();
    setCompraRealizada(true);
    setFormData({
      nombre: "",
      email: "",
      direccion: "",
      metodoPago: "tarjeta",
      productosComprados: cartItems
    });
    setIdCompra(docRef.id);
  };

  return (
    <>
      {compraRealizada ? (    
        <div className="confirmacion-compra">
          <h2>¡Gracias por tu compra!</h2>
          <p>ID de la compra: {idCompra}</p>
          <p>Hemos recibido tu orden y te enviaremos un correo de confirmación pronto.</p>
        </div>
      ) : (
        <div className='checkout-form'>
          <form onSubmit={handleSubmit} className="formulario-compra">
          <h2>Formulario de Compra</h2>

          <label>
              Nombre completo:
              <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              />
          </label>

          <label>
              Correo electrónico:
              <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              />
          </label>

          <label>
              Dirección de entrega:
              <textarea
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
              />
          </label>

          <label>
              Método de pago:
              <select
              name="metodoPago"
              value={formData.metodoPago}
              onChange={handleChange}
              >
              <option value="tarjeta">Tarjeta de crédito</option>
              <option value="transferencia">Transferencia bancaria</option>
              </select>
          </label>

          <div>
              <h3>Total a pagar: $ <CartTotal /></h3>
          </div>

          <button type="submit">Finalizar compra</button>
          </form>
          <section className='checkout-products'>
            <h3>Productos seleccionados</h3>
            {cartItems.map(item =>(
              <li key={item.id}>
                  <h4>{item.title}</h4>
                  <p>$ {item.price} x{item.count} unidades</p> 
              </li>

            ))}
          </section>
        </div>
      )}

    </>
  );
}

export default CheckoutForm;