1. window.onload=function(){}
  //对比jquery两种入口函数
1.1 $(document).ready(function(){});
1.2 $(function(){});
1.3 区别
	js 的onload 事件要等到所有的文件图片等加载完再执行
	jQuery 的入口事件只要等到html的所有标签加载完即可执行
  jQuery.noConflict(); 把对$标识符的控制权让渡给其他库。
2.用console.log()打印表达式，字符串，参数等，代替alert;
3.选择符
  p{} $('p')//元素选择器
  #ID{} $('#ID')
  .class{} $('.class')
  , //并集选择器
  空格 //后代选择器
  > //子代选择器
  + //紧邻选择器，后面的紧邻的兄弟元素
  ~ //兄弟选择器，选择的是钙元素后面的所有兄弟元素
  属性选择器
  【attr】
  [attr = 'value']
  [attr != 'value']
  [attr ^= 'value'] //头部有value
  [attr $= 'value'] //尾部有value
  [attr *= 'value'] //由此关键词
4.伪类选择器
	:eq() 选择第几个元素。从0开始
	:not() 排除此类元素
	:lt() 选择小于某数
	:gt() 选择大于某数
	:nth-child() 选择当前元素相对于父元素下的元素，可代入（odd）等 jq唯一从一开始计数的选择符
	:odd 奇数
	:even 偶数
	:contains() 
	选择有关键词的元素,区分大小写
5.addClass();
  removeClass();
6.筛选选择器
   .filter() 遍历
   .next() 下一个
   .nextAll() 下面的全部
   .prev()
   .siblings()//兄弟选择器 非常重要，能够选择处于相同Dom层次的所有其他元素，无论前后。
   .prevAll()
   .parent() //父亲选择器
   .children() //儿子选择器
7.表单选择器
	$(":text");
	$(":checkbox");
	$(":checked");

   
8. $(this) 当前被点击的事物。

9.界面放置，元素重叠必须定位，定位方法“子绝父相”，同级

10.jquery 的动画和事件是遵循一个叫做排队机制的远离，也就是说如果一次触发执行了很多动画那么后米娜的动画不会自动替换前面的而回一直排队等待执行。
解决方法：使用.stop()清空前面的操作。

11. 用jquery实现ajax的见属性
	jQuery.ajax([settings]) 
	type：类型："post"或"get"默认为get
	url：发送请求的地址
	data：是一个对象，联通请求发送到服务器的数据
	dataType: 预期服务器返回的数据类型，如果不指定，jquery将自动根据http包mime信息来只能判断，一般我们采用json格式，可以设置为json
	success:是一个方法，请求成功后的回调函数，传入返回后的数据，以及包含成功代码的字符串
	error：是一个方法，请求失败是调用此函数，传入XMLHttpResquest对象
	$.ajax({
		type:"GET"
		url:"service.php?number="+$("#keyword").val();
		dataType:"json";
		success:function(){}
		error:function(jqXHR){
			console.log("发生错误："+jqXHR.status);
		}
	})

		$.ajax({
		type:"POST"
		url:"service.php"
		dataType:"json";
		data:{
			name:$("#staffName").val();
			number:$("#staffNunber").val();
			sex:$("#staffSex").val();
			job:$("#staffJob").val();
		}
		success:function(){}
		error:function(jqXHR){
			console.log("发生错误："+jqXHR.status);
		}
	})

12. 内容替换
	.html()为js中的.innerHTML=。可替换任何东西包括标签
	.text() 替换纯文本
	.val() 换值,一个参数的时候设置值，没有参数获取值
	.css("想要获取的css的值的名称","要改变的值")
  	.attr("改变html属性如class"，"要改的值");
	.removeAttr() 
	<!-- 通过花括号，冒号，逗号进行多属性值变换 -->
	$("this").attr({
	 "href":"http://www.baidu.com",
	 "title":"这里是摆渡",
	})


13. 鼠标绑定事件 
	mouseenter()鼠标移入事件 
	mouseleave()鼠标移开事件
	//和mouseover mouseout 的区别
	//前者是穿过才触发，每次触发子元素的时候父元素不会被冒泡而触发
14. 绑定方式
	.bind("click",函数名);
	多个绑定事件
	<!-- 解除用unbind -->
	.bind("click mouseenter",function(){})
	.bind({
		"click":function(){},
		"mouseenter":funciton(){}
	})
	//事件委托,利用delegate绑定父元素来为子元素添加事件，实现优化
	.delegate()
	$("ul(父元素)").delegate("li(自身)","click(事件)",function(){});
	// 当事件非常多，页面复杂时。利用绑定时间优于点击事件，节省资源 
	.one() 
	.click(function(){});
	 //与bind一样，官方推荐用on，解除用off
	 //强烈推荐用此种方式进行各种绑定。 
	.on("click",函数名)
	//通过父元素为子元素绑定事件以高效
	$("ul").on("click","li",function(){});

