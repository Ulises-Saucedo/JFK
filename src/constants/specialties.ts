import Gear from '@/assets/images/Gear.svg'
import Laptop from '@/assets/images/Laptop.svg'
import Battery from '@/assets/images/Battery.svg'
// Carousel Computing Images
import ComputingCarousel_1 from '@/assets/images/carousel/computing-carousel-1.jpg'
import ComputingCarousel_2 from '@/assets/images/carousel/computing-carousel-2.jpeg'
import ComputingCarousel_3 from '@/assets/images/carousel/computing-carousel-3.jpg'
import ComputingCarousel_4 from '@/assets/images/carousel/computing-carousel-4.jpg'
import ComputingCarousel_5 from '@/assets/images/carousel/computing-carousel-5.jpg'
// Carousel Programming Images
import ProgrammingCarousel_1 from '@/assets/images/carousel/programming-carousel-1.jpg'
import ProgrammingCarousel_2 from '@/assets/images/carousel/programming-carousel-2.jpg'
import ProgrammingCarousel_3 from '@/assets/images/carousel/programming-carousel-3.jpg'
import ProgrammingCarousel_4 from '@/assets/images/carousel/programming-carousel-4.jpg'
import ProgrammingCarousel_5 from '@/assets/images/carousel/programming-carousel-5.jpg'
// Carousel Electromechanical Images
import ElectromechanicalCarousel_1 from '@/assets/images/carousel/electromechanical-carousel-1.jpg'
import ElectromechanicalCarousel_2 from '@/assets/images/carousel/electromechanical-carousel-2.jpg'
import ElectromechanicalCarousel_3 from '@/assets/images/carousel/electromechanical-carousel-3.jpg'
import ElectromechanicalCarousel_4 from '@/assets/images/carousel/electromechanical-carousel-4.jpg'
import ElectromechanicalCarousel_5 from '@/assets/images/carousel/electromechanical-carousel-5.jpg'

// specialties cards information
export const specialties = [
  {
    icon: Gear,
    title: 'Electromecánica',
    description:
      'El programa abarca la instalación, mantenimiento y reparación de equipos electromecánicos, enfocado en la automatización industrial y el control de procesos.'
  },
  {
    icon: Battery,
    title: 'Informática',
    description:
      'Los estudiantes adquirirán competencias en administración de sistemas operativos, redes, seguridad informática y soporte técnico.'
  },
  {
    icon: Laptop,
    title: 'Programación',
    description:
      'Los estudiantes aprenderán a crear, depurar y mantener aplicaciones informáticas utilizando diversos lenguajes de programación y herramientas tecnológicas.'
  }
]

// specialties carousel images information
export const computingCarouselImages = [
  {
    src: ComputingCarousel_1
  },
  {
    src: ComputingCarousel_2
  },
  {
    src: ComputingCarousel_3
  },
  {
    src: ComputingCarousel_4
  },
  {
    src: ComputingCarousel_5
  }
]

export const programmingCarouselImages = [
  {
    src: ProgrammingCarousel_1
  },
  {
    src: ProgrammingCarousel_2
  },
  {
    src: ProgrammingCarousel_3
  },
  {
    src: ProgrammingCarousel_4
  },
  {
    src: ProgrammingCarousel_5
  }
]

export const electromechanicalCarouselImages = [
  {
    src: ElectromechanicalCarousel_1
  },
  {
    src: ElectromechanicalCarousel_2
  },
  {
    src: ElectromechanicalCarousel_3
  },
  {
    src: ElectromechanicalCarousel_4
  },
  {
    src: ElectromechanicalCarousel_5
  }
]

