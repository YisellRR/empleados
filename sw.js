if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let a={};const n=e=>r(e,c),f={module:{uri:c},exports:a,require:n};s[c]=Promise.all(i.map((e=>f[e]||n(e)))).then((e=>(o(...e),a)))}}define(["./workbox-62393af1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"add.php",revision:"e6468fd1a12967253fc28e7eea9a235a"},{url:"conexion.php",revision:"1b489c0cef8068b34345d0342bb4a0ca"},{url:"css/bootstrap-datepicker.css",revision:"3596e19b0d8987293253245195340801"},{url:"css/bootstrap-theme.css",revision:"659231dde1c53bd14bbcffa1456df892"},{url:"css/bootstrap-theme.min.css",revision:"bf3499da1c31113720e9e395691730ba"},{url:"css/bootstrap.css",revision:"957474c344c7131fb8e093449cc4893a"},{url:"css/bootstrap.min.css",revision:"5d5357cb3704e1f43a1f5bfed2aebf42"},{url:"css/style_nav.css",revision:"2703d1471271c4661f942794e3e45546"},{url:"edit.php",revision:"3a4a04518c51a73c63b255808dce8c62"},{url:"fonts/glyphicons-halflings-regular.eot",revision:"f4769f9bdb7466be65088239c12046d1"},{url:"fonts/glyphicons-halflings-regular.svg",revision:"89889688147bd7575d6327160d64e760"},{url:"fonts/glyphicons-halflings-regular.ttf",revision:"e18bbf611f2a2e43afc071aa2f4e1512"},{url:"fonts/glyphicons-halflings-regular.woff",revision:"fa2772327f55d8198301fdb8bcfc8158"},{url:"fonts/glyphicons-halflings-regular.woff2",revision:"448c34a56d699c29117adc64c43affeb"},{url:"images/empleados.png",revision:"c93ba4038f42835e005356a3bc51d4ac"},{url:"index.php",revision:"5374d773084d6b3272de7aee55e5fad9"},{url:"js/bootstrap-datepicker.js",revision:"2dcf35fa19b38eff97ea25a0a094c540"},{url:"js/bootstrap.js",revision:"8015042d0b4ac125867af5b096b175ce"},{url:"js/bootstrap.min.js",revision:"4becdc9104623e891fbb9d38bba01be4"},{url:"manifest.json",revision:"305c1bc52f59aaf1572c31310401b51d"},{url:"nav.php",revision:"604dfc58bf8549080a32c9da79f417a1"},{url:"profile.php",revision:"6885946215b7161b02035e7ecb62c1a1"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
