// -------------------------------------------------------
// Datos simulados de catálogo
// -------------------------------------------------------
const CATALOG_DATA = {
  monteviana: {
    name: "La Monteviana",
    tagline: "Línea clásica pensada para kioscos y heladerías",
    logo: "src/images/LaMontevideana.png",
    bannerBg: "src/images/local-monte.jpg",
    products: [
      // PALITOS Y BOMBONES (Cajas)
      { id: "lm_s1", name: "Summun 3 Mix Frutilla, Manzana, Ananá", pack: "Caja x 20u", price: 3200, category: "Helados", unitLabel: "caja", image: "src/images/products/summun3mix.png" },
      { id: "lm_s2", name: "Summun Mix Frutilla - Limón", pack: "Caja x 20u", price: 3200, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_s3", name: "Summun Mix Naranja - Ananá", pack: "Caja x 20u", price: 3200, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_s4", name: "Summun Frutilla", pack: "Caja x 20u", price: 3000, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_s5", name: "Summun Limón", pack: "Caja x 20u", price: 3000, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_d1", name: "Dos", pack: "Caja x 20u", price: 2800, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_u1", name: "Up Mont", pack: "Caja x 20u", price: 3500, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_f1", name: "Frutis Frutilla", pack: "Caja x 20u", price: 2500, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_b1", name: "Bugy Kids", pack: "Caja x 24u", price: 4200, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_c1", name: "Cabito Dulce de Leche - Granizado", pack: "Caja x 20u", price: 3800, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_c2", name: "Cabito Granizado", pack: "Caja x 20u", price: 3800, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_c3", name: "Cabito Chocolate - Dulce de Leche", pack: "Caja x 20u", price: 3800, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_p1", name: "Palito Bombón", pack: "Caja x 20u", price: 4500, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_b2", name: "Bombón Croc", pack: "Caja x 18u", price: 5200, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_t1", name: "Tuo Americana", pack: "Caja x 12u", price: 6800, category: "Helados", unitLabel: "caja", image: "src/images/products/tuoamericana.png" },
      { id: "lm_t2", name: "Tuo Dulce de Leche", pack: "Caja x 12u", price: 6800, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_t3", name: "Tuo Blanco", pack: "Caja x 12u", price: 7200, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_cu1", name: "Cuore Twist Triple Choc", pack: "Caja x 12u", price: 7500, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_cu2", name: "Cuore Twist Caramel", pack: "Caja x 12u", price: 7500, category: "Helados", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      
      // COPAS Y POSTRES INDIVIDUALES
      { id: "lm_ca1", name: "Caribe Dulce de Leche", pack: "Pack x 6u", price: 5800, category: "Postres", unitLabel: "pack", image: "src/images/LaMontevideana.png" },
      { id: "lm_ca2", name: "Caribe Frutilla", pack: "Pack x 6u", price: 5800, category: "Postres", unitLabel: "pack", image: "src/images/LaMontevideana.png" },
      { id: "lm_ca3", name: "Caribe Chocolate", pack: "Pack x 6u", price: 5800, category: "Postres", unitLabel: "pack", image: "src/images/LaMontevideana.png" },
      { id: "lm_cj1", name: "Copa Jamaica Frutilla", pack: "Pack x 4u", price: 6200, category: "Postres", unitLabel: "pack", image: "src/images/LaMontevideana.png" },
      { id: "lm_cj2", name: "Copa Jamaica Dulce de Leche", pack: "Pack x 4u", price: 6200, category: "Postres", unitLabel: "pack", image: "src/images/LaMontevideana.png" },
      { id: "lm_ah1", name: "Alfajor Helado", pack: "Caja x 12u", price: 8400, category: "Alfajores", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      
      // PINTAS Y FIT CREAM (Potes)
      { id: "lm_p_ch", name: "Pinta Choc Alpino", pack: "Pinta 500ml", price: 4200, category: "Helados", unitLabel: "pote", image: "src/images/LaMontevideana.png" },
      { id: "lm_p_ddl", name: "Pinta Dulce de Leche Granizado", pack: "Pinta 500ml", price: 4200, category: "Helados", unitLabel: "pote", image: "src/images/LaMontevideana.png" },
      { id: "lm_p_sf", name: "Pinta Super Flan", pack: "Pinta 500ml", price: 4200, category: "Helados", unitLabel: "pote", image: "src/images/LaMontevideana.png" },
      { id: "lm_p_ff", name: "Pinta Frutilla Francesa", pack: "Pinta 500ml", price: 4200, category: "Helados", unitLabel: "pote", image: "src/images/LaMontevideana.png" },
      { id: "lm_fc1", name: "Fit Cream Banana - Dulce de Leche", pack: "Pinta 500ml", price: 4800, category: "Helados", unitLabel: "pote", image: "src/images/LaMontevideana.png" },
      { id: "lm_fc2", name: "Fit Cream Chocolate Amargo - Mascarpone", pack: "Pinta 500ml", price: 4800, category: "Helados", unitLabel: "pote", image: "src/images/LaMontevideana.png" },
      { id: "lm_fc3", name: "Fit Cream Volcán de Chocolate - Frutilla", pack: "Pinta 500ml", price: 4800, category: "Helados", unitLabel: "pote", image: "src/images/LaMontevideana.png" },
      
      // BALDES Y FAMILIARES (Baldes / Potes)
      { id: "lm_bd1", name: "Bombones Dulce de Leche", pack: "Pote 1L", price: 5500, category: "Helados", unitLabel: "pote", image: "src/images/products/bombomcitos.png" },
      { id: "lm_sddl", name: "Super DDL", pack: "Pote 1L", price: 5500, category: "Helados", unitLabel: "pote", image: "src/images/LaMontevideana.png" },
      { id: "lm_cc1", name: "Cookies & Cream", pack: "Pote 1L", price: 5500, category: "Helados", unitLabel: "pote", image: "src/images/LaMontevideana.png" },
      { id: "lm_l1", name: "Limón 1 Litro", pack: "Balde 1L", price: 4800, category: "Helados", unitLabel: "balde", image: "src/images/LaMontevideana.png" },
      { id: "lm_cddl1", name: "Chocolate - DDL Granizado 1 Litro", pack: "Balde 1L", price: 4800, category: "Helados", unitLabel: "balde", image: "src/images/LaMontevideana.png" },
      { id: "lm_f1l", name: "Frutilla - Granizado 1 Litro", pack: "Balde 1L", price: 4800, category: "Helados", unitLabel: "balde", image: "src/images/LaMontevideana.png" },
      { id: "lm_c3l", name: "Chocolate - DDL Granizado - Frutilla - Americana 3 Litros", pack: "Balde 3L", price: 11500, category: "Helados", unitLabel: "balde", image: "src/images/LaMontevideana.png" },
      { id: "lm_f3l", name: "Flan - DDL - Frutilla - Granizado 3 Litros", pack: "Balde 3L", price: 11500, category: "Helados", unitLabel: "balde", image: "src/images/LaMontevideana.png" },
      { id: "lm_f5l", name: "Flan - DDL - Frutilla - Granizado 5 Litros", pack: "Balde 5L", price: 17200, category: "Helados", unitLabel: "balde", image: "src/images/LaMontevideana.png" },
      { id: "lm_c5l", name: "Chocolate - DDL Granizado - Frutilla - Americana 5 Litros", pack: "Balde 5L", price: 17200, category: "Helados", unitLabel: "balde", image: "src/images/LaMontevideana.png" },
      
      // BARRAS Y TORTAS (Barras / Tortas)
      { id: "lm_bc1", name: "Barra Chocotorta", pack: "Unidad", price: 8500, category: "Postres", unitLabel: "barra", image: "src/images/LaMontevideana.png" },
      { id: "lm_bf1", name: "Barra Frutilla con Merengues", pack: "Unidad", price: 8500, category: "Postres", unitLabel: "barra", image: "src/images/LaMontevideana.png" },
      { id: "lm_bi1", name: "Barra Chocolate Intenso", pack: "Unidad", price: 8500, category: "Postres", unitLabel: "barra", image: "src/images/LaMontevideana.png" },
      { id: "lm_ba1", name: "Barra Almendrado", pack: "Unidad", price: 8900, category: "Postres", unitLabel: "barra", image: "src/images/LaMontevideana.png" },
      { id: "lm_al1", name: "Almendrado", pack: "Unidad Familiar", price: 12500, category: "Postres", unitLabel: "unidad", image: "src/images/LaMontevideana.png" },
      { id: "lm_es1", name: "Escocés", pack: "Unidad Familiar", price: 12500, category: "Postres", unitLabel: "unidad", image: "src/images/LaMontevideana.png" },
      { id: "lm_mx1", name: "Mixto", pack: "Unidad Familiar", price: 9800, category: "Postres", unitLabel: "unidad", image: "src/images/LaMontevideana.png" },
      { id: "lm_sz1", name: "Suizo", pack: "Unidad Familiar", price: 9800, category: "Postres", unitLabel: "unidad", image: "src/images/LaMontevideana.png" },
      { id: "lm_tb1", name: "Torta Bomba Dulce de Leche", pack: "Torta Entera", price: 15800, category: "Tortas", unitLabel: "torta", image: "src/images/LaMontevideana.png" },
      { id: "lm_td1", name: "Torta del Bosque", pack: "Torta Entera", price: 15800, category: "Tortas", unitLabel: "torta", image: "src/images/LaMontevideana.png" },
      
      // MULTIPACKS (Cajas de postres individuales x6)
      { id: "lm_mp1", name: "Multipack Bombón Escocés", pack: "Caja x 6u", price: 9200, category: "Postres", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_mp2", name: "Multipack Postre Mixto", pack: "Caja x 6u", price: 8800, category: "Postres", unitLabel: "caja", image: "src/images/LaMontevideana.png" },
      { id: "lm_mp3", name: "Multipack Postre Suizo", pack: "Caja x 6u", price: 8800, category: "Postres", unitLabel: "caja", image: "src/images/LaMontevideana.png" }
    ]
  },
  otra: {
    name: "Com-Com",
    tagline: "Postres premium y paletas de alto valor",
    logo: "src/images/com-com.svg",
    bannerBg: "src/images/local-comcom.png",
    products: [
      {
        id: "om1",
        name: "Paleta pistacho premium",
        pack: "Caja x 10 unidades",
        price: 6500,
        unitLabel: "caja",
        category: "Helados",
        image: "src/images/com-com.svg"
      },
      {
        id: "om2",
        name: "Sandwich helado doble",
        pack: "Caja x 20 unidades",
        price: 7800,
        unitLabel: "caja",
        category: "Helados",
        image: "src/images/com-com.svg"
      },
      {
        id: "om3",
        name: "Postre helado almendrado",
        pack: "Caja x 6 unidades",
        price: 11200,
        unitLabel: "caja",
        category: "Postres",
        image: "src/images/com-com.svg"
      },
      {
        id: "om4",
        name: "Mini paletas mix sabores",
        pack: "Caja x 30 unidades",
        price: 13200,
        unitLabel: "caja",
        category: "Helados",
        image: "src/images/com-com.svg"
      },
      {
        id: "om5",
        name: "Balde 5L crema oreo",
        pack: "Balde x 5 litros",
        price: 16200,
        unitLabel: "balde",
        category: "Helados",
        image: "src/images/com-com.svg"
      }
    ]
  }
};

// Simulamos siempre el mismo número de orden
const ORDER_NUMBER = "#0001";
// Mínimo de compra simulado
const MIN_ORDER_AMOUNT = 10000;

// Estado simple en memoria (no se persiste)
const state = {
  currentBrandId: null,
  cart: [], // {id, name, pack, price, qty, brandName}
  customer: null // datos del formulario de checkout
};

// Estado del modal de producto
const modalState = {
  product: null,
  brandName: "",
  qty: 1
};

let toastTimeoutId = null;

// -------------------------------------------------------
// Utilidades de formato
// -------------------------------------------------------
function formatCurrency(value) {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0
  });
}

// -------------------------------------------------------
// Manejo de vistas (simulando SPA muy básica)
// -------------------------------------------------------
const views = {
  home: document.getElementById("view-home"),
  catalog: document.getElementById("view-catalog"),
  cart: document.getElementById("view-cart"),
  checkoutData: document.getElementById("view-checkout-data"),
  confirmation: document.getElementById("view-confirmation"),
  paymentSuccess: document.getElementById("view-payment-success")
};

function showView(name) {
  Object.keys(views).forEach((key) => {
    if (key === name) {
      views[key].classList.remove("hidden");
      views[key].classList.add("fade-in");
    } else {
      views[key].classList.add("hidden");
      views[key].classList.remove("fade-in");
    }
  });
  // Asegurar que al cambiar de vista se desplace hacia arriba
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// -------------------------------------------------------
// DOM principal
// -------------------------------------------------------
const catalogBrandTitle = document.getElementById("catalogBrandTitle");
const catalogBrandSubtitle = document.getElementById("catalogBrandSubtitle");
const productsGrid = document.getElementById("productsGrid");
const cartCountBadge = document.getElementById("cartCountBadge");
const cartList = document.getElementById("cartList");
const cartTotalDisplay = document.getElementById("cartTotalDisplay"); // ya no se muestra directo, se usa como helper
const orderSummaryBox = document.getElementById("orderSummaryBox");
const paymentAmountDisplay = document.getElementById("paymentAmountDisplay");
const btnWhatsApp = document.getElementById("btnWhatsApp");
const modalOverlay = document.getElementById("modalOverlay");
const modalProductTitle = document.getElementById("modalProductTitle");
const modalUnitPrice = document.getElementById("modalUnitPrice");
const modalTotalPrice = document.getElementById("modalTotalPrice");
const modalQtyDisplay = document.getElementById("modalQtyDisplay");
const toast = document.getElementById("toast");
const cartTitle = document.getElementById("cartTitle");
const cartSummaryTotal = document.getElementById("cartSummaryTotal");
const cartSummaryMissing = document.getElementById("cartSummaryMissing");
const cartProgressBar = document.getElementById("cartProgressBar");

// -------------------------------------------------------
// Modal de producto
// -------------------------------------------------------
function updateModalTotals() {
  if (!modalState.product) return;
  const unit = modalState.product.price;
  const total = unit * modalState.qty;
  modalUnitPrice.textContent = formatCurrency(unit);
  modalTotalPrice.textContent = formatCurrency(total);
  const label = modalState.product.unitLabel || "u";
  modalQtyDisplay.textContent = `${modalState.qty}${label}`;
}

function openProductModal(product, brandName) {
  modalState.product = product;
  modalState.brandName = brandName;
  modalState.qty = 1;

  modalProductTitle.textContent = `${product.name} – ${product.pack}`;
  const modalImg = document.getElementById("modalProductImage");
  if (modalImg) {
    modalImg.src = product.image || "src/images/LaMontevideana.png";
    modalImg.alt = product.name;
  }
  updateModalTotals();

  modalOverlay.classList.remove("hidden");
}

function closeProductModal() {
  modalOverlay.classList.add("hidden");
  modalState.product = null;
}

// -------------------------------------------------------
// Toast / notificación
// -------------------------------------------------------
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  if (toastTimeoutId) {
    clearTimeout(toastTimeoutId);
  }
  toastTimeoutId = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2200);
}

// -------------------------------------------------------
// Render de catálogo según marca
// -------------------------------------------------------
// -------------------------------------------------------
// Render de catálogo según marca
// -------------------------------------------------------
function openBrandCatalog(brandId, categoryFilter = "Todos") {
  const brand = CATALOG_DATA[brandId];
  if (!brand) return;

  state.currentBrandId = brandId;

  // Actualizar Banner
  const banner = document.getElementById("catalogBanner");
  const bannerLogo = document.getElementById("catalogBannerLogo").querySelector("img");
  const bannerTitle = document.getElementById("catalogBannerTitle");

  if (banner && brand.bannerBg) {
    banner.style.backgroundImage = `url('${brand.bannerBg}')`;
  }
  if (bannerLogo && brand.logo) {
    bannerLogo.src = brand.logo;
    bannerLogo.alt = brand.name;
  }
  if (bannerTitle) {
    bannerTitle.textContent = "PRODUCTOS";
  }

  // Actualizar Header
  catalogBrandTitle.textContent = brand.name;
  catalogBrandSubtitle.textContent =
    brand.tagline || "Seleccione cantidades y agregue al carrito";

  // Actualizar UI de Categorías
  const categoryButtons = document.querySelectorAll(".category-item");
  categoryButtons.forEach(btn => {
    const btnText = btn.querySelector("span").textContent;
    if (btnText === categoryFilter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  productsGrid.innerHTML = "";

  const filteredProducts = categoryFilter === "Todos" 
    ? brand.products 
    : brand.products.filter(p => p.category === categoryFilter);

  filteredProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imagePlaceholder = document.createElement("div");
    imagePlaceholder.className = "product-image-placeholder";
    
    const img = document.createElement("img");
    img.src = product.image || "src/images/LaMontevideana.png";
    img.alt = product.name;
    img.style.width = "90%";
    img.style.height = "90%";
    img.style.objectFit = "contain";
    imagePlaceholder.innerHTML = "";
    imagePlaceholder.appendChild(img);

    const info = document.createElement("div");
    info.className = "product-info";

    const name = document.createElement("h3");
    name.textContent = product.name;

    const pack = document.createElement("div");
    pack.className = "pack";
    pack.textContent = product.pack;

    info.appendChild(name);
    info.appendChild(pack);

    const priceRow = document.createElement("div");
    priceRow.className = "product-price-row";

    const price = document.createElement("div");
    price.className = "product-price";
    price.textContent = formatCurrency(product.price);

    const btnAdd = document.createElement("button");
    btnAdd.type = "button";
    btnAdd.className = "btn-add-product";
    const label = product.unitLabel || "u";
    btnAdd.innerHTML = `<span>+1${label}</span>`;
    btnAdd.title = `Agregar 1 ${label} al carrito`;

    btnAdd.addEventListener("click", (e) => {
      e.stopPropagation();
      openProductModal(product, brand.name);
    });

    priceRow.appendChild(price);
    priceRow.appendChild(btnAdd);

    card.appendChild(imagePlaceholder);
    card.appendChild(info);
    card.appendChild(priceRow);

    card.addEventListener("click", () => {
      openProductModal(product, brand.name);
    });

    productsGrid.appendChild(card);
  });

  showView("catalog");
  // No hacer scroll al filtrar, solo al abrir catálogo por primera vez si es necesario
  if (categoryFilter === "Todos") window.scrollTo(0, 0);
}

// -------------------------------------------------------
// Inicialización de eventos de categorías
// -------------------------------------------------------
function initCategoryEvents() {
  const categoryButtons = document.querySelectorAll(".category-item");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.querySelector("span").textContent;
      if (state.currentBrandId) {
        openBrandCatalog(state.currentBrandId, category);
      }
    });
  });
}

