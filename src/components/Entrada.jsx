import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import axios from "axios";
import React, { useState } from "react";

function Entrada() {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado",
        formData
      );
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: `Registro guardado exitosamente`,
      });
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: `Error al guardar el empleado`,
      });
    }
  };

  return (
    <form className="row gap-1 p-2" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre Completo</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="form-control"
          placeholder="Nombre Completo"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">DNI</label>
        <input
          type="number"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          className="form-control"
          placeholder="DNI"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Dirección</label>
        <textarea
          class="form-control"
          value={formData.direccion}
          onChange={handleChange}
          rows="3"
          name="direccion"
          placeholder="Dirección"
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="mb-3 d-flex justify-content-end gap-2">
        <button type="submit" className="btn btn-primary">
          <FontAwesomeIcon icon={faFilePen} />
          Guardar
        </button>
      </div>
    </form>
  );
}

export default Entrada;
