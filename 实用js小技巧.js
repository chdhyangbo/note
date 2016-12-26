js三个组成 ES BOM DOM
1.  
	var p = document.getElementById("p1");
	console.log(p);
	var i;
	var j;
	var flag;
	for(i = 2;i<=100;i++){
		flag =true;
		for(j=2;j<i;j++){
			if(i%j==0){
				flag=false;
				break;
			}
		}if(flag){
				console.log(i);
			}	
	}
2.三个输出命令
2.1 弹出警示框 alert()
2.2 控制台输出 console.log();
	控制台警示 console.warm();
	控制台错误提示 console.error();
2.3 文档打印输出 document.write() 
3.全局变量 为在外部声明的变量或（隐式全局变量）在函数内部但是没有声明var 的变量
  局部变量 在函数里声明的变量
	  全局变量污染:当定义了许多相同名称的全局变量的时候,他们会产生冲突
	  jquery中唯一两个全局变量:query,$;
	  一个好的程序尽量减少全局变量
	  全局污染的解决
		  内嵌函数封装变量:创建私有变量
		  闭包
		  对象
		  立即对象+闭包
4.行内式引号的应用，外双内单
<button onclick ="alert('ok')"></button>
<button onclick ="fun();"></button>
<a href ="javascript:;"></a>
<a href ="javascript:void(0);"></a>
5.数据类型检测(重要)
	js的数值类型共有:string,number,boolean,null,underfine,object,array
	返回值为下面的情况
	underfined 为未定义,指变量,函数未声明
	null 指空值,指声明后未赋值
	简单的number,string类型检测用typeof
	对象([object Object])和数组([object Array])用toString.call();
5.1 利用typeof 检测something的数据类型
	具有不完美性,如果都是对象,只能检测出object如数组和对象
	console.log(typeof something);
5.2 利用 Object.toString.call(something) 检测something的数据类型
	//Object.prototype.toString.call() 用于判断的固定用法
	console.log(toString.call(something));
5.3 利用instanceof 的返回值来判断数据类型
	用的很少
	console.log(something instanceof Array);
5.4 利用jquery的isArray()等方法
5.5 利用constructor判断其构造函数
	console.log(something.construtor === Array);
	construtor 为构造函数的隐藏属性,用于检测某个实例的构造函数是哪一个?
	实例拷贝原理
	每次实例化一个构造函数,都会开辟新的内存空间给拷贝得来的构造函数所有的属性,包含已定义的和系统自动生成的,并且赋予新值
6.布尔型的转换
// 转为布尔型
!!变量
//变量为下面的类型的布尔值
false undefined null 0 " " 为false
true 1 "somestring" [object] 为true
7.num++如果数值为字符串依旧可以进行运算
  num=num+1 则会转为字符型
8.数值型的转换 
数值的前面带0 表示八进制 如020=16
数值的前面带0x 表示16进制 0-9 a-f 如0xb=11
8.1 转为数值型利用 - * /除了 +
8.2 Number() //强制转换
8.3 parseInt() 取整不约 parseInt(值,进制)
	parseFloat()
8.4 其他类型转为字符串
	toString();
	" "+ ;
9.变量提升
在函数体内部，（不管任何位置）声明变量，会把该声明提升到最顶端，只声明变量，不赋值
函数声明能够提升
var fn(){}
函数表达式仅是声明部分被提升
var fn2 = function(){}

10.得到形参和实参的数据
//得到形参的个数
fun.length
//得到实参的个数
arguments.length
//得到实参
arguments
11.表达式专题
	普通表达式
	逗号表达式
	短路表达式 && ||
	三元表达式
12.表单
12.1获得/失去焦点
onfocus()
onblur()
// 加载自动获得焦点
window.onload=function(){
	var something=getElementById('someId');
	something.focus();
}
12.2 文本框全选
something.onmouseover=function(){
	this.select();
}
12.3 选择表单
	// 拿到所有的表单元素，注意先把写form标签
	document.forms;
	//对表单里面的input,可以直接通过name来拿到。【0】是你的第一个表单。
	document.forms[0].name;
	// 选择文件，multiple使得能多选
	<input type="file" multiple/>
