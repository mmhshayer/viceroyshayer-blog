(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{235:function(t,e,n){"use strict";e.a={methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}},248:function(t,e,n){"use strict";n.r(e);var r,o,c=n(6),l=(n(51),n(64),n(178),n(44),n(123),n(30),{layout:"list",mixins:[n(235).a],asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n().only(["title","description","slug","tags","createdAt"]).fetch();case 3:return r=e.sent,e.abrupt("return",{postList:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{query:"",tagFilter:[]}},methods:{pushTagFilter:function(t){this.tagFilter.includes(t)||this.tagFilter.push(t)},removeTagFilter:function(t){this.tagFilter.splice(t,1)}},watch:{query:{handler:(o=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.query||(this.postList=this.postList),t.next=3,this.$content().only(["title","description","slug","tags","createdAt"]).where({tags:{$contains:this.tagFilter}}).search(e).fetch();case 3:this.postList=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},tagFilter:{handler:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 0==this.tagFilter.length&&(this.postList=this.postList),t.next=3,this.$content().only(["title","description","slug","tags","createdAt"]).where({tags:{$contains:this.tagFilter}}).fetch();case 3:this.postList=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}}}),h=n(21),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-5 md:mx-24 lg:mx-44 xl:mx-56 2xl:mx-86"},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"w-full rounded-2xl h-10 p-5 my-5 shadow-lg",attrs:{type:"search",autocomplete:"off",placeholder:"Search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),t._l(this.tagFilter,(function(e,r){return n("button",{key:r,staticClass:"mx-2 p-2 my-2 rounded-2xl bg-blue-400 hover:bg-red-400 mb-5 shadow-2xl hover:shadow-inner",on:{click:function(e){return t.removeTagFilter(r)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),n("div",{},t._l(t.postList,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"mb-5 p-5 rounded-2xl shadow-lg hover:shadow-2xl bg-indigo-500 hover:bg-indigo-600"},[n("h2",{staticClass:"text-2xl font-bold leading-8 tracking-tight"},[t._v(t._s(e.title))]),t._v(" "),n("sub",{},[t._v(t._s(t.formatDate(e.createdAt)))]),t._v(" "),n("div",{staticClass:"flex flex-row justify-between"},[n("p",{staticClass:"max-w-none"},[t._v(t._s(e.description))]),t._v(" "),n("button",{staticClass:"h-20 w-20 rounded-2xl bg-green-500 hover:bg-blue-400 hover:shadow-2xl"},[n("NuxtLink",{attrs:{to:e.slug}},[t._v("Read More")])],1)]),t._v(" "),t._l(e.tags,(function(e,r){return n("button",{key:r,staticClass:"mr-2 p-2 mt-2 rounded-2xl bg-green-500 hover:bg-blue-400 hover:shadow-2xl",on:{click:function(n){return t.pushTagFilter(e)}}},[t._v(t._s(e))])}))],2)])})),0)],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-center py-10"},[n("h1",{staticClass:"text-7xl font-bold"},[t._v("Blog")]),t._v(" "),n("section",[n("sub",{staticClass:"leading-8 font-light text-sm"},[t._v("Mohammad Mustakim Hassan")]),t._v(" "),n("p",[t._v("\n          Hi! Welcome to my blog. I write about my experiances, thoughts on random topic. I use this like a diary/journal, so it is opinioned, you may or maynot like it. However I am open to constructive discussion and debates. Emails are welcome.\n        ")])])])}],!1,null,"575a633e",null);e.default=component.exports}}]);