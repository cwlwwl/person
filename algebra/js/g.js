//全局对象
const g = {
	//配置
	unit: 40,//一位单的长度是多少像素
	w: 400,//canvas的宽
	h: 400,//canvas的高
	color: "#eee", //canvas背景色
	lineNum: 125,//bi和bj方向的线和数量
	lineLen: 200,//bi和bj方向的线的长度
	
	//自定义坐标标原点(x0,y0)在canvas坐标系中的值
	x0:undefined,
	y0:undefined,
	//状态
	drawArrow: false,
	//画点状态
	drawPoint: false,
	//画线状态
	drawLine: false,
	//基变换状态
	baseChange: false,
	
	//单例对象
	//canvas
	cvs:null,
	//context
	ctx:null,
	//自定义基,以画布中心为坐标原点，向右bi,向上bj
	bi:null,
	bj:null,
	//入口主类对象
	main:null,
	//初始化全局对象中的变量
	init(){
		this.cvs = document.getElementById("mycanvas");
		//画布的宽高
		this.cvs.width = this.w;
		this.cvs.height = this.h;
		//初始化自定义坐标原点(x0,y0)在canvas坐标系中的值
		this.x0 = this.cvs.width / 2;
		this.y0 = this.cvs.height / 2;
		this.cvs.style.background = this.color;
		this.ctx = this.cvs.getContext("2d");
		this.bi = new Vector(1*this.unit, 0*this.unit);
		this.bj = new Vector(0*this.unit, 1*this.unit);
		this.main = new Main();
		this.main.begin();
	}
}
