import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ListEmpleados() {
  const [empleados, setEmpleados] = useState([]);

  const getEmpleados = async () => {
    try {
      const response = await axios.get(
        "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado"
      );
      setEmpleados(response.data);
    } catch (error) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: `no se pudieron obtener los datos`
          });
    }
  };

  useEffect(() => {
    getEmpleados();
  }, []);

  return (
    <div className="row p-2">
      <table className="table table-dark table-striped table-bordered text-center table-responsive">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Dirección</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((emp, index) => (
            <tr key={index}>
              <td>{emp.nombre}</td>
              <td>{emp.dni}</td>
              <td>{emp.direccion}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmpleados;