13 数组的调用
var lis = document.getElementsByTagName("li");
for(i=0;i<lis.length;i++){
	lis[i].innerHTML="";
}
14.oninput
oninput 事件在用户输入时触发。
该事件在 <input> 或 <textarea> 元素的值发生改变时触发。
IE 78
onpropertychange
15.数组的使用（效率）
for(var i,len=arr.length;i<len;i++){
	//比起（var i;i<arr.length;i++），它只需检测一次数组
}
16.input取得的值都为字符型
17.排他思想
凡是样式清除其他样式只留下自己
for (var i = 0,lenb=btn.length; i < lenb; i++){
	btn[i].index = i;
	btn[i].onclick = function(){
for(var j=0;j<divs.length;j++){
	btn[j].className="";
	divs[j].style.display="none";
}
this.className="current"
divs[this.index].style.display = "block";
}
}
// 得到按钮的数值以调动相应的盒子
18.数组的添加和删除
18.1 push() 在数组的后面添加一个或者多个元素，并返回新的长度
	 pop() 移除最后一个元素，返回它的值
18.2 unshift() 在数组的前面添加一个或者多个元素，并返回新的长度
	 shift() 删除第一个值，并且返回它的值
18.3 var arr[1,2,3]
	 console.log(arr.push(5));
	 // 返回的是数组的长度，为4

18.4 对字符串的操作
连接   concat("符号") 连接两个数组，返回它们连接后的副本（字符串）
分离   split("符号")  将字符串转化为数组
取任意 slice(要取起始位置,[结束位置,取到结束位置但不包括]) 如果起始位置为复制，则从右边开始取 
	   substr(起始位置,取的个数); 
	   substring(小的值为起始位置,打的值为结束位置);
charAt()   查询某个数值的字符是
indexOf()  查找某个字符的索引值

slice(indexOf(sth)); 取某个字符后面的所欲字符
split() 以  为界限分割所有字符串

19 节点的访问
19.1 document.getElem entById()
	 document.getElementsByTagName()
	 document.getElementsByClassName()//得到class存在兼容性问题，IE678不支持
