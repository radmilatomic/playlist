(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(43)},28:function(e,t,n){},30:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(8),r=n.n(s),i=n(5),c=n(12),l={showApp:!0,showAddModal:!1,showDenyAddModal:!1,showConfirmAddPassword:!1,showWrongPasswordAddModal:!1,songs:[{title:"prva pesma",performer:"neki neko",id:1},{title:"druga pesma",performer:"neko drugi",id:2}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SONGS":return Object.assign({},e,{songs:t.songs});case"SHOW_LIST":return Object.assign({},e,{showApp:t.flag});case"SHOW_ADD_MODAL":return Object.assign({},e,{showAddModal:t.flag});case"SHOW_DENY_ADD_MODAL":return Object.assign({},e,{showDenyAddModal:t.flag});case"SHOW_CONFIRM_ADD_PASSWORD":return Object.assign({},e,{showConfirmAddPassword:t.flag});case"SHOW_WRONG_PASSWORD_ADD_MODAL":return Object.assign({},e,{showWrongPasswordAddModal:t.flag});default:return e}},u=Object(c.b)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),p=(n(28),n(2)),h=n(3),m=n(7),f=n(4),b=n(6),w=(n(30),n(31),n(9)),g=n(1),O=function(e){return{type:"SONGS",songs:e}},v=function(e){return{type:"SHOW_LIST",flag:e}},j=function(e){return{type:"SHOW_ADD_MODAL",flag:e}},y=function(e){return{type:"SHOW_DENY_ADD_MODAL",flag:e}},A=function(e){return{type:"SHOW_CONFIRM_ADD_PASSWORD",flag:e}},E=function(e){return{type:"SHOW_WRONG_PASSWORD_ADD_MODAL",flag:e}},D=(n(33),n(35),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).exitDelete=n.exitDelete.bind(Object(g.a)(Object(g.a)(n))),n.ahamMethod=n.ahamMethod.bind(Object(g.a)(Object(g.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"exitDelete",value:function(){var e=this;console.log("exitDelete#deleteModal");var t=this.props.songs.map(function(t){return t.id===e.props.id?Object(w.a)({},t,{denyDelete:!0,deleteSong:!1}):t});this.props.setSongs(t)}},{key:"ahamMethod",value:function(){var e=this;console.log("ahamMethod#deleteModal");var t=this.props.songs.map(function(t){return t.id===e.props.id?Object(w.a)({},t,{confirmPassword:!0,deleteSong:!1}):t});this.props.setSongs(t)}},{key:"render",value:function(){return this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"delete-form"},a.a.createElement("div",{className:"buttonsWrapper"},"Je l ti Rada dala sifru za brisanje?"),a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Aham",onClick:this.ahamMethod}),a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Nije :(",onClick:this.exitDelete}))),this.modalRoot):null}}]),t}(o.Component)),S=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(O(t))}}})(D),M=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).denyOK=n.denyOK.bind(Object(g.a)(Object(g.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"denyOK",value:function(){var e=this;console.log("denyOK#denyModal");var t=this.props.songs.map(function(t){return t.id===e.props.id?Object(w.a)({},t,{denyDelete:!1}):t});this.props.setSongs(t),this.props.showList(!0)}},{key:"render",value:function(){return!0===this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"denyModal"},a.a.createElement("div",{className:"buttonsWrapper"},"Ma nema veze, brisanje je ionako bezveze"),a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Ok",onClick:this.denyOK}))),this.modalRoot):null}}]),t}(o.Component),k=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(O(t))},showList:function(t){return e(v(t))}}})(M),P=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).setData=n.setData.bind(Object(g.a)(Object(g.a)(n))),n.confirmPassword=n.confirmPassword.bind(Object(g.a)(Object(g.a)(n))),n.fetchSongs=n.fetchSongs.bind(Object(g.a)(Object(g.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"fetchSongs",value:function(){var e=this,t=new URL("https://radmilatomic.pythonanywhere.com/api/songs"),n=new Request(t,{method:"GET",mode:"cors"});fetch(n).then(function(e){return e.json()}).then(function(t){return e.setData(t)}).catch(function(e){console.log(e)})}},{key:"setData",value:function(e){console.log(e),this.props.setSongs(e)}},{key:"confirmPassword",value:function(){var e=this;if(console.log("confirmPassword#ConfirmedPasswordModal"),console.log(this.inputPassword.value),"sifrujelakoprovaliti"===this.inputPassword.value){var t=new URL("https://radmilatomic.pythonanywhere.com/api/deletesong/"+this.props.id),n=new Request(t,{method:"GET",mode:"no-cors"});fetch(n).then(function(){return e.fetchSongs()}).catch(function(e){console.log(e)});var o=this.props.songs.map(function(t){return t.id===e.props.id?Object(w.a)({},t,{confirmPassword:!1}):t});this.props.setSongs(o),this.props.showList(!0)}else{console.log("nije dobra sifra");var a=this.props.songs.map(function(t){return t.id===e.props.id?Object(w.a)({},t,{confirmPassword:!1,wrongPassword:!0}):t});this.props.setSongs(a)}}},{key:"render",value:function(){var e=this;return!0===this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"confirmPasswordModal"},a.a.createElement("div",{className:"buttonsWrapper"},"Da cujem, koja je sifra"),a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("input",{className:"buttonDetails",type:"password",ref:function(t){return e.inputPassword=t}})),a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Submit",onClick:this.confirmPassword})),this.modalRoot):null}}]),t}(o.Component),N=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(O(t))},showList:function(t){return e(v(t))}}})(P),R=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).accept=n.accept.bind(Object(g.a)(Object(g.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"accept",value:function(){var e=this;console.log("accept#wrongPasswordModal");var t=this.props.songs.map(function(t){return t.id===e.props.id?Object(w.a)({},t,{wrongPassword:!1}):t});this.props.setSongs(t),this.props.showList(!0)}},{key:"render",value:function(){return this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"wrongPasswordInfo"},a.a.createElement("div",{className:"buttonsWrapper"},"Ok, ne znas ipak sifru, al Rada nije to lepo ni sakrila, mozes lako da je provalis"),a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Hm,hvala",onClick:this.accept}))),this.modalRoot):null}}]),t}(o.Component),W=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(O(t))},showList:function(t){return e(v(t))}}})(R),C=(n(37),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).deleteMethod=n.deleteMethod.bind(Object(g.a)(Object(g.a)(n))),n.setData=n.setData.bind(Object(g.a)(Object(g.a)(n))),n.fetchSongs=n.fetchSongs.bind(Object(g.a)(Object(g.a)(n))),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"setData",value:function(e){console.log(e),this.props.setSongs(e)}},{key:"fetchSongs",value:function(){var e=this,t=new URL("https://radmilatomic.pythonanywhere.com/api/songs"),n=new Request(t,{method:"GET",mode:"cors"});fetch(n).then(function(e){return e.json()}).then(function(t){return e.setData(t)}).catch(function(e){console.log(e)})}},{key:"deleteMethod",value:function(e){var t=this;e.preventDefault(),console.log("deleteMethod#Song");var n=this.props.songs.map(function(e){return e.id===t.props.item.id?Object(w.a)({},e,{deleteSong:!0}):e});this.props.setSongs(n),this.props.showList(!1)}},{key:"editMethod",value:function(){console.log("Song#editMethod")}},{key:"render",value:function(){var e=a.a.createElement("div",null,a.a.createElement(S,{show:this.props.item.deleteSong,id:this.props.item.id}),a.a.createElement(k,{show:this.props.item.denyDelete,id:this.props.item.id}),a.a.createElement(N,{show:this.props.item.confirmPassword,id:this.props.item.id}),a.a.createElement(W,{show:this.props.item.wrongPassword,id:this.props.item.id}));return this.props.showApp?a.a.createElement("div",null,a.a.createElement("div",{class:"songContainer"},a.a.createElement("i",{class:"material-icons",style:{color:"pink"}},"music_note"),a.a.createElement("div",{class:"songTitle"},this.props.item.title),a.a.createElement("div",{class:"songPerformer"},this.props.item.performer),a.a.createElement("div",{class:"deleteButton",onClick:this.deleteMethod},a.a.createElement("i",{class:"material-icons"},"clear"))),e):e}}]),t}(o.Component)),_=Object(i.b)(function(e){return{songs:e.songs,showApp:e.showApp}},function(e){return{setSongs:function(t){return e(O(t))},showList:function(t){return e(v(t))}}})(C),L=(n(39),function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"setData",value:function(e){console.log(e),this.props.setSongs(e)}},{key:"componentDidMount",value:function(){var e=this,t=new URL("https://radmilatomic.pythonanywhere.com/api/songs"),n=new Request(t,{method:"GET",mode:"cors"});fetch(n).then(function(e){return e.json()}).then(function(t){return e.setData(t)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(S,null),a.a.createElement("div",{id:"songList"},this.props.songs.map(function(e){return a.a.createElement(_,{item:e,key:e.id,id:e.id})})))}}]),t}(o.Component)),I=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(O(t))}}})(L),T=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).ahamMethod=n.ahamMethod.bind(Object(g.a)(Object(g.a)(n))),n.exitAddModal=n.exitAddModal.bind(Object(g.a)(Object(g.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"ahamMethod",value:function(e){e.preventDefault(),console.log("ahamMethod#addModal"),this.props.showConfirmAddPasswordAction(!0),this.props.showAddModalAction(!1)}},{key:"exitAddModal",value:function(e){e.preventDefault(),console.log("exitAddModal#addModal"),this.props.showDenyAddModalAction(!0),this.props.showAddModalAction(!1)}},{key:"render",value:function(){return!0===this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"addModal"},a.a.createElement("div",{className:"buttonsWrapper"},"Je l ti Rada dala dozvolu da dodajes pesme?"),a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Aham",onClick:this.ahamMethod}),a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Nije :(",onClick:this.exitAddModal}))),this.modalRoot):null}}]),t}(o.Component),x=Object(i.b)(function(e){return{songs:e.songs,showAddModal:e.showAddModal}},function(e){return{setSongs:function(t){return e(O(t))},showList:function(t){return e(v(t))},showDenyAddModalAction:function(t){return e(y(t))},showAddModalAction:function(t){return e(j(t))},showConfirmAddPasswordAction:function(t){return e(A(t))}}})(T),z=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).denyOK=n.denyOK.bind(Object(g.a)(Object(g.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"denyOK",value:function(){console.log("denyOK#denyModal"),this.props.showDenyAddModalAction(!1),this.props.showList(!0)}},{key:"render",value:function(){return!0===this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"denyModal"},a.a.createElement("div",{className:"buttonsWrapper"},"Ma nema veze, dodavanje je ionako bezveze"),a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Ok",onClick:this.denyOK}))),this.modalRoot):null}}]),t}(o.Component),B=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(O(t))},showList:function(t){return e(v(t))},showDenyAddModalAction:function(t){return e(y(t))}}})(z),H=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).setData=n.setData.bind(Object(g.a)(Object(g.a)(n))),n.confirmPassword=n.confirmPassword.bind(Object(g.a)(Object(g.a)(n))),n.fetchSongs=n.fetchSongs.bind(Object(g.a)(Object(g.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"fetchSongs",value:function(){var e=this,t=new URL("https://radmilatomic.pythonanywhere.com/api/songs"),n=new Request(t,{method:"GET",mode:"cors"});fetch(n).then(function(e){return e.json()}).then(function(t){return e.setData(t)}).catch(function(e){console.log(e)})}},{key:"setData",value:function(e){console.log(e),this.props.setSongs(e)}},{key:"confirmPassword",value:function(){var e=this;if(console.log("confirmPassword#ConfirmedPasswordAddModal"),console.log(this.inputPassword.value),"sifrujelakoprovaliti"===this.inputPassword.value){console.log("sifra je dobra");var t=new FormData(document.getElementById("form"));t.append("title",this.props.title),t.append("performer",this.props.performer);var n=new URL("https://radmilatomic.pythonanywhere.com/api/addsong"),o=new Request(n,{method:"POST",body:t,mode:"cors"});fetch(o).then(function(){return e.fetchSongs()}).catch(function(e){console.log(e)}),this.props.showList(!0),this.props.showConfirmAddPasswordAction(!1)}else this.props.showWrongAddPasswordAction(!0),this.props.showConfirmAddPasswordAction(!1)}},{key:"render",value:function(){var e=this;return!0===this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"confirmPasswordModal"},a.a.createElement("div",{className:"buttonsWrapper"},"Da cujem, koja je sifra"),a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("input",{className:"buttonDetails",type:"password",ref:function(t){return e.inputPassword=t}})),a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Submit",onClick:this.confirmPassword})),this.modalRoot):null}}]),t}(o.Component),G=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(O(t))},showList:function(t){return e(v(t))},showWrongAddPasswordAction:function(t){return e(E(t))},showConfirmAddPasswordAction:function(t){return e(A(t))}}})(H),K=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).accept=n.accept.bind(Object(g.a)(Object(g.a)(n))),n.modalRoot=document.getElementById("modal-root"),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"accept",value:function(){console.log("accept#wrongPasswordModal"),this.props.showList(!0),this.props.showWrongAddPasswordAction(!1)}},{key:"render",value:function(){return this.props.show?r.a.createPortal(a.a.createElement("div",{className:"modal",id:"wrongPasswordInfo"},a.a.createElement("div",{className:"buttonsWrapper"},"Ok, ne znas ipak sifru, al Rada nije to lepo ni sakrila, mozes lako da je provalis"),a.a.createElement("div",{className:"buttonsWrapper"},a.a.createElement("input",{className:"buttonDetails",type:"submit",value:"Hm,hvala",onClick:this.accept}))),this.modalRoot):null}}]),t}(o.Component),U=Object(i.b)(function(e){return{songs:e.songs}},function(e){return{setSongs:function(t){return e(O(t))},showList:function(t){return e(v(t))},showWrongAddPasswordAction:function(t){return e(E(t))}}})(K),q=(n(41),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).fetchSongs=n.fetchSongs.bind(Object(g.a)(Object(g.a)(n))),n.addSong=n.addSong.bind(Object(g.a)(Object(g.a)(n))),n.setData=n.setData.bind(Object(g.a)(Object(g.a)(n))),n.setRef=n.setRef.bind(Object(g.a)(Object(g.a)(n))),n.clearInput=n.clearInput.bind(Object(g.a)(Object(g.a)(n))),n.performer="",n.title="",n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"setData",value:function(e){console.log(e),this.props.setSongs(e)}},{key:"setRef",value:function(e,t){this.performer=t,this.title=e}},{key:"clearInput",value:function(){this.inputTitle.value="",this.inputPerformer.value=""}},{key:"fetchSongs",value:function(){var e=this,t=new URL("https://radmilatomic.pythonanywhere.com/api/songs"),n=new Request(t,{method:"GET",mode:"cors"});fetch(n).then(function(e){return e.json()}).then(function(t){return e.setData(t)}).catch(function(e){console.log(e)})}},{key:"addSong",value:function(e){console.log("song will be added here"),e.preventDefault(),this.setRef(this.inputTitle.value,this.inputPerformer.value),this.props.showAddModalAction(!0),this.props.showList(!1)}},{key:"render",value:function(){var e=this,t=a.a.createElement("form",{id:"add-form"},a.a.createElement("div",{class:"addWrapper"},a.a.createElement("div",{class:"label"},"Title:"),a.a.createElement("input",{name:"title",id:"title",ref:function(t){return e.inputTitle=t}})),a.a.createElement("div",{class:"addWrapper"},a.a.createElement("div",{class:"label"},"Performer:"),a.a.createElement("input",{name:"performer",id:"performer",ref:function(t){return e.inputPerformer=t}})),a.a.createElement("input",{id:"addSong",type:"submit",value:"ADD",onClick:this.addSong}));return this.props.showApp?a.a.createElement("div",{id:"addItems"},t,a.a.createElement(x,{show:this.props.showAddModal}),a.a.createElement(B,{show:this.props.showDenyAddModal}),a.a.createElement(G,{show:this.props.showConfirmAddPassword,title:this.title,performer:this.performer}),a.a.createElement(U,{show:this.props.showWrongPasswordAddModal})):a.a.createElement("div",{id:"addItems"},a.a.createElement(x,{show:this.props.showAddModal}),a.a.createElement(B,{show:this.props.showDenyAddModal}),a.a.createElement(G,{show:this.props.showConfirmAddPassword,title:this.title,performer:this.performer}),a.a.createElement(U,{show:this.props.showWrongPasswordAddModal}))}}]),t}(o.Component)),J=Object(i.b)(function(e){return{songs:e.songs,showApp:e.showApp,showAddModal:e.showAddModal,showDenyAddModal:e.showDenyAddModal,showConfirmAddPassword:e.showConfirmAddPassword,showWrongPasswordAddModal:e.showWrongPasswordAddModal}},function(e){return{setSongs:function(t){return e(O(t))},showAddModalAction:function(t){return e(j(t))},showList:function(t){return e(v(t))}}})(q),X=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{id:"heading"},"RADINA PLAYLISTA"),a.a.createElement(J,null),a.a.createElement(I,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(i.a,{store:u},a.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.d5b0d448.chunk.js.map