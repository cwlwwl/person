class Spirit {
	constructor(main) {
		this.canvas = main.canvas;
		this.ctx = main.ctx;
		this.zeroV = new Vector2d(0, 0);
		this.baseI = new Vector2d(1*config.mtp, 0*config.mtp);
		this.baseJ = new Vector2d(0*config.mtp, 1*config.mtp);
	}
	draw() {
		this.drawLine();
		this.drawBase();
	}
	drawBase() {
		//绘制 i
		this.ctx.save();
		this.ctx.lineWidth = 4;
		this.ctx.strokeStyle = "#00f";
		util.drawLine2(this.ctx, this.zeroV, this.baseI);
		this.ctx.restore();
		
		//绘制j
		this.ctx.save();
		this.ctx.lineWidth = 4;
		this.ctx.strokeStyle = "#f00";
		util.drawLine2(this.ctx, this.zeroV, this.baseJ);
		this.ctx.restore();
		
		//绘制中心点
		util.drawArc2(this.ctx, new Vector2d(0,0));
		
		/*求出任意的一个this.baseI的重直向量的单位向量，根据向量叉乘等于0,
		  设所求向为(xi, 100),则有
		  this.baseI.x*xi + this.baseI.y*100 = 0
		  求出根据方向求出xi,得到所求向量 (xi,100),再把该向量单位化。
		*/
	   let xi = -this.baseI.y*100 / this.baseI.x;
	   let mi = Math.sqrt(xi*xi+100*100);
	   //创建向量单位化的向量
	   let verVi = new Vector2d(xi/mi*config.mtp/2, 100/mi*config.mtp/2);
	   let leni = this.baseI.newNumberMultiplicate(0.2);
	   let lefti = this.baseI.newAdd(verVi).newSub(leni);
	   let righti = this.baseI.newSub(verVi).newSub(leni);
	   //绘制I的箭头
	   this.ctx.save();
	   this.ctx.strokeStyle = "#00f";
	   this.ctx.lineWidth = 4;
	   util.drawLine2(this.ctx, this.baseI, lefti); 
	   util.drawLine2(this.ctx, this.baseI, righti);
	   this.ctx.restore();
		
		/*求出任意的一个this.baseJ的重直向量的单位向量，根据向量叉乘等于0,
				  设所求向为(100, xj),则有
				  this.baseJ.x*100 + this.baseJ.y*xj = 0
				  求出根据方向求出xj,得到所求向量 (100,xj),再把该向量单位化。
				*/
		let xj = -this.baseJ.x*100 / this.baseJ.y;
		let mj = Math.sqrt(xj*xj+100*100);
		//创建向量单位化的向量
		let verVj = new Vector2d(100/mj*config.mtp/2, xj/mj*config.mtp/2);
		let lenj = this.baseJ.newNumberMultiplicate(0.2);
		let leftj = this.baseJ.newAdd(verVj).newSub(lenj);
		let rightj = this.baseJ.newSub(verVj).newSub(lenj);
		//绘制I的箭头
		this.ctx.save();
		this.ctx.strokeStyle = "#f00";
		this.ctx.lineWidth = 4;
		util.drawLine2(this.ctx, this.baseJ, leftj);
		util.drawLine2(this.ctx, this.baseJ, rightj);
		this.ctx.restore();
	}
	drawLine() {
		this.ctx.save();
		this.ctx.strokeStyle = "#00f";
		for (let i = -config.lineNum; i < config.lineNum; i++) {
			//k*vj
			let a = this.baseJ.newNumberMultiplicate(i);
			//100*vi
			let b = this.baseI.newNumberMultiplicate(config.lineLen);
			let v1 = a.newSub(b);
			let v2 = a.newAdd(b);
			util.drawLine2(this.ctx, v1, v2);
		}
		this.ctx.restore();
		
		this.ctx.save();
		this.ctx.strokeStyle = "#f00";
		for (let i = -config.lineNum; i < config.lineNum; i++) {
			//k*vi
			let a = this.baseI.newNumberMultiplicate(i);
			//100*vj
			let b = this.baseJ.newNumberMultiplicate(config.lineLen);
			let v1 = a.newSub(b);
			let v2 = a.newAdd(b);
			util.drawLine2(this.ctx, v1, v2);
		}
		this.ctx.restore();
		
	}
	update() {
		 
	}
}
let flag = true;