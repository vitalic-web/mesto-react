(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),i=(a(16),a(10)),s=a(4),l=a(1),u=a(7),p=a.n(u);var m=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:p.a,alt:"\u043b\u043e\u0433\u043e"}))},d=o.a.createContext();var _=function(e){var t=e.card,a=e.onCardClick,r=e.onCardLike,c=e.onCardDelete,i=Object(n.useContext)(d),s=t.owner._id===i._id,l=t.likes.some((function(e){return e._id===i._id}));return o.a.createElement("div",{className:"element"},o.a.createElement("img",{className:"element__image",src:"",alt:"",style:{backgroundImage:"url(".concat(t.link,")"),backgroundPosition:"center",backgroundSize:"cover"},onClick:function(){a(t.name,t.link,!0)}}),o.a.createElement("button",{onClick:function(){c(t)},className:"element__delete ".concat(!s&&"element__delete_hidden"),type:"button"}),o.a.createElement("div",{className:"element__title"},o.a.createElement("h2",{className:"element__title-text"},t.name),o.a.createElement("div",{className:"element__like-container"},o.a.createElement("button",{onClick:function(){r(t)},className:"element__title-like ".concat(l&&"element__title-like_active"),type:"button"}),o.a.createElement("div",{className:"element__like-amount"},t.likes.length))))};var h=function(e){var t=e.cards,a=e.onCardLike,r=e.onCardDelete,c=e.onEditProfile,i=e.onAddPlace,s=e.onEditAvatar,l=e.onCardClick,u=Object(n.useContext)(d);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__info"},o.a.createElement("img",{className:"profile__avatar",src:"",alt:"",style:{backgroundImage:"url(".concat(u&&u.avatar,")"),backgroundPosition:"center",backgroundSize:"cover"}}),o.a.createElement("div",{className:"profile__avatar-editor",onClick:s}),o.a.createElement("div",{className:"profile__author"},o.a.createElement("div",{className:"profile__title"},o.a.createElement("h1",{className:"profile__title-name"},u&&u.name),o.a.createElement("button",{className:"profile__title-button",type:"button",onClick:c})),o.a.createElement("p",{className:"profile__subtitle"},u&&u.about))),o.a.createElement("button",{className:"profile__add-button",type:"button",onClick:i})),o.a.createElement("section",{className:"elements","aria-label":"\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"},t.map((function(e){return o.a.createElement(_,{key:e._id,card:e,onCardClick:l,onCardLike:a,onCardDelete:r})}))))};var f=function(){return o.a.createElement("footer",{className:"footer"},"\xa9 2020 Mesto Russia")};var v=function(e){var t=e.title,a=e.name,n=e.children,r=e.isOpen,c=e.onClose,i=e.onSubmit;return o.a.createElement("section",{className:"popup popup_".concat(a," ").concat(r?"popup_active":"")},o.a.createElement("form",{className:"popup__container",onSubmit:i},o.a.createElement("h3",{className:"popup__title"},t),n,o.a.createElement("button",{className:"popup__close-icon",type:"button",onClick:c})))};var b=function(e){var t=e.card,a=e.onClose;return o.a.createElement("div",{className:"popup popup_open_photo ".concat(t.visibility?"popup_active":"")},o.a.createElement("div",{className:"popup-photo"},o.a.createElement("img",{className:"popup-photo__image",src:t.link,alt:""}),o.a.createElement("h2",{className:"popup-photo__text"},t.name),o.a.createElement("button",{className:"popup__close-icon",type:"button",onClick:a})))};var E=function(e){var t=e.isOpen,a=e.onClose,r=e.onUpdateUser,c=Object(n.useState)(""),i=Object(l.a)(c,2),s=i[0],u=i[1],p=Object(n.useState)(""),m=Object(l.a)(p,2),_=m[0],h=m[1],f=Object(n.useContext)(d);return Object(n.useEffect)((function(){f&&(u(f.name),h(f.about))}),[f]),o.a.createElement(v,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit_profile",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r(s,_)}},o.a.createElement("input",{name:"name",className:"popup__input popup__input_filed_name",type:"text",required:!0,pattern:"[\u0410-\u042f\u0401\u0430-\u044f\u0451A-Za-z -]{1,}",minLength:"2",maxLength:"40",id:"name-input",placeholder:"\u0418\u043c\u044f",value:s,onChange:function(e){u(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error-message",id:"name-input-error"}),o.a.createElement("input",{name:"about",className:"popup__input popup__input_filed_prof",type:"text",required:!0,minLength:"2",maxLength:"200",id:"prof-input",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",value:_,onChange:function(e){h(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error-message",id:"prof-input-error"}),o.a.createElement("button",{className:"popup__save-button",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var k=function(e){var t=e.isOpen,a=e.onClose,r=e.onUpdateAvatar,c=Object(n.useRef)("");return o.a.createElement(v,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit_avatar",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r(c.current.value)}},o.a.createElement("input",{name:"avatar",className:"popup__input popup__input_filed_avatar-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,id:"avatar-input",ref:c}),o.a.createElement("span",{className:"popup__input-error-message",id:"avatar-input-error"}),o.a.createElement("button",{className:"popup__save-button",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var C=function(e){var t=e.isOpen,a=e.onClose,r=e.onAddPlaceSubmit,c=Object(n.useRef)(""),i=Object(n.useRef)("");return o.a.createElement(v,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add_photo",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r(c.current.value,i.current.value),c.current.value="",i.current.value=""}},o.a.createElement("input",{name:"place",className:"popup__input popup__input_filed_name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",id:"place-input",ref:c}),o.a.createElement("span",{className:"popup__input-error-message",id:"place-input-error"}),o.a.createElement("input",{name:"link",className:"popup__input popup__input_filed_prof",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"link-input",ref:i}),o.a.createElement("span",{className:"popup__input-error-message",id:"link-input-error"}),o.a.createElement("button",{className:"popup__save-button",type:"submit"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))},N=a(8),g=a(9),O=new(function(){function e(t){Object(N.a)(this,e),this._url=t.url,this._method=t.method,this._headers=t.headers}return Object(g.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:this._method,headers:this._headers}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:this._method,headers:this._headers}).then(this._handleResponse)}},{key:"setProfileInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse):fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-13",method:"GET",headers:{authorization:"91300657-0053-4635-a6b2-461fc085116c","Content-Type":"application/json"}});var y=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),u=Object(l.a)(c,2),p=u[0],_=u[1],N=Object(n.useState)(!1),g=Object(l.a)(N,2),y=g[0],j=g[1],S=Object(n.useState)({name:"",link:"",visibility:!1}),L=Object(l.a)(S,2),P=L[0],x=L[1],A=Object(n.useState)(),R=Object(l.a)(A,2),w=R[0],D=R[1],I=Object(n.useState)([]),T=Object(l.a)(I,2),U=T[0],q=T[1];function J(){j(!1),r(!1),_(!1),x((function(e){return Object(s.a)(Object(s.a)({},e),{},{visibility:!1})}))}return Object(n.useEffect)((function(){Promise.all([O.getProfileInfo(),O.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];D(a),q(n)})).catch((function(e){return console.error(e)}))}),[]),Object(n.useEffect)((function(){function e(e){e.target.classList.contains("popup_active")&&J()}function t(e){"Escape"===e.key&&J()}return document.addEventListener("click",e),document.addEventListener("keydown",t),function(){document.removeEventListener("click",e),document.removeEventListener("keydown",t)}})),o.a.createElement(d.Provider,{value:w},o.a.createElement("div",{className:"page"},o.a.createElement(m,null),o.a.createElement(h,{cards:U,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===w._id}));O.changeLikeCardStatus(e._id,t).then((function(t){var a=U.map((function(a){return a._id===e._id?t:a}));q(a)}))},onCardDelete:function(e){O.deleteCard(e).then((function(){var t=U.filter((function(t){return t._id!==e._id}));q(t)}))},onEditProfile:function(){r(!a)},onAddPlace:function(){_(!p)},onEditAvatar:function(){j(!y)},onCardClick:function(e,t,a){x({name:e,link:t,visibility:a})}}),o.a.createElement(E,{isOpen:a,onClose:J,onUpdateUser:function(e,t){O.setProfileInfo(e,t).then((function(e){D(e),J()})).catch((function(e){return console.error(e)}))}}),o.a.createElement(k,{isOpen:y,onClose:J,onUpdateAvatar:function(e){O.editAvatar(e).then((function(e){D(e),J()}))}}),o.a.createElement(C,{isOpen:p,onClose:J,onAddPlaceSubmit:function(e,t){O.addCard(e,t).then((function(a){q([a].concat(Object(i.a)(U))),J(),e="",t=""}))}}),o.a.createElement(v,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"is_delete"},o.a.createElement("button",{className:"popup__save-button popup__save-button_delete",type:"submit"},"\u0414\u0430")),o.a.createElement(b,{card:P,onClose:J}),o.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a.p+"static/media/header__logo.855a8c98.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.19d13052.chunk.js.map