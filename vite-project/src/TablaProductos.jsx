import React, { useState, useEffect } from 'react';

export const TablaProductos = () => {
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const getData=()=>{
        fetch('http://localhost/proyecto2/php/leerproductos.php')
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
            TablaProductos
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>nombre</td>
                        <td>tipo</td>
                        <td>stock</td>
                        <td>stockmax</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => {
                        return (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.nombre}</td>
                                <td>{d.tipo}</td>
                                <td>{d.stock}</td>
                                <td>{d.stockmax}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={todos}>Todos</button>
        </div>
    );
};
