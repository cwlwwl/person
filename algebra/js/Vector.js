class Vector {
	//参数x,y的值要求用自定义坐标系中的值
	constructor(x,y) {
	    this.x = x;
		this.y = y;
	}
	//加
	add(vector) {
		this.x += vector.x;
		this.y += vector.y;
		return this;
	}
	//减
	sub(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
		return this;
	}
	//数乘 取返就是乘以-1
	numMultip(num) {
		this.x *= num;
		this.y *= num;
		return this;
	}
}