Global.initCategoryClick=()=>{const e=document.querySelectorAll("ul.sidebar-all-category-list li.sidebar-all-category-list-item");e.forEach((c,e)=>{const s=c.querySelector("i.fa-book-open");s.addEventListener("click",e=>{const t=c.querySelector("li.sidebar-all-category-list-item > ul");if(!t)return;const l=t.querySelector("li > ul");if(!l){t.querySelectorAll(".tooltiptext").forEach((e,t)=>{e.innerText="无了"})}const o=getComputedStyle(t)||document.defaultView.getComputedStyle(t);if(o.display==="none"){s.style.setProperty("color","var(--primary-color)");t.style.setProperty("display","block");s.querySelector(".tooltiptext").innerText="收起"}else{s.style.setProperty("color","var(--first-text-color)");t.style.setProperty("display","none");s.querySelector(".tooltiptext").innerText="展开";const r=t.querySelectorAll("li.sidebar-all-category-list-item ul");r.forEach(e=>{e.style.setProperty("display","none")});const i=t.querySelectorAll("li.sidebar-all-category-list-item i");i.forEach(e=>{e.style.setProperty("color","var(--first-text-color)");e.querySelector(".tooltiptext").innerText="展开"})}e.stopPropagation()})})};