(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias"],{3887:function(e,t,n){"use strict";n("0643"),n("fffc"),n("a573");t["a"]={computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const e=this.menuData.find(e=>"introduccion"===e.nombreRuta),t=this.menuData.find(e=>"tema1"===e.nombreRuta);return e||t}},methods:{quitarAcentos(e){const t=e.replace(/<\/?[^>]+(>|$)/g,""),n={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return t.split("").map(e=>n[e]||e).join("").toString()}}}},"44ae":function(e,t,n){"use strict";n("8da5")},"7c1e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container referencias"},[t("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},e._l(e.orderedData,(function(n){return t("div",{key:n.link,staticClass:"referencias__item"},[t("span",{domProps:{innerHTML:e._s(n.referencia)}}),n.link?t("a",{staticClass:"ms-1",attrs:{href:n.link,target:"_blank"}},[t("span",{domProps:{innerHTML:e._s(n.link)}}),t("i",{staticClass:"ms-1 fas fa-external-link-alt"})]):e._e(),t("hr",{staticClass:"my-3"})])})),0)],1)},i=[],r=n("3887"),s={name:"Referencias",mixins:[r["a"]],computed:{referenciasData(){return this.$config.referencias},orderedData(){const e=[...this.referenciasData].sort((e,t)=>{const n=this.quitarAcentos(e.referencia.split(" ")[0].toLowerCase()),a=this.quitarAcentos(t.referencia.split(" ")[0].toLowerCase());return n<a?-1:n>a?1:0});return e}}},c=s,o=(n("44ae"),n("2877")),u=Object(o["a"])(c,a,i,!1,null,null,null);t["default"]=u.exports},"8da5":function(e,t,n){}}]);
//# sourceMappingURL=referencias.071daae9.js.map