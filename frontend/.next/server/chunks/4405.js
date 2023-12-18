"use strict";exports.id=4405,exports.ids=[4405],exports.modules={50998:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(87462),r=n(91),a=n(16689);n(580);var i=n(68103),s=n.n(i);n(23874);var d=n(52543),l=n(4024),c=n(83711),u=n(17294),m=n(66987),p=n(66405),v="undefined"==typeof window?a.useEffect:a.useLayoutEffect,g=a.forwardRef(function(e,t){var n=e.alignItems,i=void 0===n?"center":n,d=e.autoFocus,g=void 0!==d&&d,f=e.button,b=void 0!==f&&f,h=e.children,x=e.classes,C=e.className,Z=e.component,y=e.ContainerComponent,I=void 0===y?"li":y,k=e.ContainerProps,N=(k=void 0===k?{}:k).className,w=(0,r.Z)(k,["className"]),j=e.dense,E=e.disabled,S=void 0!==E&&E,A=e.disableGutters,B=e.divider,P=e.focusVisibleClassName,H=e.selected,L=(0,r.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),R=a.useContext(m.Z),M={dense:void 0!==j&&j||R.dense||!1,alignItems:i},T=a.useRef(null);v(function(){g&&T.current&&T.current.focus()},[g]);var V=a.Children.toArray(h),$=V.length&&(0,c.Z)(V[V.length-1],["ListItemSecondaryAction"]),D=a.useCallback(function(e){T.current=p.findDOMNode(e)},[]),G=(0,u.Z)(D,t),O=(0,o.Z)({className:s()(x.root,C,M.dense&&x.dense,!(void 0!==A&&A)&&x.gutters,void 0!==B&&B&&x.divider,S&&x.disabled,b&&x.button,"center"!==i&&x.alignItemsFlexStart,$&&x.secondaryAction,void 0!==H&&H&&x.selected),disabled:S},L),F=Z||"li";return(b&&(O.component=Z||"div",O.focusVisibleClassName=s()(x.focusVisible,P),F=l.Z),$)?(F=O.component||Z?F:"div","li"===I&&("li"===F?F="div":"li"===O.component&&(O.component="div")),a.createElement(m.Z.Provider,{value:M},a.createElement(I,(0,o.Z)({className:s()(x.container,N),ref:G},w),a.createElement(F,O,V),V.pop()))):a.createElement(m.Z.Provider,{value:M},a.createElement(F,(0,o.Z)({ref:G},O),V))});let f=(0,d.Z)(function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}},{name:"MuiListItem"})(g)},85639:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(91),r=n(4942),a=n(87462),i=n(16689);n(580);var s=n(68103),d=n.n(s),l=n(52543),c=n(50998),u=i.forwardRef(function(e,t){var n,r=e.classes,s=e.className,l=e.component,u=e.disableGutters,m=void 0!==u&&u,p=e.ListItemClasses,v=e.role,g=e.selected,f=e.tabIndex,b=(0,o.Z)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==f?f:-1),i.createElement(c.Z,(0,a.Z)({button:!0,role:void 0===v?"menuitem":v,tabIndex:n,component:void 0===l?"li":l,selected:g,disableGutters:m,classes:(0,a.Z)({dense:r.dense},p),className:d()(r.root,s,g&&r.selected,!m&&r.gutters),ref:t},b))});let m=(0,l.Z)(function(e){return{root:(0,a.Z)({},e.typography.body1,(0,r.Z)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:(0,a.Z)({},e.typography.body2,{minHeight:"auto"})}},{name:"MuiMenuItem"})(u)},41120:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(87462),r=n(43349),a=n(90953);let i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.makeStyles)(e,(0,o.Z)({defaultTheme:a.Z},t))}},6133:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(20997);n(16689);var r=n(12610),a=n.n(r),i=n(81961),s=n.n(i),d=n(80929),l=n.n(d),c=n(46856),u=n.n(c),m=n(82400),p=n.n(m),v=n(54104),g=n.n(v),f=n(92921);let b=({title:e,children:t,open:n,onClose:r,onConfirm:i})=>(0,o.jsxs)(s(),{open:n,onClose:()=>r(!1),"aria-labelledby":"confirm-dialog",children:[o.jsx(p(),{id:"confirm-dialog",children:e}),o.jsx(u(),{dividers:!0,children:o.jsx(g(),{children:t})}),(0,o.jsxs)(l(),{children:[o.jsx(a(),{variant:"contained",onClick:()=>r(!1),color:"default",children:f.a.t("confirmationModal.buttons.cancel")}),o.jsx(a(),{variant:"contained",onClick:()=>{r(!1),i()},color:"secondary",children:f.a.t("confirmationModal.buttons.confirm")})]})]})},96153:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(20997);n(16689);var r=n(48308),a=n(32705),i=n.n(a);let s=(0,r.makeStyles)(e=>({mainContainer:{flex:1,padding:e.spacing(2),height:"calc(100% - 48px)"},contentWrapper:{height:"100%",overflowY:"hidden",display:"flex",flexDirection:"column"}})),d=({children:e})=>{let t=s();return o.jsx(i(),{className:t.mainContainer,children:o.jsx("div",{className:t.contentWrapper,children:e})})}},66276:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(20997);n(16689);let r=(0,n(48308).makeStyles)(e=>({contactsHeader:{display:"flex",alignItems:"center",padding:"0px 6px 6px 6px"}})),a=({children:e})=>{let t=r();return o.jsx("div",{className:t.contactsHeader,children:e})}},2926:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(20997);n(16689);var r=n(54104),a=n.n(r);function i(e){return o.jsx(a(),{variant:"h5",color:"primary",gutterBottom:!0,children:e.children})}},151:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{Z:()=>l});var r=n(3590),a=n(92921),i=n(97026),s=n.n(i),d=e([r]);r=(d.then?(await d)():d)[0];let l=e=>{let t=e.response?.data?.error;if(t){if(a.a.exists(`backendErrors.${t}`)){r.toast.error(a.a.t(`backendErrors.${t}`),{toastId:t,autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"});return}r.toast.error(t,{toastId:t,autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"});return}if(s()(e)){r.toast.error(e);return}r.toast.error("An error occurred!")};o()}catch(e){o(e)}})},7405:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{C:()=>d});var r=n(14612),a=n(75795),i=n.n(a),s=e([r]);function d(e){return localStorage.getItem("userId")&&localStorage.getItem("userId"),(0,r.default)(process.env.REACT_APP_BACKEND_URL,{transports:["websocket","polling","flashsocket"],pingTimeout:18e3,pingInterval:18e3,query:i()(e)?{...e}:{userId:e.userId}})}r=(s.then?(await s)():s)[0],o()}catch(e){o(e)}})}};