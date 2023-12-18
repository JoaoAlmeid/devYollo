"use strict";exports.id=3834,exports.ids=[3834],exports.modules={20929:(e,t,a)=>{a.d(t,{m:()=>o});let r={user:{static:[]},admin:{static:["dashboard:view","drawer-admin-items:view","tickets-manager:showall","user-modal:editProfile","user-modal:editQueues","ticket-options:deleteTicket","contacts-page:deleteContact","connections-page:actionButtons","connections-page:addConnection","connections-page:editOrDeleteConnection"]}},n=(e,t,a)=>{let n=r[e];if(!n)return!1;let o=n.static;if(o&&o.includes(t))return!0;let s=n.dynamic;if(s){let e=s[t];return!!e&&e(a)}return!1},o=({role:e,perform:t,data:a,yes:r,no:o})=>n(e,t,a)?r():o();o.defaultProps={yes:()=>null,no:()=>null}},6133:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(20997);a(16689);var n=a(12610),o=a.n(n),s=a(81961),i=a.n(s),l=a(80929),c=a.n(l),d=a(46856),u=a.n(d),h=a(82400),m=a.n(h),g=a(54104),p=a.n(g),f=a(92921);let y=({title:e,children:t,open:a,onClose:n,onConfirm:s})=>(0,r.jsxs)(i(),{open:a,onClose:()=>n(!1),"aria-labelledby":"confirm-dialog",children:[r.jsx(m(),{id:"confirm-dialog",children:e}),r.jsx(u(),{dividers:!0,children:r.jsx(p(),{children:t})}),(0,r.jsxs)(c(),{children:[r.jsx(o(),{variant:"contained",onClick:()=>n(!1),color:"default",children:f.a.t("confirmationModal.buttons.cancel")}),r.jsx(o(),{variant:"contained",onClick:()=>{n(!1),s()},color:"secondary",children:f.a.t("confirmationModal.buttons.confirm")})]})]})},96153:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(20997);a(16689);var n=a(48308),o=a(32705),s=a.n(o);let i=(0,n.makeStyles)(e=>({mainContainer:{flex:1,padding:e.spacing(2),height:"calc(100% - 48px)"},contentWrapper:{height:"100%",overflowY:"hidden",display:"flex",flexDirection:"column"}})),l=({children:e})=>{let t=i();return r.jsx(s(),{className:t.mainContainer,children:r.jsx("div",{className:t.contentWrapper,children:e})})}},37432:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(20997);a(16689);let n=(0,a(48308).makeStyles)(e=>({MainHeaderButtonsWrapper:{flex:"none",marginLeft:"auto","& > *":{margin:e.spacing(1)}}})),o=({children:e})=>{let t=n();return r.jsx("div",{className:t.MainHeaderButtonsWrapper,children:e})}},66276:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(20997);a(16689);let n=(0,a(48308).makeStyles)(e=>({contactsHeader:{display:"flex",alignItems:"center",padding:"0px 6px 6px 6px"}})),o=({children:e})=>{let t=n();return r.jsx("div",{className:t.contactsHeader,children:e})}},71464:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>S});var n=a(20997),o=a(16689),s=a(48308),i=a(68190),l=a.n(i),c=a(48250),d=a.n(c),u=a(75811),h=a.n(u),m=a(84614),g=a.n(m),p=a(85798),f=a.n(p),y=a(151),v=a(38561),x=a(92921),j=e([y]);y=(j.then?(await j)():j)[0];let I=(0,s.makeStyles)(e=>({chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2}})),S=({selectedQueueIds:e,onChange:t})=>{let a=I(),[r,s]=(0,o.useState)([]);return(0,o.useEffect)(()=>{(async()=>{try{let{data:e}=await v.Z.get("/queue");s(e)}catch(e){(0,y.Z)(e)}})()},[]),n.jsx("div",{style:{marginTop:6},children:(0,n.jsxs)(h(),{fullWidth:!0,margin:"dense",variant:"outlined",children:[n.jsx(l(),{children:x.a.t("queueSelect.inputLabel")}),n.jsx(g(),{multiple:!0,labelWidth:60,value:e,onChange:e=>{t(e.target.value)},MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},renderValue:e=>n.jsx("div",{className:a.chips,children:e?.length>0&&e.map(e=>{let t=r.find(t=>t.id===e);return t?n.jsx(f(),{style:{backgroundColor:t.color},variant:"outlined",label:t.name,className:a.chip},e):null})}),children:r.map(e=>n.jsx(d(),{value:e.id,children:e.name},e.id))})]})})};r()}catch(e){r(e)}})},29385:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(20997);a(16689);var n=a(42740),o=a.n(n),s=a(11236),i=a.n(s),l=a(44164),c=a.n(l);let d=(0,a(41120).Z)(e=>({customTableCell:{display:"flex",alignItems:"center",justifyContent:"center"}})),u=({avatar:e,columns:t})=>{let a=d();return r.jsx(r.Fragment,{children:(0,r.jsxs)(i(),{children:[e&&(0,r.jsxs)(r.Fragment,{children:[r.jsx(o(),{style:{paddingRight:0},children:r.jsx(c(),{animation:"wave",variant:"circle",width:40,height:40})}),r.jsx(o(),{children:r.jsx(c(),{animation:"wave",height:30,width:80})})]}),Array.from({length:t},(e,t)=>r.jsx(o(),{align:"center",children:r.jsx("div",{className:a.customTableCell,children:r.jsx(c(),{align:"center",animation:"wave",height:30,width:80})})},t))]})})}},2926:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(20997);a(16689);var n=a(54104),o=a.n(n);function s(e){return r.jsx(o(),{variant:"h5",color:"primary",gutterBottom:!0,children:e.children})}},58582:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{V:()=>i}),a(20997);var n=a(16689),o=a(85425),s=e([o]);o=(s.then?(await s)():s)[0];let i=(0,n.createContext)();r()}catch(e){r(e)}})},151:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>c});var n=a(3590),o=a(92921),s=a(97026),i=a.n(s),l=e([n]);n=(l.then?(await l)():l)[0];let c=e=>{let t=e.response?.data?.error;if(t){if(o.a.exists(`backendErrors.${t}`)){n.toast.error(o.a.t(`backendErrors.${t}`),{toastId:t,autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"});return}n.toast.error(t,{toastId:t,autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"});return}if(i()(e)){n.toast.error(e);return}n.toast.error("An error occurred!")};r()}catch(e){r(e)}})},85425:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>v});var n=a(16689),o=a(14661),s=a(98210),i=a.n(s),l=a(35599),c=a.n(l),d=a(3590),u=a(92921),h=a(38561),m=a(151),g=a(7405),p=a(32245),f=a.n(p),y=e([d,m,g]);[d,m,g]=y.then?(await y)():y;let v=()=>{let e=(0,o.useNavigate)(),[t,a]=(0,n.useState)(!1),[r,s]=(0,n.useState)(!0),[l,p]=(0,n.useState)({});h.Z.interceptors.request.use(e=>{let t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${JSON.parse(t)}`,a(!0)),e},e=>{Promise.reject(e)}),h.Z.interceptors.response.use(e=>e,async e=>{let t=e.config;if(e?.response?.status===403&&!t._retry){t._retry=!0;let{data:e}=await h.Z.post("/auth/refresh_token");return e&&(localStorage.setItem("token",JSON.stringify(e.token)),h.Z.defaults.headers.Authorization=`Bearer ${e.token}`),(0,h.Z)(t)}return e?.response?.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("companyId"),h.Z.defaults.headers.Authorization=void 0,a(!1)),Promise.reject(e)}),(0,n.useEffect)(()=>{let e=localStorage.getItem("token");(async()=>{if(e)try{let{data:e}=await h.Z.post("/auth/refresh_token");h.Z.defaults.headers.Authorization=`Bearer ${e.token}`,a(!0),p(e.user)}catch(e){(0,m.Z)(e)}s(!1)})()},[]),(0,n.useEffect)(()=>{let e=localStorage.getItem("companyId");if(e){let t=(0,g.C)({companyId:e});return t.on(`company-${e}-user`,e=>{"update"===e.action&&e.user.id===l.id&&p(e.user)}),()=>{t.disconnect()}}},[l]);let y=async t=>{s(!0);try{let{data:l}=await h.Z.post("/auth/login",t),{user:{companyId:g,id:y,company:v}}=l;if(i()(v,"settings")&&c()(v.settings)){let e=v.settings.find(e=>"campaignsEnabled"===e.key);e&&"true"===e.value&&localStorage.setItem("cshow",null)}f().locale("pt-br");let x=l.user.company.dueDate;f()(f()()).format("DD/MM/yyyy");let j=f()(x).format("DD/MM/yyyy");var r=f()(x).diff(f()(f()()).format()),n=f()(f()().format()).isBefore(x),o=f().duration(r).asDays();!0===n?(localStorage.setItem("token",JSON.stringify(l.token)),localStorage.setItem("companyId",g),localStorage.setItem("userId",y),localStorage.setItem("companyDueDate",j),h.Z.defaults.headers.Authorization=`Bearer ${l.token}`,p(l.user),a(!0),d.toast.success(u.a.t("auth.toasts.success")),5>Math.round(o)&&d.toast.warn(`Sua assinatura vence em ${Math.round(o)} ${1===Math.round(o)?"dia":"dias"} `),e.push("/tickets")):(0,m.Z)(`Opss! Sua assinatura venceu ${j}.
Entre em contato com o Suporte para mais informa\xe7\xf5es! `),s(!1)}catch(e){(0,m.Z)(e),s(!1)}},v=async()=>{s(!0);try{await h.Z.delete("/auth/logout"),a(!1),p({}),localStorage.removeItem("token"),localStorage.removeItem("companyId"),localStorage.removeItem("userId"),localStorage.removeItem("cshow"),h.Z.defaults.headers.Authorization=void 0,s(!1),e.push("/login")}catch(e){(0,m.Z)(e),s(!1)}},x=async()=>{try{let{data:e}=await h.Z.get("/auth/me");return e}catch(e){(0,m.Z)(e)}};return{isAuth:t,user:l,loading:r,handleLogin:y,handleLogout:v,getCurrentUserInfo:x}};r()}catch(e){r(e)}})},7405:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{C:()=>l});var n=a(14612),o=a(75795),s=a.n(o),i=e([n]);function l(e){return localStorage.getItem("userId")&&localStorage.getItem("userId"),(0,n.default)(process.env.REACT_APP_BACKEND_URL,{transports:["websocket","polling","flashsocket"],pingTimeout:18e3,pingInterval:18e3,query:s()(e)?{...e}:{userId:e.userId}})}n=(i.then?(await i)():i)[0],r()}catch(e){r(e)}})}};