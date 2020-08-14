(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(48)},23:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(14),s=a.n(c),o=(a(23),a(3)),l=a(8),r=a(6),u=a(5),m=a(4),h=a(11),d=a.n(h),v=a(15),p=a(12),f=a(7),g=a(16),b=a.n(g);var w=function(e){return e.show&&i.a.createElement("div",{className:"creation-modal"},i.a.createElement(b.a,{type:"TailSpin",color:"#4287f5",height:"100",width:"100",top:"auto",bottom:"auto"}))};a(46);var E=function(e){var t=e.show,a=e.close,c=(e.children,Object(n.useState)([])),s=Object(f.a)(c,2),o=s[0],l=s[1],r=Object(n.useState)(""),u=Object(f.a)(r,2),m=u[0],h=u[1],g=Object(n.useState)(!1),b=Object(f.a)(g,2),E=b[0],j=b[1],O=Object(n.useState)(!1),y=Object(f.a)(O,2),N=y[0],k=y[1],M=Object(n.useState)(!1),C=Object(f.a)(M,2),x=C[0],S=C[1],I=Object(n.useState)(!1),z=Object(f.a)(I,2),D=z[0],W=z[1],A=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function B(){l([]),h([]),j(!1),k(!1),W(!1),document.getElementById("input-dialog").reset(),a()}function H(){return(H=Object(v.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,A(4e3);case 3:S(!1),W(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t&&i.a.createElement("div",{className:"creation-modal"},i.a.createElement("section",{className:"modal-main"},i.a.createElement(w,{show:x}),i.a.createElement("form",{className:"input-dialog",id:"input-dialog"},i.a.createElement("input",{type:"text",className:"dataset-namer",id:"dataset-namer",placeholder:"Dataset name...",onChange:function(e){e.persist(),h(e.target.value),j(!0)}}),i.a.createElement("input",{type:"file",multiple:"multiple",className:"file-upload-dialog",id:"file-upload-dialog",onChange:function(e){e.persist(),l([].concat(Object(p.a)(o),Object(p.a)(e.target.files))),k(!0)},disabled:!E,accept:".jpg, .jpeg, .png"}),i.a.createElement("label",{className:"file-label",htmlFor:"file-upload-dialog"},"Browse for photos"),i.a.createElement("div",{className:"uploadInfo"},i.a.createElement("div",{className:"dataset-info",disabled:!N},i.a.createElement("p",null,"Dataset Info:"),i.a.createElement("p",null,"Name: ",m.length?m:"N/A"),i.a.createElement("p",null,"Number of images: ",o.length>0?o.length:"N/A")),!D&&i.a.createElement("button",{type:"submit",className:"dataset-upload",disabled:!N,onClick:function(){return H.apply(this,arguments)}},"Upload dataset")),D&&i.a.createElement("div",{className:"post-upload"},i.a.createElement("p",null,"Dataset upload complete!"),i.a.createElement("button",{className:"close-modal",onClick:B},"Close"))),!D&&i.a.createElement("button",{className:"cancel",onClick:B},"Cancel")))},j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).menuItems=e.menuItems,n.state={values:[],createMode:!1},n.showModal=n.showModal.bind(Object(r.a)(n)),n.hideModal=n.hideModal.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"showModal",value:function(){this.setState({createMode:!0})}},{key:"hideModal",value:function(){this.setState({createMode:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"form-wrapper"},i.a.createElement(E,{show:this.state.createMode,close:this.hideModal}),i.a.createElement("div",{className:"form"},i.a.createElement("form",{className:"embedding-form",onSubmit:this.handleSubmit},this.menuItems.map((function(t){return i.a.createElement("label",{key:t.title,className:"form-category"},i.a.createElement("span",{className:"category-title"},t.title,":"),i.a.createElement("select",{value:e.state.values[t.index]},t.values.map((function(e){return i.a.createElement("option",{className:"form-option",key:e,value:e},e)}))))})),i.a.createElement("button",{type:"submit",className:"form-submit"},"Submit"))),i.a.createElement("button",{type:"button",className:"create-dataset-button",onClick:this.showModal},"Create a new dataset"))}}]),a}(i.a.Component),O=(a(47),a(1)),y=a(17),N=function e(t){Object(o.a)(this,e),this.width=t,this.height=t},k=function e(t,a,n,i){Object(o.a)(this,e),this.image=t,this.width=t.width*i,this.height=t.height*n,this.numImages=a},M=function e(t,a,n){function i(){var e=700*Math.random();return Math.random()>.5?-e:e}Object(o.a)(this,e),this.x=void 0==t?i():t,this.y=void 0==a?i():a,this.z=void 0==n?-400:n},C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e,n){var i;Object(o.a)(this,a),i=t.call(this);for(var c=0;c<e.numImages;c++){var s=n[c];i.vertices.push(new O.m(s.x,s.y,s.z),new O.m(s.x+e.image.width,s.y,s.z),new O.m(s.x+e.image.width,s.y+e.image.height,s.z),new O.m(s.x,s.y+e.image.height,s.z));var l=new O.b(i.vertices.length-4,i.vertices.length-3,i.vertices.length-2),r=new O.b(i.vertices.length-4,i.vertices.length-2,i.vertices.length-1);i.faces.push(l,r);var u=c%10*(e.image.width/e.width),m=Math.floor(c/10)*(e.image.height/e.height);i.faceVertexUvs[0].push([new O.l(u,m),new O.l(u+.1,m),new O.l(u+.1,m+.1)]),i.faceVertexUvs[0].push([new O.l(u,m),new O.l(u+.1,m+.1),new O.l(u,m+.1)])}return i}return a}(O.c),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).canvasWidth=e.canvasWidth,n.canvasHeight=e.canvasHeight,n}return Object(l.a)(a,[{key:"createCanvas",value:function(){var e=document.createElement("canvas");return this.mount.appendChild(e),e.style.height=this.canvasHeight,e.style.width=this.canvasWidth,e}},{key:"createCamera",value:function(){var e=new O.g(90,2,.1,1e4);return e.position.z=500,e}},{key:"componentDidMount",value:function(){var e=this.createCanvas(),t=new O.n({antialias:!0,canvas:e});t.setSize(800,800);var a=new O.j,n=this.createCamera(),i=new O.h(16777215,.7,0);i.position.set(1,1,100),a.add(i);for(var c=new y.a(n,t.domElement),s=new O.k,o=new O.f({map:s.load("https://storage.cloud.google.com/i_dunno/zrh_0.jpg")}),l=new N(128),r=new k(l,100,10,10),u=[],m=0;m<r.numImages;++m)u[m]=new M;var h=new C(r,u),d=new O.e(h,o);d.position.set(0,0,0),a.add(d),function e(){t.render(a,n),requestAnimationFrame(e),c.update()}()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{ref:function(t){return e.mount=t}})}}]),a}(i.a.Component),S=[{index:0,title:"Model",values:["DeLF"]},{index:1,title:"Visualizer",values:["t-SNE"]},{index:2,title:"Dataset",values:["Dataset 1","Dataset 2"]}];function I(){return i.a.createElement("div",{className:"App"},i.a.createElement(j,{menuItems:S}),i.a.createElement(x,{canvasHeight:"60%",canvasWidth:"60%"}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.39bdab6d.chunk.js.map