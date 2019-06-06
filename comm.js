function $(obj) {
  if(!obj) return '找不到该节点';
  return document.getElementById(obj);
 }

 function $el(obj) { 
  if(!obj) return '找不到该节点';
  return document.getElementsByClassName(obj);
 }