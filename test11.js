var get={rgb:function(a,b,c){return"rgb("+a+","+b+","+c+")"},id:function(a){return document.getElementById(a)},tag:function(a,b){return void 0===b&&(b=0),document.getElementsByTagName(a)[b]},class:function(a,b){return void 0===b&&(b=0),document.getElementsByClassName(a)[b]},rand:function(a,b){return void 0===b&&(b=a,a=0),Math.ceil(Math.random()*(b-a))+a},upper:function(a){return a.toUpperCase()},lower:function(a){return a.toLowerCase()},proper:function(a){return a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase()},parse:function(a){return parseInt(a)},text:function(a){return a.innerHTML},val:function(a){return a.value},copy:function(a){a.select(),document.execCommand("copy")},base:function(a,b,c){return void 0===c&&(c=10),void 0===b&&(b=32),parseInt(a,c).toString(b)},github:function(a){return a.replace(/github/g,"rawgit").replace(/\/blob/,"")},replace:function(a,b,c,d){void 0===d&&(d="gi");var e=new RegExp(b,d);return a.replace(e,c)},find:function(a,b,c){void 0===c&&(c="gi");var d=new RegExp(b,c);return a.match(d).length}},edit={bg:function(a,b){a.style.background=b},color:function(a,b){a.style.color=b},size:function(a,b,c){"number"==typeof b&&(b+="px"),"number"==typeof c&&(c+="px"),a.style.width=b,a.style.height=c},text:function(a,b){void 0===b&&(b=""),a.innerHTML=b},html:function(a,b){void 0===b&&(b=""),a.outerHTML=b},append:function(a,b){void 0===b&&(b=""),a.innerHTML+=b},prepend:function(a,b){a.innerHTML=b+a.innerHTML},val:function(a,b){void 0===b&&(b=""),a.value=b},font:function(a,b,c){"number"==typeof b&&(b+="px"),void 0!==c&&(a.style.fontFamily=c),a.style.fontSize=b},pos:function(a,b,c){"number"==typeof b&&(b+="px"),"number"==typeof c&&(c+="px"),a.style.position="absolute",a.style.top=c,a.style.left=b},opacity:function(a,b){a.style.opacity=b},border:function(a,b){"number"==typeof b&&(b+="px"),a.style.border=b},hide:function(a){a.style.display="none"},show:function(a,b){void 0===b&&(b="initial"),a.style.display=b}},add={evt:function(a,b,c){return a.addEventListener(b,c)},elem:function(a,b,c,d){void 0===b&&(b=""),void 0===c&&(c=""),d=void 0===d?"":'style="'+d+'"',document.body.innerHTML+="<"+a+" "+d+" "+b+">"+c+"</"+a+">"},tag:function(a,b){void 0===b&&(b=""),document.body.innerHTML+="<"+a+" "+b+">"},link:function(a,b,c){return void 0===c&&(c="mouseup"),a.addEventListener(c,function(){window.open(b)})},int:function(a,b){return setInterval(a,b)},delay:function(a,b){return setTimeout(a,b)}},del={evt:function(a,b,c){return a.removeEventListener(b,c)},elem:function(a){a.outerHTML=""}},ctx,can,draw={name:function(a){can=a,ctx=a.getContext("2d")},resize:function(a,b){can.width=a,can.height=b},clear:function(a,b){void 0===a&&(a=can.width),void 0===b&&(b=can.height),ctx.clearRect(0,0,a,b)},begin:function(){return ctx.beginPath()},close:function(){return ctx.closePath()},width:function(a){ctx.lineWidth=a},line:function(a,b,c,d){ctx.moveTo(a,b),ctx.lineTo(c,d),ctx.stroke()},curve:function(a,b,c,d,e,f){ctx.moveTo(a,b),ctx.quadraticCurveTo(c,d,e,f),ctx.stroke()},rect:function(a,b,c,d){ctx.strokeRect(a,b,c,d)},fillRect:function(a,b,c,d){ctx.fillRect(a,b,c,d)},circle:function(a,b,c){ctx.arc(a,b,c,0,2*Math.PI),ctx.stroke()},fillCircle:function(a,b,c){ctx.arc(a,b,c,0,2*Math.PI),ctx.fill()},stroke:function(a){ctx.strokeStyle=a},fill:function(a){ctx.fillStyle=a}},$=function(a,b){var c=a.slice(0,1),d=a.slice(1);return void 0===b&&(b=0),"#"==c?document.getElementById(d):"."==c?document.getElementsByClassName(d)[b]:document.getElementsByTagName(a)[b]},test=function(a){document.body.innerHTML+=a},alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
