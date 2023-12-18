"use strict";exports.id=2649,exports.ids=[2649],exports.modules={65683:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>D});var n=a(20997),i=a(16689),s=a.n(i),l=a(22318),o=a(25357),d=a(91594),c=a(2876),u=a(282),m=a(95477),p=a(2296),x=a(18257),g=a(23153),h=a(89065),y=a(61047),f=a(38561),j=a(151),v=a(3590),b=a(58582),Z=a(8215),S=a(25394),w=a(6195),E=a(42230),M=a(71647),C=e([x,h,y,j,v,b,M]);function D(e){let t=["Dados","Personalizar","Revisar"],{formId:a,formField:r}=S.default,M=(0,E.Z)(),[C,D]=(0,i.useState)(1),[T,q]=(0,i.useState)(null),[F,P]=(0,i.useState)(e.Invoice.id),N=Z.Z[C],I=C===t.length-1,{user:$}=(0,i.useContext)(b.V);async function k(e,t){try{let a=JSON.parse(e.plan),r={firstName:e.firstName,lastName:e.lastName,address2:e.address2,city:e.city,state:e.state,zipcode:e.zipcode,country:e.country,useAddressForPaymentDetails:e.useAddressForPaymentDetails,nameOnCard:e.nameOnCard,cardNumber:e.cardNumber,cvv:e.cvv,plan:e.plan,price:a.price,users:a.users,connections:a.connections,invoiceId:F},{data:n}=await f.Z.post("/subscription",r);q(n),t.setSubmitting(!1),D(C+1),v.toast.success("Assinatura realizada com sucesso!, aguardando a realiza\xe7\xe3o do pagamento")}catch(e){(0,j.Z)(e)}}function V(){D(C-1)}return(0,n.jsxs)(s().Fragment,{children:[n.jsx(l.Z,{component:"h1",variant:"h4",align:"center",children:"Falta pouco!"}),n.jsx(o.Z,{activeStep:C,className:M.stepper,children:t.map(e=>n.jsx(d.Z,{children:n.jsx(c.Z,{children:e})},e))}),n.jsx(s().Fragment,{children:C===t.length?n.jsx(y.Z,{pix:T}):n.jsx(p.Formik,{initialValues:{...$,...w.Z},validationSchema:N,onSubmit:function(e,t){I?k(e,t):(D(C+1),t.setTouched({}),t.setSubmitting(!1))},children:({isSubmitting:e,setFieldValue:t,values:i})=>(0,n.jsxs)(p.Form,{id:a,children:[function(e,t,a,i){switch(e){case 0:return n.jsx(x.Z,{formField:r,values:i,setFieldValue:t});case 1:return n.jsx(g.Z,{formField:r,setFieldValue:t,setActiveStep:a,activeStep:e,invoiceId:F,values:i});case 2:return n.jsx(h.Z,{});default:return n.jsx("div",{children:"Not Found"})}}(C,t,D,i),(0,n.jsxs)("div",{className:M.buttons,children:[1!==C&&n.jsx(u.Z,{onClick:V,className:M.button,children:"VOLTAR"}),(0,n.jsxs)("div",{className:M.wrapper,children:[1!==C&&n.jsx(u.Z,{disabled:e,type:"submit",variant:"contained",color:"primary",className:M.button,children:I?"PAGAR":"PR\xd3XIMO"}),e&&n.jsx(m.Z,{size:24,className:M.buttonProgress})]})]})]})})})]})}[x,h,y,j,v,b,M]=C.then?(await C)():C,r()}catch(e){r(e)}})},31414:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>y});var n=a(20997),i=a(16689),s=a.n(i),l=a(14661),o=a(73267),d=a.n(o),c=a(70943),u=a(42807),m=a(89583),p=a(7405),x=a(74846),g=a(3590),h=e([p,g]);[p,g]=h.then?(await h)():h;let y=function(e){let{pix:t}=e,[a]=(0,i.useState)(t.qrcode.qrcode),[r,o]=(0,i.useState)(!1),h=(0,l.useNavigate)(),{dateToClient:y}=(0,x.Y)();return(0,i.useEffect)(()=>{let e=localStorage.getItem("companyId");(0,p.C)({companyId:e}).on(`company-${e}-payment`,e=>{"CONCLUIDA"===e.action&&(g.toast.success(`Sua licen\xe7a foi renovada at\xe9 ${y(e.company.dueDate)}!`),setTimeout(()=>{h.push("/")},4e3))})},[h]),(0,n.jsxs)(s().Fragment,{children:[(0,n.jsxs)(c.xn,{children:[n.jsx("span",{children:"TOTAL"}),(0,n.jsxs)("strong",{children:["R$",t.valor.original.toLocaleString("pt-br",{minimumFractionDigits:2})]})]}),(0,n.jsxs)(c.Qj,{children:[n.jsx(d(),{value:a}),n.jsx(u.CopyToClipboard,{text:a,onCopy:()=>{setTimeout(()=>{o(!1)},1e3),o(!0)},children:n.jsx("button",{className:"copy-button",type:"button",children:r?(0,n.jsxs)(n.Fragment,{children:[n.jsx("span",{children:"Copiado"}),n.jsx(m.FJM,{size:18})]}):(0,n.jsxs)(n.Fragment,{children:[n.jsx("span",{children:"Copiar c\xf3digo QR"}),n.jsx(m.esY,{size:18})]})})}),n.jsx("span",{children:"Para finalizar, basta realizar o pagamento escaneando ou colando o c\xf3digo Pix acima :)"})]})]})};r()}catch(e){r(e)}})},61047:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>s});var n=a(31414),i=e([n]);let s=(n=(i.then?(await i)():i)[0]).Z;r()}catch(e){r(e)}})},70943:(e,t,a)=>{a.d(t,{Qj:()=>s,xn:()=>i});var r=a(57518),n=a.n(r);n().div`
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      .checkout-buttons {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;

        button {
          width: 100%;
          margin-top: 16px;
          margin-left: 0;
        }
      }
    }

    button {
      margin-left: 16px;
    }
  }
`;let i=n().div`
  display: flex;
  align-items: baseline;

  span {
    color: #333;
    font-weight: bold;
  }

  strong {
    color: #333;
    font-size: 28px;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    justify-content: space-between;
  }
`,s=n().div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    text-align: center;
  }

  > svg {
    margin-top: 16px;
  }

  > span {
    margin-top: 24px;
    text-align: center;
  }

  > p,
  strong {
    margin-top: 8px;
    font-size: 9px;
    color: #999;
  }

  .copy-button {
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    user-select: none;
    min-height: 56px;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: #f9f9f9;
    color: #000;
    -webkit-appearance: none !important;
    outline: none;
    margin-top: 16px;
    width: 256px;
    font-weight: 600;
    text-transform: uppercase;
    border: none;

    > span {
      margin-right: 8px;
    }
  }
