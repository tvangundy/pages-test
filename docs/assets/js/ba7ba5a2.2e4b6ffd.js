"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6448],{5680:(e,o,t)=>{t.d(o,{xA:()=>c,yg:()=>h});var a=t(6540);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,a,n=function(e,o){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var o=a.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},c=function(e){var o=u(e.components);return a.createElement(s.Provider,{value:o},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},g=a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=u(t),g=n,h=y["".concat(s,".").concat(g)]||y[g]||p[g]||i;return t?a.createElement(h,r(r({ref:o},c),{},{components:t})):a.createElement(h,r({ref:o},c))}));function h(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=g;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[y]="string"==typeof e?e:n,r[1]=l;for(var u=2;u<i;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2230:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(8168),n=(t(6540),t(5680));const i={title:"Manage CLI tool version with aqua",date:new Date("2021-12-04T00:32:46.000Z"),authors:["suzuki-shunsuke"]},r=void 0,l={permalink:"/blog/2021/12/04/aqua-overview",source:"@site/blog/2021-12-04-aqua-overview.md",title:"Manage CLI tool version with aqua",description:"Original Post//medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5",date:"2021-12-04T00:32:46.000Z",formattedDate:"December 4, 2021",tags:[],readingTime:3.36,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Manage CLI tool version with aqua",date:"2021-12-04T00:32:46.000Z",authors:["suzuki-shunsuke"]},prevItem:{title:"Why I use aqua",permalink:"/blog/2021/12/23/why-i-use-aqua"},nextItem:{title:"aqua - Declarative CLI Version Manager",permalink:"/blog/2021/09/08/introduction"}},s={authorsImageUrls:[void 0]},u=[{value:"Pin Tool Version",id:"pin-tool-version",level:2},{value:"Auto update with Renovate",id:"auto-update-with-renovate",level:2},{value:"Lazy Install",id:"lazy-install",level:2},{value:"Change tool version easily",id:"change-tool-version-easily",level:2},{value:"Change tool version per configuration",id:"change-tool-version-per-configuration",level:2},{value:"Manage your tools as dotfiles",id:"manage-your-tools-as-dotfiles",level:2},{value:"Manage tools for your team and organization",id:"manage-tools-for-your-team-and-organization",level:2},{value:"Manage tools for a repository",id:"manage-tools-for-a-repository",level:2},{value:"Install tools managed in the private GitHub Repositories",id:"install-tools-managed-in-the-private-github-repositories",level:2},{value:"Use aqua in CI",id:"use-aqua-in-ci",level:2},{value:"Registry",id:"registry",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},y="wrapper";function p(e){let{components:o,...t}=e;return(0,n.yg)(y,(0,a.A)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("head",null,(0,n.yg)("link",{rel:"canonical",href:"https://medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5"})),(0,n.yg)("p",null,"Original Post: ",(0,n.yg)("a",{parentName:"p",href:"https://medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5"},"https://medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5")),(0,n.yg)("p",null,"In this post, I introduce the CLI tool aqua, which manages CLI tool version with YAML."),(0,n.yg)("p",null,"When I write this post, the latest version of aqua is v0.8.0."),(0,n.yg)("p",null,"aqua is a single binary written in Go, so you can install it easily. Unlike other package managers such as Homebrew, aqua manages CLI tools with declarative YAML Configuration files."),(0,n.yg)("h2",{id:"pin-tool-version"},"Pin Tool Version"),(0,n.yg)("p",null,"aqua forces to pin tool version, which solves the problem due to the difference of tool version."),(0,n.yg)("h2",{id:"auto-update-with-renovate"},"Auto update with Renovate"),(0,n.yg)("p",null,"With Renovate Preset Config for aqua, you can update tools continuously with Renovate."),(0,n.yg)("h2",{id:"lazy-install"},"Lazy Install"),(0,n.yg)("p",null,"When the tool is invoked, aqua installs the tool automatically. This feature ensures the executed tool version is exactly same as the configuration."),(0,n.yg)("h2",{id:"change-tool-version-easily"},"Change tool version easily"),(0,n.yg)("p",null,"By editing the tool version in the configuration file, you can easily change the tool version. You can try a new version or downgrade the tool easily."),(0,n.yg)("h2",{id:"change-tool-version-per-configuration"},"Change tool version per configuration"),(0,n.yg)("p",null,"You can manage tool version per configuration file. You can install multiple versions in the same machine and switch them per project."),(0,n.yg)("h2",{id:"manage-your-tools-as-dotfiles"},"Manage your tools as dotfiles"),(0,n.yg)("p",null,"By managing your aqua configuration file in Git repository such as your dotfiles, you can manage your tools as code. You can set up your new laptop and use the same tool version in your multiple laptops easily."),(0,n.yg)("h2",{id:"manage-tools-for-your-team-and-organization"},"Manage tools for your team and organization"),(0,n.yg)("p",null,"aqua supports not only personal use but also team and organization use. By managing aqua configuration for your team and organization in Git Repository, you can manage tools for your team and organization as code. New joiners can set up their laptops quickly and you can distribute tools easily."),(0,n.yg)("h2",{id:"manage-tools-for-a-repository"},"Manage tools for a repository"),(0,n.yg)("p",null,"By adding aqua configuration file to a repository, you can manage tools for the repository with aqua. aqua manages tool versions declaratively, so you always only have to execute the same command. So new contributors can set up quickly and you can update tools easily. You don\u2019t have to maintain the document about required tools and you don\u2019t have to investigate how to install them."),(0,n.yg)("h2",{id:"install-tools-managed-in-the-private-github-repositories"},"Install tools managed in the private GitHub Repositories"),(0,n.yg)("p",null,"aqua supports installing tools from the private GitHub Repositories. It\u2019s useful to distribute your organization\u2019s private tools."),(0,n.yg)("h2",{id:"use-aqua-in-ci"},"Use aqua in CI"),(0,n.yg)("p",null,"There are GitHub Actions and CircleCI Orb for aqua, so you can install tools with aqua easily in CI too. You can use the same version in both local development and CI."),(0,n.yg)("p",null,"By the way, many GitHub Actions install the tool automatically before executing it. It\u2019s very easy to use, but there are some problems."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Some GitHub Actions don\u2019t force to pin tool versions, which may cause the problem due to the difference of tool version"),(0,n.yg)("li",{parentName:"ul"},"When you specify tool version in inputs, you have to update it continuously but it\u2019s not easy"),(0,n.yg)("li",{parentName:"ul"},"You can\u2019t install tools in your laptop for local development with GitHub Actions. You have to install tools by the other way"),(0,n.yg)("li",{parentName:"ul"},"It\u2019s difficult to unify tool versions in local development and CI")),(0,n.yg)("p",null,"aqua solves the above problems."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"aqua forces to pin tool versions"),(0,n.yg)("li",{parentName:"ul"},"With Renovate Preset Config for aqua, you can update tools easily with Renovate"),(0,n.yg)("li",{parentName:"ul"},"aqua supports both local development and CI"),(0,n.yg)("li",{parentName:"ul"},"You can use the same configuration in both local development and CI, so you can unify tool versions easily")),(0,n.yg)("h2",{id:"registry"},"Registry"),(0,n.yg)("p",null,"Registry is aqua\u2019s mechanism to manage the list of installable tools and how to install them. Registry is a simple YAML. You can write Registry in aqua configuration, or you can read it from other local files and GitHub Repositories. You can manage private Registry in private GitHub Repository."),(0,n.yg)("p",null,"We maintain the Standard Registry and you can install tools in the Registry easily without writing Registry by your self."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"In this post, I introduced the CLI tool aqua, which manages CLI tool version with YAML. Let\u2019s try Quick Start."))}p.isMDXComponent=!0}}]);