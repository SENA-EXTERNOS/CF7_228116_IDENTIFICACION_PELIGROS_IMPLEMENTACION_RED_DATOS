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
          .bg_2.p-3.text-small
            p La definición de la palabra peligro viene del latín periculum, la cual suscita una amenaza. En este caso se establece como riesgo a la contingencia inminente de que suceda algo malo. Esto puede tratarse de una amenaza física, tal como el derrumbamiento de una estructura visiblemente deteriorada, o de una circunstancia abstracta que puede o no presentarse, que depende de la percepción de cada individuo.

            p.mb-0 Uno de los aspectos importantes en el área de salud ocupacional es que se pueda determinar y definir que es un peligro. Dentro de este enfoque, se define el peligro como ese algo que tiene la capacidad de hacerle daño a las personas, a los bienes o al entorno. Este evento no siempre reside específicamente en las cosas, sino en la manera errónea, insegura o negligente, en que se manejan e interactúa con ellas.

    p.mb-5 En el ambiente del proceso de instalación de redes, tanto las eléctricas como de datos, los peligros son latentes, es por esto la importancia que se conozcan a cuáles se va a estar expuestos en los procesos de actualización tecnológica.

    
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 1.1 Identificación de peligros

    .row.justify-content-center.mb-3
      .col-lg-5.mb-4.mb-md-0(data-aos="fade-right")
        img.img-a(src='@/assets/curso/temas/tema_1/img_4.png', alt='Texto que describa la imagen')
      .col-lg-7.text-small(data-aos="fade-left")
        p.p-2 Es el procedimiento sistemático y asertivo que se desarrolla para identificar, localizar y valorar aquellos elementos, amenazas o factores que tienen influencia significativa en la generación de riesgos para la seguridad y salud de las personas o cosas que intervienen en alguna labor o actividad.

        .bg_2.p-2
          p La identificación de peligros, es uno de los pilares fundamentales del diseño del Sistema de gestión de seguridad y salud en el trabajo, convirtiéndose en una de las entradas para la identificación y definición de las actividades a realizar, con el fin de prevenir accidentes o enfermedades de tipo laboral.
        p.p-2 Con la identificación de peligros, se clarifica la oportunidad de visualizar el panorama global de las actividades, zonas, cargos, cantidad de personas, en los cuales existe algún tipo de peligro, y es en la valoración del riesgo en la que se determinará, cuáles son los riesgos a los que se debe priorizar por su impacto o probabilidad de ocurrencia. Dentro de los errores más comunes en el momento de realizar la actividad de identificación de estos, es no realizarla de forma consciente, o dejando de lado muchas actividades que normalmente no se realizan de forma rutinaria.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          p No tener en cuenta las actividades realizadas por los contratistas, ya sean de la entidad o temporales que son ajenos a esta, constituye un error común que posteriormente llevará a tener inconvenientes en la gestión de contratos, ya que, al no haber identificado los peligros de dichas actividades, muy posiblemente no se tendrán las herramientas para definir y solicitar los requisitos al personal contratista que ejecutará la actividad.
 
          p.mb-0 La identificación de peligros, valoración de riesgos y determinación de controles, se debe ver como el mapa de ruta a seguir para el sistema de gestión, dándole la importancia que realmente tiene y no, como un requisito más a cumplir dentro de las actividades del mismo.

    p.mb-5 En el proceso de identificación de peligros es necesario considerar:

    .bg_3
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema_1/img_5.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="10%" y="70%" numero="+")
          p.mb-0 Cómo se organiza el trabajo, factores sociales (incluyendo la carga y horas de trabajo, victimización, acoso e intimidación), liderazgo y la cultura de la organización.
        .tarjeta.color-acento-botones.p-3(x="22%" y="70%" numero="+")
          p.mb-0 Las actividades y las situaciones rutinarias y no rutinarias, incluyendo la consideración de: la infraestructura, los equipos, los materiales, las sustancias y las condiciones físicas del lugar de trabajo.
        .tarjeta.color-acento-botones.p-3(x="35%" y="70%" numero="+")
          p.mb-0 Los incidentes pasados pertinentes, internos o externos a la organización, incluyendo emergencias, y sus causas.
        .tarjeta.color-acento-botones.p-3(x="48%" y="70%" numero="+")
          p.mb-0 Las situaciones de emergencia potenciales.
        .tarjeta.color-acento-botones.p-3(x="60%" y="70%" numero="+")
          p.mb-0 Las personas, incluyendo la consideración de aquellas con acceso al lugar de trabajo y sus actividades, incluyendo trabajadores, contratistas, visitantes y otras personas.
        .tarjeta.color-acento-botones.p-3(x="73%" y="70%" numero="+")
          p.mb-0 Consideración del diseño de las áreas de trabajo, los procesos, las instalaciones, la maquinaria / equipo, los procedimientos operativos y la organización del trabajo, incluyendo su adaptación a las necesidades y capacidades de los trabajadores involucrados.
        .tarjeta.color-acento-botones.p-3(x="86%" y="70%" numero="+")
          p.mb-0 Cambios reales o propuestos en la entidad, sus operaciones, procesos, actividades y su sistema de gestión de la SST.
        .tarjeta.color-acento-botones.p-3(x="98%" y="70%" numero="+")
          p.mb-0 Cambios en el conocimiento de los peligros, y en la información acerca de ellos.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido.mt-5
      h2 1.2 Clasificación de peligros

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
            p Es aquel que se presenta cuando se está realizando alguna modificación o construcción de una obra civil, presentándose cuando las características de diseño, construcción, mantenimiento y deterioro de las instalaciones locativas, pueden ocasionar lesiones a los trabajadores, o incomodidades para desarrollar el trabajo, así como daños a los materiales  de la empresa como pisos, escalera, barandas, plataformas, andamios defectuosos, muros, puertas, ventanas en mal estado, techos en mal estado, superficies deslizantes, entre otros.
          .tarjeta.bg_4.p-4.tb_1(titulo="Peligro<br> psicosocial")
            h4 Peligro psicosocial
            p Es aquel que se presenta como consecuencia de la interacción con el ambiente de trabajo, según las condiciones de la organización laboral y las necesidades, hábitos, capacidades y demás aspectos personales del trabajador y su entorno social, que en un momento dado pueden generar cargas que afectan la salud, el rendimiento en el trabajo y la producción laboral.
          .tarjeta.bg_4.p-4.tb_2(titulo="Peligro<br> biomecánico")
            h4 Peligro biomecánico
            p Es aquella contingencia que involucra agentes o situaciones que tiene que ver con la adecuación del trabajo, o los elementos de trabajo que influyen en la fisionomía humana. Representa los objetos, puestos de trabajo, máquinas, equipos y herramientas cuyo peso, tamaño, forma y diseño pueden provocar sobre esfuerzo, así como posturas y movimientos inadecuados que traen como consecuencia fatiga física y lesiones osteomusculares.
          .tarjeta.bg_4.p-4.tb_3(titulo="Peligros<br> físicos")
            h4 Peligros físicos
            p Son todos aquellos factores ambientales que dependen de las propiedades físicas de los cuerpos que actúan sobre los tejidos y órganos del cuerpo del trabajador y que pueden producir efectos nocivos de acuerdo a la intensidad y tiempo de exposición de los mismos, como iluminación, ruido, vibraciones, radiaciones, temperaturas extremas, entre otros.
          .tarjeta.bg_4.p-4.tb_4(titulo="Peligro<br> físico químico")
            h4 Peligro físico químico
            p En este grupo se incluyen todos los objetos, elementos, sustancias, fuentes de calor, que, en ciertas condiciones especiales de inflamabilidad, combustibilidad o de defectos, pueden desencadenar incendios y / o explosiones y, generar lesiones personales y daños materiales. Pueden presentarse por incompatibilidad fisicoquímica en el almacenamiento de materias primas, presencia de materias y sustancias combustibles, presencia de sustancias químicas reactivas.
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


    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    separador
    #t_1_3.titulo-segundo.color-acento-contenido.mt-5
      h2 1.3 Tipos de riesgos

    .fondo-3.p-4(data-aos="flip-left").mb-5
      .row.align-items-center
        .col-lg-3
        .col-lg-9.mb-4.mb-md-0
          .bg_5.p-3
            p.mb-0 A partir de la teoría, hay diferentes enfoques en los tipos de riesgos, desde la práctica, lo legal, entre otros. Se puede indicar que, uno de los principales objetivos, está en evitar o reducir, en la medida de lo posible, cualquier tipo de riesgo, y si así se decide, asumirlos e implantar las acciones para paliar sus consecuencias o, por el contrario, transferirlos a otras entidades y/o establecer las coberturas adecuadas para cada caso.

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
            | Riesgos del azar, catastróficos o 
          li 
            i.fas.fa-check
            | extraordinarios.
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

    separador
    #t_1_4.titulo-segundo.color-acento-contenido.mt-5
      h2 1.4 Valoración de riesgos

    .row.mb-5
      .col-lg-8.mb-4.mb-md-0
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 El proceso de valoración de amenazas es un avance de la determinación de estas en forma sistémica, organizada y asertiva, de un lugar de trabajo, una obra, una construcción, una instalación de plataforma tecnológica, entre otros. Como resultado se listan o se denotan cada uno de ellos, junto con su probabilidad de ocurrencia, según el riesgo, dependiendo de la actividad y el medio en el cual se desarrollen las operaciones. Cuando ya están claramente definidos los peligros que se pueden presentar en los diferentes ambientes, tales como de trabajo, construcciones, proyectos, entre otros; se procede a realizar una determinación de los riesgos que pueden ocurrir dependiendo de la valoración realizada.

      .col-lg-4
        img.img-a(src='@/assets/curso/temas/tema_1/img_10.png', alt='Texto que describa la imagen')

    p.mb-5 Para realizar esta etapa de valoración e identificación de riesgos y peligros de una forma sistémica, se deben desarrollar las siguientes actividades:

    .bg_7.p-4
      .row
        .col-lg-6.mb-4.mb-md-0
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span a
              | Seleccionar la sección de la entidad que realiza la identificación de peligros.
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

    separador
    #t_1_5.titulo-segundo.color-acento-contenido.mt-5
      h2 1.5 Medidas de control de riesgos

    .bg_8.mb-5(data-aos="fade-up")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4.bg_1
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_11.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0.text-small En una empresa o cualquier organización, todos los procesos, desde la adquisición de materia prima hasta la producción y entrega final, implican una serie de riesgos a los que están expuestas las personas que trabajan en dichas áreas. Por ello, las organizaciones deben planificar cómo abordar los riesgos relacionados con la seguridad y la salud en el trabajo y el control de riesgos. Este control de riesgos sugiere un enfoque paso a paso, siguiendo una jerarquía de acciones que tienen por propósito mejorar la seguridad y la salud ocupacional, reduciendo o mitigando los riesgos. 

    p.mb-5 Existen diferentes formas de abordar los distintos riesgos a los que la organización está expuesta de acuerdo con sus características. Estas se estructuran en relación a los siguientes seis niveles:

    .row.mb-5
      .col-lg-7.mb-4.mb-md-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Eliminación del riesgo")
            p.mb-0 Esta es la etapa ideal que puede tomar una organización para controlar el riesgo. Este enfoque requiere detener, o no iniciar las actividades o los procesos que implican el riesgo, eliminándolo por completo. Por ejemplo, utilizar una sustancia peligrosa puede significar un riesgo. Al eliminar la sustancia del proceso de producción, este desaparece. Sin embargo, esto puede implicar rediseñar el proceso de producción, lo cual no siempre es posible, o conlleva costes excesivamente elevados.

          div(titulo="Sustituir el riesgo")
            p.mb-0 En el caso de no poder eliminar el riesgo, se debe ir al siguiente nivel de control de riesgos, buscar otro método u otro proceso que sea menos arriesgado. Puede incluir la sustitución de tareas, procesos, maquinarias o sustancias, que cumplan función análoga, pero que no representen un riesgo, o por lo menos, que sea menor.

          div(titulo="Aislar el riesgo")
            p.mb-0 En este caso, se ponen en práctica acciones para eliminar la fuente del riesgo en sí. Es posible que se requieran medidas que eviten que las personas entren en contacto con ella. En el caso de que esta fuente sea un material o una sustancia que emita radiación, o vapores tóxicos, por ejemplo. Una forma de aplicar el control es diseñar recintos seguros, a los cuales solo se pueda acceder utilizando equipos y protocolos adecuados.

          div(titulo="Controles de ingeniería")
            p.mb-0 Estos pueden aplicarse para cambiar la consecuencia del riesgo. Este paso se enfoca en la aplicación de medidas de protección colectivas, que son las que se utilizan para reducir el riesgo. Los controles de ingeniería se diseñan para que la fuente de riesgo sea bloqueada y anulada. Esto puede incluir sistemas de detección de gases, sistemas de cierre automático, sistemas de ventilación ante la presencia de sustancias peligrosas.

          div(titulo="Controles administrativos")
            p.mb-0 Cuando el factor de riesgo persiste, una vez aplicados los cuatro niveles de control de riesgo anteriores, se deben aplicar controles administrativos. Esto requiere proporcionar información, instrucciones, capacitación o supervisión a la ejecución de los procesos. Un procedimiento documentado o instrucciones de trabajo claras y definidas, son controles administrativos. El acceso restringido a determinadas áreas, a la manipulación de determinadas sustancias, o a la operación de ciertas máquinas, son, igualmente, ejemplos de controles administrativos.
          div(titulo="Equipos de protección personal")
            p.mb-0 El riesgo aún puede persistir. En este caso, utilizar equipos de protección personal puede garantizar la seguridad del trabajador ante la presencia de los factores determinantes de riesgo residual. Estos equipos incluyen protección para ojos, rostro, manos, antebrazos, extremidades inferiores, estos según sean necesarios.


      .col-lg-5
        img.img-a(src='@/assets/curso/temas/tema_1/img_12.png', alt='Texto que describa la imagen')

    separador
    #t_1_6.titulo-segundo.color-acento-contenido.mt-5
      h2 1.6 Verificación de controles de riesgos

    .row.mb-5
      .col-lg-4.mb-4.mb-md-0(data-aos="fade-up-right")
        img.img-a(src='@/assets/curso/temas/tema_1/img_13.png', alt='Texto que describa la imagen')
      .col-lg-8(data-aos="fade-up-left")
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto.text-small
            p Dentro de la planeación y la implementación del sistema de seguridad y salud en el trabajo, se deben establecer como primera medida, los controles de riesgos establecidos anteriormente, y deben abarcarse los seis niveles. En la etapa de planeación del sistema se establecen los controles de los riesgos, mediante dotación de elementos de protección, cambios en los procesos de producción, capacitación a los usuarios de los métodos con gran riesgo, entre otros. Es necesario detectar todos los posibles riesgos y se debe saber cuál es el nivel de exposición de los trabajadores en cada uno. Además de analizar las medidas de control interno y adecuar la transferencia de estos y realizar la elaboración de planes de gestión, según los programas asociados a cada uno. Finalmente, se deberá realizar un análisis del nivel de cobertura que existe en la organización.

    p Es fundamental conocer los datos de entrada que se tiene, se debe entender el negocio, la elaboración de mapas de riesgo y pólizas. Los manuales son para implementar un proceso de riesgos de forma efectiva, es necesario ofrecer informes sobre la situación en la que se encuentra. Los informes son necesarios para conocer si se va por el buen camino. 

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
