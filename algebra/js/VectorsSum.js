class VectorsSum {
	constructor() {
		this.v0 = new Vector(0, 0);
		this.v1 = vectorUtil.add(g.bi, g.bj);
	}
	draw() {
		g.ctx.save();
		g.ctx.strokeStyle = "#0f0";
		g.ctx.lineWidth = 4;
		util.drawLineByV(this.v0, this.v1);
		this.drawArrow();
		g.ctx.restore();
	}
	update() {
		this.v1 = vectorUtil.add(g.bi, g.bj);
	}
	
	drawArrow() {
		let xj = -this.v1.x * 100 / this.v1.y;
		let mj = Math.sqrt(xj * xj + 100 * 100);
		//创建向量单位化的向量
	
		let verVj = new Vector(100 / mj * g.unit / 4, xj / mj * g.unit / 4);
		let lenj = vectorUtil.numMultip(this.v1, 0.2);
		let leftj = vectorUtil.sub(vectorUtil.add(this.v1, verVj), lenj);
		let rightj = vectorUtil.sub(vectorUtil.sub(this.v1, verVj), lenj);
		
		util.drawLineByV(this.v1, leftj);
		util.drawLineByV(this.v1, rightj);
	}
}
