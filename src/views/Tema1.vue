<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a los sistemas productivos agropecuarios
      
    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3  
        p Los sistemas productivos agropecuarios son la base de la producción de alimentos, fibras y materias primas esenciales para la sociedad. Estos sistemas operan en un entorno dinámico, donde factores como el clima, los recursos naturales y las condiciones económicas influyen constantemente en su desempeño. Comprender cómo funcionan y se estructuran estos sistemas es fundamental para optimizar su productividad, garantizar la sostenibilidad y enfrentar los desafíos actuales, como el cambio climático y la demanda creciente de alimentos.   
        .bg2.p-4.brad
          p.mb-0 En este capítulo, se explorará el concepto de sistema productivo, sus componentes esenciales y los diferentes tipos que existen, desde sistemas agrícolas y pecuarios hasta agroindustriales. Además, se analizará la importancia de la caracterización de estos sistemas como paso inicial para su monitoreo y mejora continua. Por último, se abordará el papel de la sostenibilidad como eje central en la gestión moderna de los sistemas productivos, destacando cómo la integración de nuevas tecnologías contribuye a un uso más eficiente de los recursos y a la conservación del medio ambiente. 
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/8.png' alt='')
        
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Definición y componentes de un sistema productivo
    .row.bg5.align-items-center
      .px-lg-5.px-4 
        p Un sistema productivo agropecuario se define como el conjunto de actividades interrelacionadas que, utilizando recursos naturales, humanos, tecnológicos y financieros, tiene como objetivo la producción de bienes agropecuarios, tales como alimentos, fibras y materias primas industriales. Estos sistemas pueden clasificarse en agrícolas, pecuarios y agroindustriales, dependiendo de su enfoque productivo.
        .row.justify-content-start.mt-5.mb-4
          .col-auto
            .list
              .list__item
                .list__item__icon
                  img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
              .list__txt.bgicon.brad.p-0.px-4
                h4.mb-1 Componentes esenciales de un sistema productivo   

        .row.justify-content-center.text-center.mb-4
          .col-lg-3.my-3
            .bg6.brad.p-3.sha.h-100
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/10.png' alt='')
              h5 Recursos naturales 
              p Incluyen el suelo, el agua, el clima y la biodiversidad, elementos fundamentales que determinan las posibilidades y limitaciones de la producción.

          .col-lg-3.my-3
            .bg6.brad.p-3.sha.h-100
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/11.png' alt='')
              h5 Infraestructura y tecnología
              p Comprende maquinaria, sistemas de riego, sensores y plataformas digitales.

          .col-lg-3.my-3
            .bg6.brad.p-3.sha.h-100
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/12.png' alt='')
              h5 Recursos humanos
              p La mano de obra y la gestión administrativa son esenciales para ejecutar las actividades del sistema productivo.

          .col-lg-3.my-3
            .bg6.brad.p-3.sha.h-100
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/13.png' alt='')
              h5 Factores económicos 
              y sociales
              p Incluyen costos de producción, mercado y políticas públicas que influyen en la sostenibilidad y rentabilidad del sistema. 

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Variables clave en el monitoreo agrícola                                     

    p El monitoreo agrícola se centra en el seguimiento de diversas variables que influyen en el rendimiento y la calidad de los cultivos. Estas variables se dividen en dos categorías principales:

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Tipos de sistemas productivos 

    p Son estructuras complejas que integran recursos, procesos y tecnologías para la generación de bienes primarios, como alimentos, fibras y materias primas agroindustriales. Estos sistemas operan en un entorno dinámico, influenciado por factores climáticos, económicos y sociales, que afectan tanto su rendimiento como su sostenibilidad.     

    .row.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg3.brad.p-3.h-100.j1
          p.mb-0 Desde un enfoque sistémico, un sistema productivo puede ser visto como un conjunto de elementos interrelacionados, donde las entradas (insumos como agua, semillas, fertilizantes y energía) se transforman en salidas (productos finales) mediante procesos productivos específicos. El éxito de estos sistemas depende de su capacidad para gestionar eficientemente recursos limitados, maximizar la productividad y adaptarse a las condiciones cambiantes del entorno.

      .col-lg-4.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/14.png' alt='')

      .col-lg-4.my-3
        .bg1.brad.p-3.h-100.j1
          p.mb-0 En la actualidad, los sistemas productivos enfrentan desafíos significativos como la demanda creciente de alimentos, la escasez de recursos naturales y los efectos del cambio climático. La integración de tecnologías avanzadas, como la automatización y el monitoreo en tiempo real, permite optimizar estos sistemas, mejorando su resiliencia y sostenibilidad. Esto hace que la comprensión de sus elementos y dinámicas internas sea clave para su gestión y desarrollo    

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Clasificación de los sistemas productivos

        .tabla-a.color-acento-botones.text-center.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Sistemas
                th Tipos
                th Descripción


            tbody
              tr
                td(rowspan='2') #[b Sistemas agrícolas]
                  br 
                  br 
                  span Producción vegetal en campos abiertos o ambientes controlados (invernaderos).

                td Extensivos
                td Cultivos como trigo, maíz y arroz, caracterizados por grandes superficies y baja intensidad tecnológica
              tr
                td Intensivos
                td Hortalizas, frutales en invernaderos, con alto uso de tecnologías y recursos controlados.

              tr
                td(rowspan='2') #[b Sistemas pecuarios]
                  br 
                  br 
                  span Producción animal, como ganado bovino, porcino y avícola. Se enfocan en la gestión del bienestar animal y la optimización de la conversión alimenticia. 
                td Intensivos
                td Producción avícola y porcina en ambientes controlados
              tr
                td Extensivo
                td Ganadería bovina en pastoreo, dependiente de variables climáticas

              tr
                td(rowspan='2') #[b Sistemas agroindustriales]
                  br 
                  br 
                  span Incorporan procesos de transformación como la producción de aceites, harina y productos lácteos.
                td Integración vertical
                td Control de la cadena de valor desde la producción primaria hasta la transformación y comercialización (por ejemplo, aceites, harinas, lácteos).
              tr
                td Integración horizontal
                td Especialización en una o varias etapas del proceso de transformación (procesamiento, empaque, distribución), en alianza con otros actores.

    p Cada clasificación está influenciada por factores como el acceso a tecnología, la disponibilidad de recursos y las condiciones del mercado. La caracterización de estos sistemas productivos, que abarca tanto el análisis de sus variables como la identificación de oportunidades de mejora, sienta las bases para la implementación de soluciones tecnológicas que contribuyan a la competitividad y sostenibilidad del sector agropecuario.    

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Importancia de la caracterización de sistemas productivos                          

    p La caracterización de un sistema productivo implica identificar y analizar sus componentes, dinámicas internas y el entorno en el que opera. Esto es fundamental para implementar mejoras tecnológicas y optimizar la gestión de recursos.

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Objetivos de la Caracterización   

    .row.justify-content-center.text-center.mb-4
      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/15.png' alt='')       
          .p-4
            h5 Diagnóstico integral
            p.mb-0 Permite entender el estado actual del sistema y sus limitaciones. 

      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/16.png' alt='')       
          .p-4
            h5 Identificación de oportunidades
            p.mb-0 Detecta áreas críticas que pueden beneficiarse de la automatización o mejores prácticas.

      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/17.png' alt='')       
          .p-4
            h5 Base para el monitoreo y la mejora continua
            p.mb-0 Proporciona datos de referencia para evaluar el impacto de nuevas tecnologías y estrategias.


    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Papel de la sostenibilidad en los sistemas productivos modernos               


    .row.justify-content-center.mb-4
      .col-lg-8.my-3

        .row.justify-content-start.mt-5.mb-4
          .col-auto
            .list
              .list__item
                .list__item__icon
                  img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
              .list__txt.bgicon.brad.p-0.px-4
                h4.mb-1 Dimensiones de la sostenibilidad                   
        p La sostenibilidad en los sistemas productivos modernos se articula en tres dimensiones interrelacionadas: económica, ambiental y social.

        .bg2.p-4.brad
          h5 Económica

          p La sostenibilidad económica se centra en asegurar la viabilidad financiera de las operaciones agropecuarias. Esto implica maximizar la eficiencia en el uso de recursos, reducir costos y garantizar una rentabilidad adecuada. La adopción de tecnologías avanzadas como la automatización y la agricultura de precisión permite a los productores mejorar su competitividad en mercados cada vez más globalizados. Sus estrategias clave son:  

          ol.lista-ol--cuadro.fa-ul
            li 
              .lista-ol--cuadro__vineta
                span.text-black 1
              span Optimización del uso de insumos como agua, fertilizantes y energía.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 2
              span Reducción de pérdidas postcosecha mediante sistemas automatizados de monitoreo y control.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 3
              span Diversificación de ingresos a través de la integración agroindustrial.   

      .col-lg-4.my-3 
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/18.png' alt='')       


    .row.bg5.align-items-center
      .px-lg-5.px-4 
        h5 Ambiental: 

        p La dimensión ambiental busca minimizar el impacto de las actividades agropecuarias sobre los ecosistemas. Esto incluye la conservación de recursos naturales, la reducción de emisiones de gases de efecto invernadero y la protección de la biodiversidad. Los sistemas productivos sostenibles adoptan prácticas como la rotación de cultivos, la agroforestería y la gestión integrada de plagas para mantener la salud del suelo y la calidad del agua. Algunos beneficios ambientales de la automatización son: 

        .row.justify-content-center.text-center.mb-4
          .col-lg-4.my-3
            .bg6.brad.p-3.sha.h-100
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/19.png' alt='')
              h5 Reducción del consumo de agua
              p Mediante sistemas de riego automatizados basados en sensores de humedad del suelo.

          .col-lg-4.my-3
            .bg6.brad.p-3.sha.h-100
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/20.png' alt='')
              h5 Minimización de la aplicación de agroquímicos
              p A través de la aplicación de dosis variables en función de las necesidades específicas de cada zona del cultivo.

          .col-lg-4.my-3
            .bg6.brad.p-3.sha.h-100
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/21.png' alt='')
              h5 Disminución de emisiones
              p Control preciso de procesos como la fertilización y la ventilación en sistemas pecuarios.        

        .bg1.p-4.mb-4
          .row.justify-content-center
            .col-lg-5.my-3
              img.img-a.img-t(src='@/assets/curso/temas/22.png' alt='')

            .col-lg-7.my-3
              h5 Social:
              p La sostenibilidad social se centra en mejorar la calidad de vida de las comunidades rurales y garantizar la seguridad alimentaria. Esto incluye la generación de empleo digno, el acceso a tecnologías y la promoción de prácticas que fortalezcan la resiliencia de los sistemas productivos ante desafíos como el cambio climático. Algunas contribuciones sociales de la sostenibilidad son: 

              ol.lista-ol--cuadro.fa-ul
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 1
                  span Mejora de la seguridad alimentaria mediante una producción más eficiente y estable. 

                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 2
                  span Promoción de la equidad en el acceso a tecnologías avanzadas para pequeños y medianos productores.

                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 3
                  span Fortalecimiento de la cohesión social y la colaboración entre productores a través de redes de conocimiento y cooperación.  

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Automatización y sostenibilidad
    p La automatización es una herramienta poderosa para impulsar la sostenibilidad en los sistemas productivos. Permite una gestión más eficiente y precisa de los recursos, lo que contribuye a reducir el desperdicio y a optimizar el uso de insumos. Además, la capacidad de monitorear y analizar datos en tiempo real facilita la implementación de prácticas agrícolas adaptativas que mejoran la resiliencia del sistema productivo. Contribuciones específicas de la automatización son por ejemplo:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="Mejoras en la eficiencia del riego")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/23.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Mejoras en la eficiencia del riego
            p Los sistemas automatizados aplican agua de manera precisa, reduciendo el consumo y asegurando un suministro adecuado para los cultivos.

      .py-3.py-md-4.bg11(titulo="Manejo integrado de plagas (MIP): ")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/24.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Manejo integrado de plagas (MIP): 
            p La detección temprana y el control automático de plagas mediante sensores y drones disminuyen la necesidad de aplicaciones químicas extensivas.

      .py-3.py-md-4.bg11(titulo="Optimización del bienestar animal")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/25.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Optimización del bienestar animal
            p En sistemas pecuarios, la automatización permite mantener condiciones ambientales óptimas en los galpones, mejorando la salud y el rendimiento de los animales.  

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2. 
          span Retos y beneficios de la sostenibilidad

        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Retos para alcanzar la sostenibilidad
                th Beneficios a largo plazo de la sostenibilidad

            tbody
              tr
                td Acceso a tecnología y capital: las inversiones iniciales necesarias para la automatización y la adopción de prácticas sostenibles pueden ser prohibitivas para pequeños y medianos productores.                                    
                td Adoptar un enfoque sostenible en los sistemas productivos no solo responde a los desafíos actuales, sino que también ofrece beneficios significativos a largo plazo. entre estos destacan la resiliencia frente a condiciones.   

              tr
                td Capacitación técnica: el éxito de estas tecnologías depende de la capacidad de los productores y trabajadores agrícolas para utilizarlas de manera efectiva                                   
                td(rowspan='2') climáticas extremas, la conservación de la fertilidad del suelo y la creación de un sector agropecuario más competitivo y adaptativo. 
                  br
                  br
                  span La combinación de tecnologías avanzadas, como la automatización, con prácticas agrícolas sostenibles, constituye una estrategia integral para garantizar que los sistemas productivos agropecuarios sigan siendo viables y rentables en el futuro.
   

              tr
                td Políticas y regulaciones: la falta de políticas públicas que fomenten la sostenibilidad puede limitar la adopción de prácticas y tecnologías innovadoras.   

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Resumen introducción a los sistemas productivos agropecuarios

        .bgfig.p-4.mb-1
          img.img-a.img-t(src='@/assets/curso/temas/26.svg' alt='La Figura 1. se denomina «Resumen introducción a los sistemas productivos agropecuarios», abordando su definición, tipos y componentes clave. También se ha destacado la importancia de la caracterización para su gestión eficiente y el papel fundamental de la sostenibilidad en la agricultura moderna. Se adjunta link, para su mejor observación. https://www.mindomo.com/mindmap/a8d91f790ae3442393caf74b559fdb80')  

        figcaption Fuente: OIT, 2024.                              
</template>

<script>
export default {
  name: 'Tema1',
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
