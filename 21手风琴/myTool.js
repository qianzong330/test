//隐藏和显示盒子封装
function show(ele){
    ele.style.display = "block";
}
function hide(ele){
    ele.style.display = "none";
}


/*//缓动动画封装
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetTop)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(1);
        if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },10);
}*/
    //缓动框架封装函数
    function animate(ele,json,fn){
        //要用定时器，先清定时器
        clearInterval(ele.timer);
        ele.timer = setInterval(function(){
            //开闭原则
            var bool = true;

            for(var k in json){ 
                var leader = parseInt(getStyle(ele,k)) || 0;
                var step = (json[k]-leader)/10;
                step=(step>0)?(Math.ceil(step)):(Math.floor(step));
                leader=leader+step;
                ele.style[k] = leader + "px";                     
                //4.清除定时器
                //判断: 目标值和当前值的差大于步长，就不能跳出循环
                //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
                if(json[k] !== leader){
                    bool = false;
                }
            }      
            console.log(1);
            //只有所有的属性都到了指定位置，bool值才不会变成false；
            if(bool){
                console.log(2);
                clearInterval(ele.timer);

                //所有程序执行完毕了，现在可以执行回调函数了
                //只有传递了回调函数，才能执行
                if(fn){
                    fn();
                }
            }
        },5);
    }

    //兼容方法获取元素样式
    function getStyle(ele,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(ele,null)[attr];
        }
        return ele.currentStyle[attr];
    }


/**
 * Created by andy on 2015/12/8.
 */
function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
/**
 * Created by Lenovo on 2016/9/2.
 */
/**
 * 通过传递不同的参数获取不同的元素
 * @param str
 * @returns {*}
 */
function $(str){
    var str1 = str.charAt(0);
    if(str1==="#"){
        return document.getElementById(str.slice(1));
    }else if(str1 === "."){
        return document.getElementsByClassName(str.slice(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断，如果不是传递过来的元素本身，那么添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
