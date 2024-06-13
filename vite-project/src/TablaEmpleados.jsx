import React, { useState, useEffect } from 'react';

export const TablaEmpleados = () => {
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);

    const getData=()=>{
        fetch('http://localhost/proyecto2/php/leerempleados.php')
        .then(response=>{
            if(response.ok){
                response.json()
               .then(function (datosjson){
                    const datos=datosjson.slice(0,10)
                    setData(datos)
                    setFullData(datosjson);
                });
            }
        })
    }

    const algo=useEffect(()=>{
        getData()
    },[])

    const todos = () => {
        setData(fullData); 
    };
    
    return (
        <div>
            Tabla de Empleados
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>nombre</td>
                        <td>apellido</td>
                        <td>domicilio</td>
                        <td>telefono</td>
                        <td>correo</td>
                        <td>ocupacion</td>
                        <td>edad</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.nombre}</td>
                            <td>{d.apellido}</td>
                            <td>{d.domicilio}</td>
                            <td>{d.telefono}</td>
                            <td>{d.correo}</td>
                            <td>{d.ocupacion}</td>
                            <td>{d.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={todos}>Todos</button>
        </div>
    );
};

