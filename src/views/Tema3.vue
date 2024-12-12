<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Automatización en el monitoreo de sistemas productivos

    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        .bg3.p-4.brad.h-100.j1
          p.mb-0 La automatización ha revolucionado la gestión de los sistemas productivos agropecuarios, transformando la manera en que se monitorean y controlan las variables clave. A través de la integración de tecnologías avanzadas como sensores IoT, sistemas SCADA y plataformas de análisis de datos, los productores pueden obtener información en tiempo real, tomar decisiones informadas y optimizar cada aspecto del proceso productivo.     
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/53.png' alt='')  
      .col-lg-4.my-lg-0.my-3
        .bg1.b-dash.p-4.brad.h-100.j1
          p.mb-0 En un entorno agropecuario cada vez más desafiante, donde factores como el cambio climático y la competencia global exigen mayor eficiencia y sostenibilidad, la automatización se ha convertido en un aliado indispensable. Permite no solo reducir costos operativos y mejorar la calidad de los productos, sino también mitigar riesgos y reducir el impacto ambiental.    


    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Introducción a la automatización en la agricultura
    p La automatización en los sistemas productivos agropecuarios ha revolucionado la forma en que se gestionan los cultivos y la producción pecuaria. Mediante la integración de tecnologías avanzadas, como sensores IoT, sistemas SCADA y plataformas de análisis de datos, es posible monitorear y controlar variables clave en tiempo real, optimizando cada aspecto del proceso productivo.

    .row.justify-content-center.mb-4
      .col-lg-7.my-lg-0.my-3
        .bg2.p-4.brad.j1.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/54.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Este capítulo aborda cómo la automatización ha transformado el monitoreo agrícola, permitiendo una gestión más precisa, eficiente y sostenible. Se analizarán los componentes esenciales de un sistema automatizado, los modelos de implementación y su impacto en la toma de decisiones basada en datos.
      .col-lg-5.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/55.png' alt='')            

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Componentes de un sistema automatizado
    p Un sistema automatizado de monitoreo agrícola está compuesto por varios elementos interconectados que trabajan en conjunto para recopilar, procesar y analizar datos. A continuación, se describen los principales componentes:

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3. 
          span Principales componentes de un sistema automatizado

        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Componente
                th Descripción
                th Aplicaciones 

            tbody
              tr
                td.text-bold Sensores IoT                  
                td Los sensores IoT son dispositivos clave en la automatización. Capturan datos relacionados con variables agroclimáticas (como temperatura, humedad y precipitación), del suelo (como niveles de humedad y pH) y productivas (como el rendimiento del cultivo). Estos sensores se conectan a través de redes inalámbricas, lo que permite el monitoreo en tiempo real.                 
                td #[b Tipos de sensores más comunes:]
                  br
                  br
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-check-circle.color1
                      span Sensores de humedad del suelo: Ayudan a optimizar el riego al medir la cantidad de agua disponible para las plantas.
                    li 
                      i.fas.fa-check-circle.color1
                      span Sensores de calidad del aire: Utilizados en sistemas pecuarios para controlar niveles de gases como amoníaco y CO2.
                    li 
                      i.fas.fa-check-circle.color1
                      span Sensores de temperatura y humedad relativa: Monitorean el ambiente de cultivos e invernaderos.
                  br
                  br
                  span.text-bold Ventajas:
                  br
                  br
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-check-circle.color1
                      span Recopilación de datos en tiempo real.
                    li 
                      i.fas.fa-check-circle.color1
                      span Reducción de la intervención manual.
                    li 
                      i.fas.fa-check-circle.color1
                      span Capacidad de integración con otros sistemas automatizados.
     
              tr
                td.text-bold Sistemas SCADA (Supervisory Control and Data Acquisition)                  
                td Los sistemas SCADA son plataformas de supervisión y control a distancia. Integran sensores y dispositivos para recolectar datos de procesos productivos en tiempo real, permitiendo el monitoreo, análisis y ajuste de variables clave sin la intervención directa del operador.                 
                td #[b Aplicaciones en la agricultura]
                  br
                  br                                
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-check-circle.color1
                      span Riego automatizado: controla el suministro de agua basado en datos de humedad del suelo.
                    li 
                      i.fas.fa-check-circle.color1
                      span Climatización de Invernaderos: regula automáticamente la temperatura y humedad para mantener condiciones óptimas.
                    li 
                      i.fas.fa-check-circle.color1
                      span Producción pecuaria: monitorea la alimentación y el ambiente de los animales.
                  br
                  br                                            
                  span.text-bold Beneficios:
                  br
                  br                                    
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-check-circle.color1
                      span Centralización del monitoreo.
                    li 
                      i.fas.fa-check-circle.color1
                      span Mejor toma de decisiones gracias a la visualización de datos históricos y en tiempo real.
                    li 
                      i.fas.fa-check-circle.color1
                      span Capacidad de automatización de procesos complejos.
    
              tr
                td.text-bold Drones y Satélites                   
                td Los drones y satélites proporcionan información visual y georreferenciada de cultivos y su entorno. Mediante imágenes multiespectrales y otras tecnologías de detección remota, facilitan la identificación temprana de problemas, la optimización de insumos y la mejora de la planificación agrícola.                 
                td #[b Aplicaciones:]
                  br
                  br                                    
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-check-circle.color1
                      span Detección de estrés hídrico y nutricional: identificación de áreas problemáticas dentro de una parcela.
                    li 
                      i.fas.fa-check-circle.color1
                      span Monitoreo de plagas: ayudan a detectar infestaciones tempranas y optimizar el uso de pesticidas.
                    li 
                      i.fas.fa-check-circle.color1
                      span Evaluación de rendimientos: mediante índices de vegetación como NDVI (Índice de Vegetación de Diferencia Normalizada).
                  span.text-bold Ventajas:
                  br
                  br                                    
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-check-circle.color1
                      span Cobertura rápida y eficiente de grandes áreas.
                    li 
                      i.fas.fa-check-circle.color1
                      span Reducción de costos en inspección manual.
                    li 
                      i.fas.fa-check-circle.color1
                      span Mayor precisión en la planificación de actividades agrícolas

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Modelos de Implementación de la Automatización
    p La automatización en los sistemas productivos agropecuarios no sigue un modelo único; su implementación depende de factores como el tipo de cultivo o producción, el entorno donde se desarrolla, y los recursos tecnológicos y financieros disponibles. Existen diversas formas de integrar tecnologías automatizadas, y cada modelo responde a las necesidades específicas de distintos sistemas productivos. Estos modelos van desde la implementación de sistemas básicos de monitoreo hasta soluciones avanzadas que gestionan automáticamente todo el ciclo productivo. La implementación de sistemas automatizados en la agricultura varía según el tipo de sistema productivo, las condiciones locales y los recursos disponibles. Algunos de los modelos más comunes incluyen:

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Cultivos en ambiente abierto

    .bg10.mb-4  
      .row.justify-content-center
        .col-lg-8.my-3.j1 
          .p-4
            p.mb-0 Los #[b cultivos en ambiente abierto], como el maíz, el arroz y otros cereales, enfrentan grandes desafíos debido a la exposición directa a condiciones climáticas variables. La automatización en este contexto se centra en el monitoreo agroclimático y la gestión de recursos como agua y fertilizantes.
        .col-lg-4
          img.img-a.img-t(src='@/assets/curso/temas/56.png' alt='')  

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/57.png' alt='')           
      .col-lg-8.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Elementos clave de la automatización en ambiente abierto") 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Sistemas de riego automatizado: Integran sensores de humedad del suelo para activar riegos solo cuando es necesario, optimizando el uso del agua.
              li 
                i.fas.fa-check-circle.color1
                span Monitoreo climático: Sensores que miden variables como temperatura, humedad y precipitación ayudan a predecir condiciones adversas.
              li 
                i.fas.fa-check-circle.color1
                span Uso de drones y satélites: Proveen imágenes de grandes áreas agrícolas, permitiendo identificar zonas con estrés hídrico o infestaciones de plagas.
          div(titulo="Beneficios") 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Reducción del uso de insumos.
              li 
                i.fas.fa-check-circle.color1
                span Mejora del rendimiento y calidad de los cultivos.
              li 
                i.fas.fa-check-circle.color1
                span Mayor resiliencia frente a condiciones climáticas extremas.   

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Cultivos en ambiente protegido
    p Los #[b cultivos en ambiente protegido], como los invernaderos, permiten un control mucho más preciso de las condiciones de crecimiento. La automatización en estos entornos no solo optimiza el uso de recursos, sino que también asegura un ambiente ideal para maximizar la productividad. Algunas tecnologías aplicadas en ambientes protegidos son:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="Control climático automatizado")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/58.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Control climático automatizado 
            p Sistemas que regulan la temperatura, la humedad y la luz mediante sensores y actuadores.

      .py-3.py-md-4.bg11(titulo="Sistemas de fertiirrigación automatizada")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/59.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Sistemas de fertiirrigación automatizada
            p Combinan el suministro de agua con nutrientes, adaptándose a las necesidades específicas del cultivo en cada etapa de crecimiento.

      .py-3.py-md-4.bg11(titulo="Monitoreo de plagas y enfermedades ")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/60.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Monitoreo de plagas y enfermedades 
            p Sensores específicos detectan la presencia de plagas y condiciones propicias para enfermedades, activando sistemas de control preventivo.

            p Entre sus beneficios se encuentran:

            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Aumento en la producción por unidad de área.
              li 
                i.fas.fa-check-circle.color1
                span Mayor eficiencia en el uso de insumos.
              li 
                i.fas.fa-check-circle.color1
                span Reducción de riesgos asociados a plagas y enfermedades. 

    .row.justify-content-center.mb-4
      .col-lg-8.my-3 

        .row.justify-content-start.mt-5.mb-4
          .col-auto
            .list
              .list__item
                .list__item__icon
                  img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
              .list__txt.bgicon.brad.p-0.px-4
                h4.mb-1 Sistemas pecuarios                      
        p En los #[b sistemas pecuarios], la automatización se enfoca en optimizar el bienestar animal y la eficiencia en la producción. Esto incluye la gestión automatizada de la alimentación, el monitoreo de la salud y el control de las condiciones ambientales. Algunos ejemplos de automatización en sistemas pecuarios son:estratégicas.
        .bg3.p-4.brad
          ol.lista-ol--cuadro.fa-ul
            li 
              .lista-ol--cuadro__vineta
                span.text-black 1
              span #[b Alimentación automatizada:] sistemas que administran raciones de alimento de acuerdo con las necesidades específicas de cada animal, mejorando la conversión alimenticia.

            li 
              .lista-ol--cuadro__vineta
                span.text-black 2
              span #[b Monitoreo ambiental:] sensores de temperatura, humedad y calidad del aire (amoníaco y CO2) aseguran un ambiente saludable.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 3
              span #[b Sistemas de detección de enfermedades:] tecnologías que miden indicadores de salud como la temperatura corporal y el comportamiento, permitiendo una detección temprana de enfermedades.                                           
      .col-lg-4.my-3 
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/61.png' alt='')  

    p Entre sus beneficios se encuentran: 

    .row.justify-content-center.mb-4
      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/62.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Mejora del rendimiento productivo.  

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/63.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Reducción de costos asociados a la mano de obra y el uso de insumos.  

      .col-lg-4.my-3
        .bg6.brad.p-3.sha.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/64.png' alt='')
            .col.pt-lg-0.pt-md-4
              p.mb-0 Aseguramiento de estándares de bienestar animal.

    Separador 
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.4 Ventajas de la automatización en el monitoreo
    p La automatización en el monitoreo ofrece múltiples beneficios que mejoran la eficiencia, sostenibilidad y rentabilidad de los sistemas productivos agropecuarios. 


    .row.bg8.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .bgw.brad.p-5.my-5
              CarouselRED(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Precisión y eficiencia
                    p Permite un monitoreo constante y preciso de variables clave, optimizando el uso de recursos como agua y fertilizantes.                  
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/65.png', alt='')  

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Toma de decisiones basada en datos
                    p Los datos recopilados y analizados en tiempo real facilitan decisiones más informadas y rápidas, mejorando la capacidad de respuesta ante cambios en las condiciones del sistema.                  
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/66.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Sostenibilidad
                    p La automatización contribuye a prácticas más sostenibles al minimizar el desperdicio de recursos y reducir el impacto ambiental.                  
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/67.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Reducción de costos operativos
                    p A largo plazo, la eficiencia mejorada y la reducción de pérdidas compensan la inversión inicial en tecnología.                  
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/68.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Principales ventajas
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-check-circle.color1
                        span #[b Monitoreo continuo y en tiempo real:] proporciona datos precisos y actualizados que permiten ajustes inmediatos en los procesos productivos.
                      li 
                        i.fas.fa-check-circle.color1
                        span #[b Optimización del uso de recursos:] tecnologías como el riego y la fertilización automatizados aseguran que solo se utilicen insumos cuando y donde sean necesarios.
                      li 
                        i.fas.fa-check-circle.color1
                        span #[b Reducción de costos operativos:] menor necesidad de intervención manual y menos desperdicio de recursos.
                      li 
                        i.fas.fa-check-circle.color1
                        span #[b Sostenibilidad:] al reducir el impacto ambiental, la automatización promueve prácticas agrícolas más responsables                
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/69.png', alt='') 

    Separador 
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.5 Retos en la implementación de la automatización
    p A pesar de sus múltiples beneficios, la automatización enfrenta varios desafíos que limitan su adopción generalizada, especialmente en pequeñas y medianas explotaciones:

    .bg2.p-4.mb-4
      .row.justify-content-center
        .col-lg-5.my-3
          img.img-a.img-t(src='@/assets/curso/temas/70.png' alt='')

        .col-lg-7.my-3.j1
          ol.lista-ol--cuadro.fa-ul
            li 
              .lista-ol--cuadro__vineta
                span.text-black 1
              span #[b Inversión inicial:] los sistemas automatizados pueden tener un costo elevado, lo que limita su adopción por pequeños y medianos productores.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 2
              span #[b Capacitación técnica:] es necesario que los usuarios estén capacitados para manejar las tecnologías y analizar los datos generados.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 3
              span #[b Infraestructura y conectividad:] en áreas rurales, la falta de conectividad y de infraestructura tecnológica puede dificultar la implementación de sistemas avanzados.

    Separador 
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.6 Impacto de la automatización en la sostenibilidad
    p La automatización no solo mejora la eficiencia y productividad, sino que también tiene un impacto positivo en la sostenibilidad ambiental y económica de los sistemas productivos. Al optimizar el uso de insumos y reducir las pérdidas, contribuye a la conservación de recursos naturales y a la mitigación de impactos negativos en el medio ambiente. Además, la capacidad de anticipar y responder a problemas mejora la resiliencia del sistema frente a desafíos como el cambio climático. 
                                                          
    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Impactos clave en la sostenibilidad


    .row.justify-content-center.text-center.mb-4
      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/71.png' alt='')       
          .p-4
            h5 Reducción del impacto ambiental
            p.mb-0 La automatización minimiza la sobreexplotación de recursos y reduce las emisiones de gases de efecto invernadero.

      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/72.png' alt='')       
          .p-4
            h5 Mayor resiliencia frente al cambio climático
            p.mb-0 Los sistemas automatizados pueden prever y mitigar los efectos de condiciones climáticas adversas.

      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/73.png' alt='')       
          .p-4
            h5 Conservación de la biodiversidad
            p.mb-0 Al aplicar insumos de manera precisa, se reduce el impacto sobre el entorno natural, protegiendo la fauna y flora local. 

    p La implementación de la automatización representa un paso necesario hacia un sector agropecuario más eficiente, competitivo y sostenible.  

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3. 
          span Resumen automatización en el monitoreo de sistemas productivos

        .bgfig.p-4.mb-1
          img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='la figura 3 se denomina «Resumen automatización en el monitoreo de sistemas productivos».  El diagrama se estructura en cuatro ramas principales que explican el impacto de la automatización en sistemas agropecuarios, las tecnologías utilizadas (como IoT y SCADA), los beneficios del monitoreo automatizado, y el rol de la automatización como aliado en el entorno agropecuario, incluyendo aspectos como eficiencia, costos y calidad. Se adjunta link, para su mejor observación. https://www.mindomo.com/mindmap/5d7339240a3c44dbb4efb75e9da2b9f2')  

        figcaption.mb-5 Fuente: OIT, 2024. 

    p Se recomienda profundizar en variables de sistemas productivos y monitoreo de variables.

    .row.justify-content-center
      .col-lg-4.my-3
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=3eQKBi4kdHQ" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace video.] “sistemas de productividad agricola ”: “Introducción a sensores IoT en agricultura"  

      .col-lg-4.my-3
        a.anexo.mb-4.mb-lg-0(href="https://www.fao.org/land-water/databases-and-software/cropwat/es/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Simulador: cropwat: herramienta para cálculo de riego agrícola

      .col-lg-4.my-3
        a.anexo.mb-4.mb-lg-0(href="https://www.iotforall.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.]  Lectura: “Introducción a sensores IoT en agricultura"                                         
</template>

<script>
export default {
  name: 'Tema3',
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
