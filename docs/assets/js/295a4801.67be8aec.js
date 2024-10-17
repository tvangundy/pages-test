"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1751],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var o=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=o.createContext({}),s=function(e){var n=o.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=t,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?o.createElement(f,i(i({ref:n},u),{},{components:r})):o.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5949:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(8168),t=(r(6540),r(5680));const a={sidebar_position:1300},i="command is not found",l={unversionedId:"reference/codes/004",id:"reference/codes/004",title:"command is not found",description:"You may face the error command is not found when you run a command.",source:"@site/docs/reference/codes/004.md",sourceDirName:"reference/codes",slug:"/reference/codes/004",permalink:"/docs/reference/codes/004",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/codes/004.md",tags:[],version:"current",sidebarPosition:1300,frontMatter:{sidebar_position:1300},sidebar:"tutorialSidebar",previous:{title:'The policy file is ignored unless it is allowed by "aqua policy allow" command',permalink:"/docs/reference/codes/003"},next:{title:"cargo install failed",permalink:"/docs/reference/codes/005"}},c={},s=[{value:"What does this error mean?",id:"what-does-this-error-mean",level:2},{value:"How to solve the error",id:"how-to-solve-the-error",level:2}],u={toc:s},p="wrapper";function m(e){let{components:n,...r}=e;return(0,t.yg)(p,(0,o.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"command-is-not-found"},"command is not found"),(0,t.yg)("p",null,"You may face the error ",(0,t.yg)("inlineCode",{parentName:"p"},"command is not found")," when you run a command."),(0,t.yg)("p",null,"e.g."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-console"},'$ ci-info --version\nFATA[0000] aqua failed                                   aqua_version= env=linux/arm64 error="command is not found" exe_name=ci-info program=aqua\n')),(0,t.yg)("h2",{id:"what-does-this-error-mean"},"What does this error mean?"),(0,t.yg)("p",null,"This error means the command isn't found in your configuration files.\naqua searches ",(0,t.yg)("a",{parentName:"p",href:"/docs/reference/config#configuration-file-path"},"configuration files")," and searches the command from configuration files.\nThe error occurs when aqua can't find the command."),(0,t.yg)("h2",{id:"how-to-solve-the-error"},"How to solve the error"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"If you want to install the command by aqua, please create ",(0,t.yg)("inlineCode",{parentName:"li"},"aqua.yaml")," and add the package to ",(0,t.yg)("inlineCode",{parentName:"li"},"aqua.yaml"),".")),(0,t.yg)("p",null,"e.g."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"aqua init\naqua g -i suzuki-shunsuke/ci-info\n")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"If you want to install the package globally, please see ",(0,t.yg)("a",{parentName:"p",href:"/docs/tutorial/global-config"},"Install tools globally"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"If you want to install the command without aqua, please install the command as you like."))),(0,t.yg)("p",null,"e.g."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"homebrew suzuki-shunsuke/ci-info/ci-info\n")),(0,t.yg)("p",null,"You don't have to remove the symbolic link in ",(0,t.yg)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/bin"),"."))}m.isMDXComponent=!0}}]);