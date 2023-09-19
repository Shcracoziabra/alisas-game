(()=>{"use strict";class e{constructor(e){let{container:t,soundToggleSelector:a,soundPath:n="",audioParams:o={}}=e;this.container=t,this.soundToggleSelector=a,this.init(n,o)}init(e,t){const{name:a,src:n,loop:o}=t;this.name=a,this.src=n,this.loop=o;const r=document.createElement("audio");r.setAttribute("src","".concat(e).concat(this.src)),r.setAttribute("data-sound",this.name),r.loop=this.loop,r.muted=!1,r.display="none",this.audioElem=r,this.container.insertAdjacentElement("beforeend",this.audioElem)}playWatchingSoundAllowed(e){let t,a=1e3*this.audioElem.duration;const n=o=>{if(void 0===t&&(t=o,e?e.isActive&&this.play():this.play()),document.querySelector(this.soundToggleSelector).classList.contains("play")?this.unmute():this.mute(),e){if(!e.isActive)return void this.stop();this.loopSound(),window.requestAnimationFrame(n)}else{if(!(o-t<a))return void this.stop();window.requestAnimationFrame(n)}};window.requestAnimationFrame(n)}play(){this.audioElem.play()}mute(){this.audioElem.muted=!0}unmute(){this.audioElem.muted=!1}stop(){this.audioElem.pause(),this.audioElem.currentTime=0}loopSound(){this.audioElem.currentTime===this.audioElem.duration&&(this.audioElem.currentTime=0,this.play())}playAgainIfEnded(e){this.audioElem.ended&&(this.audioElem.currentTime=e,this.audioElem.play())}getCurrentTime(){return this.audioElem.currentTime}getDuration(){return this.audioElem.duration}setCurrentTime(e){this.audioElem.currentTime=e}setTime(e){this.audioElem.currentTime=e}}class t{constructor(e){let{name:t,wrapper:a={tag:"div",classes:[],attributes:[]},innerElems:n=[],correctionsToBeTarget:o={left:0,top:0,right:0,bottom:0}}=e;this.name=t,this.correctionsToBeTarget=o,this.disappearsSoon=!1,this.init(a,n)}init(e,t){function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const n=document.createElement(e);return t.forEach((e=>n.classList.add(e))),a.forEach((e=>n.setAttribute(e.name,e.value))),n}const{tag:n,classes:o,attributes:r}=e;this.block=a(n,o,r),t.forEach((e=>{let{name:t,tag:n,classes:o,attributes:r}=e;const s=a(n,o,r);s.setAttribute("data-part",t),this.block.append(s)}))}addTo(e){this.container=e,this.container.append(this.block),this.setCoordsAttachedToMouse=this.setCoordsAttachedToMouse.bind(this),this.setCoordsAttachedToMouse(),window.addEventListener("resize",this.setCoordsAttachedToMouse)}setCoordsAttachedToMouse(){this.setViewPortCoords(),this.setCorrectionMouseCoords()}remove(){window.removeEventListener("resize",this.setCoordsAttachedToMouse),this.block.remove()}setAttribute(e,t){this.block.setAttribute(e,t)}async hide(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Promise(((a,n)=>{setTimeout((()=>{e.style.display="none",a()}),t)}))}async show(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Promise(((a,n)=>{setTimeout((()=>{e.style.display="",a()}),t)}))}getPart(e){return this.name===e?this.block:this.block.querySelector("[data-part=".concat(e,"]"))}changeStyleValueGradually(e,t,a,n){return new Promise(((o,r)=>{let s,i,l=!1;const c=n/t;window.requestAnimationFrame((function r(d){void 0===s&&(s=d);const u=d-s;if(i!==d){const t=Math.min(c*u,n);a(e,t),t===n&&(l=!0,o())}u<t&&(i=d,l||window.requestAnimationFrame(r))}))}))}async graduallyDisappear(e,t){this.block.style.opacity=1,await this.changeStyleValueGradually(t,e,((e,t)=>e.style.opacity=1-t),1)}async graduallyAppear(e,t){this.block.style.opacity=0,await this.changeStyleValueGradually(t,e,((e,t)=>e.style.opacity=t),1)}async place(e){let{params:t={top:0,left:0},delay:a=0}=e;return this.block.style.position="absolute",new Promise(((e,n)=>{setTimeout((()=>{for(let e of Object.keys(t))this.block.style[e]=t[e];e()}),a)}))}setViewPortCoords(){const{left:e,top:t,right:a,bottom:n}=this.block.getBoundingClientRect();this.viewportCoords={left:e,top:t,right:a,bottom:n}}setCorrectionMouseCoords(){this.viewPortMouseCorrection={left:this.viewportCoords.left-this.block.offsetLeft,top:this.viewportCoords.top-this.block.offsetTop}}setTextParagraphs(e){let{name:t="text",textArray:a=[]}=e;if(this.getPart(t)){this.getPart(t).innerText="";for(let e of a){const a=document.createElement("p");a.textContent=e,this.getPart(t).append(a)}}}setTextInPart(e){let{name:t,text:a}=e;this.getPart(t)&&(this.getPart(t).innerText=a)}isTarget(e){const t=this.viewportCoords.left+this.correctionsToBeTarget.left,a=this.viewportCoords.top+this.correctionsToBeTarget.top,n=this.viewportCoords.right+this.correctionsToBeTarget.right,o=this.viewportCoords.bottom+this.correctionsToBeTarget.bottom;if(e.clientX>t&&e.clientX<n&&e.clientY>a&&e.clientY<o)return!0}}function a(e){let{wrapper:t,scroll:a,runner:n}=e;a.style.display="flex";const o=t.getBoundingClientRect().height,r=a.getBoundingClientRect().height,s=n.getBoundingClientRect().height,i=r-s;n.style.boxShadow="\n    inset 0px -1px 0px 1px #5868ad, \n    inset 0px 0px 1px 1px #fff,\n    0 -50px 50px 50px #4eebfc,\n    0 -".concat(i,"px 0px ").concat(i-s/2,"px #5868ad");let l=!1;n.addEventListener("mousedown",(e=>{l=!0})),window.addEventListener("mouseup",(e=>{l&&(l=!1)})),t.addEventListener("wheel",(e=>{if(e.preventDefault(),e.clientX>t.getBoundingClientRect().left&&e.clientX<t.getBoundingClientRect().right&&e.clientY>=t.getBoundingClientRect().top&&e.clientY<=t.getBoundingClientRect().bottom){const a=Math.floor(t.scrollTop),o=.5*e.deltaY,i=t.scrollHeight-t.offsetHeight,l=Math.floor(Math.min(Math.max(0,a+o),i));t.scrollTo(0,l);const c=Math.round(100*t.scrollTop/i)/100;n.style.top=(r-s)*c+"px"}})),window.addEventListener("mousemove",(e=>{const i=Math.floor(a.getBoundingClientRect().top),c=Math.floor(a.getBoundingClientRect().bottom);if(e.clientX>a.getBoundingClientRect().left&&e.clientX<a.getBoundingClientRect().right&&e.clientY>=i+s/2&&e.clientY<=c-s/2&&l){n.style.top=e.clientY-i-s/2+"px";const a=Math.floor(e.clientY-i-s/2)/(r-s);t.scrollTo(0,a*(t.scrollHeight-o))}}))}async function n(e){let{container:n,text:o=[],btnSettings:r={}}=e;const s=new t({name:"informator",wrapper:{classes:["informator"]},innerElems:[{name:"avatar",classes:["informator_avatar"]},{name:"aside",classes:["informator_aside"]}]}),i=new t({name:"info",wrapper:{classes:["informator_info"]}}),l=new t({name:"optional",wrapper:{classes:["informator_optional"]}}),c=new t({name:"wrapper",wrapper:{classes:["informator_wrapper"]},innerElems:[{name:"content",classes:["informator_content"]}]}),d=new t({name:"scroll",wrapper:{classes:["informator_scroll"]},innerElems:[{name:"runner",classes:["informator_runner"]}]});return s.getPart("aside").append(i.block,l.block),i.block.append(c.block,d.block),await s.place({params:{left:"20px",bottom:"20px"},delay:1e3}),c.setTextParagraphs({name:"content",textArray:o}),s.addTo(n),await s.graduallyAppear(1e3,s.block),await async function(){return new Promise(((e,t)=>{Object.keys(r).length?setTimeout((()=>{const t=document.createElement("btn");t.innerText=r.text?r.text:"Click!",r.className&&t.classList.add(r.className),l.block.append(t),c.block.scrollHeight>c.block.offsetHeight&&a({wrapper:c.block,scroll:d.block,runner:d.getPart("runner")}),t.addEventListener("click",(()=>{r.sound&&r.sound.playWatchingSoundAllowed(),e()}),{once:!0})}),r.delay):(c.block.scrollHeight>c.block.offsetHeight&&a({wrapper:c.block,scroll:d.block,runner:d.getPart("runner")}),e())}))}(),{informator:s,info:i,optional:l,wrapper:c,scroll:d}}class o extends t{constructor(e){let{activeClass:t,movingClass:a,name:n,wrapper:o={tag:"div",classes:[],attributes:[]},innerElems:r=[],correctionsToBeTarget:s={left:0,top:0,right:0,bottom:0},renewable:i=!0,renewResourceOnEnd:l=!1,canBeMoved:c=!1,leftMoveCorrection:d=0,topMoveCorrection:u=0,maxResource:p}=e;super({name:n,wrapper:o,innerElems:r,correctionsToBeTarget:s}),this.isActive=!1,this.activeClass=t,this.currentResource=p,this.canBeMoved=c,c&&(this.movingClass=a,this.isMoving=!1,this.leftMoveCorrection=d,this.topMoveCorrection=u,this.target=""),this.renewable=i,this.renewResourceOnEnd=l,this.maxResource=p}addSoundSettings(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{startMovingSound,actionSound,stopMovingSound};this.hasSound=!0;for(let a in Object.keys(t))a instanceof e&&(this[key]=a[key])}togglePosition(e){this.isMoving?this.takeMousePosition(e):this.takeInitialPosition()}takeInitialPosition(){this.block.style.position="",this.block.style.left="",this.block.style.top="",this.block.style.right="",this.block.style.bottom=""}takeMousePosition(e){this.place({params:{left:"".concat(e.clientX-this.viewPortMouseCorrection.left+this.leftMoveCorrection,"px"),top:"".concat(e.clientY-this.viewPortMouseCorrection.top+this.topMoveCorrection,"px")}})}followMouse(){this.container.addEventListener("mousemove",(e=>{this.isMoving&&this.takeMousePosition(e)}))}looseResource(){this.stopActivityOnNoResource(),this.toggleActivityClass(),this.isActive&&this.currentResource--}gainResource(){this.toggleActivityClass(),this.currentResource<this.maxResource&&!this.isActive&&!this.isMoving&&this.currentResource++}stopActivityOnNoResource(){0===this.currentResource&&(this.isActive=!1)}toggleActivityClass(){this.isActive?this.block.classList.contains(this.activeClass)||this.block.classList.add(this.activeClass):this.block.classList.contains(this.activeClass)&&this.block.classList.remove(this.activeClass)}fillWithResource(){let{entityToFill:e,timeStep:t=200,responsibleOpacity:a=!1,showCurrentResource:n=!1,units:o=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=setInterval((()=>{this.isActive?(this.looseResource(),n&&this.setTextInPart({name:"resource-count",text:"".concat(this.currentResource," ").concat(o)}),a&&this.setOpacityOnResource(),e.gainResource(),e.setTextInPart({name:"resource-count",text:"".concat(e.currentResource," ").concat(o)})):(clearInterval(r),this.renewResourceOnEnd&&this.renewResourceAfterDelay())}),t)}highLightIfHasTarget(){this.target&&this.isMoving?this.block.classList.add("highlight"):this.block.classList.remove("highlight")}setOpacityOnResource(){this.block.style.opacity=Math.min(1,this.currentResource/this.maxResource)}renewResourceAfterDelay(){let{delay:e=4e3,responsibleOpacity:t=!0,showCurrentResource:a=!1,step:n=200}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};setTimeout((()=>{const e=setInterval((()=>{!this.isActive&&this.currentResource<this.maxResource?(this.currentResource++,a&&this.setTextInPart({name:"resource-count",text:this.currentResource}),t&&this.setOpacityOnResource()):clearInterval(e)}),n)}),e)}}class r extends t{constructor(e){let{name:t,wrapper:a,innerElems:n,correctionsToBeTarget:o,stages:r}=e;super({name:t,wrapper:a,innerElems:n,correctionsToBeTarget:o}),this.currentResource=0,this.stages=r,this.resourceToFinish=r[r.length-1][1],this.finish=!1}getChangedOnResource(){let{stageSound:e,harvestSound:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=this.stages.find((e=>this.currentResource===e[1]));a&&(this.block.setAttribute("data-stage",a[0]),this.stages.indexOf(a)===this.stages.length-1?(t&&t.playWatchingSoundAllowed(),this.finish=!0):e&&e.playWatchingSoundAllowed())}gainResource(){this.currentResource<this.resourceToFinish&&this.currentResource++}}const s=[{name:"м'ята",top:515,left:435,imgFruit:"mint.png",stages:[["first",10],["second",15],["third",20]]},{name:"морква",top:565,left:815,imgFruit:"carrot.png",stages:[["first",10],["second",15],["third",20]]},{name:"гарбуз",top:375,left:258,imgFruit:"pumpkin.png",stages:[["first",10],["second",15],["third",20]]},{name:"малина",top:370,left:440,imgFruit:"raspberry.png",stages:[["first",10],["second",15],["third",20]]},{name:"суниця",top:570,left:660,imgFruit:"strawberry.png",stages:[["first",10],["second",15],["third",20]]},{name:"помідор",top:420,left:940,imgFruit:"tomato.png",stages:[["first",10],["second",15],["third",20]]},{name:"перець",top:420,left:850,imgFruit:"pepper.png",stages:[["first",10],["second",15],["third",20]]},{name:"горох",top:420,left:1050,imgFruit:"peas.png",stages:[["first",10],["second",15],["third",20]]},{name:"ананас",top:400,left:760,imgFruit:"pineapple.png",stages:[["first",10],["second",15],["third",20]]}];async function i(e){let{container:a=null,classes:i=[],bgImage:l="",text:c=[],introSound:d,outroSound:u,toolSounds:p=[],appearSound:g,imagePath:h=""}=e;d&&d.playWatchingSoundAllowed();const m=new t({name:"plant-view",wrapper:{classes:i}});m.block.style.backgroundImage="url('".concat(h).concat(l,"')"),m.block.style.filter="none",m.addTo(a),await m.graduallyAppear(3e3,m.block),await n({container:m.block,text:c}),g.playWatchingSoundAllowed();let w=await async function(e){let{container:t,sounds:a,appearDelay:n}=e;const r=new o({activeClass:"active",movingClass:"moving",name:"watering-can",wrapper:{classes:["watering-can"]},innerElems:[{name:"splashes",classes:["splashes"]},{name:"resource-count",tag:"p"}],canBeMoved:!0,leftMoveCorrection:-10,topMoveCorrection:-150,maxResource:40});r.setTextInPart({name:"resource-count",text:"".concat(r.currentResource,"л")}),r.addTo(t),r.followMouse(),n&&await r.graduallyAppear(n,r.block);const s=a.startMovingSound,i=a.stopMovingSound,l=a.actionSound;return r.block.addEventListener("click",(e=>{r.isMoving||(r.isMoving=!0,r.block.classList.add(r.movingClass),r.togglePosition(e),s&&(i&&i.stop(),s.stop(),s.playWatchingSoundAllowed()))})),r.block.addEventListener("contextmenu",(e=>{e.preventDefault(),r.isMoving&&(r.isMoving=!1,r.highLightIfHasTarget(r.target),r.block.classList.remove(r.movingClass),r.canBeMoved&&r.togglePosition(e),i&&(s&&s.stop(),i.stop(),i.playWatchingSoundAllowed()))})),r.block.addEventListener("mousedown",(e=>{if(r.isMoving&&0===e.button){r.currentResource>0&&(r.isActive=!0);const e=setInterval((()=>{r.isActive?(r.looseResource(),r.isActive&&r.target&&r.target.gainResource(),r.target&&r.target.getChangedOnResource(),r.setTextInPart({name:"resource-count",text:r.currentResource+"л"}),r.target&&r.target.setTextInPart({name:"resource-count",text:r.target.currentResource})):(r.toggleActivityClass(),clearInterval(e))}),200);l&&(l.stop(),l.playWatchingSoundAllowed(r))}})),r.block.addEventListener("mouseup",(e=>{r.isActive=!1,r.block.classList.remove(r.activeClass),l&&l.stop()})),r}({container:m.block,sounds:p.find((e=>{let{toolName:t}=e;return"watering-can"===t})),appearDelay:1e3});await async function(e){let{container:t,entityToFill:a,sounds:n,appearDelay:r}=e;const s=new o({activeClass:"active",name:"cloud",wrapper:{classes:["cloud-wrapper"]},innerElems:[{classes:["cloud"]},{classes:["rain"]}],maxResource:100,renewResourceOnEnd:!0});s.addTo(t),r&&await s.graduallyAppear(r,s.block);const i=n.actionSound;return s.block.addEventListener("click",(e=>{!s.isActive&&s.currentResource>0&&(s.isActive=!0,s.toggleActivityClass(),s.fillWithResource({entityToFill:a,responsibleOpacity:!0,units:"л"}),i&&i.playWatchingSoundAllowed(s))})),s.block.addEventListener("contextmenu",(e=>{e.preventDefault(),s.isActive=!1,s.toggleActivityClass(),i&&i.stop()})),s}({container:m.block,entityToFill:w,sounds:p.find((e=>{let{toolName:t}=e;return"cloud"===t})),appearDelay:2e3}),g.playWatchingSoundAllowed();let v=[];await async function(e){let{container:t,appearSound:a,plantsParams:n,arrayToSave:o}=e;n.forEach((async(e,n)=>{let{name:s,top:i,left:l,stages:c}=e;const d=function(e){let{name:t,stages:a}=e;return new r({name:t,wrapper:{classes:["pot"]},innerElems:[{name:"resource-count",tag:"p"}],correctionsToBeTarget:{left:30,bottom:-40,top:0,right:30},stages:a})}({name:s,stages:c});await d.place({params:{top:"".concat(i,"px"),left:"".concat(l,"px")},delay:600*n}),d.addTo(t),a.playWatchingSoundAllowed(),o.push(d)}))}({container:m.block,plantsParams:s,arrayToSave:v,appearSound:g}),m.block.addEventListener("mousemove",(e=>{if(w.isMoving){const t=v.find((t=>t.isTarget(e)));w.target=t||"",w.highLightIfHasTarget()}})),await async function(){let e=!1;return new Promise(((t,a)=>{m.block.addEventListener("contextmenu",(async a=>{v.every((e=>e.finish))&&(e||(e=!0,u.playWatchingSoundAllowed(),await m.graduallyDisappear(3e3,m.block),m.remove(),t()))}))}))}(),p.find((e=>{let{toolName:t}=e;return"cloud"===t})).actionSound.stop()}const l=[{name:"rain",src:"rain.mp3",loop:!1},{name:"harvest",src:"harvest.mp3",loop:!1},{name:"rainbow",src:"rainbow.mp3",loop:!1},{name:"put",src:"put.mp3",loop:!1},{name:"take",src:"take.mp3",loop:!1},{name:"place",src:"fast-put.mp3",loop:!1},{name:"garden",src:"garden.mp3",loop:!0},{name:"running-water",src:"running-water.mp3",loop:!0},{name:"view-intro",src:"view-intro.mp3",loop:!1},{name:"fairy",src:"fairy.mp3",loop:!1}],c=[{name:"welcomeText",text:["Привіт, Алісо і друзі!","Я радий вас бачити :)","Мені знадобиться ваша допомога.","Подивитеся на мій чудовий сад?"]},{name:"growPlantsText",text:["Маю горщики з рослинами, але забув, що де посіяв","Допоможіть мені їх виростити!","Справа в кутку стоїть лійка","Хмарка допоможе її наповнювати."]},{name:"pickFruitText",text:["Дякую! Ми виростили рослини і настав час зібрати плоди","Перенесіть їх, будь ласка, до відповідних кошиків"]},{name:"wrongMatchText",text:["Здається, ми шось наплутали.","Подивись, чи у своїх кошиках врожай."]},{name:"rightMatchText",text:["Все точно!","Тепер я нічого не загублю.","Як я тішуся, ми чудова команда:)"]},{name:"rainbowText",text:["Ура, ми впоралися!","Дивись, який чудові плоди! Твій місяць нам дає багато прекрасного.","Торкнись врожаю і він покаже тобі веселку."]},{name:"envelopeText",text:["Але в мене є ще дещо для тебе.","Почекай трохи."]},{name:"congratsText",text:["З днем народження, Алісо!","Дякую тобі за допомогу.","Пригощайся смачним врожаєм.","Завжди радий бачити у своєму саду.","Обіймаю вас, друзі!♥"]}],d="./assets/image/",u="\n    Мінімальні параметри екрану ".concat(1200,"px x ").concat(600,"px. \n    Збільшіть вікно браузера та перезавантажте сторінку.\n"),p=document.createElement("div");p.classList.add("wrong-device"),window.addEventListener("DOMContentLoaded",(async a=>{window.addEventListener("contextmenu",(e=>{e.preventDefault()}));const o=document.querySelector(".root");await async function(){return new Promise(((e,t)=>{"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?(!o.querySelector(".wrong-device")&&o.append(p),p.append("Гра працює лише на персональному комп'ютері")):document.documentElement.clientWidth<1200||document.documentElement.clientHeight<600?(!o.querySelector(".wrong-device")&&o.append(p),p.append(u)):e()}))}();const r="[data-sound]";let g=[];var h;l.forEach((t=>{const a=new e({container:o,soundToggleSelector:r,soundPath:"./assets/sound/",audioParams:t});g.push(a)})),h=r,document.querySelector(h).addEventListener("click",(()=>{document.querySelector(h).classList.toggle("play")}));const m=g.find((e=>{let{name:t}=e;return"garden"===t}));await async function(e){let{container:a=null,classes:o=[],bgImage:r="",text:s=[],btnSound:i,outroSound:l,imagePath:c=""}=e;const d=new t({name:"welcome-view",wrapper:{classes:o}});d.block.style.backgroundImage="url('".concat(c).concat(r,"')"),d.block.style.filter="none",d.addTo(a),await d.graduallyAppear(3e3,d.block),await n({container:d.block,text:s,btnSettings:{text:"Почнімо!",className:"informator_btn",sound:i,delay:0}}),l.playWatchingSoundAllowed(),await d.graduallyDisappear(3e3,d.block),d.remove()}({container:o,classes:["view-0"],bgImage:"bg-0.jpg",text:c.find((e=>{let{name:t}=e;return"welcomeText"===t})).text,btnSound:g.find((e=>{let{name:t}=e;return"take"===t})),outroSound:g.find((e=>{let{name:t}=e;return"harvest"===t})),imagePath:d}),m.playWatchingSoundAllowed({isActive:!0}),await i({container:o,classes:["view-1"],bgImage:"bg-1.jpg",text:c.find((e=>{let{name:t}=e;return"growPlantsText"===t})).text,introSound:g.find((e=>{let{name:t}=e;return"view-intro"===t})),outroSound:g.find((e=>{let{name:t}=e;return"harvest"===t})),appearSound:g.find((e=>{let{name:t}=e;return"place"===t})),imagePath:d,toolSounds:[{toolName:"watering-can",startMovingSound:g.find((e=>{let{name:t}=e;return"take"===t})),actionSound:g.find((e=>{let{name:t}=e;return"running-water"===t})),stopMovingSound:g.find((e=>{let{name:t}=e;return"put"===t}))},{toolName:"cloud",actionSound:g.find((e=>{let{name:t}=e;return"rain"===t}))}]}),await async function(e){let{container:a=null,classes:o=[],bgImage:r="",text:i=[],introSound:l,outroSound:c,appearSound:d,dragSound:u,dropSound:p,imagePath:g="",wrongMatchText:h,rightMatchText:m}=e;l&&l.playWatchingSoundAllowed();const w=new t({name:"fruit-view",wrapper:{classes:o}});w.block.style.backgroundImage="url('".concat(g).concat(r,"')"),w.block.style.filter="none",w.addTo(a),await w.graduallyAppear(3e3,w.block);const{wrapper:v}=await n({container:w.block,text:i});await async function(e){let{dragDropPairParams:a,container:n,imagePath:o,dragSound:r,dropSound:s,appearSound:i,infoInstance:l,wrongMatchText:c,rightMatchText:d}=e;return new Promise(((e,u)=>{let p,g=new t({name:"fruit-container",wrapper:{classes:["fruit-container"]}});g.addTo(n),a.forEach((async u=>{let{name:h,top:m,left:w,imgFruit:v}=u;const f=await async function(e){let{container:a,name:n,dragContainer:o,imgForBg:r,dragClasses:s,dropClasses:i,dropTitleClasses:l,dropTop:c,dropLeft:d,appearSound:u}=e;const p=new t({name:n,wrapper:{classes:s,attributes:[{name:"data-drag",value:n},{name:"data-match",value:!1},{name:"draggable",value:!0}]}});r&&(p.block.style.backgroundImage="url(".concat(r,")"));const g=new t({name:n,wrapper:{classes:i,attributes:[{name:"data-drop",value:n}]},innerElems:[{name:"title",classes:l}]});return g.setTextInPart({name:"title",text:n}),p.addTo(o),u.playWatchingSoundAllowed(),await g.place({params:{top:"".concat(c,"px"),left:"".concat(d,"px")},delay:1e3}),g.addTo(a),u.playWatchingSoundAllowed(),{drag:p,drop:g}}({container:n,name:h,dragContainer:g.block,imgForBg:o+v,dragClasses:["fruit"],dropClasses:["basket"],dropTitleClasses:["basket-title"],dropTop:m,dropLeft:w,appearSound:i}),{drag:y,drop:b}=f;y.block.addEventListener("dragstart",(e=>{p=e.target,e.target.parentElement.matches("[data-filled]")&&e.target.parentElement.removeAttribute("data-filled"),r.playWatchingSoundAllowed()})),b.block.addEventListener("dragover",(e=>{e.preventDefault()})),b.block.addEventListener("drop",(t=>{t.preventDefault(),t.target.matches("[data-drop]")&&!t.target.querySelector("[data-drag")&&(t.target.append(p),t.target.setAttribute("data-filled",!0),t.target.getAttribute("data-drop")===p.getAttribute("data-drag")?p.setAttribute("data-match",!0):p.setAttribute("data-match",!1),s.playWatchingSoundAllowed(),p=null);const o=n.querySelectorAll("[data-filled]"),r=n.querySelectorAll("[data-match=true]");a.length===o.length&&async function(){a.length===r.length?(await l.graduallyDisappear(1e3,l.block),l.setTextParagraphs({name:"content",textArray:d}),await l.graduallyAppear(1e3,l.block),setTimeout((()=>{e()}),2e3)):(await l.graduallyDisappear(1e3,l.block),l.setTextParagraphs({name:"content",textArray:c}),await l.graduallyAppear(1e3,l.block))}()}))})),n.addEventListener("dragover",(e=>{e.preventDefault()})),n.addEventListener("drop",(e=>{e.preventDefault(),e.target===n&&(g.block.append(p),p.setAttribute("data-match",!1))}))}))}({dragDropPairParams:s,container:w.block,imagePath:g,dragSound:u,dropSound:p,appearSound:d,infoInstance:v,wrongMatchText:h,rightMatchText:m}),c.playWatchingSoundAllowed(),await w.graduallyDisappear(3e3,w.block),w.remove()}({container:o,classes:["view-2"],bgImage:"bg-2.jpg",text:c.find((e=>{let{name:t}=e;return"pickFruitText"===t})).text,imagePath:d,dragSound:g.find((e=>{let{name:t}=e;return"take"===t})),dropSound:g.find((e=>{let{name:t}=e;return"put"===t})),appearSound:g.find((e=>{let{name:t}=e;return"place"===t})),introSound:g.find((e=>{let{name:t}=e;return"view-intro"===t})),outroSound:g.find((e=>{let{name:t}=e;return"harvest"===t})),wrongMatchText:c.find((e=>{let{name:t}=e;return"wrongMatchText"===t})).text,rightMatchText:c.find((e=>{let{name:t}=e;return"rightMatchText"===t})).text}),await async function(e){let{container:a=null,classes:o=[],bgImage:r="",firstTaskText:s=[],secondTaskText:i=[],congratsText:l=[],harvestSound:c,rainbowSound:d,introSound:u,outroSound:p,imagePath:g=""}=e;u&&u.playWatchingSoundAllowed();const h=new t({name:"congrats-view",wrapper:{classes:o}});h.block.style.backgroundImage="url('".concat(g).concat(r,"')"),h.block.style.filter="none",h.addTo(a),await h.graduallyAppear(3e3,h.block);let{informator:m,wrapper:w}=await n({container:h.block,text:s}),v=new t({name:"harvest",wrapper:{classes:["harvest"]}}),f=new t({name:"rainbow",wrapper:{classes:["rainbow"]}}),y=new t({name:"congrats",wrapper:{classes:["congrats"]}});v.addTo(h.block),c.playWatchingSoundAllowed(),await v.graduallyAppear(1e3,v.block),await async function(){return new Promise(((e,t)=>{v.block.addEventListener("click",(async t=>{f.addTo(h.block),d.playWatchingSoundAllowed(),await f.graduallyAppear(3e3,f.block),e()}),{once:!0})}))}(),await w.graduallyDisappear(2e3,w.block),w.setTextParagraphs({name:"content",textArray:i}),c.playWatchingSoundAllowed(),await w.graduallyAppear(2e3,w.block),await m.hide(m.getPart("aside"),5e3),m.place({params:{top:"384px",left:"700px",bottom:""}});let b=new t({name:"envelope",wrapper:{classes:["envelope"]}});b.addTo(h.block),b.place({params:{top:"430px",left:"650px"}}),c.playWatchingSoundAllowed(),b.block.addEventListener("click",(async()=>{y.addTo(h.block),y.setTextParagraphs({name:"congrats",textArray:l}),b.block.remove(),p.playWatchingSoundAllowed(),await y.graduallyAppear(3e3,y.block)}))}({container:o,classes:["view-3"],bgImage:"bg-3.jpg",firstTaskText:c.find((e=>{let{name:t}=e;return"rainbowText"===t})).text,secondTaskText:c.find((e=>{let{name:t}=e;return"envelopeText"===t})).text,congratsText:c.find((e=>{let{name:t}=e;return"congratsText"===t})).text,harvestSound:g.find((e=>{let{name:t}=e;return"harvest"===t})),rainbowSound:g.find((e=>{let{name:t}=e;return"rainbow"===t})),introSound:g.find((e=>{let{name:t}=e;return"view-intro"===t})),outroSound:g.find((e=>{let{name:t}=e;return"fairy"===t})),imagePath:d})}))})();
//# sourceMappingURL=bundle.js.map