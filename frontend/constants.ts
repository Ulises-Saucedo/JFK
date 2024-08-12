import type { Tech } from "./types/tech";
import type { Testimonial } from "./types/testimonial";

export const tech: Array<Tech> = [
  {
    name: "Programación",
    icon: "laptop",
    description:
      "Nuestra tecnicatura en Programación te ofrece las herramientas para convertir ideas en aplicaciones funcionales.",
  },
  {
    name: "Informática",
    icon: "cpu",
    description:
      "Con nuestra tecnicatura en Informática, te prepararás para ser un profesional versátil en un mundo cada vez más digitalizado.",
  },
  {
    name: "Electromecánica",
    icon: "gear",
    description:
      "La tecnicatura en Electromecánica combina principios de la mecánica y la electricidad para formar profesionales.",
  },
];

export const testimonials: Array<Testimonial> = [
  {
    name: "María López",
    role: "Desarrolladora Full Stack",
    testimonial:
      '"Estudiar la tecnicatura en Programación fue la mejor decisión que pude haber tomado. Me dio una base sólida en los lenguajes más importantes y me preparó para enfrentar desafíos reales en el mundo laboral. Hoy, como Desarrolladora Full Stack, puedo ver cómo cada línea de código que escribo impacta directamente en las soluciones que brindamos a nuestros clientes."',
  },
  {
    name: "Ana Martínez",
    role: "Técnica Electromecánica",
    testimonial:
      '"La tecnicatura en Electromecánica me abrió las puertas a un mundo lleno de oportunidades. Lo que más me gusta de mi trabajo actual es la combinación de teoría y práctica. Como Técnica Electromecánica, estoy constantemente resolviendo problemas y mejorando sistemas, algo que me apasiona. La formación que recibí fue clave para desarrollar las habilidades que utilizo cada día."',
  },
  {
    name: "Carlos Gómez",
    role: "Administrador de Redes",
    testimonial:
      '"La tecnicatura en Informática me permitió entender el funcionamiento interno de los sistemas y cómo protegerlos. Gracias a los conocimientos adquiridos, hoy trabajo en la administración de redes, asegurando que la infraestructura de las empresas sea segura y eficiente. Es un rol desafiante, pero las bases que obtuve en la tecnicatura me dieron la confianza para enfrentar cualquier reto."',
  },
];
