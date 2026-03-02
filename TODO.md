# Tareas Pendientes y Mejoras (TODO)

Este documento enumera las tareas pendientes, integraciones futuras y recomendaciones estratégicas para evolucionar la web de **Centro Torre Rosa** hacia su mejor versión técnica y de negocio.

## 🔴 Pendientes Urgentes (Identificadas)
- [ ] **Redes Sociales:** Actualizar el enlace del icono de Instagram en el pie de página (`Footer.tsx`) con la URL real de la clínica.
- [ ] **Textos Legales:** Redactar y enlazar correctamente las páginas de:
  - Política de Privacidad
  - Aviso Legal
  - Política de Cookies (y añadir un banner de aceptación de cookies para cumplir con la RGPD europea).
- [ ] **SEO (Posicionamiento en Google):**
  - Asegurar que los meta-títulos y descripciones en `messages/es.json` y `layout.tsx` sean perfectos.
  - Asegurar que `sitemap.xml` y `robots.txt` estén configurados correctamente para el dominio final en producción.
  - Registrar la web en **Google Search Console** para acelerar la indexación.
- [ ] **Integración con WhatsApp:** Añadir un botón flotante (widget) de WhatsApp en la esquina inferior derecha para que los pacientes puedan abrir un chat directo desde el móvil con un solo clic.

---

## 🟡 Próximos Pasos Recomendados (Next Steps)

### 1. Mejoras de Negocio y Conversión
- **Sección de Testimonios:** Añadir un carrusel u opiniones de familias reales (anonimizadas). El *social proof* (prueba social) genera mucha confianza en servicios de salud infantil.
- **Página de Tarifas / FAQs:** Crear una sección de Preguntas Frecuentes (¿Trabajas con seguros? ¿Cuánto dura una sesión? ¿Cuál es el rango de precios?) para filtrar dudas recurrentes antes del primer contacto.
- **Blog / Artículos:** Si tienes tiempo para escribir, tener un sistema de artículos (CMS) sobre psicología infantil, Montessori o neurodesarrollo es la **mejor herramienta** para posicionar orgánicamente en Google.

### 2. Mejoras Técnicas (Performance & Analytics)
- **Google Analytics / Tag Manager:** Integrar un script de analítica web para saber cuántas personas visitan la página, desde qué ciudades y desde qué enlaces (por ejemplo, desde Instagram).
- **SEO Local (JSON-LD):** Añadir *Schema Markup* para que Google entienda que eres un "Local Business" o "Medical Clinic" en Málaga, mejorando tu aparición en Google Maps.
- **Auditoría Lighthouse:** Correr una auditoría oficial de Google para confirmar que la puntuación de Accesibilidad, Rendimiento y SEO están al 100%.

### 3. Automatización
- **CI/CD (Integración Continua):** Configurar GitHub Actions con Firebase para que cada vez que subas un cambio al código, la web se compile y se despliegue a producción automáticamente sin tener que hacer `npm run build` manualmente.
- **Formulario Dinámico Avanzado:** Transicionar el formulario `mailto:` actual a un servicio como **Web3Forms** o **Formspree** (gratuitos) que envíen las consultas al correo sin depender de que el usuario tenga un programa de email configurado.

---

*Archivo vivo: Actualizar a medida que se completan las tareas.*
