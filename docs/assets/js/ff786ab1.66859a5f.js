"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4382],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),g=o,y=l["".concat(c,".").concat(g)]||l[g]||f[g]||i;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2265:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(8168),o=(t(6540),t(5680));const i={sidebar_position:400},a="version_source",s={unversionedId:"reference/registry-config/version-source",id:"reference/registry-config/version-source",title:"version_source",description:"#811 aqua >= v1.8.0",source:"@site/docs/reference/registry-config/version-source.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/version-source",permalink:"/docs/reference/registry-config/version-source",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/version-source.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"version_prefix",permalink:"/docs/reference/registry-config/version-prefix"},next:{title:"rosetta2",permalink:"/docs/reference/registry-config/rosetta2"}},c={},u=[],p={toc:u},l="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(l,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"version_source"},"version_source"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/811"},"#811")," aqua >= ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.8.0"},"v1.8.0")),(0,o.yg)("p",null,"By default, ",(0,o.yg)("inlineCode",{parentName:"p"},"aqua g")," gets the latest version from GitHub Releases.\nBy setting ",(0,o.yg)("inlineCode",{parentName:"p"},"version_source: github_tag"),", aqua gets from GitHub Repository Tag instead of GitHub Releases.\nThis is useful for tools without GitHub Releases."))}f.isMDXComponent=!0}}]);