(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),i=t.n(r),l=(t(9),t(10),t(11),t(12),t(13),t(14),t(15),t(16),t(17),t(18),t(19),t(20),function(e){return c.a.createElement("div",{onClick:e.onClick,className:"button "+e.class},e.value,e.children)}),s=function(){var e=function(e){var a=document.getElementById(e).offsetTop;window.scrollTo({top:a-100,behavior:"smooth"})};return c.a.createElement("div",null,c.a.createElement("div",{className:"header"},c.a.createElement(l,{onClick:function(){return e("about")},value:"About"}),c.a.createElement(l,{onClick:function(){return e("projects")},value:"Projects"}),c.a.createElement(l,{onClick:function(){return e("skills")},value:"Skill Set"}),c.a.createElement(l,{onClick:function(){return e("education")},value:"Education"})))},o=t(3),d=function(e){return c.a.createElement("div",{className:"about-more",onClick:function(){return e.revert()}},c.a.createElement("div",{className:"about-more-block"},"I am a self-driven young professional with a demonstrated history of continued education, problem solving, attention to detail, and process improvement. Skilled in JavaScript, Node.js, Golang, SQL, NoSQL and VBA. Passionate about technology and highly motivated to continuously learn and self-improve, showcased by continued education with Austin Coding Academy with a focus in Full Stack Web Development in addition to a Bachelor of Business Administration in Accounting from St. Edward's University."))},m=function(e){return c.a.createElement("div",{key:"default-resume",id:e.id,className:e.className,onClick:function(){fetch("/api/resume",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return window.open(e.resume)}))}},"DOWNLOAD RESUME")},u=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],r=a[1],i=c.a.createElement(m,{key:"default-resume",className:"about-card-resume"}),l=function(){return r(i)};return Object(n.useEffect)((function(){r(i)}),[]),c.a.createElement("div",{className:"about-card"},c.a.createElement("div",{className:"about-card-wrapper"},c.a.createElement("div",{className:"about-card-photo"}),t,c.a.createElement("div",{className:"about-card-more",onClick:function(){"default-resume"===t.key?r(c.a.createElement(d,{revert:function(){return l()}})):r(i)}},"about me ->")))},v=function(e){return Object(n.useEffect)((function(){}),[]),c.a.createElement("div",{id:"about",className:"content-wrapper"},c.a.createElement("div",{id:"about-background-front"}),c.a.createElement("div",{id:"about-background-back"}),c.a.createElement(u,null))},E=function(e){return c.a.createElement("div",{className:"content-header"},c.a.createElement("div",{className:"about-wrapper"},e.value))},p=function(e){var a={purpose:"Website providing Covid-19 data. ",stack:"React, React-Virtualized, GoLang",link:"https://sars-cov-2-cb.herokuapp.com/"},t={purpose:"Dashboard website utilizing pre-existing database to develop a cashflow visiualization for investors.",stack:"React, Redux, GoLang",link:"https://aca-dashboard-go.herokuapp.com/"},n={purpose:"Electron application that merges all PDF's within a given folder.",stack:"React, GoLang, Electron",link:"https://github.com/cbetori/PDF-Merger"};return c.a.createElement("div",{id:"projects",className:"content-wrapper"},c.a.createElement(E,{value:"PROJECTS"}),c.a.createElement("div",{className:"content-detail"},c.a.createElement("div",{className:"project section-wrapper"},c.a.createElement("div",{className:"project-header project-header-grid"},"Covid-19 Tracker"),c.a.createElement("div",{id:"project-covid",className:"project-image"}),c.a.createElement("div",{className:"project-detail-wrapper"},c.a.createElement("div",{className:"project-detail-header"},"Summary"),c.a.createElement("div",{className:"project-detail"},a.purpose),c.a.createElement("div",{className:"project-detail-header"},"Stack"),c.a.createElement("div",{className:"project-detail"},a.stack),c.a.createElement("a",{className:"project-detail-header",href:a.link},"Link"))),c.a.createElement("div",{className:"project"},c.a.createElement("div",{className:"project-header project-header-grid"},"Investor Dashboard"),c.a.createElement("div",{id:"project-db",className:"project-image"}),c.a.createElement("div",{className:"project-detail-wrapper"},c.a.createElement("div",{className:"project-detail-header"},"Summary"),c.a.createElement("div",{className:"project-detail"},t.purpose),c.a.createElement("div",{className:"project-detail-header"},"Stack"),c.a.createElement("div",{className:"project-detail"},t.stack),c.a.createElement("a",{className:"project-detail-header",href:t.link},"Link"))),c.a.createElement("div",{className:"project"},c.a.createElement("div",{className:"project-header project-header-grid"},"PDF Merger"),c.a.createElement("div",{id:"project-pdf",className:"project-image project-image"}),c.a.createElement("div",{className:"project-detail-wrapper"},c.a.createElement("div",{className:"project-detail-header"},"Summary"),c.a.createElement("div",{className:"project-detail"},n.purpose),c.a.createElement("div",{className:"project-detail-header"},"Stack"),c.a.createElement("div",{className:"project-detail"},n.stack),c.a.createElement("a",{className:"project-detail project-detail-header",href:n.link},"Link")))))},N=function(e){return c.a.createElement("div",{id:"education",className:"content-wrapper"},c.a.createElement(E,{value:"EDUCATION"}),c.a.createElement("div",{className:"content-detail"},c.a.createElement("div",{className:"education-grid"},c.a.createElement("div",{className:"edu-detail eds-detail"},c.a.createElement("div",{className:"edu-title"},"Austin Coding Academy"),c.a.createElement("div",{className:"edu-detail"},"September 2018 - May 2019"),c.a.createElement("div",{className:"edu-detail"},"Full Stack Web Development"),c.a.createElement("a",{className:"edu-detail",href:"https://austincodingacademy.com/"},"https://austincodingacademy.com/")),c.a.createElement("div",{className:"logo aca"}),c.a.createElement("div",{className:"edu-detail aca-detail"},c.a.createElement("div",{className:"edu-title"},"St. Edward's University"),c.a.createElement("div",{className:"edu-detail"},"August 2011- May 2015"),c.a.createElement("div",{className:"edu-detail"},"Bachelors of Business Administration in Accounting"),c.a.createElement("a",{className:"edu-detail",href:"https://www.stedwards.edu/"},"https://www.stedwards.edu/")),c.a.createElement("div",{className:"logo eds"}))))},h=function(e){var a=function(e){var a=e.map((function(e){return c.a.createElement("div",{className:"skills"},e)}));return c.a.createElement("div",{className:"skill-detail-wrapper"},a)};return c.a.createElement("div",{id:"skills",className:"content-wrapper"},c.a.createElement(E,{value:"SKILL SET"}),c.a.createElement("div",{className:"content-detail"},c.a.createElement("div",{id:"skills-wrapper"},c.a.createElement("div",{id:"javascript",className:"skills-column"},c.a.createElement("div",{className:"skills-header"},"JAVASCRIPT"),a(["JavaScript","ES6","HTML","CSS","React","React-Router","Redux","BootStrap","Ant Design"]),c.a.createElement("div",{id:"js-pic"})),c.a.createElement("div",{id:"node",className:"skills-column"},c.a.createElement("div",{className:"skills-header"},"NODE.JS"),a(["Express.js","Asynchronus Programming","Database Queries","Authentication","Authorization","REST API"]),c.a.createElement("div",{id:"node-pic"})),c.a.createElement("div",{id:"go",className:"skills-column"},c.a.createElement("div",{className:"skills-header"},"GOLANG"),a(["Gorilla/Mux","Hashing","SQLX","Tokens","REST API"]),c.a.createElement("div",{id:"go-pic"})),c.a.createElement("div",{id:"sql",className:"skills-column"},c.a.createElement("div",{className:"skills-header"},"SQL/NOSQL"),a(["PostgreSQL","MongoDB","CRUD","Joins","Mathematical Operators"]),c.a.createElement("div",{id:"sql-pic"})),c.a.createElement("div",{id:"vba",className:"skills-column"},c.a.createElement("div",{className:"skills-header"},"VBA"),a(["User Forms","Custome Functions","Database Integration","Outlook integration"]),c.a.createElement("div",{id:"vba-pic"})),c.a.createElement("div",{id:"deployment",className:"skills-column"},c.a.createElement("div",{className:"skills-header"},"DEPLOYMENT"),a(["GitHub","Heroku","Testing","Linux"]),c.a.createElement("div",{id:"deploy-pic"})))))},f=function(){return c.a.createElement("div",{className:"body"},c.a.createElement(v,null),c.a.createElement(p,null),c.a.createElement(h,null),c.a.createElement(N,null))},k=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"personal-icon"}),c.a.createElement("div",{className:"quote-wrapper"},"Learning, practicing, & improving",c.a.createElement("br",null),"with every key-stroke"),c.a.createElement(m,{className:"about-card-resume-footer"}),c.a.createElement("div",{className:"footer-icons"},c.a.createElement("a",{className:"footer-column-list",href:"https://github.com/cbetori"},c.a.createElement("div",{className:"social-media"},c.a.createElement("div",{id:"github"}))),c.a.createElement("a",{className:"footer-column-list",href:"https://www.linkedin.com/in/collinbetori/"},c.a.createElement("div",{className:"social-media"},c.a.createElement("div",{id:"linkedin"}))),c.a.createElement("a",{className:"footer-column-list",href:"https://www.instagram.com/cbetori/"},c.a.createElement("div",{className:"social-media"},c.a.createElement("div",{id:"insta"})))))},g=function(){var e=.01*window.innerHeight;return document.documentElement.style.setProperty("--vh",e+"px"),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))})),console.log(e),c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement(f,null),c.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.699596c0.chunk.js.map