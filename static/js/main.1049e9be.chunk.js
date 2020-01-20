(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{71:function(e,t,a){e.exports={root:"Spinner_root__30P1U",load6:"Spinner_load6__2K9aE",round:"Spinner_round__3ZW9V"}},83:function(e,t,a){e.exports=a(95)},88:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),o=a.n(c),i=a(5),l=Object(r.createContext)(0),s=function(e){var t=e.children,a=Object(r.useState)(window.innerWidth),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){var e=function(){return s(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n.a.createElement(l.Provider,{value:o},t)},u="forecast",m="favorites",p="settings",f={isDrawerOpen:"isDrawerOpen",isThemeDark:"isThemeDark",weatherForecast:"weather_forecast_",launchLocation:"launch_location"},b={favorites:[],isDrawerOpen:!1,isThemeDark:!1,lastLocation:null},d="calc(".concat("1rem"," * 2 + ").concat("1.5rem",")"),g="calc(".concat("4rem"," - ").concat(.5,"rem)"),h="calc(".concat("1.5rem"," * 2)"),O="calc(".concat("1rem"," - ").concat("0.375rem",")"),j=a(33),E=a(3),v="FETCH_INIT",y="FETCH_SUCCESS",w="FETCH_FAILURE",S="TOGGLE_DRAWER",k="TOGGLE_THEME",x="ADD_TO_FAVORITES",L="REMOVE_FROM_FAVORITES",D="SET_LAST_LOCATION";function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=function(e,t){switch(t.type){case S:var a=e.isDrawerOpen;return localStorage.setItem(f.isDrawerOpen,String(!a)),C({},e,{isDrawerOpen:!a});case k:var r=e.isThemeDark;return localStorage.setItem(f.isThemeDark,String(!r)),C({},e,{isThemeDark:!r});case D:return C({},e,{lastLocation:t.lastLocation});case x:return C({},e,{favorites:[].concat(Object(j.a)(e.favorites),[t.location])});case L:return C({},e,{favorites:Object(j.a)(e.favorites.filter((function(e){return t.location!==e})))});default:return e}},R=a(126),I=function(e,t){var a=Object(R.a)("(prefers-color-scheme: dark)",{noSsr:!0});Object(r.useEffect)((function(){var r=localStorage.getItem(f.isThemeDark);r?t!==JSON.parse(r)&&e({type:k}):(t!==a&&e({type:k}),localStorage.setItem(f.isThemeDark,String(a)))}),[e,t,a])},P=function(e,t){Object(r.useEffect)((function(){var a=localStorage.getItem(f.isDrawerOpen);a?JSON.parse(a)!==t&&e({type:S}):localStorage.setItem(f.isDrawerOpen,String(t))}),[e,t])},z=Object(r.createContext)(b),F=Object(r.createContext)((function(){})),W=function(){return[Object(r.useContext)(z),Object(r.useContext)(F)]},_=function(e){var t=e.children,a=Object(r.useReducer)(N,b),c=Object(i.a)(a,2),o=c[0],l=c[1],s=o.isDrawerOpen,u=o.isThemeDark;return I(l,u),P(l,s),n.a.createElement(z.Provider,{value:o},n.a.createElement(F.Provider,{value:l},t))},B=a(28),M=(a(88),a(137)),A=a(138),H=a(136),q=a(63),G=a(142),J=a(4),U=a(139),V=a(131),Y=a(65),Q=a.n(Y),K=a(49),X=a.n(K),Z=a(66),$=a.n(Z),ee=a(132),te=a(141),ae=a(128),re=a(129),ne=Object(q.a)((function(e){return Object(G.a)({root:{borderLeft:"".concat("0.375rem"," solid transparent")},active:{borderColor:e.palette.secondary.main}})})),ce=function(e){var t=e.icon,a=e.primary,r=e.to,c=ne(),o=n.a.useMemo((function(){return n.a.forwardRef((function(e,t){return n.a.createElement(B.c,Object.assign({to:"/".concat(r),ref:t,activeClassName:c.active},e))}))}),[r,c.active]);return n.a.createElement("li",null,n.a.createElement(te.a,{button:!0,component:o,className:c.root},t?n.a.createElement(ae.a,null,t):null,n.a.createElement(re.a,{primary:a})))},oe=a(20),ie=a.n(oe),le=a(31),se=function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))},ue=function(e){return(new Date).getTime()-e>72e5},me=function(){var e=Object(le.a)(ie.a.mark((function e(){var t,a,r;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://get.geojs.io/v1/ip/geo.json");case 3:if((t=e.sent).ok){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,t.json();case 8:return a=e.sent,r=a.city.toLowerCase(),e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(0),console.error("There has been a problem with your fetch operation:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(le.a)(ie.a.mark((function e(t){var a,r,n,c,o;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"aeb3d68e813dcc0785d1936dc8ddd9f0",a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t),r="".concat(a,"&appid=").concat("aeb3d68e813dcc0785d1936dc8ddd9f0","&units=metric"),e.next=6,fetch(r);case 6:if((n=e.sent).ok){e.next=9;break}return e.abrupt("return",null);case 9:return e.next=11,n.json();case 11:return c=e.sent,o={currentWeather:{city:c.name,condition:c.weather[0].main,country:c.sys.country,temperature:Math.round(c.main.temp),cloudiness:c.clouds.all,windSpeed:c.wind.speed,visibility:c.visibility/1e3,pressure:c.main.pressure,humidity:c.main.humidity},requestTime:(new Date).getTime()},ge(t,o),e.abrupt("return",o);case 17:return e.prev=17,e.t0=e.catch(0),console.error("There has been a problem with your fetch operation:",e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(le.a)(ie.a.mark((function e(){var t;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return localStorage.setItem("launch_location",t),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(e){for(var t in localStorage)if(t.includes("weather")&&!t.includes(e)){var a=JSON.parse(localStorage[t]).requestTime;ue(a)&&localStorage.removeItem(t)}},de=function(e,t,a,r){return e.split(t).slice(a,r).join(t)},ge=function(e,t){localStorage.setItem("weather_forecast_".concat(e),JSON.stringify(t))},he=Object(q.a)((function(e){var t;return Object(G.a)({root:(t={width:"8.5rem",flexShrink:0,whiteSpace:"nowrap"},Object(E.a)(t,e.breakpoints.up("sm"),{width:"13rem"}),Object(E.a)(t,"& .MuiListItemIcon-root",Object(E.a)({},e.breakpoints.down("xs"),{minWidth:"calc(".concat(h," - 0.5rem)")})),Object(E.a)(t,"& .MuiTypography-body1",Object(E.a)({},e.breakpoints.down("xs"),{fontSize:"0.9rem"})),t),isOpen:Object(E.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),width:"8.5rem"},e.breakpoints.up("sm"),{width:"13rem"}),isClosed:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:d},list:Object(E.a)({display:"flex",flexDirection:"column",justifyContent:"space-between",height:"calc(100vh - ".concat(g,")")},e.breakpoints.up("sm"),{height:"calc(100vh - ".concat("4rem",")")}),paper:Object(E.a)({top:g},e.breakpoints.up("sm"),{top:"4rem"})})})),Oe=function(){var e,t,a=he(),r=W(),c=Object(i.a)(r,1)[0].isDrawerOpen;return n.a.createElement(U.a,{variant:"permanent",open:c,className:Object(J.a)(a.root,(e={},Object(E.a)(e,a.isOpen,c),Object(E.a)(e,a.isClosed,!c),e)),classes:{paper:Object(J.a)(a.paper,(t={},Object(E.a)(t,a.isOpen,c),Object(E.a)(t,a.isClosed,!c),t))}},n.a.createElement(V.a,{disablePadding:!0,className:a.list},n.a.createElement("div",null,n.a.createElement(ce,{icon:n.a.createElement(Q.a,null),primary:se(u),to:u}),n.a.createElement(ce,{icon:n.a.createElement(X.a,null),primary:se(m),to:m})),n.a.createElement("div",null,n.a.createElement(ee.a,null),n.a.createElement(ce,{icon:n.a.createElement($.a,null),primary:se(p),to:p}))))},je=a(32),Ee=a(2),ve=a(134),ye=a(135),we=a(52),Se=a(133),ke=a(67),xe=a.n(ke),Le=Object(q.a)((function(e){return Object(G.a)({root:Object(E.a)({backgroundColor:e.palette.background.paper,alignSelf:"stretch",display:"flex",marginRight:e.spacing(1),width:d},e.breakpoints.up("sm"),{marginRight:e.spacing(2)}),button:{width:"100%"}})})),De=function(e){var t=e.label,a=Object(Ee.a)(e,["label"]),r=Le(),c=W(),o=Object(i.a)(c,2)[1];return n.a.createElement("div",{className:r.root},n.a.createElement(Se.a,Object.assign({"aria-label":t,color:"inherit",classes:{root:r.button},onClick:function(){o({type:S})}},a),n.a.createElement(xe.a,null)))};De.defaultProps={label:"Toggle drawer"};var Te=De,Ce=a(140),Ne=a(70),Re=a.n(Ne),Ie=a(69),Pe=a.n(Ie),ze=function(e){var t=e.label,a=W(),r=Object(i.a)(a,2),c=r[0].isThemeDark,o=r[1];return n.a.createElement(Ce.a,{title:t},n.a.createElement(Se.a,{"aria-label":t,color:"inherit",onClick:function(){return o({type:k})}},c?n.a.createElement(Pe.a,null):n.a.createElement(Re.a,null)))};ze.defaultProps={label:"Toggle theme"};var Fe=ze,We=Object(q.a)((function(e){return Object(G.a)({root:{display:"flex",justifyContent:"flex-end","& > *:not(:last-child)":{marginRight:e.spacing(.5)}}})})),_e=function(e){var t=e.refresh,a=e.favor,r=We();return n.a.createElement("div",{className:r.root},t,a,n.a.createElement(Fe,null))},Be=Object(q.a)((function(e){var t;return Object(G.a)({root:{backgroundColor:e.palette.background.paper,zIndex:e.zIndex.drawer+1,"& h1":Object(E.a)({},e.breakpoints.up("sm"),{fontSize:"2rem"}),"& .MuiIconButton-root":Object(E.a)({},e.breakpoints.up("sm"),{fontSize:"1.5rem"})},toolbar:(t={paddingRight:e.spacing(1)},Object(E.a)(t,e.breakpoints.down("xs"),{minHeight:g}),Object(E.a)(t,e.breakpoints.up("sm"),{paddingRight:e.spacing(2)}),t),title:{flexGrow:1}})})),Me=function(e){var t=e.heading,a=e.search,r=Object(Ee.a)(e,["heading","search"]),c=Be();return n.a.createElement(ve.a,{className:c.root},n.a.createElement(ye.a,{disableGutters:!0,variant:"dense",classes:{root:c.toolbar}},n.a.createElement(Te,null),n.a.createElement(we.a,{variant:"h1",className:c.title},t&&se(t)),a,n.a.createElement(_e,r)))},Ae=a(71),He=a.n(Ae),qe=Object(q.a)((function(e){return Object(G.a)({root:{color:e.palette.secondary.main,fontSize:"5.6rem",textIndent:"-9999em",overflow:"hidden",width:"1em",height:"1em",borderRadius:"50%",margin:"0.8em auto"}})})),Ge=function(e){var t=e.className,a=qe();return n.a.createElement("div",{className:Object(J.a)(He.a.root,a.root,t)},"Loading...")},Je=a(72),Ue=a.n(Je),Ve=Object(q.a)((function(e){return Object(G.a)({root:{display:"flex",alignSelf:"center",width:"25rem","& > svg":{fontSize:"2rem",marginRight:e.spacing(1)}},errorBorder:{padding:"1em",boxShadow:"0 0 0 1px ".concat(e.palette.primary.contrastText)}})})),Ye=function(e){var t=e.children,a=e.errorStyles,r=e.disableErrorBorder,c=void 0!==r&&r,o=Ve();return n.a.createElement("div",{className:Object(J.a)(o.root,a,!c&&o.errorBorder)},n.a.createElement(Ue.a,null),n.a.createElement("p",null,t))},Qe=function(e){var t,a=e.children,r=e.spinnerStyles,c=e.isLoading,o=e.errorMessage,i=e.isError,l=e.displayContent,s=void 0!==l&&l,u=Object(Ee.a)(e,["children","spinnerStyles","isLoading","errorMessage","isError","displayContent"]);return t=c?n.a.createElement(Ge,{className:r}):s&&i?n.a.createElement(n.a.Fragment,null,n.a.createElement(Ye,u,o),a):i?n.a.createElement(Ye,u,o):a,n.a.createElement(n.a.Fragment,null,t)},Ke=Object(q.a)((function(e){return Object(G.a)({root:{display:"flex",justifyContent:"center",width:"100%",marginTop:"1rem","& form":{marginRight:"0"}}})})),Xe=function(e){var t=e.search,a=e.isLoading,r=e.isError,c=Ke();return n.a.createElement(n.a.Fragment,null,n.a.createElement(Me,{heading:u}),n.a.createElement(Qe,{isLoading:a,isError:r,displayContent:!0,errorMessage:"We couldn't find your city automatically,\n         you can still look for it manually."},n.a.createElement("div",{className:c.root},t)))},Ze=Object(q.a)((function(e){var t;return Object(G.a)({root:(t={fontWeight:"lighter",position:"relative",letterSpacing:"0px",paddingRight:e.spacing(4.5),fontSize:"3rem",lineHeight:"0.85em"},Object(E.a)(t,e.breakpoints.up("sm"),{fontSize:"5rem",paddingRight:e.spacing(7.5)}),Object(E.a)(t,"& span",{position:"absolute",top:"0",right:"0",fontSize:"0.7em",lineHeight:"0.9em"}),t)})})),$e=function(e){var t=e.children,a=e.className,r=e.temperature,c=Ze();return n.a.createElement("p",{className:Object(J.a)(c.root,a)},r,n.a.createElement("span",null,"\xb0",t))},et=Object(q.a)((function(e){return Object(G.a)({root:{margin:"0 auto",textAlign:"center",maxWidth:"28rem","& > div":{display:"flex",justifyContent:"center",marginBottom:e.spacing(.5)},"& > p:first-of-type":Object(E.a)({fontWeight:"lighter",fontSize:"1rem",marginBottom:e.spacing(.5)},e.breakpoints.up("sm"),{fontSize:"1.5rem"}),"& ul":{display:"flex",justifyContent:"center",flexWrap:"wrap","& li:not(:last-child)":{marginRight:"1em"}}},scales:{display:"flex",flexDirection:"column",marginLeft:"1em","& button":{border:"1px solid orange",fontSize:"1.2rem",padding:"0.3em"}}})})),tt=function(e){var t=e.data,a=e.timer,r=et();return n.a.createElement("section",{className:r.root},n.a.createElement(we.a,{variant:"h2"},t.city,", ",t.country),n.a.createElement("div",null,n.a.createElement($e,{temperature:t.temperature},"C")),n.a.createElement("p",null,t.condition),a,n.a.createElement("ul",null,n.a.createElement("li",null,"Cloudiness: ",t.cloudiness,"%"),n.a.createElement("li",null,"Wind: ",t.windSpeed," m/s"),n.a.createElement("li",null,"Visibility: ",t.visibility," km"),n.a.createElement("li",null,"Pressure: ",t.pressure," mb"),n.a.createElement("li",null,"Humidity: ",t.humidity,"%")))},at=a(73),rt=a.n(at),nt=function(e){var t=e.lastLocation,a=Object(r.useState)(!1),c=Object(i.a)(a,2),o=c[0],l=c[1],s=W(),u=Object(i.a)(s,2),m=u[0].favorites,p=u[1];Object(r.useEffect)((function(){l(m.includes(t))}),[m,t]);var f=o?"Remove from Favorites":"Add to Favorites";return n.a.createElement(Ce.a,{title:f},n.a.createElement(Se.a,{"aria-label":f,color:"inherit",onClick:o?function(){p({type:L,location:t})}:function(){p({type:x,location:t})}},o?n.a.createElement(rt.a,null):n.a.createElement(X.a,null)))},ct=function(e,t){var a=n.a.useState(e),r=Object(i.a)(a,2),c=r[0],o=r[1];return n.a.useEffect((function(){e>=1e3&&(o(e),t(!0))}),[e,t]),n.a.useEffect((function(){var e=setTimeout((function(){c>=1e3?o((function(e){return e-1e3})):t(!1)}),1e3);return function(){return clearTimeout(e)}}),[c,t]),c},ot=Object(q.a)((function(e){return Object(G.a)({root:Object(E.a)({fontSize:"0.8rem",marginBottom:e.spacing(1.5),"&":{fontWeight:"500"}},e.breakpoints.up("sm"),{fontSize:"0.9rem"})})})),it=function(e){var t=e.expirationTimeframe,a=e.setRefreshIsDisabled,r=e.requestTime,c=ot(),o=ct(t,a);return n.a.createElement("p",{className:c.root},"Updated as of ",function(e){var t=(new Date).getFullYear(),a=new Date(e).getFullYear(),r=de(new Date(e).toTimeString()," ",0,1).slice(0,5),n=new Date(e).toDateString();if(t===a){var c=(new Date).getDate(),o=new Date(e).getDate();return c===o?r:c-1===o?"Yesterday, ".concat(r):"".concat(de(n," ",1,3),", ").concat(r)}return"".concat(de(n," ",1),", ").concat(r)}(r),". Refresh"," ",o>=1e3?"will be available in: ".concat(function(e){e+=6e4;var t=Math.floor(e/36e5%60),a=Math.floor(e/6e4%60);return t>0?"".concat(t,"h ").concat(a,"m"):"".concat(a,"m")}(o)):"is available!")},lt=a(74),st=a.n(lt),ut=function(e){var t=e.label,a=Object(Ee.a)(e,["label"]);return n.a.createElement(Ce.a,{title:t},n.a.createElement("span",null,n.a.createElement(Se.a,Object.assign({"aria-label":t,color:"inherit"},a),n.a.createElement(st.a,null))))};ut.defaultProps={label:"Refresh"};var mt=ut,pt=function(e,t){var a=Object(r.useState)(!0),c=Object(i.a)(a,2),o=c[0],l=c[1],s=n.a.createElement(mt,{onClick:t,disabled:o});return e?[l,s]:[l]},ft=function(e){var t,a=e.lastLocation,c=e.search,o=e.forecast,l=e.getForecast,s=o.data,m=o.isLoading,p=o.isError,f=pt(!!s,(function(){return l(a)})),b=Object(i.a)(f,2),d=b[0],g=b[1],h=s?n.a.createElement(nt,{lastLocation:a}):void 0;return Object(r.useEffect)((function(){l(a)}),[l,a]),n.a.createElement(n.a.Fragment,null,n.a.createElement(Me,{heading:u,refresh:g,favor:h,search:c}),n.a.createElement(Qe,{isLoading:m,isError:p,errorMessage:"We couldn't find ".concat(se(a),". Please, check if the name is correct or try again later.")},s&&n.a.createElement(tt,{data:s.currentWeather,timer:n.a.createElement(it,{expirationTimeframe:(t=s.requestTime,72e5-((new Date).getTime()-t)),setRefreshIsDisabled:d,requestTime:s.requestTime})})))},bt=a(24),dt=Object(q.a)((function(e){return Object(G.a)({root:{backgroundColor:e.palette.primary.light,display:"flex",boxShadow:"0 0 0 1px ".concat(e.palette.primary.contrastText)}})})),gt=function(e){var t=e.children,a=e.className,r=e.onSubmit,c=dt();return n.a.createElement("form",{className:Object(J.a)(c.root,a),onSubmit:r},t)},ht=a(1),Ot=a(75),jt=a.n(Ot),Et=Object(q.a)((function(e){return Object(G.a)({root:{marginLeft:"3px"}})})),vt=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.label,c=Object(Ee.a)(e,["children","label"]),o=Et();return n.a.createElement(Ce.a,{title:r},n.a.createElement(Se.a,Object.assign({"aria-label":r,color:"inherit",ref:t},c,{className:o.root}),a))})),yt=Object(r.forwardRef)((function(e,t){var a=Object(ht.a)({},e);return n.a.createElement(vt,Object.assign({ref:t},a),n.a.createElement(jt.a,null))})),wt=Object(q.a)((function(e){return Object(G.a)({root:{color:e.palette.primary.contrastText,backgroundColor:"transparent",border:"none",fontSize:"0.9rem",padding:"1em 0.8em",width:"100%","&:focus":{boxShadow:"0 0 0 .2rem ".concat(e.palette.action.active)}}})})),St=Object(r.forwardRef)((function(e,t){var a=e.value,r=e.name,c=e.type,o=void 0===c?"text":c,i=e.onBlur,l=e.onChange,s=e.placeholder,u=wt();return n.a.createElement("input",{ref:t,value:a,name:r,onChange:l,placeholder:s,type:o,onBlur:i,className:u.root})})),kt=Object(r.forwardRef)((function(e,t){var a=e.setSearchQuery,r=Object(Ee.a)(e,["setSearchQuery"]);return n.a.createElement(St,Object.assign({ref:t,type:"search",placeholder:"Search",onChange:function(e){var t=e.currentTarget.value;a(t)}},r))})),xt=Object(q.a)((function(e){return Object(G.a)({root:Object(E.a)({position:"absolute",top:"50%",transform:"translateY(-50%)",right:"15px",zIndex:1},e.breakpoints.up("md"),{position:"static",marginRight:e.spacing(1.5),transform:"none",zIndex:"auto"})})})),Lt=function(e){var t=e.lastLocation,a=e.getData,c=Object(r.useState)(""),o=Object(i.a)(c,2),s=o[0],u=o[1],m=Object(r.useState)(!1),p=Object(i.a)(m,2),f=p[0],b=p[1],d=Object(r.useContext)(l),g=Object(r.useRef)(null),h=Object(r.useRef)(null),O=Object(bt.a)(),j=xt(),E=W(),v=Object(i.a)(E,2)[1],y=O.breakpoints.values.md,w=function(e){e.preventDefault();var r=s.trim().toLowerCase();r&&(u(""),r===t?a(r):v({type:D,lastLocation:r})),d<y&&g.current&&(b(!1),g.current.focus())};Object(r.useEffect)((function(){d<y&&h.current&&h.current.focus()}),[y,f,d]);var S=function(e){return n.a.createElement(gt,{className:j.root,onSubmit:w},n.a.createElement(kt,{ref:h,value:s,onBlur:e,setSearchQuery:u}),d>=y&&n.a.createElement(yt,{label:"Search",type:"submit"}))};return n.a.createElement(n.a.Fragment,null,d>=y?S():n.a.createElement(n.a.Fragment,null,f&&S((function(){return b(!1)})),n.a.createElement(yt,{ref:g,label:"Show search",onClick:function(){return b(!0)}})))};function Dt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Tt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Dt(Object(a),!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Dt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Ct(e,t){switch(t.type){case v:return Tt({},e,{isLoading:!0,isError:!1});case y:return Tt({},e,{data:t.data,isLoading:!1});case w:return Tt({},e,{data:null,isLoading:!1,isError:!0});default:return e}}var Nt=function(){return Object(r.useReducer)(Ct,{data:null,isLoading:!1,isError:!1})},Rt=function(e){var t=Nt(),a=Object(i.a)(t,2),n=a[0],c=a[1],o=Object(r.useCallback)(function(){var e=Object(le.a)(ie.a.mark((function e(t){var a,r,n,o;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c({type:v}),be(t),!(a=localStorage.getItem("weather_forecast_".concat(t)))){e.next=14;break}if(n=JSON.parse(a),o=n.requestTime,!ue(o)){e.next=11;break}return e.next=8,pe(t);case 8:r=e.sent,e.next=12;break;case 11:r=JSON.parse(a);case 12:e.next=17;break;case 14:return e.next=16,pe(t);case 16:r=e.sent;case 17:c(r?{type:y,data:r}:{type:w});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[c]);return Object(r.useEffect)((function(){e&&o(e)}),[c,o,e]),[n,o]},It=function(e){var t=e.lastLocation,a=Object(Ee.a)(e,["lastLocation"]),r=Rt(),c=Object(i.a)(r,2),o=c[0],l=c[1],s=n.a.createElement(Lt,{lastLocation:t,getData:l});return t?n.a.createElement(ft,{lastLocation:t,forecast:o,getForecast:l,search:s}):n.a.createElement(Xe,Object.assign({search:s},a))},Pt=a(50),zt=a.n(Pt),Ft=Object(q.a)((function(e){return Object(G.a)({root:{display:"flex","& > a:focus":{outline:"none"},"& > button, & > a":{border:"0.25rem solid ".concat(e.palette.secondary.main),transition:"all 0.1s ease-in-out","&:focus":{boxShadow:"0 0 0 0.25rem ".concat(e.palette.text.primary)},"&:hover":{outline:"0.25rem solid ".concat(e.palette.grey[500])}}},link:{display:"flex"},box:Object(E.a)({backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,padding:e.spacing(1),minHeight:"6.5rem",minWidth:"8rem"},e.breakpoints.up("sm"),{minHeight:"8.5rem",minWidth:"13rem"})})})),Wt=function(e){var t=e.children,a=e.tooltip,r=e.linkStyles,c=e.boxStyles,o=e.to,i=e.extra,l=e.onClick,s=Ft();return n.a.createElement("div",{className:s.root},n.a.createElement(Ce.a,{title:a},n.a.createElement(B.b,{to:o,onClick:l,className:Object(J.a)(s.link,r)},n.a.createElement("div",{className:Object(J.a)(s.box,c)},t))),i)},_t=Object(q.a)((function(e){return Object(G.a)({link:{marginRight:"0.25rem"},group:{display:"flex","& > p:first-child":{fontSize:"2.5rem",fontWeight:"lighter",paddingRight:e.spacing(2.5),paddingBottom:e.spacing(1),"& span":{fontSize:"0.4em",lineHeight:"2.6em"}}},spinner:{color:e.palette.common.white,fontSize:"2.2rem"},error:{width:"16rem"}})})),Bt=function(e){var t=e.location,a=e.children,r=_t(),c=Rt(t),o=Object(i.a)(c,1)[0],l=o.data,s=o.isLoading,m=o.isError,p=W(),f=Object(i.a)(p,2)[1];return n.a.createElement(Wt,{tooltip:"Go to Forecast",to:"".concat(u),onClick:function(){f({type:D,lastLocation:t})},linkStyles:r.link,extra:a},n.a.createElement(Qe,{spinnerStyles:r.spinner,errorStyles:r.error,isLoading:s,isError:m,errorMessage:"We couldn't find ".concat(se(t),". Please, check if the name is correct or try again later."),disableErrorBorder:!0},l&&n.a.createElement(n.a.Fragment,null,n.a.createElement(we.a,{variant:"h3"},l.currentWeather.city,", ",l.currentWeather.country),n.a.createElement("div",{className:r.group},n.a.createElement($e,{temperature:l.currentWeather.temperature},"C")),n.a.createElement("p",null,l.currentWeather.condition))))},Mt=Object(q.a)((function(e){return Object(G.a)({link:{fontSize:"1.5rem",padding:"0.5em",display:"flex",alignItems:"center",color:e.palette.text.primary}})})),At=function(e){var t=Object(ht.a)({},e),a=Mt();return n.a.createElement(Bt,t,n.a.createElement(Ce.a,{title:"Change Launch Location"},n.a.createElement(B.b,{to:"".concat(p),className:a.link},n.a.createElement(zt.a,null))))},Ht=a(76),qt=a.n(Ht),Gt=Object(q.a)((function(e){return Object(G.a)({box:{display:"flex",justifyContent:"center",alignItems:"center"},icon:{fontSize:"6.5rem"}})})),Jt=function(){var e=Gt();return n.a.createElement(Wt,{tooltip:"Add Location",to:p,boxStyles:e.box},n.a.createElement(qt.a,{className:e.icon}))},Ut=a(77),Vt=a.n(Ut),Yt=function(e){var t=e.label,a=e.location,r=W(),c=Object(i.a)(r,2)[1];return n.a.createElement(Bt,{location:a},n.a.createElement(Ce.a,{title:t},n.a.createElement(Se.a,{"aria-label":t,color:"inherit",onClick:function(){c({type:L,location:a})}},n.a.createElement(Vt.a,null))))};Yt.defaultProps={label:"Remove from Favorites"};var Qt=Yt,Kt=Object(q.a)((function(e){return Object(G.a)({root:{"& section:not(:last-child)":Object(E.a)({marginBottom:e.spacing(2)},e.breakpoints.up("sm"),{marginBottom:e.spacing(4)})},favorites:{display:"flex",flexWrap:"wrap","& > div":Object(E.a)({marginBottom:e.spacing(2)},e.breakpoints.up("sm"),{marginBottom:e.spacing(3)}),"& > div:not(:last-child)":Object(E.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{marginBottom:e.spacing(3)})}})})),Xt=function(e){var t=e.launchLocation,a=e.favorites,r=Kt();return n.a.createElement(n.a.Fragment,null,n.a.createElement(Me,{heading:m}),n.a.createElement("div",{className:r.root},n.a.createElement("section",null,n.a.createElement(we.a,{variant:"h2"},"Launch Location"),t?n.a.createElement(At,{location:t}):n.a.createElement(Jt,null)),a.length>0&&n.a.createElement("section",null,n.a.createElement(we.a,{variant:"h2"},"Favorite Places"),n.a.createElement("div",{className:r.favorites},a.map((function(e){return n.a.createElement(Qt,{key:e,location:e})}))))))},Zt=function(e){var t=e.heading,a=e.children;return n.a.createElement("section",null,n.a.createElement(we.a,{variant:"h3"},t),a)},$t=Object(q.a)((function(e){return Object(G.a)({root:{maxWidth:"16rem"}})})),ea=function(e){var t=e.launchLocation,a=e.dispatchFetch,r=$t(),c=W(),o=Object(i.a)(c,2)[1],l="Launch Location";return t&&(l+=": ".concat(se(t))),n.a.createElement(Zt,{heading:l},n.a.createElement(gt,{onSubmit:function(e){return function(e){e.preventDefault();var t=e.currentTarget.launchLocation.value.trim().toLowerCase();t&&(localStorage.setItem(f.launchLocation,t),a({type:y,data:t}),o({type:D,lastLocation:t}),e.currentTarget.reset())}(e)},className:r.root},n.a.createElement(St,{name:"launchLocation",placeholder:"New Launch Location"}),n.a.createElement(vt,{label:"Submit",type:"submit"},n.a.createElement(zt.a,null))))},ta=Object(q.a)((function(e){return Object(G.a)({root:{width:"100%","& > section":{marginTop:e.spacing(3)}}})})),aa=function(e){var t=Object(ht.a)({},e),a=ta();return n.a.createElement(n.a.Fragment,null,n.a.createElement(Me,{heading:p}),n.a.createElement("section",{className:a.root},n.a.createElement(we.a,{variant:"h2"},"Options"),n.a.createElement(ea,t)))},ra=function(e){var t=Nt(),a=Object(i.a)(t,2),n=a[0],c=a[1],o=Object(r.useCallback)((function(t){e({type:D,lastLocation:t}),c({type:y,data:t})}),[c,e]);return Object(r.useEffect)((function(){Object(le.a)(ie.a.mark((function e(){var t;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("launch_location"))){e.next=5;break}o(t),e.next=10;break;case 5:return c({type:v}),e.next=8,fe();case 8:(t=e.sent)?o(t):c({type:w});case 10:case"end":return e.stop()}}),e)})))()}),[c,o]),[n,c]},na=Object(q.a)((function(e){return Object(G.a)({root:Object(E.a)({display:"flex",flexDirection:"column",alignItems:"flex-start",flexGrow:1,marginTop:g,padding:e.spacing(2)},e.breakpoints.up("sm"),{marginTop:"4rem",padding:e.spacing(4,6)})})})),ca=function(){var e=na(),t=W(),a=Object(i.a)(t,2),r=a[0],c=r.lastLocation,o=r.favorites,l=a[1],s=ra(l),f=Object(i.a)(s,2),b=f[0],d=b.data,g=b.isLoading,h=b.isError,O=f[1];return n.a.createElement("main",{className:e.root},n.a.createElement(je.d,null,n.a.createElement(je.b,{path:"/".concat(u)},n.a.createElement(It,{lastLocation:c,isLoading:g,isError:h})),n.a.createElement(je.b,{path:"/".concat(m)},n.a.createElement(Xt,{launchLocation:d,favorites:o})),n.a.createElement(je.b,{path:"/".concat(p)},n.a.createElement(aa,{launchLocation:d,dispatchFetch:O})),n.a.createElement(je.b,{path:"/"},n.a.createElement(je.a,{to:"/".concat(u)}))))},oa=Object(q.a)((function(e){return Object(G.a)({root:{display:"flex","& h2":Object(E.a)({marginBottom:e.spacing(2)},e.breakpoints.up("sm"),{fontSize:"2rem"}),"& h3":Object(E.a)({marginBottom:e.spacing(1.5)},e.breakpoints.up("sm"),{fontSize:"1.5rem"}),"& button":{"&:focus":{backgroundColor:e.palette.action.selected},"&:hover":{backgroundColor:e.palette.action.hover},"&:active":{backgroundColor:e.palette.action.active,color:e.palette.primary.main}}}})})),ia=function(){var e=oa();return n.a.createElement("div",{className:e.root},n.a.createElement(Oe,null),n.a.createElement(ca,null))},la=a(79),sa=a(51),ua=a.n(sa),ma=a(78);function pa(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function fa(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pa(Object(a),!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pa(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ba={pallete:{secondary:{main:a.n(ma).a[700]}},props:{MuiAppBar:{elevation:0},MuiButtonBase:{disableRipple:!0}},overrides:{MuiDrawer:{paperAnchorDockedLeft:{borderRight:0}},MuiIconButton:{root:{borderRadius:"0",fontSize:"1rem",padding:"0.5em"}},MuiListItem:{gutters:{paddingLeft:O,paddingRight:"1rem"}},MuiListItemIcon:{root:{minWidth:h}},MuiSvgIcon:{root:{fontSize:"1.5rem"}},MuiToolbar:{dense:{minHeight:"4rem"}},MuiTooltip:{tooltip:{fontSize:"0.8rem"}}},typography:{h1:{fontSize:"1.5rem"},h2:{fontSize:"1.3rem"},h3:{fontSize:"1rem",fontWeight:300}},spacing:function(e){return"".concat(.5*e,"rem")},shape:{borderRadius:0}},da=Object(la.a)(fa({},ba,{palette:fa({},ba.pallete,{action:{active:"rgba(0, 0, 0, 0.5)",hover:"rgba(0, 0, 0, 0.13)",selected:"rgba(0, 0, 0, 0.16)"},background:{default:ua.a[100]},primary:{main:ua.a[50]}})})),ga=Object(la.a)(fa({},ba,{palette:fa({},ba.pallete,{action:{active:"rgba(255, 255, 255, 0.8)",hover:"rgba(255, 255, 255, 0.3)"},primary:{main:ua.a[900]},type:"dark"})})),ha=function(){var e=W(),t=Object(i.a)(e,1)[0].isThemeDark;return n.a.createElement(A.b,{injectFirst:!0},n.a.createElement(H.a,{theme:t?ga:da},n.a.createElement(M.a,null),n.a.createElement(ia,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(B.a,null,n.a.createElement(s,null,n.a.createElement(_,null,n.a.createElement(ha,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[83,1,2]]]);
//# sourceMappingURL=main.1049e9be.chunk.js.map