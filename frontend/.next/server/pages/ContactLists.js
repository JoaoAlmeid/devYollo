"use strict";(()=>{var e={};e.id=7483,e.ids=[7483,660],e.modules={25617:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>j,default:()=>x,getServerSideProps:()=>g,getStaticPaths:()=>h,getStaticProps:()=>m,reportWebVitals:()=>y,routeModule:()=>C,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>T,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>S});var i=r(87093),s=r(35244),l=r(1323),o=r(55388),n=r.n(o),c=r(16769),u=r.n(c),d=r(56242),p=e([d]);d=(p.then?(await p)():p)[0];let x=(0,l.l)(d,"default"),m=(0,l.l)(d,"getStaticProps"),h=(0,l.l)(d,"getStaticPaths"),g=(0,l.l)(d,"getServerSideProps"),j=(0,l.l)(d,"config"),y=(0,l.l)(d,"reportWebVitals"),S=(0,l.l)(d,"unstable_getStaticProps"),f=(0,l.l)(d,"unstable_getStaticPaths"),q=(0,l.l)(d,"unstable_getStaticParams"),b=(0,l.l)(d,"unstable_getServerProps"),T=(0,l.l)(d,"unstable_getServerSideProps"),C=new i.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/ContactLists",pathname:"/ContactLists",bundlePath:"",filename:""},components:{App:u(),Document:n()},userland:d});a()}catch(e){a(e)}})},61717:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>A});var i=r(20997),s=r(16689),l=r(75609),o=r(2296),n=r(3590),c=r(48308),u=r(55223),d=r(12610),p=r.n(d),x=r(26481),m=r.n(x),h=r(81961),g=r.n(h),j=r(80929),y=r.n(j),S=r(46856),f=r.n(S),q=r(82400),b=r.n(q),T=r(9069),C=r.n(T),L=r(92921),P=r(38561),v=r(151),Z=e([n,v]);[n,v]=Z.then?(await Z)():Z;let E=(0,c.makeStyles)(e=>({root:{display:"flex",flexWrap:"wrap"},multFieldLine:{display:"flex","& > *:not(:last-child)":{marginRight:e.spacing(1)}},btnWrapper:{position:"relative"},buttonProgress:{color:u.green[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},formControl:{margin:e.spacing(1),minWidth:120}})),w=l.object().shape({name:l.string().min(2,"Too Short!").max(50,"Too Long!").required("Required")}),A=({open:e,onClose:t,contactListId:r})=>{let a=E(),l={name:""},[c,u]=(0,s.useState)(l);(0,s.useEffect)(()=>{(async()=>{if(r)try{let{data:e}=await P.Z.get(`/contact-lists/${r}`);u(t=>({...t,...e}))}catch(e){(0,v.Z)(e)}})()},[r,e]);let d=()=>{t(),u(l)},x=async e=>{let t={...e};try{r?await P.Z.put(`/contact-lists/${r}`,t):await P.Z.post("/contact-lists",t),n.toast.success(L.a.t("contactList.dialog"))}catch(e){(0,v.Z)(e)}d()};return i.jsx("div",{className:a.root,children:(0,i.jsxs)(g(),{open:e,onClose:d,maxWidth:"xs",fullWidth:!0,scroll:"paper",children:[i.jsx(b(),{id:"form-dialog-title",children:r?`${L.a.t("contactLists.dialog.edit")}`:`${L.a.t("contactLists.dialog.add")}`}),i.jsx(o.Formik,{initialValues:c,enableReinitialize:!0,validationSchema:w,onSubmit:(e,t)=>{setTimeout(()=>{x(e),t.setSubmitting(!1)},400)},children:({touched:e,errors:t,isSubmitting:s})=>(0,i.jsxs)(o.Form,{children:[i.jsx(f(),{dividers:!0,children:i.jsx("div",{className:a.multFieldLine,children:i.jsx(o.Field,{as:m(),label:L.a.t("contactLists.dialog.name"),autoFocus:!0,name:"name",error:e.name&&!!t.name,helperText:e.name&&t.name,variant:"outlined",margin:"dense",fullWidth:!0})})}),(0,i.jsxs)(y(),{children:[i.jsx(p(),{onClick:d,color:"secondary",disabled:s,variant:"outlined",children:L.a.t("contactLists.dialog.cancel")}),(0,i.jsxs)(p(),{type:"submit",color:"primary",disabled:s,variant:"contained",className:a.btnWrapper,children:[r?`${L.a.t("contactLists.dialog.okEdit")}`:`${L.a.t("contactLists.dialog.okAdd")}`,s&&i.jsx(C(),{size:24,className:a.buttonProgress})]})]})]})})]})})};a()}catch(e){a(e)}})},56242:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>et});var i=r(20997),s=r(16689),l=r(3590),o=r(14661),n=r(48308),c=r(40640),u=r.n(c),d=r(12610),p=r.n(d),x=r(4880),m=r.n(x),h=r(31555),g=r.n(h),j=r(42740),y=r.n(j),S=r(56956),f=r.n(S),q=r(11236),b=r.n(q),T=r(83974),C=r.n(T),L=r(94202),P=r.n(L),v=r(26481),Z=r.n(v),E=r(32944),w=r.n(E),A=r(4530),_=r.n(A),k=r(93365),I=r.n(k),D=r(41075),N=r.n(D),W=r(92211),$=r.n(W),O=r(96153),F=r(66276),R=r(2926),z=r(38561),M=r(92921),B=r(29385),V=r(61717),G=r(6133),H=r(151),U=r(41749),X=r(1339),Y=r.n(X),J=r(7405),K=e([l,V,H,J]);[l,V,H,J]=K.then?(await K)():K;let Q=(e,t)=>{if("LOAD_CONTACTLISTS"===t.type){let r=t.payload,a=[];return r.forEach(t=>{let r=e.findIndex(e=>e.id===t.id);-1!==r?e[r]=t:a.push(t)}),[...e,...a]}if("UPDATE_CONTACTLIST"===t.type){let r=t.payload,a=e.findIndex(e=>e.id===r.id);return -1!==a?(e[a]=r,[...e]):[r,...e]}if("DELETE_CONTACTLIST"===t.type){let r=t.payload,a=e.findIndex(e=>e.id===r);return -1!==a&&e.splice(a,1),[...e]}if("RESET"===t.type)return[]},ee=(0,n.makeStyles)(e=>({mainPaper:{flex:1,padding:e.spacing(1),overflowY:"scroll",...e.scrollbarStyles}})),et=()=>{let e=ee(),t=(0,o.useNavigate)(),[r,a]=(0,s.useState)(!1),[n,c]=(0,s.useState)(1),[d,x]=(0,s.useState)(!1),[h,j]=(0,s.useState)(null),[S,q]=(0,s.useState)(null),[T,L]=(0,s.useState)(!1),[v,E]=(0,s.useState)(!1),[A,k]=(0,s.useState)(""),[D,W]=(0,s.useReducer)(Q,[]);(0,s.useEffect)(()=>{W({type:"RESET"}),c(1)},[A]),(0,s.useEffect)(()=>{a(!0);let e=setTimeout(()=>{(async()=>{try{let{data:e}=await z.Z.get("/contact-lists/",{params:{searchParam:A,pageNumber:n}});W({type:"LOAD_CONTACTLISTS",payload:e.records}),x(e.hasMore),a(!1)}catch(e){(0,H.Z)(e)}})()},500);return()=>clearTimeout(e)},[A,n]),(0,s.useEffect)(()=>{let e=localStorage.getItem("companyId"),t=(0,J.C)({companyId:e});return t.on(`company-${e}-ContactList`,e=>{("update"===e.action||"create"===e.action)&&W({type:"UPDATE_CONTACTLIST",payload:e.record}),"delete"===e.action&&W({type:"DELETE_CONTACTLIST",payload:+e.id})}),()=>{t.disconnect()}},[]);let X=e=>{j(e),L(!0)},K=async e=>{try{await z.Z.delete(`/contact-lists/${e}`),l.toast.success(M.a.t("contactLists.toasts.deleted"))}catch(e){(0,H.Z)(e)}q(null),k(""),c(1)},et=()=>{c(e=>e+1)},er=e=>{t.push(`/contact-lists/${e}/contacts`)};return(0,i.jsxs)(O.Z,{children:[i.jsx(G.Z,{title:S&&`${M.a.t("contactLists.confirmationModal.deleteTitle")} ${S.name}?`,open:v,onClose:E,onConfirm:()=>K(S.id),children:M.a.t("contactLists.confirmationModal.deleteMessage")}),i.jsx(V.Z,{open:T,onClose:()=>{j(null),L(!1)},"aria-labelledby":"form-dialog-title",contactListId:h&&h.id}),i.jsx(F.Z,{children:(0,i.jsxs)(U.Z,{style:{width:"99.6%"},container:!0,children:[i.jsx(U.Z,{xs:12,sm:8,item:!0,children:i.jsx(R.Z,{children:M.a.t("contactLists.title")})}),i.jsx(U.Z,{xs:12,sm:4,item:!0,children:(0,i.jsxs)(U.Z,{spacing:2,container:!0,children:[i.jsx(U.Z,{xs:7,sm:6,item:!0,children:i.jsx(Z(),{fullWidth:!0,placeholder:M.a.t("contacts.searchPlaceholder"),type:"search",value:A,onChange:e=>{k(e.target.value.toLowerCase())},InputProps:{startAdornment:i.jsx(w(),{position:"start",children:i.jsx(P(),{style:{color:"gray"}})})}})}),i.jsx(U.Z,{xs:5,sm:6,item:!0,children:i.jsx(p(),{fullWidth:!0,variant:"contained",color:"primary",onClick:()=>{j(null),L(!0)},children:M.a.t("contactLists.buttons.add")})})]})})]})}),i.jsx(u(),{className:e.mainPaper,variant:"outlined",onScroll:e=>{if(!d||r)return;let{scrollTop:t,scrollHeight:a,clientHeight:i}=e.currentTarget;a-(t+100)<i&&et()},children:(0,i.jsxs)(m(),{size:"small",children:[i.jsx(f(),{children:(0,i.jsxs)(b(),{children:[i.jsx(y(),{align:"center",children:M.a.t("contactLists.table.name")}),i.jsx(y(),{align:"center",children:M.a.t("contactLists.table.contacts")}),i.jsx(y(),{align:"center",children:M.a.t("contactLists.table.actions")})]})}),i.jsx(g(),{children:(0,i.jsxs)(i.Fragment,{children:[D.map(e=>(0,i.jsxs)(b(),{children:[i.jsx(y(),{align:"center",children:e.name}),i.jsx(y(),{align:"center",children:e.contactsCount||0}),(0,i.jsxs)(y(),{align:"center",children:[i.jsx("a",{href:Y(),download:"planilha.xlsx",children:i.jsx(C(),{size:"small",title:"Baixar Planilha Exemplo",children:i.jsx($(),{})})}),i.jsx(C(),{size:"small",onClick:()=>er(e.id),children:i.jsx(N(),{})}),i.jsx(C(),{size:"small",onClick:()=>X(e),children:i.jsx(I(),{})}),i.jsx(C(),{size:"small",onClick:t=>{E(!0),q(e)},children:i.jsx(_(),{})})]})]},e.id)),r&&i.jsx(B.Z,{columns:3})]})})]})})]})};a()}catch(e){a(e)}})},12610:e=>{e.exports=require("@material-ui/core/Button")},9069:e=>{e.exports=require("@material-ui/core/CircularProgress")},32705:e=>{e.exports=require("@material-ui/core/Container")},81961:e=>{e.exports=require("@material-ui/core/Dialog")},80929:e=>{e.exports=require("@material-ui/core/DialogActions")},46856:e=>{e.exports=require("@material-ui/core/DialogContent")},82400:e=>{e.exports=require("@material-ui/core/DialogTitle")},83974:e=>{e.exports=require("@material-ui/core/IconButton")},32944:e=>{e.exports=require("@material-ui/core/InputAdornment")},40640:e=>{e.exports=require("@material-ui/core/Paper")},4880:e=>{e.exports=require("@material-ui/core/Table")},31555:e=>{e.exports=require("@material-ui/core/TableBody")},42740:e=>{e.exports=require("@material-ui/core/TableCell")},56956:e=>{e.exports=require("@material-ui/core/TableHead")},11236:e=>{e.exports=require("@material-ui/core/TableRow")},26481:e=>{e.exports=require("@material-ui/core/TextField")},54104:e=>{e.exports=require("@material-ui/core/Typography")},55223:e=>{e.exports=require("@material-ui/core/colors")},48308:e=>{e.exports=require("@material-ui/core/styles")},4530:e=>{e.exports=require("@material-ui/icons/DeleteOutline")},93365:e=>{e.exports=require("@material-ui/icons/Edit")},92211:e=>{e.exports=require("@material-ui/icons/GetApp")},41075:e=>{e.exports=require("@material-ui/icons/People")},94202:e=>{e.exports=require("@material-ui/icons/Search")},44164:e=>{e.exports=require("@material-ui/lab/Skeleton")},43349:e=>{e.exports=require("@material-ui/styles")},95027:e=>{e.exports=require("@material-ui/system")},23874:e=>{e.exports=require("@material-ui/utils")},52167:e=>{e.exports=require("axios")},68103:e=>{e.exports=require("clsx")},2296:e=>{e.exports=require("formik")},18805:e=>{e.exports=require("i18next")},86071:e=>{e.exports=require("i18next-browser-languagedetector")},75795:e=>{e.exports=require("lodash/isObject")},97026:e=>{e.exports=require("lodash/isString")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")},14661:e=>{e.exports=require("react-router-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},75609:e=>{e.exports=require("yup")},3590:e=>{e.exports=import("react-toastify")},14612:e=>{e.exports=import("socket.io-client")},71017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[5388,9908,5800,8810],()=>r(25617));module.exports=a})();