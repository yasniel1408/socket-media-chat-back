(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{153:function(e,a,t){e.exports=t(260)},158:function(e,a,t){},189:function(e,a,t){},259:function(e,a,t){},260:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(35),l=t.n(s),o=(t(158),t(61)),r=t(148),i=t(135),m=t.n(i)()("/"),u=(t(189),t(262)),f=t(263),d=t(264),h=t(60),E=function(e){var a=e.name,t=e.setName,s=u.a.useForm(),l=Object(o.a)(s,1)[0],i=Object(n.useState)([]),E=Object(o.a)(i,2),b=E[0],p=E[1];Object(n.useEffect)((function(){m.emit("conectado",a)}),[a]),Object(n.useEffect)((function(){return m.on("messages",(function(e){p([].concat(Object(r.a)(b),[e]))})),function(){m.off()}}),[b,l]);var g=Object(n.useRef)(null);Object(n.useEffect)((function(){g.current.scrollIntoView({behavior:"smooth"})}));return c.a.createElement("div",{className:"divChat"},c.a.createElement(f.a,{className:"site-page-header",onBack:function(){return t("")},title:"SocialNet",subTitle:"This is a fast chat"}),c.a.createElement("table",{className:"chat"},b.map((function(e,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",null,e.name,":"),c.a.createElement("td",null,e.message))})),c.a.createElement("div",{ref:g})),c.a.createElement(u.a,{name:"basic",layout:"inline",className:"formSend",onFinish:function(e){console.log("Success:",e.message),m.emit("message",a,e.message),l.resetFields()},onFinishFailed:function(e){console.log("Failed:",e)},form:l},c.a.createElement(u.a.Item,{name:"message",rules:[{required:!0,message:"Please input your message!"}]},c.a.createElement(d.a,null)),c.a.createElement(h.a,{type:"dashed",htmlType:"reset"},"Reset"),c.a.createElement(h.a,{type:"primary",htmlType:"submit"},"Send")))};t(259);var b=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(!1),r=Object(o.a)(l,2),i=r[0],m=r[1];return c.a.createElement("div",{className:"App"},!i&&c.a.createElement(u.a,{name:"basic",className:"login",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e.username),s(e.name),m(!0)},onFinishFailed:function(e){console.log("Failed:",e)}},c.a.createElement("h1",null,"Login"),c.a.createElement(u.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}]},c.a.createElement(d.a,null)),c.a.createElement(h.a,{type:"primary",htmlType:"submit"},"Entrar")),i&&c.a.createElement(E,{name:t,setName:s}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[153,1,2]]]);
//# sourceMappingURL=main.4a22ef0b.chunk.js.map