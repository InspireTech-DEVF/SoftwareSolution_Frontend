import { useState, useEffect } from 'react';
import carroData from '../../src/assets/cars_db.cars.json';
import axios from 'axios';
import './Carros.css';

const Carros = () => {
    const [carro, setCarro] = useState(carroData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!carroData || carroData.length === 0) {
            setLoading(true);
            axios.get("http://localhost:8001/api/v1/articulo")
                .then((response) => {
                    setCarro(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            {carro.map((car) => (
                <div key={car._id.$oid} className="carro-item">
                    <h2>{car.brand} {car.model}</h2>
                    <p>Placa: {car.plate}</p>
                    <p>Año: {car.year}</p>
                    <p>Versión: {car.version}</p>
                    <p>Color: {car.color}</p>
                    <p>Tipo: {car.carType}</p>
                    <p>VIN: {car.vin}</p>
                    <p>Nuevo: {car.newCar ? "Sí" : "No"}</p>
                </div>
            ))}
        </div>
    );
}

export default Carros;
