import React, { useState } from "react";

export const AltasProductos = () => {
    const [formState, setFormState] = useState({
        id: "",
        nombre: "",
        tipo: "",
        stock: "",
        stockmax: ""
    });
    const [message, setMessage] = useState("");

    const { id, nombre, tipo, stock, stockmax } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };

    const validateForm = () => {
        if (!id || !nombre || !tipo || !stock || !stockmax) {
            setMessage("Todos los campos son obligatorios.");
            return false;
        }
        if (isNaN(stock) || isNaN(stockmax)) {
            setMessage("Stock y Stock Max deben ser números.");
            return false;
        }
        return true;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        if (!validateForm()) {
            return;
        }

        const parametros = `id=${id}&nombre=${nombre}&tipo=${tipo}&stock=${stock}&stockmax=${stockmax}`;
        console.log(`http://localhost/proyecto2/php/insertaproductos.php?${parametros}`);

        try {
            const response = await fetch(`http://localhost/proyecto2/php/insertaproductos.php?${parametros}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if (response.ok) {
                const data = await response.text();
                setMessage("Operación correcta: " + data);
            } else {
                setMessage('Error en la solicitud: ' + response.status);
            }
        } catch (error) {
            setMessage('Error de red: ' + error.message);
        }
    };

    return (
        <form className="w3-container" onSubmit={onSubmit}>
            <p>
                <label className="w3-text-brown"><b>Id</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="id"
                    type="text"
                    value={id}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <label className="w3-text-brown"><b>Nombre</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="nombre"
                    type="text"
                    value={nombre}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <label className="w3-text-brown"><b>Tipo</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="tipo"
                    type="text"
                    value={tipo}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <label className="w3-text-brown"><b>Stock</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="stock"
                    type="text"
                    value={stock}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <label className="w3-text-brown"><b>Stock Max</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="stockmax"
                    type="text"
                    value={stockmax}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <button type="submit" className="w3-btn w3-brown">Submit</button>
            </p>
            {message && <p>{message}</p>}
        </form>
    );
};
