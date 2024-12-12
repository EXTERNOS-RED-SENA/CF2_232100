<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/1.png' alt='')    
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-center.align-items-center.bg2.p-4.brad.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/2.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 El siguiente diagrama proporciona una representación visual sintetizada de los principales temas abordados en el componente formativo sobre Automatización y Monitoreo de Sistemas Productivos Agropecuarios. Este mapa conceptual ha sido diseñado para facilitar la comprensión de las interrelaciones entre las diferentes áreas temáticas del componente.
        p En el núcleo del diagrama se encuentra el concepto principal de Automatización y Monitoreo, del cual se desprenden temas fundamentales como la importancia de la tecnología en el sector agropecuario, las herramientas teóricas y prácticas para implementar sistemas automatizados, y las tecnologías utilizadas en el monitoreo y control de procesos. Cada uno de estos temas se desarrolla a través de subtemas clave que incluyen la caracterización de sistemas productivos, el monitoreo de variables críticas (como humedad y temperatura), y el uso de tecnologías como sensores IoT y plataformas SCADA.
        .row.justify-content-center.align-items-center.mb-4
          .col.pt-lg-0.pt-md-4
            .bg1.b-dash.p-3.brad
              p.mb-0 El mapa también destaca los beneficios prácticos de la automatización, como la optimización del proceso productivo, la toma de decisiones informadas basada en datos en tiempo real, y la detección temprana de problemas. Además, incluye ejemplos de estudios de caso en cultivos específicos y sistemas pecuarios, proporcionando aplicaciones prácticas que demuestran cómo la automatización mejora la productividad y la sostenibilidad.
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/3.png' alt='')

    p.mb-5 Finalmente, el diagrama subraya la necesidad de estar preparados para los retos del sector agropecuario moderno, promoviendo la gestión eficiente y sostenible de los recursos. Este mapa conceptual actúa como una guía visual, ayudando al aprendiz a conectar los conceptos teóricos con su aplicación práctica en el campo.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La Figura 6 se denomina «Síntesis temática del componente». Presenta un mapa mental sobre automatización y monitoreo de sistemas productivos agropecuarios, se ramifica en ocho áreas principales que abarcan: la importancia de la tecnología, herramientas teóricas y prácticas, tecnologías utilizadas (como IoT y SCADA), optimización de procesos, beneficios del monitoreo, estudios de caso específicos, normativas y buenas prácticas, y preparación para retos del sector agropecuario moderno. Cada rama incluye subtemas detallados sobre aspectos específicos de la automatización y el monitoreo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
