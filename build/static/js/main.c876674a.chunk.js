(this.webpackJsonpindecisionapp=this.webpackJsonpindecisionapp||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),s=(n(13),n(14),n(2)),u=n(3),c=n(1),l=n(5),d=n(4),h=function(t){var e=t.task,n=t.hasDone,a=t.toggleStatus,i=t.id;return o.a.createElement("p",{className:n?"Todo Complete":"Todo Incomplete",onClick:function(){return a(i)}},e)},m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={value:""},a.handleChange=a.handleChange.bind(Object(c.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(c.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(t){var e=t.target;this.setState({value:e.value})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.state.value&&(this.props.onSubmit(this.state.value),this.setState({value:""}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{autoFocus:!0,type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"Add your todo here..."})))}}]),n}(o.a.Component),v=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={todoList:[]},a.addTodo=a.addTodo.bind(Object(c.a)(a)),a.toggleTodoStatus=a.toggleTodoStatus.bind(Object(c.a)(a)),a}return Object(u.a)(n,[{key:"addTodo",value:function(t){this.setState((function(e){var n=e.todoList.slice();return n.push({task:t,hasDone:!1,id:(new Date).getTime()}),{todoList:n}}))}},{key:"toggleTodoStatus",value:function(t){this.setState((function(e){var n=e.todoList.map((function(t){return Object.assign({},t)})),a=n.findIndex((function(e){return e.id===t}));return n[a].hasDone=!n[a].hasDone,{todoList:n}}))}},{key:"render",value:function(){var t=this,e=this.state.todoList.map((function(e){var n=e.task,a=e.hasDone,i=e.id;return o.a.createElement(h,{key:i,id:i,task:n,hasDone:a,toggleStatus:t.toggleTodoStatus})}));return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h1",null,"Todo"),e,o.a.createElement(m,{onSubmit:this.addTodo}))}}]),n}(o.a.Component),f=function(){return o.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c876674a.chunk.js.map