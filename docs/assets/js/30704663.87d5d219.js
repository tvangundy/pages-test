"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[9708],{5680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,d=p["".concat(s,".").concat(g)]||p[g]||f[g]||o;return n?t.createElement(d,i(i({ref:r},u),{},{components:n})):t.createElement(d,i({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2203:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(8168),a=(n(6540),n(5680));const o={sidebar_position:610},i="search_words",c={unversionedId:"reference/registry-config/search-words",id:"reference/registry-config/search-words",title:"search_words",description:"#972 aqua >= v1.16.0 is required",source:"@site/docs/reference/registry-config/search-words.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/search-words",permalink:"/docs/reference/registry-config/search-words",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/search-words.md",tags:[],version:"current",sidebarPosition:610,frontMatter:{sidebar_position:610},sidebar:"tutorialSidebar",previous:{title:"format",permalink:"/docs/reference/registry-config/format"},next:{title:"files",permalink:"/docs/reference/registry-config/files"}},s={},l=[],u={toc:l},p="wrapper";function f(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"search_words"},"search_words"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/972"},"#972")," aqua >= v1.16.0 is required"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"search_words")," is used only for searching packages by ",(0,a.yg)("inlineCode",{parentName:"p"},"aqua g")," command.\naqua searches not only the package name, aliases, and command names but also ",(0,a.yg)("inlineCode",{parentName:"p"},"search_words"),"."),(0,a.yg)("p",null,"For example, it is useful to find GitHub CLI with the word ",(0,a.yg)("inlineCode",{parentName:"p"},"github"),"."),(0,a.yg)("p",null,"e.g."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: github_release\n    repo_owner: cli\n    repo_name: cli\n    description: GitHub\u2019s official command line tool\n    search_words:\n      - github\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  cli/cli [gh]: github\n  github/licensed\n> github/hub\n  8/643\n> github\n")))}f.isMDXComponent=!0}}]);