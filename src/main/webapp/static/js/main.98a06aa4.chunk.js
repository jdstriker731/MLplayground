(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){e.exports=a(46)},21:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),c=a.n(o),s=(a(21),a(10)),i=a(11),r=a(3),u=a(15),m=a(14),d=a(6),p=a.n(d),f=a(12),h=a(7),b=a(2),E=a(13),v=a.n(E);var g=function(e){return e.show&&l.a.createElement("div",{className:"creation-modal"},l.a.createElement(v.a,{type:"TailSpin",color:"#4287f5",height:"100",width:"100",top:"auto",bottom:"auto"}))};a(44);var N=function(e){var t=e.show,a=e.close,o=(e.children,Object(n.useState)([])),c=Object(b.a)(o,2),s=c[0],i=c[1],r=Object(n.useState)(""),u=Object(b.a)(r,2),m=u[0],d=u[1],E=Object(n.useState)(!1),v=Object(b.a)(E,2),N=v[0],w=v[1],j=Object(n.useState)(!1),O=Object(b.a)(j,2),y=O[0],k=O[1],S=Object(n.useState)(!1),M=Object(b.a)(S,2),C=M[0],x=M[1],I=Object(n.useState)(!1),D=Object(b.a)(I,2),B=D[0],L=D[1],A=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function T(){i([]),d([]),w(!1),k(!1),L(!1),document.getElementById("input-dialog").reset(),a()}function F(){return(F=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,A(4e3);case 3:x(!1),L(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t&&l.a.createElement("div",{className:"creation-modal"},l.a.createElement("section",{className:"modal-main"},l.a.createElement(g,{show:C}),l.a.createElement("form",{className:"input-dialog",id:"input-dialog",action:"/upload",method:"POST",enctype:"multipart/form-data"},l.a.createElement("input",{type:"text",className:"dataset-namer",id:"dataset-namer",name:"dataset-namer",placeholder:"Dataset name...",onChange:function(e){e.persist(),d(e.target.value),w(!0)}}),l.a.createElement("input",{type:"file",mutliple:"true",className:"file-upload-dialog",id:"file-upload-dialog",name:"file-upload-dialog",onChange:function(e){e.persist(),i([].concat(Object(h.a)(s),Object(h.a)(e.target.files))),k(!0)},disabled:!N,accept:".jpg, .jpeg, .png"}),l.a.createElement("label",{className:"file-label",htmlFor:"file-upload-dialog"},"Browse for photos"),l.a.createElement("div",{className:"uploadInfo"},l.a.createElement("div",{className:"dataset-info",disabled:!y},l.a.createElement("p",null,"Dataset Info:"),l.a.createElement("p",null,"Name: ",m.length?m:"N/A"),l.a.createElement("p",null,"Number of images: ",s.length>0?s.length:"N/A")),!B&&l.a.createElement("button",{type:"submit",className:"dataset-upload",disabled:!y,onClick:function(){return F.apply(this,arguments)}},"Upload dataset")),B&&l.a.createElement("div",{className:"post-upload"},l.a.createElement("p",null,"Dataset upload complete!"),l.a.createElement("button",{className:"close-modal",onClick:T},"Close"))),!B&&l.a.createElement("button",{className:"cancel",onClick:T},"Cancel")))},w=function(){window.location.replace("/authenticate")},j=[],O=function(){fetch("/dataset-names").then((function(e){return e.json()})).then((function(e){j=[];for(var t=0;t<e.length;t++)j.push(e[t])}))},y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).menuItems=e.menuItems,n.state={values:[],createMode:!1},n.showModal=n.showModal.bind(Object(r.a)(n)),n.hideModal=n.hideModal.bind(Object(r.a)(n)),n}return Object(i.a)(a,[{key:"showModal",value:function(){this.setState({createMode:!0})}},{key:"hideModal",value:function(){this.setState({createMode:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"form-wrapper",onLoad:O},l.a.createElement(N,{show:this.state.createMode,close:this.hideModal}),l.a.createElement("button",{type:"button",onClick:w},"Login/Logout"),l.a.createElement("br",null),l.a.createElement("div",{className:"form"},l.a.createElement("form",{className:"embedding-form",onSubmit:this.handleSubmit},this.menuItems.map((function(t){return l.a.createElement("label",{key:t.title,className:"form-category"},l.a.createElement("span",{className:"category-title"},t.title,":"),l.a.createElement("select",{value:e.state.values[t.index]},t.values.map((function(e){return l.a.createElement("option",{className:"form-option",key:e,value:e},e)}))))})),l.a.createElement("button",{type:"submit",className:"form-submit"},"Submit"))),l.a.createElement("button",{type:"button",className:"create-dataset-button",onClick:this.showModal},"Create a new dataset"))}}]),a}(l.a.Component),k=(a(45),[{index:0,title:"Model",values:["DeLF"]},{index:1,title:"Visualizer",values:["t-SNE"]},{index:2,title:"Dataset",values:["Dataset 1","Dataset 2"]}]);function S(){return l.a.createElement("div",{className:"App"},l.a.createElement(y,{menuItems:k}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.98a06aa4.chunk.js.map