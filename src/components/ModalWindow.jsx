import React from "react";
import Entrada from "./Entrada"

function ModalWindow({target}) {
  return (
    <div
      class="modal fade"
      id={target}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark">
          {/**Modal Header**/}
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Agregar nuevo empleado
            </h1>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/** Modal Body **/}
          <div class="modal-body">
            <Entrada />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
