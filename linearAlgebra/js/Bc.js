class Bc {
	constructor(main) {  
		this.main = main;   
	}
	/**绘制背景*/
	draw() {
		this.main.ctx.save();
		//背景线宽
		this.main.ctx.lineWidth = 0.3;
		//绘制横线
		for (let i = -config.lineNum; i < config.lineNum; i++) {
			//k*vj
			let a = this.main.baseJ.newNumberMultiplicate(i);
			//100*vi
			let b = this.main.baseI.newNumberMultiplicate(config.lineLen);
			let v1 = a.newSub(b);
			let v2 = a.newAdd(b);
			util.drawLine2(this.main.ctx, v1, v2);
		}
		//绘制坚线
		for (let i = -config.lineNum; i < config.lineNum; i++) {
			//k*vi
			let a = this.main.baseI.newNumberMultiplicate(i);
			//100*vj
			let b = this.main.baseJ.newNumberMultiplicate(config.lineLen);
			let v1 = a.newSub(b);
			let v2 = a.newAdd(b);
			util.drawLine2(this.main.ctx, v1, v2);
		}
		this.main.ctx.restore();
		
		//绘制基 i, j
		// this.main.ctx.save();  
		// this.main.ctx.lineWidth=3;
		// this.main.ctx.strokeStyle = "red";
		// util.drawLine1(this.main.ctx, [0, 0],[this.main.baseI.x, this.main.baseI.y]);
		// util.drawLine1(this.main.ctx, [0, 0],[this.main.baseJ.x, this.main.baseJ.y]);
		// this.main.ctx.restore();
	}
	update() {

	}
}