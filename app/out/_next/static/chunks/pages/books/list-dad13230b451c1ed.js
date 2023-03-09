(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{2914:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/list",function(){return s(147)}])},887:function(e,t,s){"use strict";var a=s(5893),n=s(9008),i=s.n(n),o=s(1163);let r=e=>{let{pageTitle:t,pageDescription:s,pagePath:n,pageImg:r,pageImgWidth:l,pageImgHeight:c}=e,m=(0,o.useRouter)(),d="池川明 - Official Web Site",x="https://akira-ikegawa.vercel.app"+m.pathname,p=t?"".concat(t," | ").concat(d):d,u=s||"医師・医学博士 池川明のOfficialサイトです。講演会の依頼について、池川明の著書について、池川明についてはこちらのホームページをご覧ください。",h=n||x;return(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:p}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0"}),(0,a.jsx)("meta",{name:"description",content:u}),(0,a.jsx)("meta",{property:"og:url",content:h}),(0,a.jsx)("meta",{property:"og:title",content:p}),(0,a.jsx)("meta",{property:"og:site_name",content:p}),(0,a.jsx)("meta",{property:"og:description",content:u}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:image",content:r}),(0,a.jsx)("meta",{property:"og:image:width",content:String(l||1280)}),(0,a.jsx)("meta",{property:"og:image:height",content:String(c||640)}),(0,a.jsx)("link",{rel:"icon",href:"/assets/favicon.ico"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap",rel:"stylesheet"}),(0,a.jsx)("link",{rel:"canonical",href:h})]})};t.Z=r},7773:function(e,t,s){"use strict";var a=s(5893),n=s(5675),i=s.n(n);let o=()=>(0,a.jsx)("div",{className:"text-center mx-auto my-40",children:(0,a.jsx)(i(),{className:"mx-auto w-12 duration-1000",src:"/assets/image/common/loading.gif",alt:"loading",width:128,height:128})});t.Z=o},2488:function(e,t,s){"use strict";var a=s(5893);let n=e=>{let{title:t,subtitle:s}=e;return(0,a.jsxs)("div",{className:"w-5/6 text-naby mt-24 mb-16 mx-auto md:ml-0",children:[(0,a.jsx)("h1",{className:"text-4xl my-1 tracking-widest md:text-6xl font-bold",children:t}),(0,a.jsx)("h2",{className:"text-xs tracking-[.3rem] font-bold md:text-base md:my-4",children:s})]})};t.Z=n},1985:function(e,t,s){"use strict";var a=s(5893),n=s(5675),i=s.n(n),o=s(1664),r=s.n(o);let l=()=>(0,a.jsx)(r(),{href:"/",children:(0,a.jsx)("div",{className:"mx-auto w-11/12",children:(0,a.jsx)(i(),{className:"absolute w-16 top-1 md:w-24",src:"/assets/image/logo/logo.png",alt:"loupe",width:1500,height:1500,priority:!0})})});t.Z=l},147:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var a=s(5893),n=s(7294),i=s(8433),o=s(1664),r=s.n(o),l=s(5675),c=s.n(l),m=s(2488),d=s(1985),x=s(887),p=s(7773);function u(){let[e,t]=(0,n.useState)(""),[s,o]=(0,n.useState)([]),[l,u]=(0,n.useState)(!1),[h,g]=(0,n.useState)(!0),j=()=>u(!0),f=()=>u(!1),w=e=>{"Enter"===e&&(l||y())},y=async()=>{g(!0);let t=await i.Z.get("/api/books/search",{params:{keyword:e}});o(t.data.contents),g(!1)};return(0,n.useEffect)(()=>{y()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Z,{pageTitle:"書籍一覧",pageDescription:"池川明の著書一覧ページです。",pageImgWidth:1280,pageImgHeight:960}),(0,a.jsx)(d.Z,{}),(0,a.jsxs)("main",{className:"overflow-x-hidden container mx-auto",children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(m.Z,{title:"BOOKS",subtitle:"書籍一覧"})}),(0,a.jsxs)("div",{className:"w-5/6 my-5 mx-auto border border-naby py-2 rounded-full flex md:w-2/5 md:ml-0",children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c(),{className:"w-[25px] lg:w-[35px] mx-3",src:"/assets/image/icon/common/loupe_naby.svg",alt:"loupe",width:23,height:22})}),(0,a.jsx)("input",{value:e,placeholder:"キーワードを入力してください",onChange:e=>t(e.target.value),onKeyDown:e=>w(e.key),onCompositionStart:j,onCompositionEnd:f,className:"w-5/6 border-none outline-none"})]}),h?(0,a.jsx)(p.Z,{}):(0,a.jsx)("div",{className:"w-11/12 mt-16 mb-48 mx-auto grid grid-cols-2 md:grid-cols-4 md:w-full md:mb-64",children:s.map(e=>{let t=new Date(e.publishedAt).getFullYear()+"."+new Date(e.publishedAt).toLocaleString("ja-JP-u-ca-japanese",{month:"2-digit",day:"2-digit"}).toString().replace("/",".");return(0,a.jsx)("div",{className:"w-[95%] my-3 md:my-9",children:(0,a.jsxs)(r(),{href:e.url,target:"_blank",children:[(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:e.cover.url,className:"mx-auto h-40 object-contain md:h-72 rounded-lg",alt:"書籍画像"})}),(0,a.jsx)("p",{className:"text-xs text-pale_gray my-2 md:text-sm",children:t}),(0,a.jsx)("p",{className:"text-sm text-gray line-clamp-2 md:text-base",children:e.title})]})})})})]}),(0,a.jsx)("div",{className:"inherit z-0 -ml-1 mb-3 md:mb-12",children:(0,a.jsx)(c(),{className:"w-screen",src:"/assets/image/common/footer-upper.svg",alt:"background-upper",width:390,height:53})})]})}}},function(e){e.O(0,[234,774,888,179],function(){return e(e.s=2914)}),_N_E=e.O()}]);