(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comple"],{"15ef":function(t,a,e){"use strict";e("1cbc")},"1cbc":function(t,a,e){},"4e3e":function(t,a,e){"use strict";e("7d54")},"7d54":function(t,a,e){"use strict";var n=e("23e7"),s=e("2266"),r=e("59ed"),o=e("825a"),c=e("46c4");n({target:"Iterator",proto:!0,real:!0},{forEach:function(t){o(this),r(t);var a=c(this),e=0;s(a,(function(a){t(a,e++)}),{IS_RECORD:!0})}})},dbb5:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"curso-main-container complementario"},[a("BannerInterno",{attrs:{icono:"far fa-folder-open",titulo:"Material complementario"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a("div",{staticClass:"table-responsive"},[a("table",[t._m(0),a("tbody",t._l(t.computedData,(function(e,n){return a("tr",{key:"complementario-"+n},[a("td",{staticClass:"text-start",attrs:{colspan:"3",scope:"row"},domProps:{innerHTML:t._s(e.tema)}}),a("td",{staticClass:"text-start",attrs:{colspan:"5",scope:"row"},domProps:{innerHTML:t._s(e.referencia)}}),a("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(e.tipo)}}),a("td",{attrs:{colspan:"2"}},[a("div",{staticClass:"complementario__enlaces"},t._l(e.link,(function(t){return a("a",{staticClass:"complementario__btn",attrs:{href:t,target:"_blank"}},[a("i",{staticClass:"fas fa-external-link-alt"})])})),0)])])})),0)])])])],1)},s=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{attrs:{colspan:"3",scope:"col"}},[t._v("Tema")]),a("th",{attrs:{colspan:"5",scope:"col"}},[t._v("Referencia APA del material")]),a("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Tipo ")]),a("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Enlace")])])])}],r=(e("14d9"),e("0643"),e("4e3e"),e("a573"),{name:"MaterialComplementario",computed:{complementarioData(){return this.$config.complementario},computedData(){const t=this.$config.complementario;return t.map(t=>{let a=[];return t.link?"string"===typeof t.link?a.push(t.link):a=t.link:t.descarga&&("string"===typeof t.descarga?a.push(this.obtenerLink(t.descarga)):t.descarga.forEach(t=>{a.push(this.obtenerLink(t))})),{...t,link:a}})}}}),o=r,c=(e("15ef"),e("2877")),i=Object(c["a"])(o,n,s,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=comple.fa26559e.js.map