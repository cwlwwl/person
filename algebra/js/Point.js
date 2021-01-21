class Point {
	constructor() {
		this.amn = [];
		this.clickHandle = null;
		this.initHandle();
	}
	setDrawPoint(flag) {
		if (flag) {
			g.cvs.addEventListener("click", this.clickHandle);
		} else {
			g.cvs.removeEventListener("click", this.clickHandle);
		}
	}
	draw() {
		for(let i=0; i<this.amn.length; i++) {
				let vmn = this.amn[i];
				let vab = vectorUtil.mmv(g.bi, g.bj, vmn);
				vab.x = Math.round(vab.x);
				vab.y = Math.round(vab.y);
				util.drawArcByV(vab, g.unit / 8);
		}
	}
	update() {

	}
	//画点的点击事件
	initHandle() {
		this.clickHandle = e => {
			let p = coordinate.toSelf([e.layerX, e.layerY]);
			let vab = new Vector(p[0], p[1]);
			//得到右乘向量
			let vmn = vectorUtil.mdv(g.bi, g.bj, vab);
			this.amn.push(vmn);
		}
	}
}
