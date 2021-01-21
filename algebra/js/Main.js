class Main {
	constructor() {
		this.bc = new Bc(); 
		this.arrow = new Arrow();
		this.baseLine = new BaseLine();
		this.point = new Point();
		this.line = new Line();
	}
	
	begin() {
		setInterval(()=>{
			g.ctx.clearRect(0,0,g.cvs.width,g.cvs.height);
			this.draw();
			this.update();
		}, 100)
	}
	draw() {
		this.bc.draw();
		this.arrow.draw();
		this.baseLine.draw();
		this.point.draw();
		this.line.draw();
	}
	update() {
		this.bc.update();
		this.arrow.update();
		this.baseLine.update();
		this.point.update();
		this.line.update();
	}
}