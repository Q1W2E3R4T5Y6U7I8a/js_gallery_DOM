document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".gallery"),t=document.getElementById("largeImg");e.addEventListener("click",function(e){e.preventDefault();var n=e.target,a=null;"IMG"===n.tagName?a=n.parentElement.href:"A"===n.tagName&&(a=n.href),a&&(t.src=a)})});
//# sourceMappingURL=index.267a791f.js.map
