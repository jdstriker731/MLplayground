(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){e.exports=a(45)},21:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),c=a.n(o),s=(a(21),a(10)),i=a(11),r=a(3),m=a(15),u=a(14),d=a(6),p=a.n(d),h=a(12),b=a(7),f=a(2),E=a(13),v=a.n(E);var g=function(e){var t=e.show?"upload-indicator display-flex":"upload-indicator display-none";return l.a.createElement("div",{className:t},l.a.createElement(v.a,{type:"TailSpin",color:"#4287f5",height:"100",width:"100",top:"auto",bottom:"auto"}))};var N=function(e){var t=e.show,a=e.close,o=(e.children,Object(n.useState)([])),c=Object(f.a)(o,2),s=c[0],i=c[1],r=Object(n.useState)(""),m=Object(f.a)(r,2),u=m[0],d=m[1],E=Object(n.useState)(!1),v=Object(f.a)(E,2),N=v[0],j=v[1],w=Object(n.useState)(!1),y=Object(f.a)(w,2),O=y[0],k=y[1],M=Object(n.useState)(!1),S=Object(f.a)(M,2),C=S[0],x=S[1],D=Object(n.useState)(!1),A=Object(f.a)(D,2),B=A[0],I=A[1],F=function(e){return new Promise((function(t){return setTimeout(t,e)}))},J=t?"creation-modal display-block":"creation-modal display-none";function P(){i([]),d([]),j(!1),k(!1),I(!1),document.getElementById("input-dialog").reset(),a()}function T(){return(T=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,F(4e3);case 3:x(!1),I(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",{className:J},l.a.createElement("section",{className:"modal-main"},l.a.createElement(g,{show:C}),l.a.createElement("form",{className:"input-dialog",id:"input-dialog"},l.a.createElement("input",{type:"text",className:"dataset-namer",id:"dataset-namer",placeholder:"Dataset name...",onChange:function(e){e.persist(),d(e.target.value),j(!0)}}),l.a.createElement("input",{type:"file",multiple:"multiple",className:"file-upload-dialog",id:"file-upload-dialog",onChange:function(e){e.persist(),i([].concat(Object(b.a)(s),Object(b.a)(e.target.files))),k(!0)},disabled:!N,accept:".jpg, .jpeg, .png"}),l.a.createElement("label",{className:"file-label",htmlFor:"file-upload-dialog"},"Browse for photos"),l.a.createElement("div",{className:"uploadInfo"},l.a.createElement("div",{className:"dataset-info",disabled:!O},l.a.createElement("p",null,"Dataset Info:"),l.a.createElement("p",null,"Name: ",u.length?u:"N/A"),l.a.createElement("p",null,"Number of images: ",s.length>0?s.length:"N/A")),!B&&l.a.createElement("button",{type:"submit",className:"dataset-upload",disabled:!O,onClick:function(){return T.apply(this,arguments)}},"Upload dataset")),B&&l.a.createElement("div",{className:"post-upload"},l.a.createElement("p",null,"Dataset upload complete!"),l.a.createElement("button",{className:"close-modal",onClick:P},"Close"))),!B&&l.a.createElement("button",{className:"cancel",onClick:P},"Cancel")))},j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).items=e.items,n.state={values:[],createMode:!1},n.showModal=n.showModal.bind(Object(r.a)(n)),n.hideModal=n.hideModal.bind(Object(r.a)(n)),n}return Object(i.a)(a,[{key:"showModal",value:function(){this.setState({createMode:!0})}},{key:"hideModal",value:function(){this.setState({createMode:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"form-wrapper"},l.a.createElement(N,{show:this.state.createMode,close:this.hideModal}),l.a.createElement("div",{className:"form"},l.a.createElement("form",{className:"embedding-form",onSubmit:this.handleSubmit},this.items.map((function(t){return l.a.createElement("label",{key:t.title,className:"form-category"},l.a.createElement("span",{className:"category-title"},t.title,":"),l.a.createElement("select",{value:e.state.values[t.index]},t.values.map((function(e){return l.a.createElement("option",{className:"form-option",key:e,value:e},e)}))))})),l.a.createElement("button",{type:"submit",className:"form-submit"},"Submit"))),l.a.createElement("button",{type:"button",className:"create-dataset-button",onClick:this.showModal},"Create a new dataset"))}}]),a}(l.a.Component),w=(a(44),[{index:0,title:"Model",values:["DeLF","other"]},{index:1,title:"Visualizer",values:["t-SNE","PCA"]},{index:2,title:"Dataset",values:["Dataset 1","Dataset 2","Create a dataset"]}]);function y(){return l.a.createElement("div",{className:"App"},l.a.createElement(j,{items:w}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.9d2f013c.chunk.js.map