15. event 对象
//事件冒泡，多个事件绑定在层次不同元素线上，会层层依次触发。
利用 event.stopPropagation();阻止父级事件冒泡
利用 event.stopImmediatePropagation(); 阻止所有事件冒泡（同级和父级）
event.preventDefoult();阻止浏览器默认事件
event.type //返回有关的事件名称的字符串
event.which //返回鼠标左键（值为1），中建(2),右建(3)的数值
event.keyCode //得到键盘按下的对应键值
event.target //触发事件的源头，不一定 === this
event.currentTarget === this
15.2 键盘事件
	$(window).keydown(function(event){
		if(event.keyCode){
				console.log();
		}
	});
16.添加,删除元素
	以下的都不如.html("")高效
	<!-- 不换行 -->
	append()
	prepend()
	.appendTo();//$("<p>hahaha</p>").appendTo($("div"))
	.prependTo();
	<!-- 换行 -->
	after();//添加的是兄弟节点
	before();
	insertAfter();//在前面添加一个节点；
	insertBefore();//在后面添加一个节点；
	<!-- 删除选中的元素 -->
	remove();//
	<!-- 清空子元素 -->
	empty();
	//包裹事件
	.wrap(node) 用node包裹前面的元素
	。wrapAll(node) 
	//替换元素
	.replaceWith(node) 
17.动画效果
   隐藏和显示
	.hide(1000);
	.show();
	.toggle(); <!-- 如果隐藏就显示，如果显示就隐鲹 -->
   淡入淡出
   fadeIn()
   fadeOut()
   fadetoggle() 淡入淡出开关
   fadeTo(0.5) 淡到百分之五十
   滑动出现/隐藏
   .slideDown()
   .slideUp()
   .slideToggle()
   自定义动画
   .animate({
   	width:"80%";
   	...
   },1000);
   //jquery 核心库不支持动画渐变，不支持更改颜色

18.回调：每个动画执行完毕后所能做的一件事。
19 样式转换
   .addClass("something");
   .removeClass("");
   .toggleClass("");
20 得到盒子的基本数据
20.1 得到宽高，数值
	 .height()
	 .width()
20.2 得到位置
	 //得到left和top
	 //获取或设置坐标值，设置值后变成相对定位
	 .offset() 
	 //获取距离父元素的坐标值，只能获取不能设置。
	 .position();
20.2 滚动条
	.scrollTop();
	.scrollLeft();
	.on("scroll",function(){})
    // 滑动到最顶部
    $(window).scrollTop(0);
21 链式管理
	结束当前调用的链，回到上一级的调用链
	.end();
22 隐式迭代	
22.1 sth.each(function(index, el) {
	//index为索引值，el为元素。sth为所要遍历的元素
});
	$.each(array,function(index, el) {
		//array 为所要遍历的元素
	});
22.2 sth.map(function(index, el){
	//将一个数组中的元素转换到另一个数组中。
});
	 $.map(array,function(el, index){
	 	//注意参数的位置
	 });
23 创建jquery插件
   //通过创建全局方法，原型方法来模块化自己的代码
   $.sth = function(){}; //创建全局方法
   $.fn.sth = function(){};//创建函数原型方法
24 实现默认触发
//触发指定的事件类型上所有绑定的处理函数。但不会执行浏览器默认动作，也不会产生事件冒泡。
	.triggerHandler()
24.1 触发事件
	$("selector").事件(function(){});
	//可以绑定多个事件,下面进行多次触发即可
	$("selector").trigger("事件");
25 音频的引入
 <audio src="music/1`.ogg"></audio>
	/ /*jquery里面没有音乐的load,play等功能,加get()转化为dom 对象*/
 $("audio").get(this).index().load();//加载
 $("audio").get(this).index().play();//播放




 二.jquery mobile
1.1 必须先引入视口
1.2 基本骨架
//只能有三个div
<div data-role="page">
	<div data-role="header"></div> 
	<div data-role="content"></div> 
	<div data-role="footer" data-position="fixed"> 
	<h4>我是页脚</h4> 
	//只能h4
	</div> 
</div>
1.3 多页面跳转
<div data-role="page">
	<div data-role="header"></div> 
	<div data-role="content">
	//通过a标签锚点链接实现页面跳转 
	<a href="#page2" data-role="button" data-transition="flip"></a> 
	</div> 
	<div data-role="footer" data-position="fixed"> 
	<h4>我是页脚</h4> 
	//只能h4
	</div> 
