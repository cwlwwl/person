let util = {
	//得到两个坐标点之间的距离，p1、p2是二级数组，元素是坐标值(x,y)
	getTwoPLen: function(p1, p2) {
		let x1 = p1[0];
		let y1 = p1[1];
		let x2 = p2[0];
		let y2 = p2[1];
		return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	},
	//得到两向量点之前的距离, v1、v2是Vector对象
	getTwoVLen(v1, v2) {
		let x1 = v1.x;
		let y1 = v1.y;
		let x2 = v2.x;
		let y2 = v2.y;
		return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	},
	//绘制线,p1,p2是表示自定义从标系下两个点的坐标系
	drawLineByP: function(p1, p2) {
		p1 = coordinate.toCanvas(p1);
		p2 = coordinate.toCanvas(p2);
		g.ctx.beginPath();
		g.ctx.lineTo(p1[0], p1[1]);
		g.ctx.lineTo(p2[0], p2[1]);
		g.ctx.stroke();
	},
	//绘制线,v1,v2是向量Vector对象
	drawLineByV: function(v1, v2) {
		let p1 = [v1.x, v1.y];
		let p2 = [v2.x, v2.y];
		this.drawLineByP(p1, p2);
	},

	//绘制圆，p表示自定义坐标系中点的从坐标, r是圆半径
	drawArcByP: function(p, r) {
		p = coordinate.toCanvas(p);
		g.ctx.save();
		g.ctx.beginPath();
		g.ctx.arc(p[0], p[1], r, 0, 2 * Math.PI, false);
		g.ctx.fill();
	},
	//绘制圆，v是Vector向量对象
	drawArcByV: function(v, r) {
		this.drawArcByP([v.x, v.y], r);
	},
	//绘制文字, pOfv数组或Vector
	drawText: function(pOfv, text) {
		let p = [];
		if (pOfv instanceof Vector) {
			p.push(pOfv.x);
			p.push(pOfv.y);
		}else {
			p = pOfv;
		}
		p = coordinate.toCanvas(p);
		g.ctx.fillText(text, p[0], p[1]);
		g.ctx.stroke();
		g.ctx.fill();
	}
}
