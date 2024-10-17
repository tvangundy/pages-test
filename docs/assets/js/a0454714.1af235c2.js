"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6037],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),p=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=t,y=s["".concat(c,".").concat(m)]||s[m]||g[m]||i;return r?a.createElement(y,l(l({ref:n},u),{},{components:r})):a.createElement(y,l({ref:n},u))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:t,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2596:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(8168),t=(r(6540),r(5680));const i={sidebar_position:1950},l="checksum",o={unversionedId:"reference/registry-config/checksum",id:"reference/registry-config/checksum",title:"checksum",description:"Each registry's package configuration has the configuration about checksum.",source:"@site/docs/reference/registry-config/checksum.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/checksum",permalink:"/docs/reference/registry-config/checksum",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/checksum.md",tags:[],version:"current",sidebarPosition:1950,frontMatter:{sidebar_position:1950},sidebar:"tutorialSidebar",previous:{title:"supported_if",permalink:"/docs/reference/registry-config/supported-if"},next:{title:"supported_envs",permalink:"/docs/reference/registry-config/supported-envs"}},c={},p=[{value:"<code>enabled</code>",id:"enabled",level:2},{value:"checksum <code>algorithm</code>",id:"checksum-algorithm",level:2},{value:"checksum <code>type</code>",id:"checksum-type",level:2},{value:"checksum <code>file_format</code>",id:"checksum-file_format",level:2}],u={toc:p},s="wrapper";function g(e){let{components:n,...r}=e;return(0,t.yg)(s,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"checksum"},"checksum"),(0,t.yg)("p",null,"Each registry's package configuration has the configuration about checksum."),(0,t.yg)("p",null,"e.g. ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/109811850abf8ec34f8715f3384ba8218f05ec1d/pkgs/cli/cli/registry.yaml"},"GitHub CLI")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: cli\n    repo_name: cli\n    # ...\n    checksum:\n      type: github_release\n      asset: gh_{{trimV .Version}}_checksums.txt\n      file_format: regexp\n      algorithm: sha256\n      pattern:\n        checksum: ^(\\b[A-Fa-f0-9]{64}\\b)\n        file: "^\\\\b[A-Fa-f0-9]{64}\\\\b\\\\s+(\\\\S+)$"\n')),(0,t.yg)("p",null,"e.g. ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/109811850abf8ec34f8715f3384ba8218f05ec1d/pkgs/argoproj/argo-cd/registry.yaml"},"ArgoCD CLI")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: argoproj\n    repo_name: argo-cd\n    # ...\n    asset: argocd-{{.OS}}-{{.Arch}}\n    checksum:\n      type: github_release\n      asset: "{{.Asset}}.sha256"\n      file_format: raw\n      algorithm: sha256\n')),(0,t.yg)("h2",{id:"enabled"},(0,t.yg)("inlineCode",{parentName:"h2"},"enabled")),(0,t.yg)("p",null,"You can enable or disable the checksum download by ",(0,t.yg)("inlineCode",{parentName:"p"},"enabled")," attribute."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: github_release\n    repo_owner: argoproj\n    repo_name: argo-cd\n    # ...\n    checksum:\n      enabled: false\n")),(0,t.yg)("p",null,"By default, checkdum download is disabled."),(0,t.yg)("h2",{id:"checksum-algorithm"},"checksum ",(0,t.yg)("inlineCode",{parentName:"h2"},"algorithm")),(0,t.yg)("p",null,"The following ",(0,t.yg)("inlineCode",{parentName:"p"},"algorithm")," are supported."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"sha1")," (aqua >= ",(0,t.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.29.0"},"v1.29.0"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"sha256")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"sha512")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"md5"))),(0,t.yg)("h2",{id:"checksum-type"},"checksum ",(0,t.yg)("inlineCode",{parentName:"h2"},"type")),(0,t.yg)("p",null,"The following ",(0,t.yg)("inlineCode",{parentName:"p"},"type")," are supported."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"github_release")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"http"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"github_release")," requires the following attributes."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"asset"),": GitHub Release Asset name. The format is a Go's ",(0,t.yg)("inlineCode",{parentName:"li"},"text/template")," string")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"http")," requires the following attributes."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"url"),": Checksum file's download URL. The format is a Go's ",(0,t.yg)("inlineCode",{parentName:"li"},"text/template")," string")),(0,t.yg)("h2",{id:"checksum-file_format"},"checksum ",(0,t.yg)("inlineCode",{parentName:"h2"},"file_format")),(0,t.yg)("p",null,"The following ",(0,t.yg)("inlineCode",{parentName:"p"},"file_format")," are supported."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"regexp")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"raw"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"regexp")," requires the following attributes."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"pattern.checksum"),":"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"pattern.file"),":")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'pattern:\n  checksum: ^(\\b[A-Fa-f0-9]{64}\\b)\n  file: "^\\\\b[A-Fa-f0-9]{64}\\\\b\\\\s+(\\\\S+)$"\n')),(0,t.yg)("p",null,"aqua extracts pairs of checkfum and asset name using regular expressions.\nIf the checksum file includes only one checksum, you can omit ",(0,t.yg)("inlineCode",{parentName:"p"},"pattern.file"),"."))}g.isMDXComponent=!0}}]);