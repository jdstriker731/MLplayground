(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){e.exports=a(46)},21:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(13),s=a.n(c),l=(a(21),a(5)),r=a(6),i=a(2),u=a(9),m=a(8),d=a(10),p=a.n(d),h=a(14),f=a(11),b=a(3),E=a(15),v=a.n(E);var g=function(e){return e.show&&o.a.createElement("div",{className:"creation-modal"},o.a.createElement(v.a,{type:"TailSpin",color:"#4287f5",height:"100",width:"100",top:"auto",bottom:"auto"}))};a(44);var j=function(e){var t=e.show,a=e.close,c=(e.children,Object(n.useState)([])),s=Object(b.a)(c,2),l=s[0],r=s[1],i=Object(n.useState)(""),u=Object(b.a)(i,2),m=u[0],d=u[1],E=Object(n.useState)(!1),v=Object(b.a)(E,2),j=v[0],O=v[1],N=Object(n.useState)(!1),w=Object(b.a)(N,2),y=w[0],k=w[1],S=Object(n.useState)(!1),M=Object(b.a)(S,2),C=M[0],D=M[1],U=Object(n.useState)(!1),x=Object(b.a)(U,2),B=x[0],I=x[1],A=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function T(){r([]),d([]),O(!1),k(!1),I(!1),document.getElementById("input-dialog").reset(),a()}function J(){return(J=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,A(4e3);case 3:D(!1),I(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t&&o.a.createElement("div",{className:"creation-modal"},o.a.createElement("section",{className:"modal-main"},o.a.createElement(g,{show:C}),o.a.createElement("form",{className:"input-dialog",id:"input-dialog",action:"/upload",method:"POST",enctype:"multipart/form-data"},o.a.createElement("input",{type:"text",className:"dataset-namer",id:"dataset-namer",name:"dataset-namer",placeholder:"Dataset name...",onChange:function(e){e.persist(),d(e.target.value),O(!0)}}),o.a.createElement("input",{type:"file",className:"file-upload-dialog",id:"file-upload-dialog",name:"file-upload-dialog",onChange:function(e){e.persist(),r([].concat(Object(f.a)(l),Object(f.a)(e.target.files))),k(!0)},disabled:!j,accept:".jpg, .jpeg, .png",multiple:!0}),o.a.createElement("label",{className:"file-label",htmlFor:"file-upload-dialog"},"Browse for photos"),o.a.createElement("div",{className:"uploadInfo"},o.a.createElement("div",{className:"dataset-info",disabled:!y},o.a.createElement("p",null,"Dataset Info:"),o.a.createElement("p",null,"Name: ",m.length?m:"N/A"),o.a.createElement("p",null,"Number of images: ",l.length>0?l.length:"N/A")),!B&&o.a.createElement("button",{type:"submit",className:"dataset-upload",disabled:!y,onClick:function(){return J.apply(this,arguments)}},"Upload dataset")),B&&o.a.createElement("div",{className:"post-upload"},o.a.createElement("p",null,"Dataset upload complete!"),o.a.createElement("button",{className:"close-modal",onClick:T},"Close"))),!B&&o.a.createElement("button",{className:"cancel",onClick:T},"Cancel")))},O=function(){window.location.replace("/authenticate")},N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={values:[],createMode:!1},n.showModal=n.showModal.bind(Object(i.a)(n)),n.hideModal=n.hideModal.bind(Object(i.a)(n)),n}return Object(r.a)(a,[{key:"showModal",value:function(){this.setState({createMode:!0})}},{key:"hideModal",value:function(){this.setState({createMode:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"form-wrapper"},o.a.createElement(j,{show:this.state.createMode,close:this.hideModal}),o.a.createElement("button",{type:"button",onClick:O},"Login/Logout"),o.a.createElement("br",null),o.a.createElement("div",{className:"form"},o.a.createElement("form",{className:"embedding-form",onSubmit:this.handleSubmit},o.a.createElement("label",{className:"form-category"},o.a.createElement("span",{className:"category-title"},"Dataset:"),o.a.createElement("select",{name:"dataset",id:"dataset"},this.props.datasets.map((function(e){return o.a.createElement("option",{className:"form-option",key:e,value:e},e)})))),o.a.createElement("button",{type:"submit",className:"form-submit"},"Submit"))),o.a.createElement("button",{type:"button",className:"create-dataset-button",onClick:this.showModal},"Create a new dataset"))}}]),a}(o.a.Component),w=(a(45),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={datasets:[]},n.fetchUserDatasets=n.fetchUserDatasets.bind(Object(i.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchUserDatasets()}},{key:"fetchUserDatasets",value:function(){var e=this;fetch("/dataset-names").then((function(e){return e.json()})).then((function(t){e.setState({datasets:t})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(N,{userDatasets:this.state.datasets}))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.5a9546e8.chunk.js.map