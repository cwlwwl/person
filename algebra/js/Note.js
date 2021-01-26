class Note {
	constructor() {
		console.log("Note 创建")
	}
	draw() {
		this.showI(g.bi, "bi");
		this.showI(g.bj, "bj");
	}
	update() {
		
	}
	showI(base, flag) {
		g.ctx.save();
		g.ctx.font = "20px sans-serif";
		if(flag=="bi") {
			g.ctx.fillStyle = "#09f";
		}else if(flag=="bj") {
			g.ctx.fillStyle = "#f09";
		}
		if(base.x>=0) {
			let v1 = vectorUtil.add(base, new Vector(0, 5));
			v1 = vectorUtil.add(v1, new Vector(5,0));
			util.drawText(v1, Math.round(base.x/g.unit*10)/10);
			let v2 = vectorUtil.add(base, new Vector(0, -15));
			v2 = vectorUtil.add(v2, new Vector(5,0));
			util.drawText(v2, Math.round(base.y/g.unit*10)/10);
		}else {
			let v1 = vectorUtil.add(base, new Vector(0, 5));
			v1 = vectorUtil.add(v1, new Vector(-25, 0));
			util.drawText(v1, Math.round(base.x/g.unit*10)/10);
			let v2 = vectorUtil.sub(base, new Vector(0, 15));
			v2 = vectorUtil.add(v2, new Vector(-25, 0));
			util.drawText(v2, Math.round(base.y/g.unit*10)/10);
		}
		g.ctx.restore();
	}
}