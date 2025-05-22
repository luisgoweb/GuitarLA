🎸 #GuitarLA - Tu Tienda de Guitarras Online
https://github.com/luisgoweb/GuitarLA/blob/main/public/img/Captura%20de%20Pantalla%202025-05-21%20a%20la(s)%2022.48.58.png

¡Bienvenido a GuitarLA, tu destino online para encontrar la guitarra perfecta! Este proyecto es una landing page interactiva para una tienda de guitarras, desarrollada con React y TypeScript, que simula la experiencia de compra de un e-commerce.

Este es mi primer proyecto personal de mayor envergadura y representa una aplicación práctica de los conocimientos que he adquirido en el desarrollo front-end. ¡Espero que te guste!

🚀 ##¡Explora el Proyecto!
Puedes ver la aplicación desplegada y funcionando en Netlify aquí:

👉 https://deft-gelato-edc6ed.netlify.app 👈

✨ ##Características Principales (MVP - Minimum Viable Product)
En esta primera versión del proyecto, me he centrado en implementar las funcionalidades esenciales de un carrito de compras, demostrando mi habilidad para manejar el estado, la lógica de negocio y la persistencia de datos:

🛒 ##Carrito de Compras Funcional:
Agregar al Carrito: Añade productos fácilmente desde la interfaz.
Eliminar del Carrito: Retira productos individualmente.
Limpiar Carrito: Vacía el carrito completamente.
Subtotal Dinámico: Calcula el precio total de los productos en el carrito en tiempo real.
Incrementar/Decrementar Cantidades: Ajusta la cantidad de cada producto en el carrito.

💡 ##Lógica Centralizada en un Custom Hook: Toda la lógica del carrito (agregar, eliminar, actualizar cantidades, calcular subtotal, etc.) está encapsulada en un hook personalizado. Esto garantiza la reutilización de código, mantiene el componente principal limpio y facilita la escalabilidad.

🔄 ##Manejo del Estado con React Hooks:
useState: Para gestionar el estado local de los componentes.
useEffect: Para manejar efectos secundarios, como la interacción con localStorage.
useMemo: Optimización del rendimiento al memorizar valores calculados, como el subtotal del carrito.

🛡️ ##Tipado Estricto con TypeScript: El proyecto está completamente tipado con TypeScript, lo que mejora la legibilidad, mantenibilidad y robustez del código, previniendo errores comunes de JavaScript en tiempo de desarrollo.

💾 ##Persistencia de Datos con Local Storage: El contenido del carrito de compras se guarda en el localStorage del navegador, asegurando que la información persista incluso si el usuario cierra la pestaña o el navegador.

⚙️ ##Tecnologías Utilizadas
React: Biblioteca de JavaScript para construir interfaces de usuario.
TypeScript: Superset de JavaScript que añade tipado estático.
Bootstrap: Para el estilizado de los componentes.
Vite (o Create React App): Herramienta de construcción para proyectos React.

💻 ##Cómo Ejecutar el Proyecto Localmente
Si quieres explorar el código o probar la aplicación, sigue estos pasos:

npm install
npm run dev

💡 ##Próximas Funcionalidades (Roadmap)
Este proyecto está en constante evolución. En futuras versiones, planeo agregar las siguientes funcionalidades para mejorar la experiencia del usuario y expandir las capacidades de la tienda:

Integración con useContext y useReducer: Mejorar la gestión del estado global del carrito, combinando estas herramientas con el custom hook existente para un manejo más eficiente y escalable de la lógica del carrito.
Autenticación de Usuarios: Registro e inicio de sesión.
Base de Datos para almacenar productos y usuarios.
Páginas de Detalles de Producto: Información más detallada para cada guitarra.
Filtros y Búsqueda de Productos: Mejorar la navegación y el descubrimiento.

🧑‍💻 Conéctate Conmigo
¡Gracias por visitar mi proyecto! Estoy activamente buscando mi primera oportunidad en el mundo del desarrollo web. Si tienes alguna pregunta, comentario o una oportunidad interesante, no dudes en contactarme:

GitHub: https://github.com/luisgoweb
LinkedIn: https://www.linkedin.com/in/luis-gonzalez-dev-full-stack/
Correo Electrónico: luisgocodev@gmail.com
