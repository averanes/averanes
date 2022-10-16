"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[488],{2488:function(e,t,i){i.r(t),i.d(t,{About:function(){return w}});var a=i(8735),n=i(3880),o=i(9439),r=i(2791),s=i(6332),d=i(3433),c=i(2504),l=i(1413),p=i(5987),u=i(184),h=["title"],m=["title"],g=function(e){var t=e.title,i=(0,p.Z)(e,h);return(0,u.jsx)(a.X6,(0,l.Z)((0,l.Z)({fontSize:"2xl",fontWeight:"bold"},i),{},{"data-aos":"fade-down",children:t}))},f=function(e){var t=e.title,i=(0,p.Z)(e,m);return(0,u.jsx)(a.xv,(0,l.Z)((0,l.Z)({fontWeight:"semibold",fontSize:"lg"},i),{},{"data-aos":"fade-down",children:t}))},b=function(e){var t=e.expanded,i=e.id,n=e.idx,l=e.title,p=e.subTitle,h=e.date,m=e.content,g=e.onChange,b=(0,r.useMemo)((function(){return t.includes(n)}),[t,n]),y=(0,r.useState)(!1),v=(0,o.Z)(y,2),x=v[0],j=v[1],w=(0,r.useMemo)((function(){return m.length>1&&!b||!b&&x}),[x,b,m]);return(0,r.useEffect)((function(){var e,t="first-point-".concat(i),a=document.getElementById(t);a&&(a.scrollWidth>=(null===(e=a.parentElement)||void 0===e?void 0:e.scrollWidth)?j(!0):j(!1))}),[i]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(s.KF,{as:a.xu,p:"0",disabled:!0,onClick:void 0,_hover:{bg:"transparent"},overflow:"hidden",display:"block",children:[(0,u.jsx)(f,{title:l,fontWeight:"semibold"}),(0,u.jsx)(a.xv,{"data-aos":"fade",children:p}),(0,u.jsx)(a.xv,{color:"gray","data-aos":"fade-up",fontSize:"sm",fontWeight:"semibold",children:h}),(0,u.jsxs)(a.kC,{pt:"2",justifyContent:"space-between","data-aos":"fade",children:[b?(0,u.jsx)(a.QI,{listStylePosition:"outside",pl:"1",children:(0,u.jsx)(a.xv,{as:"li",isTruncated:!t.includes(n),children:m[0]})}):(0,u.jsx)(a.xv,{id:"first-point-".concat(i),isTruncated:!t.includes(n),children:m[0]}),w&&(0,u.jsx)(c.zx,{flexShrink:0,id:"see-more-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.8",onClick:function(){if(t.includes(n)){var e=t.filter((function(e){return e!==n}));g(e)}else g([].concat((0,d.Z)(t),[n]))},children:"See more"})]})]}),(0,u.jsxs)(s.Hk,{p:"0",pl:"1",children:[(0,u.jsx)(a.QI,{listStylePosition:"outside",children:m.slice(1).map((function(e,t){return(0,u.jsx)(a.xv,{as:"li",children:e},"".concat(l,"-cont-").concat(t))}))}),t.includes(n)&&(0,u.jsx)(a.kC,{justifyContent:"flex-end",children:(0,u.jsx)(c.zx,{id:"see-less-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.7",onClick:function(){var e=t.filter((function(e){return e!==n}));g(e)},children:"See less"})})]})]})},y=function(){var e=(0,r.useState)([]),t=(0,o.Z)(e,2),i=t[0],a=t[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g,{title:"Education"}),(0,u.jsx)("br",{}),(0,u.jsx)(s.UQ,{pt:"2",allowMultiple:!0,index:i,id:"education",children:n.rH.about.educations.map((function(e,t){return(0,u.jsx)(s.Qd,{p:"0",border:"0",mb:"4",children:(0,u.jsx)(b,{title:e.school,subTitle:e.degree,date:e.duration,content:e.content,id:e.id,idx:t,onChange:a,expanded:i})},"panel-".concat(e.school,"-").concat(e.degree))}))})]})},v=function(){var e=(0,r.useState)([]),t=(0,o.Z)(e,2),i=t[0],a=t[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g,{title:"Experiences"}),(0,u.jsx)("br",{}),(0,u.jsx)(s.UQ,{pt:"2",allowMultiple:!0,index:i,children:n.rH.about.experiences.map((function(e,t){return(0,u.jsx)(s.Qd,{p:"0",border:"0",mb:"4",children:(0,u.jsx)(b,{id:e.id,title:e.company,subTitle:e.position,date:e.duration,content:e.description,idx:t,onChange:a,expanded:i})},"panel-".concat(e.company))}))})]})},x=i(3362),j=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g,{title:"Skills",pb:"2"}),(0,u.jsx)("br",{}),n.rH.about.skills.map((function(e){return(0,u.jsxs)(a.xu,{p:"0",mb:"4",children:[(0,u.jsx)(f,{title:e.title}),(0,u.jsx)(x.$,{id:"skills-tags-".concat(e.title),tags:e.tools})]},"skills-".concat(e.title))}))]})},w=function(){(0,n.r0)(n.nl.About);return(0,u.jsxs)(a.xu,{children:[(0,u.jsxs)(a.kC,{direction:{base:"column",md:"row"},gap:{base:16,md:6,lg:12},mt:"16",justifyContent:"space-between",children:[(0,u.jsx)(a.xu,{flex:"0.6",flexShrink:"0",overflow:"hidden",children:(0,u.jsx)(y,{})}),(0,u.jsx)(a.xu,{flex:"0.6",overflow:"hidden",children:(0,u.jsx)(v,{})})]}),(0,u.jsx)(a.xu,{pt:"16",children:(0,u.jsx)(j,{})})]})}},3880:function(e,t,i){i.d(t,{VY:function(){return M},nl:function(){return n},rH:function(){return P},r0:function(){return T}});var a,n,o=i(5987),r=i(1413),s=i(9439),d=i(4942),c=i(2791),l=i(8735),p=i(63),u=JSON.parse('{"name":"Adri\xe1n Veranes Fonseca","logoType":{"mobile":"AVF","desktop":"Adri\xe1n Veranes Fonseca"},"mainPicture":"assets/landing/face.jpg","mainPictureJPG":"assets/landing/face.jpg","pronunciation":"","audioFile":"assets/xxx.mp3","cssVarPrefix":"hp","email":"averanes@gmail.com","linkedin":"https://www.linkedin.com/in/averanes","github":"https://github.com/averanes","resume":"https://drive.google.com/file/d/17n2YSGfKgcxAr8GawMHOLEDuxbHeALep/view?usp=sharing","resume_es":"https://drive.google.com/file/d/1KrBuNF-JSnuj8f8cQu8qS0BvG-7mJbeU/view?usp=sharing","socials":[{"type":"linkedin","link":"https://www.linkedin.com/in/averanes"},{"type":"github","link":"https://github.com/averanes"},{"type":"mail","link":"mailto:averanes@gmail.com"}]}'),h=JSON.parse('{"headline":"Hello, I\'m Adrian Veranes Fonseca.","picture":"assets/landing/face.webp","jpg":"assets/landing/face.jpg"}'),m=JSON.parse('[{"id":"featured-project-document-manager","title":"Document Manger","year":"Jul 2022 - Present","location":"Spain","tags":["Vue","Vuex","Vuetify","SPA","PWA","Laravel","Api Rest","JWT","FFMpeg Video Converter","Image Optimizer","Adobe PDF Embed API","WorkBox","HLS","VideoJS","Queues","Laravel Horizon"],"demo":"","web":"","github":"","description":"This application allows the viewing and organization of videos, documents and other types of files. It allows you to filter and find the elements in an agile way and works very smoothly, Netflix style. It has content rating options, save to watch later, favorites, etc. In addition, it allows elements to be grouped by different criteria and when new multimedia is added to the system, related elements are automatically linked. From the backoffice you can fully manage the design of the application and the architecture of the information to be displayed. In addition, the app optimizes the images and automatically converts the videos, to view them in streaming with different qualities and sizes, which improves the user experience.","readMore":"","image":"assets/featured-projects/Document-Manager-Home.webp","jpg":"assets/featured-projects/Document-Manager-Home.jpg"},{"id":"featured-project-multi-game","title":"Multi Game App","year":"Apr 2022 - Present","location":"Spain","tags":["Vue","Vuex","Vuetify","SPA","Laravel","Api Rest","JWT","Construct","WebSocket","Pusher"],"demo":"","github":"","description":"This is a gamification application that is used as a complement for the training of personnel from different companies. It is a multi-game, multi-company and multi-user app that allows you to integrate new games in a simple way, which are accessed in a personalized way for each company, and this is achieved in a very short time from the app administrator. Initially we have built and integrated games created with Construct or developed with Vue, so it use socket for updating the information in real time. In addition, the app has a great content management system and a high degree of customization, which allows each company to have its own customization of the application.","readMore":"","image":"assets/featured-projects/MultiGame-Home.webp","jpg":"assets/featured-projects/MultiGame-Home.jpg"},{"id":"featured-project-itp-aero","title":"ITP Aero \u2013 Recognizing people","year":"Nov 2021 - Present","location":"Spain - UK - Mexico - Malta - India","tags":["Vue","Vuex","Vuetify","Wysiwyg","SPA","Laravel","Api Rest","JWT","Flutter","Android","Apple"],"demo":"","github":"","description":"Project developed for the company ITP Aero (aeronautical sector), in which its more than 4,000 workers participate in all locations. It is a gamification system for the creation of recognition for workers and the voting and selection of the best. Here the workers are trained on the values of the organization and recognitions are made between the different areas of the company. Then proceed to the voting of said recognitions, where the workers are assigned different medals. The app has an agile filter and search system, a content and configuration management system, reports, a dashboard with summarized information, etc.","readMore":"","image":"assets/featured-projects/ITP-Aero-Tablet-Home.webp","jpg":"assets/featured-projects/ITP-Aero-Tablet-Home.jpg"},{"id":"featured-project-santa-lucia","title":"Santa Lucia - Building my mission","year":"Sept 2021 - Present","location":"Spain","demo":"","web":"https://irisglobalapp.digitabilities.com","github":"","tags":["Vue","Vuex","Vuetify","Wysiwyg","SPA","Laravel","Api Rest","JWT","Fluter","Android","Apple"],"description":"Project developed for the company Santa Luc\xeda, where approximately 1500 workers belonging to the groups of Iris Global, Iris Assistance, Iris Global Asistencia and Iris Global Seguros y Reaseguros participate in an event in stages where the personal mission is created, which must be aligned to that of the company and voting is carried out between the different missions, by areas, within the groups. The application is a gamification where points are accumulated by making certain advances, in addition to obtaining different types of coins granted by the vote of the companions. The app has a powerful content management system, reports, dashboard with summarized information, score graphs, etc.","readMore":"","image":"assets/featured-projects/Santa Lucia-Iris-Global-Home.webp","jpg":"assets/featured-projects/Santa Lucia-Iris-Global-Home.jpg"},{"id":"featured-project-bmw-qcloud","title":"BMW DOCUMENT AND MULTIMEDIA MANAGER","year":"April 2021 - Present","location":"Spain","demo":"","web":"https://bmw-qcloud.com","github":"","tags":["Laravel","Html","Css","JavaScript","Fluter","Android","Apple","Push Notifications","Firebase"],"description":"This is a project that has been running for more than 6 years and I have been in charge of its maintenance since my arrival at the company: 3 Weeks Consulting.\\nIt is a content management system developed for BMW Ib\xe9rica where approximately 3000 users access more than 5000 documents. This system manages the documentation, multimedia and online events of BMW in Spain. In addition to content management, easy filtering and searching, it has reports of different metrics, Push Notifications, WebCast with chat and applications in the Play Store and Google Play.","image":"assets/featured-projects/BMW-QCLoud-Home.webp","jpg":"assets/featured-projects/BMW-QCLoud-Home.jpg"}]'),g=JSON.parse('[{"id":"other-project-ambassador","title":"Internet&Idee Ambassador","year":"Jan 2021 - Apr 2021","github":"","demo":"","tags":["Spring","JMS","Apache ActiveMQ Artemis","Spring Cloud OpenFeign","Quartz Job Scheduler","Maven","JUnit","Magento","Postgresql"],"description":"This was a project that allowed the migration of information between 2 different systems (initially: a proprietary system and a Magento system). This allowed 2 different market-type systems to keep their inventories and operations synchronized. The project was developed to allow integration to the migration, to any other system, in a simple way.","image":"assets/other-projects/Internet-Idee-logo.webp","jpg":"assets/other-projects/Internet-Idee-logo.jpeg"},{"id":"other-project-igoodi","title":"I&I - IGOODI - GET YOUR FREE AVATAR","year":"Sept 2020 - Feb 2021","github":"","demo":"https://xd.adobe.com/view/e71cc001-7c64-462d-9fab-7b7347d999da-b24f","tags":["Vue","Nuxt","Vuetify","SPA","PWA","SSR","GraphQL","Cognito","Stripe","Mobile First"],"description":"I participated as a frontend developer in the development of this application, working for the Italian company Internet & Idee. The app is a market, the first Avatar-Commerce in the world, where personalized products are offered, after scanning the user\'s body using a modern disruptive technology and to create a photorealistic 3D copy.","image":"assets/other-projects/Igoodi-Banner.webp","jpg":"assets/other-projects/Igoodi-Banner.jpeg"},{"id":"other-project-discover-tirana","title":"I&I - Discover Tirana","year":"Aug 2020 - Nov 2020","github":"","demo":"","tags":["Vue","Vuetify","SPA","PWA","JWT","Laravel","Python","IA Recommended System","Microservices"],"description":"This was the 1st project that I developed in the Italian company Internet & Idee. It was a search and information system about places in Tirana (capital of Albania). Here I worked as a Full Stack Developer. I used Vue for the frontend and Laravel for the backend. Later, for my master\'s thesis in Italy, I developed a place recommendation system in python (Singular value decomposition), which was integrated with the application through microservices.","image":"assets/other-projects/I-I-Discover-Tirana-home.webp","jpg":"assets/other-projects/I-I-Discover-Tirana-home.jpg"}]'),f=JSON.parse('{"educations":[{"id":"edu-1","school":"University of Calabria","degree":"Master of Science in Computer Science","duration":"2018 - 2020","content":["GPA: 101/110","Courses: IA, Distributed Systems, Advanced Algorithms, ..."]},{"id":"edu-2","school":"Universidad Aut\xf3noma de Madrid","degree":"Erasmus - Computer Science","duration":"2020","content":["Courses: Automated Software Development, Machine learning"]},{"id":"edu-3","school":"Universidad de las Ciencias Inform\xe1ticas","degree":"Bachelors in Computer Engineering","duration":"2006 - 2011","content":["GPA: 4.9/5","Courses: Data Structures, OOP, Algorithms, Software Engineering, Computer Networks, ..."]}],"experiences":[{"id":"exp-1","company":"3Weeks Consulting (Espa\xf1a)","position":"Full Stack Engineer","duration":"Apr 2021 - Present","description":["Here we have developed products for important national and international companies such as BMW, Santa Luc\xeda, Iris Global, ITP Aero, Indra, AstraZeneca, ..."]},{"id":"exp-2","company":"Internet & Idee (Italia)","position":"Full Stack Developer","duration":"Aug 2020 - Apr 2021","description":["I worked as a Full Stack Developer specialized in Front End using Vue, Nuxt, Vuetify, PWA, SPA, UWA, Cognito, Api Rest, GraphQL, Spring, Laravel, Stripe, among other technologies."]},{"id":"exp-3","company":"Adoble (Cuba)","position":"Software Engineer Chief","duration":"Jan 2019 - Jun 2019","description":["I started as a freelancer co-founding Adobe company, dedicated to creating mobile applications and providing solutions for them.","Here we developed several very popular applications for IOS and Android in Cuba that could be found in Google Play and App Store under the AdobleCuba label."]},{"id":"exp-4","company":"Universidad de las Ciencias Inform\xe1ticas","position":"Programming Specialist","duration":"Sep 2011 - Jul 2013","description":["Working at the University of Informatics Sciences, I developed, together with a great team, the main system of the National Bank of Cuba."]}],"skills":[{"title":"Programming","tools":["JavaScript","Java","PHP","TypeScript","Python","SQL","WebSockets","Push Notifications","OAuth"]},{"title":"Web","tools":["Vue","Vuex","Nuxt","HTML/CSS","React","Api Rest","GraphQL"]},{"title":"Databases","tools":["MySQL","MariaDB","Postgres","MongoDB","Redis","Firebase"]},{"title":"OS & Tools","tools":["Windows","Linux","Git","Agile (Scrum)","Docker"]}],"blog":[{"id":"blog-1","title":"A beginner\'s guide to github","link":""},{"id":"blog-2","title":"User Experience Design \u2013 A little more than just design","link":""}]}'),b=i(7034),y=i(7838),v=i(184),x=["children"],j=["node"],w=["node"],S=["node"],A=["ordered"],I=["node"],k=["ordered"],P={common:u,landing:h,featuredProjects:m,otherProjects:g,about:f};!function(e){e.Landing="landing",e.About="about"}(n||(n={}));var C=(a={},(0,d.Z)(a,n.Landing,b),(0,d.Z)(a,n.About,y),a),T=function(e){var t=(0,c.useState)({landing:"",about:""}),i=(0,s.Z)(t,2),a=i[0],n=i[1];return(0,c.useEffect)((function(){fetch(C[e]).then((function(e){return e.text()})).then((function(t){return n((function(i){return(0,r.Z)((0,r.Z)({},i),{},(0,d.Z)({},e,t))}))}))}),[e]),a},M=function(e){var t=e.children,i=(0,o.Z)(e,x);return(0,v.jsx)(l.Kq,{spacing:"4",children:(0,v.jsx)(p.D,{components:{p:function(e){e.node;var t=(0,o.Z)(e,j);return(0,v.jsx)(l.xv,(0,r.Z)((0,r.Z)({},i),t))},a:function(e){e.node;var t=(0,o.Z)(e,w);return(0,v.jsx)(l.rU,(0,r.Z)({href:t.href,target:"_blank",color:"primary.200"},t))},ul:function(e){e.node;var t=(0,o.Z)(e,S),i=(t.ordered,(0,o.Z)(t,A));return(0,v.jsx)(l.QI,(0,r.Z)((0,r.Z)({},i),{},{"data-aos":"fade",listStylePosition:"inside",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",listStyleType:"'\u2023 '",fontWeight:"600"}))},li:function(e){e.node;var t=(0,o.Z)(e,I),i=(t.ordered,(0,o.Z)(t,k));return(0,v.jsx)("li",(0,r.Z)({"data-aos":"flip-up","data-aos-delay":100*t.index+400},i))}},children:t})})}},3362:function(e,t,i){i.d(t,{$:function(){return o}});var a=i(8735),n=i(184),o=function(e){var t=e.id,i=e.tags,o=e.size,r=void 0===o?"sm":o;return(0,n.jsx)(a.kC,{py:"2",wrap:"wrap",gap:"4",children:i.map((function(e,i){return(0,n.jsx)(a.xu,{"data-aos":"flip-left","data-aos-delay":50*i,children:(0,n.jsx)(a.Ct,{transition:"0.2s ease-in-out",transitionProperty:"background, color",_hover:{color:"white",bg:"primary.500"},textTransform:"none",colorScheme:"gray",borderRadius:"md",px:"8px",py:"4px",fontSize:r,fontWeight:"600",children:e})},"".concat(t,"-tag-").concat(e))}))})}},7838:function(e,t,i){e.exports=i.p+"static/media/about.08955d32c8450b0da932.md"},7034:function(e,t,i){e.exports=i.p+"static/media/landing.dde44febe15fa6e6e636.md"}}]);
//# sourceMappingURL=488.fee85434.chunk.js.map