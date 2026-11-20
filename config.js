// ============================================================
// Verde Tabaco · DEMO · config.js
// Edita aquí textos, colores, productos e idiomas. No toques el HTML.
// ============================================================
const IMG = "assets/"; // carpeta de imágenes (ver lista de nombres en el README)
// producto: foto principal = producto_<archivo>.jpg  |  foto al pasar el cursor = producto_<archivo>_hover.jpg
// kind: choclo | media | outdoor | cowboy   ·   color: color del calzado en la ilustración
// seals: ["piel"], ["inyeccion"] o ["piel", "inyeccion"]  (¡ajustar con datos reales!)
const p = (id, name, price, file, kind, color, tag, seals) => ({ id, name, price, kind, color, seals: seals || [], img: IMG + "producto_" + file + ".jpg", img2: IMG + "producto_" + file + "_hover.jpg", tag });

const CONFIG = {
  defaultLang: "es", // "es" | "en"
  brand: { name: "verdetabaco", since: 1987, phone: "(476) 757 55 55", logo: "assets/logo.png", logoWhite: "assets/logo-blanco.png" }, // si no existen, se usa el nombre en texto
  freeShipping: 1000, // MXN
  sizes: { men: [25, 26, 27, 28, 29, 30], women: [22, 23, 24, 25, 26, 27] }, // tallas MX

  theme: {
    green: "#55823c",      // verde exacto del logo (RGB 85,130,60)
    greenDark: "#2f4821",
    accent: "#2f4821",     // etiquetas, insignias y detalles
    cream: "#f1f5ec",
    ink: "#1d221b",
    radius: "6px",
    fontHead: "'Fraunces', Georgia, serif",
    fontBody: "'Inter', system-ui, sans-serif",
  },
  features: { useImages: false, /* false = ilustraciones vectoriales · true = fotos de assets/ */ animations: true, heroAutoplay: true, heroInterval: 6000 },

  // ---------- TEXTOS (ES / EN) ----------
  t: {
    es: {
      announce: "Disfruta de envío gratis cuando tu pedido supere los $1,000 MXN",
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
      favEmpty: "Aún no tienes favoritos", sealsSub: "Calidad que se nota", sealsTitle: "Conoce nuestros sellos", learnMore: "Saber más", backShop: "Volver a la tienda", sealEyebrow: "Sello verdetabaco", sealWhy: "Lo que debes saber", sealNoteT: "¿Piel o inyección? No son excluyentes", sealNote: "La piel describe el material del corte; la inyección al corte describe cómo se une la suela. Un mismo par puede llevar ambos sellos.", sealModels: "Modelos con este sello", sealBack: "Seguir comprando", sealSeeAlso: "Ver también", size: "Talla", pickSize: "Elige tu talla", desc: "Materiales seleccionados y suela ligera y cómoda para uso diario.", noResults: "Sin resultados",
      rights: "Demo de rediseño · no es el sitio oficial",
    },
    en: {
      announce: "Enjoy free shipping when your order exceeds $1,000 MXN",
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
      favEmpty: "No favorites yet", sealsSub: "Quality you can feel", sealsTitle: "Meet our seals", learnMore: "Learn more", backShop: "Back to the shop", sealEyebrow: "verdetabaco seal", sealWhy: "What you should know", sealNoteT: "Leather or injection? They're not exclusive", sealNote: "Leather describes the upper's material; direct injection describes how the sole is attached. The same pair can carry both seals.", sealModels: "Styles with this seal", sealBack: "Keep shopping", sealSeeAlso: "See also", size: "Size", pickSize: "Choose your size", desc: "Selected materials and a light, comfortable sole for everyday wear.", noResults: "No results",
      rights: "Redesign demo · not the official site",
    },
  },

  // ---------- MENÚ ----------
  nav: [
    { label: { es: "Caballero", en: "Men" }, links: [
      { es: "Outdoor", en: "Outdoor" }, { es: "Casual", en: "Casual" }, { es: "Confort", en: "Comfort" },
      { es: "Inyección al corte", en: "Direct injection", go: "sello-inyeccion" },
      { es: "Sandalia", en: "Sandals" }, { es: "Choclo", en: "Dress shoes" }, { es: "Media bota", en: "Ankle boots" } ] },
    { label: { es: "Dama", en: "Women" }, links: [
      { es: "Outdoor", en: "Outdoor" }, { es: "Casual", en: "Casual" }, { es: "Confort", en: "Comfort" },
      { es: "Inyección al corte", en: "Direct injection", go: "sello-inyeccion" },
      { es: "Sandalia", en: "Sandals" }, { es: "Choclo", en: "Flats" }, { es: "Media bota", en: "Ankle boots" } ] },
    { label: { es: "Escolar", en: "School" }, links: [
      { es: "Escolar", en: "School" }, { es: "Casual", en: "Casual" },
      { es: "Inyección al corte", en: "Direct injection", go: "sello-inyeccion" },
      { es: "Media bota", en: "Ankle boots" }, { es: "Choclo", en: "Dress shoes" } ] },
    { label: { es: "Marca", en: "Brand" }, links: [
      { es: "Empresa", en: "Company" }, { es: "Filosofía", en: "Philosophy" }, { es: "Catálogos", en: "Catalogs" },
      { es: "Calzado de piel", en: "Leather footwear", go: "sello-piel" } ] },
  ],

  footer: [
    { title: { es: "Ayuda", en: "Help" }, links: [{ es: "Contacto", en: "Contact" }, { es: "Envíos", en: "Shipping" }, { es: "Cambios y devoluciones", en: "Exchanges & returns" }] },
    { title: { es: "Marca", en: "Brand" }, links: [{ es: "Empresa", en: "Company" }, { es: "Filosofía", en: "Philosophy" }, { es: "Catálogos", en: "Catalogs" }, { es: "Distribuidores", en: "Distributors" }] },
    { title: { es: "Calidad", en: "Quality" }, links: [{ es: "Calzado de piel", en: "Leather footwear", go: "sello-piel" }, { es: "Inyección al corte", en: "Direct injection", go: "sello-inyeccion" }] },
    { title: { es: "Síguenos", en: "Follow us" }, links: [{ es: "Instagram", en: "Instagram" }, { es: "Facebook", en: "Facebook" }, { es: "TikTok", en: "TikTok" }] },
  ],

  // ---------- SELLOS (editables) · "ring" = texto circular del sello ----------
  seals: {
    piel: {
      color: "#55823c",
      ring: { es: "CALZADO DE PIEL • CALZADO DE PIEL •", en: "LEATHER FOOTWEAR • LEATHER FOOTWEAR •" },
      name: { es: "Calzado de piel", en: "Leather footwear" },
      short: { es: "Corte elaborado con piel.", en: "Upper made with leather." },
      intro: {
        es: "El sello de piel identifica los modelos cuyo corte, la parte superior del zapato, está elaborado con piel. Es un material noble que se ajusta a la forma de tu pie con el uso.",
        en: "The leather seal marks styles whose upper, the top part of the shoe, is made with leather. It is a noble material that adapts to the shape of your foot with wear." },
      points: [
        { t: { es: "Transpirable", en: "Breathable" }, d: { es: "Permite que el pie respire y ayuda a mantenerlo cómodo durante el día.", en: "Lets your foot breathe and helps keep it comfortable all day." } },
        { t: { es: "Se adapta a tu pie", en: "Adapts to your foot" }, d: { es: "Con el uso, la piel se ajusta a la forma de tu pie.", en: "With wear, the leather adjusts to the shape of your foot." } },
        { t: { es: "Duradera", en: "Durable" }, d: { es: "Bien cuidada, ofrece gran durabilidad y buena presencia.", en: "Well cared for, it offers great durability and a polished look." } },
        { t: { es: "Acabado natural", en: "Natural finish" }, d: { es: "Tiene variaciones naturales de tono y textura que hacen único cada par.", en: "Natural variations in tone and texture make every pair unique." } },
      ],
      stepsTitle: { es: "Cómo cuidar tu calzado de piel", en: "How to care for leather footwear" },
      steps: [
        { es: "Límpialo con un paño suave, seco o ligeramente húmedo.", en: "Clean it with a soft cloth, dry or slightly damp." },
        { es: "Aplica crema o grasa para calzado de piel de vez en cuando.", en: "Apply leather shoe cream or polish from time to time." },
        { es: "Si se moja, déjalo secar al aire, lejos de fuentes de calor directo.", en: "If it gets wet, let it air dry away from direct heat." },
        { es: "Alterna tus pares para que respiren entre usos.", en: "Rotate your pairs so they can rest between wears." },
      ],
    },
    inyeccion: {
      color: "#2b2f2a",
      ring: { es: "INYECCIÓN AL CORTE • INYECCIÓN AL CORTE •", en: "DIRECT INJECTION • DIRECT INJECTION •" },
      name: { es: "Inyección al corte", en: "Direct injection" },
      short: { es: "La suela se moldea directamente sobre el corte.", en: "The sole is molded directly onto the upper." },
      intro: {
        es: "El sello de inyección al corte (también conocida como inyección directa) identifica el calzado cuya suela se forma directamente sobre el corte dentro de un molde. El resultado es un zapato ligero, flexible y con una unión firme entre suela y corte.",
        en: "The direct injection seal marks footwear whose sole is formed directly onto the upper inside a mold. The result is a light, flexible shoe with a firm bond between sole and upper." },
      points: [
        { t: { es: "Ligero y flexible", en: "Light and flexible" }, d: { es: "Suelas moldeadas que acompañan el movimiento natural del pie.", en: "Molded soles that follow the natural movement of your foot." } },
        { t: { es: "Unión firme", en: "Firm bond" }, d: { es: "Al formarse sobre el corte, suela y corte quedan integrados.", en: "Formed over the upper, sole and upper become one piece." } },
        { t: { es: "Comodidad diaria", en: "Everyday comfort" }, d: { es: "Pensado para acompañarte durante largas jornadas.", en: "Made to go with you through long days." } },
        { t: { es: "Acabado limpio", en: "Clean finish" }, d: { es: "Una zona de unión uniforme y con diseño continuo.", en: "A uniform joint area with a continuous design." } },
      ],
      stepsTitle: { es: "Cómo se hace", en: "How it's made" },
      steps: [
        { es: "Se prepara el corte: las piezas se cortan, se cosen y se montan sobre la horma.", en: "The upper is prepared: pieces are cut, stitched and mounted on the last." },
        { es: "El corte se coloca en un molde que da forma a la suela.", en: "The upper is placed in a mold that shapes the sole." },
        { es: "Se inyecta el material de la suela directamente sobre el corte.", en: "The sole material is injected directly onto the upper." },
        { es: "Se enfría, se desmolda y se revisan los acabados.", en: "It cools, is removed from the mold and the finish is checked." },
      ],
    },
  },

  // ---------- HERO (slider) ----------
  hero: [
    { bg: "#2f4821", img: IMG + "hero_1.png", kind: "outdoor", color: "#6b4426",
      eyebrow: { es: "Outdoor", en: "Outdoor" },
      title: { es: "Camina, vive verde.", en: "Walk. Live green." },
      text: { es: "Las botas Verta, las más vendidas de la temporada.", en: "The Verta boots, this season's best sellers." } },
    { bg: "#55823c", img: IMG + "hero_2.png", kind: "cowboy", color: "#9a6236",
      eyebrow: { es: "Colección Dallas", en: "Dallas collection" },
      title: { es: "Marca la diferencia, usa verde.", en: "Make a difference, wear green." },
      text: { es: "Botas cowboy con acabado premium.", en: "Cowboy boots with a premium finish." } },
    { bg: "#1f2b19", img: IMG + "hero_3.png", kind: "media", color: "#8a5a40",
      eyebrow: { es: "Dama", en: "Women" },
      title: { es: "Siente la diferencia desde el primer paso.", en: "Feel the difference from the very first step." },
      text: { es: "Media botas y choclos Miss y Vittorine.", en: "Miss and Vittorine ankle boots and flats." } },
  ],

  // ---------- COLECCIONES (tarjetas) ----------
  categories: [
    { name: { es: "Caballero", en: "Men" }, img: IMG + "categoria_caballero.jpg", kind: "choclo", shoe: "#d9a066", color: "#2f4821" },
    { name: { es: "Dama", en: "Women" }, img: IMG + "categoria_dama.jpg", kind: "media", shoe: "#e3c7a0", color: "#55823c" },
    { name: { es: "Escolar", en: "School" }, img: IMG + "categoria_escolar.jpg", kind: "choclo", shoe: "#1f1f1f", color: "#1f2b19" },
  ],

  // ---------- PRODUCTOS POR SECCIÓN ----------
  sections: [
    { title: { es: "Modelos premium que te hacen lucir", en: "Premium styles that make you shine" }, items: [
      p("1409m", "1409 Choclo de Vestir Figo Miel", 1099, "1409-miel", "choclo", "#c98b4b", "Nuevo", ["piel"]),
      p("6553n", "6553 Bota Cowboy Dallas Negro", 1299, "6553-negro", "cowboy", "#262626", "", ["piel"]),
      p("6552b", "6552 Bota Cowboy Dallas Branding", 1499, "6552-branding", "cowboy", "#7a4e2c", "", ["piel"]),
      p("1642n", "1642 Choclo Samir Negro", 1099, "1642-negro", "choclo", "#262626", "", ["piel"]),
    ] },
    { title: { es: "¡Las botas outdoor más vendidas!", en: "Our best-selling outdoor boots!" }, items: [
      p("3410c", "3410 Media Bota Verta Chocolate", 1299, "3410-chocolate", "outdoor", "#5b3a24", "Top", ["piel", "inyeccion"]),
      p("3409p", "3409 Media Bota Verta Papaya", 1299, "3409-papaya", "outdoor", "#dc8a2f", "", ["inyeccion"]),
      p("3409n", "3409 Media Bota Verta Negro", 1299, "3409-negro", "outdoor", "#2b2b2b", "", ["inyeccion"]),
      p("1648m", "1648 Media Bota Samir Miel", 1199, "1648-miel", "media", "#c98b4b", "", ["piel"]),
    ] },
    { title: { es: "Calzado de confort para dama", en: "Comfort footwear for women" }, sizes: "women", items: [
      p("8010n", "8010 Media Bota Vittorine Negro", 999, "8010-negro", "media", "#262626", "", ["inyeccion"]),
      p("8027n", "8027 Media Bota Miss Negro", 999, "8027-negro", "media", "#3a2a24", "", ["piel"]),
      p("8058c", "8058 Media Bota Miss Café", 999, "8058-cafe", "media", "#7a4a35", "Nuevo", ["piel"]),
      p("8010c", "8010 Media Bota Vittorine Café", 999, "8010-cafe", "media", "#8a5a40", "", ["inyeccion"]),
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