// specialties faq information
export const faqElectromechanicalInformation = {
  overview: [
    'La tecnicatura en electromecánica de nuestra escuela técnica secundaria es un programa educativo diseñado para brindar a los estudiantes una sólida formación en los campos de la electricidad, la electrónica y la mecánica. Durante su formación, los estudiantes adquirirán conocimientos teóricos y habilidades prácticas que les permitirán desarrollarse como profesionales en el ámbito de la electromecánica.',
    'Nuestro plan de estudios se centra en proporcionar a los estudiantes una base sólida en los principios fundamentales de la electricidad y la electrónica. Aprenderán sobre circuitos eléctricos, sistemas de control, electrónica analógica y digital, así como sobre los componentes y dispositivos utilizados en sistemas electromecánicos.',
    'Además de los aspectos eléctricos y electrónicos, nuestros estudiantes también se familiarizarán con los conceptos y las técnicas de la mecánica. Aprenderán sobre máquinas y sistemas mecánicos, elementos de transmisión de movimiento, mantenimiento preventivo y correctivo, y técnicas de medición y control.'
  ],
  studyPlan: {
    fourth_year: {
      general: [
        'Literatura',
        'Ingles',
        'Educacíon Física',
        'Salud y Adolescencia',
        'Historia',
        'Geografía'
      ],
      scientificTechnologicalTraining: [
        'Matemática Ciclo Superior',
        'Física',
        'Química',
        'Conocimientos de los Materiales'
      ],
      specificTechnicalTraining: [
        'Dibujo Tecnológico',
        'Maquinas Eléctricas y Automatismos',
        'Diseño y Procesamiento Mecánico',
        'Instalaciones y Aplicaciones de la Energía'
      ]
    },
    fifth_year: {
      general: [
        'Literatura',
        'Ingles',
        'Educacíon Física',
        'Política y Ciudadanía',
        'Historia',
        'Geografía'
      ],
      scientificTechnologicalTraining: [
        'Análisis Matemático',
        'Mecánica y Mecanismos',
        'Electrotecnia',
        'Resistencia y Ensayos de los Materiales'
      ],
      specificTechnicalTraining: [
        'Maquinas Eléctricas y Automatismos',
        'Diseño y Procesamiento Mecánico',
        'Instalaciones y Aplicaciones de la Energía'
      ]
    },
    sixth_year: {
      general: ['Literatura', 'Ingles', 'Educacíon Física', 'Filosofía', 'Arte'],
      scientificTechnologicalTraining: [
        'Matemática Aplicada',
        'Termodinámica y Máquinas Térmicas',
        'Electrotecnia',
        'Sistemas Mecánicos',
        'Derechos del Trabajo'
      ],
      specificTechnicalTraining: [
        'Laboratorio de Mediciones Eléctricas',
        'Maquinas Eléctricas y Automatismos',
        'Diseño y Procesamiento Mecánico',
        'Instalaciones y Aplicaciones de la Energía'
      ]
    },
    seventh_year: {
      general: ['Prácticas Profesionalizantes del Sector Electromecánico'],
      scientificTechnologicalTraining: [
        'Emprendimientos Productivos y Desarrollo Local',
        'Electrónica Industrial',
        'Seguridad, Higiene y Protección Ambiental',
        'Máquinas Eléctricas',
        'Sistemas Mecánicos'
      ],
      specificTechnicalTraining: [
        'Laboratorio de Metrología y Control de Calidad',
        'Mantenimiento y Montaje Electromecánico',
        'Proyecto y Diseño Electromecánico',
        'Proyecto y Diseño de Instalaciones Eléctricas'
      ]
    }
  },
  academic: {
    careers: [
      'Ingeniería en Electromecánica',
      'Ingeniería Industrial',
      'Automatización y Control Industrial',
      'Ingeniería Eléctrica',
      'Ingeniería en Electrónica'
    ],
    universities: [
      'Universidad de Buenos Aires (UBA)',
      'Universidad tecnológica Nacional (UTN)',
      'Universidad Nacional de La Plata (UNLP)',
      'Universidad Argentina de la Empresa (UADE)',
      'Universidad de Palermo (UP)'
    ]
  },
  practices: [
    'En el marco de nuestro programa educativo para el séptimo año en nuestra escuela técnica secundaria, nos complace destacar la excelencia de la formación que ofrecemos en el campo de la electromecánica. Este programa está diseñado para brindar a nuestros estudiantes una experiencia educativa integral que los prepare para enfrentar los retos del mundo laboral en el ámbito electromecánico.',
    'Durante el séptimo año, los estudiantes de nuestro programa de técnico en electromecánica tendrán la emocionante oportunidad de aplicar sus conocimientos en entornos prácticos y reales. Colaborarán estrechamente con empresas locales especializadas en electromecánica, participando en proyectos concretos que les permitirán desarrollar habilidades esenciales para este campo en constante evolución.',
    'El objetivo principal de nuestro programa es proporcionar a los estudiantes una sólida formación técnica, al tiempo que fomentamos la aplicación práctica de sus conocimientos en el área de la electromecánica. Durante sus prácticas profesionales, los estudiantes se sumergirán en proyectos específicos, donde podrán aplicar sus habilidades para diseñar, mantener y reparar sistemas electromecánicos.',
    'La formación en electromecánica no solo se centra en la adquisición de habilidades técnicas avanzadas, sino también en el desarrollo de competencias clave, como el trabajo en equipo, la comunicación efectiva y la gestión de proyectos. Los estudiantes trabajarán en equipos multidisciplinarios, colaborando con profesionales del sector para abordar desafíos reales y encontrar soluciones innovadoras.',
    'A lo largo de este proceso, los estudiantes recibirán orientación especializada y retroalimentación constante para perfeccionar sus habilidades técnicas y fortalecer su capacidad para enfrentar problemas complejos en el campo electromecánico. Nuestro compromiso es brindar a nuestros estudiantes una experiencia educativa enriquecedora que los prepare no solo como técnicos competentes, sino también como profesionales capacitados para liderar en el apasionante mundo de la electromecánica.',
    'Además de desarrollar aplicaciones y páginas web, los estudiantes también adquirirán habilidades de comunicación, trabajo en equipo y gestión de proyectos a medida que interactúan con los clientes y colaboran con otros profesionales. A lo largo del proceso, recibirán orientación y retroalimentación constante para mejorar sus habilidades técnicas y su capacidad para resolver problemas.'
  ]
}

