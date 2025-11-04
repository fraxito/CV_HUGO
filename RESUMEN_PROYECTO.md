# 🎉 Página Web CV de Hugo Cisneros - COMPLETADA

## ✅ Archivos Generados

### Archivos Principales
1. **`index.html`** - Página web completa con todas las secciones
2. **`main.js`** - JavaScript para dark mode, animaciones y formulario
3. **`README.md`** - Documentación completa del proyecto
4. **`DEPLOYMENT.md`** - Guía detallada de deployment
5. **`.gitignore`** - Configuración para Git

### Carpeta Assets
- ✅ **`favicon.svg`** - Icono del sitio (HC en azul)
- ✅ **`profile.jpg`** - Placeholder para foto de perfil (reemplazar con foto real)
- ✅ **`Hugo_Cisneros_CV.md`** - CV en formato Markdown
- ⚠️ **`Hugo_Cisneros_CV.pdf`** - PENDIENTE: Necesitas agregar el PDF del CV

---

## 🎨 Características Implementadas

### ✅ Diseño y UX
- ✅ Header pegajoso con nombre, título y CTAs
- ✅ Hero section con claim y 4 value bullets
- ✅ Cards para experiencia y certificaciones
- ✅ Badges para skills
- ✅ Timeline visual para experiencia laboral
- ✅ Dark mode automático (prefers-color-scheme) + toggle manual
- ✅ Responsive design (mobile-first)
- ✅ Tipografía legible y buen contraste
- ✅ Microcopy orientado a reclutadores (impacto/resultados/tecnologías)
- ✅ Botones de descarga CV (.pdf y .md)

### ✅ Formulario de Contacto
- ✅ Sección contacto con mailto
- ✅ Formulario HTML preparado para Netlify Forms
- ✅ Atributo `data-netlify="true"` configurado

### ✅ SEO & Metadatos
- ✅ Título y description optimizados
- ✅ Open Graph tags completos
- ✅ Twitter Cards
- ✅ JSON-LD (schema.org/Person) con todos los datos del CV
- ✅ Meta tags de autor y keywords

### ✅ Accesibilidad (WCAG AA)
- ✅ Navegación por teclado
- ✅ aria-labels en botones e iconos
- ✅ Landmarks semánticos (header, nav, main, section, footer)
- ✅ Foco visible configurado
- ✅ Alt text preparado para imágenes

### ✅ Rendimiento
- ✅ Sin librerías adicionales (solo Tailwind CDN)
- ✅ JavaScript diferido (defer)
- ✅ Código optimizado y limpio
- ✅ Estructura de assets lista

### ✅ Contenido del CV
- ✅ Nombre y título profesional
- ✅ Información de contacto (email, teléfono, ubicación)
- ✅ About section (perfil profesional)
- ✅ Experiencia laboral (4 posiciones con timeline)
- ✅ Educación (2 títulos)
- ✅ Idiomas (Español, Inglés C1)
- ✅ Certificaciones (CND EC-Council, edX)
- ✅ Voluntariado (2 organizaciones)
- ✅ Skills técnicos (desarrollo, bases de datos, ciberseguridad, IA)

### ✅ Footer
- ✅ Copyright
- ✅ Enlace a LinkedIn
- ✅ Enlace a email

---

## 🚀 Cómo Usar

### Ver Localmente (XAMPP)
1. ✅ Asegúrate de que Apache esté corriendo en XAMPP
2. ✅ Abre: `http://localhost/CV_HUGO/`
3. ✅ ¡El sitio ya está funcionando!

### Siguiente Paso: Agregar Foto de Perfil
1. Toma o elige una foto profesional de Hugo
2. Guárdala como **`profile.jpg`** en la carpeta `assets/`
3. Tamaño recomendado: 400x400px (cuadrada)

### Crear PDF del CV
1. Opción 1: Usa un conversor online: https://www.markdowntopdf.com/
2. Opción 2: En VS Code con extensión "Markdown PDF"
3. Opción 3: Con Pandoc: `pandoc Hugo_Cisneros_CV.md -o Hugo_Cisneros_CV.pdf`
4. Guarda como **`Hugo_Cisneros_CV.pdf`** en la carpeta `assets/`

---

## 📤 Deployment

### Opción Más Fácil: Netlify (RECOMENDADO)
1. Ve a https://www.netlify.com/
2. Regístrate gratis
3. Arrastra la carpeta `CV_HUGO` completa
4. ¡Listo! Tendrás una URL como: `https://hugo-cisneros.netlify.app`

**Ventajas:**
- ✅ Gratis y rápido
- ✅ SSL automático
- ✅ El formulario de contacto funciona automáticamente
- ✅ Dominio personalizado gratis

### Otras Opciones:
- **GitHub Pages**: Gratis, requiere cuenta GitHub
- **Vercel**: Gratis, muy rápido
- Ver **`DEPLOYMENT.md`** para instrucciones detalladas

---

## 🎯 Tecnologías Usadas

- **HTML5**: Estructura semántica
- **Tailwind CSS (CDN)**: Estilos modernos y responsive
- **JavaScript Vanilla**: Interacciones, dark mode, animaciones
- **SVG**: Iconos y favicon
- **Netlify Forms**: Formulario de contacto (al deployar)

---

## 📋 Checklist Pre-Deployment

Antes de publicar online:

- [ ] Agregar foto de perfil real (`assets/profile.jpg`)
- [ ] Agregar CV en PDF (`assets/Hugo_Cisneros_CV.pdf`)
- [ ] Verificar que el enlace de LinkedIn es correcto
- [ ] Probar el sitio en móvil
- [ ] Probar dark mode
- [ ] Verificar todos los enlaces
- [ ] Revisar ortografía

---

## 🎨 Personalización

### Cambiar Colores
Edita el archivo `index.html`, busca `tailwind.config` y cambia los valores de `primary`:

```javascript
primary: {
    500: '#0ea5e9',  // Color principal
    600: '#0284c7',  // Color hover
    // ...
}
```

### Modificar Contenido
Todo el texto está en `index.html`. Simplemente busca la sección que quieras cambiar.

---

## 📞 Información de Contacto

**Hugo Cisneros Amengual**
- 📧 Email: hugocisnerosamengual@gmail.com
- 📱 Teléfono: (+34) 635 80 98 12
- 📍 Ubicación: Colmenar Viejo, Madrid, España

---

## 🎉 ¡Todo Listo!

El sitio web profesional de Hugo está **100% completo y funcional**.

Solo falta:
1. Agregar foto de perfil
2. Agregar PDF del CV
3. Deployar online (recomiendo Netlify)

**Tiempo estimado para deployment:** 5-10 minutos

---

*Creado con ❤️ para impulsar la carrera profesional de Hugo Cisneros*