// -------------------------------------------------------
// Manejo de carrito simulado
// -------------------------------------------------------
function addToCart(item) {
  const existing = state.cart.find((p) => p.id === item.id);
  if (existing) {
    existing.qty += item.qty;
  } else {
    state.cart.push({ ...item });
  }
  updateCartBadge();
  renderCart();
}

function clearCart() {
  state.cart = [];
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const totalQty = state.cart.reduce((acc, item) => acc + item.qty, 0);
  cartCountBadge.textContent = totalQty;
}

function calculateCartTotal() {
  return state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
}

function renderCart() {
  cartList.innerHTML = "";

  if (state.cart.length === 0) {
    const empty = document.createElement("div");
    empty.className = "cart-empty";
    empty.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 15px;">🛒</div>
      <div>Su carrito está vacío</div>
      <div style="font-size: 0.9rem; margin-top: 8px; font-weight: 400;">
        Agregue productos desde el catálogo para simular un pedido.
      </div>
    `;
    cartList.appendChild(empty);
    const totalEmpty = 0;
    if (cartSummaryTotal && cartSummaryMissing && cartProgressBar && cartTitle) {
      cartSummaryTotal.textContent = formatCurrency(totalEmpty);
      cartSummaryMissing.textContent = formatCurrency(MIN_ORDER_AMOUNT);
      cartProgressBar.style.width = "0%";
      cartTitle.textContent = "0 productos en tu carrito";
    }
    return;
  }

  state.cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-item";

    // Imagen
    const imgContainer = document.createElement("div");
    imgContainer.className = "cart-item-image";
    const img = document.createElement("img");
    img.src = item.image || "src/images/LaMontevideana.png";
    img.alt = item.name;
    imgContainer.appendChild(img);

    // Info
    const main = document.createElement("div");
    main.className = "cart-item-main";

    const name = document.createElement("div");
    name.className = "cart-item-name";
    name.textContent = item.name;

    const meta = document.createElement("div");
    meta.className = "cart-item-meta";
    meta.textContent = `${item.pack} · ${item.brandName}`;

    const priceLine = document.createElement("div");
    priceLine.className = "cart-item-price-line";
    const subtotal = item.price * item.qty;
    priceLine.textContent = `${formatCurrency(item.price)} x ${
      item.qty
    } = ${formatCurrency(subtotal)}`;

    main.appendChild(name);
    main.appendChild(meta);
    main.appendChild(priceLine);

    // Acciones
    const actions = document.createElement("div");
    actions.className = "cart-item-actions";

    const qtyText = document.createElement("div");
    qtyText.className = "cart-item-qty";
    const unitLabel = item.unitLabel || "u";
    qtyText.textContent = `${item.qty} ${unitLabel}`;

    const btnRemove = document.createElement("button");
    btnRemove.type = "button";
    btnRemove.className = "btn-danger-icon";
    btnRemove.innerHTML = "✕";
    btnRemove.title = "Eliminar producto";
    btnRemove.addEventListener("click", () => {
      state.cart = state.cart.filter((p) => p.id !== item.id);
      updateCartBadge();
      renderCart();
    });

    actions.appendChild(qtyText);
    actions.appendChild(btnRemove);

    row.appendChild(imgContainer);
    row.appendChild(main);
    row.appendChild(actions);

    cartList.appendChild(row);
  });

  const total = calculateCartTotal();
  if (cartSummaryTotal && cartSummaryMissing && cartProgressBar && cartTitle) {
    cartSummaryTotal.textContent = formatCurrency(total);
    const missing = Math.max(0, MIN_ORDER_AMOUNT - total);
    cartSummaryMissing.textContent = missing > 0 ? formatCurrency(missing) : "$0";
    const progress = Math.max(
      0,
      Math.min(100, Math.round((total / MIN_ORDER_AMOUNT) * 100))
    );
    cartProgressBar.style.width = `${progress}%`;
    const count = state.cart.length;
    cartTitle.textContent =
      count === 1
        ? "1 producto en tu carrito"
        : `${count} productos en tu carrito`;
  }
}

// -------------------------------------------------------
// Confirmación de pedido (vista 4)
// -------------------------------------------------------
function showConfirmationView() {
  const total = calculateCartTotal();
  const itemsCount = state.cart.length;

  orderSummaryBox.innerHTML = "";

  // Título sección ítems
  const itemsTitle = document.createElement("div");
  itemsTitle.className = "summary-section-title";
  itemsTitle.textContent = "Resumen de compra";
  orderSummaryBox.appendChild(itemsTitle);

  // Lista de ítems
  const itemsContainer = document.createElement("div");
  itemsContainer.className = "summary-items";

  state.cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "summary-item-row";

    const main = document.createElement("div");
    main.className = "summary-item-main";

    const name = document.createElement("div");
    name.className = "summary-item-name";
    name.textContent = item.name;

    const meta = document.createElement("div");
    meta.className = "summary-item-meta";
    const unitLabel = item.unitLabel || "u";
    meta.textContent = `${item.pack} · ${item.brandName} · ${item.qty} ${unitLabel}`;

    main.appendChild(name);
    main.appendChild(meta);

    const amount = document.createElement("div");
    amount.className = "summary-item-amount";
    amount.textContent = formatCurrency(item.price * item.qty);

    row.appendChild(main);
    row.appendChild(amount);
    itemsContainer.appendChild(row);
  });

  orderSummaryBox.appendChild(itemsContainer);

  // Totales
  const divider = document.createElement("div");
  divider.className = "summary-divider";
  orderSummaryBox.appendChild(divider);

  const rowOrder = document.createElement("div");
  rowOrder.className = "summary-row";
  rowOrder.innerHTML = `<span class="summary-label">Orden</span><span class="summary-value">${ORDER_NUMBER}</span>`;

  const rowItems = document.createElement("div");
  rowItems.className = "summary-row";
  rowItems.innerHTML = `<span class="summary-label">Ítems</span><span class="summary-value">${itemsCount}</span>`;

  const rowTotal = document.createElement("div");
  rowTotal.className = "summary-row";
  rowTotal.innerHTML = `<span class="summary-label">Total estimado</span><span class="summary-value">${formatCurrency(
    total
  )}</span>`;

  orderSummaryBox.appendChild(rowOrder);
  orderSummaryBox.appendChild(rowItems);
  orderSummaryBox.appendChild(rowTotal);

  // Datos del cliente
  const customerTitle = document.createElement("div");
  customerTitle.className = "summary-section-title";
  customerTitle.style.marginTop = "8px";
  customerTitle.textContent = "Datos del cliente";
  orderSummaryBox.appendChild(customerTitle);

  const customerBox = document.createElement("div");
  customerBox.className = "summary-customer";

  const c = state.customer || {};

  const fullName = `${c.firstName || ""} ${c.lastName || ""}`.trim() || "No informado";

  const rows = [
    { label: "Nombre y apellido", value: fullName },
    { label: "Email", value: c.email || "No informado" },
    { label: "DNI", value: c.dni || "No informado" },
    { label: "Dirección", value: c.address || "No informado" }
  ];

  rows.forEach((r) => {
    const line = document.createElement("div");
    line.className = "summary-customer-row";
    const labelSpan = document.createElement("span");
    labelSpan.textContent = `${r.label}:`;
    const valueSpan = document.createElement("span");
    valueSpan.textContent = r.value;
    line.appendChild(labelSpan);
    line.appendChild(valueSpan);
    customerBox.appendChild(line);
  });

  orderSummaryBox.appendChild(customerBox);

  showView("confirmation");
}

// -------------------------------------------------------
// Pago exitoso (vista 5) + WhatsApp
// -------------------------------------------------------
function showPaymentSuccessView() {
  const total = calculateCartTotal();

  paymentAmountDisplay.textContent = formatCurrency(total);

  const message = `Hola, realicé la compra Orden ${ORDER_NUMBER}. Pago confirmado. Total: ${formatCurrency(
    total
  )}`;
  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/+5493416160956?text=${encoded}`;

  btnWhatsApp.href = waUrl;

  showView("paymentSuccess");
}

// -------------------------------------------------------
// Eventos de navegación
// -------------------------------------------------------
function initNavigation() {
  document
    .getElementById("btnGoHome")
    .addEventListener("click", () => showView("home"));

  document.getElementById("btnOpenCart").addEventListener("click", () => {
    renderCart();
    showView("cart");
  });

  document.querySelectorAll(".brand-card").forEach((card) => {
    card.addEventListener("click", () => {
      const brandId = card.getAttribute("data-brand-id");
      openBrandCatalog(brandId);
    });
  });

  document
    .getElementById("btnBackToHome")
    .addEventListener("click", () => showView("home"));

  document
    .getElementById("btnCartBackToCatalog")
    .addEventListener("click", () => {
      if (state.currentBrandId) {
        openBrandCatalog(state.currentBrandId);
      } else {
        showView("home");
      }
    });

  document
    .getElementById("btnConfirmOrder")
    .addEventListener("click", () => {
      if (state.cart.length === 0) {
        alert("El carrito está vacío. Agregue productos para simular un pedido.");
        return;
      }
      const total = calculateCartTotal();
      if (total < MIN_ORDER_AMOUNT) {
        alert(
          `El mínimo de compra simulado es de ${formatCurrency(
            MIN_ORDER_AMOUNT
          )}. Aún faltan ${formatCurrency(MIN_ORDER_AMOUNT - total)}.`
        );
        return;
      }
      showView("checkoutData");
    });

  document.getElementById("btnGoToPayment").addEventListener("click", () => {
    showPaymentSuccessView();
  });

  document
    .getElementById("btnConfirmationBackHome")
    .addEventListener("click", () => showView("home"));

  document
    .getElementById("btnPaymentBackHome")
    .addEventListener("click", () => showView("home"));

  // Modal eventos
  document
    .getElementById("btnModalClose")
    .addEventListener("click", () => closeProductModal());

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      closeProductModal();
    }
  });

  document.getElementById("btnModalMinus").addEventListener("click", () => {
    if (modalState.qty > 1) {
      modalState.qty -= 1;
      updateModalTotals();
    }
  });

  document.getElementById("btnModalPlus").addEventListener("click", () => {
    if (modalState.qty < 20) {
      modalState.qty += 1;
      updateModalTotals();
    }
  });

  document.getElementById("btnModalAdd").addEventListener("click", () => {
    if (!modalState.product) return;
    addToCart({
      id: modalState.product.id,
      name: modalState.product.name,
      pack: modalState.product.pack,
      price: modalState.product.price,
      qty: modalState.qty,
      brandName: modalState.brandName,
      unitLabel: modalState.product.unitLabel || "u",
      image: modalState.product.image
    });
    closeProductModal();
    showToast("Producto agregado al carrito");
  });

  // Checkout datos
  const btnCheckoutBackToCart = document.getElementById(
    "btnCheckoutBackToCart"
  );
  const checkoutForm = document.getElementById("checkoutForm");

  if (btnCheckoutBackToCart) {
    btnCheckoutBackToCart.addEventListener("click", () => showView("cart"));
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(checkoutForm);
      const dniValue = (formData.get("dni") || "").replace(/\D/g, ""); // Eliminar no numéricos

      if (dniValue.length !== 8) {
        alert("El DNI debe tener exactamente 8 números.");
        return;
      }

      state.customer = {
        firstName: formData.get("firstName") || "",
        lastName: formData.get("lastName") || "",
        email: formData.get("email") || "",
        dni: dniValue,
        address: formData.get("address") || ""
      };
      showConfirmationView();
    });
  }
}

// -------------------------------------------------------
// Inicialización
// -------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCategoryEvents();
  updateCartBadge();
  renderCart();
  showView("home");
});