19.2 封装自己的class类
function getClassName(classname){
		//支持的浏览器
		if (document.getElementsByClassName) {
			return document.getElementsByClassName(classname);
		}else{
			//不支持的浏览器
			var arr = [];
			var dom = document.getElementsByTagName("*");
			for (var i = 0; i < dom.length; i++) {
				var textarr = dom[i].className.split(" ");
				for (var j = 0; j < textarr.length; j++) {
					if (textarr[j] == classname) {
						arr.push(dom[i]);
					}
				}
			}
			return arr;
	}	
20 节点
20.1 父节点parentNode
<div>
 <img src="" alt=""/>
 <div id = "btn_closs">x</div>
</div>
<script>
	var closs = document.getElementById("btn_closs");
	closs.onclick = function(){
		this.parentNode.style.display="none";
	}
</script>
20.2 子节点children
20.3 兄弟节点 
21 创建/移除节点
var dom = document.createElement("");
	// 插入孩子节点，到最后面 appendChildren();
	   插入孩子节点，到某元素前面 insertBefore(插入的元素,作为参照在它后面的元素null则默认在最后面) 
	removeChild()
	cloneNode(); 可带参数，为true时复制子节点，为false,仅复制此类
22 获得/设置节点属性
	getAttribute("");
	setAttribute("属性","值");
	removeAttribute("");
23 下拉菜单
onchange() //onchange事件识别下拉菜单的选项更改
<select id="xiala">
<option value="1"></option>
<option value="2"></option>
<option value="3"></option>
</select>	

24 日期函数（时间）
var date = new Date() ;
//声明后使用,获得毫秒数
date.getTime();
date.valueOf();
//直接使用
Date.now();
+new Date();
//得到年，月，日，星期
date.getFullYear()
date.getMouse()返回0-11
date.getDate()
date.getHours(); //获取时，
date.getMinutes(); //分
date.getSeconds(); //秒
date.getDay()//返回0-6
//得到星期
var date = new Date();
var arr = ["周日","周一","周二","周三","周四","周五","周六"]
var xinqi = arr[date.getDay()];
//定时器 每隔一定秒数执行函数
var timer = setInterval("执行函数不加小括号",间隔豪秒数)
clearInterval(timer);
setInterval里调用的函数如果传参的话只会运行一次,因为setInterval的第一个参数为获取函数的引用地址,若果加()
被视为函数立即运行,并获取他的返回值作为引用地址进行一定时间的循环.
解决的办法有:
	1.加匿名函数包裹传参函数
	2.加""包裹以字符串形式传参函数
	3.创建一个return值为该函数的函数进行调用
//定时器 隔五秒后执行一次此函数
setTimeout("执行函数不加小括号",间隔豪秒数); 
//递归：函数自己调用自己的过程
var count = 5;
var speed = 1000;
setTimeout(fun,speed);
function fun(){
	//递归的退出条件
	count--;
	if(count <= 0){
		//todo 
		//window.location.href = "";
	}
	else {
		setTimeout(arguments.callee,speed);
	}
}

//自定义时间
var time = new Date("2017/12/12 17:30:00");//兼容性好
var time =new Date(2017,12,12);
//转换为可以识别的日期
.toLocateDateString();
//转换为可以识别的时刻
.toLocateTimeString();
function getDate(){
				var date = new Date();
				var H = date.getHours();
				var M = date.getMinutes();
				var S = date.getSeconds();
				var json = {
					hour:H,
					minute:M,
					second:S
				}
				return json;
			}
24 旋转
.style.WebkitTransform = "rotate(60deg)";
25 组件不可用
this.disable = ture;
或者
btn.disable = "disable";

26 arguments.callee 返回正在执行的函数，用此来代替递归中的函数名本身。
27 运算符
   = 赋值
   == 判断
   === 全等于
   != 不等于
   !== 不全等于
   a&&b 首值为假返回假，否则返回第二个,0与任何数，或任何数与0，都为0
   a||b 首值为真返回真，否则返回第二个(短路表达式,左边为真返回左边,否则返回右边,用以简化if语句)
   与的级别比或要高，先与后或
28 toString(基数) 基数即为进制数，用此方法转换进制
   charCodeAt()  检测编码
   charAt()   检测字符
   indexOf()  检测字符的位置
   lastIndexOf() 从后面检测字符的位置，返回正序排位
检测数组长度
function charString(str){
	var len = 0;
	var c = 0;
	for (var i = 0; i < str.length; i++) {
		c = str.charCodeAt(i);

		if(c>=0 && c <= 127){
			len++;
		}
		else{
			len+=2;
		}
	}
	return len;
}
29 将url编码解码 
encodeURLComponent() 编码 
decodeURLComponent() 解码

30 缓动动画
   var leader = 0, target = 0;
   setInterval(fun,30);
   function fun(){
   	leader = leader + (target - leader )/10;
   	ul.style.left = leader + "px";
   }

31 offset 家族
	获取元素自身尺寸的
31.1 得到对象的宽高
	offsetWidth=width+border+padding
	clientWidth = width+padding //不含border的offsetwidth
	scrollWidth = width +padding //包括溢出内容的高度
	offsetHeight=height+border+padding
31.2 返回距离上级盒子（带有定位）左边和上边的位置
	offsetLeft
	offsetTop
31.3 返回父级（带有定位）的尺寸,所欲父级无定位则为body
	offsetParent ();

32 event 事件 //所有在网页上进行的活动都会被event记录为事件
鼠标位置识别
//以浏览器窗口可视区域为基准点
event.clientX;
event.clientY;
//应对ie 678 兼容性问题,其需用 固定 句式 window.event.clientX,所以下列转换
//window.onclick = function(event){
//var event = event || window.event;
//event.clientX;
//}
//以文档为基准点
pageX
pageY
//以电脑屏幕为基准点
screenX
screenY
32.1 获得盒子内鼠标移动的坐标值//用鼠标位置减去盒子的位置值
div.onmousemove = function(event){
	var event = event || window.event;
	var x = event.clientX - this.offsetLeft;
	var y = event.clientY - this.offsetTop;
	console.log(x+""+y+"");
}
32.2 点击跟随鼠标
	var ledX = 0, ledY = 0, targetX = 0, targetY = 0;
	document.onclick= function(event){
		var event = event || window.event;
		targetX = event.clientX;
		targetY = event.clientY;
		 ledX = ledX + (targetX - ledX)/10; 
		 ledY = ledY + (targetY - ledY)/10; 
		 div.style.left = divX - div.offsetWidth/2;
		 div.style.top = divY - div.offseHeight/2;
	}
		

33 取消选择
		window.getSelection?window.getSelection().removeAIIRanges():document.selection.empty();
34 滚动条
小滚动条高度 = 容器高度的平方/内容高度
如果小滚动条高度= 容器高度则隐藏
35 访问HTMl结构
document.body
document.head
document.title
35.2 页面滚动事件
window.onscroll = function(){
	//谷歌浏览器和未加DTD <!doctype>
	document.body.scrollTop
	//火狐浏览器和其他浏览器
	document.documentElement.scrollTop;
	//最新的浏览器
	window.pageYOffset;
//兼容性写法
var scrollTop = document.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; 
}
//scroll方法的封装
function scroll(){
	if (window.pageYOffset != null ) {
		return {
			left:window.pageXOffset,
			top:window.pageYOffset
		}
	}
	else if (document.compatMode == "CSS1Compat"){
		return {
			left:document.documentElement.scrollLeft,
			top:document.documentElement.scrollTop
		}	
	}
	return {
		left:document.body.scrollLeft,
		top:document.body.scrollTop
		}	
} 
35.3 改变窗口事件
	window.onresize = function(){
		//窗口或者框架在改变大小时调用
	}
//检测屏幕的宽度 封装
function client(){
	if (window.innerWidth != null ) //检测i9+最新浏览器
	{
		return {
		width:window.innerWidth,
		height:window.innerHeight
		}
	}
	else if (document.compatMode === "CSS1Compat") //检测正常浏览器
	{
		return {
		width:document.documentElement.clientWidth,
		height:document.documentElement.clientHeight
		}	
	}
	return {
		//怪异浏览器
	width:document.body.clientWidth,
	height:document.body.clientHeight
		}	
}
35.4 函数优先级和函数体的调用
//加括号只运行一次，onresize 是代码体优点在可不断调用
	window.onresize = onresize;
	window.onresize = onresize();

35.5 window.scrollTo(x,y)//把内容滚动到指定的坐标

36 阻止冒泡
sth.onclick = function(event){
   var event = event || window.event;
   if(event && event.stopPropagation())
 	event.stopPropagation();//w3c标准
   else{
   	event.cancelBubble = true; //ie678
   }
}
36.1 判断当前对象的id名(兼容性写法)
var event = event || window.event
var targetId = event.target ? event.target.id : event.srcElement.id;
36.2 获得选取的文字
	 var txt ;
	 if(window.getSelection){
	 	//正常浏览器
	 	txt = window.getSelection().toString();
	 }
	 else{
	 	//ie
	 	txt = document.selection.createRange().text();
	 }
	 if(txt){
	 	//如果为空，不做任何操作
	 	fun(x,y,txt);
	 }

37 动画原理	 (动画封装)
盒子原来的位置 + 步长
动-自动-停 自停
//匀速运动封装01
function animate(obj,target){
	var timer = null;
	obj.timer = setInterval(function(){
		obj.style.left = obj.offsetLeft + 10 +"px";
		if(obj.offsetLeft >= target){
			clearInterval(obj.timer);
		}
	},30);
}
//匀速运动封装02
function animate(obj,target){
	var speed = obj.offsetLeft > target?-5:5;
	var timer = null;
	obj.timer = setInterval(
	function(){
		var reasult = target - obj.offsetLeft ;
		obj.style.left = obj.offsetLeft + speed + "px"; 
		if(Math.abs(reasult) >= 5){
		clearInterval(obj.timer);
		obj.style.left = target + "px";
		}
	},30);
}
37.2 缓动动画
function animate(obj,target){
	var timer = null;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
    var step = (target - obj.offsetLeft)/10;
    step = step > 0?Math.ceil(step):Math.floor(step);
    obj.style.left = obj.offsetLeft + step + "px";
    if(obj.offsetLeft == target){
    	claarInterval(obj.timer);
    }
	}, 30)
}
37.3 封装缓动
function animate(obj,attr,target){
	var timer = null;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
	var current = parseInt(getStyle(obj,attr));
	var step = (target - current)/10;
	step = step>0?Math.ceil(step):Math.floor(step);
	obj.style[attr] = current + step + "px";
	if(current = target){
		clearInterval(obj.timer);
	}	
	},30);
}
37.4 多值缓动封装
function animate(obj,json，fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(){function(){
		var flag = true; //做一个开关
		for(var attr in json){
			var current = parseInt(obj.getStyle(obj,attr));
			var step = (json[attr] - current)/10;
			step = step>0 ? Math.ceil(step):Math.floor(step);
			if(attr == "opacity"){ //是否有透明度
				if("opacity" in obj.style){ //浏览器是否支持opacity关键字
					obj.style.opacity = json[attr];
				}else{
					obj.style.filter = "alpha(opactiy=" +json[attr]*100+")";
				}
			}else{
				obj.style[attr] = current + step + "px";

			}

			if(current != json[attr]){
				//只要其中一个条件不满足，即不停止定时器
				flag = false;
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				//如果函数不为空，则执行回掉函数
				fn();
			}
		}
	},30};
}



