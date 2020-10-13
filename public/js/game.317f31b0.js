(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"1b9f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"cards-list"},[a("v-row",[a("v-col",{attrs:{sm:"6",md:"4",cols:"12"}},[t.items.length>3?a("v-text-field",{attrs:{clearable:"","prepend-icon":"mdi-magnify",dark:"",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e()],1)],1),a("v-row",t._l(t.filteredItems,(function(e){return a("v-col",{key:e._id,staticClass:"mb-6",attrs:{sm:"6",md:"4",cols:"12"}},[a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"}},[a("v-card",{key:e._id,staticClass:"mx-auto app-card",attrs:{dark:"",raised:"","aria-describedby":e.name}},[a("router-link",{attrs:{to:t.setRoute(e._id)}},[a("div",{staticClass:"title-wrap"},[a("v-card-title",{staticClass:"row_between"},[a("span",{staticClass:"card-list-name"},[t._v(t._s(e.name))]),t._t("action",null,{item:e})],2)],1),e.players?a("v-list",{staticClass:"players",attrs:{dense:"",disabled:""}},[a("v-list-item-group",t._l(e.players,(function(e){var i=e.name;return a("v-list-item",{key:i},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s("mdi-account")}})],1),a("v-list-item-content",{domProps:{textContent:t._s(i)}})],1)})),1)],1):t._e(),a("v-img",{staticClass:"white--text align-end",attrs:{height:"350",src:t.imagePath(e,"jpg"),srcset:t.imagePath(e,"webp"),alt:e.name},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"secondary"}})],1)]},proxy:!0}],null,!0)},[a("div",{staticClass:"title-wrap"},[a("v-card-title",{staticClass:"card-list-actions"},[t.getActions(e).length?t._l(t.getActions(e),(function(i,n){return a("v-btn",{key:n,staticClass:"px-0 mx-1",attrs:{href:i.link,target:"_blank",download:i.download,rel:"noopener noreferrer",small:"","aria-label":e.name,text:"",fab:"",color:"#fff"},on:{click:function(t){t.stopPropagation()}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-"+t._s(i.icon))])],1)})):t._e(),t.items.length>1?a("v-btn",{staticClass:"px-0 mx-1",attrs:{small:"",text:"","aria-label":"Favorite",fab:"",color:e.favorite?"error":"#fff"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.favorite(e)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-heart")])],1):t._e()],2)],1)])],1)],1)],1)],1)})),1)],1)},n=[],s=(a("a623"),a("4de4"),a("caad"),a("fb6a"),a("b0c0"),a("b64b"),a("ac1f"),a("2532"),a("841c"),a("1276"),a("fc11")),r=a("f3f3"),o={name:"CardsList",props:{items:{type:Array,required:!0},route:{type:Object,required:!0}},data:function(){return{search:""}},computed:{filteredItems:function(){var t=this;!this.search&&this.getItemsOrder(this.items);var e=this.items.filter((function(e){return t.search.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))}));return this.getItemsOrder(e)}},methods:{getActions:function(t){var e=[];return t.bggURL&&e.push({link:t.bggURL,name:"Board game geek",icon:"cards"}),t.rulesURL&&e.push({link:t.rulesURL,name:"Rules",icon:"book-open-variant",download:!0}),t.melodiceURL&&e.push({link:t.melodiceURL,name:"Melodice",icon:"music"}),e},imagePath:function(t,e){return t.imageUrl?t.imageUrl:t.teams?a("e679")("./game.".concat(e)):a("544f")("./team.".concat(e))},getItemsOrder:function(t){var e=t.slice().reverse();return e.sort((function(t,e){return e.favorite-t.favorite}))},setRoute:function(t){var e=Object(r["a"])({},this.route);return e.params=Object(s["a"])({},Object.keys(this.route.params)[0],t),e},favorite:function(t){var e=!t.favorite,a={favorite:e,_id:t._id};this.$emit("favorite",a)}}},c=o,l=(a("cab4"),a("2877")),m=a("6544"),d=a.n(m),u=a("8336"),f=a("b0af"),h=a("99d9"),p=a("62ad"),g=a("132d"),v=a("adda"),b=a("24b2"),O=a("f2e7"),_=a("90a2"),j=a("58df"),y=a("80d2"),w=Object(j["a"])(b["a"],O["a"]).extend({name:"VLazy",directives:{intersect:_["a"]},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return Object(r["a"])({},this.measurableStyles)}},methods:{genContent:function(){var t=Object(y["s"])(this);if(!this.transition)return t;var e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve:function(t,e,a){this.isActive||(this.isActive=a)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),k=a("8860"),x=a("da13"),C=a("5d23"),I=a("1baa"),T=a("34c3"),R=a("490a"),L=a("0fd9"),V=a("8654"),D=Object(l["a"])(c,i,n,!1,null,"d43c45e0",null);e["a"]=D.exports;d()(D,{VBtn:u["a"],VCard:f["a"],VCardTitle:h["c"],VCol:p["a"],VIcon:g["a"],VImg:v["a"],VLazy:w,VList:k["a"],VListItem:x["a"],VListItemContent:C["a"],VListItemGroup:I["a"],VListItemIcon:T["a"],VProgressCircular:R["a"],VRow:L["a"],VTextField:V["a"]})},"1efd":function(t,e,a){t.exports=a.p+"img/team.76152c6e.jpg"},"37dd":function(t,e,a){},"4f0c":function(t,e,a){t.exports=a.p+"img/game.10a04d7d.webp"},"544f":function(t,e,a){var i={"./team.jpg":"1efd","./team.webp":"c368"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="544f"},"841c":function(t,e,a){"use strict";var i=a("d784"),n=a("825a"),s=a("1d80"),r=a("129f"),o=a("14c3");i("search",1,(function(t,e,a){return[function(e){var a=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a):new RegExp(e)[t](String(a))},function(t){var i=a(e,t,this);if(i.done)return i.value;var s=n(t),c=String(this),l=s.lastIndex;r(l,0)||(s.lastIndex=0);var m=o(s,c);return r(s.lastIndex,l)||(s.lastIndex=l),null===m?-1:m.index}]}))},a0b5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"game-details"},[a("the-title",{attrs:{title:"Teams",icon:"account-group",props:{gameId:t.gameId},component:"team-add-dialog"}}),t.winRate?a("div",{staticClass:"win-rate"},[a("v-icon",{staticClass:"mr-3",attrs:{dark:""}},[t._v("mdi-brightness-percent")]),a("span",[t._v("Your win rate is: "+t._s(t.winRate))])],1):t._e(),t.gameTeams?a("cards-list",{attrs:{items:t.gameTeams,route:t.teamRoute},on:{favorite:t.toggleFavorite},scopedSlots:t._u([{key:"action",fn:function(t){var e=t.item;return[a("team-edit-dialog",{attrs:{team:e}})]}}],null,!1,3846198980)}):t._e()],1)},n=[],s=(a("b0c0"),a("f3f3")),r=a("882a"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("the-dialog",{attrs:{"activator-icon":"pencil",color:"#fff",header:"Edit team info",simple:"","submit-logic":t.onSubmit}},[a("v-text-field",{attrs:{clearable:"",rules:t.nameRules,label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-switch",{attrs:{label:"Delete team",color:"error","hide-details":""},model:{value:t.toDelete,callback:function(e){t.toDelete=e},expression:"toDelete"}})],1)},c=[],l=a("5f37"),m=a("2f62"),d={name:"TeamEditDialog",props:{team:{type:Object,required:!0}},data:function(){return{name:this.team.name,toDelete:!1,nameRules:l["e"]}},methods:Object(s["a"])(Object(s["a"])({},Object(m["b"])("teams",["updateTeam","deleteTeam"])),{},{onSubmit:function(){this.toDelete&&this.deleteTeam(this.team._id),this.updateTheTeam()},updateTheTeam:function(){var t={_id:this.team._id,gameId:this.team.gameId,name:this.name};this.updateTeam(t)}})},u=d,f=a("2877"),h=a("6544"),p=a.n(h),g=a("b73d"),v=a("8654"),b=Object(f["a"])(u,o,c,!1,null,null,null),O=b.exports;p()(b,{VSwitch:g["a"],VTextField:v["a"]});var _=a("1b9f"),j={name:"GameDetails",components:{TheTitle:r["a"],TeamEditDialog:O,CardsList:_["a"]},props:{gameId:{type:String,required:!0}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(m["d"])("teams",["teams"])),Object(m["d"])("games",["games","winRate"])),Object(m["c"])("teams",["getGameTeams"])),Object(m["c"])("games",["getGame"])),{},{gameTeams:function(){return this.teams?this.getGameTeams(this.gameId):null},game:function(){return this.games?this.getGame(this.gameId):null},teamRoute:function(){return{name:"team",params:{teamId:""},query:{gameId:this.gameId}}}}),created:function(){this.loadData()},beforeDestroy:function(){this.setBackTitle()},methods:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(m["b"])(["setBackTitle"])),Object(m["b"])("games",["loadGames","loadWinRate"])),Object(m["b"])("teams",["updateTeam","loadTeams","loadGameTeams"])),{},{toggleFavorite:function(t){var e=Object(s["a"])(Object(s["a"])({},t),{},{gameId:this.gameId});this.updateTeam(e)},loadData:function(){var t=this;this.games||this.loadGames().then((function(){t.setBackTitle(t.getGame(t.gameId).name)})),this.teams||this.loadTeams(),this.loadWinRate(this.gameId),null!=this.games&&this.setBackTitle(this.getGame(this.gameId).name)}})},y=j,w=(a("abf5"),a("132d")),k=Object(f["a"])(y,i,n,!1,null,null,null);e["default"]=k.exports;p()(k,{VIcon:w["a"]})},abf5:function(t,e,a){"use strict";var i=a("37dd"),n=a.n(i);n.a},bf75:function(t,e,a){},c368:function(t,e,a){t.exports=a.p+"img/team.bf4c6f13.webp"},cab4:function(t,e,a){"use strict";var i=a("bf75"),n=a.n(i);n.a},cdc8:function(t,e,a){t.exports=a.p+"img/game.711fd041.jpg"},e679:function(t,e,a){var i={"./game.jpg":"cdc8","./game.webp":"4f0c"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="e679"}}]);
//# sourceMappingURL=game.317f31b0.js.map