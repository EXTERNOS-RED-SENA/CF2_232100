<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Aplicación práctica del monitoreo y automatización

    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-center.align-items-center.bg3.p-4.brad.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/105.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 La aplicación práctica del monitoreo y la automatización es el paso clave para transformar el conocimiento teórico en soluciones concretas que optimicen la gestión de los sistemas productivos agropecuarios. Este capítulo se centra en la implementación de las tecnologías y estrategias estudiadas previamente, destacando cómo estas pueden integrarse de manera efectiva en diversos contextos productivos.     
        p A través de estudios de caso y actividades prácticas, se explorará el uso de sensores, plataformas de análisis de datos y sistemas automatizados para monitorear variables clave y mejorar la toma de decisiones. Además, se presentarán herramientas y metodologías que permiten evaluar la efectividad de las soluciones implementadas, garantizando una mejora continua en los sistemas productivos.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/106.png' alt='')  


    Separador 
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.1 Estudios de caso: implementación exitosa de sistemas automatizados
    p Los estudios de caso son fundamentales para comprender cómo se aplican las tecnologías de monitoreo y automatización en contextos reales. A través del análisis de experiencias exitosas, los estudiantes pueden entender la relación entre la teoría y la práctica, identificar las ventajas y desafíos de las implementaciones tecnológicas, y aprender de las estrategias utilizadas para superar obstáculos.

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Caso 1: monitoreo agroclimático en cultivos de arroz  

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/107.png' alt='')           
      .col-lg-8.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Contexto") En regiones donde la variabilidad climática es alta, los cultivos de arroz enfrentan desafíos relacionados con el suministro de agua y la gestión de enfermedades. La implementación de sensores IoT permite un monitoreo constante de variables clave como la humedad del suelo y la temperatura.

          div(titulo="Solución") 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Sensores de humedad y temperatura instalados en puntos estratégicos de la parcela.
              li 
                i.fas.fa-check-circle.color1
                span Plataforma SCADA para el análisis de datos en tiempo real y control automatizado del riego.

          div(titulo="Resultados") 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Reducción del consumo de agua en un 20%. (gracias al riego optimizado.)
              li 
                i.fas.fa-check-circle.color1
                span Mejora del rendimiento del cultivo en un 15%. (debido a un manejo más eficiente del agua y la prevención de estrés hídrico.)        

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Caso 2: automatización en la producción avícola

    .row.justify-content-center
      .col-lg-8.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Contexto") En sistemas avícolas, las condiciones ambientales como la temperatura y la calidad del aire influyen directamente en el bienestar y productividad de las aves. La automatización de estos factores puede prevenir enfermedades y mejorar la conversión alimenticia.

          div(titulo="Solución") 
            p Instalación de sensores ambientales y un sistema automatizado de control de ventilación y calefacción. 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Sensores ambientales para medir la temperatura, humedad y niveles de amoníaco.
              li 
                i.fas.fa-check-circle.color1
                span Sistema automatizado de ventilación y calefacción controlado por una plataforma SCADA.

          div(titulo="Resultados") 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Mejora en la conversión alimenticia de las aves.
              li 
                i.fas.fa-check-circle.color1
                span Reducción de enfermedades respiratorias en un 30%. (debido a un ambiente más estable y saludable.)
              li 
                i.fas.fa-check-circle.color1
                span Incremento en la productividad de las aves, con una mejora en la conversión alimenticia del 10%.                                                    
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/108.png' alt='')  

    Separador 
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.2 Monitoreo de variables y análisis de resultados
    p El monitoreo de variables y el análisis de resultados son pilares fundamentales para la gestión eficiente de los sistemas productivos agropecuarios. En un entorno remoto, es necesario que los aprendices comprendan cómo se recopilan, procesan y analizan los datos, y cómo estos se traducen en decisiones estratégicas. Este apartado aborda los conceptos teóricos detrás del monitoreo y el análisis, destacando la importancia de interpretar datos para optimizar los recursos y mejorar la productividad. 


    .row.justify-content-center.mb-4
      .col-lg-8.my-3

        .row.justify-content-start.mt-5.mb-4
          .col-auto
            .list
              .list__item
                .list__item__icon
                  img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
              .list__txt.bgicon.brad.p-0.px-4
                h4.mb-1 Fundamentos del monitoreo de variables

        .bg2.p-4.brad
          p El monitoreo implica la observación continua o periódica de variables clave mediante tecnologías avanzadas como sensores IoT y plataformas SCADA. Estas herramientas recopilan datos sobre variables agroclimáticas, del suelo y productivas, permitiendo a los productores anticipar problemas y ajustar sus estrategias.

          p Beneficios del monitoreo de variables:

          ol.lista-ol--cuadro.fa-ul
            li 
              .lista-ol--cuadro__vineta
                span.text-black 1
              span #[b Detección temprana de problemas:] como estrés hídrico o condiciones adversas para el cultivo.


            li 
              .lista-ol--cuadro__vineta
                span.text-black 2
              span #[b Optimización de recursos:] basada en datos precisos de necesidades específicas de riego, fertilización y control de plagas.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 3
              span #[b Mejoras en la sostenibilidad:] al minimizar el desperdicio de insumos y reducir el impacto ambiental.

      .col-lg-4.my-3 
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/109.png' alt='') 

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Interpretación de datos en plataformas SCADA

    p Las plataformas SCADA recopilan y presentan datos en tiempo real, permitiendo a los usuarios analizar el comportamiento de las variables y realizar ajustes inmediatos. Estas plataformas son esenciales para tomar decisiones basadas en datos y mejorar la eficiencia de los procesos productivos.

    h5 Conceptos clave:   

    .row.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/110.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Visualización de datos históricos y en tiempo real.

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/111.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Detección de tendencias y anomalías.

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/112.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Generación de alertas para condiciones críticas.

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Análisis geoespacial con drones y SIG
    p El uso de drones y SIG proporciona una perspectiva detallada de la variabilidad dentro de una parcela, permitiendo analizar datos espaciales con precisión. Estos datos se utilizan para identificar zonas con bajo rendimiento, estrés hídrico o infestaciones.

    h5 Aplicaciones teóricas del análisis geoespacial:   

    .row.justify-content-center.text-center.mb-4
      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/113.png' alt='')       
          .p-4
            h5 Índices de vegetación como NDVI
            p.mb-0 indicadores de la salud del cultivo.

      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/114.png' alt='')       
          .p-4
            h5 Mapeo de productividad
            p.mb-0 Identificación de áreas críticas dentro de una parcela.

      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/115.png' alt='')       
          .p-4
            h5 Planificación de estrategias de manejo específico por sitio (MSS).
              
    Separador 
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.3 Vigilancia tecnológica y GNSS en sistemas productivos

    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/116.png' alt='')     
      .col-lg-7.my-lg-0.my-3
        p La vigilancia tecnológica es el proceso de mantenerse actualizado sobre los avances en tecnologías aplicadas a la agricultura. En un entorno agrícola altamente competitivo, adoptar tecnologías emergentes como los sistemas de posicionamiento global (GNSS) es fundamental para mejorar la eficiencia y precisión en las labores productivas.
        .row.justify-content-center.align-items-center.bg3.p-4.brad.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/117.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Este apartado explora la teoría detrás de la vigilancia tecnológica y la aplicación de GNSS , destacando cómo estas herramientas contribuyen a la innovación y mejora continua de los sistemas productivos. 


    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Importancia de la vigilancia tecnológica
    p La vigilancia tecnológica permite identificar nuevas herramientas y métodos que pueden mejorar los sistemas productivos. Esto incluye tecnologías para el monitoreo, análisis de datos y automatización, así como prácticas sostenibles que optimizan el uso de recursos.

    h5 Beneficios teóricos:
    .row.bg8.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .bgw.brad.p-5.my-5
              CarouselRED(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Identificación de tecnologías emergentes
                    p Drones con mayor capacidad de análisis, nuevos sensores de calidad del agua, etc.             
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/118.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Adaptación a cambios tecnológicos
                    p Mejoras en hardware y software agrícola.            
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/119.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Fomento de la innovación
                    p La incorporación de nuevas tecnologías mejora la competitividad del sistema productivo.             
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/120.png', alt='') 

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Teoría y aplicaciones de GNSS en la agricultura
    p Los sistemas GNSS proporcionan datos de ubicación precisos, lo que es importante para mejorar la eficiencia en tareas como la siembra, la fertilización y la cosecha.

    h5 Aplicaciones teóricas del GNSS: 

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/121.png' alt='')           
      .col-lg-8.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Siembra de precisión") Permite distribuir las semillas de manera uniforme, maximizando el uso del espacio disponible.     
          div(titulo="Optimización de rutas para maquinaria") Reduce el consumo de combustible y el tiempo operativo.     
          div(titulo="Monitoreo de movimiento del ganado") En sistemas pecuarios, GNSS puede ser utilizado para rastrear el desplazamiento de los animales y prevenir pérdidas.     

    h5 Ventajas teóricas de GNSS 

    .row.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/122.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Reducción de traslapes y omisiones en labores agrícolas.

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/123.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Mejor gestión del tiempo y los recursos.

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/124.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Mayor precisión en la planificación y ejecución de actividades productivas.
</template>

<script>
export default {
  name: 'Tema6',
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
