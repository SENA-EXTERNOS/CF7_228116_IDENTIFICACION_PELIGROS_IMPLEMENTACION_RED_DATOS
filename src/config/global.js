export default {
  global: {
    componenteFormativo:
      'Identificación de los peligros y riesgos en la implementación de la red de datos',
    descripcionCurso:
      'Este componente establece la metodología y aspectos generales para identificar y conocer los riesgos y peligros que se presentan en un proceso de instalación de redes eléctricas y datos, responsabilidades civil, penal, administrativa y social de cada interviniente en el proceso de montaje, de tal forma que el aprendiz pueda realizar una gestión de riesgos y peligros de manera exitosa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Identificación de peligros',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Identificación de peligros',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de riesgos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Valoración de riesgos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Medidas de control de riesgos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Verificación de controles de riesgos',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Responsabilidad civil',
        desarrolloContenidos: true,
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
      tema:
        'Gestión de Riesgos de las Tecnologías de la información y comunicaciones - TIC',
      referencia:
        'Director Global Consulting (9 de noviembre de 2019). Gestión de Riesgos de las Tecnologías de la Información y Comunicaciones – TIC. [Archivo de video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=_StkrAUvvRc&ab_channel=DirectorGlobal ',
    },
    {
      tema:
        'Metodología para la implementación del aseguramiento de calidad en los productos software, desarrollados por aprendices del SENA',
      referencia:
        'Buitrón, L. S. Garzón, L., Palechor J. (2018). Metodología para la implementación del aseguramiento de calidad en los productos software, desarrollados por aprendices del SENA. Recuperado',
      tipo: 'Libro',
      descarga: '/downloads/Metodologia_implementacion_aseguramiento',
    },
    {
      tema: 'Modelo de Riesgos de un Proyecto TIC',
      referencia:
        'Ingeniería Telecomunicaciones UNED (19 de octubre de 2017). Modelo de Riesgos de un Proyecto TIC. [Archivo de video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=a7zEh68ClRU&ab_channel=IngenieriaTelecomunicacionesUNED',
    },
    {
      tema: 'Riesgos, políticas y herramientas de seguridad en redes.',
      referencia:
        'Montoya, E & Alonso, J. (1997). Riesgos, políticas y herramientas de seguridad en redes. Recuperado',
      tipo: 'Libro',
      descarga: '/downloads/document-2020-08-14T191455.755.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actividad rutinaria',
      significado:
        'actividad que forma parte de un proceso de la organización, se ha planificado y es estandarizable.',
    },

    {
      termino: 'Actividad no rutinaria',
      significado:
        'actividad que no se ha planificado ni estandarizado dentro de un proceso de la organización, o actividad que, a criterio de la organización, por su baja frecuencia de ejecución la determine como no rutinaria.',
    },
    {
      termino: 'Evaluación del riesgo',
      significado:
        'proceso para determinar el nivel de riesgo asociado al nivel de probabilidad y el nivel de consecuencia.',
    },
    {
      termino: 'Factores de riesgos',
      significado:
        'es el equivalente de la definición de peligros para seguridad vial. En toda actividad humana concurren ineludiblemente tres factores inseparables: el medio ambiente, la máquina y el hombre.',
    },
    {
      termino: 'Nivel de riesgo',
      significado:
        'magnitud de un riesgo resultante del producto del nivel de probabilidad por el nivel de consecuencia.',
    },
    {
      termino: 'Peligro',
      significado:
        'fuente con un potencial para causar lesiones y deterioro de la salud.',
    },
    { termino: 'Riesgo', significado: 'efecto de la incertidumbre.' },
    {
      termino: 'Riesgo aceptable',
      significado:
        'riesgo que ha sido reducido a un nivel que la organización puede tolerar, respecto a sus obligaciones legales y su propia política en seguridad y salud ocupacional.',
    },
    {
      termino: 'Trabajador',
      significado:
        'persona que realiza trabajo o actividades relacionadas con el trabajo que están bajo el control de la organización,',
    },
    {
      termino: 'Valoración de los riesgos',
      significado:
        'proceso de evaluar el riesgo que surge de un peligro, teniendo en cuenta la suficiencia de los controles existentes y de decidir si el riesgo es aceptable o no.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centro mexicano de filantropía (2022). Página web institucional. Consultado el 31 de octubre de 2022. Recuperado de:',
      link: 'https://www.cemefi.org/',
    },

    {
      referencia:
        'Consejo colombiano de seguridad (2022). Página web institucional. Publicaciones, boletín CCS al día. Consultado el 31 de octubre de 2022. Recuperado de:',
      link: 'https://ccs.org.co/publicaciones/',
    },

    {
      referencia:
        'Diario Oficial de la Federación – DOF. (2014). Reglamento Federal de Seguridad y Salud en el Trabajo. Visitado el 15 de agosto de 2022. Recuperado de',
      link:
        'https://www.dof.gob.mx/nota_detalle.php?codigo=5368114&fecha=13/11/2014#gsc.tab=0',
    },

    {
      referencia:
        'Ley 57 de 1887. Código civil colombiano (actualizado en 2022). Consultado el 31 de octubre de 2022. Recuperado de:',
      link: 'https://leyes.co/codigo_civil.htm',
    },

    {
      referencia:
        'Occupational Safety and Heatlh Administtration – OSHA. (s.f.) Prevención y Control de Riesgos. Visitado el 15 de agosto de 2022 Recuperado de:',
      link: 'https://www.osha.gov/safety-management',
    },

    {
      referencia:
        'The National Institute for Occupational Safety and Health -NIOSH (2018). Hierarchy of Controls. Visitado el 15 de agosto de 2022 Recuperado de:',
      link: 'https://www.cdc.gov/niosh/topics/hierarchy/default.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
