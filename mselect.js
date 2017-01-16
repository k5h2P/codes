var $=function(a,b){var c=a.slice(0,1),d=a.slice(1);return void 0===b&&(b=0),"#"==c?document.getElementById(d):"."==c?document.getElementsByClassName(d)[b]:document.getElementsByTagName(a)[b]};
