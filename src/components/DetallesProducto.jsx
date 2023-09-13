import React from 'react';
import { useParams } from 'react-router-dom';
import { productos } from './productos'; // Asegúrate de que la ruta sea correcta

const DetallesProducto = () => {
    const { id } = useParams();
    const producto = productos.find((p) => p.id === parseInt(id));

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div>
            <h2>Detalles del Producto</h2>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
        </div>
    );
};

export default DetallesProducto;
