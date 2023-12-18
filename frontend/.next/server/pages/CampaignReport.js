"use strict";(()=>{var e={};e.id=347,e.ids=[347,660],e.modules={41749:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(91),n=r(87462),i=r(16689);r(580);var o=r(68103),s=r.n(o),c=r(52543),l=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=parseFloat(e);return"".concat(r/t).concat(String(e).replace(String(r),"")||"px")}var m=i.forwardRef(function(e,t){var r=e.alignContent,o=void 0===r?"stretch":r,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,u=e.className,m=e.component,p=e.container,x=e.direction,f=void 0===x?"row":x,g=e.item,h=e.justify,v=e.justifyContent,b=void 0===v?"flex-start":v,y=e.lg,S=void 0!==y&&y,j=e.md,Z=void 0!==j&&j,C=e.sm,w=void 0!==C&&C,A=e.spacing,P=void 0===A?0:A,q=e.wrap,k=void 0===q?"wrap":q,I=e.xl,D=void 0!==I&&I,E=e.xs,N=void 0!==E&&E,z=e.zeroMinWidth,M=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=s()(d.root,u,void 0!==p&&p&&[d.container,0!==P&&d["spacing-xs-".concat(String(P))]],void 0!==g&&g&&d.item,void 0!==z&&z&&d.zeroMinWidth,"row"!==f&&d["direction-xs-".concat(String(f))],"wrap"!==k&&d["wrap-xs-".concat(String(k))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==(h||b)&&d["justify-content-xs-".concat(String(h||b))],!1!==N&&d["grid-xs-".concat(String(N))],!1!==w&&d["grid-sm-".concat(String(w))],!1!==Z&&d["grid-md-".concat(String(Z))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==D&&d["grid-xl-".concat(String(D))]);return i.createElement(void 0===m?"div":m,(0,n.Z)({className:R,ref:t},M))});let p=(0,c.Z)(function(e){var t;return(0,n.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},(t={},l.forEach(function(r){var a=e.spacing(r);0!==a&&(t["spacing-".concat("xs","-").concat(r)]={margin:"-".concat(u(a,2)),width:"calc(100% + ".concat(u(a),")"),"& > $item":{padding:u(a,2)}})}),t),e.breakpoints.keys.reduce(function(t,r){var a;return a={},d.forEach(function(e){var t="grid-".concat(r,"-").concat(e);if(!0===e){a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"};return}if("auto"===e){a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};return}var n="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:n,flexGrow:0,maxWidth:n}}),"xs"===r?(0,n.Z)(t,a):t[e.breakpoints.up(r)]=a,t},{}))},{name:"MuiGrid"})(m)},33681:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(87462),n=r(91),i=r(16689);r(580);var o=r(68103),s=r.n(o),c=r(93871),l=r(52543),d=r(59693),u=r(8920),m=i.forwardRef(function(e,t){var r=e.classes,o=e.className,l=e.color,d=void 0===l?"primary":l,m=e.value,p=e.valueBuffer,x=e.variant,f=void 0===x?"indeterminate":x,g=(0,n.Z)(e,["classes","className","color","value","valueBuffer","variant"]),h=(0,u.Z)(),v={},b={bar1:{},bar2:{}};if(("determinate"===f||"buffer"===f)&&void 0!==m){v["aria-valuenow"]=Math.round(m),v["aria-valuemin"]=0,v["aria-valuemax"]=100;var y=m-100;"rtl"===h.direction&&(y=-y),b.bar1.transform="translateX(".concat(y,"%)")}if("buffer"===f&&void 0!==p){var S=(p||0)-100;"rtl"===h.direction&&(S=-S),b.bar2.transform="translateX(".concat(S,"%)")}return i.createElement("div",(0,a.Z)({className:s()(r.root,r["color".concat((0,c.Z)(d))],o,{determinate:r.determinate,indeterminate:r.indeterminate,buffer:r.buffer,query:r.query}[f]),role:"progressbar"},v,{ref:t},g),"buffer"===f?i.createElement("div",{className:s()(r.dashed,r["dashedColor".concat((0,c.Z)(d))])}):null,i.createElement("div",{className:s()(r.bar,r["barColor".concat((0,c.Z)(d))],("indeterminate"===f||"query"===f)&&r.bar1Indeterminate,{determinate:r.bar1Determinate,buffer:r.bar1Buffer}[f]),style:b.bar1}),"determinate"===f?null:i.createElement("div",{className:s()(r.bar,("indeterminate"===f||"query"===f)&&r.bar2Indeterminate,"buffer"===f?[r["color".concat((0,c.Z)(d))],r.bar2Buffer]:r["barColor".concat((0,c.Z)(d))]),style:b.bar2}))});let p=(0,l.Z)(function(e){var t=function(t){return"light"===e.palette.type?(0,d.$n)(t,.62):(0,d._j)(t,.5)},r=t(e.palette.primary.main),a=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:r},colorSecondary:{backgroundColor:a},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}},{name:"MuiLinearProgress"})(m)},8920:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(43349);r(16689);var n=r(90953);function i(){return(0,a.useTheme)()||n.Z}},52543:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(87462),n=r(43349),i=r(90953);let o=function(e,t){return(0,n.withStyles)(e,(0,a.Z)({defaultTheme:i.Z},t))}},93871:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(23874);function n(e){if("string"!=typeof e)throw Error((0,a.formatMuiErrorMessage)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},51493:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>p,getServerSideProps:()=>g,getStaticPaths:()=>f,getStaticProps:()=>x,reportWebVitals:()=>v,routeModule:()=>C,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>Z,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>b});var n=r(87093),i=r(35244),o=r(1323),s=r(55388),c=r.n(s),l=r(16769),d=r.n(l),u=r(6700),m=e([u]);u=(m.then?(await m)():m)[0];let p=(0,o.l)(u,"default"),x=(0,o.l)(u,"getStaticProps"),f=(0,o.l)(u,"getStaticPaths"),g=(0,o.l)(u,"getServerSideProps"),h=(0,o.l)(u,"config"),v=(0,o.l)(u,"reportWebVitals"),b=(0,o.l)(u,"unstable_getStaticProps"),y=(0,o.l)(u,"unstable_getStaticPaths"),S=(0,o.l)(u,"unstable_getStaticParams"),j=(0,o.l)(u,"unstable_getServerProps"),Z=(0,o.l)(u,"unstable_getServerSideProps"),C=new n.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/CampaignReport",pathname:"/CampaignReport",bundlePath:"",filename:""},components:{App:d(),Document:c()},userland:u});a()}catch(e){a(e)}})},70171:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(20997);r(16689);var n=r(18463),i=r(94697),o=r(67265),s=r(22318),c=r(44164),l=r.n(c),d=r(48308),u=r(55223);let m=(0,d.makeStyles)(e=>({cardAvatar:{fontSize:"55px",color:u.grey[500],backgroundColor:"#ffffff",width:e.spacing(7),height:e.spacing(7)},cardTitle:{fontSize:"18px",color:e.palette.text.primary},cardSubtitle:{color:u.grey[600],fontSize:"14px"}}));function p(e){let{icon:t,title:r,value:c,loading:d}=e,u=m();return d?a.jsx(l(),{variant:"rect",height:80}):a.jsx(n.Z,{children:a.jsx(i.Z,{avatar:a.jsx(o.Z,{className:u.cardAvatar,children:t}),title:a.jsx(s.Z,{variant:"h6",component:"h2",className:u.cardTitle,children:r}),subheader:a.jsx(s.Z,{variant:"subtitle1",component:"p",className:u.cardSubtitle,children:c})})})}},96153:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(20997);r(16689);var n=r(48308),i=r(32705),o=r.n(i);let s=(0,n.makeStyles)(e=>({mainContainer:{flex:1,padding:e.spacing(2),height:"calc(100% - 48px)"},contentWrapper:{height:"100%",overflowY:"hidden",display:"flex",flexDirection:"column"}})),c=({children:e})=>{let t=s();return a.jsx(o(),{className:t.mainContainer,children:a.jsx("div",{className:t.contentWrapper,children:e})})}},66276:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(20997);r(16689);let n=(0,r(48308).makeStyles)(e=>({contactsHeader:{display:"flex",alignItems:"center",padding:"0px 6px 6px 6px"}})),i=({children:e})=>{let t=n();return a.jsx("div",{className:t.contactsHeader,children:e})}},2926:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(20997);r(16689);var n=r(54104),i=r.n(n);function o(e){return a.jsx(i(),{variant:"h5",color:"primary",gutterBottom:!0,children:e.children})}},74846:(e,t,r)=>{r.d(t,{Y:()=>i});var a=r(32245),n=r.n(a);function i(){return{dateToClient:function(e){return n()(e).isValid()?n()(e).format("DD/MM/YYYY"):e},datetimeToClient:function(e){return n()(e).isValid()?n()(e).format("DD/MM/YYYY HH:mm"):e},dateToDatabase:function(e){return n()(e,"DD/MM/YYYY").isValid()?n()(e).format("YYYY-MM-DD HH:mm:ss"):e}}}},6700:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>G});var n=r(20997),i=r(16689),o=r(14661),s=r(48308),c=r(40640),l=r.n(c),d=r(96153),u=r(66276),m=r(2926),p=r(41749),x=r(22318),f=r(33681),g=r(38561),h=r(98210),v=r.n(h),b=r(1712),y=r.n(b),S=r(48524),j=r.n(S),Z=r(70171),C=r(78495),w=r.n(C),A=r(10681),P=r.n(A),q=r(2849),k=r.n(q),I=r(57579),D=r.n(I),E=r(77605),N=r.n(E),z=r(33585),M=r.n(z),R=r(79723),_=r.n(R),Y=r(23252),W=r.n(Y),T=r(74846),L=r(7405),B=e([L]);L=(B.then?(await B)():B)[0];let V=(0,s.makeStyles)(e=>({mainPaper:{flex:1,padding:e.spacing(2),overflowY:"scroll",...e.scrollbarStyles},textRight:{textAlign:"right"},tabPanelsContainer:{padding:e.spacing(2)}})),G=()=>{let e=V(),{campaignId:t}=(0,o.useParams)(),[r,a]=(0,i.useState)({}),[s,c]=(0,i.useState)(0),[h,b]=(0,i.useState)(0),[S,C]=(0,i.useState)(0),[A,q]=(0,i.useState)(0),[I,E]=(0,i.useState)(0),[z,R]=(0,i.useState)(!1),Y=(0,i.useRef)(!0),{datetimeToClient:B}=(0,T.Y)();(0,i.useEffect)(()=>(Y.current&&G(),()=>{Y.current=!1}),[]),(0,i.useEffect)(()=>{if(Y.current&&v()(r,"shipping")){if(v()(r,"contactList")){let e=y()(r,"contactList").contacts.filter(e=>e.isWhatsappValid);c(e.length)}if(v()(r,"shipping")){let e=y()(r,"shipping"),t=e.filter(e=>!j()(e.deliveredAt)),a=e.filter(e=>!j()(e.confirmationRequestedAt)),n=e.filter(e=>!j()(e.deliveredAt)&&!j()(e.confirmationRequestedAt));b(t.length),C(a.length),q(n.length),b(t.length)}}},[r]),(0,i.useEffect)(()=>{E(h/s*100)},[h,s]),(0,i.useEffect)(()=>{let e=localStorage.getItem("companyId"),r=(0,L.C)({companyId:e});return r.on(`company-${e}-campaign`,e=>{console.log(e),e.record.id===+t&&(a(e.record),"FINALIZADA"===e.record.status&&setTimeout(()=>{G()},5e3))}),()=>{r.disconnect()}},[t]);let G=async()=>{R(!0);let{data:e}=await g.Z.get(`/campaigns/${t}`);a(e),R(!1)};return(0,n.jsxs)(d.Z,{children:[n.jsx(u.Z,{children:n.jsx(p.Z,{style:{width:"99.6%"},container:!0,children:n.jsx(p.Z,{xs:12,item:!0,children:(0,n.jsxs)(m.Z,{children:["Relat\xf3rio da ",r.name||"Campanha"]})})})}),(0,n.jsxs)(l(),{className:e.mainPaper,variant:"outlined",children:[(0,n.jsxs)(x.Z,{variant:"h6",component:"h2",children:["Status: ",(e=>{switch(e){case"INATIVA":return"Inativa";case"PROGRAMADA":return"Programada";case"EM_ANDAMENTO":return"Em Andamento";case"CANCELADA":return"Cancelada";case"FINALIZADA":return"Finalizada";default:return e}})(r.status)," ",h," de ",s]}),(0,n.jsxs)(p.Z,{spacing:2,container:!0,children:[n.jsx(p.Z,{xs:12,item:!0,children:n.jsx(f.Z,{variant:"determinate",style:{height:15,borderRadius:3,margin:"20px 0"},value:I})}),n.jsx(p.Z,{xs:12,md:4,item:!0,children:n.jsx(Z.Z,{icon:n.jsx(w(),{fontSize:"inherit"}),title:"Contatos V\xe1lidos",value:s,loading:z})}),r.confirmation&&(0,n.jsxs)(n.Fragment,{children:[n.jsx(p.Z,{xs:12,md:4,item:!0,children:n.jsx(Z.Z,{icon:n.jsx(D(),{fontSize:"inherit"}),title:"Confirma\xe7\xf5es Solicitadas",value:S,loading:z})}),n.jsx(p.Z,{xs:12,md:4,item:!0,children:n.jsx(Z.Z,{icon:n.jsx(N(),{fontSize:"inherit"}),title:"Confirma\xe7\xf5es",value:A,loading:z})})]}),n.jsx(p.Z,{xs:12,md:4,item:!0,children:n.jsx(Z.Z,{icon:n.jsx(M(),{fontSize:"inherit"}),title:"Entregues",value:h,loading:z})}),r.whatsappId&&n.jsx(p.Z,{xs:12,md:4,item:!0,children:n.jsx(Z.Z,{icon:n.jsx(_(),{fontSize:"inherit"}),title:"Conex\xe3o",value:r.whatsapp.name,loading:z})}),r.contactListId&&n.jsx(p.Z,{xs:12,md:4,item:!0,children:n.jsx(Z.Z,{icon:n.jsx(W(),{fontSize:"inherit"}),title:"Lista de Contatos",value:r.contactList.name,loading:z})}),n.jsx(p.Z,{xs:12,md:4,item:!0,children:n.jsx(Z.Z,{icon:n.jsx(P(),{fontSize:"inherit"}),title:"Agendamento",value:B(r.scheduledAt),loading:z})}),n.jsx(p.Z,{xs:12,md:4,item:!0,children:n.jsx(Z.Z,{icon:n.jsx(k(),{fontSize:"inherit"}),title:"Conclus\xe3o",value:B(r.completedAt),loading:z})})]})]})]})};a()}catch(e){a(e)}})},38561:(e,t,r)=>{r.d(t,{Z:()=>s,i:()=>o});var a=r(52167),n=r.n(a);let i=n().create({baseURL:process.env.REACT_APP_BACKEND_URL,withCredentials:!0}),o=n().create({baseURL:process.env.REACT_APP_BACKEND_URL}),s=i},7405:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{C:()=>c});var n=r(14612),i=r(75795),o=r.n(i),s=e([n]);function c(e){return localStorage.getItem("userId")&&localStorage.getItem("userId"),(0,n.default)(process.env.REACT_APP_BACKEND_URL,{transports:["websocket","polling","flashsocket"],pingTimeout:18e3,pingInterval:18e3,query:o()(e)?{...e}:{userId:e.userId}})}n=(s.then?(await s)():s)[0],a()}catch(e){a(e)}})},32705:e=>{e.exports=require("@material-ui/core/Container")},40640:e=>{e.exports=require("@material-ui/core/Paper")},54104:e=>{e.exports=require("@material-ui/core/Typography")},55223:e=>{e.exports=require("@material-ui/core/colors")},48308:e=>{e.exports=require("@material-ui/core/styles")},33585:e=>{e.exports=require("@material-ui/icons/CheckCircle")},57579:e=>{e.exports=require("@material-ui/icons/Done")},77605:e=>{e.exports=require("@material-ui/icons/DoneAll")},2849:e=>{e.exports=require("@material-ui/icons/EventAvailable")},78495:e=>{e.exports=require("@material-ui/icons/Group")},23252:e=>{e.exports=require("@material-ui/icons/ListAlt")},10681:e=>{e.exports=require("@material-ui/icons/Schedule")},79723:e=>{e.exports=require("@material-ui/icons/WhatsApp")},44164:e=>{e.exports=require("@material-ui/lab/Skeleton")},43349:e=>{e.exports=require("@material-ui/styles")},95027:e=>{e.exports=require("@material-ui/system")},23874:e=>{e.exports=require("@material-ui/utils")},52167:e=>{e.exports=require("axios")},68103:e=>{e.exports=require("clsx")},1712:e=>{e.exports=require("lodash/get")},98210:e=>{e.exports=require("lodash/has")},48524:e=>{e.exports=require("lodash/isNull")},75795:e=>{e.exports=require("lodash/isObject")},32245:e=>{e.exports=require("moment")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")},14661:e=>{e.exports=require("react-router-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},14612:e=>{e.exports=import("socket.io-client")},71017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[5388,9908,3213],()=>r(51493));module.exports=a})();