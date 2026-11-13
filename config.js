// ============================================================
// Verde Tabaco · DEMO · config.js
// Edita aquí textos, colores, productos e idiomas. No toques el HTML.
// ============================================================
const IMG = "assets/"; // carpeta de imágenes (ver lista de nombres en el README)
// producto: foto principal = producto_<archivo>.jpg  |  foto al pasar el cursor = producto_<archivo>_hover.jpg
// kind: choclo | media | outdoor | cowboy   ·   color: color del calzado en la ilustración
const p = (id, name, price, file, kind, color, tag) => ({ id, name, price, kind, color, img: IMG + "producto_" + file + ".jpg", img2: IMG + "producto_" + file + "_hover.jpg", tag });

const CONFIG = {
  defaultLang: "es", // "es" | "en"
  brand: { name: "verdetabaco", since: 1987, phone: "(476) 757 55 55", logo: "assets/logo.png" }, // si no existe logo.png se usa el texto
  freeShipping: 1000, // MXN

  theme: {
    green: "#49704d",      // color de marca (el de su sitio actual)
    greenDark: "#27402b",
    tobacco: "#9a6b43",    // acento cálido
    cream: "#f5f0e6",
    ink: "#1c211c",
    radius: "6px",
    fontHead: "'Fraunces', Georgia, serif",
    fontBody: "'Inter', system-ui, sans-serif",
  },
  features: { useImages: false, /* false = ilustraciones vectoriales · true = fotos de assets/ */ animations: true, heroAutoplay: true, heroInterval: 6000 },

  // ---------- TEXTOS (ES / EN) ----------
  t: {
    es: {
      announce: "Envío gratis en pedidos mayores a $1,000 MXN",
      search: "Buscar calzado…", account: "Mi cuenta", wishlist: "Favoritos", cart: "Carrito",
      shopNow: "Comprar ahora", discover: "Descubrir", viewAll: "Ver todo", add: "Agregar", added: "Agregado al carrito",
      catTitle: "Explora por colección", catSub: "Encuentra tu paso",
      storyEyebrow: "Desde 1987", storyTitle: "Calzado hecho para caminar a tu ritmo.",
      storyText: "Más de tres décadas diseñando zapatos cómodos, resistentes y con carácter. Cada par está pensado para acompañarte del trabajo al fin de semana.",
      storyCta: "Conoce la marca",
      cartEmpty: "Tu carrito está vacío", subtotal: "Subtotal", checkout: "Finalizar compra",
      shipLeft: (n) => `Te faltan $${n} para envío gratis`, shipOk: "¡Tienes envío gratis!",
      newsTitle: "Camina, vive verde.", newsText: "Suscríbete y recibe lanzamientos y promociones.", newsPh: "Tu correo", newsBtn: "Suscribirme",
      footHelp: "Ayuda", footBrand: "Marca", callUs: "¿Tienes preguntas? Llámanos",
      demo: "Demo · esta sección aún está en construcción",
      rights: "Demo de rediseño · no es el sitio oficial",
    },
    en: {
      announce: "Free shipping on orders over $1,000 MXN",
      search: "Search footwear…", account: "My account", wishlist: "Wishlist", cart: "Cart",
      shopNow: "Shop now", discover: "Discover", viewAll: "View all", add: "Add", added: "Added to cart",
      catTitle: "Shop by collection", catSub: "Find your step",
      storyEyebrow: "Since 1987", storyTitle: "Footwear made to walk at your own pace.",
      storyText: "Over three decades designing comfortable, durable shoes with character. Every pair is made to go with you from work to the weekend.",
      storyCta: "Meet the brand",
      cartEmpty: "Your cart is empty", subtotal: "Subtotal", checkout: "Checkout",
      shipLeft: (n) => `$${n} away from free shipping`, shipOk: "You've got free shipping!",
      newsTitle: "Walk. Live green.", newsText: "Subscribe for new drops and offers.", newsPh: "Your email", newsBtn: "Subscribe",
      footHelp: "Help", footBrand: "Brand", callUs: "Questions? Call us",
      demo: "Demo · this section is still under construction",
      rights: "Redesign demo · not the official site",
    },
  },

  // ---------- MENÚ ----------
  nav: [
    { label: { es: "Caballero", en: "Men" }, links: [
      { es: "Outdoor", en: "Outdoor" }, { es: "Casual", en: "Casual" }, { es: "Confort", en: "Comfort" },
      { es: "Choclo", en: "Dress shoes" }, { es: "Media bota", en: "Ankle boots" }, { es: "Sandalia", en: "Sandals" } ] },
    { label: { es: "Dama", en: "Women" }, links: [
      { es: "Outdoor", en: "Outdoor" }, { es: "Casual", en: "Casual" }, { es: "Confort", en: "Comfort" },
      { es: "Choclo", en: "Flats" }, { es: "Media bota", en: "Ankle boots" }, { es: "Sandalia", en: "Sandals" } ] },
    { label: { es: "Escolar", en: "School" }, links: [
      { es: "Escolar", en: "School" }, { es: "Casual", en: "Casual" }, { es: "Media bota", en: "Ankle boots" } ] },
    { label: { es: "Marca", en: "Brand" }, links: [
      { es: "Empresa", en: "Company" }, { es: "Filosofía", en: "Philosophy" }, { es: "Catálogos", en: "Catalogs" } ] },
  ],

  // ---------- HERO (slider) ----------
  hero: [
    { bg: "#2f4a33", img: IMG + "hero_1.png", kind: "outdoor", color: "#6b4426",
      eyebrow: { es: "Outdoor", en: "Outdoor" },
      title: { es: "Pisa fuerte. Vive verde.", en: "Step bold. Live green." },
      text: { es: "Las botas Verta, las más vendidas de la temporada.", en: "The Verta boots, this season's best sellers." } },
    { bg: "#6d4a2f", img: IMG + "hero_2.png", kind: "cowboy", color: "#9a6236",
      eyebrow: { es: "Colección Dallas", en: "Dallas collection" },
      title: { es: "Carácter de rancho, confort de todos los días.", en: "Ranch attitude, everyday comfort." },
      text: { es: "Botas cowboy con acabado premium.", en: "Cowboy boots with a premium finish." } },
    { bg: "#4b5d4a", img: IMG + "hero_3.png", kind: "media", color: "#8a5a40",
      eyebrow: { es: "Dama", en: "Women" },
      title: { es: "Confort para dama, desde el primer paso.", en: "Women's comfort, from the very first step." },
      text: { es: "Media botas y choclos Miss y Vittorine.", en: "Miss and Vittorine ankle boots and flats." } },
  ],

  // ---------- COLECCIONES (tarjetas) ----------
  categories: [
    { name: { es: "Caballero", en: "Men" }, img: IMG + "categoria_caballero.jpg", kind: "choclo", shoe: "#d9a066", color: "#3b3a32" },
    { name: { es: "Dama", en: "Women" }, img: IMG + "categoria_dama.jpg", kind: "media", shoe: "#e3c7a0", color: "#5a4a3c" },
    { name: { es: "Escolar", en: "School" }, img: IMG + "categoria_escolar.jpg", kind: "choclo", shoe: "#1f1f1f", color: "#49704d" },
  ],

  // ---------- PRODUCTOS POR SECCIÓN ----------
  sections: [
    { title: { es: "Modelos premium que te hacen lucir", en: "Premium styles that make you shine" }, items: [
      p("1409m", "1409 Choclo de Vestir Figo Miel", 1099, "1409-miel", "choclo", "#c98b4b", "Nuevo"),
      p("6553n", "6553 Bota Cowboy Dallas Negro", 1299, "6553-negro", "cowboy", "#262626"),
      p("6552b", "6552 Bota Cowboy Dallas Branding", 1499, "6552-branding", "cowboy", "#7a4e2c"),
      p("1642n", "1642 Choclo Samir Negro", 1099, "1642-negro", "choclo", "#262626"),
    ] },
    { title: { es: "Las botas outdoor más vendidas", en: "Best-selling outdoor boots" }, items: [
      p("3410c", "3410 Media Bota Verta Chocolate", 1299, "3410-chocolate", "outdoor", "#5b3a24", "Top"),
      p("3409p", "3409 Media Bota Verta Papaya", 1299, "3409-papaya", "outdoor", "#dc8a2f"),
      p("3409n", "3409 Media Bota Verta Negro", 1299, "3409-negro", "outdoor", "#2b2b2b"),
      p("1648m", "1648 Media Bota Samir Miel", 1199, "1648-miel", "media", "#c98b4b"),
    ] },
    { title: { es: "Calzado de confort para dama", en: "Comfort footwear for women" }, items: [
      p("8010n", "8010 Media Bota Vittorine Negro", 999, "8010-negro", "media", "#262626"),
      p("8027n", "8027 Media Bota Miss Negro", 999, "8027-negro", "media", "#3a2a24"),
      p("8058c", "8058 Media Bota Miss Café", 999, "8058-cafe", "media", "#7a4a35", "Nuevo"),
    ] },
  ],

  // ---------- BENEFICIOS ----------
  benefits: [
    { icon: "🚚", es: ["Envío a tu puerta", "Gratis desde $1,000 MXN"], en: ["Home delivery", "Free over $1,000 MXN"] },
    { icon: "🥾", es: ["Hecho para durar", "Calidad desde 1987"], en: ["Built to last", "Quality since 1987"] },
    { icon: "↺", es: ["Cambios fáciles", "Te acompañamos en tu compra"], en: ["Easy exchanges", "We support your purchase"] },
    { icon: "🔒", es: ["Pago seguro", "Visa, Mastercard y Amex"], en: ["Secure payment", "Visa, Mastercard & Amex"] },
  ],
};
