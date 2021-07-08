(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(11),a=n.n(s),i=(n(117),n(12)),o=n(247),l=n(248),j=n(249),u=n(250),d=n(34),h=n(42),b=n(106),O=n(254),p=n(94),x=n.n(p),m=n(37),f=n(3);function v(e){var t=e.logout,n=r.a.useState(null),c=Object(h.a)(n,2),s=c[0],a=c[1],i=function(){a(null)};return Object(f.jsxs)("div",{children:[Object(f.jsx)(x.a,{"aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},className:"bgMenu"}),Object(f.jsxs)(b.a,{id:"simple-menu",className:"menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:i,children:[Object(f.jsx)(m.b,{to:"/",children:Object(f.jsx)(O.a,{onClick:i,children:"Home"})}),Object(f.jsx)(m.b,{to:"profile",children:Object(f.jsx)(O.a,{onClick:i,children:"Profile"})}),Object(f.jsx)(O.a,{onClick:i,children:"Dashboard"}),Object(f.jsx)(O.a,{onClick:function(){i(),t()},children:"Logout"})]})]})}var g=Object(o.a)((function(e){return{root:{flexGrow:1,width:"100%","& div":{justifyContent:"flex-end","& a":{color:"#52525B"},"& button":{fontSize:"1rem",fontWeight:"bold"}}},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},logo:{flexGrow:"1",fontFamily:"cursive",color:"#404040"}}}));function N(){var e=Object(d.b)(),t=e.user,n=e.loginWithRedirect,c=e.logout,r=e.isAuthenticated,s=e.isLoading;console.log(t);var a=g();return Object(f.jsx)(l.a,{position:"static",className:a.root,children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)("h1",{className:a.logo,children:"GoPeer"}),s?null:r?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{src:t.picture,style:{width:"40px",borderRadius:"2rem"},alt:"account img"}),Object(f.jsx)(v,{logout:c})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.a,{onClick:function(){return n()},color:"inherit",children:"Login"}),Object(f.jsx)(u.a,{onClick:function(){return n({screen_hint:"signup"})},color:"inherit",children:"Register"})]})]})})}var k=n(65),y=n.n(k),w=n(99),C=n(100),P=n.n(C),F=n(101),L=n.n(F),S=n(252),E=n(102),R=n.n(E),A=n(255),B=n(253);var D=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(h.a)(s,2),i=a[0],o=a[1],l=Object(c.useState)(!0),j=Object(h.a)(l,2),d=j[0],b=j[1];Object(c.useEffect)((function(){setTimeout((function(){b(!1)}),1e3)}),[d]);var O=function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=i,e.next=4,navigator.clipboard.writeText(t);case 4:b(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to copy: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:"shortenForm",onSubmit:function(e){e.preventDefault(),P.a.isURL(n,{require_protocol:!0})?L.a.post("/api/shorten",{url:n}).then((function(e){o("https://url-shortener-gol.herokuapp.com/".concat(e.data.hash))})).catch((function(e){return console.log(e)})):alert("Please ensure this url is correct and includes http(s) protocol")},children:[Object(f.jsx)(S.a,{placeholder:"Enter URL with http(s)",variant:"filled",onChange:function(e){r(e.target.value)},value:n}),Object(f.jsx)(u.a,{color:"primary",variant:"contained",type:"submit",value:"shorten",size:"large",className:"shortenButton",children:"Shorten"}),i&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(S.a,{variant:"outlined",size:"small",className:"shortUrlInput",value:i||"",InputProps:{endAdornment:Object(f.jsx)(A.a,{position:"end",className:"copyAdornment",style:{cursor:"pointer"},onClick:O,children:Object(f.jsx)(R.a,{})})}}),d?Object(f.jsx)(B.a,{severity:"info",className:"copyAlert",children:"link copied"}):null]})]})})},I=n(103),U=n(104);var q=function(){return Object(f.jsx)("footer",{className:"footer",children:Object(f.jsxs)("div",{children:[Object(f.jsx)(I.a,{icon:U.a,className:"ftIcon"}),Object(f.jsx)("span",{children:"2021"}),Object(f.jsx)("span",{children:"url-shortener"})]})})};var G=function(){var e=Object(d.b)().user;return e?Object(f.jsx)("div",{className:"profileWithPicture",children:Object(f.jsxs)("div",{className:"profile-info",children:[Object(f.jsxs)("div",{className:"spanParent",children:[Object(f.jsx)("span",{children:"Name: "}),Object(f.jsxs)("span",{children:[" ",e.name]})]}),Object(f.jsxs)("div",{className:"spanParent",children:[Object(f.jsx)("span",{children:"Nickname: "}),Object(f.jsxs)("span",{children:[" ",e.nickname]})]}),Object(f.jsxs)("div",{className:"spanParent",children:[Object(f.jsx)("span",{children:"Email: "}),Object(f.jsxs)("span",{children:[" ",e.email]})]}),Object(f.jsxs)("div",{className:"spanParent",children:[Object(f.jsx)("span",{children:"Locale: "}),Object(f.jsxs)("span",{children:[" ",e.locale]})]}),Object(f.jsxs)("div",{className:"spanParent",children:[Object(f.jsx)("span",{children:"Email Verified: "}),Object(f.jsxs)("span",{children:[" ",e.email_verified?"Yes":"No"]})]})]})}):null},W=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N,{}),Object(f.jsxs)(i.c,{children:[Object(f.jsxs)(i.a,{path:"/",exact:!0,children:[Object(f.jsx)(D,{}),Object(f.jsx)(q,{})]}),Object(f.jsx)(i.a,{path:"/profile",children:Object(f.jsx)(G,{})})]})]})},z=n(105),T=n(251),_=Object(z.a)({palette:{primary:{main:"#D4D4D4"},secondary:{main:"#525252"}}});a.a.render(Object(f.jsx)(m.a,{children:Object(f.jsx)(T.a,{theme:_,children:Object(f.jsx)(d.a,{domain:"dev-asqqr4rn.eu.auth0.com",clientId:"qL6NkidsXUH8F995PAKxWQ21Ovsinpe5",redirectUri:window.location.origin,children:Object(f.jsx)(W,{})})})}),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.43edaf05.chunk.js.map