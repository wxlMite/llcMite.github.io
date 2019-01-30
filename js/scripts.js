
	//轮播开始
	var banner=document.querySelector('.banner');
	var oUl=document.querySelector('.banner_ul');
	var oLi=document.querySelectorAll('.banner_ul li');
  console.log(oLid);
  var oUl1=oUl.cloneNode(true);
  banner.appendChild(oUl1);
  oUl1.style.zIndex='9';
  oUl.style.zIndex='10';

	var w=oLi[0].offsetWidth;
	oUl.style.width=w*oLi.length+'px';
	banner.num=0;
	banner.timer=null;

    var oPrev=document.getElementById('prev');
    var oNext=document.getElementById('next');
    var oList=document.querySelectorAll('.banner_list');
    var oP=document.querySelector('.banner p')
    var banner_context=document.querySelectorAll('.banner_context')

    var iNum=0;
    oList[0].classList.add('banner_list_active');
    banner_op(iNum);
    oNext.onclick=function(){
        if(iNum!=oLi.length-1){
          iNum++
        }else{
          oUl.style.left=w+'px';
          oUl1.style.left=-(oLi.length-1)*w+'px';
          iNum=0;
        };
        startMove(oUl,{'left':-iNum*w},banner_op(iNum));
        startMove(oUl1,{'left':-oLi.length*w});
        bannerActiveNum(iNum);
        
    };
    oPrev.onclick=function(){
    	if(iNum!=0){
        iNum--;
      }else{
        iNum=oLi.length-1;
        oUl.style.left=-oLi.length*w+'px';
        oUl1.style.left='0px'
      };
        startMove(oUl,{'left':-iNum*w},banner_op(iNum));
        startMove(oUl1,{'left':w});
        bannerActiveNum(iNum);
    };
    for(var i=0; i<oList.length; i++){
    	oList[i].index=i;
    	oList[i].onclick=function(){
    		iNum=this.index;
    		startMove(oUl,{'left':-iNum*w},banner_op(iNum));
    		bannerActiveNum(iNum);
    	}   	
    }
    
    banner.timer=setInterval(function(){
    	if(iNum!=oLi.length-1){
          iNum++
        }else{
          oUl.style.left=w+'px';
          oUl1.style.left=-(oLi.length-1)*w+'px';
          iNum=0;
        };
        startMove(oUl,{'left':-iNum*w},banner_op(iNum));
        startMove(oUl1,{'left':-oLi.length*w});
        bannerActiveNum(iNum);
    },3000);

    oP.onmouseover=function(){clearInterval(banner.timer);}
    oP.onmouseout=function(){banner.timer=setInterval(function(){
    	if(iNum!=oLi.length-1){
          iNum++
        }else{
          oUl.style.left=w+'px';
          oUl1.style.left=-(oLi.length-1)*w+'px';
          iNum=0;
        };
        startMove(oUl,{'left':-iNum*w},banner_op(iNum));
        startMove(oUl1,{'left':-oLi.length*w});
        bannerActiveNum(iNum);
    },3000);};

    function bannerActiveNum(iNum){
        oList[banner.num].classList.remove('banner_list_active');
        oList[iNum].classList.add('banner_list_active');
        banner.num=iNum;
    }
    function banner_op(iNum){
    	for(var i=0; i<banner_context.length;i++){
    		banner_context[i].style.top=-130+'px';
    	}
    	var delay=null;
    	clearTimeout(delay)
    	delay=setTimeout(function(){startMove(banner_context[iNum],{'top':60})},1000);
    	
    }
    //轮播结束



//运动框架
function getStyle(obj, attr)
{
 if(obj.currentStyle)
 {
  return obj.currentStyle[attr];
 }
 else
 {
  return getComputedStyle(obj, false)[attr];
 }
}
function startMove(obj, json, fn)
{
 clearInterval(obj.timer);
 obj.timer=setInterval(function (){
  var bStop=true;  //这一次运动就结束了——所有的值都到达了
  for(var attr in json)
  {
       //1.取当前的值
       var iCur=0;
   
       if(attr=='opacity')
       {
         iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
       }
       else
      {
         iCur=parseInt(getStyle(obj, attr));
      }
   
      //2.算速度
      var iSpeed=(json[attr]-iCur)/8;
      iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
   
      //3.检测停止
      if(iCur!=json[attr])
      {
       bStop=false;
      }
   
       if(attr=='opacity')
     {
       obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
       obj.style.opacity=(iCur+iSpeed)/100;
     }
      else
     {
       obj.style[attr]=iCur+iSpeed+'px';
     }
}
  
  if(bStop)
  {
   clearInterval(obj.timer);
   
   if(fn)
   {
    fn();
   }
  }
 }, 30)
}