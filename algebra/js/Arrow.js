//根据g.js中的自定义基,bj,bj绘制箭头
class Arrow {
	constructor() {
		console.log("创建Arrow")
		this.drawI = false;
		this.drawJ = false;
		this.downHandle = e => {
			//事件发生时鼠标相对于canvas坐标系的坐标值
			let p = coordinate.toSelf([e.layerX, e.layerY]);
			let v = new Vector(p[0], p[1]);
			let len1 = util.getTwoVLen(v, g.bi);
			let len2 = util.getTwoVLen(v, g.bj);
			if (len1 < len2) {
				if (len1 < g.unit / 5) {
					this.drawI = true;
					this.drawJ = false;
				} else {
					this.drawI = false;
					this.drawJ = false;
				}
			} else if (len2 <= len1) {
				if (len2 < g.unit / 5) {
					this.drawI = false;
					this.drawJ = true;
				} else {
					this.drawI = false;
					this.drawJ = false;
				}
			}
		}
		this.moveHandle = e => {
			let p = coordinate.toSelf([e.layerX, e.layerY]);
			if (this.drawI) {
				g.bi.x = p[0];
				g.bi.y = p[1];
			} else if (this.drawJ) {
				g.bj.x = p[0];
				g.bj.y = p[1];
			}
		}
		this.upHandle = e => {
			//如果g.bi或g.bj在背景格子交点赋近,则把bi或bj修正在交点
			const positionToCross = v=>{
				//整数
				let x = Math.floor(v.x / g.unit);
				let y = Math.floor(v.y / g.unit);
				// console.log(x,y);
				//箭头所在的格式的四个角的坐标
				let p1 = [x * g.unit, y * g.unit];
				let p2 = [(x + 1) * g.unit, (y + 1) * g.unit];
				let p3 = [(x + 1) * g.unit, y * g.unit];
				let p4 = [x * g.unit, (y + 1) * g.unit];
				// console.log(p1,p2,p3,p4);
				//求出箭头在四个角的距离
				let a = [v.x, v.y];
				let len1 = util.getTwoPLen(a, p1);
				let len2 = util.getTwoPLen(a, p2);
				let len3 = util.getTwoPLen(a, p3);
				let len4 = util.getTwoPLen(a, p4);
				//求出最小距离
				let minLen = Math.min(len1, Math.min(len2, Math.min(len3, len4)));
				if (minLen > g.unit / 4) {
					return;
				}
				if (minLen == len1) {
					v.x = x * g.unit;
					v.y = y * g.unit;
				} else if (minLen == len2) {
					v.x = (x + 1) * g.unit;
					v.y = (y + 1) * g.unit;
				} else if (minLen == len3) {
					v.x = (x + 1) * g.unit;
					v.y = y * g.unit;
				} else if (minLen == len4) {
					v.x = x * g.unit;
					v.y = (y + 1) * g.unit;
				}
			}
			if (this.drawI) {
				positionToCross(g.bi);
			} else if (this.drawJ) {
				positionToCross(g.bj); 
			}
			this.drawI = false;
			this.drawJ = false;
		}
		this.setDrawArrow(true);
	}
	setDrawArrow(flag) {
		// 拖动箭头,改变g.bi和g.bj
		if(flag) {
			g.cvs.addEventListener("mousedown", this.downHandle);
			g.cvs.addEventListener("mousemove", this.moveHandle);
			g.cvs.addEventListener("mouseup", this.upHandle);
		}else {
			g.cvs.removeEventListener("mousedown", this.downHandle);
			g.cvs.removeEventListener("mousemove", this.moveHandle);
			g.cvs.removeEventListener("mouseup", this.upHandle);
		}
		
	}
	draw() {
		this.drawBase();
		this.drawBiArrow();
		this.drawBjArrow();
	}
	//绘制向量g.bi和g.bj
	drawBase() {
		g.ctx.save();
		g.ctx.lineWidth = 4;
		g.ctx.strokeStyle = "blue";
		util.drawLineByV(new Vector(0, 0), g.bi);
		g.ctx.strokeStyle = "red";
		util.drawLineByV(new Vector(0, 0), g.bj);
		g.ctx.restore();
	}
	drawBjArrow() {
		let xj = -g.bj.x * 100 / g.bj.y;
		let mj = Math.sqrt(xj * xj + 100 * 100);
		//创建向量单位化的向量

		let verVj = new Vector(100 / mj * g.unit / 2, xj / mj * g.unit / 2);
		let lenj = vectorUtil.numMultip(g.bj, 0.2);
		let leftj = vectorUtil.sub(vectorUtil.add(g.bj, verVj), lenj);
		let rightj = vectorUtil.sub(vectorUtil.sub(g.bj, verVj), lenj);
		//绘制I的箭头
		g.ctx.save();
		g.ctx.strokeStyle = "#f00";
		g.ctx.lineWidth = 4;
		util.drawLineByV(g.bj, leftj);
		util.drawLineByV(g.bj, rightj);
		g.ctx.restore();
	}
	//绘制向量g.bi和g.bj的箭头
	drawBiArrow() {
		/*求出任意的一个this.baseI的重直向量的单位向量，根据向量叉乘等于0,
				  设所求向为(xi, 100),则有
				  this.baseI.x*xi + this.baseI.y*100 = 0
				  求出根据方向求出xi,得到所求向量 (xi,100),再把该向量单位化。
				*/
		let xi = -g.bi.y * 100 / g.bi.x;
		let mi = Math.sqrt(xi * xi + 100 * 100);
		//创建向量单位化的向量
		let verVi = new Vector(xi / mi * g.unit / 2, 100 / mi * g.unit / 2);
		let leni = vectorUtil.numMultip(g.bi, 0.2);
		let lefti = vectorUtil.sub(vectorUtil.add(g.bi, verVi), leni);
		let righti = vectorUtil.sub(vectorUtil.sub(g.bi, verVi), leni);
		//绘制I的箭头
		g.ctx.save();
		g.ctx.strokeStyle = "#00f";
		g.ctx.lineWidth = 4;
		util.drawLineByV(g.bi, lefti);
		util.drawLineByV(g.bi, righti);
		g.ctx.restore();
	}

	update() {

	}
}
