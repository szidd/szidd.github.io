!function(t){var i={};function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)a.d(t,i,function(e){return n[e]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=1)}([function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(0);var l=document.querySelector("#img1"),r=document.querySelector("#img2"),o=document.querySelector("#lamp"),c=document.querySelector("#item1"),s=document.querySelector("#item2"),u=document.querySelector("#item3"),d=document.querySelector("#btn--light"),p=document.querySelector("#btn--bake"),m=document.querySelector("#btn--heater"),y=document.querySelector("#btn--bake--send"),b=document.querySelector("#send"),v=document.querySelector("#btn--heater--send"),f=document.querySelector("#send2"),g=document.querySelector("#bake--input"),k=document.querySelector("#heat--input");var S=document.getElementById("devices"),h=document.getElementById("header"),L=document.getElementById("statistics"),M=document.querySelectorAll(".light"),z=document.querySelectorAll(".header"),T=document.querySelectorAll(".statistics"),x=document.getElementById("addDev"),E=document.getElementById("device-list"),q=document.getElementById("selectValue"),_=(document.getElementById("box"),0),w=document.querySelector("#btnczujnik"),H=document.querySelector("#btnurzadzenia"),j=document.querySelector("#diagramCzujnik"),O=document.querySelector("#diagramUrzadzenia"),i=function(){var e,n,t,i,a;e=0,o.addEventListener("click",function(){0==e?(o.textContent="Wyłącz",r.style.display="none",l.style.display="block"):(o.textContent="Włącz",l.style.display="none",r.style.display="block"),1<++e&&(e=0)}),T.forEach(function(e){e.addEventListener("click",function(){S.style.display="none",h.style.display="none",L.style.display="block"})}),M.forEach(function(e){document.querySelector("#device-list");e.addEventListener("click",function(){S.style.display="block",h.style.display="none",L.style.display="none"})}),z.forEach(function(e){e.addEventListener("click",function(){S.style.display="none",h.style.display="block",L.style.display="none"})}),n=0,d.addEventListener("click",function(){c.style.display=1==n?"none":"block",1<++n&&(n=0)}),t=0,y.addEventListener("click",function(){100<g.value&&(b.innerHTML="<p>Temperatura za wysoka. Maksymalna temperatura pieca to 100 stopni</p>"),g.value<0&&(b.innerHTML="<p>Temperatura za niska. Minimalna temperatura pieca to 0 stopni</p>"),g.value<100&0<g.value&&(b.innerHTML="<p>Ustawienie temperatury pieca na "+g.value+" stopni</p>")}),p.addEventListener("click",function(){s.style.display=1==t?"none":"block",1<++t&&(t=0)}),function(){v.addEventListener("click",function(){40<k.value&&(f.innerHTML="<p>Temperatura za wysoka. Maksymalna temperatura pieca to 40 stopni</p>"),k.value<0&&(f.innerHTML="<p>Temperatura za niska. Minimalna temperatura grzejnika to 0 stopni</p>"),k.value<40&0<k.value&&(f.innerHTML="<p>Ustawienie temperatury grzejnika na "+k.value+" stopni</p>")});var e=0;m.addEventListener("click",function(){u.style.display=1==e?"none":"block",1<++e&&(e=0)})}(),i=0,w.addEventListener("click",function(){j.style.display=1==i?"none":"block",1<++i&&(i=0)}),a=0,H.addEventListener("click",function(){O.style.display=1==a?"none":"block",1<++a&&(a=0)}),x.addEventListener("click",function(){"zarowka"===q.value&&(E.innerHTML+='<li class="dev__item" id="btn'+_+"\" onclick=\"let l = this.nextSibling.nextSibling.style.display; this.nextSibling.nextSibling.style.display = (l=='none') ? 'block' : 'none'\">Żarówka\n    </li>\n\n        <li id=\"item"+_+'" class="dev__item--1 bg">\n            <form action="">\n                \n                <img class="lamp" alt="image" src="../../images/lamp-off.svg" display="block">\n        \n                <a  id="lamp" class="btn btn--form" data-state="0" onclick="if (this.getAttribute(\'data-state\') == \'0\') {this.setAttribute(\'data-state\', \'1\'); this.innerHTML=\'Wyłącz\';this.previousSibling.previousSibling.src=\'../../images/lamp-on.svg\'; } else {this.setAttribute(\'data-state\', \'0\'); this.innerHTML=\'Włącz\'; this.previousSibling.previousSibling.src=\'../../images/lamp-off.svg\'; }">Wyłącz</a>\n                \n            </form>\n        </li>'),"piec"===q.value&&(E.innerHTML+='<li class="dev__item" id="btn--bake'+_+"\" onclick=\"let l = this.nextSibling.nextSibling.style.display; this.nextSibling.nextSibling.style.display = (l=='none') ? 'block' : 'none'\">Piec</li>\n    <li id=\"item"+_+'" class="dev__item--2 bg">\n            \n\n        <form action="">\n            <h2>Ustaw temperature</h2>\n            <input type="number" name="" id="bake--input'+_+"\">\n            <a  class=\"btn btn--form\" id=\"btn--bake--send\" onclick=\"let val = this.previousSibling.previousSibling.value; let cont = this.nextSibling.nextSibling; if (val > 80) {cont.innerHTML='<p>Temperatura za wysoka. Maksymalna temperatura pieca to 80 stopni</p>'} else if (val < 0) {cont.innerHTML='<p>Temperatura za niska. Minimalna temperatura pieca to 0 stopni</p>'} else {cont.innerHTML='<p>Ustawienie temperatury pieca na '+val+' stopni</p>'}\">Zatwierdź</a>\n            <div id=\"send"+_+'"></div>\n        </form>\n      \n    </li>'),"grzejnik"===q.value&&(E.innerHTML+='<li class="dev__item" id="btn--heater'+_+"\" onclick=\"let l = this.nextSibling.nextSibling.style.display; this.nextSibling.nextSibling.style.display = (l=='none') ? 'block' : 'none'\">Grzejnik</li>\n    <li id=\"item"+_+'" class="dev__item--3 bg">\n            \n\n            <form action="">\n                <h2>Ustaw temperature</h2>\n                <input type="number" name=""id="heat--input">\n                <a  class="btn btn--form" id="btn--heater--send" onclick="let val = this.previousSibling.previousSibling.value; let cont = this.nextSibling.nextSibling; if (val > 40) {cont.innerHTML=\'<p>Temperatura za wysoka. Maksymalna temperatura grzejnika to 40 stopni</p>\'} else if (val < 0) {cont.innerHTML=\'<p>Temperatura za niska. Minimalna temperatura grzejnika to 0 stopni</p>\'} else {cont.innerHTML=\'<p>Ustawienie temperatury grzejnika na \'+val+\' stopni</p>\'}">Zatwierdź</a>\n                <div id="send'+_+'"></div>\n            </form>\n        </li>')}),_++},a=function(){};document.addEventListener("DOMContentLoaded",function(){i()}),window.addEventListener("load",function(){a()})}]);
//# sourceMappingURL=index.66cd259a.js.map