
  const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const menu = document.getElementById('menu');

  // Verificamos los elementos existen antes de agregar los eventos

  if (menuButton && closeButton && menu) {
    // Abrir el menú
    menuButton.addEventListener('click', () => {
      menu.classList.add('open');
    });

    // Cerrar el menú al hacer clic en el botón X
    closeButton.addEventListener('click', () => {
      menu.classList.remove('open');
    });

    // Cerrar el menú al hacer clic fuera del contenido
    menu.addEventListener('click', (event) => {
      if (event.target === menu) {
        menu.classList.remove('open');
      }
    });
  }
