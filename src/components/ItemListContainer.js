import React from 'react';

const productos = [
  { id: 1, nombre: 'Bota Industrial', precio: 82.000 },
  { id: 2, nombre: 'Tapa Oído', precio: 14.000 },
  { id: 3, nombre: 'Arnes', precio: 236.000 },
  { id: 4, nombre: 'Gafas', precio: 379.000 }, 
];

function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>{greeting}</h2>
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>
                {producto.nombre} - ${producto.precio.toFixed(3)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