</div>
<div data-role="page2">
	<div data-role="header"></div> 
	<div data-role="content"></div> 
	<div data-role="footer" data-position="fixed"> 
	<h4>我是页脚</h4> 
	//只能h4
	</div> 
</div>
1.3.1 data-transition 转场效果
 jquery中文站查阅   www.jqmapi.com
	flip 翻转
	slide 活动
	pop 弹出
	turn 大翻转
1.3.2 data-icon 基于按钮加图片
	与images文件夹中找
	调用该图片的-前面的字符即可。
	data-iconpos="right/left" 显示图标于文字的左边还是右边。
1.3.3 头部底部的应用
	<div data-role="controlground" data-type="horizontal"> 
	<a href="#" data-icon="camera" data-iconpos="top" data-role="button">选项</a>
	<a href="#" data-icon="camera" data-iconpos="top" data-role="button">选项</a>
	<a href="#" data-icon="camera" data-iconpos="top" data-role="button">选项</a>
	<a href="#" data-icon="camera" data-iconpos="top" data-role="button">选项</a>
	</div>
	加以调整样式即可制作出底部app效果
1.3.4 列表的视图
<ul data-role="listview" data-inset="true" data-filter="true"> 
<li data-role="list-divider">英语单词</li> 
<li>a</li> 
<li>b</li> 
<li>c</li> 
<li>d</li> 
<li>e</li> 
</ul>
data-role="list-divider" 分割列表
data-filter="true" 筛选关键词
data-inset="true" 使列表不铺满左右




三、jquery的基本应用
1.隐藏
  box.style.display="none"
2.菜单
  <ul class="all">
  	<li>一级菜单
  	<ul>
  		<li>二级菜单</li>	  
  		<li>二级菜单</li>
  		<li>二级菜单</li>
  	</ul>
  	</li>
  	<li></li>
  	<li></li>
  </ul>
<script type="text/javascript">
	$(function(){
		$(".all>li").mouseover(function(e){
			$(this).children().stop().slideDown(500);
		});
	$(".all>li").mouseout(function(e){
	        $(this).children().stop().slideUp(500);
		});
	})；
</script>
2.1 .stop() 解决排队问题
	stop(true) //立即停止当前动画并清空动画队列
	stop(false)//立即停止当前动画继续执行后续动画
	stop(true，true)//立即执行完当前动画，继续执行后续动画
	stop(false，true)//立即执行完当前动画，不再执行下面的动画
//.slidedown)();滑动显示
3.轮播图(构建html，加css,加jquery)
a.轮播图小圆点或者数字得到焦点时变化。
   .all ol .current{
	width:
	height:
	line-height:
	border:
	color:
	cursor:pointer;
	margin-top:
    }
b.两种方法进行小圆点变换；
  .addclass("current") 或者.attr("class","current")
$(this).attr();
$(this).siblings().attr("class","");
c.链接图片
var num =$(this).index();
var num2;
$("ul li").eq(num).css("left","650px");
num2++;
$("ul li ").eq(num).css("z-index",num2);
$("ul li ").eq(num).animate({left:"0"},500);

//动态变化一般用animate({里面放置要变化的},时间)实例如上，
4.突出显示
$("li").mouseover(
function(e){
$(this).fadeTo(500,0.3);
//突出显示.fadeTo(500,1);//变回来
})
5.自己添加样式去除别人样式
  $(document).ready(function(){
	$("tab>li").mouseenter(funciton(){
		$(this).addClass("something").siblings().removeClass("something");
	});
  })；
5.轮播图去掉上面的缝隙 无缝滚动
  img{vertical-align:top;} //取消图片三像素的距离
6.判断鼠标从哪里进入
 $("div").on("mouseenter mouseleave",function(e) {
                     var w = $(this).width(); // 得到盒子宽度
                     var h = $(this).height();// 得到盒子高度
                     var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
                     // 获取x值
                     var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
                     // 获取y值
                     var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
                     // 将点的坐标对应的弧度值换算成角度度数值
                     var dirName = new Array('上方','右侧','下方','左侧');
                     if(e.type == 'mouseenter'){
                         $(this).html(dirName[direction]+'进入');
                     }else{
                         $(this).html(dirName[direction]+'离开');
                     }
});
以div容器的中心点作为圆心，以高和宽的最小值作为直径画圆，将圆以[π/4，3π/4)，[3π/4，5π/4），[5π/4，7π/4)，[-π/4，π/4)划分为四个象限，鼠标进入容器时的点的atan2(y,x)值在这四个象限里分别对应容器边框的下，右，上，左。
计算x坐标值时，如果点原来的x坐标的绝对值大于圆的半径值，则按 h/w 这个比例进行缩小，使得到的点的位置在容器的边界位置所对应的象限区间里。 y 坐标的计算也是一样。
