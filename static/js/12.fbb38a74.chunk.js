(this["webpackJsonphh-blog"]=this["webpackJsonphh-blog"]||[]).push([[12],{223:function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return a})),t.d(e,"c",(function(){return o}));var r=t(229),i=t(222),c=function(){return Object(i.b)({opacity:1,transform:"translateX(0px)",from:{opacity:0,transform:"translateX(40px)"}})},a=function(){return Object(i.b)({opacity:1,transform:"translateY(0px)",from:{opacity:0,transform:"translateY(40px)"}})},o=function(){var n=Object(i.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:550,friction:50}}}));return[].concat(Object(r.a)(n),[function(n,e){return[-(e-window.innerHeight/2)/20,(n-window.innerWidth/2)/20,1.1]},function(n,e,t){return"perspective(600px) rotateX(".concat(n,"deg) rotateY(").concat(e,"deg) scale(").concat(t,")")}])}},335:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/bigbg.714ab6cf.svg"},520:function(n,e,t){"use strict";t.r(e);var r=t(5),i=t(0),c=t(54),a=t(55);function o(){var n=Object(c.a)(["\n  .cpm1{\n    margin-top:150px\n  } \n  .cpm2{\n    margin-top:50px\n  } \n"]);return o=function(){return n},n}var s=a.a.div(o()),d=t(512),p=t(212),b=t(205),l=t(519),u=t(48),j=t(57),x=t(89),f=t(61);var h=function(){return function(n){Object(f.a)({url:"/banner"}).then((function(e){n(function(n){return{type:x.b,banners:n.rows}}(e))}))}},m=function(){return function(n){Object(f.a)({url:"/area"}).then((function(e){n(function(n){return{type:x.a,areas:n.rows}}(e))}))}},g=t(514);function O(){var n=Object(c.a)(["\n    .page{\n      display:flex;\n      flex-wrap:wrap;\n      justify-content:space-evenly;\n      position: relative;\n\n      .left{\n      max-width: 500px;\n      margin-bottom:20px;\n      }\n      .right{\n        display: flex;\n        align-items:center;\n        img{\n          box-shadow: rgba(0,0,0,0.12) 1px 0px 40px 0px;\n          border-radius: 6px;\n        }\n      }\n    }\n  \n"]);return O=function(){return n},n}var v=a.a.div(O()),w=t(222),y=t(223),N=d.a.Title,C=d.a.Paragraph,k=Object(i.memo)((function(){var n=Object(j.d)((function(n){return{banners:n.getIn(["home","banners"])}}),j.b).banners,e=Object(j.c)();return Object(i.useEffect)((function(){e(h())}),[e]),Object(r.jsx)(v,{children:Object(r.jsx)(w.a.div,{style:Object(y.b)(),children:Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)(p.a,{active:!0,loading:!n[0],children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsx)(N,{children:n[0]&&n[0].title}),Object(r.jsxs)(C,{style:{lineHeight:"2em",fontSize:19,fontWeight:600,color:"#5d5d5d"},children:[n[0]&&n[0].content,"\u2728"]}),Object(r.jsx)(b.a,{shape:"round",icon:Object(r.jsx)(g.a,{}),children:Object(r.jsx)(u.b,{to:"/Find",children:" \u624b\u6c14\u4e0d\u9519"})})]}),Object(r.jsx)("div",{className:"right",children:Object(r.jsx)(l.a,{preview:!1,width:400,src:n[0]&&n[0].img})})]})})})})}));function z(){var n=Object(c.a)(["\n  width: 100%;\n  height:42%;\n  text-align:center;\n  position:relative;\n  img{\n    transition:all 1.4s;\n    opacity:0.5;\n    position:absolute;\n    bottom:0;\n    display:block;\n  }\n"]);return z=function(){return n},n}function Y(){var n=Object(c.a)(["\n  background: url(",") no-repeat top;\n  background-size: cover;\n  padding:5px;\n  .midCardContent{\n    display:flex;\n    flex-wrap:wrap;\n    margin: 219px auto 50px;\n    justify-content: center;\n\n    .midCard{\n      background: linear-gradient(180deg,#2469f4,#113bbf);\n      box-shadow: 0 16px 40px #0f2da0;\n      transition: transform .3s cubic-bezier(.645,.045,.355,1),box-shadow .3s cubic-bezier(.645,.045,.355,1);\n      position: relative;\n      height: 350px;\n      width:250px;\n      border-radius: 4px;\n      margin:10px;\n      cursor: pointer;\n      .top{\n        width: 100%;\n        height:50%;\n        text-align:center;\n        h4{\n          color:#e8e8e8;\n          margin-bottom: 24px;\n          font-size: 24px;\n          line-height: 28px;\n          text-shadow: 0 8px 12px #194ec1;\n          margin:30px 0px 0px 0px;\n        }\n        span{\n          color: hsla(0,0%,100%,.7);\n          font-size: 12px;\n          line-height: 20px;\n        }\n      }\n    }\n    .midCard:hover {\n      box-shadow: 0 20px 40px #0f2da0;\n      transform: translateY(-50px);\n      img{\n        opacity:1;\n      }\n    }\n  }\n  \n"]);return Y=function(){return n},n}var T=a.a.div(Y(),t(335).default),X=a.a.div(z()),E=d.a.Title,H=d.a.Text,I=Object(i.memo)((function(){var n=Object(j.d)((function(n){return{areas:n.getIn(["home","areas"])}}),j.b).areas,e=Object(j.c)();return Object(i.useEffect)((function(){e(m())}),[e]),Object(r.jsx)(T,{children:Object(r.jsx)(w.a.div,{style:Object(y.a)(),children:Object(r.jsx)("div",{className:"page midCardContent",children:Object(r.jsx)(p.a,{active:!0,loading:!n[0],children:n.map((function(n){return Object(r.jsx)("div",{className:"midCard",children:Object(r.jsxs)(u.b,{to:"/Blog",children:[Object(r.jsxs)("div",{className:"top",children:[Object(r.jsx)(E,{level:4,children:n.title}),Object(r.jsx)(H,{type:"secondary",children:n.second_title})]}),Object(r.jsx)(X,{children:Object(r.jsx)("img",{src:n.img,alt:""})})]})},n.id)}))})})})})}));e.default=Object(i.memo)((function(){return Object(r.jsxs)(s,{children:[Object(r.jsx)("div",{className:"home-page-wrapper cpm1",children:Object(r.jsx)(k,{})}),Object(r.jsx)("div",{className:"home-page-wrapper cpm2",children:Object(r.jsx)(I,{})}),Object(r.jsx)("div",{className:"home-page-wrapper cpm"})]})}))}}]);
//# sourceMappingURL=12.fbb38a74.chunk.js.map