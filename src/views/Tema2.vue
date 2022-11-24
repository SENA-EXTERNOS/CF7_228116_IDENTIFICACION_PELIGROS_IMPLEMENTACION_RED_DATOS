<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Responsabilidad civil

    .fondo-4.p-4(data-aos="flip-left").mb-5
      .row.align-items-center
        .col-lg-3
        .col-lg-9.mb-4.mb-md-0
          .bg_5.p-3
            p.mb-0.text-small La responsabilidad civil consiste en la obligación de restituir el bien, reparar o indemnizar por los daños o perjuicios que los hechos hayan podido provocar. Así pues, las normas que regulan la responsabilidad civil se orientan, a la satisfacción de un interés privado del titular, la persona física o jurídica que haya resultado perjudicada por la comisión de los delitos. La indemnización o reparación en este aspecto es de tipo económica, de tal forma que se trata de resarcir el daño que se hace, cuantificado de una manera monetaria que se le dará al afectado. Para que esta responsabilidad se genere, debe comprobarse la culpa o negligencia de quien ha ocasionado el daño. En el Código Civil Colombiano (2022), se regula la responsabilidad común por los delitos y culpas. 

    .caj_1
      .bloque-texto-b.color-primario.p-4
        .bloque-texto-b__texto
          p De acuerdo al Código Civil Colombiano (2022), en su artículo 2343, toda persona que cause un daño está obligada a indemnizar al afectado. Esta obligación se extiende a los herederos del causante. Sin embargo, quienes reciban provecho del dolo, aun cuando no haya tenido participación, también son responsables. No obstante, esta obligación solo se extiende hasta la concurrencia del valor reportado. La responsabilidad civil se evidencia en la celebración de un contrato. Cuando una de las partes incumple una cláusula, o bien todo el acuerdo, se produce un daño a la contraparte, inmediatamente se genera una responsabilidad civil.

    p.px-4.mb-5 También es posible que la responsabilidad civil nazca de un daño ocasionado, sin que haya un contrato de por medio. A este respecto, se originan varios tipos de responsabilidad civil:

    .row.mb-5.align-items-center
      .col-lg-7.mb-4.mb-md-0
        .tarj_1.p-4
          h5 Responsabilidad solidaria.
          p.mb-0 Cuando el delito o la culpa implican a más de una persona, cada uno de los causantes tendrá una responsabilidad solidaria por el perjuicio ocasionado por el mismo delito. Así lo establece el artículo 2344 del Código Civil Colombiano (2022). Pero también debe considerarse las excepciones a este caso, establecidas en el artículo 2350 y 2355 del mismo código.
        .tarj_2.p-4
          h5 Responsabilidad por daños causados por impúberes.
          p.mb-0 El artículo 2346 del Código Civil Colombiano (2022), regula la responsabilidad de todo menor de edad que cause un daño o cometa un delito. A este respecto, el nuevo texto señala que el menor no puede ser imputado por un delito. De manera que el responsable será aquella persona a cuyo cargo esté el menor, solo si se puede comprobar la negligencia de este.
        .tarj_3.p-4
          h5 Responsabilidad de padres por daños ocasionados por sus hijos.
          p.mb-0 Todo padre será responsable de los delitos y culpas causadas por hijos menores, siempre y cuando se compruebe una mala educación y hábitos viciosos que se han permitido adquirir. Asimismo, lo establece el código civil en su artículo 2348 del Código Civil Colombiano (2022).
        .tarj_2.p-4
          h5 Responsabilidad civil por trabajadores.
          p.mb-0 Cualquier daño ocasionado por trabajadores de una empresa recaerá en culpa del empleador o dueño de esta. La excepción a la regla nace, cuando se comprueba, que el trabajador actuó de modo impropio, o bien, que el empleador no tenía medios para impedir el daño, en cuyo caso, la responsabilidad civil será plenamente del trabajador.
      .col-lg-5.z_in
        img.img-a.mar_im(src='@/assets/curso/temas/tema_2/img_2.png', alt='Texto que describa la imagen')

    .bg_9.mb-5(data-aos="fade-up")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4.bg_10
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_3.png')})`}"
        )
        .bloque-texto-g__texto.p-4.text-small
          p La responsabilidad en un país también se encuentra regido por la norma y la responsabilidad penal.
          <br>
          <br>
          p Norma: en cada país, hay un código que establece las normas que regulan la responsabilidad civil, en el caso de Colombia, es el código civil colombiano (2022). Este es un conjunto de normas legales unitarias, sistematizadas y ordenadas sobre el derecho privado. Por lo tanto, se trata de un texto legal que regula las relaciones civiles entre las personas (tanto físicas como jurídicas).
          <br>
          <br>
          p.mb-0 Responsabilidad penal: es el efecto jurídico derivado de la comisión de un hecho tipificado en una ley penal por un sujeto, y siempre que dicho hecho sea contrario al orden jurídico, es decir, sea antijurídico, además de punible.

    p Las acciones humanas (entendidas como voluntarias) que lesionen o generen un riesgo de lesión a un bien protegido por el ordenamiento jurídico (por ejemplo, la vida, integridad física, libertad, honor, orden público, entre otros), así como la comisión de un delito o falta generan responsabilidad penal.

    .caj_2.mb-3
      .bloque-texto-b.color-acento-contenido.p-1
        .bloque-texto-b__texto
          p En esta responsabilidad se define la imposición de una pena, que bien puede ser privativa de libertad (como la pena de prisión o la localización permanente), privativa de otros derechos (como el derecho a portar armas, el derecho a conducir vehículos a motor, el derecho a residir en un lugar determinado, entre otros), pudiendo también consistir dicha pena en una multa pecuniaria.

    p.mb-5 Tipos de responsabilidad penal:

    .row.mb-5(data-aos="zoom-out-down")
      .col-lg-8.mb-4.mb-md-0
        TabsA.color-acento-botones.mb-5
          .tarjeta.bg_4.p-4(titulo="Común")
            h4 Común
            p.mb-0 Cuando el delito cometido puede ser realizado por cualquier individuo, como, por ejemplo: el robo, el abuso sexual o el homicidio.
          .tarjeta.bg_4.p-4.tb(titulo="Especial")
            h4 Especial
            p.mb-0 Cuando el delito es cometido por un funcionario público aprovechándose de su condición, por ejemplo: el peculado (malversación de caudales públicos), la prevaricación o la concusión.
          .tarjeta.bg_4.p-4.tb_1(titulo="Norma de responsabilidad penal")
            h4 Norma de responsabilidad penal
            p.mb-0 Las normas son el conjunto de reglas que conforman el marco de la responsabilidad, se denomina Código penal colombiano (2022). Es un código que recoge las penas aplicables a toda persona que cometa algún delito. Al igual que otro tipo de códigos (como el Código civil), se caracteriza por contener de manera sistemática y unitaria un grupo de reglas legales sobre una materia concreta. En el Código penal se definen los actos que están tipificados como delitos y se determinan las penas que corresponden.
          .tarjeta.bg_4.p-4.tb_2(titulo="Responsabilidad administrativa")
            h4 Responsabilidad administrativa
            p Se define responsabilidad administrativa como el deber de responder por daños o perjuicios causados por una infracción en el cumplimiento de una norma. Las acciones de la administración generan riesgos, y posibles daños sobre las personas. Para que esos daños residuales se cubran cuando son procurados pero inevitables, se configura la responsabilidad administrativa. Exigir la responsabilidad administrativa es la aplicación del Estado de derecho, quien impone al ordenamiento jurídico que sea garantizador. Se funda en el principio de solidaridad, ya que no es justo que un solo sujeto lesionado en sus derechos, haga frente a consecuencias lesivas que deriven de los actos del poder público.
            p.mb-0 En el caso de las entidades privadas, su órgano director es el que define las acciones que generan responsabilidad administrativa y que se deben subsanar como consecuencia de algún incumplimiento de esta índole. En el caso de la función pública, hay un marco general de leyes que abarcan y regulan los comportamientos y actuaciones de los empleados públicos, y las consecuencias administrativas y punitivas de estos.
          .tarjeta.bg_4.p-4.tb_3(titulo="Responsabilidad social")
            h4 Responsabilidad social
            p.mb-0 La responsabilidad social establece una percepción positiva o negativa de un individuo o grupo y el impacto que tiene su interacción con la sociedad. En esta hay una correlación directa con la ética y la moral, dado que las decisiones que toman tanto los individuos como las sociedades o grupos en general tienen consecuencias sobre el resto y hay que desarrollar una conciencia de conjunto.

      .col-lg-4
        img.img-a(src='@/assets/curso/temas/tema_2/img_4.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-7    
        .cajon.color-acento-contenido.p-4
          p.mb-0 Con base en lo anterior, se puede precisar que la responsabilidad penal es la obligación que tiene un integrante de la sociedad, respecto a otros miembros o al grupo en su conjunto. Esto quiere decir que aquello que hace una persona, puede tener consecuencias, ya sean negativas o positivas, en la comunidad, de tal forma que el sujeto debe responder por ellas.

    p.mb-5 Tipos de responsabilidad social:

    .row.mb-5.acor
      .col-lg-5.mb-4.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_2/img_5.png', alt='Texto que describa la imagen')
      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Responsabilidad social empresarial (RSE)")
            p.mb-0 De acuerdo con el Centro mexicano de filantropía (2022), la responsabilidad social empresarial, es el compromiso consciente y congruente de cumplir integralmente con la finalidad de la empresa, tanto en lo interno como en lo externo, considerando las expectativas económicas, sociales y ambientales de todos sus participantes, demostrando respeto por la gente, los valores éticos, la comunidad y el medio ambiente, contribuyendo así a la construcción del bien común. Por lo tanto, esta es una visión de negocios que integra el respeto por las personas, los valores éticos, la comunidad y el medio ambiente con la gestión misma de la empresa, independientemente de los productos o servicios que esta ofrece, del sector al que pertenece, de su tamaño o nacionalidad.
          div(titulo="Responsabilidad social ambiental (RSA)")
            p.mb-0 Es una decisión positiva hacia la ecología y el medio ambiente. Busca reducir o evitar el daño a otras especies y a la naturaleza. También, busca acciones en beneficio de las futuras generaciones, por las acciones o las no acciones de otro individuo o grupo.
          div(titulo="Responsabilidad social universitaria (RSU)")
            p.mb-0 Es la respuesta de las universidades para formar ciudadanos con acciones responsables con su entorno, que deben generar ideas creativas para ayudar a solucionar problemas sociales y ambientales.
          div(titulo="Responsabilidad social gubernamental")
            p.mb-0 Sucede cuando el gobierno asegura y promueve iniciativas en beneficio de las mayorías, a través de su gestión. Lo anterior debe derivar en leyes, reglamentos, normas en el país que contribuyan al bienestar de los ciudadanos.
          div(titulo="Responsabilidad social individual")
            p.mb-0 Es responder por las acciones propias, cumplir las obligaciones del rol que cada uno desempeña en la sociedad; al mismo tiempo que compromiso y respeto con el prójimo y el entorno familiar, social y mundial.

    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
            p.mb-0 Aprendiz, ha finalizado de manera satisfactoria el estudio de las temáticas del componente formativo, se invita a que desarrolle la actividad didáctica y revise los materiales complementarios para que afiance los conocimientos frente al tema de identificación de los peligros y riesgos en la implementación de la red de datos.


</template>

<script>
export default {
  name: 'Tema2',
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
