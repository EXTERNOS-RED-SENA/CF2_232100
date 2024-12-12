<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Variables en sistemas productivos y su monitoreo
    
    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-center.align-items-center.bg3.p-4.brad.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/27.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 En los sistemas productivos agropecuarios, las variables son factores determinantes que influyen directamente en la eficiencia, productividad y sostenibilidad de los procesos. Estas variables, que van desde condiciones climáticas hasta características del suelo y parámetros productivos, conforman un conjunto dinámico que requiere monitoreo constante para garantizar un desempeño óptimo.      
        p El monitoreo de variables es un componente clave en la gestión moderna de los sistemas productivos. Gracias a los avances tecnológicos, es posible medir y analizar en tiempo real factores críticos como la humedad del suelo, la temperatura ambiente o la calidad del agua, lo que permite tomar decisiones informadas para optimizar recursos y minimizar riesgos. Este proceso, central en la agricultura de precisión, no solo mejora el rendimiento de los cultivos y la producción pecuaria, sino que también contribuye a la sostenibilidad al reducir el impacto ambiental.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/28.png' alt='')  


    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Importancia de las variables en los sistemas productivos 
    p.mb-5 Las variables en los sistemas productivos agropecuarios representan factores clave que afectan directa o indirectamente el rendimiento y la sostenibilidad del proceso productivo. Su monitoreo constante permite ajustar prácticas agrícolas y pecuarias para maximizar la eficiencia y minimizar riesgos. Estas variables pueden ser de naturaleza ambiental, biológica o productiva, y su correcta gestión es fundamental para la optimización de recursos y la toma de decisiones informadas.

    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/29.png' alt='')  
      .col-lg-7.my-lg-0.my-3
        .row.justify-content-center.align-items-center.bg1.b-dash.p-4.brad
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/30.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 En cualquier sistema productivo agropecuario, las variables representan los factores que determinan su funcionamiento, eficiencia y resultados. Estas variables no solo reflejan las condiciones internas del sistema, como el estado del suelo o la salud del cultivo, sino también las influencias externas, como las condiciones climáticas y los mercados. Entender su importancia es esencial para gestionar y optimizar procesos productivos, ya que permite a los productores anticipar problemas, tomar decisiones informadas y aplicar estrategias de mejora. Este apartado explora cómo las variables afectan todos los aspectos del sistema productivo y su papel en la sostenibilidad y la competitividad en el sector agropecuario.

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Clasificación de variables en sistemas productivos
    p La diversidad de factores que influyen en los sistemas productivos hace necesario clasificarlos para una gestión efectiva. Las variables se pueden dividir en categorías que abarcan aspectos agroclimáticos, edáficos y productivos. Cada categoría tiene un impacto específico y requiere métodos de monitoreo y control adecuados para maximizar la eficiencia del sistema. Este apartado presenta un marco para comprender y clasificar estas variables, proporcionando una base sólida para el diseño e implementación de estrategias de monitoreo. 

    h5 Las variables en los sistemas productivos se dividen en varias categorías, cada una con un impacto específico en el proceso productivo:             

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Variables agroclimáticas

    .row.justify-content-center.mb-4
      .col-lg-7.my-lg-0.my-3
        .bg2.p-4.brad.j1.h-100
          p.mb-0 Las variables agroclimáticas son factores ambientales que influyen significativamente en el crecimiento y desarrollo de los cultivos, así como en la productividad de los sistemas pecuarios. Estas variables, como la temperatura, la humedad relativa, la precipitación y la velocidad del viento son elementos externos que no pueden ser controlados directamente, pero cuyo impacto puede ser gestionado mediante el monitoreo y la implementación de estrategias adaptativas.  
      .col-lg-5.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/31.png' alt='')  

    .row.justify-content-center
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='')           
      .col-lg-9.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Temperatura") Afecta la germinación, crecimiento y madurez de los cultivos. En la producción pecuaria, influye en el bienestar animal y la productividad.
          div(titulo="Humedad relativa") Importante para la transpiración y fotosíntesis en cultivos, y para mantener condiciones saludables en los establos. 
          div(titulo="Precipitación") Asegura el suministro de agua para cultivos y rellena acuíferos.  
          div(titulo="Velocidad y dirección del viento") Afecta la polinización, dispersión de plagas y daños estructurales en invernaderos.  

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Variables del suelo y agua 

    p.mb-5 El suelo y el agua son recursos fundamentales para cualquier sistema productivo agrícola. Las variables asociadas, como la humedad del suelo, la salinidad y la calidad del agua, tienen un impacto directo en la salud de los cultivos y el rendimiento. La gestión adecuada de estas variables es crítica para asegurar un entorno productivo óptimo y evitar problemas como la compactación del suelo, la salinización o la contaminación de los acuíferos. Este apartado se centra en identificar y explicar estas variables, resaltando su relevancia en la planificación y operación de los sistemas productivos  

    .row.bg8.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .bgw.brad.p-5.my-5
              CarouselRED(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Humedad del suelo
                    p Determina la cantidad de agua disponible para las plantas, clave para planificar riegos.                  
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')     

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 pH del suelo
                    p Afecta la disponibilidad de nutrientes esenciales para el cultivo.                  
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/35.png', alt='')  

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Salinidad
                    p Altos niveles pueden ser tóxicos para los cultivos y reducir su rendimiento.                  
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/36.png', alt='')  

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Calidad del agua 
                    p Elemento crítico para sistemas de riego, debe ser monitoreada para evitar la acumulación de sales y contaminantes.                  
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/37.png', alt='')  

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Variables productivas
    .row.justify-content-center.mb-4
      .col-lg-4.my-3 
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/38.png' alt='')         
      .col-lg-8.my-3                 
        p Las variables productivas miden el éxito del sistema en términos de cantidad y calidad de los productos obtenidos. Incluyen indicadores como el rendimiento del cultivo, la calidad del producto y la eficiencia en el uso de insumos. Estas variables son clave para evaluar la rentabilidad y la competitividad del sistema, y su monitoreo continuo permite ajustes en las prácticas agrícolas para maximizar los resultados. Este apartado analiza las principales variables productivas, su relación con las demás categorías de variables y su importancia en la toma de decisiones estratégicas.
        .bg2.p-4.brad
          ol.lista-ol--cuadro.fa-ul
            li 
              .lista-ol--cuadro__vineta
                span.text-black 1
              span #[b Rendimiento del cultivo:] cantidad de producto obtenido por unidad de superficie.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 2
              span #[b Índice de cosecha:] relación entre biomasa cosechada y biomasa total.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 3
              span #[b Calidad del producto:] influyen aspectos como tamaño, color, contenido nutricional o nivel de humedad en el producto final.
  
    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Monitoreo de variables en sistemas productivos
    p El monitoreo de variables es un proceso determinante para garantizar que los sistemas productivos operen de manera eficiente y sostenible. Este proceso permite identificar tendencias, prever problemas y realizar ajustes precisos en tiempo real. Con la adopción de tecnologías avanzadas, como sensores IoT y sistemas SCADA, el monitoreo ha evolucionado, permitiendo a los productores tener un control detallado de cada aspecto del sistema productivo. Este apartado profundiza en las técnicas y tecnologías de monitoreo, resaltando su papel en la optimización de los procesos productivo.

    .row.justify-content-start.mt-5.mb-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img.ms-2(src='@/assets/curso/temas/icon.svg' alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h4.mb-1 Tecnologías de monitoreo

    .bg9.mb-4  
      .row.justify-content-center
        .col-lg-8.my-3.j1 
          .p-4
            p.mb-0 La evolución de la tecnología ha transformado el monitoreo en sistemas productivos, pasando de métodos manuales a sistemas automatizados que recopilan y analizan datos en tiempo real. Sensores, drones, imágenes satelitales y software especializado han revolucionado la forma en que se controlan las variables agroclimáticas, del suelo y productivas. Este apartado se centra en las principales tecnologías disponibles, sus características y cómo contribuyen a mejorar la toma de decisiones y la eficiencia del sistema. 
        .col-lg-4
          img.img-a.img-t(src='@/assets/curso/temas/39.png' alt='')     

    p El desarrollo de la agricultura de precisión ha introducido herramientas que mejoran la precisión y eficiencia del monitoreo:    

    .row.justify-content-center
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/40.png' alt='')           
      .col-lg-9.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Sensores IoT") Dispositivos que capturan datos agroclimáticos, del suelo y del cultivo en tiempo real, como temperatura, humedad y niveles de nutrientes. estos sensores están conectados a redes que permiten el análisis remoto.
          div(titulo="Sistemas SCADA") Supervisan y controlan procesos productivos, integrando datos de múltiples fuentes para una gestión eficiente.
          div(titulo="Drones y satélites") Ofrecen imágenes aéreas para monitorear la salud de los cultivos y condiciones del suelo, identificando áreas con estrés hídrico o infestaciones.
          div(titulo="<i>Software</i> de análisis") Herramientas especializadas que procesan los datos recopilados y generan reportes visuales para la toma de decisiones.

    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 Estrategias de monitoreo
    p El monitoreo continuo de variables proporciona numerosos beneficios, desde la mejora en la eficiencia del uso de recursos hasta la mitigación de riesgos. Al identificar problemas de manera temprana, permite aplicar soluciones antes de que afecten significativamente la producción. Además, fomenta prácticas sostenibles, al optimizar el uso de agua y fertilizantes, y reducir el impacto ambiental. Este apartado analiza los principales beneficios del monitoreo y cómo contribuyen al éxito de los sistemas productivos.

    .row.bg8.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .bgw.brad.p-5.my-5
              CarouselRED(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Monitoreo en tiempo real
                    p Ideal para variables críticas como la humedad del suelo en cultivos de riego.                
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='')   

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Monitoreo periódico
                    p Revisión de datos en intervalos programados, útil para variables de largo plazo como la calidad del suelo.                 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/42.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Monitoreo predictivo
                    p Utiliza modelos de datos históricos para prever condiciones futuras y tomar acciones preventivas.                
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Sistemas SCADA (Supervisory Control and Data Acquisition)
                    p Permiten la supervisión y control remoto de múltiples procesos agrícolas, integrando datos de sensores y actuadores. Los sistemas SCADA ofrecen interfaces gráficas intuitivas para el análisis y la toma de decisiones en tiempo real.                
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Drones y satélites
                    p Los drones equipados con cámaras multiespectrales y los satélites proporcionan imágenes aéreas detalladas, permitiendo identificar variaciones en el estado de los cultivos y áreas problemáticas dentro de grandes parcelas.                
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='') 

    Separador 
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.5 Beneficios del monitoreo de variables
    p A pesar de sus beneficios, la implementación del monitoreo de variables en sistemas productivos no está exenta de desafíos. Factores como el costo inicial de la tecnología, la falta de infraestructura en áreas rurales y la necesidad de capacitación especializada pueden limitar su adopción. Este apartado aborda los principales retos que enfrentan los productores y propone estrategias para superarlos, garantizando que el monitoreo se convierta en una herramienta accesible y efectiva

    h5 El monitoreo de variables en los sistemas productivos ofrece múltiples beneficios: 

    .bg3.mb-4
      .row.justify-content-center
        .col-lg-5.my-3
          img.img-a.img-t(src='@/assets/curso/temas/46.png' alt='')

        .col-lg-7.my-3.j1.p-4
          ol.lista-ol--cuadro.fa-ul
            li 
              .lista-ol--cuadro__vineta
                span.text-black 1
              span #[b Optimización de Recursos:] Permite un uso eficiente de agua, fertilizantes y energía, reduciendo costos operativos.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 2
              span #[b Aumento de la Productividad:] La gestión precisa de variables asegura condiciones óptimas para el crecimiento de los cultivos y la salud animal.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 3
              span #[b Mitigación de Riesgos:] Identifica problemas como deficiencias nutricionales o amenazas climáticas, permitiendo una respuesta oportuna.
            li 
              .lista-ol--cuadro__vineta
                span.text-black 4
              span #[b Sostenibilidad:] Minimiza el impacto ambiental al reducir el uso excesivo de insumos y proteger recursos naturales.

    Separador 
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.6 Retos en el monitoreo de variables
    p Implementar un sistema de monitoreo eficaz requiere una planificación cuidadosa y una estrategia bien definida. Esto incluye la selección de tecnologías adecuadas, la capacitación del personal y la integración de los datos recolectados en los procesos de toma de decisiones. Este apartado explora las mejores prácticas para la implementación del monitoreo, destacando cómo adaptarlas a diferentes contextos productivos para maximizar su impacto; a pesar de sus ventajas, el monitoreo presenta desafíos:

    .row.justify-content-center.text-center.mb-4
      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/47.png' alt='')       
          .p-4
            h5 Acceso a tecnología
            p.mb-0 Altos costos iniciales pueden limitar su adopción en pequeñas explotaciones.

      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/48.png' alt='')       
          .p-4
            h5 Capacitación técnica
            p.mb-0 Los usuarios necesitan formación para interpretar datos y utilizar tecnologías avanzadas.

      .col-lg-4.my-3
        .bgw.sha.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/49.png' alt='')       
          .p-4
            h5 Infraestructura
            p.mb-0 La conectividad en áreas rurales puede ser un obstáculo para el monitoreo en tiempo real.    


    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span Resumen variables en sistemas productivos y monitoreos agropecuarios

        .bgfig.p-4.mb-1
          img.img-a.img-t(src='@/assets/curso/temas/50.svg' alt='La Figura 2 se denomina «Resumen variables en sistemas productivos y monitoreo». Del tema principal se desprenden cinco ramas principales que abordan: la importancia de las variables, el monitoreo en la gestión, los avances tecnológicos, los beneficios del monitoreo y la relación entre el monitoreo y la productividad en sistemas productivos. Cada rama incluye subtemas específicos que amplían estos conceptos. Se adjunta link, para su mejor observación. https://www.mindomo.com/mindmap/7158273efee84181b169692d7a5bfb8f')  

        figcaption.mb-5 Fuente: OIT, 2024.                                                                
    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/51.png' alt='')   
      .col-lg-8.my-lg-0.my-3
        p El monitoreo y la gestión de variables en sistemas productivos agropecuarios son fundamentales para asegurar la eficiencia, la sostenibilidad y la competitividad en un sector cada vez más desafiante. A lo largo de este capítulo, se han explorado las diversas categorías de variables que afectan los procesos productivos, desde las agroclimáticas, que determinan las condiciones externas, hasta las del suelo, agua y productividad, que son críticas para el rendimiento y la calidad.      
        .row.justify-content-center.align-items-center.bg3.p-4.brad.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/52.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Asimismo, se destacó la relevancia del monitoreo continuo mediante tecnologías avanzadas como sensores IoT, sistemas SCADA y herramientas de análisis de datos. Estas tecnologías no solo permiten una supervisión más precisa y en tiempo real, sino que también facilitan la toma de decisiones fundamentadas, ajustando las prácticas agrícolas para maximizar la productividad y minimizar los riesgos.    
        p Se recomienda profundizar en variables de sistemas productivos y Monitoreo de variables


    .row.justify-content-center
      .col-lg-4.my-3
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=3eQKBi4kdHQ" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace video.] “Sistemas de productividad agrícola” 

      .col-lg-4.my-3
        a.anexo.mb-4.mb-lg-0(href="https://www.fao.org/land-water/databases-and-software/cropwat/es/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Simulador: CROPWAT: Herramienta para cálculo de riego agrícola 

      .col-lg-4.my-3
        a.anexo.mb-4.mb-lg-0(href="https://www.iotforall.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.]  Lectura: “Introducción a sensores IoT en agricultura"                         
                                                                    
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