38 Math
   取整函数
   Math.round() //四舍五入
   Math.ceil() //向大数取整
   Math.floor() //向小数取整
   乘方和开根
   Math.pow(基数,方);
   Math.aqrt();
   使用-、*、/、%， 即使不进行格式转换，计算机也会自动帮我们进行“隐式转换”,把数值型转化为数值。
   ==不严谨，会将不同类型的东西，转为相同类型进行比较("5"==5 为true),所以有===;
   累加器
   //累加器定义在for外面
   var sum =0;
   for(){
   	//不能再for里定义sum
   	sum+=i;
   }
   console.log(sum);
39 获得css属性的值
  //点数发，只能取得行内式，值无法作为一种参数进行传递
  div.style.width;
  //利用"[]"可传参，只能取得行内式
  div.style["widht"]；
  //ie opera 外联和行内都可用
  div.currentStyle[];
  //w3c浏览器
  window.getComputedStyle("元素","伪类")[]
  //兼容性的获得css属性的值
  function getStyle(obj,attr){
  	if(obj.currentStyle){
  		return obj.currentStyle[attr]; //ie opera
  	}
  	else{
  		return window.getComputedStyle(obj,null)[attr]; //w3c
  	}
  }
40 json 遍历//for in 遍历
   for( 变量 in 对象)
   for( var k in json){
   		k;//为属性名，在数组中表现为索引号
   		json[k];//属性值，在数组中表现为数组值
   } 
