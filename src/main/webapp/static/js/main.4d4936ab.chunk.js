(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,a){e.exports=a(49)},24:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(14),c=a.n(i),o=(a(24),a(3)),l=a(7),r=a(4),u=a(6),d=a(5),h=a(11),m=a.n(h),f=a(15),v=a(12),p=a(8),b=a(16),g=a.n(b);var w=function(e){return e.show&&s.a.createElement("div",{className:"creation-modal"},s.a.createElement(g.a,{type:"TailSpin",color:"#4287f5",height:"100",width:"100",top:"auto",bottom:"auto"}))};a(47);var j=function(e){var t=e.show,a=e.close,i=(e.children,Object(n.useState)([])),c=Object(p.a)(i,2),o=c[0],l=c[1],r=Object(n.useState)(""),u=Object(p.a)(r,2),d=u[0],h=u[1],b=Object(n.useState)(!1),g=Object(p.a)(b,2),j=g[0],y=g[1],O=Object(n.useState)(!1),E=Object(p.a)(O,2),k=E[0],N=E[1],S=Object(n.useState)(!1),C=Object(p.a)(S,2),M=C[0],D=C[1],x=Object(n.useState)(!1),z=Object(p.a)(x,2),U=z[0],A=z[1],I=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function V(){l([]),h([]),y(!1),N(!1),A(!1),document.getElementById("input-dialog").reset(),a()}function W(){return(W=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,I(4e3);case 3:D(!1),A(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t&&s.a.createElement("div",{className:"creation-modal"},s.a.createElement("section",{className:"modal-main"},s.a.createElement(w,{show:M}),s.a.createElement("form",{className:"input-dialog",id:"input-dialog",action:"/upload",method:"POST",enctype:"multipart/form-data"},s.a.createElement("input",{type:"text",className:"dataset-namer",id:"dataset-namer",name:"dataset-namer",placeholder:"Dataset name...",onChange:function(e){e.persist(),h(e.target.value),y(!0)}}),s.a.createElement("input",{type:"file",className:"file-upload-dialog",id:"file-upload-dialog",name:"file-upload-dialog",onChange:function(e){e.persist(),l([].concat(Object(v.a)(o),Object(v.a)(e.target.files))),N(!0)},disabled:!j,accept:".jpg, .jpeg, .png",multiple:!0}),s.a.createElement("label",{className:"file-label",htmlFor:"file-upload-dialog"},"Browse for photos"),s.a.createElement("div",{className:"uploadInfo"},s.a.createElement("div",{className:"dataset-info",disabled:!k},s.a.createElement("p",null,"Dataset Info:"),s.a.createElement("p",null,"Name: ",d.length?d:"N/A"),s.a.createElement("p",null,"Number of images: ",o.length>0?o.length:"N/A")),!U&&s.a.createElement("button",{type:"submit",className:"dataset-upload",disabled:!k,onClick:function(){return W.apply(this,arguments)}},"Upload dataset")),U&&s.a.createElement("div",{className:"post-upload"},s.a.createElement("p",null,"Dataset upload complete!"),s.a.createElement("button",{className:"close-modal",onClick:V},"Close"))),!U&&s.a.createElement("button",{className:"cancel",onClick:V},"Cancel")))},y=function(){window.location.replace("/authenticate")},O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={selectedValue:"",createMode:!1},n.setSelection=n.setSelection.bind(Object(r.a)(n)),n.submitSelection=n.submitSelection.bind(Object(r.a)(n)),n.showModal=n.showModal.bind(Object(r.a)(n)),n.hideModal=n.hideModal.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"setSelection",value:function(e){var t=this;e.persist(),this.setState({selectedValue:e.target.value},(function(){console.log(t.state.selectedValue)}))}},{key:"submitSelection",value:function(){this.props.callback(this.state.selectedValue)}},{key:"showModal",value:function(){this.setState({createMode:!0})}},{key:"hideModal",value:function(){this.setState({createMode:!1})}},{key:"render",value:function(){return s.a.createElement("div",{className:"form-wrapper"},s.a.createElement(j,{show:this.state.createMode,close:this.hideModal}),s.a.createElement("button",{type:"button",onClick:y},"Login/Logout"),s.a.createElement("br",null),s.a.createElement("div",{className:"form"},s.a.createElement("div",{className:"embedding-form"},s.a.createElement("label",{className:"form-category"},s.a.createElement("span",{className:"category-title"},"Dataset:"),s.a.createElement("select",{onChange:this.setSelection,name:"dataset",id:"dataset"},this.props.userDatasets.map((function(e){return s.a.createElement("option",{className:"form-option",key:e,value:e},e)})))),s.a.createElement("button",{onClick:this.submitSelection,className:"form-submit"},"Submit"))),s.a.createElement("button",{type:"button",className:"create-dataset-button",onClick:this.showModal},"Create a new dataset"))}}]),a}(s.a.Component),E=(a(48),a(17)),k=a(1),N=a(18),S=function e(t){Object(o.a)(this,e),this.width=t,this.height=t},C=function e(t,a,n,s){Object(o.a)(this,e),this.image=t,this.width=t.width*s,this.height=t.height*n,this.numImages=a},M=function e(t,a,n){function s(){var e=700*Math.random();return Math.random()>.5?-e:e}Object(o.a)(this,e),this.x=void 0==t?s():t,this.y=void 0==a?s():a,this.z=void 0==n?-400:n},D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e,n){var s;Object(o.a)(this,a),s=t.call(this);for(var i=0;i<e.numImages;i++){var c=n[i];s.vertices.push(new k.n(c.x,c.y,c.z),new k.n(c.x+e.image.width,c.y,c.z),new k.n(c.x+e.image.width,c.y+e.image.height,c.z),new k.n(c.x,c.y+e.image.height,c.z));var l=new k.c(s.vertices.length-4,s.vertices.length-3,s.vertices.length-2),r=new k.c(s.vertices.length-4,s.vertices.length-2,s.vertices.length-1);s.faces.push(l,r);var u=i%10*(e.image.width/e.width),d=Math.floor(i/10)*(e.image.height/e.height);s.faceVertexUvs[0].push([new k.m(u,d),new k.m(u+.1,d),new k.m(u+.1,d+.1)]),s.faceVertexUvs[0].push([new k.m(u,d),new k.m(u+.1,d+.1),new k.m(u,d+.1)])}return s}return a}(k.d),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).dataset=e.dataset,n.canvasWidth=e.canvasWidth,n.canvasHeight=e.canvasHeight,n}return Object(l.a)(a,[{key:"initAtlas",value:function(){var e="/coordinates-retrieval?dataset=".concat(this.dataset),t=0;fetch(e).then((function(e){return e.json()})).then((function(e){t=e.points.length}));var a=new S(64);return new C(a,t,1,t)}},{key:"initPoints",value:function(){var e="/coordinates-retrieval?dataset=".concat(this.dataset),t=[];return fetch(e).then((function(e){return e.json()})).then((function(e){var a,n=Object(E.a)(e.points);try{for(n.s();!(a=n.n()).done;){var s=a.value,i=s.x,c=s.y,o=s.z;t.push(new M(i,c,o))}}catch(l){n.e(l)}finally{n.f()}})),t}},{key:"createCanvas",value:function(){var e=document.createElement("canvas");return this.mount.appendChild(e),e.style.height=this.canvasHeight,e.style.width=this.canvasWidth,e}},{key:"createCamera",value:function(){var e=new k.h(90,2,.1,1e4);return e.position.z=500,e}},{key:"componentDidMount",value:function(){var e=this.createCanvas(),t=new k.o({antialias:!0,canvas:e});t.setSize(800,800);var a=new k.k,n=this.createCamera(),s=new k.i(16777215,.7,0);s.position.set(1,1,100),a.add(s);var i=new N.a(n,t.domElement),c=new k.l;c.setCrossOrigin("anonymous");var o="/spritesheet-retrieval?dataset=".concat(this.dataset),l=new k.g({map:c.load(o)});l.side=k.a;var r=this.initAtlas(),u=this.initPoints(),d=new D(r,u),h=new k.f(d,l);h.position.set(0,0,0),a.add(h),function e(){t.render(a,n),requestAnimationFrame(e),i.update()}()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{ref:function(t){return e.mount=t}})}}]),a}(s.a.Component),z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={datasets:[],selectedDataset:""},n.fetchUserDatasets=n.fetchUserDatasets.bind(Object(r.a)(n)),n.selectionCallback=n.selectionCallback.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"selectionCallback",value:function(e){this.setState((function(){return{selectedDataset:e}}),(function(){console.log("dataset set to: "+e)}))}},{key:"componentDidMount",value:function(){this.fetchUserDatasets()}},{key:"fetchUserDatasets",value:function(){var e=this;fetch("/dataset-names").then((function(e){return e.json()})).then((function(t){e.setState({datasets:t})}))}},{key:"datasetSelected",value:function(){return""!==this.state.selectedDataset}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(O,{userDatasets:this.state.datasets,callback:this.selectionCallback}),this.datasetSelected()&&s.a.createElement(x,{canvasWidth:800,canvasHeight:800,dataset:this.state.selectedDataset}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.4d4936ab.chunk.js.map