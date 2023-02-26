<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo-1.px-5.py-4.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4.bg_1
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0.text-small Estimado aprendiz, bienvenido a este componente formativo, en el cual se desarrollarán las competencias necesarias para que pueda ser actor principal en los eventos de gestión y control de los riesgos, que se generan en los diseños de montajes de redes de datos y eléctricas. Dentro de este proceso, aprenderá conceptos de riesgos, peligros, responsabilidades, entre otros, que se tienen cuando se realiza alguna implementación de este tipo. Este es un pilar importante dentro de los conocimientos necesarios, pues será miembro importante dentro de los proyectos de actualización tecnológica que tengan como base la instalación de redes de datos. A continuación, encontrará un video introductorio en el cual podrá conocer de manera general todas las temáticas a desarrollar dentro de este componente formativo.

    p.mb-5 A continuación, encontrará un video introductorio en el cual podrá conocer de manera general todas las temáticas a desarrollar dentro de este componente formativo.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