40.1 json 格式
	里面所有变量为键值对,没有用等于号的都是冒号.涉及数组都用[]先包起来
	var data = {list: ["aui", "test"]};
	//字符串格式json
	var data = '{"name":"jjj","title":"北国雪"}'; 
40.2 json对象和字符串的转化
	// 后台传过来的只是字符串 字符串转json
	var　something = JSON.parse(json字符串);
	//转成字符串回后台
	JSON.stringify(json); 
41 闭包
	当函数a的内部函数b被函数a外的一个变量引用的时候，就创建了一个闭包。
	优点：不产生全局变量，实现属性私有化
	缺点：闭包中的数据会常驻内存，在不用的时候要删掉否则会导致内存的溢出。
42 对象:多个函数的集合,工作包
	对象就是有属性和方法
	两种声明对象的方法
	1. var obj = new Object();
	2. var obj = {
		somewhat ： function(){}
	}; //推荐用第二种
	   obj.height = 200 ; //声明属性
	   obj.somewhat = function(){}//尚明方法
	3. object.create();
	4.区别 推荐使用第二种方式，第一种存在效率问题,因为new 了对象，涉及到原型查找的问题
42.1 构造函数，一般约定首字母大写，里面用this指向调用事件的对象。
	 new 加构造函数，可以生成一个新的实例
42.2 prototype （原型）解决函数使用量多，重复执行的效率低
	//把不用的属性和方法定义在prototype上
	类.prototype.方法 = funciton (){}
42.3 对象分 值类型和引用类型
	值类型创建一个变量,内存创建一个区域如undefined,string,num
	引用类型建一个变量,内存中保存的是变量入口的地址如数组,函数,object和json,null
42.4 堆栈内存
	 堆内存	保存引用类型的值和方法等
	 栈内存 保存值类型的值和引用类型的地址
	 内存的生命周期
	 内存分配-内存使用-内存回收
	 内存的回收: 栈内存:回收机制:执行完自动回收,清空堆内存
	 		    堆内存:两种,自动回收和手动回收.实例化则生成引用计数 每用加一,回收减一,到零则释放所有内存;值为null则减一
	 内存泄漏:一块被分配的内存既不能被使用也不能被回收	    
43 html 新的选择器
	document.getElementsByClassName();
	// 返回第一个满足选择器条件的元素
	document.querySelector("Selector");
	// 返回所有满足该条件的元素
	document.querySelectorAll("Selector");
43.1 增加减少类属性
	.classList.add("类名");
	.classList.remove("类名");
	.classList.toggle("类名",true/false/！exist);
	//true 加类，false 减类
	//用下面方法
	//var exist = this.classList.contains("类名");
43.2 访问历史api
	window.history.forword();
	window.history.back();
	//go(url),不传参数即为刷新；
	window.history.go();
	//利用popState事件可以哪会来
	history.pushState("数据"，"标题自己定义的，现在浏览器不支持","url");
43.3 全屏apI
	让页面整个组件全屏
	document.body.webkitRequestFullScreen
	if(sth.webkitRequestFullScreen){
		sth.webkitRequestFullScreen();
	}else{
		console.log("浏览器不支持");
	}
43.4 本地缓存
43.5 文件api
通过表单控件呈现文件列表
文件拖拽
// 短路运算
// var data = e.dataTransfer.getData("text/plain") || e.dataTransfer.getData("text/uri-list");
// 拖拽图片和文字的代码
// var data = e.dataTransfer.getData("text/plain");
// if(data){
// target.innerHTML = data;
// } else{
// var img = document.createElement("img");
// img.src = e.dataTransfer.getData("text/uri-list");
// target.appentChild(img);
// }
// 得到文件
// var fileslist = e.dataTransfer.files;

