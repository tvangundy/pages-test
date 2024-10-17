"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4833],{5680:(a,e,n)=>{n.d(e,{xA:()=>c,yg:()=>m});var t=n(6540);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function s(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},o=Object.keys(a);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var u=t.createContext({}),r=function(a){var e=t.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},c=function(a){var e=r(a.components);return t.createElement(u.Provider,{value:e},a.children)},p="mdxType",g={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,o=a.originalType,u=a.parentName,c=s(a,["components","mdxType","originalType","parentName"]),p=r(n),d=i,m=p["".concat(u,".").concat(d)]||p[d]||g[d]||o;return n?t.createElement(m,l(l({ref:e},c),{},{components:n})):t.createElement(m,l({ref:e},c))}));function m(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=a,s[p]="string"==typeof a?a:i,l[1]=s;for(var r=2;r<o;r++)l[r]=n[r];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1251:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var t=n(8168),i=(n(6540),n(5680));const o={sidebar_position:400},l="Usage",s={unversionedId:"reference/usage",id:"reference/usage",title:"Usage",description:"aqua install",source:"@site/docs/reference/usage.md",sourceDirName:"reference",slug:"/reference/usage",permalink:"/docs/reference/usage",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/usage.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Registry",permalink:"/docs/reference/registry"},next:{title:"Windows Support",permalink:"/docs/reference/windows-support"}},u={},r=[{value:"aqua install",id:"aqua-install",level:2},{value:"aqua generate",id:"aqua-generate",level:2},{value:"aqua init",id:"aqua-init",level:2},{value:"aqua update-aqua",id:"aqua-update-aqua",level:2},{value:"aqua update-checksum",id:"aqua-update-checksum",level:2},{value:"aqua which",id:"aqua-which",level:2},{value:"aqua remove",id:"aqua-remove",level:2},{value:"aqua cp",id:"aqua-cp",level:2},{value:"aqua info",id:"aqua-info",level:2},{value:"aqua generate-registry",id:"aqua-generate-registry",level:2},{value:"aqua list",id:"aqua-list",level:2},{value:"aqua completion",id:"aqua-completion",level:2},{value:"aqua exec",id:"aqua-exec",level:2}],c={toc:r},p="wrapper";function g(a){let{components:e,...n}=a;return(0,i.yg)(p,(0,t.A)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"usage"},"Usage"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua help\nNAME:\n   aqua - Version Manager of CLI. https://aquaproj.github.io/\n\nUSAGE:\n   aqua [global options] command [command options] \n\nVERSION:\n   2.29.0 (9ff65378f0c6197e3130a20f6d978b8a3042b463)\n\nCOMMANDS:\n   init                   Create a configuration file if it doesn't exist\n   info                   Show information\n   init-policy            [Deprecated] Create a policy file if it doesn't exist\n   policy                 Manage Policy\n   install, i             Install tools\n   update-aqua, upa       Update aqua\n   generate, g            Search packages in registries and output the configuration interactively\n   which                  Output the absolute file path of the given command\n   exec                   Execute tool\n   list                   List packages in Registries\n   generate-registry, gr  Generate a registry's package configuration\n   completion             Output shell completion script for bash, zsh, or fish\n   version                Show version\n   cp                     Copy executable files in a directory\n   root-dir               Output the aqua root directory (AQUA_ROOT_DIR)\n   update-checksum, upc   Create or Update aqua-checksums.json\n   remove, rm             Uninstall packages\n   update, up             Update registries and packages\n   help, h                Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --log-level value         log level [$AQUA_LOG_LEVEL]\n   --config value, -c value  configuration file path [$AQUA_CONFIG]\n   --disable-cosign          Disable Cosign verification (default: false) [$AQUA_DISABLE_COSIGN]\n   --disable-slsa            Disable SLSA verification (default: false) [$AQUA_DISABLE_SLSA]\n   --trace value             trace output file path\n   --cpu-profile value       cpu profile output file path\n   --help, -h                show help\n   --version, -v             print the version\n")),(0,i.yg)("h2",{id:"aqua-install"},"aqua install"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'$ aqua help install\nNAME:\n   aqua install - Install tools\n\nUSAGE:\n   aqua install [command options]\n\nDESCRIPTION:\n   Install tools according to the configuration files.\n\n   e.g.\n   $ aqua i\n\n   If you want to create only symbolic links and want to skip downloading package, please set "-l" option.\n\n   $ aqua i -l\n\n   By default aqua doesn\'t install packages in the global configuration.\n   If you want to install packages in the global configuration too,\n   please set "-a" option.\n\n   $ aqua i -a\n\n   You can filter installed packages with package tags.\n\n   e.g.\n   $ aqua i -t foo # Install only packages having a tag "foo"\n   $ aqua i --exclude-tags foo # Install only packages not having a tag "foo"\n\n\nOPTIONS:\n   --only-link, -l         create links but skip downloading packages (default: false)\n   --test                  This flag was deprecated and had no meaning from aqua v2.0.0. This flag will be removed in aqua v3.0.0. https://github.com/aquaproj/aqua/issues/1691 (default: false)\n   --all, -a               install all aqua configuration packages (default: false)\n   --tags value, -t value  filter installed packages with tags\n   --exclude-tags value    exclude installed packages with tags\n   --help, -h              show help\n')),(0,i.yg)("h2",{id:"aqua-generate"},"aqua generate"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'$ aqua help generate\nNAME:\n   aqua generate - Search packages in registries and output the configuration interactively\n\nUSAGE:\n   aqua generate [command options][<registry name>,<package name> ...]\n\nDESCRIPTION:\n   Search packages in registries and output the configuration interactively.\n\n   If no argument is passed, interactive fuzzy finder is launched.\n\n   $ aqua g\n\n     influxdata/influx-cli (standard) (influx)                     \u250c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\n     newrelic/newrelic-cli (standard) (newrelic)                   \u2502  cli/cli\n     pivotal-cf/pivnet-cli (standard) (pivnet)                     \u2502\n     scaleway/scaleway-cli (standard) (scw)                        \u2502  https://cli.github.com/\n     tfmigrator/cli (standard) (tfmigrator)                        \u2502  GitHub\u2019cs official command line tool\n     aws/copilot-cli (standard) (copilot)                          \u2502\n     codeclimate/test-reporter (standard)                          \u2502\n     create-go-app/cli (standard) (cgapp)                          \u2502\n     harness/drone-cli (standard) (drone)                          \u2502\n     sigstore/rekor (standard) (rekor-cli)                         \u2502\n     getsentry/sentry-cli (standard)                               \u2502\n     knative/client (standard) (kn)                                \u2502\n     rancher/cli (standard) (rancher)                              \u2502\n     tektoncd/cli (standard) (tkn)                                 \u2502\n     civo/cli (standard) (civo)                                    \u2502\n     dapr/cli (standard) (dapr)                                    \u2502\n     mongodb/mongocli (standard)                                   \u2502\n     openfaas/faas-cli (standard)                                  \u2502\n   > cli/cli (standard) (gh)                                       \u2502\n     48/380                                                        \u2502\n   > cli                                                           \u2514 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\n\n   Please select the package you want to install, then the package configuration is outptted.\n   You can select multiple packages by tab key.\n   Please copy and paste the outputted configuration in the aqua configuration file.\n\n   $ aqua g # tfmigrator/cli is selected\n   - name: tfmigrator/cli@v0.2.1\n\n   You can update the configuration file directly with "-i" option.\n\n   $ aqua g -i\n\n   You can update an imported file with "-o" option.\n\n   $ aqua g -o aqua/pkgs.yaml\n\n   You can pass packages with positional arguments.\n\n   $ aqua g [<registry name>,<package name>[@<version>] ...]\n\n   $ aqua g standard,cli/cli standard,junegunn/fzf standard,suzuki-shunsuke/tfcmt@v3.0.0\n   - name: cli/cli@v2.2.0\n   - name: junegunn/fzf@0.28.0\n   - name: suzuki-shunsuke/tfcmt@v3.0.0\n\n   You can omit the registry name if it is "standard".\n\n   $ aqua g cli/cli\n   - name: cli/cli@v2.2.0\n\n   With "-f" option, you can pass packages.\n\n   $ aqua g -f packages.txt # list of <registry name>,<package name>\n   - name: cli/cli@v2.2.0\n   - name: junegunn/fzf@0.28.0\n   - name: tfmigrator/cli@v0.2.1\n\n   $ cat packages.txt | aqua g -f -\n   - name: cli/cli@v2.2.0\n   - name: junegunn/fzf@0.28.0\n   - name: tfmigrator/cli@v0.2.1\n\n   $ aqua list | aqua g -f - # Generate configuration to install all packages\n\n   You can omit the registry name if it is "standard".\n\n   echo "cli/cli" | aqua g -f -\n   - name: cli/cli@v2.2.0\n\n   You can select a version interactively with "-s" option.\n   By default, aqua g -s will only display 30 versions of package.\n   Use --limit/-l to change it. Non-positive number refers to no limit.\n\n   # Display 30 versions of selected by default\n   $ aqua g -s\n   # Display all versions of selected package\n   $ aqua g -s -l -1\n   # Display 5 versions of selected package\n   $ aqua g -s -l 5\n\n   The option "-pin" is useful to prevent the package from being updated by Renovate.\n\n   $ aqua g -pin cli/cli\n   - name: cli/cli\n     version: v2.2.0\n\n   With -detail option, aqua outputs additional information such as description and link.\n\n   $ aqua g -detail cli/cli\n   - name: cli/cli@v2.2.0\n     description: GitHub\u2019s official command line tool\n     link: https://github.com/cli/cli\n\n   With -g option, aqua reads a first global configuration file.\n\n   $ aqua g -g cli/cli\n\n   You can add packages to a first global configuration file with -g and -i option.\n\n   $ aqua g -g -i cli/cli\n\n\nOPTIONS:\n   -f value                 the file path of packages list. When the value is "-", the list is passed from the standard input\n   -i                       Insert packages to configuration file (default: false)\n   --pin                    Pin version (default: false)\n   -g                       Insert packages in a global configuration file (default: false)\n   --detail, -d             Output additional fields such as description and link (default: false) [$AQUA_GENERATE_WITH_DETAIL]\n   -o value                 inserted file\n   --select-version, -s     Select the installed version interactively. Default to display 30 versions, use --limit/-l to change it. (default: false)\n   --limit value, -l value  The maximum number of versions. Non-positive number refers to no limit. (default: 30)\n   --help, -h               show help\n')),(0,i.yg)("h2",{id:"aqua-init"},"aqua init"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'$ aqua help init\nNAME:\n   aqua init - Create a configuration file if it doesn\'t exist\n\nUSAGE:\n   aqua init [command options][<created file path. The default value is "aqua.yaml">]\n\nDESCRIPTION:\n   Create a configuration file if it doesn\'t exist\n   e.g.\n   $ aqua init # create "aqua.yaml"\n   $ aqua init foo.yaml # create foo.yaml\n\nOPTIONS:\n   --help, -h  show help\n')),(0,i.yg)("h2",{id:"aqua-update-aqua"},"aqua update-aqua"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua help update-aqua\nNAME:\n   aqua update-aqua - Update aqua\n\nUSAGE:\n   aqua update-aqua [command options]\n\nDESCRIPTION:\n   Update aqua.\n\n   e.g.\n   $ aqua update-aqua [version]\n\n   aqua is installed in $AQUA_ROOT_DIR/bin.\n   By default the latest version of aqua is installed, but you can specify the version with argument.\n\n   e.g.\n   $ aqua update-aqua # Install the latest version\n   $ aqua update-aqua v1.20.0 # Install v1.20.0\n\n\nOPTIONS:\n   --help, -h  show help\n")),(0,i.yg)("h2",{id:"aqua-update-checksum"},"aqua update-checksum"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua help update-checksum\nNAME:\n   aqua update-checksum - Create or Update aqua-checksums.json\n\nUSAGE:\n   aqua update-checksum [command options]\n\nDESCRIPTION:\n   Create or Update aqua-checksums.json.\n\n   e.g.\n   $ aqua update-checksum\n\n   By default aqua doesn't update aqua-checksums.json of the global configuration.\n   If you want to update them too,\n   please set \"-a\" option.\n\n   $ aqua update-checksum -a\n\n   By default, aqua update-checksum doesn't remove existing checksums even if they aren't unused.\n   If -prune option is set, aqua unused checksums would be removed.\n\n   $ aqua update-checksum -prune\n\n\nOPTIONS:\n   --all, -a   Create or Update all aqua-checksums.json including global configuration (default: false)\n   --deep      This flag was deprecated and had no meaning from aqua v2.0.0. This flag will be removed in aqua v3.0.0. https://github.com/aquaproj/aqua/issues/1769 (default: false)\n   --prune     Remove unused checksums (default: false)\n   --help, -h  show help\n")),(0,i.yg)("h2",{id:"aqua-which"},"aqua which"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'$ aqua help which\nNAME:\n   aqua which - Output the absolute file path of the given command\n\nUSAGE:\n   aqua which [command options]<command name>\n\nDESCRIPTION:\n   Output the absolute file path of the given command\n   e.g.\n   $ aqua which gh\n   /home/foo/.aqua/pkgs/github_release/github.com/cli/cli/v2.4.0/gh_2.4.0_macOS_amd64.tar.gz/gh_2.4.0_macOS_amd64/bin/gh\n\n   If the command isn\'t found in the configuration files, aqua searches the command in the environment variable PATH\n\n   $ aqua which ls\n   /bin/ls\n\n   If the command isn\'t found, exits with non zero exit code.\n\n   $ aqua which foo\n   FATA[0000] aqua failed                                   aqua_version=0.8.6 error="command is not found" exe_name=foo program=aqua\n\n   If you want the package version, "--version" option is useful.\n\n   $ aqua which --version gh\n   v2.4.0\n\n\nOPTIONS:\n   --version, -v  Output the given package version (default: false)\n   --help, -h     show help\n')),(0,i.yg)("h2",{id:"aqua-remove"},"aqua remove"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'$ aqua help remove\nNAME:\n   aqua remove - Uninstall packages\n\nUSAGE:\n   aqua remove [command options][<registry name>,]<package name> [...]\n\nDESCRIPTION:\n   Uninstall packages.\n\n   e.g.\n   $ aqua rm --all\n   $ aqua rm cli/cli direnv/direnv\n\n   Note that this command remove files from AQUA_ROOT_DIR/pkgs, but doesn\'t remove packages from aqua.yaml and doesn\'t remove files from AQUA_ROOT_DIR/bin.\n\n   If you want to uninstall packages of non standard registry, you need to specify the registry name too.\n\n   e.g.\n   $ aqua rm foo,suzuki-shunsuke/foo\n\n   Limitation:\n   "http" and "go_install" packages can\'t be removed.\n\n\nOPTIONS:\n   --all, -a   uninstall all packages (default: false)\n   -i          Select packages with a Fuzzy Finder (default: false)\n   --help, -h  show help\n')),(0,i.yg)("h2",{id:"aqua-cp"},"aqua cp"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'$ aqua help cp\nNAME:\n   aqua cp - Copy executable files in a directory\n\nUSAGE:\n   aqua cp [command options]<command name> [<command name> ...]\n\nDESCRIPTION:\n   Copy executable files in a directory.\n\n   e.g.\n   $ aqua cp gh\n   $ ls dist\n   gh\n\n   You can specify the target directory by -o option.\n\n   $ aqua cp -o ~/bin terraform hugo\n\n   If you don\'t specify commands, all commands are copied.\n\n   $ aqua cp\n\n   You can also copy global configuration files\' commands with "-a" option.\n\n   $ aqua cp -a\n\n   You can filter copied commands with package tags.\n\n   e.g.\n   $ aqua cp -t foo # Copy only packages having a tag "foo"\n   $ aqua cp --exclude-tags foo # Copy only packages not having a tag "foo"\n\n\nOPTIONS:\n   -o value                destination directory (default: "dist")\n   --all, -a               install all aqua configuration packages (default: false)\n   --tags value, -t value  filter installed packages with tags\n   --exclude-tags value    exclude installed packages with tags\n   --help, -h              show help\n')),(0,i.yg)("h2",{id:"aqua-info"},"aqua info"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua help info\nNAME:\n   aqua info - Show information\n\nUSAGE:\n   aqua info [command options]\n\nDESCRIPTION:\n   Show information.\n   e.g.\n   $ aqua info\n\nOPTIONS:\n   --help, -h  show help\n")),(0,i.yg)("h2",{id:"aqua-generate-registry"},"aqua generate-registry"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua help generate-registry\nNAME:\n   aqua generate-registry - Generate a registry's package configuration\n\nUSAGE:\n   aqua generate-registry [command options]<package name>\n\nDESCRIPTION:\n   Generate a template of Registry package configuration.\n\n   Note that you probably fix the generate code manually.\n   The generate code is not perfect and may include the wrong configuration.\n   It is just a template.\n\n   e.g.\n\n   $ aqua gr cli/cli # Outputs the configuration.\n   packages:\n     - type: github_release\n       repo_owner: cli\n       repo_name: cli\n       asset: gh_{{trimV .Version}}_{{.OS}}_{{.Arch}}.{{.Format}}\n       format: tar.gz\n       description: GitHub\u2019s official command line tool\n       replacements:\n         darwin: macOS\n       overrides:\n         - goos: windows\n           format: zip\n       supported_envs:\n         - darwin\n         - linux\n         - amd64\n       rosetta2: true\n\n   By default, aqua gets the information from the latest GitHub Releases.\n   You can specify a specific package version.\n\n   e.g.\n\n   $ aqua gr cli/cli@v2.0.0\n\n   By default, aqua gr gets all GitHub Releases to generate version_overrides.\n   You can limit the number of GitHub Releases by --limit.\n\n   e.g.\n\n   $ aqua gr --limit 100 suzuki-shunsuke/tfcmt\n\n   If --out-testdata is set, aqua inserts testdata into the specified file.\n\n   e.g.\n\n   $ aqua gr --out-testdata testdata.yaml suzuki-shunsuke/tfcmt\n\n   If -cmd is set, aqua sets files.\n\n   e.g.\n\n   $ aqua gr -cmd gh cli/cli\n\n     files:\n       - name: gh\n\n   You can specify multiple commands with commas \",\".\n\n   e.g.\n\n   $ aqua gr -cmd age,age-keygen FiloSottile/age\n\n     files:\n       - name: age\n       - name: age-keygen\n\n\nOPTIONS:\n   --out-testdata value     A file path where the testdata is outputted\n   --cmd value              A list of commands joined with commas ','\n   --limit value, -l value  the maximum number of versions (default: 0)\n   --deep                   This flag was deprecated and had no meaning from aqua v2.15.0. This flag will be removed in aqua v3.0.0. https://github.com/aquaproj/aqua/issues/2351 (default: false)\n   --help, -h               show help\n")),(0,i.yg)("h2",{id:"aqua-list"},"aqua list"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua help list\nNAME:\n   aqua list - List packages in Registries\n\nUSAGE:\n   aqua list [command options]\n\nDESCRIPTION:\n   Output the list of packages in registries.\n   The output format is <registry name>,<package name>\n\n   e.g.\n   $ aqua list\n   standard,99designs/aws-vault\n   standard,abiosoft/colima\n   standard,abs-lang/abs\n   ...\n\n   If the option -installed is set, the command lists only installed packages.\n\n   $ aqua list -installed\n   standard,golangci/golangci-lint,v1.56.2\n   standard,goreleaser/goreleaser,v1.24.0\n   ...\n\n   By default, the command doesn't list global configuration packages.\n   If you want to list global configuration packages too, please set the option -a.\n\n   $ aqua list -installed -a\n\n\nOPTIONS:\n   --installed  List installed packages (default: false)\n   --all, -a    List global configuration packages too (default: false)\n   --help, -h   show help\n")),(0,i.yg)("h2",{id:"aqua-completion"},"aqua completion"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua help completion\nNAME:\n   aqua completion - Output shell completion script for bash, zsh, or fish\n\nUSAGE:\n   aqua completion command [command options] \n\nDESCRIPTION:\n   Output shell completion script for bash, zsh, or fish.\n   Source the output to enable completion.\n\n   e.g.\n\n   .bash_profile\n\n   if command -v aqua &> /dev/null; then\n     source <(aqua completion bash)\n   fi\n\n   .zprofile\n\n   if command -v aqua &> /dev/null; then\n     source <(aqua completion zsh)\n   fi\n\n   fish\n\n   aqua completion fish > ~/.config/fish/completions/aqua.fish\n\n\n")),(0,i.yg)("h2",{id:"aqua-exec"},"aqua exec"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'$ aqua help exec\nNAME:\n   aqua exec - Execute tool\n\nUSAGE:\n   aqua exec [command options]<executed command> [<arg> ...]\n\nDESCRIPTION:\n   Basically you don\'t have to use this command, because this is used by aqua internally. aqua-proxy invokes this command.\n   When you execute the command installed by aqua, "aqua exec" is executed internally.\n\n   e.g.\n   $ aqua exec -- gh version\n   gh version 2.4.0 (2021-12-21)\n   https://github.com/cli/cli/releases/tag/v2.4.0\n\nOPTIONS:\n   --help, -h  show help\n')))}g.isMDXComponent=!0}}]);