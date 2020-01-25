(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{72:function(e,t,a){e.exports={root:"Spinner_root__30P1U",load6:"Spinner_load6__2K9aE",round:"Spinner_round__3ZW9V"}},84:function(e,t,a){e.exports=a(96)},89:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),o=a.n(c),i=a(5),l=Object(r.createContext)(0),s=function(e){var t=e.children,a=Object(r.useState)(window.innerWidth),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){var e=function(){return s(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n.a.createElement(l.Provider,{value:o},t)},u="forecast",m="favorites",p="settings",f="close",b="toggle",d="isDrawerOpen",g="isThemeDark",h="launch_location",O={favorites:[],isDrawerOpen:!1,isThemeDark:!1,lastLocation:null},j="calc(".concat("1rem"," * 2 + ").concat("1.5rem",")"),E="calc(".concat("4rem"," - ").concat(.5,"rem)"),v="calc(".concat("1.5rem"," * 2)"),y=a(34),w=a(4),S="FETCH_INIT",k="FETCH_SUCCESS",x="FETCH_FAILURE",D="OPEN_DRAWER",C="CLOSE_DRAWER",L="TURN_ON_DARK_THEME",T="TURN_OFF_DARK_THEME",N="ADD_TO_FAVORITES",R="REMOVE_FROM_FAVORITES",I="SET_LAST_LOCATION";function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){Object(w.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(e,t){switch(t.type){case D:return F({},e,{isDrawerOpen:!0});case C:return F({},e,{isDrawerOpen:!1});case L:return F({},e,{isThemeDark:!0});case T:return F({},e,{isThemeDark:!1});case I:return F({},e,{lastLocation:t.lastLocation});case N:return F({},e,{favorites:[].concat(Object(y.a)(e.favorites),[t.location])});case R:return F({},e,{favorites:Object(y.a)(e.favorites.filter((function(e){return t.location!==e})))});default:return e}},z=Object(r.createContext)(O),W=Object(r.createContext)((function(){})),M=function(e){var t=e.children,a=Object(r.useReducer)(_,O),c=Object(i.a)(a,2),o=c[0],l=c[1];return n.a.createElement(W.Provider,{value:l},n.a.createElement(z.Provider,{value:o},t))},B=a(28),A=(a(89),a(138)),H=a(7),q=a(143),J=a(139),U=a(137),G=a(63),V=a(3),Y=a(140),K=a(133),Q=a(68),X=a.n(Q),Z=a(49),$=a.n(Z),ee=a(69),te=a.n(ee),ae=a(132),re=a(142),ne=a(128),ce=a(129),oe=Object(G.a)((function(e){return Object(q.a)({root:{borderLeft:"".concat("0.375rem"," solid transparent")},active:{borderColor:e.palette.secondary.main}})})),ie=function(e){var t=e.icon,a=e.primary,r=e.to,c=oe(),o=n.a.useMemo((function(){return n.a.forwardRef((function(e,t){return n.a.createElement(B.c,Object.assign({to:"/".concat(r),ref:t,activeClassName:c.active},e))}))}),[r,c.active]);return n.a.createElement("li",null,n.a.createElement(re.a,{button:!0,component:o,className:c.root},t?n.a.createElement(ne.a,null,t):null,n.a.createElement(ce.a,{primary:a})))},le=a(2),se=a(131),ue=a(141),me=a(65),pe=a.n(me),fe=a(66),be=a.n(fe),de=a(24),ge=function(){return Object(r.useContext)(l)},he=function(e){var t=Object(de.a)().breakpoints.values;return ge()>=t[e]},Oe=function(){return[Object(r.useContext)(z),Object(r.useContext)(W)]},je=function(){var e=he("md"),t=Oe(),a=Object(i.a)(t,2),n=a[0].isDrawerOpen,c=a[1],o=Object(r.useCallback)((function(){c({type:D})}),[c]),l=Object(r.useCallback)((function(){c({type:C})}),[c]),s=Object(r.useCallback)((function(){e&&localStorage.setItem(d,String(!n)),n?l():o()}),[n,e,o,l]),u=Object(r.useCallback)((function(e){e?o():l()}),[o,l]);return{doesDrawerFit:e,isDrawerOpen:n,adjustDrawer:u,toggleDrawer:s,openDrawer:o,closeDrawer:l}},Ee=a(20),ve=a.n(Ee),ye=a(31),we=function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))},Se=function(e){return(new Date).getTime()-e>72e5},ke=function(){var e=Object(ye.a)(ve.a.mark((function e(){var t,a,r;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://get.geojs.io/v1/ip/geo.json");case 3:if((t=e.sent).ok){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,t.json();case 8:return a=e.sent,r=a.city.toLowerCase(),e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(0),console.error("There has been a problem with your fetch operation:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Object(ye.a)(ve.a.mark((function e(t){var a,r,n,c,o;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"aeb3d68e813dcc0785d1936dc8ddd9f0",a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t),r="".concat(a,"&appid=").concat("aeb3d68e813dcc0785d1936dc8ddd9f0","&units=metric"),e.next=6,fetch(r);case 6:if((n=e.sent).ok){e.next=9;break}return e.abrupt("return",null);case 9:return e.next=11,n.json();case 11:return c=e.sent,o={currentWeather:{city:c.name,condition:c.weather[0].main,country:c.sys.country,temperature:Math.round(c.main.temp),cloudiness:c.clouds.all,windSpeed:c.wind.speed,pressure:c.main.pressure,humidity:c.main.humidity},requestTime:(new Date).getTime()},Te(t,o),e.abrupt("return",o);case 17:return e.prev=17,e.t0=e.catch(0),console.error("There has been a problem with your fetch operation:",e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),De=function(){var e=Object(ye.a)(ve.a.mark((function e(){var t;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return localStorage.setItem("launch_location",t),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(e){for(var t in localStorage)if(t.includes("weather")&&!t.includes(e)){var a=JSON.parse(localStorage[t]).requestTime;Se(a)&&localStorage.removeItem(t)}},Le=function(e,t,a,r){return e.split(t).slice(a,r).join(t)},Te=function(e,t){localStorage.setItem("weather_forecast_".concat(e),JSON.stringify(t))},Ne=Object(G.a)((function(e){return Object(q.a)({root:{backgroundColor:e.palette.background.paper,alignSelf:"stretch",display:"flex",width:j,minHeight:E},button:{width:"100%"}})})),Re=b,Ie=f,Pe=function(e){var t=e.action,a=void 0===t?Re:t,r=Object(le.a)(e,["action"]),c=Ne(),o=je(),i=o.toggleDrawer,l=o.closeDrawer,s=i,u=" Drawer",m=n.a.createElement(pe.a,null);switch(a){case Re:u=we(Re)+u;break;case Ie:u=we(Ie)+u,s=l,m=n.a.createElement(be.a,null)}return n.a.createElement("div",{className:c.root},n.a.createElement(ue.a,{title:u},n.a.createElement(se.a,Object.assign({"aria-label":u,color:"inherit",classes:{root:c.button},onClick:s},r),m)))},Fe=Object(G.a)((function(e){return Object(q.a)({root:{width:"13rem",flexShrink:0,whiteSpace:"nowrap","& .MuiListItemIcon-root":Object(w.a)({},e.breakpoints.down("xs"),{minWidth:"calc(".concat(v," - 0.5rem)")}),"& .MuiListItem-gutters":{paddingLeft:"calc(".concat("1rem"," - ").concat("0.375rem",")"),paddingRight:"calc(".concat("1rem"," + 2rem)")}},isOpen:Object(w.a)({},e.breakpoints.up("md"),{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),width:"13rem"}),isClosed:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:j},toolbar:{display:"flex",justifyContent:"flex-end"},list:Object(w.a)({},e.breakpoints.up("md"),{height:"calc(100vh - ".concat("4rem",")"),display:"flex",flexDirection:"column",justifyContent:"space-between"}),paper:{top:"4rem"}})})),_e=function(){var e=Fe(),t=je(),a=t.doesDrawerFit,c=t.isDrawerOpen,o=t.adjustDrawer,i=t.openDrawer,l=t.closeDrawer;Object(r.useEffect)((function(){if(a){var e=localStorage.getItem(d);e?o(JSON.parse(e)):(localStorage.setItem(d,String(O.isDrawerOpen)),o(O.isDrawerOpen))}else l()}),[o,i,l,a]);var s=l,f="temporary";a&&(s=void 0,f="permanent");var b,g,h=Object(V.a)(e.root,e.isOpen),j=e.isOpen;a&&(h=Object(V.a)(e.root,(b={},Object(w.a)(b,e.isOpen,c),Object(w.a)(b,e.isClosed,!c),b)),j=Object(V.a)(e.paper,(g={},Object(w.a)(g,e.isOpen,c),Object(w.a)(g,e.isClosed,!c),g)));return n.a.createElement(Y.a,{onClose:s,variant:f,open:c,className:h,classes:{paper:j}},!a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:e.toolbar},n.a.createElement(Pe,{action:"close"})),n.a.createElement(ae.a,null)),n.a.createElement(K.a,{disablePadding:!0,className:e.list,onClick:s},n.a.createElement("div",null,n.a.createElement(ie,{icon:n.a.createElement(X.a,null),primary:we(u),to:u}),n.a.createElement(ie,{icon:n.a.createElement($.a,null),primary:we(m),to:m})),n.a.createElement("div",null,n.a.createElement(ae.a,null),n.a.createElement(ie,{icon:n.a.createElement(te.a,null),primary:we(p),to:p}))))},ze=a(32),We=a(135),Me=a(136),Be=a(52),Ae=a(71),He=a.n(Ae),qe=a(70),Je=a.n(qe),Ue=a(134),Ge=function(){var e=Oe(),t=Object(i.a)(e,2),a=t[0].isThemeDark,n=t[1],c=Object(Ue.a)("(prefers-color-scheme: dark)",{noSsr:!0}),o=Object(r.useCallback)((function(){n({type:L})}),[n]),l=Object(r.useCallback)((function(){n({type:T})}),[n]),s=Object(r.useCallback)((function(){localStorage.setItem(g,String(!a)),a?l():o()}),[o,l,a]),u=Object(r.useCallback)((function(e){n(e?{type:L}:{type:T})}),[n]);return{isThemeDark:a,prefersDarkTheme:c,toggleTheme:s,adjustTheme:u}},Ve=function(){var e=Ge(),t=e.isThemeDark,a=e.toggleTheme,r="Turn ".concat(t?"Off":"On"," Dark Theme");return n.a.createElement(ue.a,{title:r},n.a.createElement(se.a,{"aria-label":r,color:"inherit",onClick:a},t?n.a.createElement(Je.a,null):n.a.createElement(He.a,null)))},Ye=Object(G.a)((function(e){return Object(q.a)({root:{display:"flex",justifyContent:"flex-end","& > *:not(:last-child)":{marginRight:e.spacing(.5)}}})})),Ke=function(e){var t=e.refresh,a=e.favor,r=Ye();return n.a.createElement("div",{className:r.root},t,a,n.a.createElement(Ve,null))},Qe=Object(G.a)((function(e){var t;return Object(q.a)({root:{backgroundColor:e.palette.background.paper,zIndex:e.zIndex.drawer+1,"& h1":Object(w.a)({},e.breakpoints.up("sm"),{fontSize:"2rem"}),"& .MuiIconButton-root":Object(w.a)({},e.breakpoints.up("sm"),{fontSize:"1.5rem"})},toolbar:(t={paddingRight:e.spacing(1)},Object(w.a)(t,e.breakpoints.down("xs"),{minHeight:E}),Object(w.a)(t,e.breakpoints.up("sm"),{paddingRight:e.spacing(2)}),t),title:Object(w.a)({flexGrow:1,marginLeft:e.spacing(1)},e.breakpoints.up("sm"),{marginLeft:e.spacing(2)})})})),Xe=function(e){var t=e.heading,a=e.search,r=Object(le.a)(e,["heading","search"]),c=Qe();return n.a.createElement(We.a,{className:c.root},n.a.createElement(Me.a,{disableGutters:!0,variant:"dense",classes:{root:c.toolbar}},n.a.createElement(Pe,null),n.a.createElement(Be.a,{variant:"h1",className:c.title},t&&we(t)),a,n.a.createElement(Ke,r)))},Ze=a(72),$e=a.n(Ze),et=Object(G.a)((function(e){return Object(q.a)({root:{color:e.palette.secondary.main,fontSize:"5.6rem",textIndent:"-9999em",overflow:"hidden",width:"1em",height:"1em",borderRadius:"50%",margin:"0.8em auto"}})})),tt=function(e){var t=e.className,a=et();return n.a.createElement("div",{className:Object(V.a)($e.a.root,a.root,t)},"Loading...")},at=a(73),rt=a.n(at),nt=Object(G.a)((function(e){return Object(q.a)({root:{display:"flex",alignSelf:"center",width:"25rem","& > svg":{fontSize:"2rem",marginRight:e.spacing(1)}},errorBorder:{padding:"1em",boxShadow:"0 0 0 1px ".concat(e.palette.primary.contrastText)}})})),ct=function(e){var t=e.children,a=e.errorStyles,r=e.disableErrorBorder,c=void 0!==r&&r,o=nt();return n.a.createElement("div",{className:Object(V.a)(o.root,a,!c&&o.errorBorder)},n.a.createElement(rt.a,null),n.a.createElement("p",null,t))},ot=function(e){var t,a=e.children,r=e.spinnerStyles,c=e.isLoading,o=e.errorMessage,i=e.isError,l=e.displayContent,s=void 0!==l&&l,u=Object(le.a)(e,["children","spinnerStyles","isLoading","errorMessage","isError","displayContent"]);return t=c?n.a.createElement(tt,{className:r}):s&&i?n.a.createElement(n.a.Fragment,null,n.a.createElement(ct,u,o),a):i?n.a.createElement(ct,u,o):a,n.a.createElement(n.a.Fragment,null,t)},it=Object(G.a)((function(e){return Object(q.a)({root:{display:"flex",justifyContent:"center",width:"100%",marginTop:"1rem","& form":{marginRight:"0"}}})})),lt=function(e){var t=e.search,a=e.isLoading,r=e.isError,c=it();return n.a.createElement(n.a.Fragment,null,n.a.createElement(Xe,{heading:u}),n.a.createElement(ot,{isLoading:a,isError:r,displayContent:!0,errorMessage:"We couldn't find your city automatically,\n         you can still look for it manually."},n.a.createElement("div",{className:c.root},t)))},st=Object(G.a)((function(e){return Object(q.a)({root:{fontWeight:"lighter",position:"relative",letterSpacing:"0px",fontSize:"5rem",paddingRight:e.spacing(7.5),lineHeight:"0.85em","& span":{position:"absolute",top:"0",right:"0",fontSize:"0.7em",lineHeight:"0.9em"}}})})),ut=function(e){var t=e.children,a=e.className,r=e.temperature,c=st();return n.a.createElement("p",{className:Object(V.a)(c.root,a)},r,n.a.createElement("span",null,"\xb0",t))},mt=Object(G.a)((function(e){return Object(q.a)({root:{margin:"0 auto",textAlign:"center",maxWidth:"24rem","& > div:first-of-type":{display:"flex",justifyContent:"center",marginBottom:e.spacing(.5)},"& > p:first-of-type":{fontWeight:"lighter",fontSize:"1.5rem",marginBottom:e.spacing(.5)},"& ul":{display:"flex",justifyContent:"center",flexWrap:"wrap","& li:not(:last-child)":{marginRight:"1em"}}},scales:{display:"flex",flexDirection:"column",marginLeft:"1em","& button":{border:"1px solid orange",fontSize:"1.2rem",padding:"0.3em"}}})})),pt=function(e){var t=e.data,a=e.timer,r=mt();return n.a.createElement("section",{className:r.root},n.a.createElement(Be.a,{variant:"h2"},t.city,", ",t.country),n.a.createElement("div",null,n.a.createElement(ut,{temperature:t.temperature},"C")),n.a.createElement("p",null,t.condition),a,n.a.createElement("ul",null,n.a.createElement("li",null,"Cloudiness: ",t.cloudiness,"%"),n.a.createElement("li",null,"Wind: ",t.windSpeed," m/s"),n.a.createElement("li",null,"Pressure: ",t.pressure," mb"),n.a.createElement("li",null,"Humidity: ",t.humidity,"%")))},ft=a(74),bt=a.n(ft),dt=function(e){var t=e.lastLocation,a=Object(r.useState)(!1),c=Object(i.a)(a,2),o=c[0],l=c[1],s=Oe(),u=Object(i.a)(s,2),m=u[0].favorites,p=u[1];Object(r.useEffect)((function(){l(m.includes(t))}),[m,t]);var f=o?"Remove from Favorites":"Add to Favorites";return n.a.createElement(ue.a,{title:f},n.a.createElement(se.a,{"aria-label":f,color:"inherit",onClick:o?function(){p({type:R,location:t})}:function(){p({type:N,location:t})}},o?n.a.createElement(bt.a,null):n.a.createElement($.a,null)))},gt=function(e,t){var a=n.a.useState(e),r=Object(i.a)(a,2),c=r[0],o=r[1];return n.a.useEffect((function(){e>=1e3&&(o(e),t(!0))}),[e,t]),n.a.useEffect((function(){var e=setTimeout((function(){c>=1e3?o((function(e){return e-1e3})):t(!1)}),1e3);return function(){return clearTimeout(e)}}),[c,t]),c},ht=Object(G.a)((function(e){return Object(q.a)({root:{marginBottom:e.spacing(1.5),"& > p":{fontSize:"0.9rem",marginBottom:e.spacing(.5),"&":{fontWeight:"500"}}}})})),Ot=function(e){var t=e.expirationTimeframe,a=e.setRefreshIsDisabled,r=e.requestTime,c=ht(),o=gt(t,a);return n.a.createElement("div",{className:c.root},n.a.createElement("p",null,"Updated as of ",function(e){var t=(new Date).getFullYear(),a=new Date(e).getFullYear(),r=Le(new Date(e).toTimeString()," ",0,1).slice(0,5),n=new Date(e).toDateString();if(t===a){var c=(new Date).getDate(),o=new Date(e).getDate();return c===o?r:c-1===o?"Yesterday, ".concat(r):"".concat(Le(n," ",1,3),", ").concat(r)}return"".concat(Le(n," ",1),", ").concat(r)}(r),"."),n.a.createElement("p",null,"Refresh"," ",o>=1e3?"will be available in: ".concat(function(e){e+=6e4;var t=Math.floor(e/36e5%60),a=Math.floor(e/6e4%60);return t>0?"".concat(t,"h ").concat(a,"m"):"".concat(a,"m")}(o),"."):"is available!"))},jt=a(75),Et=a.n(jt),vt=function(e){var t=e.label,a=Object(le.a)(e,["label"]);return n.a.createElement(ue.a,{title:t},n.a.createElement("span",null,n.a.createElement(se.a,Object.assign({"aria-label":t,color:"inherit"},a),n.a.createElement(Et.a,null))))};vt.defaultProps={label:"Refresh"};var yt=vt,wt=function(e,t){var a=Object(r.useState)(!0),c=Object(i.a)(a,2),o=c[0],l=c[1],s=n.a.createElement(yt,{onClick:t,disabled:o});return e?[l,s]:[l]},St=function(e){var t,a=e.lastLocation,c=e.search,o=e.forecast,l=e.getForecast,s=o.data,m=o.isLoading,p=o.isError,f=wt(!!s,(function(){return l(a)})),b=Object(i.a)(f,2),d=b[0],g=b[1],h=s?n.a.createElement(dt,{lastLocation:a}):void 0;return Object(r.useEffect)((function(){l(a)}),[l,a]),n.a.createElement(n.a.Fragment,null,n.a.createElement(Xe,{heading:u,refresh:g,favor:h,search:c}),n.a.createElement(ot,{isLoading:m,isError:p,errorMessage:"We couldn't find ".concat(we(a),". Please, check if the name is correct or try again later.")},s&&n.a.createElement(pt,{data:s.currentWeather,timer:n.a.createElement(Ot,{expirationTimeframe:(t=s.requestTime,72e5-((new Date).getTime()-t)),setRefreshIsDisabled:d,requestTime:s.requestTime})})))},kt=Object(G.a)((function(e){return Object(q.a)({root:{backgroundColor:e.palette.primary.light,display:"flex",boxShadow:"0 0 0 1px ".concat(e.palette.primary.contrastText)}})})),xt=function(e){var t=e.children,a=e.className,r=e.onSubmit,c=kt();return n.a.createElement("form",{className:Object(V.a)(c.root,a),onSubmit:r},t)},Dt=a(1),Ct=a(76),Lt=a.n(Ct),Tt=Object(G.a)((function(e){return Object(q.a)({root:{marginLeft:"3px"}})})),Nt=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.label,c=Object(le.a)(e,["children","label"]),o=Tt();return n.a.createElement(ue.a,{title:r},n.a.createElement(se.a,Object.assign({"aria-label":r,color:"inherit",ref:t},c,{className:o.root}),a))})),Rt=Object(r.forwardRef)((function(e,t){var a=Object(Dt.a)({},e);return n.a.createElement(Nt,Object.assign({ref:t},a),n.a.createElement(Lt.a,null))})),It=Object(G.a)((function(e){return Object(q.a)({root:{color:e.palette.primary.contrastText,backgroundColor:"transparent",border:"none",fontSize:"0.9rem",padding:"1em 0.8em",width:"100%","&:focus":{boxShadow:"0 0 0 .2rem ".concat(e.palette.action.active)}}})})),Pt=Object(r.forwardRef)((function(e,t){var a=e.value,r=e.name,c=e.type,o=void 0===c?"text":c,i=e.onBlur,l=e.onChange,s=e.placeholder,u=It();return n.a.createElement("input",{ref:t,value:a,name:r,onChange:l,placeholder:s,type:o,onBlur:i,className:u.root})})),Ft=Object(r.forwardRef)((function(e,t){var a=e.setSearchQuery,r=Object(le.a)(e,["setSearchQuery"]);return n.a.createElement(Pt,Object.assign({ref:t,type:"search",placeholder:"Search",onChange:function(e){var t=e.currentTarget.value;a(t)}},r))})),_t=Object(G.a)((function(e){return Object(q.a)({root:Object(w.a)({position:"absolute",top:"50%",transform:"translateY(-50%)",right:"15px",zIndex:1},e.breakpoints.up("md"),{position:"static",marginRight:e.spacing(1.5),transform:"none",zIndex:"auto"})})})),zt=function(e){var t=e.lastLocation,a=e.getData,c=Object(r.useState)(""),o=Object(i.a)(c,2),l=o[0],s=o[1],u=Object(r.useState)(!1),m=Object(i.a)(u,2),p=m[0],f=m[1],b=Object(r.useRef)(null),d=Object(r.useRef)(null),g=_t(),h=he("md"),O=Oe(),j=Object(i.a)(O,2)[1],E=function(e){e.preventDefault();var r=l.trim().toLowerCase();r&&(s(""),r===t?a(r):j({type:I,lastLocation:r})),!h&&b.current&&(f(!1),b.current.focus())};Object(r.useEffect)((function(){!h&&d.current&&d.current.focus()}),[p,h]);var v=function(e){return n.a.createElement(xt,{className:g.root,onSubmit:E},n.a.createElement(Ft,{ref:d,value:l,onBlur:e,setSearchQuery:s}),h&&n.a.createElement(Rt,{label:"Search",type:"submit"}))};return n.a.createElement(n.a.Fragment,null,h?v():n.a.createElement(n.a.Fragment,null,p&&v((function(){return f(!1)})),n.a.createElement(Rt,{ref:b,label:"Show search",onClick:function(){return f(!0)}})))};function Wt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Mt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Wt(Object(a),!0).forEach((function(t){Object(w.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Wt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Bt=function(e,t){switch(t.type){case S:return Mt({},e,{isLoading:!0,isError:!1});case k:return Mt({},e,{data:t.data,isLoading:!1});case x:return Mt({},e,{data:null,isLoading:!1,isError:!0});default:return e}};var At=function(){return Object(r.useReducer)(Bt,{data:null,isLoading:!1,isError:!1})},Ht=function(e){var t=At(),a=Object(i.a)(t,2),n=a[0],c=a[1],o=Object(r.useCallback)(function(){var e=Object(ye.a)(ve.a.mark((function e(t){var a,r,n,o;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c({type:S}),Ce(t),!(a=localStorage.getItem("weather_forecast_".concat(t)))){e.next=14;break}if(n=JSON.parse(a),o=n.requestTime,!Se(o)){e.next=11;break}return e.next=8,xe(t);case 8:r=e.sent,e.next=12;break;case 11:r=JSON.parse(a);case 12:e.next=17;break;case 14:return e.next=16,xe(t);case 16:r=e.sent;case 17:c(r?{type:k,data:r}:{type:x});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[c]);return Object(r.useEffect)((function(){e&&o(e)}),[c,o,e]),[n,o]},qt=function(e){var t=e.lastLocation,a=Object(le.a)(e,["lastLocation"]),r=Ht(),c=Object(i.a)(r,2),o=c[0],l=c[1],s=n.a.createElement(zt,{lastLocation:t,getData:l});return t?n.a.createElement(St,{lastLocation:t,forecast:o,getForecast:l,search:s}):n.a.createElement(lt,Object.assign({search:s},a))},Jt=a(50),Ut=a.n(Jt),Gt=Object(G.a)((function(e){return Object(q.a)({root:{display:"flex","& > a:focus":{outline:"none"},"& > button, & > a":{border:"0.25rem solid ".concat(e.palette.secondary.main),transition:"all 0.1s ease-in-out","&:focus":{boxShadow:"0 0 0 0.25rem ".concat(e.palette.text.primary)},"&:hover":{outline:"0.25rem solid ".concat(e.palette.grey[500])}}},link:{display:"flex"},box:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,padding:e.spacing(1),minHeight:"8.5rem",minWidth:"13rem"}})})),Vt=function(e){var t=e.children,a=e.tooltip,r=e.linkStyles,c=e.boxStyles,o=e.to,i=e.extra,l=e.onClick,s=Gt();return n.a.createElement("div",{className:s.root},n.a.createElement(ue.a,{title:a},n.a.createElement(B.b,{to:o,onClick:l,className:Object(V.a)(s.link,r)},n.a.createElement("div",{className:Object(V.a)(s.box,c)},t))),i)},Yt=Object(G.a)((function(e){return Object(q.a)({link:{marginRight:"0.25rem"},group:{display:"flex","& > p:first-child":{fontSize:"2.5rem",fontWeight:"lighter",paddingRight:e.spacing(2.5),paddingBottom:e.spacing(1),"& span":{fontSize:"0.4em",lineHeight:"2.6em"}}},spinner:{color:e.palette.common.white,fontSize:"2.2rem"},error:{width:"16rem"}})})),Kt=function(e){var t=e.location,a=e.children,r=Yt(),c=Ht(t),o=Object(i.a)(c,1)[0],l=o.data,s=o.isLoading,m=o.isError,p=Oe(),f=Object(i.a)(p,2)[1];return n.a.createElement(Vt,{tooltip:"Go to Forecast",to:"".concat(u),onClick:function(){f({type:I,lastLocation:t})},linkStyles:r.link,extra:a},n.a.createElement(ot,{spinnerStyles:r.spinner,errorStyles:r.error,isLoading:s,isError:m,errorMessage:"We couldn't find ".concat(we(t),". Please, check if the name is correct or try again later."),disableErrorBorder:!0},l&&n.a.createElement(n.a.Fragment,null,n.a.createElement(Be.a,{variant:"h3"},l.currentWeather.city,", ",l.currentWeather.country),n.a.createElement("div",{className:r.group},n.a.createElement(ut,{temperature:l.currentWeather.temperature},"C")),n.a.createElement("p",null,l.currentWeather.condition))))},Qt=Object(G.a)((function(e){return Object(q.a)({link:{fontSize:"1.5rem",padding:"0.5em",display:"flex",alignItems:"center",color:e.palette.text.primary}})})),Xt=function(e){var t=Object(Dt.a)({},e),a=Qt();return n.a.createElement(Kt,t,n.a.createElement(ue.a,{title:"Change Launch Location"},n.a.createElement(B.b,{to:"".concat(p),className:a.link},n.a.createElement(Ut.a,null))))},Zt=a(77),$t=a.n(Zt),ea=Object(G.a)((function(e){return Object(q.a)({box:{display:"flex",justifyContent:"center",alignItems:"center"},icon:{fontSize:"6.5rem"}})})),ta=function(){var e=ea();return n.a.createElement(Vt,{tooltip:"Add Location",to:p,boxStyles:e.box},n.a.createElement($t.a,{className:e.icon}))},aa=a(78),ra=a.n(aa),na=function(e){var t=e.label,a=e.location,r=Oe(),c=Object(i.a)(r,2)[1];return n.a.createElement(Kt,{location:a},n.a.createElement(ue.a,{title:t},n.a.createElement(se.a,{"aria-label":t,color:"inherit",onClick:function(){c({type:R,location:a})}},n.a.createElement(ra.a,null))))};na.defaultProps={label:"Remove from Favorites"};var ca=na,oa=Object(G.a)((function(e){return Object(q.a)({root:{"& section:not(:last-child)":Object(w.a)({marginBottom:e.spacing(2)},e.breakpoints.up("sm"),{marginBottom:e.spacing(4)})},favorites:{display:"flex",flexWrap:"wrap","& > div":Object(w.a)({marginBottom:e.spacing(2)},e.breakpoints.up("sm"),{marginBottom:e.spacing(3)}),"& > div:not(:last-child)":Object(w.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{marginBottom:e.spacing(3)})}})})),ia=function(e){var t=e.launchLocation,a=e.favorites,r=oa();return n.a.createElement(n.a.Fragment,null,n.a.createElement(Xe,{heading:m}),n.a.createElement("div",{className:r.root},n.a.createElement("section",null,n.a.createElement(Be.a,{variant:"h2"},"Launch Location"),t?n.a.createElement(Xt,{location:t}):n.a.createElement(ta,null)),a.length>0&&n.a.createElement("section",null,n.a.createElement(Be.a,{variant:"h2"},"Favorite Places"),n.a.createElement("div",{className:r.favorites},a.map((function(e){return n.a.createElement(ca,{key:e,location:e})}))))))},la=function(e){var t=e.heading,a=e.children;return n.a.createElement("section",null,n.a.createElement(Be.a,{variant:"h3"},t),a)},sa=Object(G.a)((function(e){return Object(q.a)({root:{maxWidth:"16rem"}})})),ua=function(e){var t=e.launchLocation,a=e.dispatchFetch,r=sa(),c=Oe(),o=Object(i.a)(c,2)[1],l="Launch Location";return t&&(l+=": ".concat(we(t))),n.a.createElement(la,{heading:l},n.a.createElement(xt,{onSubmit:function(e){return function(e){e.preventDefault();var t=e.currentTarget.launchLocation.value.trim().toLowerCase();t&&(localStorage.setItem(h,t),a({type:k,data:t}),o({type:I,lastLocation:t}),e.currentTarget.reset())}(e)},className:r.root},n.a.createElement(Pt,{name:"launchLocation",placeholder:"New Launch Location"}),n.a.createElement(Nt,{label:"Submit",type:"submit"},n.a.createElement(Ut.a,null))))},ma=Object(G.a)((function(e){return Object(q.a)({root:{width:"100%","& > section":{marginTop:e.spacing(3)}}})})),pa=function(e){var t=Object(Dt.a)({},e),a=ma();return n.a.createElement(n.a.Fragment,null,n.a.createElement(Xe,{heading:p}),n.a.createElement("section",{className:a.root},n.a.createElement(Be.a,{variant:"h2"},"Options"),n.a.createElement(ua,t)))},fa=function(e){var t=At(),a=Object(i.a)(t,2),n=a[0],c=a[1],o=Object(r.useCallback)((function(t){e({type:I,lastLocation:t}),c({type:k,data:t})}),[c,e]);return Object(r.useEffect)((function(){Object(ye.a)(ve.a.mark((function e(){var t;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("launch_location"))){e.next=5;break}o(t),e.next=10;break;case 5:return c({type:S}),e.next=8,De();case 8:(t=e.sent)?o(t):c({type:x});case 10:case"end":return e.stop()}}),e)})))()}),[c,o]),[n,c]},ba=Object(G.a)((function(e){return Object(q.a)({root:Object(w.a)({display:"flex",flexDirection:"column",alignItems:"flex-start",flexGrow:1,marginTop:E,padding:e.spacing(2)},e.breakpoints.up("sm"),{marginTop:"4rem",padding:e.spacing(4,6)})})})),da=function(){var e=ba(),t=Oe(),a=Object(i.a)(t,2),r=a[0],c=r.lastLocation,o=r.favorites,l=a[1],s=fa(l),f=Object(i.a)(s,2),b=f[0],d=b.data,g=b.isLoading,h=b.isError,O=f[1];return n.a.createElement("main",{className:e.root},n.a.createElement(ze.d,null,n.a.createElement(ze.b,{path:"/".concat(u)},n.a.createElement(qt,{lastLocation:c,isLoading:g,isError:h})),n.a.createElement(ze.b,{path:"/".concat(m)},n.a.createElement(ia,{launchLocation:d,favorites:o})),n.a.createElement(ze.b,{path:"/".concat(p)},n.a.createElement(pa,{launchLocation:d,dispatchFetch:O})),n.a.createElement(ze.b,{path:"/"},n.a.createElement(ze.a,{to:"/".concat(u)}))))},ga=Object(G.a)((function(e){return Object(q.a)({root:{display:"flex"}})})),ha=function(){var e=ga();return n.a.createElement("div",{className:e.root},n.a.createElement(_e,null),n.a.createElement(da,null))},Oa=a(80),ja=a(51),Ea=a.n(ja),va=a(79);function ya(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function wa(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ya(Object(a),!0).forEach((function(t){Object(w.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ya(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Sa={pallete:{secondary:{main:a.n(va).a[700]}},props:{MuiAppBar:{elevation:0},MuiButtonBase:{disableRipple:!0}},overrides:{MuiDrawer:{paperAnchorDockedLeft:{borderRight:0}},MuiIconButton:{root:{borderRadius:"0",fontSize:"1rem",padding:"0.5em"}},MuiListItem:{gutters:{paddingLeft:"1rem",paddingRight:"1rem"}},MuiListItemIcon:{root:{minWidth:v}},MuiSvgIcon:{root:{fontSize:"1.5rem"}},MuiToolbar:{dense:{minHeight:"4rem"}},MuiTooltip:{tooltip:{fontSize:"0.8rem"}}},typography:{h1:{fontSize:"1.5rem"},h2:{fontSize:"1.5rem"},h3:{fontSize:"1.3rem",fontWeight:300}},spacing:function(e){return"".concat(.5*e,"rem")},shape:{borderRadius:0}},ka=Object(Oa.a)(wa({},Sa,{palette:wa({},Sa.pallete,{action:{active:"rgba(0, 0, 0, 0.5)",hover:"rgba(0, 0, 0, 0.13)",selected:"rgba(0, 0, 0, 0.16)"},background:{default:Ea.a[100]},primary:{main:Ea.a[50]}})})),xa=Object(Oa.a)(wa({},Sa,{palette:wa({},Sa.pallete,{action:{active:"rgba(255, 255, 255, 0.8)",hover:"rgba(255, 255, 255, 0.3)"},primary:{main:Ea.a[900]},type:"dark"})})),Da=Object(H.a)((function(e){return Object(q.a)({"@global":{".MuiTypography-h2":Object(w.a)({marginBottom:e.spacing(2)},e.breakpoints.up("sm"),{fontSize:"2rem"}),".MuiTypography-h3":Object(w.a)({marginBottom:e.spacing(1.5)},e.breakpoints.up("sm"),{fontSize:"1.5rem"}),".MuiIconButton-root":{"&:focus":{backgroundColor:e.palette.action.selected},"&:hover":{backgroundColor:e.palette.action.hover},"&:active":{backgroundColor:e.palette.action.active,color:e.palette.primary.main}}}})}))((function(){return null})),Ca=function(){var e=Oe(),t=Object(i.a)(e,1)[0].isThemeDark,a=Ge(),c=a.adjustTheme,o=a.prefersDarkTheme;return Object(r.useEffect)((function(){var e=localStorage.getItem(g);e?c(JSON.parse(e)):(localStorage.setItem(g,String(o)),c(o))}),[c,o]),n.a.createElement(J.b,{injectFirst:!0},n.a.createElement(U.a,{theme:t?xa:ka},n.a.createElement(A.a,null),n.a.createElement(Da,null),n.a.createElement(ha,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(B.a,null,n.a.createElement(s,null,n.a.createElement(M,null,n.a.createElement(Ca,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[84,1,2]]]);
//# sourceMappingURL=main.452f4aa0.chunk.js.map