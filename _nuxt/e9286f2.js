(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{436:function(t,n,c){"use strict";c.r(n);var e=c(134),r={};r.props={action:String,icon:String},r.setup=function(t,n){var c=n.emit,r=Object(e.d)(!1);return{activated:r,accepted:function(){c("accepted"),r.value=!1}}};var o=r,v=c(100),d=c(135),l=c.n(d),_=c(277),f=c(441),k=c(430),w=c(476),V=c(199),component=Object(v.a)(o,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("v-dialog",{attrs:{"max-width":"350"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on,r=n.attrs;return[c("span",t._g(t._b({},"span",r,!1),e),[c("v-icon",{attrs:{left:"",dark:"",smal:""}},[t._v("\n        "+t._s(t.icon)+"\n      ")]),t._v("\n      "+t._s(t.action)+"\n    ")],1)]}}]),model:{value:t.activated,callback:function(n){t.activated=n},expression:"activated"}},[t._v(" "),c("v-card",[c("v-card-title",[t._t("title")],2),t._v(" "),c("v-card-text",[t._t("description")],2),t._v(" "),c("v-card-actions",[c("v-btn",{on:{click:t.accepted}},[t._v(t._s(t.action))]),t._v(" "),c("v-btn",{on:{click:function(n){t.activated=!1}}},[t._v("Cancelar")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:_.a,VCard:f.a,VCardActions:k.a,VCardText:k.b,VCardTitle:k.c,VDialog:w.a,VIcon:V.a})}}]);