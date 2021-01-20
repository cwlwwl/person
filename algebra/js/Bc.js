class Bc {
	constructor() {
	    this.bi = new Vector(1*g.unit, 0*g.unit);
		this.bj = new Vector(0*g.unit, 1*g.unit);
	}
	draw() {
		g.ctx.save();
		//背景线宽
		g.ctx.lineWidth = 0.7;
		// console.log(this.bi, this.bj);
		//绘制横线
		//绘制横线
		for (let i = -g.lineNum; i < g.lineNum; i++) {
			//k*vj
			let a = vectorUtil.numMultip(this.bj, i)
			//100*vi
			let b = vectorUtil.numMultip(this.bi, g.lineLen);
			let v1 = vectorUtil.sub(a,b);
			let v2 = vectorUtil.add(a,b);
			util.drawLineByV(v1, v2);
		}
		//绘制坚线
		for (let i = -g.lineNum; i < g.lineNum; i++) {
			//k*vi
			let a = vectorUtil.numMultip(this.bi,i);
			//100*vj
			let b = vectorUtil.numMultip(this.bj, g.lineLen);
			let v1 = vectorUtil.sub(a,b);
			let v2 = vectorUtil.add(a,b);
			util.drawLineByV(v1, v2);
		}
		util.drawArcByV(new Vector(0,0), 7);
		g.ctx.restore();
	}
	update() {
	}
}