export const faqComputingInformation = {
  overview: [
    'La tecnicatura en informática de nuestra escuela secundaria es un programa educativo diseñado para brindar a los estudiantes una sólida formación en el campo de la programación y la informática. A lo largo de los años de estudio, los estudiantes adquirirán habilidades prácticas y teóricas que les permitirán desarrollarse como profesionales en el mundo de la tecnología.',
    'Nuestro plan de estudios se centra en proporcionar a los estudiantes una base sólida en los fundamentos de la programación, incluyendo lenguajes de programación populares como C++, Java y Python. Los estudiantes aprenderán a escribir código eficiente y estructurado, comprenderán los conceptos de algoritmos y desarrollarán habilidades en el diseño y desarrollo de software.',
    'Además de las habilidades técnicas, también se hará hincapié en el desarrollo de habilidades transversales como el pensamiento lógico, la resolución de problemas, la comunicación y el trabajo en equipo. Estas habilidades son fundamentales en el entorno laboral actual y prepararán a los estudiantes para enfrentar los desafíos del mundo real.'
  ],
  studyPlan: {
    fourth_year: {
      general: [
        'Literatura',
        'Ingles',
        'Educacíon Física',
        'Salud y Adolescencia',
        'Historia',
        'Geografía'
      ],
      scientificTechnologicalTraining: [
        'Matemática Ciclo Superior',
        'Física',
        'Química',
        'Tecnologías Electrónicas'
      ],
      specificTechnicalTraining: [
        'Laboratorio de Programación 1',
        'Laboratorio de Hardware',
        'Laboratorio de Sistemas Operativos',
        'Laboratorio de Aplicaciones'
      ]
    },
    fifth_year: {
      general: [
        'Literatura',
        'Ingles',
        'Educacíon Física',
        'Política y Ciudadanía',
        'Historia',
        'Geografía'
      ],
      scientificTechnologicalTraining: [
        'Análisis Matemático',
        'Sistemas Digitales',
        'Base de Datos',
        'Modelos y Sistemas'
      ],
      specificTechnicalTraining: [
        'Laboratorio de Programación 2',
        'Laboratorio de Redes Informaticas',
        'Laboratorio de Diseño web',
        'Laboratorio de Diseño de Bases de Datos'
      ]
    },
    sixth_year: {
      general: ['Literatura', 'Ingles', 'Educacíon Física', 'Filosofía', 'Arte'],
      scientificTechnologicalTraining: [
        'Matemática Discreta',
        'Sistemas Digitales',
        'Sistemas de Gestión y Autogestión',
        'Seguridad Informática',
        'Derechos del Trabajo'
      ],
      specificTechnicalTraining: [
        'Laboratorio de Programación 3',
        'Laboratorio de Procesos Industriales',
        'Desarrollo de Aplicaciones Web Estáticas',
        'Desarrollo de Aplicaciones Web Dinámicas'
      ]
    },
    seventh_year: {
      general: ['Practicas Profesionalizantes del Sector Informatica'],
      scientificTechnologicalTraining: [
        'Emprendimientos Productivos y Desarrollo Local',
        'Evaluación de Proyectos',
        'Modelos y Sistemas',
        'Organazación y Métodos'
      ],
      specificTechnicalTraining: [
        'Proyecto, Diseño e implementación de Sistemas Computacionales',
        'Proyecto de Desarrollo de software para plataformas móviles',
        'Proyecto de implementación de sitios web dinámicos'
      ]
    }
  },
  academic: {
    careers: [
      'Ingeniería de Software',
      'Ciencias de la computación',
      'Análisis de Datos',
      'Desarrollador de Aplicaciones',
      'Ingeniería en Sistemas'
    ],
    universities: [
      'Universidad de Buenos Aires (UBA)',
      'Universidad tecnológica Nacional (UTN)',
      'Universidad Nacional de La Plata (UNLP)',
      'Universidad Argentina de la Empresa (UADE)',
      'Universidad de Palermo (UP)'
    ]
  },
  practices: [
    'En nuestro programa educativo de séptimo año en nuestra escuela técnica secundaria, nos enorgullece brindar a nuestros estudiantes la oportunidad de participar en prácticas profesionales que los prepararán para el mundo laboral y les permitirán aplicar sus conocimientos en un entorno real.',
    'Durante el séptimo año, los estudiantes de nuestro programa de técnico en programación tendrán la valiosa oportunidad de trabajar directamente con empresas locales, donde podrán desarrollar aplicaciones y páginas web personalizadas para satisfacer las necesidades y requerimientos de dichas empresas.',
    'Nuestro objetivo principal es proporcionar una experiencia práctica y significativa a nuestros estudiantes, al tiempo que les permitimos adquirir habilidades técnicas y profesionales relevantes para el campo de la programación. Las prácticas profesionales les brindarán una perspectiva auténtica de cómo es trabajar en la industria tecnológica y les permitirán enfrentar desafíos reales mientras colaboran estrechamente con profesionales del sector.',
    'Durante el período de prácticas, los estudiantes trabajarán en equipos multidisciplinarios. Se les asignará proyectos específicos donde aplicarán sus habilidades de programación para crear aplicaciones o páginas web que cumplan con los objetivos y requisitos de las empresas asociadas.',
    'Además de desarrollar aplicaciones y páginas web, los estudiantes también adquirirán habilidades de comunicación, trabajo en equipo y gestión de proyectos a medida que interactúan con los clientes y colaboran con otros profesionales. A lo largo del proceso, recibirán orientación y retroalimentación constante para mejorar sus habilidades técnicas y su capacidad para resolver problemas.'
  ]
}

