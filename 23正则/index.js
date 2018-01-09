window.onload = function(){
	var pwd = document.getElementById("pwd");

	/*//QQ
	addEvent("ipt1",function(){
		//正则表达式判断格式是否正确
		if(/^[1-9][0-9]{4,}$/.test(this.value)){
			setClassName(this,"right");
			setInnerHTML(this,"输入正确！");
		}else{
			setClassName(this,"wrong");
			setInnerHTML(this,"输入格式有误");
		}
	});*/
	//qq号
    addEvent("ipt1", function () {
        if(/^[1-9][0-9]{4,}$/.test(this.value)){
            setClassName(this,"right");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });
	//手机
	addEvent("ipt2",function(){
		if(/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/.test(this.value)){
			setClassName(this,"right");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
	});
	 /*//手机号
	addEvent("ipt2", function () {
        if(/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/.test(this.value)){
            setClassName(this,"right");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
	 });*/

    //邮箱
    addEvent("ipt3", function () {
        if(/^[\w\-\.]{5,}\@[\w]+\.[\w]{2,4}$/.test(this.value)){
            setClassName(this,"right");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });


    //座机
    addEvent("ipt4", function () {
        if(/(^0\d{2}-8\d{7}$)|(^0\d{3}-3\d{6}$)/.test(this.value)){
            setClassName(this,"right");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });


    //用户名
    addEvent("ipt5", function () {
        if(/^[a-zA-Z0-9_-]{3,16}$/.test(this.value)){
            setClassName(this,"right");
            setInnerHTML(this,"恭喜您,输入正确！");
        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });


    //密码
    addEvent("ipt6", function () {
        if(/^[a-zA-Z0-9_\-$]{6,18}$/.test(this.value)){
            setClassName(this,"right");
            setInnerHTML(this,"恭喜您,输入正确！");
            password.className = "pwd str1";
            //只有密码通过了，才能执行密码强度测试
            //从大往小判断。
            if(/^[A-Za-z0-9]+[_$][A-Za-z0-9]*$/.test(this.value)){
                password.className = "pwd str4";
            }else if(/^([a-z].*[0-9])|([A-Z].*[0-9])|[0-9].*[a-zA-Z]$/.test(this.value)){
                password.className = "pwd str3";
            }else if(/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(this.value)){
                password.className = "pwd str2";
            }

        }else{
            setClassName(this,"wrong");
            setInnerHTML(this,"格式错误！");
        }
    });
	/*//因为每次都要这样调用，所以很繁琐，我们通过封装实现代码
	//添加事件
	function addEvent(str,fn){
		document.getElementById(str).onblur = fn;
	}
	//获取span标签对象,设置类名，来控制其格式
	function setClassName(aaa,txt){
		var span = aaa.nextElementSibling||this.nextSibling;
		span.className = txt;
	}
	//获取span标签对象,设置其内容
	function setInnerHTML(aaa,txt){
		var span = aaa.nextElementSibling||this.nextSibling;
		span.className = txt;
	}
*/

	//因为每次都要这样调用，所以很繁琐，我们通过封装实现代码
    function addEvent(str,fn){
        document.getElementById(str).onblur = fn;
    }

    function setClassName(aaa,txt){
        var span = aaa.nextElementSibling || this.nextSibling;
        span.className = txt;
    }
    function setInnerHTML(aaa,txt){
        var span = aaa.nextElementSibling || this.nextSibling;
        span.innerHTML = txt;
    }
}