// 注册事件
var target = document.querySelector("#target");
//绑定拖拽，拖中，拖后的事件
target.addEventListener("dragenter",function(){});
target.addEventListener("dragleave",function(){});
target.addEventListener("dragover",function(e){
	//消除浏览器的默认事件和冒泡事件
	e.preventDefoult();
	e.stopPropagation();
});
//绑定放置事件
target.addEventListener("drop",function(e){
	//todo
	//阻止默认事件和冒泡事件
	e.preventDefoult();
	e.stopPropagation();
	
});

44 函数(面向对象)专题
   javaScript 的执行机制
   1.预解析 //将所有的函数定义，变量声明都提前到开头，但是变量声明的赋值不提前
   2.执行  //从上到下执行代码，例外有那些触发时间和定时器
   javaScript作用域
   1.全局作用域
   2.函数作用域
   //3.try作用域
   //没有块作用域例如for里面是属于全局作用域
   //保留作用域可以用闭包
	javaScript的函数既是一个对象也是一个函数。
44.1 原型对象
	 原型对象的属性和方法可以被所有的实例共享
	 prototype属性,保存的就是地址,是构造函数中的隐藏函数;作用:将实例和原型对象联系在一起
	 属性搜索机制:
	 先在自身的属性列表中寻找,找不到先寻找自身的隐藏属性,之后在原型对象中寻找.
	 属性屏蔽理论:
	 因为构造函数中有属性或方法屏蔽了同名原型属性或者方法
	 寻找方式有两种:一是删除掉构造函数中的属性,二是通过"构造函数名".prototype.属性名/方法名()调用:Product.prototype.name;
	 在构造函数中创建属性,在原型中构建方法,节省内存.
	 尽量不在原型中添加属性,如果大家只读不修改的公共常量值,可以放在原型上.
	 function fn(option){
	 	this._init(option);
	 }
	 fn.prototype = {
	 	_init:function(option){
	 		//能取0值
	 		this.age = option.age=0?option.age||0;
	 		//不能取0值
	 		this.long = option.long || 0;
	 		//......
	 	}
	 	render:function(){
	 		//TODO
	 	}
	 } 
44.2 四种函数的调用模式
	 第一种 函数执行模式 this === window
	 第二种 对象方法调用模式 this === 调用者
	 所有的事件响应方法,都是对象方法的调用模式
	 第三种 构造器的调用模式 this === 实例化的对象
44.3 变量
	定义变量的过程就是内存分配的过程
	变量搜素机制:先搜索局部变量,如果找不到,则搜素全局变量
		var a = 10;
	function fn(){
		console.log(a);
		var a = 1;
	}
44.4 设置器和取值器(利用set,get进行属性包装)
	Object.defineProperty(this,"要包装的属性(someDate)",{
		//返回日期
		get:function(){
			//return someDate.toLocaleDateString();
			return someDate.toLocaleString();
		},
		//设置日期
		set:function(values){
			sonmeDate = values;
		}
	});
44.5 权限
	Object.defIneProterty(this,"需管理权限的属性",{
		value : 50000;
		writable:false/true;
	})
44.6 函数中的公有属性(方法)和私有属性(方法)
	定义:公有属性为函数实例化后能被其他函数所调用的属性
	创建公有属性(方法)的方法:用this创建属性和方法
	创建私有属性(方法)的方法:在函数内部用var 创建函数或者属性
	私有属性的封装
	//定义私有方法
	var bindDom = function(){};
	var bindImage = function(){};
	//或者
	//function bindDom(){}
	//function bindImage(){}
	//
	//var that = this;
	//这种方式定义函数经常出现this的问题
	//
	//公有方法调用私有方法使得私有方法可用不可见
	this.init = function(){
		bindDom();
		bindImage();
	};
	引申出公有变量
	定义一个config对象保存当前对象的临时变量,这样其他成员皆可访问
	a.统一管理
	b.方便内存回收
	c.解决代码重复性问题
44.7 面向对象三个作用
	面向对象编程
	描述数据 -对象的字面量形式-json
	封装框架
45 对象
	 我们学习的所有函数,都是某一种对象的方法
	 对象分为内置对象,BOM对象,自定义对象
	 内置对象:string,date,function,Math,Object,Boolean,Null,Cookie,Array,Error,Number
	 BOM对象(浏览器对象模型):window,docunment,history,location,screen,Navigator
45.1 创建对象的方式
 	Object 利用.或者[]取值或者赋值,缺点重复太多.
 	工厂模式 不需new
 	构造函数
 	原型对象 只是引用类型有用,值类型无法存在共享缺陷
 	混合模式=构造函数+原型对象
 	拷贝模式  extend
 	function extend(target,source){
 		//sourcr为拷贝对象,target为目标对象
 		for(var i in source){
 			target[i]=source[i];
 		}
 		return target;
 	}
 	var something = extend({},要拷贝的json);
 	将多个json拷贝给目标使用argument();
 	第三方框架 
