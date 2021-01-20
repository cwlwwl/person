class Line {
	constructor() {
	}
	draw() {
		this.drawLine();
	}
	update() {
	}
	drawLine() {
		g.ctx.save();
		g.ctx.strokeStyle = "#00f";
		for (let i = -g.lineNum; i < g.lineNum; i++) {
			//k*vj
			let a = vectorUtil.numMultip(g.bj, i);
			//100*vi
			let b = vectorUtil.numMultip(g.bi, g.lineLen);
			let v1 = vectorUtil.sub(a,b);
			let v2 = vectorUtil.add(a,b)
			util.drawLineByV(v1, v2);
		}
		g.ctx.restore();
		
		g.ctx.save();
		g.ctx.strokeStyle = "#f00";
		for (let i = -g.lineNum; i < g.lineNum; i++) {
			//k*vi
			let a = vectorUtil.numMultip(g.bi, i);
			//100*vj
			let b = vectorUtil.numMultip(g.bj, g.lineLen);
			let v1 = vectorUtil.sub(a, b);
			let v2 = vectorUtil.add(a, b);
			util.drawLineByV(v1, v2);
		}
		g.ctx.restore();
	}
}