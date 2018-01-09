
window.onload = function(){
		//需求：点击足有按钮实现旋转木马。
        //原理：点击右侧按钮，让3号盒子的样式赋值给2号盒子，然后2->1,1->5,5->4,4->3。。。
        //左侧同理。
	    //步骤：
	    //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
	    //2.让页面加载出所有的盒子的样式。
	    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
	    //4.书写函数。
        // (操作数组。正向旋转：删除数组中第一个样式，添加到数组中的最后一位)
        // (操作数组。反向旋转：删除数组中最后一个样式，添加到数组中的第一位)
        var box = document.getElementsByClassName("box")[0];
        var liArr = box.getElementsByTagName("li");
        var arrow = box.getElementsByClassName("arrow")[0];
        var btnArr = arrow.children;

        var arr = [
	 		{   //  1
	            width:400,
	            top:70,
	            left:50,
	            opacity:20,
	            zIndex:2
	        },
	        {  // 2
	            width:600,
	            top:120,
	            left:0,
	            opacity:80,
	            zIndex:3
	        },
	        {   // 3
	            width:800,
	            top:100,
	            left:200,
	            opacity:100,
	            zIndex:4
	        },
	        {  // 4
	            width:600,
	            top:120,
	            left:600,
	            opacity:80,
	            zIndex:3
	        },
	        {   //5
	            width:400,
	            top:70,
	            left:750,
	            opacity:20,
	            zIndex:2
	        }
        ];
        //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
        box.onmouseover = function(){
        	//用opacity来控制显示和隐藏
        	 animate(arrow,{"opacity":100});
        }
        box.onmouseout = function(){
        	 animate(arrow,{"opacity":0});
        }
        //2.让页面加载出所有的盒子的样式。
        for(var i=0; i<liArr.length; i++){
	        //利用animate()框架让指定的属性，缓慢运动到指定位置。
        	animate(liArr[i],{
        		"width":arr[i].width,
        		"top":arr[i].top,
        		"left":arr[i].left,
        		"opacity":arr[i].opacity,
        		"zIndex":arr[i].zIndex
        	});
        }
}