(function(){"use strict";var e={424:function(e,t,n){var a=n(751),i=n(641);const o={id:"app"};function c(e,t,n,a,c,r){const s=(0,i.g2)("router-view"),l=(0,i.g2)("ParticlesBackgroundView");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.bF)(s),(0,i.bF)(l)])}const r={id:"particles-background"};function s(e,t){const n=(0,i.g2)("vue-particles");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(n,{color:"#74b970",particleOpacity:.1,particlesNumber:100,shapeType:"circle",particleSize:5,linesColor:"#84d7a6",linesWidth:1,lineLinked:!0,lineOpacity:.5,linesDistance:150,moveSpeed:10,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"})])}var l=n(262);const u={},d=(0,l.A)(u,[["render",s],["__scopeId","data-v-13288bab"]]);var f=d,v={name:"App",components:{ParticlesBackgroundView:f},mounted(){console.log("App component mounted")}};const p=(0,l.A)(v,[["render",c]]);var h=p,g=n(166);const m={class:"about-me"};function b(e,t,n,a,o,c){const r=(0,i.g2)("NavbarView"),s=(0,i.g2)("ParticlesBackgroundView");return(0,i.uX)(),(0,i.CE)("div",m,[(0,i.bF)(r),(0,i.bF)(s)])}const k={class:"navbar"},w={class:"nav-list"},E={class:"nav-item"},y={class:"nav-item"},_={class:"nav-item"};function C(e,t,n,a,o,c){const r=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("nav",k,[(0,i.Lk)("ul",w,[(0,i.Lk)("li",E,[(0,i.bF)(r,{to:"/cv",class:"nav-link"},{default:(0,i.k6)((()=>[(0,i.eW)("CV")])),_:1})]),(0,i.Lk)("li",y,[(0,i.bF)(r,{to:"/about-me",class:"nav-link"},{default:(0,i.k6)((()=>[(0,i.eW)("About Me")])),_:1})]),(0,i.Lk)("li",_,[(0,i.bF)(r,{to:"/projects",class:"nav-link"},{default:(0,i.k6)((()=>[(0,i.eW)("Projects")])),_:1})])])])}var L={name:"NavbarView"};const A=(0,l.A)(L,[["render",C],["__scopeId","data-v-4875150c"]]);var V=A,X={name:"AboutMeView-View",components:{NavbarView:V,ParticlesBackgroundView:f}};const x=(0,l.A)(X,[["render",b],["__scopeId","data-v-6fbfbe09"]]);var F=x;const I={class:"cv"};function P(e,t,n,a,o,c){const r=(0,i.g2)("NavbarView"),s=(0,i.g2)("AboutView"),l=(0,i.g2)("ExperiencesView"),u=(0,i.g2)("EducationsView"),d=(0,i.g2)("ParticlesBackgroundView");return(0,i.uX)(),(0,i.CE)("div",I,[(0,i.bF)(r),(0,i.bF)(s),(0,i.bF)(l),(0,i.bF)(u),(0,i.bF)(d)])}const M=(0,i.Fv)('<div class="aboutme" data-v-3f9c73f4><h1 data-v-3f9c73f4>Tommaso Ramella</h1><h2 data-v-3f9c73f4>Data scientist, Ph.D. in Sociology</h2><p class="description" data-v-3f9c73f4>I am a data scientist, with a rich foundation in <strong data-v-3f9c73f4>longitudinal and time-series forecasting</strong>, and <strong data-v-3f9c73f4>causal inference</strong>. During my PhD and postdoc in Economics, I applied <strong data-v-3f9c73f4>econometrics and causal inference</strong> techniques on a wide range of labour-market related topics: unemployment, employability, well-being at work, education. Besides my academic resaerch, I also got involved in private and political projects, which generally consisted in evaluatign the causal effect of policies. My path brought me to focus on the renewable energy market, specializing in time-series forecasting with econometrics and <strong data-v-3f9c73f4>ML and deep learning techniques.</strong> I like to take care of the whole data process, from the data gathering and data cleaning, to the statisical modeling and testing. Now, the focus os my work is currently <strong data-v-3f9c73f4>ML-engineering</strong>, which includes training models, building the libraries and the infrustructure to train them, and put them in production. </p></div><div class="skills" data-v-3f9c73f4><h2 data-v-3f9c73f4>Skills</h2><ul class="topics" data-v-3f9c73f4><li data-v-3f9c73f4>Machine Learning</li><li data-v-3f9c73f4>Deep Learning</li><li data-v-3f9c73f4>Time Series Forecasting</li><li data-v-3f9c73f4>Econometrics</li><li data-v-3f9c73f4>Statistical Analysis</li><li data-v-3f9c73f4>ML Engineering</li></ul><ul class="tools" data-v-3f9c73f4><li data-v-3f9c73f4>Python</li><li data-v-3f9c73f4>Stata</li><li data-v-3f9c73f4>SQL</li><li data-v-3f9c73f4>Git</li></ul></div>',2);function O(e,t){return M}const S={},j=(0,l.A)(S,[["render",O],["__scopeId","data-v-3f9c73f4"]]);var N=j,T=n(33);const B=e=>((0,i.Qi)("data-v-b00f08e8"),e=e(),(0,i.jt)(),e),H={class:"education"},Q=B((()=>(0,i.Lk)("h1",null,"Educations",-1))),D={key:0},K={class:"education-body"},W={key:0,class:"education-images"},q=["src"],z={class:"education-content"},R={class:"education-header"},U={class:"location"},G=["innerHTML"],J={key:1};function Y(e,t,n,a,o,c){return(0,i.uX)(),(0,i.CE)("div",H,[Q,c.filteredEducations.length?((0,i.uX)(),(0,i.CE)("ul",D,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(c.filteredEducations,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id,class:"education-item"},[(0,i.Lk)("div",K,[e.images&&e.images.length?((0,i.uX)(),(0,i.CE)("div",W,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.images,((e,t)=>((0,i.uX)(),(0,i.CE)("img",{key:t,src:e.image,alt:"Education Image",class:"education-image"},null,8,q)))),128))])):(0,i.Q3)("",!0),(0,i.Lk)("div",z,[(0,i.Lk)("div",R,[(0,i.Lk)("h2",null,(0,T.v_)(e.title)+" - "+(0,T.v_)(e.institution),1),(0,i.Lk)("p",null,[(0,i.Lk)("span",U,(0,T.v_)(e.location),1),(0,i.eW)(" - "+(0,T.v_)(e.start_date)+" - "+(0,T.v_)(e.end_date||"Present"),1)])]),(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.descriptions,((e,t)=>((0,i.uX)(),(0,i.CE)("li",{key:t,innerHTML:e.description},null,8,G)))),128))])])])])))),128))])):((0,i.uX)(),(0,i.CE)("p",J,"No education available.")),!o.showAll&&o.educations.length>3?((0,i.uX)(),(0,i.CE)("button",{key:2,onClick:t[0]||(t[0]=e=>o.showAll=!0)},"Show All")):(0,i.Q3)("",!0)])}var Z=n(335),$={data(){return{educations:[],showAll:!1}},created(){this.fetchEducations()},computed:{filteredEducations(){return this.showAll?this.educations:this.educations.slice(0,3)}},methods:{async fetchEducations(){console.log("VUE_APP_API_URL:","https://tommella-cv-prod-ee14d9b8bb74.herokuapp.com/");try{const e=await Z.A.get("https://tommella-cv-prod-ee14d9b8bb74.herokuapp.com/education/");this.educations=e.data}catch(e){console.error(e)}}}};const ee=(0,l.A)($,[["render",Y],["__scopeId","data-v-b00f08e8"]]);var te=ee;const ne=e=>((0,i.Qi)("data-v-b14dd232"),e=e(),(0,i.jt)(),e),ae={class:"experience"},ie=ne((()=>(0,i.Lk)("h1",null,"Experiences",-1))),oe={key:0},ce={class:"experience-body"},re={key:0,class:"experience-images"},se=["src"],le={class:"experience-content"},ue={class:"experience-header"},de={class:"location"},fe=["innerHTML"],ve={key:1};function pe(e,t,n,a,o,c){return(0,i.uX)(),(0,i.CE)("div",ae,[ie,c.filteredExperiences.length?((0,i.uX)(),(0,i.CE)("ul",oe,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(c.filteredExperiences,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id,class:"experience-item"},[(0,i.Lk)("div",ce,[e.images&&e.images.length?((0,i.uX)(),(0,i.CE)("div",re,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.images,((e,t)=>((0,i.uX)(),(0,i.CE)("img",{key:t,src:e.image,alt:"Experience Image",class:"experience-image"},null,8,se)))),128))])):(0,i.Q3)("",!0),(0,i.Lk)("div",le,[(0,i.Lk)("div",ue,[(0,i.Lk)("h2",null,(0,T.v_)(e.title)+" - "+(0,T.v_)(e.company),1),(0,i.Lk)("p",null,[(0,i.Lk)("span",de,(0,T.v_)(e.location),1),(0,i.eW)(" - "+(0,T.v_)(e.start_date)+" - "+(0,T.v_)(e.end_date||"Present"),1)])]),(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.descriptions,((e,t)=>((0,i.uX)(),(0,i.CE)("li",{key:t,innerHTML:e.description},null,8,fe)))),128))])])])])))),128))])):((0,i.uX)(),(0,i.CE)("p",ve,"No experiences available.")),!o.showAll&&o.experiences.length>3?((0,i.uX)(),(0,i.CE)("button",{key:2,onClick:t[0]||(t[0]=e=>o.showAll=!0)},"Show All")):(0,i.Q3)("",!0)])}var he={data(){return{experiences:[],showAll:!1}},created(){this.fetchExperiences()},computed:{filteredExperiences(){return this.showAll?this.experiences:this.experiences.slice(0,3)}},methods:{async fetchExperiences(){try{const e=await Z.A.get("https://tommella-cv-prod-ee14d9b8bb74.herokuapp.com/experience/");console.log(e.data),this.experiences=e.data}catch(e){console.error(e)}}}};const ge=(0,l.A)(he,[["render",pe],["__scopeId","data-v-b14dd232"]]);var me=ge,be={name:"CV-View",components:{NavbarView:V,AboutView:N,ExperiencesView:me,EducationsView:te,ParticlesBackgroundView:f}};const ke=(0,l.A)(be,[["render",P],["__scopeId","data-v-1d0788df"]]);var we=ke;const Ee=(0,i.Lk)("h1",null,"Home Page",-1);function ye(e,t,n,a,o,c){const r=(0,i.g2)("NavbarView");return(0,i.uX)(),(0,i.CE)("div",null,[Ee,(0,i.bF)(r)])}var _e={name:"Home-View",components:{NavbarView:V}};const Ce=(0,l.A)(_e,[["render",ye]]);var Le=Ce;const Ae=[{path:"/",name:"Home-View",component:Le},{path:"/cv",name:"CV-View",component:we},{path:"/about-me",name:"AboutMe-View",component:F}],Ve=(0,g.aE)({history:(0,g.LA)("/tommella-frontend/"),routes:Ae});var Xe=Ve,xe=n(906);(0,a.Ef)(h).use(Xe).use(xe.A).mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var c=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],o=e[u][2];for(var r=!0,s=0;s<a.length;s++)(!1&o||c>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,o<c&&(c=o));if(r){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,i,o]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,c=a[0],r=a[1],s=a[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var u=s(n)}for(t&&t(a);l<c.length;l++)o=c[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkcv_frontend"]=self["webpackChunkcv_frontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(424)}));a=n.O(a)})();
//# sourceMappingURL=app.3815d207.js.map