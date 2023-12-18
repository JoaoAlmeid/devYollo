"use strict";(()=>{var e={};e.id=3642,e.ids=[3642,660],e.modules={64436:(e,r,t)=>{t.d(r,{Z:()=>g});var o=t(87462),a=t(91),i=t(16689);t(580);var n=t(68103),l=t.n(n),s=t(36519),d=t(52543),p=t(93871),c=t(83711),u=t(15736),h=i.forwardRef(function(e,r){var t,n=e.children,d=e.classes,h=e.className,g=e.color,m=e.component,v=e.disabled,y=void 0!==v&&v,f=e.error,b=e.fullWidth,x=void 0!==b&&b,S=e.focused,q=e.hiddenLabel,Z=e.margin,P=void 0===Z?"none":Z,C=e.required,k=e.size,w=e.variant,R=(0,a.Z)(e,["children","classes","className","color","component","disabled","error","fullWidth","focused","hiddenLabel","margin","required","size","variant"]),E=i.useState(function(){var e=!1;return n&&i.Children.forEach(n,function(r){if((0,c.Z)(r,["Input","Select"])){var t=(0,c.Z)(r,["Select"])?r.props.input:r;t&&(0,s.B7)(t.props)&&(e=!0)}}),e}),B=E[0],W=E[1],N=i.useState(function(){var e=!1;return n&&i.Children.forEach(n,function(r){(0,c.Z)(r,["Input","Select"])&&(0,s.vd)(r.props,!0)&&(e=!0)}),e}),z=N[0],A=N[1],_=i.useState(!1),M=_[0],F=_[1],T=void 0!==S?S:M;y&&T&&F(!1);var I=i.useCallback(function(){A(!0)},[]),j=i.useCallback(function(){A(!1)},[]);return i.createElement(u.Z.Provider,{value:{adornedStart:B,setAdornedStart:W,color:void 0===g?"primary":g,disabled:y,error:void 0!==f&&f,filled:z,focused:T,fullWidth:x,hiddenLabel:void 0!==q&&q,margin:("small"===k?"dense":void 0)||P,onBlur:function(){F(!1)},onEmpty:j,onFilled:I,onFocus:function(){F(!0)},registerEffect:t,required:void 0!==C&&C,variant:void 0===w?"standard":w}},i.createElement(void 0===m?"div":m,(0,o.Z)({className:l()(d.root,h,"none"!==P&&d["margin".concat((0,p.Z)(P))],x&&d.fullWidth),ref:r},R),n))});let g=(0,d.Z)({root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},{name:"MuiFormControl"})(h)},17812:(e,r,t)=>{t.d(r,{Z:()=>h});var o=t(87462),a=t(91),i=t(16689);t(580);var n=t(68103),l=t.n(n);t(23874);var s=t(52543),d=t(59693),p=t(4024),c=t(93871),u=i.forwardRef(function(e,r){var t=e.edge,n=e.children,s=e.classes,d=e.className,u=e.color,h=void 0===u?"default":u,g=e.disabled,m=void 0!==g&&g,v=e.disableFocusRipple,y=e.size,f=void 0===y?"medium":y,b=(0,a.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.createElement(p.Z,(0,o.Z)({className:l()(s.root,d,"default"!==h&&s["color".concat((0,c.Z)(h))],m&&s.disabled,"small"===f&&s["size".concat((0,c.Z)(f))],{start:s.edgeStart,end:s.edgeEnd}[void 0!==t&&t]),centerRipple:!0,focusRipple:!(void 0!==v&&v),disabled:m,ref:r},b),i.createElement("span",{className:s.label},n))});let h=(0,s.Z)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,d.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(u)},22318:(e,r,t)=>{t.d(r,{Z:()=>u});var o=t(87462),a=t(91),i=t(16689);t(580);var n=t(68103),l=t.n(n),s=t(52543),d=t(93871),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},c=i.forwardRef(function(e,r){var t=e.align,n=void 0===t?"inherit":t,s=e.classes,c=e.className,u=e.color,h=void 0===u?"initial":u,g=e.component,m=e.display,v=void 0===m?"initial":m,y=e.gutterBottom,f=e.noWrap,b=e.paragraph,x=void 0!==b&&b,S=e.variant,q=void 0===S?"body1":S,Z=e.variantMapping,P=void 0===Z?p:Z,C=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),k=g||(x?"p":P[q]||p[q])||"span";return i.createElement(k,(0,o.Z)({className:l()(s.root,c,"inherit"!==q&&s[q],"initial"!==h&&s["color".concat((0,d.Z)(h))],void 0!==f&&f&&s.noWrap,void 0!==y&&y&&s.gutterBottom,x&&s.paragraph,"inherit"!==n&&s["align".concat((0,d.Z)(n))],"initial"!==v&&s["display".concat((0,d.Z)(v))]),ref:r},C))});let u=(0,s.Z)(function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}},{name:"MuiTypography"})(c)},41120:(e,r,t)=>{t.d(r,{Z:()=>n});var o=t(87462),a=t(43349),i=t(90953);let n=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.makeStyles)(e,(0,o.Z)({defaultTheme:i.Z},r))}},57367:(e,r,t)=>{t.a(e,async(e,o)=>{try{t.r(r),t.d(r,{config:()=>y,default:()=>h,getServerSideProps:()=>v,getStaticPaths:()=>m,getStaticProps:()=>g,reportWebVitals:()=>f,routeModule:()=>P,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>Z,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>b});var a=t(87093),i=t(35244),n=t(1323),l=t(55388),s=t.n(l),d=t(16769),p=t.n(d),c=t(24096),u=e([c]);c=(u.then?(await u)():u)[0];let h=(0,n.l)(c,"default"),g=(0,n.l)(c,"getStaticProps"),m=(0,n.l)(c,"getStaticPaths"),v=(0,n.l)(c,"getServerSideProps"),y=(0,n.l)(c,"config"),f=(0,n.l)(c,"reportWebVitals"),b=(0,n.l)(c,"unstable_getStaticProps"),x=(0,n.l)(c,"unstable_getStaticPaths"),S=(0,n.l)(c,"unstable_getStaticParams"),q=(0,n.l)(c,"unstable_getServerProps"),Z=(0,n.l)(c,"unstable_getServerSideProps"),P=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/Chat/ChatMessages",pathname:"/Chat/ChatMessages",bundlePath:"",filename:""},components:{App:p(),Document:s()},userland:c});o()}catch(e){o(e)}})},55223:e=>{e.exports=require("@material-ui/core/colors")},4662:e=>{e.exports=require("@material-ui/icons/Send")},43349:e=>{e.exports=require("@material-ui/styles")},95027:e=>{e.exports=require("@material-ui/system")},23874:e=>{e.exports=require("@material-ui/utils")},52167:e=>{e.exports=require("axios")},68103:e=>{e.exports=require("clsx")},18805:e=>{e.exports=require("i18next")},86071:e=>{e.exports=require("i18next-browser-languagedetector")},98210:e=>{e.exports=require("lodash/has")},35599:e=>{e.exports=require("lodash/isArray")},75795:e=>{e.exports=require("lodash/isObject")},97026:e=>{e.exports=require("lodash/isString")},32245:e=>{e.exports=require("moment")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},14661:e=>{e.exports=require("react-router-dom")},84466:e=>{e.exports=require("react-transition-group")},20997:e=>{e.exports=require("react/jsx-runtime")},3590:e=>{e.exports=import("react-toastify")},14612:e=>{e.exports=import("socket.io-client")},71017:e=>{e.exports=require("path")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[5388,9908,895,9154,5800,4096],()=>t(57367));module.exports=o})();