(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(9),r=n.n(i),s=(n(15),n(6)),j=(n(16),n(17),n(21)),o=n(22),l=n(0),u=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(!1),u=Object(s.a)(r,2),b=u[0],h=u[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{style:{width:"25rem"},children:[Object(l.jsx)(j.a.Img,{variant:"top",src:e.image}),Object(l.jsxs)(j.a.Body,{children:[Object(l.jsx)(j.a.Title,{children:"Contact List"}),Object(l.jsxs)(j.a.Text,{children:[Object(l.jsxs)("p",{children:["Name: ",e.name]}),Object(l.jsxs)("p",{children:["Email: ",e.email]}),b&&Object(l.jsxs)("p",{children:["Nationality: ",e.nationality]}),a&&Object(l.jsxs)("p",{children:["Age: ",e.age]})]}),Object(l.jsx)(o.a,{variant:"primary",onClick:function(){return h(!b)},children:"Show Nationality"}),Object(l.jsx)(o.a,{variant:"primary",onClick:function(){return i(!a)},children:"Show Age"})]})]})})},b=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("https://randomuser.me/api/?results=6").then((function(e){return e.json()})).then((function(e){console.log(e),a(e.results)}))}),[]),Object(l.jsx)(l.Fragment,{children:n.map((function(e){return Object(l.jsx)(u,{image:e.picture.large,name:e.name.first+" "+e.name.last,email:e.email,nationality:e.nat,age:e.dob.age})}))})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),h()}},[[19,1,2]]]);
//# sourceMappingURL=main.0a4e275a.chunk.js.map