`;n().div`
  width: 100%;
  margin: 0 auto 0;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 50px 95px;
  background: #fff;
  @media (max-width: 768px) {
    padding: 16px 24px;
`},25394:(e,t,a)=>{a.d(t,{default:()=>r});let r={formId:"checkoutForm",formField:{firstName:{name:"firstName",label:"Nome completo*",requiredErrorMsg:"O nome completo \xe9 obrigat\xf3rio"},lastName:{name:"lastName",label:"Last name*",requiredErrorMsg:"Last name is required"},address1:{name:"address2",label:"Endere\xe7o*",requiredErrorMsg:"O Endere\xe7o \xe9 obrigat\xf3rio"},city:{name:"city",label:"Cidade*",requiredErrorMsg:"Cidade \xe9 obrigat\xf3ria"},state:{name:"state",label:"Estado*",requiredErrorMsg:"Cidade \xe9 obrigat\xf3ria"},zipcode:{name:"zipcode",label:"CEP*",requiredErrorMsg:"CEP \xe9 obrigat\xf3rio",invalidErrorMsg:"Formato de CEP inv\xe1lido"},country:{name:"country",label:"Pa\xeds*",requiredErrorMsg:"Pa\xeds \xe9 obrigat\xf3rio"},useAddressForPaymentDetails:{name:"useAddressForPaymentDetails",label:"Use this address for payment details"},invoiceId:{name:"invoiceId",label:"Use this invoiceId"},nameOnCard:{name:"nameOnCard",label:"Name on card*",requiredErrorMsg:"Name on card is required"},cardNumber:{name:"cardNumber",label:"Card number*",requiredErrorMsg:"Card number is required",invalidErrorMsg:"Card number is not valid (e.g. 4111111111111)"},expiryDate:{name:"expiryDate",label:"Expiry date*",requiredErrorMsg:"Expiry date is required",invalidErrorMsg:"Expiry date is not valid"},cvv:{name:"cvv",label:"CVV*",requiredErrorMsg:"CVV is required",invalidErrorMsg:"CVV is invalid (e.g. 357)"}}}},6195:(e,t,a)=>{a.d(t,{Z:()=>g});let{formField:{firstName:r,lastName:n,address1:i,city:s,state:l,zipcode:o,country:d,useAddressForPaymentDetails:c,nameOnCard:u,cardNumber:m,invoiceId:p,cvv:x}}=a(25394).default,g={[r.name]:"",[n.name]:"",[i.name]:"",[s.name]:"",[l.name]:"",[o.name]:"",[d.name]:"",[c.name]:!1,[u.name]:"",[m.name]:"",[p.name]:"",[x.name]:""}},8215:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(75609);let{formField:{firstName:n,address1:i,city:s,zipcode:l,country:o}}=a(25394).default,d=[r.object().shape({[n.name]:r.string().required(`${n.requiredErrorMsg}`),[i.name]:r.string().required(`${i.requiredErrorMsg}`),[s.name]:r.string().nullable().required(`${s.requiredErrorMsg}`),[l.name]:r.string().required(`${l.requiredErrorMsg}`),[o.name]:r.string().nullable().required(`${o.requiredErrorMsg}`)})]},18257:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>m});var n=a(20997),i=a(16689),s=a.n(i),l=a(22318),o=a(41749),d=a(25817),c=a(58582),u=e([c]);c=(u.then?(await u)():u)[0];let p=[{value:"BR",label:"Brasil"},{value:"usa",label:"United States"}];function m(e){let{user:t}=(0,i.useContext)(c.V),[a,r]=(0,i.useState)(t.company.billingName),[u,m]=(0,i.useState)(t.company.addressZipCode),[x,g]=(0,i.useState)(t.company.addressStreet),[h,y]=(0,i.useState)(t.company.addressState),[f,j]=(0,i.useState)(t.company.addressCity),[v,b]=(0,i.useState)(t.company.addressDistrict),{formField:{firstName:Z,address1:S,city:w,state:E,zipcode:M,country:C},setFieldValue:D}=e;return(0,i.useEffect)(()=>{D("firstName",a),D("zipcode",u),D("address2",x),D("state",h),D("city",f),D("country",v)},[]),(0,n.jsxs)(s().Fragment,{children:[n.jsx(l.Z,{variant:"h6",gutterBottom:!0,children:"Vamos precisar de algumas informa\xe7\xf5es"}),(0,n.jsxs)(o.Z,{container:!0,spacing:3,children:[n.jsx(o.Z,{item:!0,xs:6,sm:6,children:n.jsx(d.UP,{name:Z.name,label:Z.label,fullWidth:!0,value:a,onChange:e=>{r(e.target.value),D("firstName",e.target.value)}})}),n.jsx(o.Z,{item:!0,xs:6,sm:6,children:n.jsx(d.mg,{name:C.name,label:C.label,data:p,fullWidth:!0,value:v,onChange:e=>{b(e.target.value),D("country",e.target.value)}})}),n.jsx(o.Z,{item:!0,xs:4,children:n.jsx(d.UP,{name:M.name,label:M.label,fullWidth:!0,value:u,onChange:e=>{m(e.target.value),D("zipcode",e.target.value)}})}),n.jsx(o.Z,{item:!0,xs:8,children:n.jsx(d.UP,{name:S.name,label:S.label,fullWidth:!0,value:x,onChange:e=>{g(e.target.value),D("address2",e.target.value)}})}),n.jsx(o.Z,{item:!0,xs:4,children:n.jsx(d.UP,{name:E.name,label:E.label,fullWidth:!0,value:h,onChange:e=>{y(e.target.value),D("state",e.target.value)}})}),n.jsx(o.Z,{item:!0,xs:8,children:n.jsx(d.UP,{name:w.name,label:w.label,fullWidth:!0,value:f,onChange:e=>{j(e.target.value),D("city",e.target.value)}})})]})]})}r()}catch(e){r(e)}})},23153:(e,t,a)=>{a.d(t,{Z:()=>M});var r=a(20997),n=a(16689),i=a.n(n),s=a(12610),l=a.n(s),o=a(67943),d=a.n(o),c=a(36329),u=a.n(c),m=a(898),p=a.n(m),x=a(2972),g=a.n(x),h=a(13266),y=a.n(h),f=a(19952),j=a.n(f),v=a(54104),b=a.n(v),Z=a(48308);a(83974),a(47911),a(3935);var S=a(48888),w=a(23703);let E=(0,Z.makeStyles)(e=>({"@global":{ul:{margin:0,padding:0,listStyle:"none"}},margin:{margin:e.spacing(1)},cardHeader:{backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[700]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},footer:{borderTop:`1px solid ${e.palette.divider}`,marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3),[e.breakpoints.up("sm")]:{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)}},customCard:{display:"flex",marginTop:"16px",alignItems:"center",flexDirection:"column"},custom:{display:"flex",alignItems:"center",justifyContent:"space-between"}}));function M(e){let{setFieldValue:t,setActiveStep:a,activeStep:s}=e,{list:o,finder:c}=(0,S.Z)(),{find:m}=(0,w.Z)(),x=E(),[h,f]=i().useState(3),[v,Z]=(0,n.useState)(0),[M,C]=i().useState(3),[D,T]=i().useState([]),[q,F]=i().useState(49),[P,N]=i().useState(!1),I=localStorage.getItem("companyId");(0,n.useEffect)(()=>{(async function(){await $()})()},[]);let $=async()=>{N(!0);try{let e=await m(I);Z(e.planId),await k(e.planId)}catch(e){console.log(e)}N(!1)},k=async e=>{N(!0);try{let t=await c(e),a=[];a.push({title:t.name,planId:t.id,price:t.value,description:[`${t.users} Usu\xe1rios`,`${t.connections} Conex\xe3o`,`${t.queues} Filas`],users:t.users,connections:t.connections,queues:t.queues,buttonText:"SELECIONAR",buttonVariant:"outlined"}),T(a)}catch(e){console.log(e)}N(!1)};return r.jsx(i().Fragment,{children:r.jsx(y(),{container:!0,spacing:3,children:D.map(e=>r.jsx(y(),{item:!0,xs:12,sm:(e.title,12),md:12,children:(0,r.jsxs)(d(),{children:[r.jsx(g(),{title:e.title,subheader:e.subheader,titleTypographyProps:{align:"center"},subheaderTypographyProps:{align:"center"},action:"Pro"===e.title?r.jsx(j(),{}):null,className:x.cardHeader}),(0,r.jsxs)(p(),{children:[(0,r.jsxs)("div",{className:x.cardPricing,children:[r.jsx(b(),{component:"h2",variant:"h3",color:"textPrimary",children:(0,r.jsxs)(i().Fragment,{children:["R$",e.price.toLocaleString("pt-br",{minimumFractionDigits:2})]})}),r.jsx(b(),{variant:"h6",color:"textSecondary",children:"/m\xeas"})]}),r.jsx("ul",{children:e.description.map(e=>r.jsx(b(),{component:"li",variant:"subtitle1",align:"center",children:e},e))})]}),r.jsx(u(),{children:r.jsx(l(),{fullWidth:!0,variant:e.buttonVariant,color:"primary",onClick:()=>{e.custom?t("plan",JSON.stringify({users:h,connections:M,price:q})):t("plan",JSON.stringify(e)),a(s+1)},children:e.buttonText})})]})},e.title))})})}},5438:(e,t,a)=>{a.a(e,async(e,t)=>{try{a(20997),a(16689),a(30556);var r=a(58582),n=e([r]);r=(n.then?(await n)():n)[0],t()}catch(e){t(e)}})},23422:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>p});var n=a(20997),i=a(16689),s=a.n(i),l=a(2296),o=a(22318),d=a(41749),c=a(77945),u=a(5438),m=e([u]);function p(){let{values:e}=(0,l.useFormikContext)();return(0,n.jsxs)(s().Fragment,{children:[n.jsx(o.Z,{variant:"h6",gutterBottom:!0,children:"Resumo da assinatura"}),n.jsx(d.Z,{container:!0,spacing:2,children:n.jsx(c.Z,{formValues:e})})]})}u=(m.then?(await m)():m)[0],r()}catch(e){r(e)}})},77945:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(20997);a(16689);var n=a(41749),i=a(22318),s=a(30556);let l=function(e){let{formValues:t}=e,a=(0,s.Z)(),{plan:l}=t,{users:o,connections:d,price:c}=JSON.parse(l);return(0,r.jsxs)(n.Z,{item:!0,xs:12,sm:12,children:[r.jsx(i.Z,{variant:"h6",gutterBottom:!0,className:a.title,children:"Detalhes do plano"}),(0,r.jsxs)(i.Z,{gutterBottom:!0,children:["Usu\xe1rios: ",o]}),(0,r.jsxs)(i.Z,{gutterBottom:!0,children:["Whatsapps: ",d]}),r.jsx(i.Z,{gutterBottom:!0,children:"Cobran\xe7a: Mensal"}),(0,r.jsxs)(i.Z,{gutterBottom:!0,children:["Total: R$",c.toLocaleString("pt-br",{minimumFractionDigits:2})]})]})}},89065:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>s});var n=a(23422),i=e([n]);let s=(n=(i.then?(await i)():i)[0]).Z;r()}catch(e){r(e)}})},30556:(e,t,a)=>{a.d(t,{Z:()=>r});let r=(0,a(48308).makeStyles)(e=>({listItem:{padding:e.spacing(1,0)},total:{fontWeight:"700"},title:{marginTop:e.spacing(2)}}))},66641:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>s});var n=a(65683),i=e([n]);let s=(n=(i.then?(await i)():i)[0]).Z;r()}catch(e){r(e)}})},42230:(e,t,a)=>{a.d(t,{Z:()=>r});let r=(0,a(48308).makeStyles)(e=>({stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},wrapper:{margin:e.spacing(1),position:"relative"},buttonProgress:{position:"absolute",top:"50%",left:"50%"}}))},25817:(e,t,a)=>{a.d(t,{UP:()=>o,mg:()=>y});var r=a(20997);a(16689);var n=a(59283),i=a.n(n),s=a(2296),l=a(39803);function o(e){let{errorText:t,...a}=e,[n,o]=(0,s.useField)(e);return r.jsx(l.Z,{type:"text",error:o.touched&&o.error&&!0,helperText:function(){let[e,t]=i()(o,"touched","error");if(e&&t)return t}(),...n,...a})}var d=a(580),c=a.n(d),u=a(30585),m=a(64436),p=a(85161),x=a(94924),g=a(85639);function h(e){let{label:t,data:a,...n}=e,[l,o]=(0,s.useField)(e),{value:d}=l,[c,h]=i()(o,"touched","error"),y=c&&h&&!0;return(0,r.jsxs)(m.Z,{...n,error:y,children:[r.jsx(p.Z,{children:t}),r.jsx(x.Z,{...l,value:d||"",children:a.map((e,t)=>r.jsx(g.Z,{value:e.value,children:e.label},t))}),function(){if(y)return r.jsx(u.Z,{children:h})}()]})}h.defaultProps={data:[]},h.propTypes={data:c().array.isRequired};let y=h;a(13266),a(88314),a(47031)},16103:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>g});var n=a(20997),i=a(16689),s=a(48308),l=a(55223),o=a(81961),d=a.n(o),c=a(46856),u=a.n(c),m=a(66641),p=e([m]);m=(p.then?(await p)():p)[0];let x=(0,s.makeStyles)(e=>({root:{display:"flex",flexWrap:"wrap"},textField:{marginRight:e.spacing(1),flex:1},extraAttr:{display:"flex",justifyContent:"center",alignItems:"center"},btnWrapper:{position:"relative"},buttonProgress:{color:l.green[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}})),g=({open:e,onClose:t,Invoice:a,contactId:r,initialValues:s,onSave:l})=>{let o=x(),c=(0,i.useRef)(!0);return(0,i.useEffect)(()=>()=>{c.current=!1},[]),n.jsx("div",{className:o.root,children:n.jsx(d(),{open:e,onClose:()=>{t()},maxWidth:"md",scroll:"paper",children:n.jsx(u(),{dividers:!0,children:n.jsx(m.Z,{Invoice:a})})})})};r()}catch(e){r(e)}})},29535:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>W});var n=a(20997),i=a(16689),s=a(75609),l=a(2296),o=a(3590),d=a(48308),c=a(55223),u=a(12610),m=a.n(u),p=a(26481),x=a.n(p),g=a(81961),h=a.n(g),y=a(80929),f=a.n(y),j=a(46856),v=a.n(j),b=a(82400),Z=a.n(b),S=a(9069),w=a.n(S),E=a(84614),M=a.n(E),C=a(68190),D=a.n(C),T=a(48250),q=a.n(T),F=a(75811),P=a.n(F),N=a(92921),I=a(38561),$=a(151),k=a(71464),V=a(58582),L=a(20929),R=e([o,$,k,V]);[o,$,k,V]=R.then?(await R)():R;let A=(0,d.makeStyles)(e=>({root:{display:"flex",flexWrap:"wrap"},multFieldLine:{display:"flex","& > *:not(:last-child)":{marginRight:e.spacing(1)}},btnWrapper:{position:"relative"},buttonProgress:{color:c.green[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},formControl:{margin:e.spacing(1),minWidth:120}})),Y=s.object().shape({name:s.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),password:s.string().min(5,"Too Short!").max(50,"Too Long!"),email:s.string().email("Invalid email").required("Required")}),W=({open:e,onClose:t,userId:a})=>{let r=A(),s={name:"",email:"",password:"",profile:"user"},{user:d}=(0,i.useContext)(V.V),[c,u]=(0,i.useState)(s),[p,g]=(0,i.useState)([]);(0,i.useEffect)(()=>{(async()=>{if(a)try{let{data:e}=await I.Z.get(`/users/${a}`);u(t=>({...t,...e}));let t=e.queues?.map(e=>e.id);g(t)}catch(e){(0,$.Z)(e)}})()},[a,e]);let y=()=>{t(),u(s)},j=async e=>{let t={...e,queueIds:p};try{a?await I.Z.put(`/users/${a}`,t):await I.Z.post("/users",t),o.toast.success(N.a.t("userModal.success"))}catch(e){(0,$.Z)(e)}y()};return n.jsx("div",{className:r.root,children:(0,n.jsxs)(h(),{open:e,onClose:y,maxWidth:"xs",fullWidth:!0,scroll:"paper",children:[n.jsx(Z(),{id:"form-dialog-title",children:a?`${N.a.t("userModal.title.edit")}`:`${N.a.t("userModal.title.add")}`}),n.jsx(l.Formik,{initialValues:c,enableReinitialize:!0,validationSchema:Y,onSubmit:(e,t)=>{setTimeout(()=>{j(e),t.setSubmitting(!1)},400)},children:({touched:e,errors:t,isSubmitting:i})=>(0,n.jsxs)(l.Form,{children:[(0,n.jsxs)(v(),{dividers:!0,children:[(0,n.jsxs)("div",{className:r.multFieldLine,children:[n.jsx(l.Field,{as:x(),label:N.a.t("userModal.form.name"),autoFocus:!0,name:"name",error:e.name&&!!t.name,helperText:e.name&&t.name,variant:"outlined",margin:"dense",fullWidth:!0}),n.jsx(l.Field,{as:x(),label:N.a.t("userModal.form.password"),type:"password",name:"password",error:e.password&&!!t.password,helperText:e.password&&t.password,variant:"outlined",margin:"dense",fullWidth:!0})]}),(0,n.jsxs)("div",{className:r.multFieldLine,children:[n.jsx(l.Field,{as:x(),label:N.a.t("userModal.form.email"),name:"email",error:e.email&&!!t.email,helperText:e.email&&t.email,variant:"outlined",margin:"dense",fullWidth:!0}),n.jsx(P(),{variant:"outlined",className:r.formControl,margin:"dense",children:n.jsx(L.m,{role:d.profile,perform:"user-modal:editProfile",yes:()=>(0,n.jsxs)(n.Fragment,{children:[n.jsx(D(),{id:"profile-selection-input-label",children:N.a.t("userModal.form.profile")}),(0,n.jsxs)(l.Field,{as:M(),label:N.a.t("userModal.form.profile"),name:"profile",labelId:"profile-selection-label",id:"profile-selection",required:!0,children:[n.jsx(q(),{value:"admin",children:"Admin"}),n.jsx(q(),{value:"user",children:"User"})]})]})})})]}),n.jsx(L.m,{role:d.profile,perform:"user-modal:editQueues",yes:()=>n.jsx(k.Z,{selectedQueueIds:p,onChange:e=>g(e)})})]}),(0,n.jsxs)(f(),{children:[n.jsx(m(),{onClick:y,color:"secondary",disabled:i,variant:"outlined",children:N.a.t("userModal.buttons.cancel")}),(0,n.jsxs)(m(),{type:"submit",color:"primary",disabled:i,variant:"contained",className:r.btnWrapper,children:[a?`${N.a.t("userModal.buttons.okEdit")}`:`${N.a.t("userModal.buttons.okAdd")}`,i&&n.jsx(w(),{size:24,className:r.buttonProgress})]})]})]})})]})})};r()}catch(e){r(e)}})},23703:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(38561);let n=()=>({save:async e=>{let{data:t}=await r.Z.request({url:"/companies",method:"POST",data:e});return t},update:async e=>{let{data:t}=await r.Z.request({url:`/companies/${e.id}`,method:"PUT",data:e});return t},remove:async e=>{let{data:t}=await r.Z.request({url:`/companies/${e}`,method:"DELETE"});return t},list:async e=>{let{data:t}=await r.Z.request({url:"/companies/list",method:"GET"});return t},find:async e=>{let{data:t}=await r.Z.request({url:`/companies/${e}`,method:"GET"});return t},finding:async e=>{let{data:t}=await r.Z.request({url:`/companies/${e}`,method:"GET"});return t},findAll:async e=>{let{data:t}=await r.Z.request({url:"/companies",method:"GET"});return t},updateSchedules:async e=>{let{data:t}=await r.Z.request({url:`/companies/${e.id}/schedules`,method:"PUT",data:e});return t}})},74846:(e,t,a)=>{a.d(t,{Y:()=>i});var r=a(32245),n=a.n(r);function i(){return{dateToClient:function(e){return n()(e).isValid()?n()(e).format("DD/MM/YYYY"):e},datetimeToClient:function(e){return n()(e).isValid()?n()(e).format("DD/MM/YYYY HH:mm"):e},dateToDatabase:function(e){return n()(e,"DD/MM/YYYY").isValid()?n()(e).format("YYYY-MM-DD HH:mm:ss"):e}}}},48888:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(38561);let n=()=>({getPlanList:async e=>{let{data:t}=await r.i.request({url:"/plans/list",method:"GET",params:e});return t},list:async e=>{let{data:t}=await r.Z.request({url:"/plans/all",method:"GET",params:e});return t},save:async e=>{let{data:t}=await r.Z.request({url:"/plans",method:"POST",data:e});return t},update:async e=>{let{data:t}=await r.Z.request({url:`/plans/${e.id}`,method:"PUT",data:e});return t},finder:async e=>{let{data:t}=await r.Z.request({url:`/plans/${e}`,method:"GET"});return t},remove:async e=>{let{data:t}=await r.Z.request({url:`/plans/${e}`,method:"DELETE"});return t}})},71647:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>V});var n=a(20997),i=a(16689),s=a.n(i),l=a(3590),o=a(48308),d=a(40640),c=a.n(d),u=a(12610),m=a.n(u),p=a(4880),x=a.n(p),g=a(31555),h=a.n(g),y=a(42740),f=a.n(y),j=a(56956),v=a.n(j),b=a(11236),Z=a.n(b);a(83974),a(94202),a(26481),a(32944),a(4530),a(93365);var S=a(96153),w=a(66276);a(37432);var E=a(2926),M=a(16103),C=a(38561);a(92921);var D=a(29385),T=a(29535);a(6133);var q=a(151),F=a(7405),P=a(32245),N=a.n(P),I=e([l,M,T,q,F]);[l,M,T,q,F]=I.then?(await I)():I;let $=(e,t)=>{if("LOAD_INVOICES"===t.type){let a=t.payload,r=[];return a.forEach(t=>{let a=e.findIndex(e=>e.id===t.id);-1!==a?e[a]=t:r.push(t)}),[...e,...r]}if("UPDATE_USERS"===t.type){let a=t.payload,r=e.findIndex(e=>e.id===a.id);return -1!==r?(e[r]=a,[...e]):[a,...e]}if("DELETE_USER"===t.type){let a=t.payload,r=e.findIndex(e=>e.id===a);return -1!==r&&e.splice(r,1),[...e]}if("RESET"===t.type)return[]},k=(0,o.makeStyles)(e=>({mainPaper:{flex:1,padding:e.spacing(1),overflowY:"scroll",...e.scrollbarStyles}})),V=()=>{let e=k(),[t,a]=(0,i.useState)(!1),[r,l]=(0,i.useState)(1),[o,d]=(0,i.useState)(!1),[u,p]=(0,i.useState)(""),[g,y]=(0,i.useReducer)($,[]),[j,b]=s().useState([]),[T,F]=(0,i.useState)(null),[P,I]=(0,i.useState)(!1),V=e=>{b(e),F(null),I(!0)};(0,i.useEffect)(()=>{y({type:"RESET"}),l(1)},[u]),(0,i.useEffect)(()=>{a(!0);let e=setTimeout(()=>{(async()=>{try{let{data:e}=await C.Z.get("/invoices/all",{params:{searchParam:u,pageNumber:r}});y({type:"LOAD_INVOICES",payload:e}),d(e.hasMore),a(!1)}catch(e){(0,q.Z)(e)}})()},500);return()=>clearTimeout(e)},[u,r]);let L=()=>{l(e=>e+1)},R=e=>{let t=N()(N()()).format("DD/MM/yyyy"),a=N()(e.dueDate).format("DD/MM/yyyy");var r=N()(a,"DD/MM/yyyy").diff(N()(t,"DD/MM/yyyy"));if(0>N().duration(r).asDays()&&"paid"!==e.status)return{backgroundColor:"#ffbcbc9c"}},A=e=>{let t=N()(N()()).format("DD/MM/yyyy"),a=N()(e.dueDate).format("DD/MM/yyyy");var r=N()(a,"DD/MM/yyyy").diff(N()(t,"DD/MM/yyyy")),n=N().duration(r).asDays();let i=e.status;return"paid"===i?"Pago":n<0?"Vencido":"Em Aberto"};return(0,n.jsxs)(S.Z,{children:[n.jsx(M.Z,{open:P,onClose:()=>{F(null),I(!1)},"aria-labelledby":"form-dialog-title",Invoice:j,contactId:T}),n.jsx(w.Z,{children:n.jsx(E.Z,{children:"Faturas"})}),n.jsx(c(),{className:e.mainPaper,variant:"outlined",onScroll:e=>{if(!o||t)return;let{scrollTop:a,scrollHeight:r,clientHeight:n}=e.currentTarget;r-(a+100)<n&&L()},children:(0,n.jsxs)(x(),{size:"small",children:[n.jsx(v(),{children:(0,n.jsxs)(Z(),{children:[n.jsx(f(),{align:"center",children:"Id"}),n.jsx(f(),{align:"center",children:"Detalhes"}),n.jsx(f(),{align:"center",children:"Valor"}),n.jsx(f(),{align:"center",children:"Data Venc."}),n.jsx(f(),{align:"center",children:"Status"}),n.jsx(f(),{align:"center",children:"A\xe7\xe3o"})]})}),n.jsx(h(),{children:(0,n.jsxs)(n.Fragment,{children:[g.map(e=>(0,n.jsxs)(Z(),{style:R(e),children:[n.jsx(f(),{align:"center",children:e.id}),n.jsx(f(),{align:"center",children:e.detail}),n.jsx(f(),{style:{fontWeight:"bold"},align:"center",children:e.value.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}),n.jsx(f(),{align:"center",children:N()(e.dueDate).format("DD/MM/YYYY")}),n.jsx(f(),{style:{fontWeight:"bold"},align:"center",children:A(e)}),n.jsx(f(),{align:"center",children:"Pago"!==A(e)?n.jsx(m(),{size:"small",variant:"outlined",color:"secondary",onClick:()=>V(e),children:"PAGAR"}):n.jsx(m(),{size:"small",variant:"outlined",children:"PAGO"})})]},e.id)),t&&n.jsx(D.Z,{columns:4})]})})]})})]})};r()}catch(e){r(e)}})}};