let util = {
	drawLine1: function(ctx, p1, p2) {
		ctx.beginPath();
		p1 = coordinate.coordinateToCanvas(p1);
		p2 = coordinate.coordinateToCanvas(p2);
		ctx.lineTo(p1[0], p1[1]);
		ctx.lineTo(p2[0], p2[1]);
		ctx.stroke();
	},
	drawLine2: function(ctx, v1, v2) {
		let p1 = [v1.x, v1.y];
		let p2 = [v2.x, v2.y];
		this.drawLine1(ctx, p1, p2);
	},
	
	 
	drawArc1: function(ctx, p) {
		p = coordinate.coordinateToCanvas(p);
		ctx.save();
		ctx.beginPath();
		ctx.arc(p[0], p[1], 4, 0, 2*Math.PI, false);
		ctx.fill();
		ctx.stroke();
	},
	 
	drawArc2: function(ctx, v) {
		let point = [v.x, v.y];
		this.drawArc1(ctx, point);
	},
	//求两点之间的距离 
	getLen1: function(p1,p2) {
		let x1 = p1[0];
		let y1 = p1[1];
		let x2 = p2[0];
		let y2 = p2[1];
		
		return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
	},
	getLen2: function(v1,v2) {
		let p1 = [v1.x, v1.y];
		let p2 = [v2.x, v2.y];
		return this.getLen1(p1, p2);
	}
}