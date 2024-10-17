"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7191],{5680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>d});var r=a(6540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,r,o=function(e,n){if(null==e)return{};var a,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var a=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=s(a),f=o,d=g["".concat(l,".").concat(f)]||g[f]||p[f]||t;return a?r.createElement(d,i(i({ref:n},c),{},{components:a})):r.createElement(d,i({ref:n},c))}));function d(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=a.length,i=new Array(t);i[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[g]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<t;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7580:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>u,toc:()=>s});var r=a(8168),o=(a(6540),a(5680));const t={sidebar_position:20},i="Share aqua configuration for teams and organizations",u={unversionedId:"guides/team-config",id:"guides/team-config",title:"Share aqua configuration for teams and organizations",description:"aqua reads configuration from the environment variable AQUAGLOBALCONFIG.",source:"@site/docs/guides/team-config.md",sourceDirName:"guides",slug:"/guides/team-config",permalink:"/docs/guides/team-config",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/team-config.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Policy as Code",permalink:"/docs/guides/policy-as-code"},next:{title:"Keep configuration files in one directory",permalink:"/docs/guides/keep-in-one-dir"}},l={},s=[{value:"How to share aqua configuration for teams and organizations",id:"how-to-share-aqua-configuration-for-teams-and-organizations",level:2}],c={toc:s},g="wrapper";function p(e){let{components:n,...a}=e;return(0,o.yg)(g,(0,r.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"share-aqua-configuration-for-teams-and-organizations"},"Share aqua configuration for teams and organizations"),(0,o.yg)("p",null,"aqua reads configuration from the environment variable ",(0,o.yg)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG"),".\n",(0,o.yg)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG")," is configuration file paths separated with semicolons ",(0,o.yg)("inlineCode",{parentName:"p"},":"),"."),(0,o.yg)("p",null,"e.g."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},'export AQUA_GLOBAL_CONFIG="/home/foo/aqua-config/sre.yaml:/home/foo/aqua-config/all.yaml:${AQUA_GLOBAL_CONFIG:-}"\n')),(0,o.yg)("p",null,"About the priority of configuration, please see ",(0,o.yg)("a",{parentName:"p",href:"/docs/reference/config/#configuration-file-path"},"Configuration File Path"),"."),(0,o.yg)("p",null,"By default ",(0,o.yg)("inlineCode",{parentName:"p"},"aqua i")," ignores Global Configuration.\nIf ",(0,o.yg)("inlineCode",{parentName:"p"},"--all (-a)")," is set, aqua installs all packages including Global Configuration."),(0,o.yg)("h2",{id:"how-to-share-aqua-configuration-for-teams-and-organizations"},"How to share aqua configuration for teams and organizations"),(0,o.yg)("p",null,"Let's create the repository in your GitHub Organization,\nand add aqua configuration files for your teams and organization into the repository."),(0,o.yg)("p",null,"e.g."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"aqua-config/\n  all.yaml # aqua configuration for all developers in your organization\n  sre.yaml # aqua configuration for your SRE team\n")),(0,o.yg)("p",null,"Then checkout the repository and set the environment variable ",(0,o.yg)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG"),".\nIf you belong to SRE team,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},'export AQUA_GLOBAL_CONFIG="/home/foo/aqua-config/sre.yaml:/home/foo/aqua-config/all.yaml:${AQUA_GLOBAL_CONFIG:-}"\n')),(0,o.yg)("p",null,"Otherwise"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},'export AQUA_GLOBAL_CONFIG="/home/foo/aqua-config/all.yaml:${AQUA_GLOBAL_CONFIG:-}"\n')))}p.isMDXComponent=!0}}]);