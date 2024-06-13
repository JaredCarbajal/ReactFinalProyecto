import React, { useEffect, useState } from 'react';

export const TablaClientes = () => {
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const getData=()=>{
        fetch('http://localhost/proyecto2/php/leerclientes.php')
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
            TablaClientes
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>nombre</td>
                        <td>apellido</td>
                        <td>domicilio</td>
                        <td>rfc</td>
                        <td>edad</td>
                        <td>correo</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => {
                        return (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.nombre}</td>
                                <td>{d.apellido}</td>
                                <td>{d.domicilio}</td>
                                <td>{d.rfc}</td>
                                <td>{d.edad}</td>
                                <td>{d.correo}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={todos}>Todos</button>
        </div>
    );
};
