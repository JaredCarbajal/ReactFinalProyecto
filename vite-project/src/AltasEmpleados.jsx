import React, { useState } from "react";

export const AltasEmpleados = () => {
    const [formState, setFormState] = useState({
        id: "",
        nombre: "",
        apellido: "",
        domicilio: "",
        telefono: "",
        correo: "",
        ocupacion: "",
        edad: ""
    });
    const [message, setMessage] = useState("");

    const { id, nombre, apellido, domicilio, telefono, correo, ocupacion, edad } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };

    const validateForm = () => {
        if (!id || !nombre || !apellido || !domicilio || !telefono || !correo || !ocupacion || !edad) {
            setMessage("Todos los campos son obligatorios.");
            return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(correo)) {
            setMessage("Correo no es válido.");
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

        const parametros = `id=${id}&nombre=${nombre}&apellido=${apellido}&domicilio=${domicilio}&telefono=${telefono}&correo=${correo}&ocupacion=${ocupacion}&edad=${edad}`;
        console.log(`http://localhost/proyecto2/php/insertaempleados.php?${parametros}`);

        try {
            const response = await fetch(`http://localhost/proyecto2/php/insertaempleados.php?${parametros}`, {
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
                <label className="w3-text-brown"><b>Apellido</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="apellido"
                    type="text"
                    value={apellido}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <label className="w3-text-brown"><b>Domicilio</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="domicilio"
                    type="text"
                    value={domicilio}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <label className="w3-text-brown"><b>Teléfono</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="telefono"
                    type="text"
                    value={telefono}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <label className="w3-text-brown"><b>Correo</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="correo"
                    type="email"
                    value={correo}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <label className="w3-text-brown"><b>Ocupación</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="ocupacion"
                    type="text"
                    value={ocupacion}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <label className="w3-text-brown"><b>Edad</b></label>
                <input
                    className="w3-input w3-border w3-sand"
                    name="edad"
                    type="text"
                    value={edad}
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
