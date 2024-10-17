"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4674],{5680:(e,r,a)=>{a.d(r,{xA:()=>y,yg:()=>g});var t=a(6540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),u=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},y=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),d=u(a),c=n,g=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return a?t.createElement(g,o(o({ref:r},y),{},{components:a})):t.createElement(g,o({ref:r},y))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5348:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=a(8168),n=(a(6540),a(5680));const i={sidebar_position:100},o="Only standard registry is allowed by default",l={unversionedId:"reference/upgrade-guide/v2/only-standard-registry-is-allowed-by-default",id:"reference/upgrade-guide/v2/only-standard-registry-is-allowed-by-default",title:"Only standard registry is allowed by default",description:"#1404 #1516",source:"@site/docs/reference/upgrade-guide/v2/only-standard-registry-is-allowed-by-default.md",sourceDirName:"reference/upgrade-guide/v2",slug:"/reference/upgrade-guide/v2/only-standard-registry-is-allowed-by-default",permalink:"/docs/reference/upgrade-guide/v2/only-standard-registry-is-allowed-by-default",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/upgrade-guide/v2/only-standard-registry-is-allowed-by-default.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Upgrade aqua from v1 to v2",permalink:"/docs/reference/upgrade-guide/v2/"},next:{title:"If AQUA_CONFIG or -c option is set, aqua doesn't search configuration files recursively",permalink:"/docs/reference/upgrade-guide/v2/aqua-config"}},s={},u=[{value:"See also",id:"see-also",level:2},{value:"Why this change is needed",id:"why-this-change-is-needed",level:2},{value:"How to migrate",id:"how-to-migrate",level:2},{value:"Git Repository&#39;s root&#39;s policy file",id:"git-repositorys-roots-policy-file",level:3},{value:"AQUA_POLICY_CONFIG",id:"aqua_policy_config",level:3}],y={toc:u},d="wrapper";function p(e){let{components:r,...a}=e;return(0,n.yg)(d,(0,t.A)({},y,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"only-standard-registry-is-allowed-by-default"},"Only standard registry is allowed by default"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1404"},"#1404")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1516"},"#1516")),(0,n.yg)("p",null,"If you don't set policies, aqua uses the default policy allowing only standard registries.\nIf you set policies the default policy is ignored."),(0,n.yg)("h2",{id:"see-also"},"See also"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/guides/policy-as-code"},"Tutorial - Policy")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/reference/security/policy-as-code"},"Reference - Policy")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/reference/security/policy-as-code/git-policy"},"Reference - Git Repository root's policy file and policy commands"))),(0,n.yg)("h2",{id:"why-this-change-is-needed"},"Why this change is needed"),(0,n.yg)("p",null,"This change makes aqua secure by default.\nAlmost users don't need registries other than standard registry.\nOther registries are useful but also can be abused."),(0,n.yg)("h2",{id:"how-to-migrate"},"How to migrate"),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"If it is difficult to configure Policy as we describe below, you can also disable Policy by the environment variable. Please see ",(0,n.yg)("a",{parentName:"p",href:"/docs/reference/security/policy-as-code/#disable-policy"},"here"),".\nNote that we don't recommend disabling Policy in terms of security.")),(0,n.yg)("p",null,"If you use only standard registry, you don't have to do anything.\nOtherwise you have to set policies to allow non Standard Registries."),(0,n.yg)("p",null,"There are two ways to set policies."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"(Recommended. ",(0,n.yg)("inlineCode",{parentName:"li"},"aqua >= v2.3.0"),") Add Policy files in your Git Repository's root directory and allow them by ",(0,n.yg)("inlineCode",{parentName:"li"},"aqua policy allow")," command."),(0,n.yg)("li",{parentName:"ol"},"Add Policy files and set the environment variable ",(0,n.yg)("inlineCode",{parentName:"li"},"AQUA_POLICY_CONFIG"))),(0,n.yg)("h3",{id:"git-repositorys-roots-policy-file"},"Git Repository's root's policy file"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"aqua >= v2.3.0")),(0,n.yg)("p",null,"Please create a Policy file in your Git Repository's root directory."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"aqua policy init\nvi aqua-policy.yaml\naqua policy allow\n")),(0,n.yg)("p",null,"If you don't use Git, please run ",(0,n.yg)("inlineCode",{parentName:"p"},"git init")," to create a directory ",(0,n.yg)("inlineCode",{parentName:"p"},".git"),".\nYou don't have to commit files. aqua searches ",(0,n.yg)("inlineCode",{parentName:"p"},".git")," to search ",(0,n.yg)("inlineCode",{parentName:"p"},"Git Repository's root policy file"),"."),(0,n.yg)("h3",{id:"aqua_policy_config"},"AQUA_POLICY_CONFIG"),(0,n.yg)("p",null,"If non Standard Registries are used in Global Configuration, it is useful to set ",(0,n.yg)("inlineCode",{parentName:"p"},"AQUA_POLICY_CONFIG")," in ",(0,n.yg)("inlineCode",{parentName:"p"},".bashrc")," or something."),(0,n.yg)("p",null,"e.g. .bashrc"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},'export AQUA_GLOBAL_CONFIG="$HOME/repos/src/github.com/aquaproj/aqua-registry/aqua-all.yaml"\nexport AQUA_POLICY_CONFIG="$HOME/repos/src/github.com/aquaproj/aqua-registry/aqua-policy.yaml"\n')),(0,n.yg)("p",null,"If non Standard Registries are used in non Global Configuration, it would be useful to set ",(0,n.yg)("inlineCode",{parentName:"p"},"AQUA_POLICY_CONFIG")," by ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/direnv/direnv"},"direnv")," or something."),(0,n.yg)("p",null,"e.g. .envrc"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"export AQUA_POLICY_CONFIG=$PWD/aqua-policy.yaml:$AQUA_POLICY_CONFIG\n")),(0,n.yg)("p",null,"You can specify multiple policy files in ",(0,n.yg)("inlineCode",{parentName:"p"},"AQUA_POLICY_CONFIG")," with ",(0,n.yg)("inlineCode",{parentName:"p"},":")," and empty stings are ignored."))}p.isMDXComponent=!0}}]);