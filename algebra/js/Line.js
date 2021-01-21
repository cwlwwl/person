
class Line {
	constructor() {
		console.log("创建了Line")
		/*
			装{mn1:v1, mn2:v2}
			v1和v2表示线的起点和终点向量
		*/
		this.amn = [];
		//事件处理函数
		this.downHandle = null;
		this.moveHandle = null;
		this.upHandle = null;
		this.initHandle();
	}
	//flag的true或false来决定加入或移除事件处理函数
	setDrawLine(flag) {
		if(flag) {//加入事件处理函数
			g.cvs.addEventListener("mousedown", this.downHandle);
			g.cvs.addEventListener("mousemove", this.moveHandle);
			g.cvs.addEventListener("mouseup", this.upHandle);
		}else {//移除事件处理函数
			g.cvs.removeEventListener("mousedown", this.downHandle);
			g.cvs.removeEventListener("mousemove", this.moveHandle);
			g.cvs.removeEventListener("mouseup", this.upHandle);
		}
	}
	draw() {
		let mn = null;
		for(let i=0; i<this.amn.length; i++) {
			mn = this.amn[i];
			if(!mn.mn2) {
				return;
			}
			let vab1 = vectorUtil.mmv(g.bi, g.bj, mn.mn1);
			vab1.x = Math.round(vab1.x);
			vab1.y = Math.round(vab1.y);
			
			let vab2 = vectorUtil.mmv(g.bi, g.bj, mn.mn2);
			vab2.x = Math.round(vab2.x);
			vab2.y = Math.round(vab2.y);
			
			g.ctx.save();
			g.ctx.lineWidth = 3;
			g.ctx.strokeStyle = "green";
			util.drawLineByV(vab1, vab2);
			g.ctx.restore();
		}
	}
	update() {
	}
	
	//初始化事件处理函数
	initHandle() {
		//根据矩阵|g.bi g.bj|和|p|得到右乘向量
		let getV = (e)=>{
			let p = coordinate.toSelf([e.layerX, e.layerY]);
			let vab = new Vector(p[0], p[1]);
			//计算出向量是由g.bi和g.bj右乘什么向量而得到
			let mn = vectorUtil.mdv(g.bi, g.bj, vab);
			return mn;
		}
		this.downHandle = e=>{
			this.amn.push({state:0, mn1:getV(e)})
		}
		this.moveHandle = e=>{
			if(this.amn.length==0) {
				return;
			}else if(this.amn[this.amn.length-1].state==0) {
				this.amn[this.amn.length-1].mn2=getV(e);
			}
		}
		this.upHandle = e=>{
			if(this.amn[this.amn.length-1].state==0) {
				this.amn[this.amn.length-1].mn2=getV(e);
				this.amn[this.amn.length-1].state=1;
			}
		}
	}
}