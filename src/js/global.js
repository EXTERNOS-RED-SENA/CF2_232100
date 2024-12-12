export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a los sistemas productivos agropecuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y componentes de un sistema productivo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Variables clave en el monitoreo agrícola',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Importancia de la caracterización de sistemas productivos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Papel de la sostenibilidad en los sistemas productivos modernos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variables en sistemas productivos y su monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia de las variables en los sistemas productivos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de variables en sistemas productivos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Monitoreo de variables en sistemas productivos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Estrategias de monitoreo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Beneficios del monitoreo de variables',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Retos en el monitoreo de variables',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Automatización en el monitoreo de sistemas productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Introducción a la automatización en la agricultura',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Componentes de un sistema automatizado',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Modelos de Implementación de la Automatización',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ventajas de la automatización en el monitoreo',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Retos en la implementación de la automatización',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Impacto de la automatización en la sostenibilidad',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de variabilidad espacial y temporal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Variabilidad espacial y temporal en la agricultura',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Concepto de variabilidad espacial y temporal',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Impacto de la variabilidad espacial y temporal en los sistemas productivos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Estrategias de manejo específico por sitio (MSS)',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Uso de tecnologías para la gestión de la variabilidad',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Beneficios de la gestión de la variabilidad',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas y métodos de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Importancia de la planificación basada en datos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Modelos de gestión integrada de recursos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Optimización de recursos en sistemas productivos automatizados',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Aplicación práctica del monitoreo y automatización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Estudios de caso: implementación exitosa de sistemas automatizados',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Monitoreo de variables y análisis de resultados',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Vigilancia tecnológica y GNSS en sistemas productivos',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228136_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Internet de las cosas (IoT) en agricultura',
      referencia:
        'Farmonaut. (2023). <i>Revolutionizing Agriculture: How IoT and Drones Are Driving Precision Farming for Sustainable Crop Yields</i>. Farmonaut.',
      tipo: 'Documento Técnico',
      link:
        'https://farmonaut.com/precision-farming/revolutionizing-agriculture-how-iot-and-drones-are-driving-precision-farming-for-sustainable-crop-yields/ ',
    },
    {
      tema: 'Automatización con sistemas SCADA',
      referencia:
        'GAO. (2023). Precision Agriculture: Benefits and Challenges for Technology Adoption and Use. U.S. Government Accountability Office',
      tipo: 'Documento Técnico',
      link: 'https://www.gao.gov/products/gao-24-105962 ',
    },
    {
      tema: 'Drones en la agricultura',
      referencia:
        'Farmonaut. (2023). How Data-Driven Precision Farming and IoT are Optimizing Crop Yields and Sustainability. Farmonaut',
      tipo: 'Documento Técnico',
      link:
        'https://farmonaut.com/precision-farming/revolutionizing-agriculture-how-data-driven-precision-farming-and-iot-are-optimizing-crop-yields-and-sustainability/ ',
    },
    {
      tema: 'GNSS en la agricultura',
      referencia:
        'Armonaut. (2006). UN-Zambia-ESA <i>Regional Workshop on the Applications of GNSS in Sub-Saharan Africa</i> - June 2006.',
      tipo: 'Documento Técnico',
      link:
        'https://www.unoosa.org/documents/pdf/psa/activities/2006/zambia/presentations/04-01-01.pdf ',
    },
    {
      tema: 'Gestión integrada de fincas con LiteFarm',
      referencia: 'LiteFarm. (2021). Sustainable farm management tool. FAO.',
      tipo: 'Herramienta de gestión ',
      link: 'https://www.litefarm.org/ ',
    },
    {
      tema: 'Gestión eficiente del agua con AquaCrop-OS',
      referencia:
        'Foster, T., et al. (2017). <i>AquaCrop-OS: Opensource version of FAO&#8242;s water productivity model.</i>',
      tipo: 'Simulador',
      link: 'https://digitalcommons.unl.edu/wffdocs/16/ ',
    },
    {
      tema: 'Simulador CropSyst para manejo de cultivos',
      referencia:
        '<i>Farmonaut. (2023). Using Drones for Precision Agriculture. Farmonaut.</i>',
      tipo: 'Simulador',
      link:
        'https://www.fao.org/land-water/land/land-governance/land-resources-planning-toolbox/category/details/en/c/1236450/ ',
    },
  ],
  glosario: [
    {
      termino: 'Agricultura de Precisión',
      significado:
        'Sistema de gestión agrícola que utiliza tecnologías como GPS, sensores y datos geoespaciales para optimizar el uso de insumos y maximizar la productividad y sostenibilidad',
    },
    {
      termino: 'AquaCrop',
      significado:
        'Modelo desarrollado por la FAO para simular la productividad del agua en cultivos, optimizando el uso de este recurso en diferentes condiciones climáticas.',
    },
    {
      termino: 'Automatización Agrícola',
      significado:
        'Implementación de sistemas tecnológicos, como sensores IoT y plataformas SCADA, para monitorear y controlar automáticamente los procesos productivos',
    },
    {
      termino: 'Gestión Integrada de Recursos',
      significado:
        'Enfoque coordinado para administrar agua, suelo, energía y otros insumos en un sistema productivo, buscando equilibrar la productividad con la sostenibilidad',
    },
    {
      termino: 'GNSS  (Sistema Global de Navegación por Satélite)',
      significado:
        'Tecnología que proporciona datos de ubicación y tiempo precisos, utilizada en la agricultura para siembra y aplicación de insumos con precisión.',
    },
    {
      termino: 'IoT (Internet of Things)',
      significado:
        'Red de dispositivos interconectados que recopilan y comparten datos en tiempo real, permitiendo el monitoreo y la gestión de variables clave en la agricultura.',
    },
    {
      termino: 'LiteFarm',
      significado:
        'Plataforma de gestión agrícola de código abierto que ayuda a los productores a tomar decisiones informadas sobre la salud de su finca y la sostenibilidad.',
    },
    {
      termino: 'Manejo Específico por Sitio (MSS)',
      significado:
        'Estrategia agrícola que ajusta las prácticas de manejo a las condiciones particulares de cada zona dentro de una parcela, optimizando recursos como agua y fertilizantes.',
    },
    {
      termino: 'NDVI (Índice de Vegetación de Diferencia Normalizada)',
      significado:
        'Índice que mide la salud de la vegetación usando datos de luz reflejada, indicando áreas con estrés hídrico o deficiencia de nutrientes.',
    },
    {
      termino: 'Sensores Multiespectrales',
      significado:
        'Dispositivos que capturan datos en diferentes longitudes de onda, utilizados principalmente en drones para evaluar la salud de los cultivos mediante índices de vegetación.',
    },
    {
      termino: 'SIG (Sistemas de Información Geográfica)',
      significado:
        'Herramientas que permiten recopilar, analizar y representar datos espaciales, utilizados para el mapeo de variabilidad en suelos y cultivos.',
    },
    {
      termino: 'Sistema SCADA',
      significado:
        'Plataforma de software que supervisa, controla y adquiere datos en tiempo real, utilizada en sistemas agrícolas para optimizar operaciones como el riego y la climatización.',
    },
    {
      termino: 'Sostenibilidad Agrícola',
      significado:
        'Prácticas agrícolas que buscan satisfacer las necesidades actuales de producción sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas.',
    },
    {
      termino: 'Variabilidad Espacial',
      significado:
        'Diferencias en las propiedades del suelo, clima y otros factores dentro de una parcela agrícola, que afectan el rendimiento de los cultivos',
    },
    {
      termino: 'Variabilidad Temporal',
      significado:
        'Cambios en las condiciones agroclimáticas o del suelo a lo largo del tiempo, como variaciones estacionales en temperatura y precipitación',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilera, M. (2014). Desarrollo en la Avicultura en Colombia: Instituciones, Organizaciones y Tecnología. Revista del Banco de la República, 87(1046), 21–56.',
    },
    {
      referencia:
        'Bernal, E. J. A., & Díaz, A. (2014). Mico CORPOICA: Buenas Prácticas Agrícolas (BPA) en el Cultivo de Aguacate. Bogotá: CORPOICA.',
    },
    {
      referencia: 'FAO. (2023). <i>Simulation Model</i>',
      link:
        'https://www.fao.org/land-water/land/land-governance/land-resources-planning-toolbox/category/details/en/c/1236450/.',
    },
    {
      referencia:
        'Farmonaut. (2023). Revolution culture: How IoT and Drones Are Driving Precision Farming for Sustainable Crop Yields. ',
      link: 'https://farmonaut.com/iot-precision-agriculture/',
    },
    {
      referencia:
        'Food and Agriculture Organization of the United Nations. (2006). Evapotranspiración del Cultivo: Guías para determinación de los requerimientos de agua de los cultivos (Estudios FAO: Riego y Drenaje). <i>Food & Agriculture Organization.</i> ',
      link: 'https://www.fao.org',
    },
    {
      referencia:
        'Pieri, R. (2010). Metodología de la Investigación (5ª ed.). McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Fundación Al. (2015). Manual de manejo integrado de plagas: Guía para cuidar un huerto orgánico y saludable. Bolivia: Fundación Alternativas.',
    },
    {
      referencia:
        'Fundación Alternativas. (2015). Agricultura Urbana en Cursos: Estrategias para la resiliencia y sostenibilidad. Bolivia: Fundación Alternativas.',
    },
    {
      referencia:
        'Fundación Alternativas. (2015). Manejo de Plagas en la Agricultura Orgánica. La Paz: Fundación Alternativa.',
    },
    {
      referencia:
        'Garbanzo, M. (2011). Manual de buenas prácticas para el Cultivo de Aguacate Hass. Costa Rica: CORFOGA.',
    },
    {
      referencia:
        'Instituto Agropecuario (ICA). (2012). Manejo Fitosanitario del Cultivo del Aguacate Hass. Bogotá: ICA.',
    },
    {
      referencia: 'LiteFarm. (2021). L Farm Management Tool.',
      link: 'https://www.litefarm.org/',
    },
    {
      referencia:
        'U.S. Government Accountability Office. (2023). Agriculture Technologies for Resource Efficiency*.',
      link: 'https://www.gao.gov/products/gao-24-105962',
    },
  ],
  global: {
    Name: 'Automatización y monitoreo de sistemas productivos agropecuarios',
    Description:
      'Este componente ofrece una introducción comprehensiva al modelamiento y gestión de datos para sistemas de inteligencia artificial. Abarca los fundamentos de estructuras de datos, técnicas de calidad y tratamiento, sistemas de gestión de bases de datos y conceptos básicos de IA. Proporciona las bases teóricas necesarias para comprender cómo los datos se transforman en información valiosa para modelos de IA.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
}
