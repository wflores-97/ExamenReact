import React from "react";
import ModalWindow from "./ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ListEmpleados from "./ListEmpleados";

function Contenedor() {
  const target = 'exampleModal'
  return (
    <>
      <div className="container gap-2">
        <div className="row border rounded w-75 p-2">
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${target}`}>
            <FontAwesomeIcon icon={faUserPlus} />
            Añadir Empleado
          </button>
          <ModalWindow target={target} />
        </div>
        
        <div className="row border rounded w-75 d-flex justify-content-center">
          <ListEmpleados />
        </div>
      </div>
    </>
  );
}

export default Contenedor;
