<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas y métodos de análisis
      
    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3  
        p En los sistemas productivos agropecuarios, la planificación y gestión integrada de recursos es fundamental para garantizar la eficiencia, sostenibilidad y rentabilidad. Esta gestión involucra la administración coordinada de recursos clave como el agua, el suelo, la energía y los insumos agrícolas, buscando maximizar la producción mientras se minimizan los impactos negativos sobre el medio ambiente.  
        .bg2.p-4.brad
          p.mb-0 La integración de herramientas tecnológicas y estrategias de planificación basadas en datos permite a los productores tomar decisiones informadas, adaptarse a condiciones cambiantes y optimizar el uso de los recursos disponibles. Este capítulo abordará la importancia de la planificación agrícola, los modelos de gestión integrada y las estrategias para optimizar recursos en sistemas productivos automatizados.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/86.png' alt='')


    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1 Importancia de la planificación basada en datos 
    p La planificación agrícola basada en datos es un enfoque que utiliza información cuantitativa y cualitativa recopilada de diversas fuentes, como sensores, SIG y análisis históricos, para tomar decisiones estratégicas en el manejo de los sistemas productivos, siendo su objetivo el asegurar que cada recurso se utilice de manera óptima, alineando las prácticas agrícolas con las condiciones específicas del entorno y las necesidades del mercado.
    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Ventajas de la planificación basada en datos  

    .row.justify-content-center.text-center.mb-4
      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/87.png' alt='')
          h5 Toma de decisiones informada
          p Los datos precisos y actualizados permiten ajustar las prácticas de manejo en tiempo real.

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/88.png' alt='')
          h5 Reducción de riesgos 
          p La planificación basada en datos ayuda a anticipar problemas como sequías, plagas o fluctuaciones en el mercado.

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/89.png' alt='')
          h5 Optimización de recursos 
          p Permite un uso eficiente de insumos, reduciendo costos y mejorando la sostenibilidad.  

    Separador 
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 Modelos de gestión integrada de recursos

    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/90.png' alt='')          
      .col-lg-7.my-lg-0.my-3
        .row.justify-content-center.align-items-center.bg3.p-4.brad.h-100
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/91.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 La gestión integrada de recursos implica la administración coordinada de los distintos insumos y elementos naturales que son esenciales para la producción agropecuaria. Este enfoque busca equilibrar la producción con la conservación de recursos, promoviendo prácticas agrícolas sostenibles.


    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Gestión integrada del agua
    p El agua es un recurso crítico en los sistemas productivos, especialmente en contextos de creciente escasez. La gestión integrada del agua incluye estrategias como el riego eficiente, la captación de agua de lluvia y el reciclaje de aguas residuales.
    .row.bg8.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .bgw.brad.p-5.my-5
              CarouselRED(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Tecnologías clave
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-check-circle.color1
                        span #[b Sistemas de riego automatizado:] basados en sensores de humedad del suelo y datos climáticos.
                      li 
                        i.fas.fa-check-circle.color1
                        span #[b Modelos de predicción de demanda hídrica:] calculan las necesidades de riego en función de las condiciones específicas del cultivo y el clima.                
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/92.png', alt='')              
               
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Beneficios
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-check-circle.color1
                        span Reducción en el consumo de agua.
                      li 
                        i.fas.fa-check-circle.color1
                        span Mejora en la eficiencia del riego.
                      li 
                        i.fas.fa-check-circle.color1
                        span Conservación de recursos hídricos a largo plazo.                
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/93.png', alt='')  

    .row.justify-content-center.mb-4
      .col-lg-8.my-3 

        .row.justify-content-start.mt-5.mb-4
          .col-auto
            .list
              .list__item
                .list__item__icon
                  img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
              .list__txt.bgicon.brad.p-0.px-4
                h4.mb-1 Gestión integrada del suelo                  
        p El manejo sostenible del suelo es fundamental para mantener la productividad y la salud de los sistemas agrícolas. Esto incluye prácticas como la rotación de cultivos, la incorporación de materia orgánica y el monitoreo constante de la fertilidad del suelo.
        .bg3.p-4.brad
          h5 Tecnologías clave
          ol.lista-ol--cuadro.fa-ul
            li 
              .lista-ol--cuadro__vineta
                span.text-black 1
              span #[b Análisis geoespacial del suelo:] utilizando SIG para identificar zonas con diferentes niveles de fertilidad.
              

            li 
              .lista-ol--cuadro__vineta
                span.text-black 2
              span #[b Sensores de calidad del suelo:] monitorean pH, contenido de nutrientes y salinidad.                        
      .col-lg-4.my-3 
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/94.png' alt='')  

    h5 Beneficios

    .row.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/95.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Mantenimiento de la estructura y fertilidad del suelo.  

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/96.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Prevención de la erosión y la salinización.

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/97.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Optimización de la aplicación de fertilizantes.

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Gestión integrada de la energía

    p El consumo de energía en los sistemas productivos puede ser significativo, especialmente en actividades como el bombeo de agua, la climatización de invernaderos y el funcionamiento de maquinaria agrícola.

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/98.png' alt='')           
      .col-lg-8.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Estrategias de eficiencia energética") 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Uso de energías renovables: como paneles solares y biodigestores para reducir la dependencia de combustibles fósiles.
              li 
                i.fas.fa-check-circle.color1
                span Automatización de procesos energéticamente intensivos: optimización del consumo en sistemas de riego y ventilación.                                                
          div(titulo="Beneficios") 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Reducción de costos operativos.
              li 
                i.fas.fa-check-circle.color1
                span Disminución de la huella de carbono del sistema productivo.
              li 
                i.fas.fa-check-circle.color1
                span Contribución a la sostenibilidad ambiental.

    Separador 
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.3 Optimización de recursos en sistemas productivos automatizados

    p La automatización permite un manejo más preciso y eficiente de los recursos en los sistemas productivos. A través del uso de tecnologías avanzadas, es posible ajustar las prácticas de manejo en función de las condiciones específicas de cada zona dentro de una parcela.

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Uso de sensores para optimización

    .row.bg8.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .bgw.brad.p-5.my-5
              CarouselRED(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Uso de sensores para optimización
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-check-circle.color1
                        span #[b Sensores de humedad y calidad del suelo:] proveen datos en tiempo real que permiten ajustar la aplicación de riego y fertilizantes según las necesidades específicas del cultivo.
                      li 
                        i.fas.fa-check-circle.color1
                        span #[b Sensores climáticos:] ayudan a prever condiciones adversas, como heladas o sequías, permitiendo una respuesta proactiva.             
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/99.png', alt='')                   

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Beneficios:
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-check-circle.color1
                        span Reducción del desperdicio de insumos.
                      li 
                        i.fas.fa-check-circle.color1
                        span Mejora en la productividad y uniformidad del cultivo.
                      li 
                        i.fas.fa-check-circle.color1
                        span Menor impacto ambiental.               
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/100.png', alt='')


    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Plataformas de análisis de datos

    p El análisis de datos recopilados por sensores y otras fuentes es muy importante para la toma de decisiones. Plataformas como SCADA y software de agricultura de precisión integran estos datos, facilitando su interpretación.

    h5 Funciones clave
    .row.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/101.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Identificación de patrones y tendencias.

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/102.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Generación de alertas y recomendaciones.

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/103.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Simulación de escenarios para evaluar diferentes estrategias de manejo.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5. 
          span Resumen herramientas y métodos de análisis en sistemas productivos y agropecuarios
        .bgfig.p-4.mb-1
          img.img-a.img-t(src='@/assets/curso/temas/104.svg' alt='la figura 5 se denomina «Resumen herramientas y métodos de análisis en sistemas productivos y agropecuarios». Se divide en cuatro ramas principales que abarcan la planificación y gestión integrada de recursos, herramientas tecnológicas para decisiones informadas, modelos de gestión integrada, y estrategias de optimización de recursos en sistemas automatizados. Cada rama se desglosa en subtemas específicos relacionados con la gestión agropecuaria, se adjunta link, para su mejor observación. Https://www.mindomo.com/mindmap/0feb05e6a0214fe3b61592f9b7169a31')  

        figcaption.mb-5 Fuente: OIT, 2024.                                 
</template>

<script>
export default {
  name: 'Tema5',
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
