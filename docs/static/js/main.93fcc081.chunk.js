(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(37)},28:function(e,t,n){},30:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(9),r=n.n(s),i=n(5),c=n(12),l={showApp:!0,songs:[{title:"prva pesma",performer:"neki neko",id:1},{title:"druga pesma",performer:"neko drugi",id:2}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SONGS":return Object.assign({},e,{songs:t.songs});case"SHOW_LIST":return Object.assign({},e,{showApp:t.flag});default:return e}},d=Object(c.b)(u,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),p=(n(28),n(2)),h=n(3),m=n(7),f=n(4),b=n(6),g=(n(30),n(31),n(8)),j=n(1),v=function(e){return{type:"SONGS",songs:e}},O=function(e){return{type:"SHOW_LIST",flag:e}},w=(n(33),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).exitDelete=n.exitDelete.bind(Object(j.a)(Object(j.a)(n))),n.ahamMethod=n.ahamMethod.bind(Object(j.a)(Object(j.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"exitDelete",value:function(){var e=this;console.log("exitDelete#deleteModal");var t=this.props.songs.map(function(t){return t.id===e.props.id?Object(g.a)({},t,{denyDelete:!0,deleteSong:!1}):t});this.props.setSongs(t)}},{key:"ahamMethod",value:function(){var e=this;console.log("ahamMethod#deleteModal");var t=this.props.songs.map(function(t){return t.id===e.props.id?Object(g.a)({},t,{confirmPassword:!0,deleteSong:!1}):t});this.props.setSongs(t)}},{key:"render",value:function(){return this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"delete-form"},a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("div",null,"Je l ti Rada dala sifru za brisanje?"),a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Aham",onClick:this.ahamMethod}),a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Nije :(",onClick:this.exitDelete}))),this.modalRoot):null}}]),t}(o.Component)),y=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(v(t))}}})(w),E=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).denyOK=n.denyOK.bind(Object(j.a)(Object(j.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"denyOK",value:function(){var e=this;console.log("denyOK#denyModal");var t=this.props.songs.map(function(t){return t.id===e.props.id?Object(g.a)({},t,{denyDelete:!1}):t});this.props.setSongs(t),this.props.showList(!0)}},{key:"render",value:function(){return!0===this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"denyModal"},a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("div",null,"Ma nema veze, brisanje je ionako bezveze"),a.a.createElement("input",{type:"submit",value:"Ok",onClick:this.denyOK}))),this.modalRoot):null}}]),t}(o.Component),S=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(v(t))},showList:function(t){return e(O(t))}}})(E),k=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).setData=n.setData.bind(Object(j.a)(Object(j.a)(n))),n.confirmPassword=n.confirmPassword.bind(Object(j.a)(Object(j.a)(n))),n.fetchSongs=n.fetchSongs.bind(Object(j.a)(Object(j.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"fetchSongs",value:function(){var e=this,t=new URL("https://radmilatomic.pythonanywhere.com/api/songs"),n=new Request(t,{method:"GET",mode:"cors"});fetch(n).then(function(e){return e.json()}).then(function(t){return e.setData(t)}).catch(function(e){console.log(e)})}},{key:"setData",value:function(e){console.log(e),this.props.setSongs(e)}},{key:"confirmPassword",value:function(){var e=this;if(console.log("confirmPassword#ConfirmedPasswordModal"),console.log(this.inputPassword.value),"sifrujelakoprovaliti"===this.inputPassword.value){var t=new URL("https://radmilatomic.pythonanywhere.com/api/deletesong/"+this.props.id),n=new Request(t,{method:"GET",mode:"no-cors"});fetch(n).then(function(){return e.fetchSongs()}).catch(function(e){console.log(e)});var o=this.props.songs.map(function(t){return t.id===e.props.id?Object(g.a)({},t,{confirmPassword:!1}):t});this.props.setSongs(o),this.props.showList(!0)}else{console.log("nije dobra sifra");var a=this.props.songs.map(function(t){return t.id===e.props.id?Object(g.a)({},t,{confirmPassword:!1,wrongPassword:!0}):t});this.props.setSongs(a)}}},{key:"render",value:function(){var e=this;return!0===this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"confirmPasswordModal"},a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("div",null,"Da cujem, koja je sifra"),a.a.createElement("input",{type:"password",ref:function(t){return e.inputPassword=t}}),a.a.createElement("input",{type:"submit",value:"Submit",onClick:this.confirmPassword}))),this.modalRoot):null}}]),t}(o.Component),D=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(v(t))},showList:function(t){return e(O(t))}}})(k),P=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).accept=n.accept.bind(Object(j.a)(Object(j.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"accept",value:function(){var e=this;console.log("accept#wrongPasswordModal");var t=this.props.songs.map(function(t){return t.id===e.props.id?Object(g.a)({},t,{wrongPassword:!1}):t});this.props.setSongs(t),this.props.showList(!0)}},{key:"render",value:function(){return this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"wrongPasswordInfo"},a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("div",null,"Ok, ne znas ipak sifru, al Rada nije to lepo ni sakrila, mozes lako da je provalis"),a.a.createElement("input",{type:"submit",value:"Hm,hvala",onClick:this.accept}))),this.modalRoot):null}}]),t}(o.Component),R=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(v(t))},showList:function(t){return e(O(t))}}})(P),L=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).deleteMethod=n.deleteMethod.bind(Object(j.a)(Object(j.a)(n))),n.setData=n.setData.bind(Object(j.a)(Object(j.a)(n))),n.fetchSongs=n.fetchSongs.bind(Object(j.a)(Object(j.a)(n))),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"setData",value:function(e){console.log(e),this.props.setSongs(e)}},{key:"fetchSongs",value:function(){var e=this,t=new URL("https://radmilatomic.pythonanywhere.com/api/songs"),n=new Request(t,{method:"GET",mode:"cors"});fetch(n).then(function(e){return e.json()}).then(function(t){return e.setData(t)}).catch(function(e){console.log(e)})}},{key:"deleteMethod",value:function(e){var t=this;e.preventDefault(),console.log("deleteMethod#Song");var n=this.props.songs.map(function(e){return e.id===t.props.item.id?Object(g.a)({},e,{deleteSong:!0}):e});this.props.setSongs(n),this.props.showList(!1)}},{key:"render",value:function(){var e=a.a.createElement("div",null,a.a.createElement(y,{show:this.props.item.deleteSong,id:this.props.item.id}),a.a.createElement(S,{show:this.props.item.denyDelete,id:this.props.item.id}),a.a.createElement(D,{show:this.props.item.confirmPassword,id:this.props.item.id}),a.a.createElement(R,{show:this.props.item.wrongPassword,id:this.props.item.id}));return this.props.showApp?a.a.createElement("div",null,a.a.createElement("div",{id:"songContainer"},a.a.createElement("div",{id:"songTitle"},this.props.item.title),a.a.createElement("div",{id:"songPerformer"},this.props.item.performer),a.a.createElement("input",{type:"submit",value:"Delete",onClick:this.deleteMethod})),e):e}}]),t}(o.Component),M=Object(i.b)(function(e){return{songs:e.songs,showApp:e.showApp}},function(e){return{setSongs:function(t){return e(v(t))},showList:function(t){return e(O(t))}}})(L),N=(n(35),function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"setData",value:function(e){console.log(e),this.props.setSongs(e)}},{key:"componentDidMount",value:function(){var e=this,t=new URL("https://radmilatomic.pythonanywhere.com/api/songs"),n=new Request(t,{method:"GET",mode:"cors"});fetch(n).then(function(e){return e.json()}).then(function(t){return e.setData(t)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(y,null),a.a.createElement("div",{id:"songList"},this.props.songs.map(function(e){return a.a.createElement(M,{item:e,key:e.id,id:e.id})})))}}]),t}(o.Component)),C=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(v(t))}}})(N),T=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).fetchSongs=n.fetchSongs.bind(Object(j.a)(Object(j.a)(n))),n.addSong=n.addSong.bind(Object(j.a)(Object(j.a)(n))),n.setData=n.setData.bind(Object(j.a)(Object(j.a)(n))),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"setData",value:function(e){console.log(e),this.props.setSongs(e)}},{key:"fetchSongs",value:function(){var e=this,t=new URL("https://radmilatomic.pythonanywhere.com/api/songs"),n=new Request(t,{method:"GET",mode:"cors"});fetch(n).then(function(e){return e.json()}).then(function(t){return e.setData(t)}).catch(function(e){console.log(e)})}},{key:"addSong",value:function(e){var t=this;console.log("song will be added here"),e.preventDefault();var n=new FormData(document.getElementById("form")),o=new URL("https://radmilatomic.pythonanywhere.com/api/addsong"),a=new Request(o,{method:"POST",body:n,mode:"cors"});fetch(a).then(function(){return t.fetchSongs()}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return a.a.createElement("form",{id:"form"},a.a.createElement("div",null,"Title:",a.a.createElement("input",{name:"title"})),a.a.createElement("div",null,"Performer:",a.a.createElement("input",{name:"performer"}),a.a.createElement("input",{type:"submit",value:"Add",onClick:this.addSong})))}}]),t}(o.Component),_=Object(i.b)(null,function(e){return{setSongs:function(t){return e(v(t))}}})(T),I=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,"ovo je moja playlista, al dodaj i ti slobodno neku pesmu"),a.a.createElement(_,null),a.a.createElement(C,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(i.a,{store:d},a.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.93fcc081.chunk.js.map