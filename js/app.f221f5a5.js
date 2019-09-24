(function(t){function e(e){for(var r,u,s=e[0],a=e[1],c=e[2],d=0,f=[];d<s.length;d++)u=s[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.showQuestion?n("question",{on:{"update-words":t.updateWords,hide:t.hideQuestion}}):t._e(),t._l(t.words,(function(t,e){return n("answer",{key:e,attrs:{word:t}})}))],2)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{correct:t.correct,incorrect:t.incorrect}},[n("button",{on:{click:t.readWord}},[t._v("▶️")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],attrs:{disabled:t.correct,type:"text",role:"textbox",autocapitalize:"off",autocomplete:"off",autocorrect:"off",spellcheck:"false"},domProps:{value:t.answer},on:{change:t.onChange,input:function(e){e.target.composing||(t.answer=e.target.value)}}}),n("button",{on:{click:t.submit}},[t._v("OK")])])},s=[],a=(n("7514"),{name:"Answer",props:{word:{type:String,default:null}},data:function(){return{answer:"",synth:window.speechSynthesis,submitted:!1}},computed:{correct:function(){return this.submitted&&this.answer===this.word},incorrect:function(){return this.submitted&&this.answer!==this.word}},methods:{readWord:function(){var t=this.synth.getVoices().find((function(t){return"fr-FR"==t.lang})),e=new SpeechSynthesisUtterance(this.word);e.voice=t,this.synth.speak(e)},submit:function(){this.submitted=!0},onChange:function(){this.submitted=!1}}}),c=a,l=(n("6501"),n("2877")),d=Object(l["a"])(c,u,s,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],attrs:{autocapitalize:"off"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}}),n("button",{on:{click:t.hide}},[t._v("OK")])])},h=[],w=(n("28a5"),{name:"Question",props:{},data:function(){return{question:""}},computed:{words:function(){return this.question.split("\n").filter((function(t){return""!==t}))}},methods:{hide:function(){this.$emit("hide")}},watch:{words:function(){this.$emit("update-words",this.words)}}}),m=w,v=Object(l["a"])(m,p,h,!1,null,null,null),b=v.exports,y={name:"app",components:{Answer:f,Question:b},data:function(){return{words:[],showQuestion:!0}},methods:{updateWords:function(t){this.words=t},hideQuestion:function(){this.showQuestion=!1}}},g=y,_=(n("034f"),Object(l["a"])(g,o,i,!1,null,null,null)),O=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,n){},6501:function(t,e,n){"use strict";var r=n("c09d"),o=n.n(r);o.a},c09d:function(t,e,n){}});
//# sourceMappingURL=app.f221f5a5.js.map