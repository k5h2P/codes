var get={rgb:function(a,b,c){return"rgb("+a+","+b+","+c+")"},id:function(a){return document.getElementById(a)},tag:function(a,b){return void 0===b&&(b=0),document.getElementsByTagName(a)[b]},class:function(a,b){return void 0===b&&(b=0),document.getElementsByClassName(a)[b]},rand:function(a,b){return void 0===b&&(b=a,a=0),Math.ceil(Math.random()*(b-a))+a},upper:function(a){return a.toUpperCase()},lower:function(a){return a.toLowerCase()},proper:function(a){return a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase()},parse:function(a){return parseInt(a)},hyp:function(a,b){return Math.sqrt(Math.pow(a,2)+Math.pow(a,2))},text:function(a){return a.innerHTML},val:function(a){return a.value},copy:function(a){a.select(),document.execCommand("copy")}},set={bg:function(a,b){a.style.background=b},color:function(a,b){a.style.color=b},size:function(a,b,c){"number"==typeof b&&(b+="px"),"number"==typeof c&&(c+="px"),a.style.width=b,a.style.height=c},text:function(a,b){a.innerHTML=b},html:function(a,b){a.outerHTML=b},append:function(a,b){a.innerHTML+=b},val:function(a,b){a.value=b},evt:function(a,b,c){return a.addEventListener(b,c)},int:function(a,b){setInterval(a,b)},delay:function(a,b){setTimeout(a,b)},font:function(a,b,c){"number"==typeof b&&(b+="px"),void 0!==c&&(a.style.fontFamily=c),a.style.fontSize=b}},ctx,can,canvas={name:function(a){can=a,ctx=a.getContext("2d")},resize:function(a,b){can.width=a,can.height=b},clear:function(){ctx.clearRect(0,0,can.width,can.height)},begin:function(){return ctx.beginPath()},close:function(){return ctx.closePath()},width:function(a){ctx.lineWidth=a}},draw={line:function(a,b,c,d){ctx.moveTo(a,b),ctx.lineTo(c,d),ctx.stroke()},curve:function(a,b,c,d,e,f){ctx.moveTo(a,b),ctx.quadraticCurveTo(c,d,e,f),ctx.stroke()},rect:function(a,b,c,d){ctx.strokeRect(a,b,c,d)},fillRect:function(a,b,c,d){ctx.fillRect(a,b,c,d)},circle:function(a,b,c){ctx.arc(a,b,c,0,2*Math.PI),ctx.stroke()},fillCircle:function(a,b,c){ctx.arc(a,b,c,0,2*Math.PI),ctx.fill()},stroke:function(a){ctx.strokeStyle=a},fill:function(a){ctx.fillStyle=a}};
