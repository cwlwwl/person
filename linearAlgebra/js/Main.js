class Main {
	constructor() {
		//得到画布
		this.canvas = document.getElementById("mycanvas");
		//得到画布的上下文
		this.ctx = this.canvas.getContext("2d");
		//创建两个2维向量,当作自定义基向量
		this.baseI = new Vector2d(1 * config.mtp, 0); //向左的x方向
		this.baseJ = new Vector2d(0, 1 * config.mtp); //向上的y方向
		this.canvas.width = config.w;
		this.canvas.height = config.h;
		coordinate.x0 = this.canvas.width / 2;
		coordinate.y0 = this.canvas.height / 2;
		//创建精灵对象
		this.bc = new Bc(this);
		this.spirit = new Spirit(this);
		this.line = new Line(this);
		this.point = new Point(this);
		this.showText = new ShowText(this);
		this.baseChange = new BaseChange(this);
		//开始
		this.begin();
		//监听器
		new MyListener(this);
	}
	begin() {
		setInterval(() => {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.draw();
			this.update();
		}, 100)
	}
	draw() {
		this.bc.draw();
		this.spirit.draw();
		this.line.draw();
		this.point.draw();
		this.showText.draw(); 
	}
	update() {
		this.bc.update();
		this.spirit.update();
		this.line.update();
		this.point.update();
		this.showText.update();
	}
}
