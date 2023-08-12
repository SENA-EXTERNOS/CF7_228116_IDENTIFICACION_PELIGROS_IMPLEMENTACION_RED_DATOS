<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Riesgo

    .fondo-2.p-4(data-aos="flip-left").mb-5
      .row.align-items-center
        .col-lg-10.mb-4.mb-md-0
          .bg_2.p-3
            p La definición de la palabra peligro viene del latín periculum, la cual suscita una amenaza. En este caso se establece como riesgo a la contingencia inminente de que suceda algo malo. Esto puede tratarse de una amenaza física, tal como el derrumbamiento de una estructura visiblemente deteriorada, o de una circunstancia abstracta que puede o no presentarse, que depende de la percepción de cada individuo.

            p.mb-0 Uno de los aspectos importantes en el área de salud ocupacional es que se pueda determinar y definir que es un peligro. Dentro de este enfoque, se define el peligro como ese algo que tiene la capacidad de hacerle daño a las personas, a los bienes o al entorno. Este evento no siempre reside específicamente en las cosas, sino en la manera errónea, insegura o negligente, en que se manejan e interactúa con ellas.

    p.mb-5 En el ambiente del proceso de instalación de redes, tanto las eléctricas como de datos, los peligros son latentes, es por esto la importancia que se conozcan a cuáles se va a estar expuestos en los procesos de actualización tecnológica.


    h2.mb-3 Identificación de peligros

    .row.justify-content-center.mb-3
      .col-lg-5.mb-4.mb-md-0(data-aos="fade-right")
        img.img-a(src='@/assets/curso/temas/tema_1/img_4.png', alt='Texto que describa la imagen')
      .col-lg-7(data-aos="fade-left")
        p.p-2 Es un proceso sistemático y de largo plazo para identificar, revisar y evaluar factores, peligros o factores que tienen un impacto significativo en la aparición de amenazas a la seguridad y salud de personas o cosas relacionadas con cualquier trabajo o actividad.

        .bg_2.p-2
          p La identificación de peligros es uno de los principales pilares del desarrollo de un sistema de gestión de seguridad y salud en el trabajo, convirtiéndose en uno de los insumos para la identificación y determinación de las acciones a tomar para prevenir accidentes o enfermedades.
        p.p-2 En el proceso de identificación de amenazas, la capacidad de visualizar un panorama global de actividades, regiones, ubicaciones y número de personas afectadas por un determinado tipo de amenaza se aclara y es clave en la evaluación. La evaluación de riesgos determina qué tipos de amenazas deben priorizarse. dependiendo de las circunstancias de su impacto o probabilidades. Entre los errores más comunes a la hora de realizar actividades que tienen como objetivo identificar estos se encuentran realizar u omitir inadvertidamente muchas actividades que normalmente no se realizan.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          p No tener en cuenta las actividades realizadas por los contratistas, ya sean organizativos o no relacionados temporalmente, es un error común que luego generará problemas en la gestión de contratos, porque si no se identifican los peligros asociados con tales actividades, lo más probable es que no tengan las herramientas. identificar e indagar sobre los requerimientos del personal del contratista que realizará la actividad.

          p.mb-0 La identificación de peligros, la evaluación de riesgos y las medidas de control deben verse como una hoja de ruta a seguir por el sistema de gestión, haciéndolo verdaderamente importante y no un requisito más para los sistemas de gestión de su actividad.

    p.mb-5 En el desarrollo  de identificación de peligros o riesgos  se  debe tener en cuenta:

    .bg_3
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema_1/img_5.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="10%" y="70%" numero="+")
          p.mb-0 Organización del trabajo, factores sociales (incluyendo carga de trabajo y horas de trabajo, abuso, acoso e intimidación), liderazgo y cultura organizacional.
        .tarjeta.color-acento-botones.p-3(x="22%" y="70%" numero="+")
          p.mb-0 Actividades y situaciones rutinarias e irregulares, incluyendo revisión de: infraestructura, equipos, materiales, sustancias y condiciones físicas en el lugar de trabajo.
        .tarjeta.color-acento-botones.p-3(x="35%" y="70%" numero="+")
          p.mb-0 Incidentes pasados significativos, internos o externos a la organización, incluidas las emergencias y sus causas.
        .tarjeta.color-acento-botones.p-3(x="48%" y="70%" numero="+")
          p.mb-0 Los eventos   de  emergencia potenciales.
        .tarjeta.color-acento-botones.p-3(x="60%" y="70%" numero="+")
          p.mb-0 Todos, incluidos aquellos con acceso al lugar de trabajo y sus actividades, incluidos los empleados, contratistas, visitantes y otros.
        .tarjeta.color-acento-botones.p-3(x="73%" y="70%" numero="+")
          p.mb-0 Teniendo en cuenta el diseño de áreas de trabajo, procesos, instalaciones, máquinas/equipos, procesos de trabajo y organización del trabajo, incluyendo su adaptación a las necesidades y capacidades del personal relevante.
        .tarjeta.color-acento-botones.p-3(x="86%" y="70%" numero="+")
          p.mb-0 Cambios reales o propuestos en la entidad, sus operaciones, procesos, actividades y su sistema de gestión de la SST.
        .tarjeta.color-acento-botones.p-3(x="98%" y="70%" numero="+")
          p.mb-0 Cambios en el conocimiento y la información sobre las amenazas.
    
    h2.mb-3 Clasificación de peligros

    p.mb-5 La definición de las amenazas, se establece según la ocurrencia del evento, un peligro latente y, el peligro potencial, que se pueden presentar en algún momento de los montajes de plataformas tecnológicas.


    .row.h-100.d-flex.align-items-lg-stretch.mb-5
      .col-lg-6.h-100.d-flex
        .tarjeta-avatar-b.mb-5.h-100.d-flex
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema_1/img_6.svg' alt='AvatarTop')
          .tarjeta.bg_4
            .p-4
              h4 El peligro latente:
              p.mb-2 Es aquél que tiene potencial de daño, pero aún no lo ha producido (como un posible desprendimiento de roca de una montaña que se encuentra en un área sin personas ni viviendas).

      .col-lg-6.h-100.d-flex
        .tarjeta-avatar-b.mb-5.h-100.d-flex
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema_1/img_7.svg' alt='AvatarTop')

          .tarjeta.bg_4
            .p-3
              h4 El peligro potencial:
              p.mb-0 Representa una amenaza capaz de afectar a las personas, sus propiedades o el medio ambiente, por lo que requiere de una evaluación del riesgo y de una posible evacuación (un ejemplo de esta situación es un volcán activo cerca de un pueblo).

    p.mb-5 Existen otra clase de peligros, como:

    .row.mb5
      .col-lg-8.mb-4.mb-md-0
        TabsA.color-acento-botones.mb-5
          .tarjeta.bg_4.p-4(titulo="Peligro<br> mecánico")
            h4 Peligro mecánico
            p Es el conjunto de condiciones que, en el momento de presentarse, pueden dar lugar a una lesión por manipulación de máquinas que estén en movimiento, herramientas, piezas de trabajo o materiales sólidos o fluidos
          .tarjeta.bg_4.p-4.tb(titulo="Peligro<br> locativo")
            h4 Peligro locativo
            p Se trata de una incidencia que se produce al realizar cualquier modificación o construcción de la edificación, la cual se presenta cuando las características de diseño, construcción, mantenimiento y desgaste de la vivienda pueden ocasionar lesiones a los trabajadores que se desplacen o causar molestias durante el desempeño del trabajo, y daños a materiales de la empresa tales como pisos, escaleras, pasamanos, colchonetas, andamios defectuosos, paredes, puertas, ventanas en mal estado, techos en mal estado, superficie resbaladiza, etc.
          .tarjeta.bg_4.p-4.tb_1(titulo="Peligro<br> psicosocial")
            h4 Peligro psicosocial
            p Surge de la interacción con el ambiente de trabajo, de acuerdo con las condiciones organizacionales del trabajo y las necesidades, hábitos, habilidades y demás aspectos personales del trabajador y su entorno social, en cualquier momento puede generar estrés que afecta la salud, la productividad y el trabajo.
          .tarjeta.bg_4.p-4.tb_2(titulo="Peligro<br> biomecánico")
            h4 Peligro biomecánico
            p Es aquella contingencia que involucra agentes o situaciones que tiene que ver con la adecuación del trabajo, o los elementos de trabajo que influyen en la fisionomía humana. Representa los objetos, puestos de trabajo, máquinas, equipos y herramientas cuyo peso, tamaño, forma y diseño pueden provocar sobre esfuerzo, así como posturas y movimientos inadecuados que traen como consecuencia fatiga física y lesiones osteomusculares.
          .tarjeta.bg_4.p-4.tb_3(titulo="Peligros<br> físicos")
            h4 Peligros físicos
            p Son aquellos factores ambientales que dependen de las propiedades físicas del cuerpo, afectan los tejidos y órganos del cuerpo del trabajador y pueden tener efectos adversos dependiendo de la intensidad y duración de la exposición, tales como luz, ruido, vibración, radiación, temperaturas extremas, entre otros.
          .tarjeta.bg_4.p-4.tb_4(titulo="Peligro<br> físico químico")
            h4 Peligro físico químico
            p Se clasifican en esta partida todos los objetos, elementos, sustancias, fuentes de calor que, en determinadas condiciones específicas de inflamabilidad o defectos, pueden provocar un incendio o una explosión y causar daños a la salud y a los bienes. Pueden ocurrir debido a incompatibilidades físicas y químicas durante el almacenamiento de materias primas, presencia de materiales, sustancias combustibles y reactivos químicos.
          .tarjeta.bg_4.p-4.tb_5(titulo="Peligro<br> biológico")
            h4 Peligro biológico
            p Es el grupo de agentes orgánicos, animados o inanimados como los hongos, virus, bacterias, parásitos, pelos, plumas polen, entre otros, presentes en determinados ambientes laborales que pueden desencadenar enfermedades infectocontagiosas, reacciones alérgicas o intoxicaciones al ingresar al organismo.
          .tarjeta.bg_4.p-4.tb_6(titulo="Peligro <br>de tránsito")
            h4 Peligro de tránsito
            p Son aquellas amenazas a las que están expuestas las personas que por el desarrollo de su labor se desplazan en diferentes vías donde hay vehículos en circulación.
          .tarjeta.bg_4.p-4.tb_7(titulo="Peligro<br> público")
            h4 Peligro público
            p Son las circunstancias de origen social y externas a la empresa, a las que se pueden ver enfrentadas las personas por el desarrollo de su labor.
      .col-lg-4
        img.img-a(src='@/assets/curso/temas/tema_1/img_8.png', alt='Texto que describa la imagen')


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4SoE2uWvQdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    h2.mb-3 Tipos de riesgos

    .fondo-3.p-4(data-aos="flip-left").mb-5
      .row.align-items-center
        .col-lg-3
        .col-lg-9.mb-4.mb-md-0
          .bg_5.p-3
            p.mb-0 A partir de la teoría, hay diferentes enfoques en los tipos de riesgos, desde la práctica, lo legal, entre otros. Se puede indicar que, uno de los principales objetivos, está en evitar o reducir, cualquier tipo de riesgo, y si así se decide, asumirlos e implantar las acciones para paliar sus consecuencias o, por el contrario, transferirlos a otras entidades y/o establecer las coberturas adecuadas para cada caso.

    p.mb-5 A continuación, se describen algunos tipos de riesgos:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4").align-items-stretch.d-flex.h-100
      .tarjeta.bg_6.p-4.h-100
        h3 Según su origen:
        ul.lista-ul
          li
            i.fas.fa-check
            | Factores internos.
          li
            i.fas.fa-check
            | Factores externos.

      .tarjeta.bg_6.p-4.h-100
        h3 Según sus características:
        ul.lista-ul
          li
            i.fas.fa-check
            | Riesgos estratégicos.
          li
            i.fas.fa-check
            | Riesgos reputaciones.
          li
            i.fas.fa-check
            | Riesgos de mercado.
          li
            i.fas.fa-check
            | Riesgos operacionales.
          li
            i.fas.fa-check
            | Riesgos comerciales.
          li
            i.fas.fa-check
            | Riesgos financieros.
      .tarjeta.bg_6.p-4.h-100
        h3 Según el grupo de pertenencia:
        ul.lista-ul.mb-0
          li
            i.fas.fa-check
            | Riesgos del azar, catastróficos o extraordinarios.
          li
            i.fas.fa-check
            | Riesgos políticos.
          li
            i.fas.fa-check
            | Riesgos de mercado.
          li
            i.fas.fa-check
            | Riesgos legales y contractuales.
          li
            i.fas.fa-check
            | Riesgos financieros.
          li
            i.fas.fa-check
            | Riesgos comerciales.
          li
            i.fas.fa-check
            | Riesgos en inversiones y proyectos.
      .tarjeta.bg_6.p-4.h-100
        h3 Otras clasificaciones:
        ul.lista-ul
          li
            i.fas.fa-check
            | Riesgos inherentes o residuales.
          li
            i.fas.fa-check
            | Riesgos puros o especulativos.

    h2.mb-3 Valoración de riesgos

    .row.mb-5
      .col-lg-8.mb-4.mb-md-0
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 El proceso de valoración de amenazas es un avance de la determinación de estas en forma sistémica, organizada y asertiva, de un lugar de trabajo, una obra, una construcción, una instalación de plataforma tecnológica, entre otros. Como resultado se listan o se denotan cada uno de ellos, junto con su probabilidad de ocurrencia, según el riesgo, dependiendo de la actividad y el medio en el cual se desarrollen las operaciones. Cuando ya están claramente definidos los peligros que se pueden presentar en los diferentes ambientes, tales como de trabajo, construcciones, proyectos, entre otros; se procede a realizar una determinación de los riesgos que pueden ocurrir dependiendo de la valoración realizada.

      .col-lg-4
        img.img-a(src='@/assets/curso/temas/tema_1/img_10.png', alt='Texto que describa la imagen')

    p.mb-5 Para realizar esta etapa de valoración e identificación de riesgos y peligros de una forma sistémica, se deben desarrollar las siguientes actividades:

    .bg_7.p-4.mb-5
      .row
        .col-lg-6.mb-4.mb-md-0
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span a
              | Seleccionar la sección de la organización  que implementación de la identificación de peligros.
            li
              .lista-ol--cuadro__vineta
                span b
              | Identificar el sitio, lugar o la zona de trabajo.

            li
              .lista-ol--cuadro__vineta
                span c
              | Identificar el proceso de la entidad en el que realiza la caracterización de los peligros.

            li
              .lista-ol--cuadro__vineta
                span d
              | Identificar las tareas ejecutadas en este proceso.

            li
              .lista-ol--cuadro__vineta
                span e
              | Definir si las tareas son rutinarias o no rutinarias.

            li
              .lista-ol--cuadro__vineta
                span f
              | Identificar los peligros para cada tarea.

        .col-lg-6
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span g
              | Describir el peligro identificado en cada una de las actividades, rutinarias y no rutinarias, descritas en los procesos.
            li
              .lista-ol--cuadro__vineta
                span h
              | Determinar los posibles efectos / consecuencias de cada peligro en su peor escenario. Las consecuencias se establecen de acuerdo a las características de los peligros que se han definido para la compañía.

            li
              .lista-ol--cuadro__vineta
                span i
              | Determinar los riesgos latentes de cada proceso en cada área.

            li
              .lista-ol--cuadro__vineta
                span j
              | Con base en la metodología adoptada en el sistema de salud y seguridad en el trabajo en la organización, se establece la valoración de los riesgos.

    h2.mb-3 Medidas de control de riesgos

    .bg_8.mb-5(data-aos="fade-up")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4.bg_1
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_11.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Dentro de una empresa u organización, todos los procesos, desde la recolección de la materia prima, pasando por la producción, hasta la entrega final, están asociados con una serie de amenazas que enfrentan quienes trabajan en dichas áreas. Por lo tanto, las organizaciones deben planificar cómo responder a las amenazas de salud, seguridad y control los riesgos. Este control de riesgos incluye un enfoque jerárquico, estableciendo un paso a paso de acciones para mejorar la salud y la seguridad mediante la reducción o mitigación del mismo.

    p.mb-5 Existen diferentes formas de hacer frente a los distintos tipos de riesgos a los que se enfrenta una organización, en función de sus características. Se dividen en los siguientes seis niveles:

    .row.mb-5
      .col-lg-7.mb-4.mb-md-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Eliminación del riesgo")
            p.mb-0 Esta es la etapa ideal donde la organización puede controlar el riesgo. Este enfoque requiere detener o iniciar actividades o procesos relacionados con el riesgo para eliminarlo completamente. Por ejemplo, el uso de una sustancia peligrosa puede ser riesgosa. Cuando una sustancia se elimina del proceso de fabricación, desaparece, sin embargo, esto puede implicar rediseñar el proceso de fabricación, lo que no siempre es posible, por que implica costos desproporcionadamente altos.

          div(titulo="Sustituir el riesgo")
            p.mb-0 En el caso de no poder eliminar el riesgo, se debe pasar al siguiente nivel de control de riesgos. Es decir, se debe buscar otro método u otro proceso que sea menos riesgoso. Puede incluir la sustitución de tareas, procesos, maquinarias o sustancias, que cumplan función análoga, pero que no representen un riesgo, o por lo menos, que sea menor.

          div(titulo="Aislar el riesgo")
            p.mb-0 En este caso, se toman acciones para eliminar la fuente del riesgo. Pueden ser necesarias medidas para evitar el contacto humano con el riesgo. Cuando la fuente sea un material o sustancia que emita radiaciones o, por ejemplo, vapores tóxicos, una forma de aplicar controles es, diseñar habitaciones seguras a las que solo se pueda acceder con equipos y procedimientos adecuados.


          div(titulo="Controles de ingeniería")
            p.mb-0 Estos pueden aplicarse para cambiar la consecuencia del riesgo. Este paso se enfoca en la aplicación de medidas de protección colectivas, que son las que se utilizan para reducir el riesgo. Los controles de ingeniería se diseñan para que la fuente de riesgo sea bloqueada y anulada. Esto puede incluir sistemas de detección de gases, sistemas de cierre automático, sistemas de ventilación ante la presencia de sustancias peligrosas.

          div(titulo="Controles administrativos")
            p.mb-0 Si el elemento de riesgo persiste después de aplicar los cuatro niveles anteriores, se deben aplicar controles administrativos. Para esto, se debe proporcionar información, orientación, capacitación y seguimiento a la ejecución de los procesos. Un procedimiento documentado o instrucciones de trabajo claras y definidas son un control administrativo. El acceso restringido a ciertas áreas, el manejo de determinadas sustancias o la operación de algunas máquinas, también son ejemplos de controles administrativos.
          div(titulo="Equipos de protección personal")
            p.mb-0 El riesgo aún puede persistir. En este caso, utilizar equipos de protección personal puede garantizar la seguridad del trabajador ante la presencia de los factores determinantes de riesgo residual. Estos equipos incluyen protección para ojos, rostro, manos, antebrazos, extremidades inferiores, estos según sean necesarios.


      .col-lg-5
        img.img-a(src='@/assets/curso/temas/tema_1/img_12.png', alt='Texto que describa la imagen')

    h2.mb-3 Verificación de controles de riesgos

    .row.mb-5
      .col-lg-4.mb-4.mb-md-0(data-aos="fade-up-right")
        img.img-a(src='@/assets/curso/temas/tema_1/img_13.png', alt='Texto que describa la imagen')
      .col-lg-8(data-aos="fade-up-left")
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            p Dentro de la planeación y la implementación del sistema de seguridad y salud en el trabajo, se deben establecer como primera medida, los controles de riesgos establecidos anteriormente, y deben abarcarse los seis niveles. En la etapa de planeación del sistema, se establecen los controles de los riesgos, mediante dotación de elementos de protección, cambios en los procesos de producción, capacitación a los usuarios, entre otros. Es necesario detectar todos los posibles riesgos y saber cuál es el nivel de exposición de los trabajadores a cada uno de ellos. Además, se debe analizar las medidas de control interno, adecuar la transferencia de estos y realizar la elaboración de planes de gestión, según los programas asociados a cada uno. Finalmente, se debe realizar un análisis del nivel de cobertura que existe en la organización.

    p Es fundamental conocer los datos de entrada, entender el negocio y elaborar el mapa de riesgo y pólizas. Los manuales son para implementar un proceso de riesgos de forma efectiva, es necesario ofrecer informes sobre la situación en la que se encuentra. Los informes son necesarios para conocer si se va por el buen camino.

    p.mb-5 Los manuales que se deben realizar son:

    .row.justify-content-center
      .col-lg-10
        img.img-a.mb-5(src='@/assets/curso/temas/tema_1/img_14.svg', alt='Texto que describa la imagen')

        .cajon.color-acento-contenido.p-4
          p.mb-0 Con estos manuales, se realiza la lista de chequeo o las matrices necesarias, en el caso de no tener un sistema de información, se validan los controles. En el caso de existir un sistema de información, seguridad y de salud en el trabajo, este contiene los módulos para realizar la verificación de los controles de los riesgos.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
