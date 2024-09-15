import type { Tech } from "./types/tech";
import type { Testimonial } from "./types/testimonial";
import type { Subject } from "./types/subject";

export const tech: Array<Tech> = [
  {
    name: "Programación",
    description:
      "Aprende a desarrollar software y aplicaciones. Domina lenguajes de programación y crea soluciones innovadoras para problemas complejos.",
  },
  {
    name: "Informática",
    description:
      "Especialízate en sistemas y redes informáticas. Gestiona infraestructuras tecnológicas y asegura el funcionamiento eficiente de sistemas computacionales.",
  },
  {
    name: "Electromecánica",
    description:
      "Combina electricidad y mecánica en sistemas industriales. Diseña, mantiene y optimiza maquinaria y equipos electromecánicos para la industria moderna.",
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

export const timelineItems = [
  {
    date: "1945",
    content:
      "Se traslada a un nuevo edificio en la calle Basavilbaso 2073, Lanús Este.",
  },
  {
    date: "1949",
    content:
      "Se plantea la necesidad de ampliar el espacio físico de la escuela.",
  },
  {
    date: "1952",
    content:
      "La escuela se transforma en la Escuela Industrial de la Nación con la especialidad Mecánica en su ciclo superior.",
  },
  {
    date: "1959",
    content:
      "Creación de la Cooperativa de Producción para la construcción del nuevo edificio.",
  },
  {
    date: "1963",
    content: "Se coloca la piedra fundamental del nuevo edificio.",
  },
  {
    date: "1964",
    content:
      'La escuela adopta el nombre de E.N.E.T. Nº1 "John Fitzgerald Kennedy".',
  },
  {
    date: "1968-1969",
    content: "Comienzan a funcionar los talleres y se habilitan nuevas aulas.",
  },
  {
    date: "1973",
    content:
      "Inauguración del nuevo edificio con 16 aulas, talleres y laboratorios.",
  },
  {
    date: "1982",
    content: "Se anexa un campo de deportes de 10,600 m².",
  },
  {
    date: "1984-1985",
    content:
      "Se crea el Anexo de la E.N.E.T. Nº1 debido al aumento de alumnos.",
  },
  {
    date: "1988",
    content:
      "El Anexo se convierte en la E.N.E.T. Nº3 con la especialidad Electrónica.",
  },
  {
    date: "1995",
    content:
      "Se implementa la Ley Federal de Educación en la provincia de Buenos Aires.",
  },
  {
    date: "1997",
    content:
      "Se incorpora la modalidad Informática y se eliminan divisiones de Mecánica.",
  },
  {
    date: "2004-2005",
    content: "Se recuperan los alumnos de 7º, 8º y 9º año.",
  },
  {
    date: "2009",
    content:
      "Se inician evaluaciones anuales por capacidades con altas calificaciones en la escuela.",
  },
];

export const programmingSubjects: Subject[] = [
  {
    title: "Cuarto año",
    items: [
      "Literatura",
      "Inglés",
      "Educación Física",
      "Salud y adolescencia",
      "Historia",
      "Geografía",
      "Matemática Ciclo Superior",
      "Física",
      "Química",
      "Tecnologías Electrónicas",
      "Laboratorio de Programación I",
      "Laboratorio de Hardware",
      "Laboratorio de Sistemas Operativos",
      "Laboratorio de Aplicaciones",
    ],
  },
  {
    title: "Quinto año",
    items: [
      "Literatura",
      "Inglés",
      "Educación Física",
      "Salud y adolescencia",
      "Historia",
      "Geografía",
      "Análisis Matemático",
      "Sistemas Digitales",
      "Bases de Datos",
      "Modelos y Sistemas",
      "Laboratorio de Programación II",
      "Laboratorio de Redes Informáticas",
      "Laboratorio de Diseño web",
      "Laboratorio de diseño de bases de datos",
    ],
  },
  {
    title: "Sexto año",
    items: [
      "Literatura",
      "Inglés",
      "Educación Física",
      "Filosofía",
      "Arte",
      "Matemática Discreta",
      "Sistemas Digitales",
      "Sistemas de Gestión y Autogestión",
      "Seguridad Informática",
      "Derechos del Trabajo",
      "Laboratorio de Programación III",
      "Laboratorio de Procesos industriales",
      "Desarrollo de Aplicaciones Web Estáticas",
      "Desarrollo de Aplicaciones Web Dinámicas",
    ],
  },
  {
    title: "Septimo año",
    items: [
      "Prácticas Profesionalizantes del Sector Informática",
      "Emprendimientos Productivos y Desarrollo Local",
      "Evaluación de Proyectos",
      "Modelos y Sistemas",
      "Organización y métodos",
      "Proyecto, Diseño e implementación de Sistemas Computacionales",
      "Proyecto de desarrollo de software para plataformas móviles",
      "Proyecto de implementación de sitios web dinámicos",
    ],
  },
];

export const computingSubjects: Subject[] = [
  {
    title: "Cuarto año",
    items: [
      "Literatura",
      "Inglés",
      "Educación Física",
      "Salud y adolescencia",
      "Historia",
      "Geografía",
      "Matemática Ciclo Superior",
      "Física",
      "Química",
      "Tecnologías Electrónicas",
      "Laboratorio de Programación",
      "Laboratorio de Hardware",
      "Laboratorio de Sistemas Operativos",
      "Laboratorio de Aplicaciones",
    ],
  },
  {
    title: "Quinto año",
    items: [
      "Literatura",
      "Inglés",
      "Educación Física",
      "Salud y adolescencia",
      "Historia",
      "Geografía",
      "Análisis Matemático",
      "Sistemas Digitales",
      "Teleinformática",
      "Laboratorio de Programación",
      "Laboratorio de Hardware",
      "Laboratorio de Sistemas Operativos",
      "Laboratorio de Aplicaciones",
    ],
  },
  {
    title: "Sexto año",
    items: [
      "Literatura",
      "Inglés",
      "Educación Física",
      "Filosofía",
      "Arte",
      "Matemática Aplicada",
      "Sistemas Digitales",
      "Investigación Operativa",
      "Derechos del Trabajo",
      "Laboratorio de Programación",
      "Laboratorio de Hardware",
      "Laboratorio de Sistemas Operativos",
      "Laboratorio de Aplicaciones",
    ],
  },
  {
    title: "Septimo año",
    items: [
      "Prácticas Profesionalizantes del Sector Informática",
      "Emprendimientos Productivos y Desarrollo Local",
      "Evaluación de Proyectos",
      "Modelos y Sistemas",
      "Base de Datos",
      "Proyecto, Diseño e implementación de Sistemas Computacionales",
      "Instalación, Mantenimiento y Reparación de Sistemas Computacionales",
      "Instalación, Mantenimiento y Reparación de Redes Informáticas",
    ],
  },
];

export const electromechanicalSubjects: Subject[] = [
  {
    title: "Cuarto año",
    items: [
      "Literatura",
      "Inglés",
      "Educación Física",
      "Salud y adolescencia",
      "Historia",
      "Geografía",
      "Matemática Ciclo Superior",
      "Física",
      "Química",
      "Conocimiento de los Materiales",
      "Dibujo Tecnológico",
      "Maquinas Eléctricas y Automatismos",
      "Diseño y Procesamiento Mecánico",
      "Instalaciones y Aplicaciones de la Energía",
    ],
  },
  {
    title: "Quinto año",
    items: [
      "Literatura",
      "Inglés",
      "Educación Física",
      "Política y Ciudadanía",
      "Historia",
      "Geografía",
      "Análisis Matemático",
      "Mecánica y Mecanismos",
      "Electrotecnia",
      "Resistencia y Ensayos de los Materiales",
      "Maquinas Eléctricas y Automatismos",
      "Diseño y Procesamiento Mecánico",
      "Instalaciones y Aplicaciones de la Energía",
    ],
  },
  {
    title: "Sexto año",
    items: [
      "Literatura",
      "Inglés",
      "Educación Física",
      "Filosofía",
      "Arte",
      "Matemática Aplicada",
      "Termodinámica y Máquinas Térmicas",
      "Electrotecnia",
      "Sistemas Mecánicos",
      "Derechos del Trabajo",
      "Laboratorio de Mediciones Eléctricas",
      "Maquinas Eléctricas y Automatismos",
      "Diseño y Procesamiento Mecánico",
      "Instalaciones y Aplicaciones de la Energía",
    ],
  },
  {
    title: "Septimo año",
    items: [
      "Prácticas Profesionalizantes del Sector Informática",
      "Emprendimientos Productivos y Desarrollo Local",
      "Electrónica Industrial",
      "Seguridad, Higiene y Protección Ambiental",
      "Máquinas Eléctricas",
      "Sistemas Mecánicos",
      "Laboratorio de Metrología y Control de Calidad",
      "Mantenimiento y Montaje Electromecánico",
      "Proyecto y Diseño Electromecánico",
      "Proyecto y Diseño de Instalaciones Eléctricas",
    ],
  },
];
