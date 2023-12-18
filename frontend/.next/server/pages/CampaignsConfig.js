"use strict";(()=>{var e={};e.id=5574,e.ids=[5574,660],e.modules={14310:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(95027),i=a(87462),n=a(43349),l=a(90953),o=(0,r.styleFunctionSx)((0,r.compose)(r.borders,r.display,r.flexbox,r.grid,r.positions,r.palette,r.shadows,r.sizing,r.spacing,r.typography));let s=(function(e){var t=(0,n.styled)("div");return function(e,a){return t(e,(0,i.Z)({defaultTheme:l.Z},a))}})(0)(o,{name:"MuiBox"})},50998:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(87462),i=a(91),n=a(16689);a(580);var l=a(68103),o=a.n(l);a(23874);var s=a(52543),d=a(4024),c=a(83711),u=a(17294),p=a(66987),h=a(66405),g="undefined"==typeof window?n.useEffect:n.useLayoutEffect,m=n.forwardRef(function(e,t){var a=e.alignItems,l=void 0===a?"center":a,s=e.autoFocus,m=void 0!==s&&s,v=e.button,x=void 0!==v&&v,y=e.children,b=e.classes,f=e.className,Z=e.component,j=e.ContainerComponent,C=void 0===j?"li":j,I=e.ContainerProps,S=(I=void 0===I?{}:I).className,k=(0,i.Z)(I,["className"]),P=e.dense,A=e.disabled,N=void 0!==A&&A,w=e.disableGutters,q=e.divider,M=e.focusVisibleClassName,R=e.selected,B=(0,i.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),D=n.useContext(p.Z),E={dense:void 0!==P&&P||D.dense||!1,alignItems:l},W=n.useRef(null);g(function(){m&&W.current&&W.current.focus()},[m]);var T=n.Children.toArray(y),_=T.length&&(0,c.Z)(T[T.length-1],["ListItemSecondaryAction"]),V=n.useCallback(function(e){W.current=h.findDOMNode(e)},[]),F=(0,u.Z)(V,t),L=(0,r.Z)({className:o()(b.root,f,E.dense&&b.dense,!(void 0!==w&&w)&&b.gutters,void 0!==q&&q&&b.divider,N&&b.disabled,x&&b.button,"center"!==l&&b.alignItemsFlexStart,_&&b.secondaryAction,void 0!==R&&R&&b.selected),disabled:N},B),O=Z||"li";return(x&&(L.component=Z||"div",L.focusVisibleClassName=o()(b.focusVisible,M),O=d.Z),_)?(O=L.component||Z?O:"div","li"===C&&("li"===O?O="div":"li"===L.component&&(L.component="div")),n.createElement(p.Z.Provider,{value:E},n.createElement(C,(0,r.Z)({className:o()(b.container,S),ref:F},k),n.createElement(O,L,T),T.pop()))):n.createElement(p.Z.Provider,{value:E},n.createElement(O,(0,r.Z)({ref:F},L),T))});let v=(0,s.Z)(function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}},{name:"MuiListItem"})(m)},85639:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(91),i=a(4942),n=a(87462),l=a(16689);a(580);var o=a(68103),s=a.n(o),d=a(52543),c=a(50998),u=l.forwardRef(function(e,t){var a,i=e.classes,o=e.className,d=e.component,u=e.disableGutters,p=void 0!==u&&u,h=e.ListItemClasses,g=e.role,m=e.selected,v=e.tabIndex,x=(0,r.Z)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==v?v:-1),l.createElement(c.Z,(0,n.Z)({button:!0,role:void 0===g?"menuitem":g,tabIndex:a,component:void 0===d?"li":d,selected:m,disableGutters:p,classes:(0,n.Z)({dense:i.dense},h),className:s()(i.root,o,m&&i.selected,!p&&i.gutters),ref:t},x))});let p=(0,d.Z)(function(e){return{root:(0,n.Z)({},e.typography.body1,(0,i.Z)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:(0,n.Z)({},e.typography.body2,{minHeight:"auto"})}},{name:"MuiMenuItem"})(u)},22318:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(87462),i=a(91),n=a(16689);a(580);var l=a(68103),o=a.n(l),s=a(52543),d=a(93871),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=n.forwardRef(function(e,t){var a=e.align,l=void 0===a?"inherit":a,s=e.classes,u=e.className,p=e.color,h=void 0===p?"initial":p,g=e.component,m=e.display,v=void 0===m?"initial":m,x=e.gutterBottom,y=e.noWrap,b=e.paragraph,f=void 0!==b&&b,Z=e.variant,j=void 0===Z?"body1":Z,C=e.variantMapping,I=void 0===C?c:C,S=(0,i.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),k=g||(f?"p":I[j]||c[j])||"span";return n.createElement(k,(0,r.Z)({className:o()(s.root,u,"inherit"!==j&&s[j],"initial"!==h&&s["color".concat((0,d.Z)(h))],void 0!==y&&y&&s.noWrap,void 0!==x&&x&&s.gutterBottom,f&&s.paragraph,"inherit"!==l&&s["align".concat((0,d.Z)(l))],"initial"!==v&&s["display".concat((0,d.Z)(v))]),ref:t},S))});let p=(0,s.Z)(function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}},{name:"MuiTypography"})(u)},27431:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>x,default:()=>h,getServerSideProps:()=>v,getStaticPaths:()=>m,getStaticProps:()=>g,reportWebVitals:()=>y,routeModule:()=>I,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>C,unstable_getStaticParams:()=>Z,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>b});var i=a(87093),n=a(35244),l=a(1323),o=a(55388),s=a.n(o),d=a(16769),c=a.n(d),u=a(9962),p=e([u]);u=(p.then?(await p)():p)[0];let h=(0,l.l)(u,"default"),g=(0,l.l)(u,"getStaticProps"),m=(0,l.l)(u,"getStaticPaths"),v=(0,l.l)(u,"getServerSideProps"),x=(0,l.l)(u,"config"),y=(0,l.l)(u,"reportWebVitals"),b=(0,l.l)(u,"unstable_getStaticProps"),f=(0,l.l)(u,"unstable_getStaticPaths"),Z=(0,l.l)(u,"unstable_getStaticParams"),j=(0,l.l)(u,"unstable_getServerProps"),C=(0,l.l)(u,"unstable_getServerSideProps"),I=new i.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/CampaignsConfig",pathname:"/CampaignsConfig",bundlePath:"",filename:""},components:{App:c(),Document:s()},userland:u});r()}catch(e){r(e)}})},6133:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(20997);a(16689);var i=a(12610),n=a.n(i),l=a(81961),o=a.n(l),s=a(80929),d=a.n(s),c=a(46856),u=a.n(c),p=a(82400),h=a.n(p),g=a(54104),m=a.n(g),v=a(92921);let x=({title:e,children:t,open:a,onClose:i,onConfirm:l})=>(0,r.jsxs)(o(),{open:a,onClose:()=>i(!1),"aria-labelledby":"confirm-dialog",children:[r.jsx(h(),{id:"confirm-dialog",children:e}),r.jsx(u(),{dividers:!0,children:r.jsx(m(),{children:t})}),(0,r.jsxs)(d(),{children:[r.jsx(n(),{variant:"contained",onClick:()=>i(!1),color:"default",children:v.a.t("confirmationModal.buttons.cancel")}),r.jsx(n(),{variant:"contained",onClick:()=>{i(!1),l()},color:"secondary",children:v.a.t("confirmationModal.buttons.confirm")})]})]})},96153:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(20997);a(16689);var i=a(48308),n=a(32705),l=a.n(n);let o=(0,i.makeStyles)(e=>({mainContainer:{flex:1,padding:e.spacing(2),height:"calc(100% - 48px)"},contentWrapper:{height:"100%",overflowY:"hidden",display:"flex",flexDirection:"column"}})),s=({children:e})=>{let t=o();return r.jsx(l(),{className:t.mainContainer,children:r.jsx("div",{className:t.contentWrapper,children:e})})}},66276:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(20997);a(16689);let i=(0,a(48308).makeStyles)(e=>({contactsHeader:{display:"flex",alignItems:"center",padding:"0px 6px 6px 6px"}})),n=({children:e})=>{let t=i();return r.jsx("div",{className:t.contactsHeader,children:e})}},2926:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(20997);a(16689);var i=a(54104),n=a.n(i);function l(e){return r.jsx(n(),{variant:"h5",color:"primary",gutterBottom:!0,children:e.children})}},9962:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>E});var i=a(20997),n=a(16689),l=a(48308),o=a(40640),s=a.n(o),d=a(3590),c=a(96153),u=a(66276),p=a(2926),h=a(4530),g=a.n(h),m=a(38561),v=a(92921),x=a(41749),y=a(14310),b=a(22318),f=a(64436),Z=a(85161),j=a(94924),C=a(85639),I=a(282),S=a(39803),k=a(82302),P=a(83750),A=a(57394),N=a(88222),w=a(99613),q=a(17812),M=a(6133),R=e([d]);d=(R.then?(await R)():R)[0];let B=(0,l.makeStyles)(e=>({mainPaper:{flex:1,padding:e.spacing(1),overflowY:"scroll",...e.scrollbarStyles},textRight:{textAlign:"right"},tabPanelsContainer:{padding:e.spacing(2)}})),D={messageInterval:20,longerIntervalAfter:20,greaterInterval:60,variables:[]},E=()=>{let e=B(),[t,a]=(0,n.useState)(D),[r,l]=(0,n.useState)(!1),[o,h]=(0,n.useState)(!1),[R,E]=(0,n.useState)(null),[W,T]=(0,n.useState)({key:"",value:""});(0,n.useEffect)(()=>{m.Z.get("/campaign-settings").then(({data:e})=>{let t=[];Array.isArray(e)&&e.length>0&&(e.forEach(e=>{t.push([e.key,JSON.parse(e.value)])}),a(Object.fromEntries(t)))})},[]);let _=e=>{if(null!==e.target.value){let t={};t[e.target.name]=e.target.value,T(e=>({...e,...t}))}},V=e=>{let t={};t[e.target.name]=e.target.value,a(e=>({...e,...t}))},F=async()=>{await m.Z.post("/campaign-settings",{settings:t}),d.toast.success("Configura\xe7\xf5es salvas")};return(0,i.jsxs)(c.Z,{children:[i.jsx(M.Z,{title:v.a.t("campaigns.confirmationModal.deleteTitle"),open:o,onClose:()=>h(!1),onConfirm:()=>{let e=t.variables.filter(e=>e.key!==R);a(t=>({...t,variables:e})),E(null)},children:v.a.t("campaigns.confirmationModal.deleteMessage")}),i.jsx(u.Z,{children:i.jsx(x.Z,{style:{width:"99.6%"},container:!0,children:i.jsx(x.Z,{xs:12,item:!0,children:i.jsx(p.Z,{children:v.a.t("campaignsConfig.title")})})})}),i.jsx(s(),{className:e.mainPaper,variant:"outlined",children:i.jsx(y.Z,{className:e.tabPanelsContainer,children:(0,i.jsxs)(x.Z,{spacing:2,container:!0,children:[i.jsx(x.Z,{xs:12,item:!0,children:i.jsx(b.Z,{component:"h3",children:"Intervalos"})}),i.jsx(x.Z,{xs:12,md:4,item:!0,children:(0,i.jsxs)(f.Z,{variant:"outlined",className:e.formControl,fullWidth:!0,children:[i.jsx(Z.Z,{id:"messageInterval-label",children:"Intervalo Rand\xf4mico de Disparo"}),(0,i.jsxs)(j.Z,{name:"messageInterval",id:"messageInterval",labelId:"messageInterval-label",label:"Intervalo Rand\xf4mico de Disparo",value:t.messageInterval,onChange:e=>V(e),children:[i.jsx(C.Z,{value:0,children:"Sem Intervalo"}),i.jsx(C.Z,{value:5,children:"5 segundos"}),i.jsx(C.Z,{value:10,children:"10 segundos"}),i.jsx(C.Z,{value:15,children:"15 segundos"}),i.jsx(C.Z,{value:20,children:"20 segundos"})]})]})}),i.jsx(x.Z,{xs:12,md:4,item:!0,children:(0,i.jsxs)(f.Z,{variant:"outlined",className:e.formControl,fullWidth:!0,children:[i.jsx(Z.Z,{id:"longerIntervalAfter-label",children:"Intervalo Maior Ap\xf3s"}),(0,i.jsxs)(j.Z,{name:"longerIntervalAfter",id:"longerIntervalAfter",labelId:"longerIntervalAfter-label",label:"Intervalo Maior Ap\xf3s",value:t.longerIntervalAfter,onChange:e=>V(e),children:[i.jsx(C.Z,{value:0,children:"N\xe3o definido"}),i.jsx(C.Z,{value:5,children:"5 mensagens"}),i.jsx(C.Z,{value:10,children:"10 mensagens"}),i.jsx(C.Z,{value:15,children:"15 mensagens"}),i.jsx(C.Z,{value:20,children:"20 mensagens"})]})]})}),i.jsx(x.Z,{xs:12,md:4,item:!0,children:(0,i.jsxs)(f.Z,{variant:"outlined",className:e.formControl,fullWidth:!0,children:[i.jsx(Z.Z,{id:"greaterInterval-label",children:"Intervalo de Disparo Maior"}),(0,i.jsxs)(j.Z,{name:"greaterInterval",id:"greaterInterval",labelId:"greaterInterval-label",label:"Intervalo de Disparo Maior",value:t.greaterInterval,onChange:e=>V(e),children:[i.jsx(C.Z,{value:0,children:"Sem Intervalo"}),i.jsx(C.Z,{value:20,children:"20 segundos"}),i.jsx(C.Z,{value:30,children:"30 segundos"}),i.jsx(C.Z,{value:40,children:"40 segundos"}),i.jsx(C.Z,{value:50,children:"50 segundos"}),i.jsx(C.Z,{value:60,children:"60 segundos"})]})]})}),(0,i.jsxs)(x.Z,{xs:12,className:e.textRight,item:!0,children:[i.jsx(I.Z,{onClick:()=>l(!r),color:"primary",style:{marginRight:10},children:"Adicionar Vari\xe1vel"}),i.jsx(I.Z,{onClick:F,color:"primary",variant:"contained",children:"Salvar Configura\xe7\xf5es"})]}),r&&(0,i.jsxs)(i.Fragment,{children:[i.jsx(x.Z,{xs:12,md:6,item:!0,children:i.jsx(S.Z,{label:"Atalho",variant:"outlined",value:W.key,name:"key",onChange:_,fullWidth:!0})}),i.jsx(x.Z,{xs:12,md:6,item:!0,children:i.jsx(S.Z,{label:"Conte\xfado",variant:"outlined",value:W.value,name:"value",onChange:_,fullWidth:!0})}),(0,i.jsxs)(x.Z,{xs:12,className:e.textRight,item:!0,children:[i.jsx(I.Z,{onClick:()=>l(!r),color:"primary",style:{marginRight:10},children:"Fechar"}),i.jsx(I.Z,{onClick:()=>{a(e=>{let a=t.variables.filter(e=>e.key===W.key),r=e.variables;return 0===a.length&&(r.push(Object.assign({},W)),T({key:"",value:""})),{...e,variables:r}})},color:"primary",variant:"contained",children:"Adicionar"})]})]}),t.variables.length>0&&i.jsx(x.Z,{xs:12,className:e.textRight,item:!0,children:(0,i.jsxs)(k.Z,{size:"small",children:[i.jsx(P.Z,{children:(0,i.jsxs)(A.Z,{children:[i.jsx(N.Z,{style:{width:"1%"}}),i.jsx(N.Z,{children:"Atalho"}),i.jsx(N.Z,{children:"Conte\xfado"})]})}),i.jsx(w.Z,{children:Array.isArray(t.variables)&&t.variables.map((e,t)=>(0,i.jsxs)(A.Z,{children:[i.jsx(N.Z,{children:i.jsx(q.Z,{size:"small",onClick:()=>{E(e.key),h(!0)},children:i.jsx(g(),{})})}),i.jsx(N.Z,{children:"{"+e.key+"}"}),i.jsx(N.Z,{children:e.value})]},t))})]})})]})})})]})};r()}catch(e){r(e)}})},12610:e=>{e.exports=require("@material-ui/core/Button")},32705:e=>{e.exports=require("@material-ui/core/Container")},81961:e=>{e.exports=require("@material-ui/core/Dialog")},80929:e=>{e.exports=require("@material-ui/core/DialogActions")},46856:e=>{e.exports=require("@material-ui/core/DialogContent")},82400:e=>{e.exports=require("@material-ui/core/DialogTitle")},40640:e=>{e.exports=require("@material-ui/core/Paper")},54104:e=>{e.exports=require("@material-ui/core/Typography")},48308:e=>{e.exports=require("@material-ui/core/styles")},4530:e=>{e.exports=require("@material-ui/icons/DeleteOutline")},43349:e=>{e.exports=require("@material-ui/styles")},95027:e=>{e.exports=require("@material-ui/system")},23874:e=>{e.exports=require("@material-ui/utils")},52167:e=>{e.exports=require("axios")},68103:e=>{e.exports=require("clsx")},18805:e=>{e.exports=require("i18next")},86071:e=>{e.exports=require("i18next-browser-languagedetector")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},84466:e=>{e.exports=require("react-transition-group")},20997:e=>{e.exports=require("react/jsx-runtime")},3590:e=>{e.exports=import("react-toastify")},71017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[5388,9908,895,9154,4924,2966,8997,5800],()=>a(27431));module.exports=r})();