45.2 BOM对象
	window对象常用方法
	打开新窗口
	window.open(url);
	将字符串当做js代码执行
	window.eval(string)
	我们定义的所有全局变量,函数,对象都会成为window对象.
	也即是,平常的调用都是省略掉了window. 去访问
	window.location地址对象:url,协议,端口,查询字符串
	urL属性:uniform Resource locator 统一资源定位符
	window.location = "url"; //改变当前窗口的地址,打开新的网页
	history.back();//后退
	history.forward()//前进
	window.document 对象--dom树结构
	dom树的增删查改javaScript,jquery
45.3 小对象详解
45.3.1 event对象
		法宝:target
		事件对象的默认对象
		e.target  //指向当前目标对象,效果类似this
46 框架:屏蔽了复杂性,屏蔽了兼容性
   使用框架的原因:由于每个浏览器厂商对js的开发技术不一样,兼容性也不一样,有些时候用原生会非常麻烦,所以使用通用框架
   封装框架的三种方式
   1.使用原型对象(应用前需要实例化 sth.portotype= {方法:函数};  sb = new sth;)
   2.字面量形式(如json,var sth = {方法:函数})
   3.extend:将一个对象里面的所有的属性和方法拷贝给另一个对象,起到模块化的作用 (sth.extend{sth,{...}};)
   框架的作用
   1.方便使用者快速开发
47 a instanceof b 判断a是否为b的实例对象,返回true/false
48 正则表达式
	/  /为表示正则表达式对象的形式
	\w 匹配数字或字母 \W 相反,相面字母爱的大写同理相反
	\s 匹配空格
	\d 匹配数字
	(*) 表示匹配0或者任意次
	(+) 表示匹配前面的字符至少一次或者多次
	(>) 表示匹配前一个字符1或者0次
	[-] 表示字符的集合
	() 把括号里的内容作为一个整体

	//去掉字符前后的空格
	init.prototype = {
		rtrim:function(str){
			return str.replace(/(\s*$)/g,'');
		},
		//检测开头有没有空格
		ltrim:function(str){
			return str.replace(/(^\s*)/g,'');
		},
		//检测结尾有没有空格
		rtrim:function(str){
			return str.replace(/(\s*$)/g,'');
		},
		//检测开头结尾有没有空格
		trim:function(str){
			return str.replace(/(^\s*)|(/s*$)/g,'');
		}
	};
	//颠倒两个字符串
	//利用()(),正则表达式中第一个括号内的东西我$1,第二个为$2,利用replace颠倒
	/(\w+)\s*,\s*(\w++)/
	//关键字变色
	myString.replace(/(关键字)/g,"<font color="red">$1</font>");
	//单词的边界 \b 一个单词 \b\w+\b
	//替换每个单词的首字母
	myString = "aaa bbb ccc";
	myString = myString.replace(/\b\w+\b/g, function(word){
		return word.substring(0,1).toUpperCase()+word.substring(1);
	});

49  绑定数据
	将后台返回的json等数据和前端的html元素绑定在一起
	动态创建html标签 四种方式
	innerHTML="<></>"
	jquery.html() $('<><>').appendTo()
	createElement setAttribute appendChildren()


	绑定数据四种方式
	拼接 str=''+this.name+''     
	join
	formateString格式
	第三方模板
	//第一种
	原生创建标签格式
	var loginlink = document.createElement("a");
	loginlink.setAttribute("id","loginlink");
	loginlink.setAttribute("name","loginlink");
	loginlink.setAttribute("class","loginlink");
	loginlink.href='';
	loginlink.innerHTML = "登录";
	div.appendChild(loginlink);
	//第三种
	formate 格式认证
	function formateString(str,data){
		return str.replace(/#\((\w+)\)/g,function(match,key){
			return data[key];
		});
	}
	//第三种的arttemplate
	var data = {
		name : '电影列表',
		films : [
				{title :'美人鱼',
				 lead : '周星驰',
				 role : '邓超'},
				 {title :'美人鱼',
				 lead : '周星驰',
				 role : '邓超'}
		]
	};
	<script id="templateid" type="text/html" >
		<h2>{{name}}</h2>
		<ul>
		{{each films}}
			<li>
			<strong>电影名称</strong>{{$valur.title}}<br/>
			<strong>导演</strong>{{$value.lead}}
			<strong>演员</strong>{{$value.role}}
			</li>
		{{/each}}
		</ul>
	</script>
	bindtemplate:function(templateid,data){
		var html = template(templateid,data);	
	},
	document.querySelector(id).innerHTML = html;
	//第三种的数据绑定另一种template方式
	<script>
	var films = {
		title:'美人鱼',
		lead:'周星驰',
		role:'邓超'
	};
	//运用拼接的方式
	var str = '<strong>电影名字</strong>{{title}}'+
			  '<strong>导演</strong>{{lead}}'+
			  '<strong>演员</strong>{{role}}';
	var render = template.compile(str);
	var html = render(films);
	document.getElementById('comment').innerHTML = html;
	</script>

	// 函数封装的作用:隐藏复杂性 封装模板替换
	function atemplate(str,data){
		var render = template.compile(str);
		var html = render(data);
	}
