const productos = [
  {
    id: 1,
    nombre: "Camiseta Urban Black",
    categoria: "camiseta",
    precio: 24.99,
    imagen: "https://images.pexels.com/photos/13995911/pexels-photo-13995911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 2,
    nombre: "Camiseta White Essential",
    categoria: "camiseta",
    precio: 19.99,
    imagen: "https://images.pexels.com/photos/7045179/pexels-photo-7045179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    nombre: "Camiseta Street Drop",
    categoria: "camiseta",
    precio: 22.99,
    imagen: "https://images.pexels.com/photos/7045185/pexels-photo-7045185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 4,
    nombre: "Pantalón Cargo Verde",
    categoria: "pantalon",
    precio: 44.99,
    imagen: "https://images.pexels.com/photos/28666269/pexels-photo-28666269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 5,
    nombre: "Pantalón Street Slim",
    categoria: "pantalon",
    precio: 39.99,
    imagen: "https://images.pexels.com/photos/28666275/pexels-photo-28666275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 6,
    nombre: "Pantalón Urban Fit",
    categoria: "pantalon",
    precio: 49.99,
    imagen: "https://images.pexels.com/photos/28902694/pexels-photo-28902694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 7,
    nombre: "Sudadera Basic Grey",
    categoria: "sudadera",
    precio: 39.99,
    imagen: "https://images.pexels.com/photos/35240862/pexels-photo-35240862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 8,
    nombre: "Sudadera Urban Black",
    categoria: "sudadera",
    precio: 44.99,
    imagen: "https://images.pexels.com/photos/35240866/pexels-photo-35240866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 9,
    nombre: "Sudadera Sky Blue",
    categoria: "sudadera",
    precio: 42.99,
    imagen: "https://images.pexels.com/photos/35240860/pexels-photo-35240860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 10,
    nombre: "Zapatillas Street Runner",
    categoria: "zapatillas",
    precio: 59.99,
    imagen: "https://images.pexels.com/photos/30755567/pexels-photo-30755567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 11,
    nombre: "Zapatillas Skate Low",
    categoria: "zapatillas",
    precio: 54.99,
    imagen: "https://images.pexels.com/photos/34229916/pexels-photo-34229916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 12,
    nombre: "Zapatillas Urban Walk",
    categoria: "zapatillas",
    precio: 64.99,
    imagen: "https://images.pexels.com/photos/10399158/pexels-photo-10399158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];



const ofertas = [
  {
    id: 101,
    nombre: "Sudadera Hoodie Pro",
    precioAntes: 49.99,
    precioAhora: 34.99,
    descuento: "-30%",
    categoria: "sudadera",
    imagen: "https://images.pexels.com/photos/35240866/pexels-photo-35240866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 102,
    nombre: "Pantalón Cargo Black",
    precioAntes: 59.99,
    precioAhora: 39.99,
    descuento: "-33%",
    categoria: "pantalon",
    imagen: "https://images.pexels.com/photos/28666271/pexels-photo-28666271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 103,
    nombre: "Zapatillas Classic White",
    precioAntes: 74.99,
    precioAhora: 49.99,
    descuento: "-33%",
    categoria: "zapatillas",
    imagen: "https://images.pexels.com/photos/30755567/pexels-photo-30755567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 104,
    nombre: "Camiseta Logo Pack",
    precioAntes: 29.99,
    precioAhora: 19.99,
    descuento: "-33%",
    categoria: "camiseta",
    imagen: "https://images.pexels.com/photos/7045174/pexels-photo-7045174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];




// Carrito: lista de productos añadidos
let carrito = [];

// Categoría activa: empieza en "todo"
let categoriaActiva = "todo";

// Texto de búsqueda actual
let textoBusqueda = "";




const productosGrid    = document.getElementById("productos-grid");
const ofertasGrid      = document.getElementById("ofertas-grid");
const sinResultados    = document.getElementById("sin-resultados");
const buscador         = document.getElementById("buscador");
const cartBtn          = document.getElementById("cart-btn");
const cartCount        = document.getElementById("cart-count");
const carritoModal     = document.getElementById("carrito-modal");
const carritoOverlay   = document.getElementById("carrito-overlay");
const carritoBtn       = document.getElementById("cart-btn");
const carritoTotal     = document.getElementById("carrito-total");
const carritoCuerpo    = document.getElementById("carrito-cuerpo");
const carritoCerrar    = document.getElementById("carrito-cerrar");
const hamburger        = document.getElementById("hamburger");
const navMenu          = document.getElementById("nav-menu");
const contactoForm     = document.getElementById("contacto-form");
const formConfirmacion = document.getElementById("form-confirmacion");
const categoriaBtns    = document.querySelectorAll(".categoria-btn");




function mostrarProductos() {
  // Vaciar la cuadrícula antes de volver a dibujar
  productosGrid.innerHTML = "";

  // Filtrar por categoría y por texto de búsqueda
  const productosFiltrados = productos.filter(function(producto) {
    // Comprobar si coincide con la categoría activa
    const coincideCategoria =
      categoriaActiva === "todo" || producto.categoria === categoriaActiva;

    // Comprobar si el nombre contiene el texto buscado (sin distinguir mayúsculas)
    const coincideBusqueda =
      producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  // Si no hay productos que mostrar
  if (productosFiltrados.length === 0) {
    sinResultados.style.display = "block";
  } else {
    sinResultados.style.display = "none";
  }

  // Crear una tarjeta por cada producto filtrado
  productosFiltrados.forEach(function(producto) {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    card.innerHTML = `
      <div class="producto-img-wrapper">
        <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" />
      </div>
      <div class="producto-info">
        <span class="producto-categoria">${producto.categoria}</span>
        <h3 class="producto-nombre">${producto.nombre}</h3>
        <p class="producto-precio">${formatearPrecio(producto.precio)}</p>
      </div>
      <button class="producto-btn" data-id="${producto.id}">
        🛒 Añadir al carrito
      </button>
    `;

    // Añadir evento al botón de esta tarjeta
    card.querySelector(".producto-btn").addEventListener("click", function() {
      añadirAlCarrito(producto);
    });

    productosGrid.appendChild(card);
  });
}



function mostrarOfertas() {
  ofertasGrid.innerHTML = "";

  ofertas.forEach(function(oferta) {
    const card = document.createElement("div");
    card.classList.add("oferta-card");

    card.innerHTML = `
      <span class="oferta-badge">${oferta.descuento}</span>
      <div class="oferta-img-wrapper">
        <img src="${oferta.imagen}" alt="${oferta.nombre}" loading="lazy" />
      </div>
      <div class="oferta-info">
        <h3 class="oferta-nombre">${oferta.nombre}</h3>
        <div class="oferta-precios">
          <span class="precio-antes">${formatearPrecio(oferta.precioAntes)}</span>
          <span class="precio-ahora">${formatearPrecio(oferta.precioAhora)}</span>
        </div>
      </div>
      <button class="oferta-btn" data-id="${oferta.id}">
        🛒 Añadir al carrito
      </button>
    `;

    // Crear objeto de producto a partir de la oferta para añadir al carrito
    card.querySelector(".oferta-btn").addEventListener("click", function() {
      const productoOferta = {
        id: oferta.id,
        nombre: oferta.nombre,
        precio: oferta.precioAhora,
        imagen: oferta.imagen
      };
      añadirAlCarrito(productoOferta);
    });

    ofertasGrid.appendChild(card);
  });
}




function formatearPrecio(precio) {
  // toFixed(2) convierte el número a texto con 2 decimales
  return precio.toFixed(2).replace(".", ",") + " €";
}




function añadirAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
  animarBotonCarrito();
}




function eliminarDelCarrito(indice) {
  // splice(indice, 1) elimina 1 elemento en esa posición
  carrito.splice(indice, 1);
  actualizarCarrito();
  renderizarCarrito();
}



function actualizarCarrito() {
  // Mostrar cuántos productos hay en el carrito
  cartCount.textContent = carrito.length;
}




function renderizarCarrito() {
  carritoCuerpo.innerHTML = "";

  // Si el carrito está vacío, mostrar mensaje
  if (carrito.length === 0) {
    carritoCuerpo.innerHTML = `
      <div class="carrito-vacio">
        <span>🛒</span>
        <p>Tu carrito está vacío.</p>
        <p>¡Añade algo de la colección!</p>
      </div>
    `;
    carritoTotal.textContent = "0,00 €";
    return;
  }


  let total = 0;

  carrito.forEach(function(producto, indice) {
    total += producto.precio;

    const item = document.createElement("div");
    item.classList.add("carrito-item");

    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <div class="carrito-item-info">
        <p class="carrito-item-nombre">${producto.nombre}</p>
        <p class="carrito-item-precio">${formatearPrecio(producto.precio)}</p>
      </div>
      <button class="carrito-item-eliminar" data-indice="${indice}" aria-label="Eliminar">🗑️</button>
    `;

    // Evento para eliminar este producto
    item.querySelector(".carrito-item-eliminar").addEventListener("click", function() {
      const i = parseInt(this.getAttribute("data-indice"));
      eliminarDelCarrito(i);
    });

    carritoCuerpo.appendChild(item);
  });

  // Mostrar el total formateado
  carritoTotal.textContent = formatearPrecio(total);
}



function animarBotonCarrito() {
  cartBtn.classList.add("bounce");
  // Quitar la clase después de la animación
  setTimeout(function() {
    cartBtn.classList.remove("bounce");
  }, 400);
}



function abrirCarrito() {
  renderizarCarrito();
  carritoModal.classList.add("visible");
  carritoOverlay.classList.add("visible");
  document.body.style.overflow = "hidden"; // Bloquear el scroll de la página
}


function cerrarCarrito() {
  carritoModal.classList.remove("visible");
  carritoOverlay.classList.remove("visible");
  document.body.style.overflow = ""; // Restaurar el scroll
}



function filtrarCategoria(categoria) {
  categoriaActiva = categoria;

  // Quitar clase "activo" de todos los botones
  categoriaBtns.forEach(function(btn) {
    btn.classList.remove("activo");
  });

  // Poner clase "activo" solo en el botón pulsado
  const btnActivo = document.querySelector(`[data-categoria="${categoria}"]`);
  if (btnActivo) {
    btnActivo.classList.add("activo");
  }

  mostrarProductos();
}



function enviarFormulario(evento) {
  // Evitar que la página se recargue
  evento.preventDefault();

  const nombre  = document.getElementById("nombre").value.trim();
  const email   = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Comprobar que los campos no estén vacíos
  if (nombre === "" || email === "" || mensaje === "") {
    formConfirmacion.style.color = "#e63946";
    formConfirmacion.textContent = "⚠️ Por favor, rellena todos los campos.";
    return;
  }

  // Mostrar mensaje de éxito
  formConfirmacion.style.color = "#2a9d5c";
  formConfirmacion.textContent = `✅ ¡Gracias, ${nombre}! Tu mensaje ha sido enviado.`;

  // Limpiar el formulario
  contactoForm.reset();

  // Ocultar el mensaje después de 4 segundos
  setTimeout(function() {
    formConfirmacion.textContent = "";
  }, 4000);
}




function toggleMenu() {
  hamburger.classList.toggle("activo");
  navMenu.classList.toggle("abierto");
}



function cerrarMenuMovil() {
  hamburger.classList.remove("activo");
  navMenu.classList.remove("abierto");
}



// Botón del carrito → abrir carrito
cartBtn.addEventListener("click", abrirCarrito);

// Botón cerrar carrito
carritoCerrar.addEventListener("click", cerrarCarrito);

// Fondo oscuro → cerrar carrito
carritoOverlay.addEventListener("click", cerrarCarrito);

// Botón "Finalizar compra"
document.getElementById("btn-comprar").addEventListener("click", function() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. ¡Añade algún producto primero!");
    return;
  }
  carrito = [];
  actualizarCarrito();
  renderizarCarrito();
  cerrarCarrito();
  alert("✅ ¡Gracias por tu compra! Te enviaremos un email de confirmación.");
});

// Buscador → filtrar al escribir
buscador.addEventListener("input", function() {
  textoBusqueda = this.value;
  mostrarProductos();
});

// Botones de categoría → filtrar
categoriaBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const categoria = this.getAttribute("data-categoria");
    filtrarCategoria(categoria);
  });
});

// Formulario de contacto → enviar
contactoForm.addEventListener("submit", enviarFormulario);

// Hamburguesa → abrir/cerrar menú móvil
hamburger.addEventListener("click", toggleMenu);

// Cerrar menú al pulsar un enlace de navegación
document.querySelectorAll(".nav-link").forEach(function(enlace) {
  enlace.addEventListener("click", cerrarMenuMovil);
});

// Tecla Escape → cerrar carrito
document.addEventListener("keydown", function(evento) {
  if (evento.key === "Escape") {
    cerrarCarrito();
  }
});


mostrarProductos();
mostrarOfertas();
