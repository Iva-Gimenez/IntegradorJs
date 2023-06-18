function borrarCampos() {
      document.getElementById('inputNombre').value = '';
      document.getElementById('inputApellido').value = '';
      document.getElementById('inputEmail').value = '';
      document.getElementById('inputCantidad').value = '';
      document.getElementById('inputCategoria').value = 'Estudiante';
    }

    function calcularResumen() {
      const cantidad = document.getElementById('inputCantidad').value;
      const categoria = document.getElementById('inputCategoria').value;
      const precio = 200; // Precio por ticket

      let descuento = 0;

      switch (categoria) {
        case 'Estudiante':
          descuento = 80;
          break;
        case 'Trainee':
          descuento = 50;
          break;
        case 'Junior':
          descuento = 15;
          break;
        default:
          descuento = 0;
          break;
      }

      const subtotal = cantidad * precio;
      const descuentoAplicado = (subtotal * descuento) / 100;
      const total = subtotal - descuentoAplicado;

      document.getElementById('importeTotal').innerHTML = `Total a Pagar: $${total}`;
    }

    document.addEventListener('DOMContentLoaded', function () {
      const btnBorrar = document.getElementById('btnBorrar');
      const btnResumen = document.getElementById('btnResumen');

      btnBorrar.addEventListener('click', borrarCampos);
      btnResumen.addEventListener('click', calcularResumen);
    });