export const faqProgrammingInformation = {
  overview: [
    'La tecnicatura en programación de nuestra escuela secundaria es un programa educativo diseñado para brindar a los estudiantes una sólida formación en el campo de la programación y la informática. A lo largo de los años de estudio, los estudiantes adquirirán habilidades prácticas y teóricas que les permitirán desarrollarse como profesionales en el mundo de la tecnología.',
    'Nuestro plan de estudios se centra en proporcionar a los estudiantes una base sólida en los fundamentos de la programación, incluyendo lenguajes de programación populares como C++, Java y Python. Los estudiantes aprenderán a escribir código eficiente y estructurado, comprenderán los conceptos de algoritmos y desarrollarán habilidades en el diseño y desarrollo de software.',
    'Además de las habilidades técnicas, también se hará hincapié en el desarrollo de habilidades transversales como el pensamiento lógico, la resolución de problemas, la comunicación y el trabajo en equipo. Estas habilidades son fundamentales en el entorno laboral actual y prepararán a los estudiantes para enfrentar los desafíos del mundo real.'
  ],
  studyPlan: {
    fourth_year: {
      general: [
        'Literatura',
        'Ingles',
        'Educacíon Física',
        'Salud y Adolescencia',
        'Historia',
        'Geografía'
      ],
      scientificTechnologicalTraining: [
        'Matemática Ciclo Superior',
        'Física',
        'Química',
        'Tecnologías Electrónicas'
      ],
      specificTechnicalTraining: [
        'Laboratorio de Programación 1',
        'Laboratorio de Hardware',
        'Laboratorio de Sistemas Operativos',
        'Laboratorio de Aplicaciones'
      ]
    },
    fifth_year: {
      general: [
        'Literatura',
        'Ingles',
        'Educacíon Física',
        'Política y Ciudadanía',
        'Historia',
        'Geografía'
      ],
      scientificTechnologicalTraining: [
        'Análisis Matemático',
        'Sistemas Digitales',
        'Base de Datos',
        'Modelos y Sistemas'
      ],
      specificTechnicalTraining: [
        'Laboratorio de Programación 2',
        'Laboratorio de Redes Informaticas',
        'Laboratorio de Diseño web',
        'Laboratorio de Diseño de Bases de Datos'
      ]
    },
    sixth_year: {
      general: ['Literatura', 'Ingles', 'Educacíon Física', 'Filosofía', 'Arte'],
      scientificTechnologicalTraining: [
        'Matemática Discreta',
        'Sistemas Digitales',
        'Sistemas de Gestión y Autogestión',
        'Seguridad Informática',
        'Derechos del Trabajo'
      ],
      specificTechnicalTraining: [
        'Laboratorio de Programación 3',
        'Laboratorio de Procesos Industriales',
        'Desarrollo de Aplicaciones Web Estáticas',
        'Desarrollo de Aplicaciones Web Dinámicas'
      ]
    },
    seventh_year: {
      general: ['Practicas Profesionalizantes del Sector Informatica'],
      scientificTechnologicalTraining: [
        'Emprendimientos Productivos y Desarrollo Local',
        'Evaluación de Proyectos',
        'Modelos y Sistemas',
        'Organazación y Métodos'
      ],
      specificTechnicalTraining: [
        'Proyecto, Diseño e implementación de Sistemas Computacionales',
        'Proyecto de Desarrollo de software para plataformas móviles',
        'Proyecto de implementación de sitios web dinámicos'
      ]
    }
  },
  academic: {
    careers: [
      'Ingeniería de Software',
      'Ciencias de la computación',
      'Análisis de Datos',
      'Desarrollador de Aplicaciones',
      'Ingeniería en Sistemas'
    ],
    universities: [
      'Universidad de Buenos Aires (UBA)',
      'Universidad tecnológica Nacional (UTN)',
      'Universidad Nacional de La Plata (UNLP)',
      'Universidad Argentina de la Empresa (UADE)',
      'Universidad de Palermo (UP)'
    ]
  },
  practices: [
    'En nuestro programa educativo de séptimo año en nuestra escuela técnica secundaria, nos enorgullece brindar a nuestros estudiantes la oportunidad de participar en prácticas profesionales que los prepararán para el mundo laboral y les permitirán aplicar sus conocimientos en un entorno real.',
    'Durante el séptimo año, los estudiantes de nuestro programa de técnico en programación tendrán la valiosa oportunidad de trabajar directamente con empresas locales, donde podrán desarrollar aplicaciones y páginas web personalizadas para satisfacer las necesidades y requerimientos de dichas empresas.',
    'Nuestro objetivo principal es proporcionar una experiencia práctica y significativa a nuestros estudiantes, al tiempo que les permitimos adquirir habilidades técnicas y profesionales relevantes para el campo de la programación. Las prácticas profesionales les brindarán una perspectiva auténtica de cómo es trabajar en la industria tecnológica y les permitirán enfrentar desafíos reales mientras colaboran estrechamente con profesionales del sector.',
    'Durante el período de prácticas, los estudiantes trabajarán en equipos multidisciplinarios. Se les asignará proyectos específicos donde aplicarán sus habilidades de programación para crear aplicaciones o páginas web que cumplan con los objetivos y requisitos de las empresas asociadas.',
    'Además de desarrollar aplicaciones y páginas web, los estudiantes también adquirirán habilidades de comunicación, trabajo en equipo y gestión de proyectos a medida que interactúan con los clientes y colaboran con otros profesionales. A lo largo del proceso, recibirán orientación y retroalimentación constante para mejorar sus habilidades técnicas y su capacidad para resolver problemas.'
  ]
}
