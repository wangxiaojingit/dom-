var utils={};
utils.pre=function(ele){
    var p=ele.previousSibling;
    while(p){
       if(p.nodeType==1){
         return p
       }
       p=p.previousSibling;
    }
    return null;
}
/*

获取ele 前面的所有兄弟节点

*/
utils.preAll=function(ele){
    var ary=[];
    var p=ele.previousSibling;
    while(p){
       if(p.nodeType==1){
         ary.unshift(p)
       }
       p=p.previousSibling;
    }
    return ary;

}
utils.next=function(ele){
  var p=ele.nextSibling;
  while(p){
    if(p.nodeType==1){
      return p
    }
    p=p.nextSibling
  }
  return null

}

utils.nextAll=function(ele){
    var p=ele.nextSibling;
    var ary=[];
    while(p){
      if(p.nodeType==1){
        ary.push(p)
      }
      p=p.nextSibling;
    }
    return ary;
}

/*
 获取ele所有的兄弟节点

*/
utils.siblings=function(ele){
    var childlists=ele.parentNode.childNodes;
    var ary=[]
    for(var i=0;i<childlists.length;i++){
      if(childlists[i].nodeType==1&&childlists[i]!=ele){
        ary.push(childlists[i])
      }
    }
    return ary;
}

/*
 获取ele的索引
*/
utils.index=function(ele){
   return this.preAll(ele).length;
}

/**
 * 通过类名获取元素
 *  //    var str="( +)"+curk+"( +)";
        //    var reg=new RegExp(str)
 */
utils.getElementsByClassName=function(strName,context){
   var contexDom=context||document;
   var nodelists=contexDom.getElementsByTagName("*");
   var strNames=strName.replace(/^ +| +$/g,"").split(/ +/);
   var ary=[];
   for(var i=0;i<nodelists.length;i++){
       var curele=nodelists[i];
       var cur=curele.className;
       var flag=true;
       for(var k=0;k<strNames.length;k++){
           var curk=strNames[k];
           if(cur.indexOf(curk)==-1){
            flag=false;
            break;
           }
       }
       if(flag){
         ary.push(curele)
       }
   }
   return ary;


}

/**
 * 获取元素的偏移量
 */

  utils.offset=function(ele){
    var p=ele.offsetParent;
    var l=ele.offsetLeft;
    var t=ele.offsetTop;
    while(p&&p.tagName.toLowerCase()!="body"){
       if(navigator.userAgent.indexOf("MSIE 8.0")>-1){
          l+=p.offsetLeft;
          t+=p.offsetTop;
       }else{
        l+=p.offsetLeft+p.clientLeft;
        t+=p.offsetTop+p.clientTop;;
       }
       p=p.offsetParent;
    }
    return {left:l,top:t}
  }
