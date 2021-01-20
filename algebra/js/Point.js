class Point {
	constructor() {
		console.log("Point 创建成功")
		this.vmn = undefined;
		//画点的点击事件
		this.clickHandle = e=>{
			let p = coordinate.toSelf([e.layerX, e.layerY]);
			let vab = new Vector(p[0], p[1]);
			this.vmn = vectorUtil.mdv(g.bi,g.bj,vab);
		}
	}
	setDrawPoint(flag) {
		if(flag) {
			g.cvs.addEventListener("click", this.clickHandle);
		}else {
			g.cvs.removeEventListener("click", this.clickHandle);
		}
	}
	draw() {
		if(this.vmn) {
			let vab = vectorUtil.mmv(g.bi,g.bj, this.vmn);
			vab.x = Math.round(vab.x);
			vab.y = Math.round(vab.y);
			util.drawArcByV(vab, g.unit/8);
		} 
	}
	update() {
		
	}
}