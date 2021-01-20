const vectorUtil = {
	add(v1, v2) {
		let v = new Vector(v1.x+v2.x, v1.y+v2.y);
		return v;
	},
	sub(v1,v2) {
		let v = new Vector(v1.x-v2.x, v1.y-v2.y);
		return v;
	},
	numMultip(v, num) {
		let newV = new Vector(v.x*num, v.y*num);
		return newV;
	},
}