50 原型链
	new一个对象后,系统做了如下三个方面
	创建一个空对象
	拷贝构造函数的所有方法到空对象中
	自动生成属性__proto__指向类的原型
	Object.__proto__ 指向funciton()
	Object.__proto__ ===function.prototype;
	Object.prototype.__proto__ 指向null
	function.prototype.__proto__ ===OBject.prototype
	内置对象指向的是function.prototype
	一条完整的内置对象原型链条如:
	   数组实例.__proto__指向Array.protottype
	   Array.ptototype.__proto__指向Function.prototype
	   function.ptototype.__proto__指向Object.prototype
	   Object.ptototype.__proto__指向null
	自定义对象的__proto__指向Object.prototype
	   自定义实例.__proto__指向自定义构造函数.protottype
	   自定义构造函数.ptototype.__proto__指向Object.prototype
	   Object.ptototype.__proto__指向null
51 多态
   把相类似的功能定义在基类=父类里
   不同的定义在自身派生类=子类里
   避免重复
52 继承
	可以访问父类的方法和属性
	自身可以定义属性和方法
52.1 代码实现继承 两步
	 1.通过构造函数
	 var student = function(){
	 	// 固定格式实现构造函数的继承
	 	Person.call(this,argument);
	 	//定义自己的方法属性
	 	this.sId= ;
	 	...
	 }
	  2.通过原型
	  student.prototype = new Person()
	  student.prototype.方法 = function(){
	  		//通过 .方法创建自己的方法
	  }
53 封装性 和多态,继承并称面向对象的三大特性
54 重载:一个方法,名称相同,通过参数的个数不同或者参数的类型不同执行不同的功能
	js的同名后面覆盖前面的特性导致不支持,只能间接重载
	两种方式支持重载 jquery框架
	1.利用参数个数不同,arguments //利用arguments.length 来间接地重载
	2.利用参数类型不同,typeof //利用typeof == "某类型"
55 接口
56  事件DOM2时代
	分工-解耦和
	事件流:
	冒泡:事件按照从最特定的事件目标到最不特定的事件目标(document对象或者body)的顺序触发
	iE只支持冒泡
	捕获
	dom2.addEventListener
	比较传统的事件绑定如onclick优点
	1.可以绑定多个元素         //如果使用onclick绑定不同函数,后者覆盖前者,false为冒泡
	btn.addEventListener('click',fn2,false);
	2.动态地添加删除事件
	btn.removeEventListener('click',fn2);
	3方便事件的委托 //用于列表,利用冒泡机制
	$(父亲容器).on('click','每个列表',fn(){});
	事件委托,事件的执行者不是调用者本身,而是交给其他元素来完成这个事件
57  委托
	使用冒泡的知识点必须是父子关系
	应用场景
	1.处理列表-提高性能
	传统是循环绑定,使用委托就不用循环绑定
	2.动态添加元素
	有些动态添加的元素(瀑布流)是无法直接绑定元素的,可以通过委托来实现动态元素的绑定
	jquery的on和delegate都可实现
58 编程思想
   完美法则:保证代码严谨性
   1.提前预防:使用前判断是否合法
   2.事后预防:先使用,再判断
   隔离法则:将函数拆分成许多小模块
   1.获取返回,专门为第二部分服务
   2.使用模块
   个个击破法则:把问题细分成详细的每个问题进行解决再组合
   管道法则:前面的管道出来的数据将成为下一个管道的入口
   单一功能原则,保证一个函数只有一个功能,本质上,保证一个函数只有一个变化源,在封装函数上便于需求变更

59 自定义函数(匿名函数)
	(function(){})()
	-用于形成局部作用域,避免全局变量污染
	-采用传进全局变量做参数,降低全局变量的使用 //(function(window,document){})(window,document);
	让函数立即执行的方式有四,他们都是通过使其变成函数表达式运行的
	-小括号 ()()
	-函数表达式 var a = funciton(){}();
	-逻辑表达式 !function(){}();
	-数学表达式 +function(){}(); 